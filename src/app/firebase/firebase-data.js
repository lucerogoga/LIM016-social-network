import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  deleteDoc,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { db } from "../firebase/firebase-initializer.js";
import { auth } from "../firebase/firebase-auth.js";

/******************Agrega un post a FS*********************/
const colRef = collection(db, "posts");

export function addPost(message) {
  const user = auth.currentUser;

  console.log(user);
  console.log("entramos a AddPost");
  return addDoc(colRef, {
    id_user: user.uid,
    user_name: user.displayName,
    user_photo: user.photoURL,
    message,
    date: Date.now(),
    likes: [],
  })
    .then((postDocRef) => {
      console.log("post subido al firestore!");
      return postDocRef
    })
    .catch((err) => console.log(err));
}

/******************Agrega un usuario a FS*********************/
const userRef = collection(db, "users");

// ------------------------------

export function addUser(user, name, password) {
  console.log("este es el user que entra como parámetro", user);

  let nameN,
    emailN,
    photoUrlN,
    logedByN,
    passwordN,
    birthN = null;

  if (user.providerData[0].providerId === "google.com") {
    console.log("estás logueado con google!!");
    nameN = user.displayName;
    emailN = user.email;
    photoUrlN = user.photoURL;
    logedByN = "google";
    passwordN = null;
  } else {
    // Si está logueado con password

    nameN = name;
    emailN = user.email;
    photoUrlN =
      "https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/user.png?alt=media&token=bfe80508-5817-4d84-83e1-6a074a16f198";
    logedByN = "password";
    passwordN = password;
  }

  console.log("entramos a AddUsers");

  const userdoc = doc(db, "users", user.uid); //Creamos un documento con el id de nuestro usuario

  // setDoc lo usamos para especificar un id único que nosotros vamos a colocarle,
  // El addDoc autogenera el id
  return setDoc(userdoc, {
    user_id: user.uid,
    user_name: nameN,
    user_photo: photoUrlN,
    user_createdAt: user.metadata.createdAt,
    user_email: emailN,
    user_password: passwordN,
    user_logedBy: logedByN,
    user_birth: birthN,
  })
    .then(() => {
      console.log("usuario subido al firestore!");
    })
    .catch((err) => console.log(err));
}

/******************Recopila todos los posts*********************/

export async function traerPost() {
  const postsData = [];

  const postsRef = collection(db, "posts");

  const q = query(postsRef, orderBy("date", "desc"));

  const querySnapshotPosts = await getDocs(q);

  querySnapshotPosts.forEach((doc) => {
    const post = doc.data();
    // console.log(post);
    post["post_id"] = doc.id;

    // console.log(post);

    postsData.push(post);
    // console.log(postData)
    // console.log(doc.id, " => ", doc.data());
  });
  // console.log(postsData)
  return postsData;
}

/******************Toggle Likes*********************/

export async function toggleLikes(post_id) {
  // console.log(post.post_id);

  console.log(post_id);
  // en la colección posts, nos vamos a la propiedad "like" (campo) del documento
  const postRef = doc(db, "posts", post_id); // documentRef

  console.log("este es postRef", postRef);
  const userId = auth.currentUser.uid;
  console.log(userId);

  const post = await getDoc(postRef);
  const likes = post.data().likes;
  const userLike = likes.find((like) => {
    //.find defines true o false hasta q las entencia se cumple
    return like === userId;
  });

  if (userLike) {
    await updateDoc(postRef, {
      likes: arrayRemove(userId),
    });
  } else {
    await updateDoc(postRef, {
      likes: arrayUnion(userId),
    });
  }
}

/******************Init Listener Post*********************/

export function initListenerPost(postId, actualizarPost) {
  return onSnapshot(doc(db, "posts", postId), actualizarPost);
}

/******************Init Listener Profile Component*********************/
export function initListenerProfile(userId, actualizarProfile) {
  return onSnapshot(doc(db, "users", userId), actualizarProfile);
}

// ---------------Funciones del post -------------------------------

// Actualizar post

export async function updatePost(post_id, {message, imageUrl=''}) {
  const postRef = doc(db, "posts", post_id);

  return await updateDoc(postRef, {
    message,
    imageUrl
  });
}

// Eliminar post

export async function deletePost(post_id) {
  const postRef = doc(db, "posts", post_id);

  return await deleteDoc(postRef);
}

// Get User Data

export async function getUserData(user_id) {
  const userRef = doc(db, "users", user_id);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return await docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

// Comentar un post

export function addComment(current_user, idPost, comment) {
  const commentsRef = collection(db, "posts", idPost, "comments");

  addDoc(commentsRef, {
    id_user: current_user.uid,
    user_name: current_user.displayName,
    message: comment,
    date: Date.now(),
  })
    .then(() => {
      console.log("comentario en firestore");
    })
    .catch((err) => console.log(err));
}

// todo: AVERIGUAR SI EXISTE ALGÚN METODO EXCLUSIVO PARA SABER SI EL USUARIO EXISTE
// todo: EN FIRESTORE O EN AUTH
export async function isExistingUser(email) {
  const q = query(collection(db, "users"), where("user_email", "==", email));

  const docSnap = await getDocs(q);

  const userEmailMatch = [];

  docSnap.forEach((doc) => {
    console.log("creo que sirve?", doc.data());
    userEmailMatch.push(doc.data());
  });

  let userExist;
  let emailUserSearched;
  let pwdUserSearched;

  console.log("datos del usuarioo", userEmailMatch);

  if (userEmailMatch.length === 0) {
    console.log(userEmailMatch.length);
    userExist = false;
    emailUserSearched = null;
    pwdUserSearched = null;
  } else {
    userExist = true;
    emailUserSearched = userEmailMatch[0].user_email;
    pwdUserSearched = userEmailMatch[0].user_password;
  }

  return {
    emailUserSearched,
    pwdUserSearched,
    userExist,
  };

  // return userExist;
}

export async function traerMisPost(userId) {
  // -------------------
  const q1 = query(
    collection(db, "posts"),
    where("id_user", "==", userId),
    orderBy("date", "desc")
  );

  const querySnapshotPosts = await getDocs(q1);

  const postsFiltradocs = querySnapshotPosts.docs; //Array
  const postsData = [];

  postsFiltradocs.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    const post = doc.data();
    console.log(post);
    post["post_id"] = doc.id;

    console.log(post);

    postsData.push(post);
    // console.log(postData)
    // console.log(doc.id, " => ", doc.data());
  });

  return postsData;
}

// Traer los comentarios

export async function traerComments(id_post) {
  const commentsData = [];

  const commentsRef = collection(db, "posts", id_post, "comments");

  const querySnapshotComments = await getDocs(commentsRef);

  querySnapshotComments.forEach((doc) => {
    const comment = doc.data();
    // comment["post_id"] = doc.id;
    commentsData.push(comment);
    // console.log(postData)
    // console.log(doc.id, " => ", doc.data());
  });
  console.log(commentsData);
  return commentsData;
}

// Actualiza el usuario

export function changePasswordFirestore(user_id, password) {
  console.log("función updateUser va a actualizar los datos");
  const userDocRef = doc(db, "users", user_id);

  updateDoc(userDocRef, {
    user_password: password,
  })
    .then(() => {
      console.log("Si se actualizó el usuario en el firestore ");
    })
    .catch((err) => {
      console.log("No se puede actualizar el usuario en el firestore ", err);
    });
}

export function changeBasicDataFirestore(user_id, objNewData) {
  console.log("función updateUser va a actualizar los datos");
  const userDocRef = doc(db, "users", user_id);

  updateDoc(userDocRef, {
    user_photo: objNewData.user_photo,
    user_name: objNewData.user_name,
    user_birth: objNewData.user_birth,
    user_email: objNewData.user_email,
  })
    .then(() => {
      console.log("Si se actualizó el usuario en el firestore ");
    })
    .catch((err) => {
      console.log("No se puede actualizar el usuario en el firestore ", err);
    });
}
