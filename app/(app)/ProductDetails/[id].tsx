import { StyleSheet, View, FlatList } from 'react-native';
import React, { useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import PageThemeView from '../../../components/PageThemeView';
import TextScallingFalse from '../../../components/Texts/TextScallingFalse';
import ProductDetailsCard from '../../../components/Cards/ProductDetailsCard';
import ProductCard from '../../../components/Cards/ProductCard';
import ShoppingNavBar from '../../../components/RequiredNavBars/ShoppingNavBar';
import { useGetProductsQuery } from '../../../reduxStore/api/product/productsApi';

// Define Product type if needed
type Product = {
  _id: string;
  productName: string;
  description?: string;
  images: string[];
  price: string;
  originalPrice?: string;
  selectedValues?: string;
  writtenValues?: string;
};

const ProductDetailPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, error, isLoading } = useGetProductsQuery({ page: 1, limit: 100 }); // Fetch many products

  const products = useMemo(() => {
    if (!data?.products) return [];
    return data.products
      .filter((item: Product) => item._id !== id) // Exclude current product
      .map((item: Product) => {
        const selectedValues = item.selectedValues ? JSON.parse(item.selectedValues) : {};
        const writtenValues = item.writtenValues ? JSON.parse(item.writtenValues) : {};
        return {
          id: item._id,
          name: item.productName,
          description: item.description || '',
          image: item.images && item.images.length > 0 ? item.images[0] : '',
          price: item.price,
          discount: item.originalPrice
            ? `${Math.round(((parseFloat(item.originalPrice) - parseFloat(item.price)) / parseFloat(item.originalPrice)) * 100)}% off`
            : 'No discount',
          category: selectedValues.Category || 'General',
          deliveryTime: '2 days delivery',
          selectedValues,
          writtenValues,
        };
      });
  }, [data, id]);

  if (isLoading) {
    return <TextScallingFalse>Loading products...</TextScallingFalse>;
  }

  if (error) {
    return <TextScallingFalse>Error loading products</TextScallingFalse>;
  }

  return (
    <PageThemeView>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <ProductDetailsCard productId={id} />
            <TextScallingFalse style={styles.similarTitle}>
              Similar Products
            </TextScallingFalse>
          </View>
        }
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12, flexDirection: 'row', flexWrap: 'wrap' }}>
            <ProductCard product={item} />
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

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
  }
});
