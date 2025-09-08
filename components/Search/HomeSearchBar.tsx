import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SearchIcon from '../SvgIcons/GeneralIcons/SearchIcon'
import TextScallingFalse from '../Texts/TextScallingFalse'
import FilterIcon from '../SvgIcons/GeneralIcons/FilterIcon'

const HomeSearchBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.SearchArea}>
        <SearchIcon />
         <TextInput 
          placeholder='Search' placeholderTextColor={'grey'} style={styles.SearchTextInput}/>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.filterButton}>
            <FilterIcon />
        </TouchableOpacity>
    </View>
  )
}

export default HomeSearchBar

const styles = StyleSheet.create({
    container:{
        width:'88%', 
        alignSelf:'center', 
        justifyContent:'space-between',
        height: 45, 
        borderWidth: 1, 
        borderColor:'grey', 
        borderRadius: 10, 
        flexDirection:'row', 
        paddingHorizontal: 6, 
        alignItems:'center'
    },
    SearchArea:{
        flexDirection:'row', 
        gap: 5, 
        width:'77%', 
        alignItems:'center', 
        paddingStart: 4
    },
    SearchTextInput:{
        fontSize: 19, 
        color:'black', 
        width:'100%',
    },
    filterButton:{
        backgroundColor:'#FE386A', 
        width: 33, 
        height: 33, 
        borderRadius: 8, 
        justifyContent:'center', 
        alignItems:'center'
    }
})