import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TabTrigger } from "expo-router/ui";
import { Ionicons } from "@expo/vector-icons";
import CustomTabButton from "./CustomTabButton";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import WheelIcon from "./WheelIcon";

const CustomTabList = () => {
  const [activeTab, setActiveTab] = useState("index");
  const tabBarHeight = useSharedValue(60);

  return (
    <Animated.View
      style={[
        styles.tabList
      ]}
    >
      <TabTrigger name="home" asChild>
        <CustomTabButton
          isFocused={activeTab === "index"}
          onPress={() => setActiveTab("index")}
          href="/"
        ><WheelIcon /></CustomTabButton>
      </TabTrigger>
      <TabTrigger name="settings" asChild>
        <CustomTabButton
          iconOn="settings"
          iconOff="settings-outline"
          isFocused={activeTab === "settings"}
          onPress={() => setActiveTab("settings")}
          href="/settings"
        />
      </TabTrigger>

      <TabTrigger name="info" asChild>
        <CustomTabButton
          iconOn="info"
          iconOff="info-outline"
          isFocused={activeTab === "info"}
          onPress={() => setActiveTab("info")}
          href="/info"
        />
      </TabTrigger>
    </Animated.View>
  );
};

export default CustomTabList;

const styles = StyleSheet.create({
  tabList: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    display: "flex",
    height: 60,
    width: "100%",
    zIndex: 9999,
  },
});
