// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prompt2web-6cd05.firebaseapp.com",
  projectId: "prompt2web-6cd05",
  storageBucket: "prompt2web-6cd05.firebasestorage.app",
  messagingSenderId: "686021672952",
  appId: "1:686021672952:web:2870fbb8c33b396ada200d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}