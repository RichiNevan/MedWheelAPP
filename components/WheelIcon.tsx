import { StyleSheet, Text, ViewStyle, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  Easing,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface WheelProps {
  style?: ViewStyle;
}

const WheelIcon: React.FC<WheelProps> = ({ style }) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 30000,
        easing: Easing.linear,
      }),
      -1, // infinite
      false // don't reverse
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value % 360}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.wheel, style, animatedStyle]}>
      <View style={{ backgroundColor: "red", width: "50%", height: "50%" }} />
      <View
        style={{
          backgroundColor: "rgb(250 230 30)",
          width: "50%",
          height: "50%",
        }}
      />
      <View style={{ backgroundColor: "black", width: "50%", height: "50%" }} />
      <View style={{ backgroundColor: "white", width: "50%", height: "50%" }} />
    </Animated.View>
  );
};

export default WheelIcon;

const styles = StyleSheet.create({
  wheel: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 65,
    height: 65,
    overflow: "hidden",
    borderRadius: "50%",
    borderColor: "rgba(70, 70, 70, 0.9)",
    borderWidth: 1.5,
  },
});
