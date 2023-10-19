// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6ea4f.firebaseapp.com",
  projectId: "mern-estate-6ea4f",
  storageBucket: "mern-estate-6ea4f.appspot.com",
  messagingSenderId: "449669809596",
  appId: "1:449669809596:web:e6af9143347eaa423dd7b9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
