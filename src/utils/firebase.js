// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJdt2pTOnzXvU2gl7jBIRzM8wxNPkky5g",
  authDomain: "netflixgpt-df977.firebaseapp.com",
  projectId: "netflixgpt-df977",
  storageBucket: "netflixgpt-df977.appspot.com",
  messagingSenderId: "849171611603",
  appId: "1:849171611603:web:2007e60384d38870cd7926",
  measurementId: "G-W7JXS97F9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
