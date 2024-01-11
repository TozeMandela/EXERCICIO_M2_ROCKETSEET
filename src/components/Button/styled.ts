import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypes = 'PRIMARY' | 'SECONDARY';

type props = {
    type: ButtonTypes,
}

export const Container = styled(TouchableOpacity)<props>`
    min-height: 56px;
    max-height: 56px;

    background-color: ${({theme, type})=> type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;