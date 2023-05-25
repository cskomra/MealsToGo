import React from "react";

import { 
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    Title,
} from "../components/account.styles";
import { Spacer} from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals to Go</Title>
            <AccountContainer>
                <AuthButton
                    mode="contained"
                    icon="lock-open-outline"
                    onPress={() => navigation.navigate("Login")}
                >Login</AuthButton>
                <Spacer size="large"/>
                <AuthButton
                    mode="contained"
                    icon="email"
                    onPress={() => navigation.navigate("Register")}
                >Register</AuthButton>
            </AccountContainer>
        </AccountBackground>);
}