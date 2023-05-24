import React from "react";

import { 
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton
} from "../components/account.styles";
import { Spacer} from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthButton
                    mode="contained"
                    icon="lock-open-outline"
                    onPress={() => navigation.navigate("Login")}
                >Login</AuthButton>
                <Spacer size="large"/>
                <AuthButton
                    mode="contained"
                    icon="lock-open-outline"
                    onPress={() => navigation.navigate("Register")}
                >Register</AuthButton>
            </AccountContainer>
        </AccountBackground>);
}