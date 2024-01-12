import React, { useEffect, useState } from 'react'
import { Container, Form, ListPlayers, NumberOfPlayers } from './styled'
import Header from '@components/header/header'
import { HigthLight } from '@components/higthLight/higthLight'
import { Input } from '@components/INPUT/Input'
import { ButtonIcon } from '@components/BUTTONICON/ButtonIcon'
import { Filter } from '@components/FILTER/Filter'
import { FlatList } from 'react-native'
import { CardPeople } from '@components/CARD/CardPeople'
import { EmptyList } from '@components/empty/EmptyList'
import { useRoute } from '@react-navigation/native'


type RouteParams = {
  groups: string,
}

export function NewTurma() {

const [team, setTeam] = useState('');
const [turma, setTurma] = useState(['tuema a', 'turma']);
const [players, setPlayers] = useState(['da', 'do']);
const route = useRoute();

const { groups } = route.params as RouteParams;

useEffect(() =>{
  setTurma(group => [...group, groups]);
}, []);



  return (
    <Container>
        <Header showBackButton />
        <HigthLight title='Turmas' subTitle='adicione a galera e separe os times' />
        
        <Form>
            <Input 
            />
            <ButtonIcon type='PRIMARY' icon='add'/>
        </Form>
        
        <ListPlayers>
          <FlatList
          data={turma}
          keyExtractor={(item)=>item}

          renderItem={({item})=>(
            <Filter text={item} 
            isActive={(item === team) ? true : false} 
            onPress={()=>setTeam(item)}
            />
          )}
          horizontal
          />

          <NumberOfPlayers>
            {players.length}
          </NumberOfPlayers>
        </ListPlayers>

        <FlatList 
          data={players}
          keyExtractor={(item)=>item}

          renderItem={({item})=>(
            <CardPeople 
              name={item}
              onPress={()=>setPlayers} 
              
            />
          )}

          ListEmptyComponent={()=>(
            <EmptyList text='vazio'/>
          )}

          contentContainerStyle={[players.length === 0 && {flex: 1, alignItems: 'center',justifyContent: 'center'}]}
        />

    </Container>
  )
}
