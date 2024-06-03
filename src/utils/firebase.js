// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk4A4xCGPyFM6mv8DeK1nv0vlvOEb46o8",
  authDomain: "my-movies-5b1f6.firebaseapp.com",
  projectId: "my-movies-5b1f6",
  storageBucket: "my-movies-5b1f6.appspot.com",
  messagingSenderId: "899021963340",
  appId: "1:899021963340:web:403cdb660ab75e850874e9",
  measurementId: "G-6KY3CYW605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();