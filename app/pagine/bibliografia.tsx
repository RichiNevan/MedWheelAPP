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

const Inverno = () => {
  const { language } = useSettings();
  const navigation = useNavigation();

  useEffect(() => {
    // Dynamically setting header options when this page is loaded
    navigation.setOptions({
      title: '',
      headerBackground: () => (
        <ImageBackground source={require('@/assets/images/headerbg.jpg')}
        style={styles.headerBg} />
      ),
      headerStyle: styles.header,
      headerTintColor: 'white',
      headerBackTitle: language === 'prt' ? 'Voltar' : language === 'ita' ? 'Indietro' : 'Back'
    });
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("@/assets/images/background.jpg")}
    >
      <ScrollView style={styles.scrollView}>
        {language === "prt" && <Text style={styles.title}>BIBLIOGRAFIA</Text>}
        {language === "eng" && <Text style={styles.title}>BIBLIOGRAPHY</Text>}
        {language === "ita" && <Text style={styles.title}>BIBLIOGRAFIA</Text>}

        {language === "prt" && (
          <>
            <Text style={styles.testo}>
              Bibliografia: Kenneth Meadows – The Medicine Way – Element {"\n"}
              Sun Bear, Wabun Wind & Crysalis Mulligan – Dancing With The Wheel
              – Fireside {"\n"}Richard Wilhelm – I Ching – Pensamento{"\n"}{" "}
              Willian Bloom – Tempos Sagrados – Triom {"\n"}Richard Heinberg –
              Celebrando os Solstícios – Madras
            </Text>
          </>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Bibliografia: Kenneth Meadows – The Medicine Way – Element {"\n"}
            Sun Bear, Wabun Wind & Crysalis Mulligan – Dancing With The Wheel –
            Fireside {"\n"}Richard Wilhelm – I Ching – Pensamento{"\n"} Willian
            Bloom – Tempos Sagrados – Triom {"\n"}Richard Heinberg – Celebrando
            os Solstícios – Madras
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Bibliografia: Kenneth Meadows – The Medicine Way – Element {"\n"}
            Sun Bear, Wabun Wind & Crysalis Mulligan – Dancing With The Wheel –
            Fireside {"\n"}Richard Wilhelm – I Ching – Pensamento{"\n"} Willian
            Bloom – Tempos Sagrados – Triom {"\n"}Richard Heinberg – Celebrando
            os Solstícios – Madras
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
    fontSize: 18,
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
