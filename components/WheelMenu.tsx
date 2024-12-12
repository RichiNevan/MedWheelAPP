import {
  Animated,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Seasons } from "./Seasons";
import Moons from "./Moons";
import Directions from "./Directions";
import { useSettings } from "@/app/SettingsContext";
import { Link } from "expo-router";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const WheelMenu: React.FC<MenuProps> = ({ onClose, isVisible }) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.container}>
          <Pressable style={styles.closeBut} onPress={onClose}>
            <Ionicons name="close" color={"darkred"} size={30} />
          </Pressable>
          <View style={styles.info}>
            <Seasons onSelect={onClose} />
            <Text style={styles.separator}>~</Text>
            <Directions onSelect={onClose} />
            <Text style={styles.separator}>~</Text>
            <Moons onSelect={onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WheelMenu;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  container: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    width: "95%",
    height: "90%",
    margin: "auto",
    overflow: "hidden",
    padding: "1%",
    borderColor: "rgb(30, 60, 80)",
    borderWidth: 2,
    borderRadius: 15,
  },
  closeBut: {
    position: "absolute",
    right: 5,
    width: 30,
    height: 30,
    zIndex: 6,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    width: "95%",
    height: "95%",
    bottom: "0%",
    gap: 15
  },
  separator: {
    textAlign: 'center'
  }
});
