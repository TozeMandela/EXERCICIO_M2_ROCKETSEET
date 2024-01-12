import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    min-height: 56px;
    max-height: 56px;
    margin: 10px 0px;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE };
    padding: 10px;
    flex: 1;
`;