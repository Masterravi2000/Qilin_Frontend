import React from 'react';
import { View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reduxStore';
import ProductDetailsCard from '../../../components/Cards/ProductDetailsCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextScallingFalse from '../../../components/Texts/TextScallingFalse';
import { useAddProductMutation } from '../../../reduxStore/api/product/productsApi';
import { useRouter } from 'expo-router';


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
  const router = useRouter();
  // Get the filled form data from Redux
  const formData = useSelector((state: RootState) => state.productForm);
  const [addProduct, { isLoading }] = useAddProductMutation();
  const tempId = Date.now().toString();
  // Temporary product object to pass to ProductDetailsCard
  const demoProduct = {
    id: tempId,
    price: formData.price,
    productName: formData.productName,
    originalPrice: formData.originalPrice,
    description: formData.description,
    images: formData.images || [],
    discount: calculateDiscount(formData.originalPrice, formData.price),
    selectedValues: JSON.stringify({
    Category: formData.selectedValues['Category'] || '',
    Condition: formData.selectedValues['Condition'] || '',
    Size: formData.selectedValues['Size'] || ''
  }),
  writtenValues: JSON.stringify({
    Brand: formData.writtenValues['Brand'] || '',
    Color: formData.writtenValues['Color'] || '',
    Material: formData.writtenValues['Material'] || ''
  })
  };

  // Callback to pass to ProductDetailsCard → ProductDetailNavBar
  const handleUpload = async () => {
    try {
      const form = new FormData();
      form.append("productName", formData.productName);
      form.append("price", formData.price);
      form.append("originalPrice", formData.originalPrice);
      form.append("description", formData.description);
      form.append("writtenValues", JSON.stringify(formData.writtenValues));
      form.append("selectedValues", JSON.stringify(formData.selectedValues));

      // Append images (use uri from `formData.images`)
      formData.images.forEach((uri, index) => {
        form.append("images", {
          uri,
          name: `image_${index}.jpg`,
          type: "image/jpeg",
        } as any);
      });

      await addProduct(form).unwrap();
      Alert.alert("Success", "Product uploaded successfully!");
      router.push('/home');
    } catch (err) {
      console.error("Upload error:", err);
      Alert.alert("Error", "Failed to upload product");
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ProductDetailsCard productId={demoProduct.id} products={[demoProduct]} isPreview={true} onUpload={handleUpload} isLoading={isLoading} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default PreviewPage;
