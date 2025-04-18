import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useSettings } from "@/app/SettingsContext";
import { useNavigation } from "expo-router";

const Inverno = () => {
  const { language } = useSettings();
  const navigation = useNavigation()

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
    <ImageBackground source={require("@/assets/images/background.jpg")}>
      <ScrollView style={styles.scrollView}>
        {language === "prt" && <Text style={styles.title}>Verbasco</Text>}
        {language === "eng" && <Text style={styles.title}>Mullein</Text>}
        {language === "ita" && <Text style={styles.title}>Verbasco</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/verbasco.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Esta planta alta de folhas aveludadas é uma curadora versátil.{"\n"}
            O seu chá é bom para aliviar membranas mucosas e para fortalecer os
            pulmões, coração, vesícula, rins e fígado. Ajuda a aliviar problemas
            nervosos e é um bom adstringente.{"\n"}
            Usado externamente, o chá ajuda a curar hemorroidas, úlceras,
            tumores, irritações da garganta, e flacidez muscular.{"\n"}O óleo
            desta planta há muito tem sido utilizado para os ouvidos, contusões,
            verrugas, entorses e rachaduras da pele.{"\n"}O Verbasco nos ajuda a
            explorar as partes serenas e curativas de nossa natureza.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            This tall plant with velvety leaves is a versatile healer.{"\n"}
            Its tea is good for relieving mucous membranes and strengthening the
            lungs, heart, gallbladder, kidneys, and liver. It helps alleviate
            nervous problems and is a good astringent.{"\n"}
            Used externally, the tea helps heal hemorrhoids, ulcers, tumors,
            throat irritations, and muscle flaccidity.{"\n"}
            The oil from this plant has long been used for ears, bruises, warts,
            sprains, and skin cracks.{"\n"}
            Mullein helps us explore the serene and healing parts of our nature.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Questa pianta alta con foglie vellutate è una curatrice versatile.
            {"\n"}
            Il suo tè è utile per alleviare le membrane mucose e per rinforzare
            i polmoni, il cuore, la cistifellea, i reni e il fegato. Aiuta ad
            alleviare i problemi nervosi ed è un buon astringente.{"\n"}
            Usato esternamente, il tè aiuta a guarire emorroidi, ulcere, tumori,
            irritazioni alla gola e flaccidità muscolare.{"\n"}
            L'olio di questa pianta è stato a lungo usato per le orecchie, le
            contusioni, le verruche, le distorsioni e le screpolature della
            pelle.{"\n"}
            La verbasco ci aiuta a esplorare le parti serene e curative della
            nostra natura.
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
    marginBottom: 60,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Cocchin",
    color: "darkred",
    margin: 20,
  },
  imageView: {
    flex: 1,
    height: 300,
    width: 350,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "black",
  },

  image: {
    resizeMode: "contain",
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
