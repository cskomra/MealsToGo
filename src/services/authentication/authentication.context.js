import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            console.log("user: ", userCredential.user);
            setIsAuthenticated(true);
            setIsLoading(false);
          }) 
          .catch((err) => { 
            const errorCode = err.code;
            const errorMessage = err.message;
            setError(`${errorCode}: ${errorMessage}`);
            console.log("Auth Error code: ", errorCode, "Error message: ", errorMessage)})
    };

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}