import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvcdtP4kmIUcIn7IIEtDa3K_yzD9_om7s",
  authDomain: "house-marketplace-app-d8621.firebaseapp.com",
  projectId: "house-marketplace-app-d8621",
  storageBucket: "house-marketplace-app-d8621.appspot.com",
  messagingSenderId: "537996142615",
  appId: "1:537996142615:web:13c8bf7aeb4b37656b1452",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
