import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

// ** this project has been deleted ** 
const firebaseConfig = {
    apiKey: "AIzaSyBP8zas5dC4mChIKy1KBaqDwbQowXStKM4",
    authDomain: "mealstogo-83c56.firebaseapp.com",
    projectId: "mealstogo-83c56",
    storageBucket: "mealstogo-83c56.appspot.com",
    messagingSenderId: "110462527600",
    appId: "1:110462527600:web:460a9b86cf01e0252b6cb5"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const loginRequest = (email, password) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    signInWithEmailAndPassword(auth, email, password)
};
