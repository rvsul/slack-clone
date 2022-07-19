import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-1TqSNETfyXbb8TdZTirvonRhyMTaMOo",
  authDomain: "slack-5431b.firebaseapp.com",
  projectId: "slack-5431b",
  storageBucket: "slack-5431b.appspot.com",
  messagingSenderId: "1051846432903",
  appId: "1:1051846432903:web:ac670d09b23c69d1184022",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
