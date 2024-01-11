import { css } from "styled-components";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';


export const Container = styled.View`
    ${({theme})=> css`
        padding: 5px;    
        background-color: ${theme.COLORS.GRAY_500};
        flex-direction: row;
        min-height: 56px;
        max-height: 56px;

        align-items: center;
        width: 100%;
        
    `};
    

`;

export const Name = styled.Text`
    ${({theme})=> css`
        flex: 1;
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const IconPeople = styled(MaterialIcons)`
    font-size: 30px;
    color: ${({theme})=> theme.COLORS.GRAY_300};
    margin-right: 10px;
`;