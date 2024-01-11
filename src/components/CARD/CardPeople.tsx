import React from 'react'
import { Container, IconPeople, Name } from './styled'
import { ButtonIcon } from '@components/BUTTONICON/ButtonIcon'

type props = {
  name: string;
  onPress: () => void;
}

export function CardPeople({name, onPress}: props) {
  return (
    <Container>
        <IconPeople name='person'/>
        <Name>{name}</Name>
        <ButtonIcon icon='close' type='SECONDARY' onPress={onPress} />
    </Container>
  )
}
