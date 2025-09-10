import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import TextScallingFalse from '../Texts/TextScallingFalse';

const ProductCard = ({ product }: { product: { id: string; description?: string, image: string; name: string; price: string; discount: string; category: string; deliveryTime: string } }) => {
    const router = useRouter();

    const handlePress = () => {
        // ✅ Only send product.id for performance
        router.push(`/ProductDetails/${product.id}`);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} activeOpacity={0.7} style={styles.card}>
            </TouchableOpacity>
            {/* Price and Discount Section */}
            <TouchableOpacity onPress={handlePress} activeOpacity={0.5} style={styles.PriceSection}>
                <TextScallingFalse style={styles.PriceSectionText}>Rs {product.price}</TextScallingFalse>
                <TextScallingFalse style={styles.PriceSectionText}>{product.discount}</TextScallingFalse>
            </TouchableOpacity>
            {/* Product Name,catgory and delivery time */}
            <TouchableOpacity onPress={handlePress} activeOpacity={0.5} style={styles.SeccondSection}>
                <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.productNameText}>{product.name}</TextScallingFalse>
                <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.productCategoryText}>{product.category}</TextScallingFalse>
                <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.deliveryTimeText}>{product.deliveryTime}</TextScallingFalse>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(ProductCard);

const styles = StyleSheet.create({
    card: {
        height: 197,
        width: '100%',
        backgroundColor: 'grey',
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    container: {
        width: 168,
        height: 280,
        alignItems: 'center',
        marginBottom: 16,
    },
    PriceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: '100%',
        paddingTop: 6
    },
    PriceSectionText: {
        color: '#FF287E',
        fontSize: 15,
        fontWeight: '500'
    },
    SeccondSection: {
        width: '100%',
        paddingHorizontal: 10,
        gap: 3,
        paddingTop: 2
    },
    productNameText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 13
    },
    productCategoryText: {
        color: '#797979ff',
        fontSize: 9,
        fontWeight: '400'
    },
    deliveryTimeText: {
        color: 'black',
        fontSize: 11,
        fontWeight: '500'
    }
})
