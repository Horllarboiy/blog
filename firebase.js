// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDk4Prk3Cu-NT3wCARoVbfaSK1eigAEuTg",
  authDomain: "secretsite-61dad.firebaseapp.com",
  databaseURL: "https://secretsite-61dad.firebaseio.com",
  projectId: "secretsite-61dad",
  storageBucket: "secretsite-61dad.appspot.com",
  messagingSenderId: "290347493665",
  appId: "1:290347493665:web:ed9986e9c3f0f256ed3660",
  measurementId: "G-BV2HGBKNDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };

