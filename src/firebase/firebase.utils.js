import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKCLiwtrCe5DWBunujcyWZPMmeLWIH8x4",
    authDomain: "crwn-clothing-641ed.firebaseapp.com",
    databaseURL: "https://crwn-clothing-641ed.firebaseio.com",
    projectId: "crwn-clothing-641ed",
    storageBucket: "crwn-clothing-641ed.appspot.com",
    messagingSenderId: "585475145303",
    appId: "1:585475145303:web:0ee7390f64648e3b192d12",
    measurementId: "G-KDLRN5Q9BQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({})

  export const signInWith 