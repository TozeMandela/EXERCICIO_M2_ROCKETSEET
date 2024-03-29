import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    flex: 1;
    padding: 40px 30px;
`;

export const Form = styled.View`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    flex-direction: row;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    border-radius: 8px;
    overflow: hidden;

`;

export const ListPlayers = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;

`;

export const NumberOfPlayers = styled.Text`
${({theme})=> css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    
`};
`;