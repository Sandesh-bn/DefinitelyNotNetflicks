// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeP73EwFXSmVI54_Fzeii_tHgjC96b68w",
  authDomain: "nflixandchilll.firebaseapp.com",
  projectId: "nflixandchilll",
  storageBucket: "nflixandchilll.firebasestorage.app",
  messagingSenderId: "70947813877",
  appId: "1:70947813877:web:fb0a5a56600e20bf9cc8bc",
  measurementId: "G-D1NMSSJVM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);