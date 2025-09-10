import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

interface PageThemeViewProps {
  children: React.ReactNode; // Define children prop
}

const PageThemeView: React.FC<PageThemeViewProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.KeyboardAvoidView}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PageThemeView;

const styles = StyleSheet.create({
  SafeArea:{
    backgroundColor:'white',
    flex: 1
  },
  KeyboardAvoidView:{
     flex: 1, 
     backgroundColor: "white" 
  }
});
