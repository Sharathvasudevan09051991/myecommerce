import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChtekFqwgkye2j7054iorliYOG7gqWAD4",
    authDomain: "ecommerce-f040b.firebaseapp.com",
    projectId: "ecommerce-f040b",
    storageBucket: "ecommerce-f040b.appspot.com",
    messagingSenderId: "384391741498",
    appId: "1:384391741498:web:312e007d0997aaeb06b503"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


