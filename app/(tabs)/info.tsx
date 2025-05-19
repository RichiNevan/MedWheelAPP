import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import MenuButton from "@/components/MenuButton";
import InfoMenu from "@/components/InfoMenu";
import { SafeAreaView } from "react-native";
import { useSettings } from "@/app/SettingsContext";
import { mobile, android, ios } from "../SettingsContext";

const bufalo = require("@/assets/images/bufalone.png");

const InfoScreen = () => {
  const [infoMenuVisible, setInfoMenuVisible] = useState<boolean>(false);
  const { language, theme, bgDark, bgLight } = useSettings();
  console.log('theme', theme)

 

  function ToggleInfoMenu() {
    setInfoMenuVisible(!infoMenuVisible);
  }

  return (
    <ImageBackground
      source={theme === "dark" ? bgDark : bgLight}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>The Medicine Wheel</Text>
        <View style={styles.description}>
          {language === "prt" && (
            <Text
              style={[
                styles.text,
              //  { color: theme === "dark" ? "black" : "black" },
              ]}
            >
              Este aplicativo è um portal de accesso a Roda Medicinal, come
              estudada e ensinada por Leo Artese, segundo a tradiçao Lakota e os
              ensinamentos de Sun Bear e Kenneth Meadows.{"\n"} ~{"\n"}
              Apertando no botao do meio, voce poderà acessar a roda, e a um
              menu com todas, o pelo menos algumas informaçoes relativas a esse
              momento do ano.
              {"\n"}~{"\n"} Nas impostaçoes, voce poderà escolher o idioma, e o
              emisferio do seu interesse.
            </Text>
          )}
          {language === "eng" && (
            <Text style={styles.text}>
              This app is a portal to the Medicinal Wheel, as studied and taught
              by Leo Artese, according to the Lakota tradition and the teachings
              of Sun Bear and Kenneth Meadows.{"\n"} ~{"\n"} By pressing the
              middle button, you can access the wheel and a menu with all, or at
              least some information related to this time of the year.{"\n"} ~
              {"\n"} In the settings, you can choose the language and the
              hemisphere of your interest.
            </Text>
          )}
          {language === "ita" && (
            <Text style={styles.text}>
              Questa app è un portale di accesso alla Ruota di Medicina, come
              studiata e insegnata da Leo Artese, secondo la tradizione Lakota e
              gli insegnamenti di Sun Bear e Kenneth Meadows.{"\n"} ~{"\n"}{" "}
              Premendo il pulsante centrale, potrai accedere alla ruota e a un
              menu con tutte, o per lo meno alcune informazioni relative a
              questo periodo dell'anno.{"\n"} ~{"\n"} Nelle impostazioni, potrai
              scegliere la lingua e l'emisfero di tuo interesse.
            </Text>
          )}
          <Text style={styles.text}></Text>
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
    top: "7%",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontFamily: "Cocchin",
    fontSize: android ? 13 : 15,
  },
  title: {
    fontSize: android ? 30 : 38,
    fontFamily: "CocchinBold",
    color: "rgb(30, 60, 80)",
    fontWeight: 500,
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
    top: "20%",
  },
});
