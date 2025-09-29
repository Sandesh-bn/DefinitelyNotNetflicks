// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrJF9BbjbQeTg9IjI_wtUmnPERmpThBJg",
  authDomain: "netflix-live-2664d.firebaseapp.com",
  projectId: "netflix-live-2664d",
  storageBucket: "netflix-live-2664d.firebasestorage.app",
  messagingSenderId: "14339991567",
  appId: "1:14339991567:web:04b2343698cdfec19f9b7a",
  measurementId: "G-XV9BF8Z6JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);