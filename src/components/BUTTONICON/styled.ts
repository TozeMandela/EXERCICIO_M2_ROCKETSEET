import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";


export type ButtonIconStyleProps = 'PRIMARY' | 'SECONDARY';

type props = {
    type: ButtonIconStyleProps;
}



export const Container = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    min-height: 56px;
    max-height: 56px;
    margin-left: 10px;
`;


export const Icon = styled(MaterialIcons)<props>`
    font-size: 30px;
    padding: 10px;
    align-self: center;
    color: ${({theme, type})=> type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

`;