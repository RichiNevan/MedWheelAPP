import { StyleSheet, Text, ViewStyle, View } from "react-native";
import React from "react";

interface WheelProps {
  style?: ViewStyle;
}

const WheelIcon: React.FC<WheelProps> = ({ style }) => {
  return (
    <View style={[styles.wheel, style]}>
      <View style={{ backgroundColor: "red", width: '50%', height: '50%' }} />
      <View style={{ backgroundColor: "rgb(250 240 20)", width: '50%', height: '50%' }} />
      <View style={{ backgroundColor: "black", width: '50%', height: '50%' }} />
      <View style={{ backgroundColor: "white", width: '50%', height: '50%' }} />
    </View>
  );
};

export default WheelIcon;

const styles = StyleSheet.create({
  wheel: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 50,
    height: 50,
    overflow: "hidden",
    borderRadius: "50%",
    borderColor: "rgba(70, 70, 70, 0.9)",
    borderWidth: 1.5,
  },
});
