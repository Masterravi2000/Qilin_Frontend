import { StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import PageThemeView from '../../../components/PageThemeView';
import TextScallingFalse from '../../../components/Texts/TextScallingFalse';
import ProductDetailsCard from '../../../components/Cards/ProductDetailsCard';
import { demoProducts } from '../Demo/demoProducts';
import ShoppingBagIcon from '../../../components/SvgIcons/GeneralIcons/ShoppingBagIcon';
import ShoppingNavBar from '../../../components/RequiredNavBars/ShoppingNavBar';
import ProductCard from '../../../components/Cards/ProductCard';

const ProductDetailPage = () => {

  const { id } = useLocalSearchParams<{ id: string }>();
  const similarProducts = demoProducts.filter((p) => p.id !== id);

  return (
        <PageThemeView>
      <FlatList
        data={similarProducts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            {/* Main Product Details */}
            <ProductDetailsCard productId={id} products={demoProducts} />

            {/* Title */}
            <TextScallingFalse style={styles.similarTitle}>
              Similar Products
            </TextScallingFalse>
          </View>
        }
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12, flexDirection:'row', flexWrap:'wrap'}}>
            <ProductCard product={item} />
          </View>
        )}
         numColumns={2}
         columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Fixed Bottom Nav Bar */}
      <View style={styles.BottomNavBarContainer}>
        <ShoppingNavBar />
      </View>
    </PageThemeView>
  );
};

export default ProductDetailPage;

const styles = StyleSheet.create({
  BottomNavBarContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 50,
    width: '100%'
  },
  similarTitle: {
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 18
  },
    row: {
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
});
