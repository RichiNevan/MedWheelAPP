import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useSettings } from "../SettingsContext";
import { useNavigation } from "expo-router";
import WebView from "react-native-webview";

const Inverno = () => {
  const { language } = useSettings();
  const navigation = useNavigation();

  useEffect(() => {
    // Dynamically setting header options when this page is loaded
    navigation.setOptions({
      title: "",
      headerBackground: () => (
        <ImageBackground
          source={require("@/assets/images/headerbg.jpg")}
          style={styles.headerBg}
        />
      ),
      headerStyle: styles.header,
      headerTintColor: "white",
      headerBackTitle:
        language === "prt"
          ? "Voltar"
          : language === "ita"
          ? "Indietro"
          : "Back",
    });
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("@/assets/images/background.jpg")}
    >
      <ScrollView style={styles.scrollView}>
        {language === "prt" && <Text style={styles.title}>CONTATOS</Text>}
        {language === "eng" && <Text style={styles.title}>CONTACTS</Text>}
        {language === "ita" && <Text style={styles.title}>CONTATTI</Text>}

        {language === "prt" && (
          <Text style={styles.testo}>
            E-mail: {"\n"}
            {"\n"} aeternalwheel@gmail.com
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            E-mail:{"\n"}
            {"\n"} aeternalwheel@gmail.com
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            E-mail:{"\n"}
            {"\n"} aeternalwheel@gmail.com
          </Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Inverno;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  testo: {
    margin: 15,
    textAlign: "center",
    fontSize: 20,
    lineHeight: 23,
    fontFamily: "Cocchin",
  },
  scrollView: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Cocchin",
    color: "darkred",
    margin: 20,
  },
  headerBg: {
    width: "100%",
    height: "100%",
    opacity: 0.95,
  },
  header: {
    borderBlockColor: "white",
    borderColor: "white",
  },
});
