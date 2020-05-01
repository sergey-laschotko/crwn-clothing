import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCxohwxKQg1V7-oLN92ZS4HxVDrvf4mfac",
  authDomain: "crwn-db-bd0cd.firebaseapp.com",
  databaseURL: "https://crwn-db-bd0cd.firebaseio.com",
  projectId: "crwn-db-bd0cd",
  storageBucket: "crwn-db-bd0cd.appspot.com",
  messagingSenderId: "568503905589",
  appId: "1:568503905589:web:d2439b4b6c8c69acf4b07c",
  measurementId: "G-J9MJBXXK6V",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
