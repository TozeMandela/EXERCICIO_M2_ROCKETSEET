import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";


export const Container = styled(TouchableOpacity)`
    width: '100%';
    height: 60px;

    margin: 10px 0px;
    padding: 10px;
    background-color: ${({theme})=>theme.COLORS.GRAY_400};
    flex-direction: row;
    align-items: center;
  `;

export const Text = styled.Text`
    color: ${({theme})=>theme.COLORS.WHITE};
`;

export const GroupIcon = styled(UsersThree).attrs(({theme})=>({
    color: theme.COLORS.GREEN_700,
    size: 32,
    weight: 'fill'
}))`
    margin-right: 10px;
`;

