import React from "react";
import AnimatedLottieView from "lottie-react-native";

import { 
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    Title,
    AnimationWrapper
} from "../components/account.styles";
import { Spacer} from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AnimationWrapper>
                <AnimatedLottieView 
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/watermelon.json")}
                />
            </AnimationWrapper>
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