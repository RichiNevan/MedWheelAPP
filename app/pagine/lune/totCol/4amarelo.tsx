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
        {language === "prt" && <Text style={styles.title}>Amarelo</Text>}
        {language === "eng" && <Text style={styles.title}>Yellow</Text>}
        {language === "ita" && <Text style={styles.title}>Giallo</Text>}

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/yellow.jpg")}
        />
</View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O amarelo é a cor do gavião-vermelho e da Lua do Florescer das
            árvores. {"\n"}Este é o amarelo do sol da primavera brilhando do
            céu, a cor da flor dente-de-leão em plena floração. {"\n"}Esse
            amarelo é uma cor alegre, que estimula a boa natureza e a
            inteligência nativa. É uma cor que lembra a luz do sol, felicidade e
            energia. {"\n"}Ter amarelo em seu ambiente pode lhe dar maior
            acuidade intelectual, mais receptividade à inspiração, um sentimento
            de bem-estar geral e felicidade com outras pessoas.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The yellow is the color of the red-tailed hawk and the Moon of the
            Blossoming trees. {"\n"}This is the yellow of the spring sun shining
            in the sky, the color of the dandelion flower in full bloom. {"\n"}
            This yellow is a joyful color, which stimulates good nature and
            native intelligence. It is a color that reminds of sunlight,
            happiness, and energy. {"\n"}Having yellow in your environment can
            give you greater intellectual acuity, more receptiveness to
            inspiration, a sense of overall well-being, and happiness with
            others.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il giallo è il colore del falco dalla coda rossa e della Luna della
            Fioritura degli alberi. {"\n"}Questo è il giallo del sole
            primaverile che splende nel cielo, il colore del fiore di tarassaco
            in piena fioritura. {"\n"}Questo giallo è un colore gioioso, che
            stimola la buona natura e l'intelligenza innata. È un colore che
            ricorda la luce del sole, la felicità e l'energia. {"\n"}Avere il
            giallo nel tuo ambiente può donarti maggiore acutezza intellettuale,
            più ricettività all'ispirazione, un senso di benessere generale e
            felicità con le altre persone.
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
    height: 170,
    width: 265,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7,
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
