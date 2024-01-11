import React from 'react'
import { Container, Text, props as Active } from './styled'
import { TouchableOpacityProps } from 'react-native'

type props = Active & TouchableOpacityProps &{
    text: string,
}

export function Filter({ isActive = false, text, ...rest}: props) {
  return (
    <Container {...rest} isActive={isActive} >
        <Text> {text} </Text>
    </Container>
  )
}
