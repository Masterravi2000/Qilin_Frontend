import { StyleSheet, FlatList } from 'react-native'
import React, { useState, useMemo } from 'react'
import PageThemeView from '../../../../components/PageThemeView'
import TopHeaderBar from '../../../../components/TopHeaderBar'
import HomeSearchBar from '../../../../components/Search/HomeSearchBar'
import HeroBanner from '../../../../components/AdvertisingComponents/Banner/HeroBanner'
import CategoryBar from '../../../../components/Filters/CategoryBar'
import ProductCard from '../../../../components/Cards/ProductCard'
import ProductBar from '../../../../components/Filters/ProductBar'
import TextScallingFalse from '../../../../components/Texts/TextScallingFalse'
import { useGetProductsQuery } from '../../../../reduxStore/api/product/productsApi'

// Memoized ProductCard to prevent unnecessary re-renders
const MemoizedProductCard = React.memo(ProductCard);

type Product = {
   _id: string;
  productName: string;
  description?: string;
  images: string[];
  price: string;
  originalPrice?: string;
  selectedValues?: string; // JSON string
  writtenValues?: string;
};

const index = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching } = useGetProductsQuery({ page, limit: 10 });

   const products = useMemo(() => {
    return data?.products.map((item: Product) => {
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
        category: selectedValues.Sub_Category || 'General',
        deliveryTime: '2 days delivery',
        selectedValues,
        writtenValues,
      };
    }) || [];
  }, [data]);

  const totalPages = data?.totalPages || 1;

  const loadMoreProducts = () => {
    if (!isFetching && page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  if (isLoading && page === 1) {
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
        renderItem={({ item }: { item: typeof products[number] }) => <MemoizedProductCard product={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.5} // triggers when 50% close to bottom and loads more products if any
        ListFooterComponent={isFetching ? <TextScallingFalse style={styles.LoaderText}>Loading more...</TextScallingFalse> : null}
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
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={21}
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
  },
  LoaderText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400'
  }
})