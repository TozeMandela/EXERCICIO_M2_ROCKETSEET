import React from 'react'
import { Container, Content, IconGroup } from './styled'
import Header from '@components/header/header'
import { Button } from '@components/Button/Button'
import { HigthLight } from '@components/higthLight/higthLight'
import { Input } from '@components/INPUT/Input'

export  function NewGroup() {
  return (
    <Container>
        <Header showBackButton/>

        <Content >
            <IconGroup/>
            <HigthLight title='Nova Turma' subTitle='Crie turmas para poder adicionar pessoas'/>
            <Input/>
            <Button type='PRIMARY' title='Criar Nova Turma' />
        </Content>
    </Container>
  )
}
