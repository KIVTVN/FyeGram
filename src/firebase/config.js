import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDz5WlWV6Ex-DCTNjy0ypB7dEXyBNMnUs0",
  authDomain: "fyegram.firebaseapp.com",
  projectId: "fyegram",
  storageBucket: "fyegram.appspot.com",
  messagingSenderId: "667143678819",
  appId: "1:667143678819:web:38368e76ea73d9a3cb0156",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };
