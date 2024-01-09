import React from 'react'
import { Container } from './styled'
import Header from '@components/header/header'
import { HigthLight } from '@components/higthLight/higthLight'
import { Group } from '@components/Group/Group'

export const Groups = () => {
  return (
    <Container>
      <Header/>
      <HigthLight title='Sala 03' subTitle='Turma de Programação' />
      <Group text='asdfghjk'/>
    </Container>
  )
}
