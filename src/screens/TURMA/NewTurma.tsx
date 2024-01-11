import React from 'react'
import { Container, Form } from './styled'
import Header from '@components/header/header'
import { HigthLight } from '@components/higthLight/higthLight'
import { Input } from '@components/INPUT/Input'
import { ButtonIcon } from '@components/BUTTONICON/ButtonIcon'

export function NewTurma() {
  return (
    <Container>
        <Header showBackButton />
        <HigthLight title='Turmas' subTitle='adicione a galera e separe os times' />
 
        <Form>
            <Input />
            <ButtonIcon type='SECONDARY' icon='add'/>
        </Form>
    </Container>
  )
}
