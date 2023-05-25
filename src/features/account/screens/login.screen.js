import React, { useState, useContext} from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { 
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error } = useContext(AuthenticationContext);

    return <AccountBackground>
        <AccountCover />
        <AccountContainer>
            <AuthInput 
                label="Email"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(u) => setEmail(u)}
            />
            <Spacer size="large" />
            <AuthInput 
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                secure
                onChangeText={(p) => setPassword(p)}
            />
            <Spacer size="large" />
            <AuthButton 
                icon="lock-open-outline"
                mode="contained"
                onPress={() => onLogin(email, password)}
            >
                Login
            </AuthButton>
            {error && (
                <Spacer size="large">
                    <Text variant="error">{error}</Text>
                </Spacer>
            )}
        </AccountContainer>
    </AccountBackground>;
}