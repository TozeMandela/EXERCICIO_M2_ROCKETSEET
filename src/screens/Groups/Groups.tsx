import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import Header from '@components/header/header'
import { Group } from '@components/Group/Group'
import { Button } from '@components/Button/Button'
import { EmptyList } from '@components/empty/EmptyList'
import { HigthLight } from '@components/higthLight/higthLight'
import { Container } from './styled'
import { getGroupAll } from '@storage/groups/groupCreate'


export const Groups = () => {

  const [group, setGroup] = useState([]);
  const navigation = useNavigation();

  async function storage (){
    try {
      setGroup(await getGroupAll());
    } catch (error) {
      console.log(error);
      
    }
  }

  useFocusEffect(useCallback(() => {
    storage();
  }, [group]));


  function handleNewGroup (){
    navigation.navigate('New');
  }

  return (
    <Container>
      <Header/>
      <HigthLight title='Turma' subTitle='Turma de Programação' />

      <FlatList 
        data={group}
        keyExtractor={(item) => item}
        renderItem={({item}) => <Group text={item}/>} 
        contentContainerStyle={{flex: 1}}
        ListEmptyComponent={() => (
          <EmptyList text='Nenhuma sala encontrada'/>
        )}
      />

      <Button title='Criar nova turma' onPress={handleNewGroup}/>
    </Container>
  )
}
