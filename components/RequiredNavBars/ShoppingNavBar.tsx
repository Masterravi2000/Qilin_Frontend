import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse'
import WishListIcon from '../SvgIcons/BottomNavBar/WishList'
import HeartIcon from '../SvgIcons/GeneralIcons/Heart'
import ShoppingBagIcon from '../SvgIcons/GeneralIcons/ShoppingBagIcon'

const ShoppingNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} style={styles.wishlistButton}>
        <HeartIcon />
        <TextScallingFalse style={styles.wishlistText}>Wishlist</TextScallingFalse>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} style={styles.addToBagButton}>
        <ShoppingBagIcon />
        <TextScallingFalse style={styles.addToBagText}>Add to Bag</TextScallingFalse>
      </TouchableOpacity>
    </View>
  )
}

export default ShoppingNavBar

const styles = StyleSheet.create({
    container:{
        width:'100%', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        paddingHorizontal: 20, 
        gap: 10, 
        backgroundColor:'white', 
        paddingVertical: 10, 
        borderTopWidth: 0.5, 
        borderTopColor:'grey'
    },
    wishlistButton:{
        borderWidth: 1, 
        borderColor:'grey', 
        paddingHorizontal:'10%', 
        backgroundColor:'white', 
        paddingVertical: 10, 
        flexDirection:'row', 
        borderRadius: 10, 
        justifyContent:'center', 
        alignItems:'center', gap: 10
    },
    wishlistText:{
        color:'black', 
        fontSize: 15, 
        fontWeight:'500'
    },
    addToBagButton:{
        paddingHorizontal:'10%', 
        backgroundColor:'#FE386A', 
        gap: 10, 
        borderRadius: 10, 
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row'
    },
    addToBagText:{
        color:'white', 
        fontWeight:'500', 
        fontSize: 15
    }
})