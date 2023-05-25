import { firebaseConfig } from "../../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async (email, password, handlers) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
    .then(handlers.success)
    .catch(handlers.error)
};
