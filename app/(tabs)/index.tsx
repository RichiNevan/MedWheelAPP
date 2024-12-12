import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ImageBackground } from "react-native";
import TheWheelPRT from "@/components/TheWheelPRT"
import TheWheelENG from "@/components/TheWheelENG";
import TheWheelITA from "@/components/TheWheelITA";
import MenuButton from "@/components/MenuButton";
import { useState } from "react";
import WheelMenu from "@/components/WheelMenu";
import { useSettings } from "../SettingsContext";

export default function Index() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const {language} = useSettings( )

  function ToggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <ImageBackground
      source={require("@/assets/images/background.jpg")}
      style={styles.background}
    >
      <View style={styles.welcome}>
        {language === 'prt' && <TheWheelPRT />}
        {language === 'eng' && <TheWheelENG />}
        {language === 'ita' && <TheWheelITA />}
        
        <View style={styles.bookIcon}>
          <MenuButton onPress={ToggleMenu} />
        </View>
   
          {menuVisible && 
          <WheelMenu 
          isVisible={menuVisible}
          onClose={ToggleMenu}/>}
          
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  bookIcon: {
    position: "absolute",
    bottom: 100,
    zIndex: 2,
    elevation: 2
  },
});
