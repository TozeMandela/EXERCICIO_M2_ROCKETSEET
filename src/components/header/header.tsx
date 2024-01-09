import React from 'react';
import { BockButton, BackIcon, Container, Image } from './styled';
import logo from '@assets/logo.png';

type props = {
    showBackButton?: boolean;
}

export default function Header({showBackButton = false}: props) {
  return (
    <Container>
        {
            showBackButton && 
            <BockButton>
                <BackIcon />
            </BockButton>
        }
        <Image source={logo} />
    </Container>
  )
}
