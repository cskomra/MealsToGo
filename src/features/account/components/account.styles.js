import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput, Text} from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg"),
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
    "buttonColor": colors.brand.primary,
    "textColor": "white",
    "uppercase": true,
})`
    padding: ${(props) => props.theme.space[2]};
    border-radius: 3px;
`;

export const AuthInput = styled(TextInput)`
    width: 300px;
`;

export const Title = styled(Text)`
    font-size: 30px;
`
export const ErrorContainer = styled.View`
    max-width: 300px;
    align-items: center;
    align-self: center;
    margin: ${(props) => props.theme.space[2]} 0;
`;

export const AnimationWrapper = styled.View`
    position: absolute;
    width: 100%;
    height: 40%;
    top: 30px;
    padding: ${(props) => props.theme.space[2]};
`;
