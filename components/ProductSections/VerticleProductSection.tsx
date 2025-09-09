import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse'

const VerticleProductSection = () => {
  return (
    <View style={styles.container}>
      <TextScallingFalse style={styles.headerText}>Product</TextScallingFalse>
      <View style={{flexDirection:'row', flexWrap: 'wrap', gap: 20}}>
      <View style={{height: 188, width: 162, backgroundColor:'grey'}}></View>
      <View style={{height: 188, width: 162, backgroundColor:'grey'}}></View>
      <View style={{height: 188, width: 162, backgroundColor:'grey'}}></View>
      </View>
    </View>
  )
}

export default VerticleProductSection

const styles = StyleSheet.create({
  container:{
    width:'100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  headerText:{
    color:'black',
    fontSize: 20,
    fontWeight:'500',
    paddingBottom: 12
  }
})