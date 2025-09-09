import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse'
import BlueTickIcon from '../SvgIcons/GeneralIcons/BlueTick'

const ProfileCard = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.ImageContainer}>
      <Image style={styles.Image}/>
      </View>
      {/* Name section */}
      <View>
      <View style={styles.NameSectionContainer}>
      <TextScallingFalse ellipsizeMode="tail" numberOfLines={1} style={styles.NameTexts}>Aditi Agarwal</TextScallingFalse>
      <BlueTickIcon />
      </View>
      <TextScallingFalse style={styles.VerifiedProfileText}>Verified Profile</TextScallingFalse>
      </View>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    profileContainer:{
        flexDirection:'row', 
        width: 220, 
        gap: 10, 
        alignItems:'center'
    },
    ImageContainer:{
        backgroundColor:'grey', 
        width: 35, 
        height: 35, 
        borderRadius: '100%'
    },
    Image:{
        flex: 1
    },
    NameSectionContainer:{
        flexDirection:'row', 
        gap: 5, 
        alignItems:'center',
        maxWidth: 150,
    },
    NameTexts:{
        color:'black', 
        fontSize: 14, 
        fontWeight:'500',
    },
    VerifiedProfileText:{
        fontSize: 10, 
        fontWeight:'400', 
        color:'grey'
    }
})