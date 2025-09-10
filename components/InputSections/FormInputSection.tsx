import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import TextScallingFalse from "../Texts/TextScallingFalse";

interface TextInputSectionProps extends TextInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    cursorColor?: string;
    secureTextEntry?: boolean; // Accept secureTextEntry as a prop
    customStyle?: object;
}

const FormInputSection: React.FC<TextInputSectionProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    keyboardType,
    autoCapitalize,
    cursorColor,
    secureTextEntry, // Destructure secureTextEntry
    customStyle,
    multiline,
    numberOfLines,
}) => {
    return (
        <View>
            {label && (
                <TextScallingFalse style={{ color: "black", fontSize: 15, fontWeight: "500", padding: 2}}>
                    {label}
                </TextScallingFalse>
            )}
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
                textAlignVertical={"top"}
                cursorColor={'grey'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 44,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        color: "black",
        fontSize: 18,
        paddingLeft: 10,
        paddingEnd: 10,
        paddingTop: 8,
        paddingBottom: 8,
    },
});

export default FormInputSection;
