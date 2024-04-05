// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth"
import * as db from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB205P3rKe4CHN62IA6mmeig1KnOiR2T3g",
  authDomain: "smartpatiente-5f413.firebaseapp.com",
  projectId: "smartpatiente-5f413",
  storageBucket: "smartpatiente-5f413.appspot.com",
  messagingSenderId: "414497549329",
  appId: "1:414497549329:web:d32b699d06ca3dacee95b0",
  measurementId: "G-9M3QQN5W4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default {
    app,
    auth, 
    db
}