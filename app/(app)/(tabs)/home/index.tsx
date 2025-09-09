import { StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import PageThemeView from '../../../../components/PageThemeView'
import TextScallingFalse from '../../../../components/Texts/TextScallingFalse'
import TopHeaderBar from '../../../../components/TopHeaderBar'
import HomeSearchBar from '../../../../components/Search/HomeSearchBar'
import HeroBanner from '../../../../components/AdvertisingComponents/Banner/HeroBanner'
import CategoryBar from '../../../../components/Filters/CategoryBar'
import VerticleProductSection from '../../../../components/ProductSections/VerticleProductSection'
import ProductCard from '../../../../components/Cards/ProductCard'
import ProductBar from '../../../../components/Filters/ProductBar'
import { demoProducts } from '../../Demo/demoProducts'

const index = () => {

  const [products, setProducts] = useState(demoProducts)

  // later you’ll load more products from backend here
  const loadMoreProducts = () => {
    if (products.length >= demoProducts.length) return
    const newItems = Array.from({ length: 5 }).map((_, i) => ({
      id: (products.length + i + 1).toString(),
      name: `Product ${products.length + i + 1}`,
      image: `Product ${products.length + i + 1}`,
      price: `Product ${products.length + i + 1}`,
      discount: `Product ${products.length + i + 1}`,
      category: `Product ${products.length + i + 1}`,
      deliveryTime: `Product ${products.length + i + 1}`,
    }))
    setProducts([...products, ...newItems])
  }

  return (
    <PageThemeView>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.5} // triggers when 50% close to bottom and loads more products if any
        ListHeaderComponent={
          <>
            <TopHeaderBar />
            <HomeSearchBar />
            <HeroBanner />
            <CategoryBar />
            <ProductBar />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </PageThemeView>
  )
}

export default index

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500'
  }
})