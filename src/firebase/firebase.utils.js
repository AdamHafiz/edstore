import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqqeJjqxKmn9XCrKKgARKyoXH2cu5eo7Q",
  authDomain: "edstore-fc79d.firebaseapp.com",
  projectId: "edstore-fc79d",
  storageBucket: "edstore-fc79d.appspot.com",
  messagingSenderId: "397361887641",
  appId: "1:397361887641:web:14fcd33729f1fbe2473b08",
  measurementId: "G-W111VXCH7Z",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
