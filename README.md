# Red Social "Yami"

## Índice

* [0. Link al deploy de la app](https://lucerogoga.github.io/LIM016-social-network/src/#/)
* [1. Preámbulo](#1-preámbulo)
* [2. Yami, una aventura culinaria](#2-yami-una-aventura-culinaria)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Proceso de diseño](#4-proceso-de-diseño)
* [5. Resultados del testeo](#5-resultados-del-testeo)
* [6. Producto final](#6-producto-final)


## 1. Preámbulo

### ¿Qué es una red social?

Es una comunidad formada por usuarios que se relacionan entre ellos mediante una plataforma de Internet.  

El objetivo de las redes sociales es crear una comunidad reuniendo usuarios (pueden ser amigos, familias, colegas, clientes o empresas) con intereses similares, para que puedan compartir información, fotos, videos, ideas y mensajes.  En el caso de las empresas, ayuda al reconocimento de la marca, promoción de productos/servicios y a resolver dudas de los clientes.
Podríamos decir que los principales usos de una red social, son: *compartir, informar, interactuar y marketear.*

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/readme-images/redes-sociales.jpg" width=500></p>

### Redes sociales sobre comida

Del mismo modo que existen tendencias sobre moda, estilo de vida y salud, el mundo gastronómico año a año tiene sus propias tendencias, las cuales podemos ver reflejadas en periódicos, revistas, Pinterest, hashtags, etc.

Redes como Instagram, Pinterest y Tasty son las que más generan conversación al respecto.  Asimismo, aplicaciones nuevas como Recon, reunen gran parte de las necesidades del usuario: permiten compartir una experiencia en un restaurante y calificarla, compartir recetas, buscar restaurantes y crear eventos con amigos para ir a comer.

Sin embargo, en Perú no existe como tal una red social que cubra todo el espectro de necesidades del usuario.  Aplicaciones como Mesa 24/7, blogs gastronónicos y grupos de Facebook dedicados a encontrar los mejores restaurantes y huariques, no cuentan con toda la información que como usuario se espera.

Generalmente, los seguidores de tendencias gastronómicas buscan información sobre donde conseguir mejores productos, información nutricional, tutoriales, rankings y recomendaciones de restaurantes.

Al no contar con una red que centralice todas estas necesidades, el usuario se ve en necesidad de revisar redes de supermercados, revisar blogs, preguntar en su entorno o leer varios artículos.

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/readme-images/red-comida.jpg" width=500></p>

## 2. Yami, una aventura culinaria

Nuestro proyecto, Yami, es una red social para todo usuario interesado en informarse/interactuar y compartir sus experiencias gastronómicas, desde una receta intentada hasta una reseña de un restaurante que haya visitado.  La aplicación permitirá compartir publicaciones de preguntas, tutoriales, recetas, con o sin fotos, compartir reseñas y mucho más.

Este proyecto será una Single-page Application (SPA), es decir que contará con solo un archivo HTML, que cargará una sola vez y pedirá diferentes vistas hechas en Javascript, dependiendo de la interacción del usuario.

Para garantizar todas las funciones de una red social necesitaremos autenticar a nuestros usuarios, recopilar su información y guardar sus fotos.  Firebase es una plataforma alojada en la nube que ofrece varios servicios para crear y desarrollar aplicaciones, utilizaremos su servicio de Autenticación, Firestore Database y Storage.

El despliegue de la página se hará en Github desde el repositorio principal.

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/readme-images/yami-intro.PNG" width=400></p>

### Análisis de la encuesta

Antes de iniciar la construcción de la aplicación, realizamos una encuesta para conocer mejor al usuario local y cuáles eran sus preferencias.

Más del 90% de encuestadas afirmaron estar interesadas en una red social centrada en comida, es decir, serían parte de las usuarias de nuestra aplicación.  Un 70% de las encuestadas se considera amante de la comida, esto podría sugerir que la existencia de un medio, como el nuestro, podría generar mayor interés en el otro 30% que aún no se considera como tal una amante de la comida.

De las participantes, solo 17.6% prefieren cocinar.  Por otro lado, tanto las que prefieren salir a comer/pedir a domicilio, como las indecisas obtuvieron 41.2%, cada una.

Si prefieren salir a comer, el 64% pide recomendaciones a amigos/familiares y en segundo lugar, buscan lugares nuevos en diferentes redes sociales.

Por otro lado, las que prefieren cocinar o estan aprendiendo, buscan tips de cocina, recetas, tutoriales y recomendaciones de productos.

Finalmente, las encuestadas también mostraron interés en un ranking de restaurantes, recomendaciones de utensilios de cocina, información nutricional, horarios y puntuación de restaurantes.

## 3. Historias de usuario

Con la información recopilada en la encuesta, dividimos nuestras Historias de Usuario en dos etapas.

### Versión básica

a. Yo como visitante, quiero registrarme, para tener una cuenta en la app

  <details><summary>Criterios de aceptación</summary><p>

  * El visitante no debe estar registrado previamente
  *	Debe ingresar un correo válido
  *	Debe ingresar una contraseña de 6-14 dígitos (con al menos una mayúscula, un número y un símbolo)
  *	El input de contraseña debe ser secreto
  *	Si uno o ambos campos están vacíos o no cumplen con lo requerido, aparecerá un mensaje de error
  *	Al clickear sobre Términos y Condiciones, un modal se abre para mostrar el documento
  *	Debe clickear en Registrarme para validar sus datos
  * El visitante también podrá registrarse con sus datos de Google
  * Si los datos son válidos, se pedirán datos adicionales para terminar el proceso</p></details>
  
  <details><summary>Definición de terminado</summary><p>
  
  * Verificación manual de datos en Firebase
  *	Testeo de usabilidad</p></details>

b. Yo como usuario registrado, quiero logearme, para acceder al contenido de la aplicación

  <details><summary>Criterios de aceptación</summary><p>

  *	El usuario debe estar ya registrado
  *	Debe ingresar el correo y contraseña con las que se registró
  *	El input de contraseña debe ser secreto
  *	Debe clickear en el botón de Iniciar sesión para validar sus datos y acceder a la app
  *	El usuario solo podrá logearse si sus datos son válidos
  *	Si uno o ambos campos están vacíos no podrá logearse y aparecerá un mensaje de error
  *	Clickeando en Olvidé mi contraseña, se enviará un correo para reestablecer la contraseña
  *	El usuario también podrá logearse con sus datos de Google
  *	Si el usuario no está registrado, puede clickear en Regístrate y proceder a la ventana de registro</p></details>
  
  <details><summary>Definición de terminado</summary><p>
  
  * Verificación manual de datos en Firebase
  *	Testeo de usabilidad</p></details>
  
c. Yo como usuario, quiero publicar posts, para expresar mis dudas, opiniones o tips culinarios con otros usuarios

  <details><summary>Criterios de aceptación</summary><p>

  *	El usuario debe estar logeado
  *	El input no puede estar vacío
  *	Los posts deben ser visibles desde el dashboard y el foro
  *	Los posts deben incluir el nombre del usuario que lo posteo
  *	El usuario debe clickear sobre el ícono de + y elegir Publicación, que los dirige a una vista con el input y un botón para publicar
  *	Al clickear en publicar, su post será añadido en la sección de Foro y en el dashboard</p></details>
  
  <details><summary>Definición de terminado</summary><p>
  
  * Verificación manual de datos en Firebase
  *	Testeo de usabilidad</p></details>
  
d. Yo como usuario, quiero poder dar y retirar mi like de un post/reseña, para indicar que me agrada o dejó de agradarme su contenido  

  <details><summary>Criterios de aceptación</summary><p>

  *	El usuario debe estar logeado
  *	Cada post/reseña deberá tener un botón de Like
  *	El post/reseña debe llevar un conteo de los Likes recibidos
  *	El usuario solo podrá dar un like por post/reseña
  *	Si el usuario clickea el botón de Like en un post que no fue Likeado antes, el usuario agregará un Like al conteo de Likes del post/reseña
  *	Si el usuario clickea nuevamente el botón de Like en un post previamente Likeado, el usuario retirará un Like al conteo de Likes del post/reseña</p></details>
  
  <details><summary>Definición de terminado</summary><p>
  
  * Verificación manual de datos en Firebase
  *	Testeo de usabilidad</p></details>
  
e. Yo como usuario, quiero editar mi post/reseña, para actualizar la información ingresada como disponga

  <details><summary>Criterios de aceptación</summary><p>

  *	El usuario debe estar logeado
  *	El usuario debe haber ya publicado un post/reseña que desee editar
  *	Debe clickear sobre el botón de puntos suspensivos del post que desea editar y elegir la opción Editar
  *	Se dirigirá a la vista usada para publicar el post/reseña, donde el texto aparecerá en el input y podrá editarlo
  *	Para guardar los cambios debe clickear en el botón de Guardar
  *	El post/reseña editado debe aparecer en el dashboard y sección correspondiente con la información editada
  *	Al recargar la página los textos deben verse como fueron editados</p></details>
  
  <details><summary>Definición de terminado</summary><p>
  
  * Verificación manual de datos en Firebase
  *	Testeo de usabilidad</p></details>
  
f. Yo como usuario, quiero eliminar mi post/reseña, para dejar de compartir esta información con el resto de usuarios

  <details><summary>Criterios de aceptación</summary><p>

  *	El usuario debe estar logeado
  *	El usuario debe haber ya publicado un post/reseña que desee eliminar
  *	Debe clickear sobre el botón de puntos suspensivos del post que desea eliminar y elegir la opción Eliminar
  *	Una ventana modal aparece en la pantalla preguntando si el usuario está seguro de eliminar el post
  *	Si elige Aceptar, el post/reseña se eliminará del dashboard y la sección correspondiente
  *	Si elige Cancelar, el post/reseña se mantendrá</p></details>
  
  <details><summary>Definición de terminado</summary><p>
  
  * Verificación manual de datos en Firebase
  *	Testeo de usabilidad</p></details>
  
### Hacker edition

a. Comentar un post
b. Añadir imágenes a los posts
c. Editar perfil

## 4. Proceso de diseño

**Inspiración inicial**

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/readme-images/inspo.png" width=700></p>

**Prototipo de baja fidelidad**

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/readme-images/proto-bf.png" width=800></p>

**Prototipo de alta fidelidad**

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/readme-images/proto-af.png" width=900></p>

## 5. Resultados del testeo

### Testeo manual



### Testeo en entrevistas



## 6. Producto final

### Fotos del resultado final

**Vista mobile del timeline**

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/readme-images/yami-real-timeline.PNG" width=300></p>

**Vista mobile del perfil**

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/readme-images/yami-real-profile.PNG" width=300></p>

**Vista desktop**

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/readme-images/yami-desktop.PNG" width=1000></p>

### [Link al deploy de la aplicación](https://lucerogoga.github.io/LIM016-social-network/src/#/)
