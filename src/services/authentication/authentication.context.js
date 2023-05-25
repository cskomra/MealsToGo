import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const authHandlers = {
        success: (userCredential) => {
            setUser(userCredential.user);
            setIsLoading(false);
        },
        error: (e) => { 
            setIsLoading(false);
            setError(e.toString());
        },
    }

    const onLogin = async (email, password) => {
        setIsLoading(true);
        loginRequest(email, password, authHandlers);
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
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