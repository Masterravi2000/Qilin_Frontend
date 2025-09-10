import { StyleSheet, Image, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse';
import BackIcon from '../SvgIcons/GeneralIcons/BackIcon';
import WishListIcon from '../SvgIcons/BottomNavBar/WishList';
import ShoppingBagIcon from '../SvgIcons/GeneralIcons/ShoppingBagIcon';
import { useRouter } from 'expo-router';
import ProfileCard from './ProfileCard';
import GenuineItem from '../Badges/GenuineItem';
import ShoppingNavBar from '../RequiredNavBars/ShoppingNavBar';
import DeliveryBoxIcon from '../SvgIcons/SpecialIcons/DeliveryBox';
import TickMarkIcon from '../SvgIcons/GeneralIcons/TickMark';
import CashIcon from '../SvgIcons/SpecialIcons/CashIcon';

interface ProductDetailsProps {
    productId: string;
    products: Array<any>; // replace with proper type or fetch from demoProducts.ts
}

const ProductDetailsCard: React.FC<ProductDetailsProps> = ({ productId, products }) => {
    const router = useRouter();
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <TextScallingFalse>Product not found</TextScallingFalse>;
    }

    return (
        <View>
            {/* Product Image */}
            <View style={styles.ProductImageContainer}>
                {/* Top Nav Bar */}
                <View style={styles.TopBarContainer}>
                    <TouchableOpacity onPress={() => router.back()} activeOpacity={0.5} style={styles.TopBarButtons}>
                        <BackIcon />
                    </TouchableOpacity>
                    <View style={styles.TopBarRightSideSection}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.TopBarButtons}>
                            <WishListIcon color="#ffffffff" />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.TopBarButtons}>
                            <ShoppingBagIcon color="#ffffffff" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Main Image Component */}
                <Image source={{ uri: product.image }} style={styles.ImageSection} />
            </View>
            {/* Detail Content */}
            <View style={styles.ProductDetailsSection}>
                <View style={styles.priceSection}>
                    <TextScallingFalse style={styles.priceSectionText}>Rs {product.price}</TextScallingFalse>
                    <TextScallingFalse style={styles.priceSectionText}>{product.discount}</TextScallingFalse>
                </View>
                <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>{product.name}</TextScallingFalse>
                <TextScallingFalse style={styles.descriptionText}>{product.description}</TextScallingFalse>
            </View>
            {/* specific details container */}
            <View style={styles.specificDetailsContainer}>
                <View style={styles.specificDetailsBox}>
                    <View>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Brand - Souled store</TextScallingFalse>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Color - Dark Pink</TextScallingFalse>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Material - Cotton</TextScallingFalse>
                    </View>
                    <View>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Category - Dresses</TextScallingFalse>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Condition - Good</TextScallingFalse>
                        <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.specificDetailsText}>Size - M</TextScallingFalse>
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
                    <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.AdressText}>49/2 - Green Park, Rajbari, Gorabazar, Dum Dum</TextScallingFalse>
                </View>
                <View style={[styles.DeliveryBlocks, styles.ExpectedDateBlock]}>
                    <DeliveryBoxIcon />
                    <TextScallingFalse numberOfLines={1} ellipsizeMode="tail" style={styles.ExpectedDateText}>Expected Time:- Get it by Sun, Sep 14, 2025</TextScallingFalse>
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
        backgroundColor: 'yellow',
        marginVertical: 10
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
        width: 142
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
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
        paddingVertical: 4,
        flexDirection: 'row',
        gap: 10,
    },
    AdressText: {
        color: '#404040',
        width: '90%',
        fontSize: 14,
        fontWeight: '400'
    },
    ExpectedDateText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
        width: '80%',
    },
    CashOnDeliveryContainer:{
        flexDirection: 'row', 
        alignItems:'center', 
        gap: 7, 
        paddingHorizontal: 2
    },
    TickMarkContainer:{
        width: 32, 
        height: 32, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
        borderWidth: 1, 
        borderColor:'black', 
        borderRadius: 100
    },
    PayOnDeliveryText:{
        fontSize: 16, 
        fontWeight: '500', 
        color: 'black' 
    }
})