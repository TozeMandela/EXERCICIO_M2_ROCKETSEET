import React from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import {  useTheme } from 'styled-components'

type props = {
    text: string
}

export function EmptyList({ text }: props){
   
  return (
    <View style={style.Container}>
        <Text style={{color: useTheme().COLORS.GRAY_200}}>{text}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})