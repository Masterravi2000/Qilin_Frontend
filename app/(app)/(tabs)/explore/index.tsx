import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import PageThemeView from '../../../../components/PageThemeView'
import TextScallingFalse from '../../../../components/Texts/TextScallingFalse'

const index = () => {
  const [name, setName] = useState('');

  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <TextScallingFalse style={{color:'white', alignItems:'center'}}>Explore</TextScallingFalse>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})