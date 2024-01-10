import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: '100%';
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const BockButton = styled.TouchableOpacity`
  flex: 1;
`;

export const Image = styled.Image`
    width: 46px;
    height: 46px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme })=>({
  color: theme.COLORS.GRAY_300,
  size: 32
}))`
`;

