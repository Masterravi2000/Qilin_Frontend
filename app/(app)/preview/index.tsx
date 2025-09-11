import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reduxStore';
import ProductDetailsCard from '../../../components/Cards/ProductDetailsCard';
import { SafeAreaView } from 'react-native-safe-area-context';


// Hide tab bar for this page
export const unstable_settings = {
  tabBarStyle: { display: 'none' },
};

// Discount calculation function
const calculateDiscount = (originalPrice: string, price: string): string => {
  const original = parseFloat(originalPrice);
  const current = parseFloat(price);
  if (isNaN(original) || isNaN(current) || original === 0) {
    return '';
  }
  const discountPercent = ((original - current) / original) * 100;
  return `${Math.round(discountPercent)}%`;
};

const PreviewPage = () => {
  // Get the filled form data from Redux
  const formData = useSelector((state: RootState) => state.productForm);

  const tempId = Date.now().toString();
  // Temporary product object to pass to ProductDetailsCard
  const demoProduct = {
    id: tempId,
    price: formData.price,
    name: formData.productName,
    originalPrice: formData.originalPrice,
    description: formData.description,
    images: formData.images || [],
    discount: calculateDiscount(formData.originalPrice, formData.price),
    details: {
      brand: formData.writtenValues['Brand'] || '',
      color: formData.writtenValues['Color'] || '',
      material: formData.writtenValues['Material'] || '',
      category: formData.selectedValues['Category'] || '',
      condition: formData.selectedValues['Condition'] || '',
      size: formData.selectedValues['Size'] || '',
    }
    // add other fields if ProductDetailsCard expects them
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ProductDetailsCard productId={demoProduct.id} products={[demoProduct]} isPreview={true} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default PreviewPage;
