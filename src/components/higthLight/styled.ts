import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    margin: 30px 0px;
    width: 100%;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    ${({ theme })=> css`
    color: ${ theme.COLORS.WHITE};
    font-family: ${ theme.FONT_FAMILY.BOLD};
    font-size: ${ theme.FONT_SIZE.XL}px;
    `}
`;

export const SubTitle = styled.Text`
${({ theme })=> css`
    color: ${ theme.COLORS.GRAY_300};
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    font-size: ${ theme.FONT_SIZE.MD}px;
`}
    
`;