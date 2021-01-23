
import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyC4jbcjSdatKCCkYWYx6GpuloyciW2ULUE",
  authDomain: "vacinasp-ed226.firebaseapp.com",
  projectId: "vacinasp-ed226",
  storageBucket: "vacinasp-ed226.appspot.com",
  messagingSenderId: "677052977510",
  appId: "1:677052977510:web:8daa4434b112731a3438a7",
  measurementId: "G-9M71RTDQFJ"
};

if(!firebase.apps.length){

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
}

export default firebase;