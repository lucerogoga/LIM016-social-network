# Social Network "Yami"

## Índex

* [0. Link al deploy de la app](https://lucerogoga.github.io/social-network/src/#/)
* [1. Preámble](#1-preámbulo)
* [2. Yami, a culinary adventure](#2-yami-a-culinari-adventure)
* [3. User histories](#3-user-histories)
* [4. Design process](#4-desing-process)
* [5. Deploy](#5-deploy)


## 1. Preamble

### What is a social network?

It is a community formed by users who interact with each other through an Internet platform.

The objective of social networks is to create a community by bringing together users (they can be friends, families, colleagues, clients or companies) with similar interests, so that they can share information, photos, videos, ideas and messages. In the case of companies, it helps with brand recognition, promotion of products/services and to resolve customer queries.
We could say that the main uses of a social network are: *share, inform, interact and market.*

### Social media about food

The gastronomic world follows trends like fashion and lifestyle, visible through platforms like magazines, Pinterest, and hashtags. Social networks such as Instagram, Pinterest, and Tasty dominate discussions, while apps like Recon meet diverse needs, allowing users to share restaurant experiences, rate establishments, search for restaurants, and organize outings.

In Peru, no platform fully integrates these features. Options like Mesa 24/7, blogs, and Facebook groups help users find restaurants and huariques but lack comprehensive information. Food enthusiasts often seek product recommendations, nutritional data, tutorials, rankings, and restaurant suggestions.

Without a centralized solution, users must gather information from multiple sources, creating a fragmented and inefficient experience.

## 2. Yami, a culinary adventure

Our project, Yami, is a social network designed for users interested in exploring, interacting, and sharing their culinary experiences—from trying a new recipe to reviewing a recently visited restaurant. The application will allow users to share posts with questions, tutorials, recipes (with or without photos), reviews, and much more.

The project will be developed as a Single-Page Application (SPA), meaning it will load a single HTML file initially and dynamically render different views using JavaScript based on user interactions.

To provide full social networking functionality, we will implement user authentication, collect user information, and store photos. For this, we will utilize Firebase, a cloud-based platform offering various services for app development. Specifically, we will use Firebase Authentication, Firestore Database, and Storage services.

The application will be deployed through GitHub Pages, using the main repository for hosting.

<p align="center" width="100%"><img src="https://github.com/lucerogoga/LIM016-social-network/blob/main/public/yami-intro.PNG" width=400></p>

### Survey analysis

We conducted a survey to understand local user preferences. Over 90% showed interest in a food-focused social network, with 70% identifying as food enthusiasts, suggesting potential to engage the remaining 30%.

While only 17.6% prefer cooking, 41.2% enjoy dining out or ordering food, and 41.2% are undecided. Dining enthusiasts mainly rely on recommendations from friends or social media, while aspiring cooks seek tips, recipes, tutorials, and product advice. Respondents also valued restaurant rankings, kitchen tool recommendations, nutritional information, and restaurant ratings.

## 3. User Stories

With the information collected in the survey, we divided our User Stories into two stages.

### MVP

a. As a visitor, I want to register to have an account in the app.
  <details><summary>Acceptance criteria</summary><p>

  * The visitor must not have previously registered
  * A valid email must be entered
  * A password of 6-14 digits must be entered (with at least one capital letter, one number and one symbol)
  * The password input must be secret
  * If one or both fields are empty or do not meet the requirements, an error message will appear
  * When clicking on Terms and Conditions, a modal will open to show the document
  * You must click on Register to validate your data
  * The visitor can also register with their Google data
  * If the data is valid, additional data will be requested to complete the process</p></details>
  
  <details><summary>Definition of finished</summary><p>
  
  * Manual data verification in Firebase Authentication
  * Usability testing</p></details>

b. As a registered user, I want to log in to access the content of the application.

  <details><summary>Acceptance criteria</summary><p>

  * The user must already be registered
  * The user must enter the email and password with which he/she registered
  * The password input must be secret
  * The user must click on the Login button to validate his/her data and access the app
  * The user will only be able to log in if his/her data is valid
  * If one or both fields are empty, he/she will not be able to log in and an error message will appear
  * By clicking on I forgot my password, an email will be sent to reset the password
  * The user will also be able to log in with his/her Google data
  * If the user is not registered, he/she can click on Register and proceed to the registration window</p></details>
  
  <details><summary>Definition of finished</summary><p>
  
* Manual data verification in Firebase Authentication
* Usability testing</p></details>
  
c. As a user, I want to publish posts to express my doubts, opinions or culinary tips with other users.

  <details><summary>Acceptance criteria</summary><p>

  * User must be logged in
  * Input cannot be empty
  * Posts must be visible from the dashboard and forum
  * Posts must include the name of the user who posted it
  * User must click on the + icon and choose Post, which takes them to a view with the input and a button to post
  * When you click on post, your post will be added to the Forum section and the dashboard</p></details>
  
  <details><summary>Definition of finished</summary><p>
  
* Manual verification of data in Firestore Database
* Usability testing</p></details>
  
d. As a user, I want to be able to give and remove my like from a post/review, to indicate that I like or dislike its content. 

  <details><summary>Acceptance criteria</summary><p>

* User must be logged in
* Each post/review must have a Like button
* The post/review must have a count of the Likes received
* The user can only give one Like per post/review
* If the user clicks the Like button on a post that was not previously Liked, the user will add a Like to the Like count of the post/review
* If the user clicks the Like button again on a previously Liked post, the user will remove a Like from the Like count of the post/review</p></details>
  
  <details><summary>Definition of finished</summary><p>
  
* Manual verification of data in Firestore Database
* Usability testing</p></details>
  
e. As a user, I want to edit my post/review, to update the information entered as I see fit.

  <details><summary>Acceptance criteria</summary><p>

* The user must be logged in
* The user must have already published a post/review that they want to edit
* They must click on the ellipsis button of the post they want to edit and choose the Edit option
* They will be directed to the view used to publish the post/review, where the text will appear in the input and they can edit it
* To save the changes, they must click on the Save button
* The edited post/review must appear in the dashboard and corresponding section with the edited information
* When reloading the page, the texts should appear as they were edited</p></details>
  
  <details><summary>Definition of finished</summary><p>

* Manual verification of data in Firestore Database
* Usability testing</p></details>
  
f. As a user, I want to delete my post/review, to stop sharing this information with other users.

  <details><summary>Acceptance criteria</summary><p>

* The user must be logged in
* The user must have already published a post/review that they wish to delete
* They must click on the ellipsis button of the post they wish to delete and choose the Delete option
* A modal window appears on the screen asking if the user is sure to delete the post
* If they choose OK, the post/review will be deleted from the dashboard and the corresponding section
* If they choose Cancel, the post/review will remain</p></details>
  
  <details><summary>Definition of finished</summary><p>
  
* Manual verification of data in Firestore Database
* Usability testing</p></details>
  
### Hacker edition

a. As a user, I want to be able to comment on a post of mine or someone else's, to express myself about the content of the post.

<details><summary>Acceptance criteria</summary><p>

* User must be logged in
* Comment must be made on an existing post
* Each post must have a comment input and a submit button
* Comment must have the user's avatar, name, message, and time of posting
* Comment must be able to be liked/unliked by all users
* Only one like is allowed per user
* Each comment made by the user must have an options button
* Comment options are edit (which opens a modal to edit) and remove (which displays a modal to confirm)</p></details>

  <details><summary>Definition of finished</summary><p>
  
* Manual verification of subcollection in Firestore Database
* Usability testing</p></details>
  
b. As a user, I want to add images to my posts, to better describe my post.

<details><summary>Acceptance criteria</summary><p>

* The user must be logged in
* The user must be creating/editing a post
* The post must have text
* Clicking on the image field should open a window to choose an image from the local files
* The input must contain the name of the file
* Below in a div a preview of the uploaded image will be displayed
* The timeline will render the post with the image below the text
* The image will be centered occupying a size that does not deform the post
* When editing, in the modal, the image appears with the option to delete it and allowing to add a new one
  </p></details>
  
  <details><summary>Definition of finished</summary><p>
  
 * Manual verification of data in Firestore Database and Storage
* Usability testing</p></details>

c. As a user, I want to be able to edit my profile, so I can change my information to my liking.

<details><summary>Acceptance criteria</summary><p>

 * The user must be logged in
* The user can only edit their own profile
* When entering the profile and clicking on Edit profile, you will be redirected to a screen with the current user information (avatar, name, date of birth and email)
* By clicking on the Edit button, a modal will appear where you can edit your data
* The fields cannot be left empty, except for the date of birth
* If there is an error, a descriptive message will appear
* When the changes are made, a message will confirm it
* To change the password, click on the "Change password" text
* You will be asked to enter the current password and enter the new password twice
* There will be error messages if you enter the wrong current password or enter an inappropriate new password
* When the changes have been saved, the message "Changes made!" will appear
  </p></details>
  
  <details><summary>Definition of finished</summary><p>
  
* Manual verification of data in Firestore Authentication, Firestore Database and Storage
* Usability testing</p></details>

## 4. Design process

[View in slides](https://www.canva.com/design/DAGXhgpeDDU/NDkScoHxC7AzZXzF5jcBZQ/edit?utm_content=DAGXhgpeDDU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## 5. Deploy

[YAMI](https://lucerogoga.github.io/social-network/src/#/)
