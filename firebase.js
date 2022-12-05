// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBy0htDU1h_fmW8sqUfBEpKAujUdXLxfY",
  authDomain: "responslywebsite.firebaseapp.com",
  projectId: "responslywebsite",
  storageBucket: "responslywebsite.appspot.com",
  messagingSenderId: "456926033991",
  appId: "1:456926033991:web:8c5c45f969799ab04ad962",
  measurementId: "G-KGDTDZLLCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
