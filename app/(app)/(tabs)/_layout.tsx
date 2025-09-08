// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import HomeIcon from "../../../components/SvgIcons/BottomNavBar/HomeIcon";
import ExploreIcon from "../../../components/SvgIcons/BottomNavBar/ExploreIcon";
import Wishlist from "../../../components/SvgIcons/BottomNavBar/WishList";
import ProfileIcon from "../../../components/SvgIcons/BottomNavBar/ProfileIcon";
import TextScallingFalse from "../../../components/Texts/TextScallingFalse";

const tabs = [
  { name: "home", title: "Home", icon: HomeIcon, href: "(app)/(tabs)/home" },
  { name: "explore", title: "Explore", icon: ExploreIcon, href: "(app)/(tabs)/explore" },
  { name: "cart", title: "Cart", icon: Wishlist, href: "(app)/(tabs)/wishlist" },
  { name: "profile", title: "Profile", icon: ProfileIcon, href: "(app)/(tabs)/profile" },
];

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#12956B", // Qilin primary color
          tabBarInactiveTintColor: "#A0A0A0",
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
              height: 70,
              paddingTop: 15,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: "#fff",
              borderColor: "#ddd",
              borderWidth: 0.5,
            },
            default: {
              height: 60,
              paddingTop: 5,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: "#fff",
              borderColor: "#ddd",
              borderWidth: 0.5,
            },
          }),
        }}
      >
        {tabs.map(({ name, title, icon: Icon, href }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title,
              tabBarButton: ({ onPress, accessibilityState }) => {
                const isSelected = accessibilityState?.selected;
                return (
                  <TouchableOpacity
                    onPress={onPress}
                    activeOpacity={0.7}
                    style={styles.tabButton}
                  >
                    <Icon color={isSelected ? "#12956B" : "#A0A0A0"} />
                    <TextScallingFalse
                      style={[
                        styles.tabText,
                        { color: isSelected ? "#12956B" : "#A0A0A0" },
                      ]}
                    >
                      {title}
                    </TextScallingFalse>
                  </TouchableOpacity>
                );
              },
            }}
          />
        ))}
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 10,
    fontWeight: "600",
    marginTop: 2,
  },
});
