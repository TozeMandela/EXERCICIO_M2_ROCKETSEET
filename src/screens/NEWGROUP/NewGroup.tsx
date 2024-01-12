import React, { useState } from 'react'
import { Container, Content, IconGroup } from './styled'
import Header from '@components/header/header'
import { Button } from '@components/Button/Button'
import { HigthLight } from '@components/higthLight/higthLight'
import { Input } from '@components/INPUT/Input'
import { useNavigation } from '@react-navigation/native'
import { setGroupCreate } from '@storage/groups/groupCreate'

export  function NewGroup() {
  const [groups, setGroups] = useState('');
  const { navigate } = useNavigation();


  async function handleCreateNewGroup(){
    try {
      await setGroupCreate(groups);
      navigate('Team', { groups })
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }

  return (
    <Container>
        <Header showBackButton/>

        <Content >
            <IconGroup/>
            <HigthLight title='Nova Turma' subTitle='Crie turmas para poder adicionar pessoas'/>
            <Input placeholder='crie nova turma' onChangeText={setGroups} value={groups} />
            <Button 
              type='PRIMARY' 
              title='Criar Nova Turma'
              onPress={handleCreateNewGroup}  
            />
        </Content>
    </Container>
  )
}
