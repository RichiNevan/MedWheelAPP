import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import WheelIcon from "@/components/WheelIcon";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(22, 22, 22, 0.3)",
          position: "absolute",
          borderTopWidth: 1.5,
          borderColor: "rgba(100, 100, 100, 0.7)",
        },
      }}
    >
      <Tabs.Screen
        name="info"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={32}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <WheelIcon style={styles.wheelIconActive} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={30}
            />
            
          ),
        }}
      />
    </Tabs>
  );
};


export default TabLayout;

const styles = StyleSheet.create({
  wheelIconActive: {
    width: 60,
    height: 60,
    bottom: 20,
  },
});
