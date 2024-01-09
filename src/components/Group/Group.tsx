import React from 'react'
import { Container, GroupIcon, Text } from './styled';
import { TouchableOpacityProps } from 'react-native';

type props =  TouchableOpacityProps & { text: string}

export function Group({text, ...rest}: props) {
  return (
    <Container {...rest}>
        <GroupIcon />
        <Text>
            {text}
        </Text>
    </Container>
  )
}
