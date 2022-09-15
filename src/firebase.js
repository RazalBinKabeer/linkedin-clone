import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyAa7G0XvxVWxj7hKrZ6phtRYwNi4kQQwBo",
    authDomain: "linkedin-clone-41185.firebaseapp.com",
    projectId: "linkedin-clone-41185",
    storageBucket: "linkedin-clone-41185.appspot.com",
    messagingSenderId: "897178469744",
    appId: "1:897178469744:web:387573d8dea1872a8afbb5",
    measurementId: "G-75YNKL7SPZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const authentication = firebase.auth;

export { db, authentication };
