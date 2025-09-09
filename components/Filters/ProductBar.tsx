import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse'
import FunnelFilterIcon from '../SvgIcons/GeneralIcons/FunnelFilterIcon'

const ProductBar = () => {
  return (
    <View style={styles.container}>
      <TextScallingFalse style={styles.headerText}>Product</TextScallingFalse>
      <TouchableOpacity activeOpacity={0.5} style={styles.FunnelButton}>
        <FunnelFilterIcon />
      </TouchableOpacity>
    </View>
  )
}

export default ProductBar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', 
        width:'100%', 
        paddingHorizontal: 20, 
        paddingVertical: 8, 
        justifyContent:'space-between', 
        alignItems:'center',
        paddingBottom: 18
    },
    headerText:{
        color:'black', 
        fontSize: 20, 
        fontWeight:'500'
    },
    FunnelButton:{
        width: 26, 
        height: 24,
        borderWidth: 1.2,
        borderColor:'#6d6d6dff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5
    }
})