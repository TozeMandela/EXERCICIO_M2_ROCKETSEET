import React from 'react';
import { Container, Title, SubTitle } from './styled';


type props = {
    title: string;
    subTitle: string;
}


export const HigthLight = ({title, subTitle}: props) => {
  return (
    <Container>
        <Title>
            {title}
        </Title>

        <SubTitle>
            {subTitle}
        </SubTitle>
    </Container>
  )
}
