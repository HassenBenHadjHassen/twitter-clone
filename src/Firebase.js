import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPTX5WEkZYQYwTdD5ItsUkBmgvfUgeFYc",
    authDomain: "twitter-clone-ea11f.firebaseapp.com",
    projectId: "twitter-clone-ea11f",
    storageBucket: "twitter-clone-ea11f.appspot.com",
    messagingSenderId: "305919364590",
    appId: "1:305919364590:web:498036e3852c808b1012ff",
    measurementId: "G-DLDSTPZF1W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;