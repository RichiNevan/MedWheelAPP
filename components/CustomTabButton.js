import React, { useEffect, useState, forwardRef } from "react";
import { Pressable, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

const CustomTabButton = forwardRef((props, ref) => {
  const { iconOn, iconOff, isFocused, onPress, href } = props;
  const router = useRouter();

  const handlePress = () => {
    onPress(); // update focus
    router.push(href); // navigate
  };

  return (
    <View>
      <TouchableOpacity
        ref={ref}
        onPress={handlePress}
        style={[styles.button, isFocused && styles.focusedButton]}
      >
        <Ionicons
          name={isFocused ? iconOn : iconOff}
          size={30}
          color={'pink'}
        />
      </TouchableOpacity>
    </View>
  );
});

CustomTabButton.displayName = "CustomTabButton";
export default CustomTabButton;

const styles = StyleSheet.create({
  button: {
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32.5,
    position: "relative",
    borderColor: "rgba(68, 36, 10, 0.5)",
    borderWidth: 1,
    backgroundColor: 'rgba(68, 36, 10, 0.2)',
  },
});
