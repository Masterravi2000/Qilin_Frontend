import { StyleSheet, Image, View, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from "react";
import TextScallingFalse from '../Texts/TextScallingFalse';
import { useRouter } from 'expo-router';
import ProfileCard from './ProfileCard';
import GenuineItem from '../Badges/GenuineItem';
import DeliveryBoxIcon from '../SvgIcons/SpecialIcons/DeliveryBox';
import TickMarkIcon from '../SvgIcons/GeneralIcons/TickMark';
import CashIcon from '../SvgIcons/SpecialIcons/CashIcon';
import ProductDetailNavBar from '../RequiredNavBars/ProductDetailNavBar';
import { useGetProductByIdQuery } from '../../reduxStore/api/product/productsApi';

interface ProductDetailsProps {
    productId: string;
    isPreview?: boolean;
    onUpload?: () => void;
    isLoading?: boolean;
    products?: Array<any>;
}

const ProductDetailsCard: React.FC<ProductDetailsProps> = ({ productId, isPreview = false, onUpload, isLoading = false, products }) => {
    const router = useRouter();
    //useSates
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // ✅ Fetch product from backend only when isPreview is false
    const { data: apiProduct, error, isLoading: productLoading } = useGetProductByIdQuery(productId, {
        skip: isPreview
    });
    const product = isPreview ? products?.[0] : apiProduct;
    if (productLoading) return <TextScallingFalse>Loading product...</TextScallingFalse>;
    if (error || !product) return <TextScallingFalse>Product not found</TextScallingFalse>;

    // for discount part
    const discount = product.originalPrice
        ? Math.round(((parseFloat(product.originalPrice) - parseFloat(product.price)) / parseFloat(product.originalPrice)) * 100)
        : 0;

    // parse the details in order to destrcuture them conditionally
    const selectedValues = isPreview ? JSON.parse(product.selectedValues || '{}') : (product.selectedValues ? JSON.parse(product.selectedValues) : {});
    const writtenValues = isPreview ? JSON.parse(product.writtenValues || '{}') : (product.writtenValues ? JSON.parse(product.writtenValues) : {});
    const details = {
        brand: writtenValues.Brand || 'N/A',
        color: writtenValues.Color || 'N/A',
        material: writtenValues.Material || 'N/A',
        category: selectedValues.Category || 'N/A',
        condition: selectedValues.Condition || 'N/A',
        size: selectedValues.Size || 'N/A',
    };

    //Image Scroll Indicating function
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
        );
        if (index !== currentImageIndex) {
            setCurrentImageIndex(index);
        }
    };

    //image destrcuture
    const images = product.images && product.images.length ? product.images : [];

    console.log('flatlist scrolled 1 time page rendered')

    return (
        <View>
            {/* Product Image */}
            <View style={styles.ProductImageContainer}>
                {/* Top Nav Bar */}
                <ProductDetailNavBar onUpload={onUpload} isLoading={isLoading} isPreview={isPreview} />
                {/* Main Image Component */}
                <View style={styles.ImageComponent}>
                    <FlatList
                        data={images}
                        horizontal
                        pagingEnabled
                        onScroll={onScroll}
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                        getItemLayout={(_, index) => ({
                            length: 384,       // width of each item
                            offset: 384 * index,
                            index,
                        })}
                        renderItem={({ item, index }) => (
                            <View style={styles.ImageRender}>
                                <Image source={{ uri: item }} style={styles.Image} resizeMode="cover" />
                            </View>
                        )}
                    />
                    {/* Dots Indicator */}
                    <View style={styles.scrollIndicator}>
                        <View style={styles.IndicatorDotContainer}>
                            {images.map((_: string, index: number) => (
                                <View
                                    key={index}
                                    style={{
                                        width: currentImageIndex === index ? 10 : 6,
                                        height: 6,
                                        borderRadius: currentImageIndex === index ? 4 : 10,
                                        marginHorizontal: 2,
                                        backgroundColor: currentImageIndex === index ? 'white' : '#bebebeff',
                                    }}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </View>
            {/* Detail Content */}
            <View style={styles.ProductDetailsSection}>
                <View style={styles.priceSection}>
                    <TextScallingFalse style={styles.priceSectionText}>Rs {product.price}</TextScallingFalse>
                    <TextScallingFalse style={styles.priceSectionText}>-{discount}%</TextScallingFalse>
                </View>
                <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>{product.productName}</TextScallingFalse>
                <TextScallingFalse style={styles.descriptionText}>{product.description}</TextScallingFalse>
            </View>
            {/* specific details container */}
            <View style={styles.specificDetailsContainer}>
                <View style={styles.specificDetailsBox}>
                    <View>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Brand - {details.brand}</TextScallingFalse>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Color - {details.color}</TextScallingFalse>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Material - {details.material}</TextScallingFalse>
                    </View>
                    <View>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Category - {details.category}</TextScallingFalse>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Condition - {details.condition}</TextScallingFalse>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Size - {details.size}</TextScallingFalse>
                    </View>
                </View>
            </View>
            {/* Seller detail section */}
            <View style={styles.SellerDetails}>
                {/* seller profile section */}
                <View style={styles.SellerProfileSection}>
                    <TextScallingFalse style={styles.sellerHeadingText}>Seller</TextScallingFalse>
                    <ProfileCard />
                </View>
                {/* Garantee section */}
                <View>
                    <GenuineItem />
                </View>
            </View>
            {/* Delivery detail */}
            <View style={styles.deliveryContainer}>
                <TextScallingFalse style={styles.DeliveryHeaderText}>Delivery</TextScallingFalse>
                <View style={styles.DeliveryBlocks}>
                    {isPreview ? (
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.AdressText}>Address of the user</TextScallingFalse>
                    ) : (
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.AdressText}>49/2 - Green Park, Rajbari, Gorabazar, Dum Dum</TextScallingFalse>
                    )}
                </View>
                <View style={[styles.DeliveryBlocks, styles.ExpectedDateBlock]}>
                    <DeliveryBoxIcon />
                    {isPreview ? (
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.ExpectedDateText}>Expected Delivery date and time</TextScallingFalse>
                    ) : (
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.ExpectedDateText}>Expected Time:- Get it by Sun, Sep 14, 2025</TextScallingFalse>
                    )}
                </View>
                <View style={styles.CashOnDeliveryContainer}>
                    <View style={styles.TickMarkContainer}>
                        <TickMarkIcon />
                    </View>
                    <CashIcon />
                    <TextScallingFalse style={styles.PayOnDeliveryText}>Pay on Delivery is available</TextScallingFalse>
                </View>
            </View>
        </View>
    )
}

export default React.memo(ProductDetailsCard);

const styles = StyleSheet.create({
    ProductImageContainer: {
        width: '100%',
        height: 494,
        marginVertical: 10
    },
    ImageRender: {
        width: 384,
        height: 494
    },
    IndicatorDotContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ImageComponent: {
        position: 'absolute',
        top: 0
    },
    TopBarContainer: {
        zIndex: 10,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    Image: {
        width: '100%',
        height: '100%'
    },
    TopBarButtons: {
        backgroundColor: 'grey',
        width: 40,
        height: 40,
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopBarRightSideSection: {
        flexDirection: 'row',
        gap: 10
    },
    scrollIndicator: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageSection: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0
    },
    ProductDetailsSection: {
        width: '100%',
        gap: 1,
        paddingHorizontal: 20,
        paddingTop: 5
    },
    priceSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceSectionText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#FE386A',
    },
    productName: {
        fontSize: 19,
        fontWeight: '500',
        color: 'black'
    },
    descriptionText: {
        color: 'black',
        fontSize: 13,
        fontWeight: '400',
        paddingVertical: 2,
    },
    specificDetailsContainer: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    specificDetailsBox: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        gap: 20
    },
    specificDetailsText: {
        color: 'black',
        fontSize: 13,
        fontWeight: '500',
        width: 142,
    },
    SellerDetails: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SellerProfileSection: {
        gap: 4
    },
    sellerHeadingText: {
        color: '#3B3B3B',
        fontSize: 13,
        fontWeight: '500'
    },
    deliveryContainer: {
        width: '100%',
        paddingHorizontal: 18,
        paddingVertical: 10,
        gap: 10
    },
    DeliveryHeaderText: {
        color: 'black',
        fontSize: 19,
        fontWeight: '500',
    },
    DeliveryBlocks: {
        width: '100%',
        borderRadius: 100,
        paddingVertical: 7,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ExpectedDateBlock: {
        paddingVertical: 4,
        flexDirection: 'row',
        gap: 7,
    },
    AdressText: {
        color: '#404040',
        width: '90%',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center'
    },
    ExpectedDateText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    CashOnDeliveryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        paddingHorizontal: 2
    },
    TickMarkContainer: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100
    },
    PayOnDeliveryText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    }
})