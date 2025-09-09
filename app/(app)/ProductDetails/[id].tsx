import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import PageThemeView from '../../../components/PageThemeView';
import TextScallingFalse from '../../../components/Texts/TextScallingFalse';
import ProductDetailsCard from '../../../components/Cards/ProductDetailsCard';
import { demoProducts } from '../Demo/demoProducts';
import ShoppingBagIcon from '../../../components/SvgIcons/GeneralIcons/ShoppingBagIcon';
import ShoppingNavBar from '../../../components/RequiredNavBars/ShoppingNavBar';

const ProductDetailPage = () => {
  // 👇 matches the [id].tsx filename
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <PageThemeView>
      {/* Product details component */}
      <ProductDetailsCard productId={id} products={demoProducts} />

      {/* Silimar products scrollable list */}
      <View>
        {/* component */}
      </View>

      {/* Bottom Nav Bar */}
      <View style={styles.BottomNavBarContainer}>
        <ShoppingNavBar />
      </View>
    </PageThemeView>
  );
};

export default ProductDetailPage;

const styles = StyleSheet.create({
  BottomNavBarContainer:{
    position: 'absolute', 
    bottom: 0, 
    zIndex: 50, 
    width:'100%'
  }
});
