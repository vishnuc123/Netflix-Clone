// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx4mNq6AeoVQ3H0M55GED74W0TX5Xv6bE",
  authDomain: "netflix-808e7.firebaseapp.com",
  projectId: "netflix-808e7",
  storageBucket: "netflix-808e7.firebasestorage.app",
  messagingSenderId: "1076781289835",
  appId: "1:1076781289835:web:e8b73344609b4a73717c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)