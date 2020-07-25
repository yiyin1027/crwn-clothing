import firebase from "firebase/app";

import "firebase/firestore"; //for the database

import "firebase/auth"; // for the auth, it will automatic attach to the firebase key word

var config = {
  apiKey: "AIzaSyAhLQW7VyvTTtUbwV0rok3GwR4UOe9r-fo",
  authDomain: "crwn-db-80049.firebaseapp.com",
  databaseURL: "https://crwn-db-80049.firebaseio.com",
  projectId: "crwn-db-80049",
  storageBucket: "crwn-db-80049.appspot.com",
  messagingSenderId: "784927153720",
  appId: "1:784927153720:web:4343c8eab46305d4f050cd",
  measurementId: "G-E3R8P4HCLS",
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
//google sign in authentication, configuration set up
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

//make sure it pop up google login option
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
