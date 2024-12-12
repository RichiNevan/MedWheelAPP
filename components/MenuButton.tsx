import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

interface MenuProps {
  onPress: () => void;  // onClose is a function that takes no arguments and returns nothing
}

const MenuButton: React.FC<MenuProps> = ({onPress}) => {

  return (
    <TouchableOpacity 
    onPress={onPress}>
      <Image
        style={styles.book}
        source={require("@/assets/images/bookIcon2.png")}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  book: {
    width: 80,
    height: 50,
  },
});
