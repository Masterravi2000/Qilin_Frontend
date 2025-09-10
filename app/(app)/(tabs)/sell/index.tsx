import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageThemeView from '../../../../components/PageThemeView'
import TextScallingFalse from '../../../../components/Texts/TextScallingFalse'

const index = () => {
  return (
    <PageThemeView>
      <TextScallingFalse style={{color:'black', fontSize: 22}}>Yes this is the correct page</TextScallingFalse>
    </PageThemeView>
  )
}

export default index

const styles = StyleSheet.create({})