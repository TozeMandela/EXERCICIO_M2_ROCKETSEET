import React from 'react'
import { ButtonTypes, Container, Title, } from './styled'
import { TouchableOpacityProps } from 'react-native';

type props = TouchableOpacityProps & {
    title: string,
    type?: ButtonTypes,
}

export function Button({ title, type = 'PRIMARY', ...rest}: props) {
  return (
    <Container type='PRIMARY' {...rest} >
        <Title>
            {title}
        </Title>
    </Container>
  )
}
