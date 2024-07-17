import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPIsIzo8Y9l9RhIgmYnrwIjiqKoeUpzHg",
  authDomain: "pr-12-edd4b.firebaseapp.com",
  projectId: "pr-12-edd4b",
  storageBucket: "pr-12-edd4b.appspot.com",
  messagingSenderId: "75910443759",
  appId: "1:75910443759:web:863cd567d4db85e09c611a",
  measurementId: "G-N8X2LL06R9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);