import React, { useState } from 'react'
import { Container } from './styled'
import Header from '@components/header/header'
import { HigthLight } from '@components/higthLight/higthLight'
import { Group } from '@components/Group/Group'
import { FlatList } from 'react-native'
import { EmptyList } from '@components/empty/EmptyList'


export const Groups = () => {

  const [group, setGroup] = useState([]);

  return (
    <Container>
      <Header/>
      <HigthLight title='Sala 03' subTitle='Turma de Programação' />

      <FlatList 
        data={group}
        keyExtractor={(item) => item}
        renderItem={({item}) => <Group text={item}/>} 
        contentContainerStyle={{flex: 1}}
        ListEmptyComponent={() => (
          <EmptyList text='Nenhuma sala encontrada'/>
        )}
      />
    </Container>
  )
}
