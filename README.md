# sample.node.firebase

[Firebase Console](https://console.firebase.google.com/)
Using v4.8.0 (firebase and firebase-firestore)

Firebase docs
https://firebase.google.com/docs/web/setup?hl=pt-br
https://firebase.google.com/docs/firestore/manage-data/add-data


Based on idea of [Vanilla-JS-Firebase-firestore](https://github.com/12meann/Vanilla-JS-Firebase-firestore/blob/master/public/js/db.js)


## 1. I´ve created a chanllenge for my pairs: develop a CRUD using HTML and simple javascript, and store data on a Firebase cloud storage using CDN SDK. No nedd to install any kind of framework. Coding just using notepad. Ok, maybe notepad++ :).

## 2. steps

* create a simple HTML5 page
* add CDN Firebase library scripts
* create a form with city name, state and country fields
* create a table to store the city list
* add a submit event to send data to Firestore and table 
* add a delete event to another button
* add an event on row click to send the row data to form
* add a form load event to fill table with existing Firebase data
* add some css to beautify the app

## 3. hints

* use html5 form validation for color fields
* write firebaseConfig data on separated config.js and add into .gitignore 
* delete row from table before update or delete city
