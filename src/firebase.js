// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBKPzOxYqQBOpEGychaIW56k5Ms4Vftgmw",
    authDomain: "clone-51998.firebaseapp.com",
    projectId: "clone-51998",
    storageBucket: "clone-51998.appspot.com",
    messagingSenderId: "338300668306",
    appId: "1:338300668306:web:3993b73e06556488b6194b",
    measurementId: "G-RJ44JLD86X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };