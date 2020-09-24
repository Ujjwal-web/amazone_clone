import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCItto6_TR7bTpPzcdfjS5Nerz5_WHBA4A",
  authDomain: "e-clone-55c80.firebaseapp.com",
  databaseURL: "https://e-clone-55c80.firebaseio.com",
  projectId: "e-clone-55c80",
  storageBucket: "e-clone-55c80.appspot.com",
  messagingSenderId: "264995674784",
  appId: "1:264995674784:web:896c31ce87260d6d4787c5",
  measurementId: "G-4ZS2XJP95W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
