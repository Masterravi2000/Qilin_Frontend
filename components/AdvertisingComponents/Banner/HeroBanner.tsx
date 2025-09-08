import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeroBanner = () => {
  return (
    <View style={styles.container}>
      <Text>HeroBanner</Text>
    </View>
  )
}

export default HeroBanner

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 192,
        backgroundColor:'grey',
        marginVertical: 15,
    }
})