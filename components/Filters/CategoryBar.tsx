import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse'
import { useGetHomeCategoriesQuery } from '../../reduxStore/api/filters/categoryApi'

type Props = {
    selectedCategory: string | null;
    onCategorySelect: (category: string | null) => void;
};

const CategoryBar: React.FC<Props> = ({ selectedCategory, onCategorySelect }) => {
    // States
    const { data , isLoading, isError } = useGetHomeCategoriesQuery();
    const categories: string[] = data?.options || [];
    if (isLoading) return <TextScallingFalse>Loading categories...</TextScallingFalse>;
    if (isError) return <TextScallingFalse>Error loading categories</TextScallingFalse>;


    return (
        <View style={styles.container}>
            {/* Category bar Heading */}
            <View style={styles.header}>
                <TextScallingFalse style={styles.headerText}>Category</TextScallingFalse>
                <TouchableOpacity onPress={() => onCategorySelect(null)} activeOpacity={0.6} style={styles.Button}>
                    <TextScallingFalse style={styles.ButtonText}>See All</TextScallingFalse>
                </TouchableOpacity>
            </View>
            {/* Category Options Button */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.ScrollingView}>
                {categories.map((category: string) => (
                    <TouchableOpacity
                        key={category}
                        onPress={() => onCategorySelect(category)}
                        style={[styles.optionButton, selectedCategory === category && styles.selectedButton]}
                    >
                        <TextScallingFalse style={[styles.buttonName, selectedCategory === category && styles.selectedText]}>
                            {category}
                        </TextScallingFalse>
                    </TouchableOpacity>
                ))}
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