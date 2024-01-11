import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export interface props {
    isActive?: boolean;
} 



export const Container = styled(TouchableOpacity)<props>`
    ${({ theme, isActive }) => isActive  && css`
        border:  ${theme.COLORS.GREEN_700}
    `};
    margin: 10px 0px;
    margin-right: 5px;
    padding: 10px;
    border-radius: 8px;
    height: 38px;
    width:90px;

`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-weight: bold;
    text-transform: uppercase;

`;
