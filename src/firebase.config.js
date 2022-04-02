import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDubhqqcE00ZfolHg29v0c5101gVoStEGg",
  authDomain: "house-marketplace-app-908pb.firebaseapp.com",
  projectId: "house-marketplace-app-908pb",
  storageBucket: "house-marketplace-app-908pb.appspot.com",
  messagingSenderId: "558714338102",
  appId: "1:558714338102:web:2b21f18a0511cd3c59d197"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();