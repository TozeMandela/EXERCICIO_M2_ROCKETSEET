import React from 'react';
import { BockButton, BackIcon, Container, Image } from './styled';
import logo from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

type props = {
    showBackButton?: boolean;
}

export default function Header({showBackButton = false}: props) {

  const nagigate = useNavigation();

  function handleBack () {
    nagigate.navigate('Group');
  }

  return (
    <Container>
        {
            showBackButton && 
            <BockButton onPress={handleBack} >
                <BackIcon />
            </BockButton>
        }
        <Image source={logo} />
    </Container>
  )
}
