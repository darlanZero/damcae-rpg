// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr4dUaPS5R3iib53eB4B9xP680ju7a8rg",
  authDomain: "rpg-damcae.firebaseapp.com",
  projectId: "rpg-damcae",
  storageBucket: "rpg-damcae.appspot.com",
  messagingSenderId: "495358938944",
  appId: "1:495358938944:web:1fdb872f093589e75034a5",
  measurementId: "G-MQJWH6T7S9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
console.log(analytics)