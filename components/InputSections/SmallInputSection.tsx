import React from "react";
import { StyleSheet, TextInput, TextInputProps, View, TouchableOpacity } from "react-native";
import TextScallingFalse from "../Texts/TextScallingFalse";

interface TextInputSectionProps extends TextInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChangeText?: (text: string) => void;
    cursorColor?: string;
    secureTextEntry?: boolean; // Accept secureTextEntry as a prop
    customStyle?: object;
    selectMode?: boolean;
    onPress?: () => void;
}

const SmallInputSection: React.FC<TextInputSectionProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    keyboardType,
    autoCapitalize,
    cursorColor,
    secureTextEntry, // Destructure secureTextEntry
    customStyle,
    selectMode = false,
    onPress,
    multiline,
    numberOfLines,
}) => {
    return (
        <View>
            {label && (
                <TextScallingFalse style={{ color: "black", fontSize: 13, fontWeight: "500", padding: 2}}>
                    {label}
                </TextScallingFalse>
            )}
            {selectMode ? (
                <TouchableOpacity onPress={onPress} style={[styles.input, customStyle, {justifyContent:'center'}]}>
                    <TextScallingFalse style={{ color: value ? "black" : "grey", fontSize: 16 }}>
                        {value || placeholder || "Select an option"}
                    </TextScallingFalse >
                </TouchableOpacity>
            ) : (
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={"transparent"}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    secureTextEntry={secureTextEntry} // Add secureTextEntry here
                    style={[styles.input, customStyle]}
                    textAlignVertical={"center"}
                    cursorColor={'grey'}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 35,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        color: "black",
        fontSize: 13,
        paddingLeft: 10,
        paddingEnd: 10,
    },
});

export default SmallInputSection;
