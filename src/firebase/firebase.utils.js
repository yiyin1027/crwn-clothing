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

  export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if(!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      };
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;