import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse'

const GenuineItem = () => {
    const original = require('../../assets/Icons/Original2.png');

    return (
        <View style={{ width: 114, borderWidth: 1,marginTop: 5, borderColor: 'grey', gap: 8, justifyContent:'flex-end', borderRadius: 10, height: 52, padding: 4, flexDirection:'row'}}>
            {/* written section */}
            <View style={{alignItems:'flex-end'}}>
                <TextScallingFalse style={{ color: 'black', fontSize: 13, fontWeight: '400' }}>Genuine</TextScallingFalse>
                <TextScallingFalse style={{ color: 'black', fontSize: 13, fontWeight: '400' }}>Item</TextScallingFalse>
            </View>
            {/* Badge icon section */}
            <View style={{width:40, height: 40, borderWidth: 1, borderColor:'grey', borderRadius: 10, justifyContent:'center', alignItems:'center'}}>
                <Image style={{width: 30, height: 30}} source={original}/>
            </View>
        </View>
    )
}

export default GenuineItem

const styles = StyleSheet.create({})