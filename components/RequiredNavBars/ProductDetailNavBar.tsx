import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackIcon from '../SvgIcons/GeneralIcons/BackIcon'
import WishListIcon from '../SvgIcons/BottomNavBar/WishList'
import ShoppingBagIcon from '../SvgIcons/GeneralIcons/ShoppingBagIcon'
import { useRouter } from 'expo-router';
import TextScallingFalse from '../Texts/TextScallingFalse'
import TickMarkWhiteIcon from '../SvgIcons/GeneralIcons/TickMarkWhite'

interface ProductDetailNavBarProps {
    isPreview?: boolean;
}
const ProductDetailNavBar: React.FC<ProductDetailNavBarProps> = ({ isPreview = false }) => {
    const router = useRouter();
    return (
        <View style={styles.TopBarContainer}>
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.5} style={styles.TopBarButtons}>
                <BackIcon />
            </TouchableOpacity>
            {isPreview ? (
                <View style={{ paddingHorizontal: 18, paddingVertical: 2, backgroundColor: 'rgba(128,128,128,0.6)', borderRadius: 20 }}>
                    <TextScallingFalse style={{ color: 'white', fontSize: 20, fontWeight: '400' }}>Preview</TextScallingFalse>
                </View>
            ) : (
                <View style={styles.TopBarRightSideSection}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.TopBarButtons}>
                        <WishListIcon color="#ffffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={styles.TopBarButtons}>
                        <ShoppingBagIcon color="#ffffffff" />
                    </TouchableOpacity>
                </View>
            )}
            {
                isPreview ? (
                    <TouchableOpacity style={[styles.TopBarButtons,{backgroundColor:'#FE386A'}]}>
                        <TickMarkWhiteIcon />
                    </TouchableOpacity>
                ) : (
                    null
                )
            }
        </View>
    )
}

export default ProductDetailNavBar

const styles = StyleSheet.create({
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
        backgroundColor: 'rgba(128,128,128,0.6)',
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
})