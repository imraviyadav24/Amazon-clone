import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-5m2KjymOBSpIdFkZlvqh99ndUW-h6Ok",
    authDomain: "clone-d3c4f.firebaseapp.com",
    projectId: "clone-d3c4f",
    storageBucket: "clone-d3c4f.appspot.com",
    messagingSenderId: "484295578901",
    appId: "1:484295578901:web:94b68e535d2914bc1e451c",
    measurementId: "G-3MDVED1TNX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };