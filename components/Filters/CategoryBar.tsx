import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse'

const CategoryBar = () => {
    // States
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

    const categories = [
        { id: 1, name: "Streetwear" },
        { id: 2, name: "Vintage" },
        { id: 3, name: "Formal" },
        { id: 4, name: "Casual" },
        { id: 5, name: "Ethnic" },
        { id: 6, name: "Ethnic" },
        { id: 7, name: "Ethnic" },
    ];

    return (
        <View style={styles.container}>
            {/* Category bar Heading */}
            <View style={styles.header}>
                <TextScallingFalse style={styles.headerText}>Category</TextScallingFalse>
                <TouchableOpacity activeOpacity={0.6} style={styles.Button}>
                    <TextScallingFalse style={styles.ButtonText}>See All</TextScallingFalse>
                </TouchableOpacity>
            </View>
            {/* Category Options Button */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.ScrollingView}>
                {categories.map((category) => {
                    const isSelected = selectedCategory === category.id
                    return (
                        <TouchableOpacity onPress={() => setSelectedCategory(category.id)} activeOpacity={0.5} key={category.id} style={[styles.optionButton, isSelected && styles.selectedButton]}>
                            <TextScallingFalse style={[styles.buttonName, isSelected && styles.selectedText]}>{category.name}</TextScallingFalse>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default CategoryBar

const styles = StyleSheet.create({
    buttonName: {
        color: 'grey',
        fontSize: 15
    },
    optionButton: {
        borderBlockColor: '#6d6d6dff',
        borderWidth: 1,
        borderRadius: 90,
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    selectedButton: {
        backgroundColor: '#FE386A',
        borderColor: '#FE386A',
    },
    selectedText: {
        color: 'white',
        fontWeight: '500',
    },
    ScrollingView: {
        marginVertical: 10,
        paddingStart: 18,
        paddingEnd: 20,
        gap: 7
    },
    container: {
        width: '100%',
        gap: 3
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        paddingHorizontal: 20
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500'
    },
    Button: {
        width: 60
    },
    ButtonText: {
        alignSelf: 'center',
        fontSize: 15,
        color: "#6B6B6B"
    }
})