import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse'
import TickMarkWhiteIcon from '../SvgIcons/GeneralIcons/TickMarkWhite'

const FormNavBar = () => {
  return (
    <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 30}}>
        <TextScallingFalse style={{fontSize: 16, color:'grey', fontWeight:'400'}}>Required Fileds 0/12</TextScallingFalse>
        <TouchableOpacity style={{width: 90, justifyContent:'center', alignItems:'center', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100, borderWidth: 1, borderColor: 'grey', flexDirection:'row'}}>
            <TextScallingFalse style={{color:'grey', fontSize: 18, fontWeight:'400'}}>Next</TextScallingFalse>
            <View style={{width: 20, height: 20, borderRadius:'100', justifyContent:'center', alignItems:'center', backgroundColor:'grey'}}>
                <TickMarkWhiteIcon/>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default FormNavBar

const styles = StyleSheet.create({})