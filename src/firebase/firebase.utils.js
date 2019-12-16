import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBl9hCgY0wtla_z4os3Ml1tJ62vjMaO26E",
  authDomain: "crwn-db-aaa01.firebaseapp.com",
  databaseURL: "https://crwn-db-aaa01.firebaseio.com",
  projectId: "crwn-db-aaa01",
  storageBucket: "crwn-db-aaa01.appspot.com",
  messagingSenderId: "537760428755",
  appId: "1:53776042 8755:web:061365fbaf600d4e649a26",
  measurementId: "G-FWZT5LT7CW"
};

export const createUserProfileDocument = async (userAuth, additional) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  // console.log(snapshot);
  // return;

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additional
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  // console.log(snapshot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
