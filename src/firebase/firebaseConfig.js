
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_W_SCcKUPanKZCwg8sC3X_tUaS2y-UbQ",
  authDomain: "proyecto-final-reactjs-8b691.firebaseapp.com",
  projectId: "proyecto-final-reactjs-8b691",
  storageBucket: "proyecto-final-reactjs-8b691.appspot.com",
  messagingSenderId: "953555369531",
  appId: "1:953555369531:web:dc5af64d0bda895952661e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);