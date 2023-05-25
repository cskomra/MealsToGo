import React, { useState, useContext} from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { 
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
    Title,
    ErrorContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, isLoading, error } = useContext(AuthenticationContext);

    return <AccountBackground>
        <AccountCover />
        <Title>Meals to Go</Title>
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
            <AuthInput 
                label="Repeat Password"
                value={repeatedPassword}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                secure
                onChangeText={(r) => setRepeatedPassword(r)}
            />
            <ErrorContainer>
                {error && (<Text style={{paddingBottom: 16}} variant="error">{error}</Text>)}
            </ErrorContainer>
            {!isLoading ? 
            (<AuthButton 
                icon="email"
                mode="contained"
                onPress={() => onRegister(email, password, repeatedPassword)}
            >Register</AuthButton>
            ) : (<ActivityIndicator animating={true} color={MD2Colors.blue300} />)}
        </AccountContainer>
        <Spacer size="large" />
        <AuthButton 
            mode="contained"
            onPress={() => navigation.goBack()}
        >Back</AuthButton>
        
    </AccountBackground>;
}