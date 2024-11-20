// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1t-_q6Hqg8DVvWHDrtfm3xObGR4ORAU",
  authDomain: "assignment-nine-project-ea71a.firebaseapp.com",
  projectId: "assignment-nine-project-ea71a",
  storageBucket: "assignment-nine-project-ea71a.firebasestorage.app",
  messagingSenderId: "75785857478",
  appId: "1:75785857478:web:e71fb6d509faaeebe6aac7",
  measurementId: "G-TFP4HT6Q86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const GoogleAuthProvider = new GoogleAuthProvider();
export default app