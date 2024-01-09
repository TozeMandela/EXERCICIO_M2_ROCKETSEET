import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";


export const Container = styled(TouchableOpacity)`
    width: '100%';
    height: 60px;

    margin: 10px 0;
    padding: 10px;
  `;

export const Text = styled.Text`
color: ${({theme})=>theme.COLORS.WHITE};
`;

export const GroupIcon = styled(UsersThree).attrs(({theme})=>({
    color: theme.COLORS.GREEN,
    size: 32
}))`

`;

