import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlusIcon from '../SvgIcons/GeneralIcons/Plus'

const UploadIconButton = () => {
  return (
    <View style={styles.container}>
      <PlusIcon />
    </View>
  )
}

export default UploadIconButton

const styles = StyleSheet.create({
    container:{
        width: 60, 
        height: 60, 
        borderRadius: '100%', 
        justifyContent:'center', 
        alignItems:'center'
    }
})