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

const Support = () => {
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
        {language === "prt" && <Text style={styles.title}>SUPORTE-NOS!</Text>}
        {language === "eng" && <Text style={styles.title}>SUPPORT US!</Text>}
        {language === "ita" && <Text style={styles.title}>SUPPORTACI!</Text>}

        {language === "prt" && (
          <Text style={styles.testo}>
            Ainda há muito material que poderia ser adicionado à Roda, e as
            traduções poderiam ser melhoradas. Com o seu apoio, mais tempo e
            esforço serão dedicados a este projeto!
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            There is still a lot of material that could be added to The Wheel,
            and the translations could use some improvement. With your support,
            more time and effort will be dedicated to this project!
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            C'è ancora molto materiale che potrebbe essere aggiunto alla Ruota,
            e le traduzioni potrebbero essere migliorate. Con il tuo supporto,
            più tempo ed energie saranno dedicati a questo progetto!
          </Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Support;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  testo: {
    margin: 15,
    textAlign: "center",
    fontSize: 17,
    lineHeight: 23,
  },
  scrollView: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Cocchin",
    color: "darkred",
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
