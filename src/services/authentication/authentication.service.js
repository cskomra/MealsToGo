import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { firebaseConfig } from "../../firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const loginRequest = (email, password) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    signInWithEmailAndPassword(auth, email, password)
};
