import styled from "styled-components/native";

export const Container = styled.View`
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