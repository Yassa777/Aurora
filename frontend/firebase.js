// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB18f_5kW60qdejj4C0db51-ozMKp3lHPQ",
  authDomain: "aurora-814b6.firebaseapp.com",
  projectId: "aurora-814b6",
  storageBucket: "aurora-814b6.firebasestorage.app",
  messagingSenderId: "221530808142",
  appId: "1:221530808142:web:c175e5c2bb7a86197fc81f",
  measurementId: "G-DQK1KVY83X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
