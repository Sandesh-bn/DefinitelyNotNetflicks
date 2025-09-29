// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUa3BOmQG029WuglKjKdLyAQXJ6cMJ8iI",
  authDomain: "netflix-live-4e796.firebaseapp.com",
  projectId: "netflix-live-4e796",
  storageBucket: "netflix-live-4e796.firebasestorage.app",
  messagingSenderId: "214400914813",
  appId: "1:214400914813:web:9fd7cfde627502462ae814",
  measurementId: "G-4NQ0BTDH64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();