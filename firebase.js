// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.api,
  authDomain: "pantry-tracker-274aa.firebaseapp.com",
  projectId: "pantry-tracker-274aa",
  storageBucket: "pantry-tracker-274aa.appspot.com",
  messagingSenderId: "843826547671",
  appId: "1:843826547671:web:cb5dc9035dc47010619992",
  measurementId: "G-J4V2GZ9Y10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};