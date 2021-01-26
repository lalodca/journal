import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBoaJFlWihrJvNHwVbUNcLbTcFzSWtBM-4",
    authDomain: "react-app-cursos-3be8d.firebaseapp.com",
    databaseURL: "https://react-app-cursos-3be8d.firebaseio.com",
    projectId: "react-app-cursos-3be8d",
    storageBucket: "react-app-cursos-3be8d.appspot.com",
    messagingSenderId: "300755358944",
    appId: "1:300755358944:web:d3c09f5aed3703a77f2c85"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }