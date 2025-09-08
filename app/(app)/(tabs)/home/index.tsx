import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageThemeView from '../../../../components/PageThemeView'
import TextScallingFalse from '../../../../components/Texts/TextScallingFalse'
import TopHeaderBar from '../../../../components/TopHeaderBar'
import HomeSearchBar from '../../../../components/Search/HomeSearchBar'
import HeroBanner from '../../../../components/AdvertisingComponents/Banner/HeroBanner'
import CategoryBar from '../../../../components/Filters/CategoryBar'

const index = () => {
  return (
    <PageThemeView>
      <TopHeaderBar/>
      <HomeSearchBar />
      <HeroBanner />
      <CategoryBar />
    </PageThemeView>
  )
}

export default index

const styles = StyleSheet.create({})