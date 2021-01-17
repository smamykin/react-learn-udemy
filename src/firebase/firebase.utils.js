import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAe9IsZC9yvnGe30D7tqwj-jgPgNDqTpDc",
  authDomain: "crown-db-4670a.firebaseapp.com",
  projectId: "crown-db-4670a",
  storageBucket: "crown-db-4670a.appspot.com",
  messagingSenderId: "649327520076",
  appId: "1:649327520076:web:e47c4aaa8c54d69f2ac7e9",
  measurementId: "G-GJTLBBLSCL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;