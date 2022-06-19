import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoODz_DA3aZLmZ516MIldq446evkPx7vM",
  authDomain: "dashboard10-1fc0a.firebaseapp.com",
  projectId: "dashboard10-1fc0a",
  storageBucket: "dashboard10-1fc0a.appspot.com",
  messagingSenderId: "356527126726",
  appId: "1:356527126726:web:32f38bfb8e2e575b7e7fc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
