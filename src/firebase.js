import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAxUR4qaJmBeGaw8vUXLczsnbVUFrFexM",
  authDomain: "avalanchechess.firebaseapp.com",
  projectId: "avalanchechess",
  storageBucket: "avalanchechess.appspot.com",
  messagingSenderId: "930827605652",
  appId: "1:930827605652:web:fa2bee7a459647ca924681",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;
