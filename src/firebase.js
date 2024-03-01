import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpmJB6bRWWDB5e6Nlac4ZXhFeGjVBy9Ao",
  authDomain: "chatapp-2042a.firebaseapp.com",
  projectId: "chatapp-2042a",
  storageBucket: "chatapp-2042a.appspot.com",
  messagingSenderId: "79028540841",
  appId: "1:79028540841:web:e34fcbbb3442bd3b6420b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()