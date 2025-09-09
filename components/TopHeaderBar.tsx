import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ShoppingBagIcon from './SvgIcons/GeneralIcons/ShoppingBagIcon'
import MenuIcon from './SvgIcons/GeneralIcons/MenuIcon'
import TextScallingFalse from './Texts/TextScallingFalse'

const TopHeaderBar = () => {
  return (
    <View style={styles.container}>
      <TextScallingFalse style={styles.name}>Qilin</TextScallingFalse>
      <View style={styles.rightcontainer}>
        <TouchableOpacity activeOpacity={0.5} style={styles.button}>
          <ShoppingBagIcon color="#777777"/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.button}>
          <MenuIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TopHeaderBar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  name:{
    color: 'black', 
    fontSize: 23, 
    fontWeight: '700' 
  },
  rightcontainer:{
    flexDirection:'row'
  },
  button:{
    width: 38, 
    height: 40, 
    alignItems:'center', 
    justifyContent:'center'
  }
})