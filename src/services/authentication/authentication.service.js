import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

initializeApp(firebaseConfig);
const auth = getAuth();

export const loginRequest = async (email, password, handlers) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(handlers.success)
    .catch(handlers.error);
    onAuthStateChanged(auth, handlers.stateChange);
};

export const registrationRequest = (email, password, handlers) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(handlers.success)
    .catch(handlers.error);
    onAuthStateChanged(auth, handlers.stateChange);
};

export const logoutRequest = (handler) => {
    signOut(auth)
    .then(handler)
}