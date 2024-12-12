import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import MenuButton from "@/components/MenuButton";
import InfoMenu from "@/components/InfoMenu";
import { SafeAreaView } from "react-native";

const InfoScreen = () => {
  const [infoMenuVisible, setInfoMenuVisible] = useState<boolean>(false);

  function ToggleInfoMenu() {
    setInfoMenuVisible(!infoMenuVisible);
  }

  return (
    <ImageBackground
      source={require("@/assets/images/background.jpg")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>The Medicine Wheel</Text>
        <View style={styles.description}>
          <Text style={styles.text}>
            Este aplicativo è um portal de accesso a Roda Medicinal, come
            estudada e ensinada por Leo Artese, segundo a tradiçao Lakota e os
            ensinamentos de Sun Bear e Kenneth Meadows.{"\n"} ~{"\n"}
            Apertando no botao do meio, voce poderà acessar a roda, e a um menu
            com todas as informaçoes relativas a esse momento do ano.{"\n"}~
            {"\n"} Nas impostçoes, voce poderà escolher o idioma, e o emisferio
            do seu interesse.
          </Text>
        </View>
        <View style={styles.bookIcon}>
          <MenuButton onPress={ToggleInfoMenu} />
        </View>

        {infoMenuVisible && (
          <InfoMenu isVisible={infoMenuVisible} onClose={ToggleInfoMenu} />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  description: {
    width: "85%",
    top: '7%'
  },
  text: {
    textAlign: "center",
    fontFamily: "Cocchin",
    fontSize: 15,
  },
  title: {
    fontSize: 38,
    fontFamily: "CocchinBold",
    color: "rgb(30, 60, 80)",
    fontWeight: 500
  },
  container: {
    flex: 1,
    top: "7%",
    width: "95%",
    height: 60,
    marginHorizontal: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bookIcon: {
    top: '20%'
  }
});
