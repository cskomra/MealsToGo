import React, { useContext } from "react";
import { Nav } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
    const { isAuthenticated, user } = useContext(AuthenticationContext)
    console.log("isAuthenticated: ", isAuthenticated);
    return (
        <NavigationContainer>
            {isAuthenticated ? <Nav /> : <AccountNavigator />}
        </NavigationContainer>
        )
};
