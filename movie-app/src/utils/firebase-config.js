// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJgNFTEqQi3qRiGQWnXaD9uCQtkEH5eBo",
  authDomain: "react-movie-app-ce70f.firebaseapp.com",
  projectId: "react-movie-app-ce70f",
  storageBucket: "react-movie-app-ce70f.appspot.com",
  messagingSenderId: "12680705156",
  appId: "1:12680705156:web:3305b36502ea1b6b36fed1",
  measurementId: "G-67S3EDCHD4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
