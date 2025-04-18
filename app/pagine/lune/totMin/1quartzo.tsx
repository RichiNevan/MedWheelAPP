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
        {language === "prt" && <Text style={styles.title}>Quartzo</Text>}
        {language === "eng" && <Text style={styles.title}>Quartz</Text>}
        {language === "ita" && <Text style={styles.title}>Quarzo</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/quartzo.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O quartzo é o totem mineral associado à Lua da Renovação da Terra.
            {"\n"}
            Embora todas as formas de quartzo possam afetar as pessoas que
            passam por essa posição, o maior efeito vem dos cristais de quartzo
            claros.{"\n"} O quartzo é uma pedra de poder. É um amplificador,
            transmissor e receptor de energia universal e é útil para transmitir
            energia de cura.{"\n"} Fortalece habilidades psíquicas e proféticas.
            Cristal de quartzo dá conhecimento do seu poder e ensina cautela em
            exercê-lo corretamente.{"\n"} Ele lembra que você não seja muito
            duro ou rígido em seus pontos de vista e filosofias. Os cristais
            trazem clareza e renovação nos níveis emocional, físico, mental e
            espiritual. Eles energizam e equilibram os chakras.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Quartz is the mineral totem associated with the Moon of Earth's
            Renewal.{"\n"}
            Although all forms of quartz can affect people who go through this
            position, the greatest effect comes from clear quartz crystals.
            {"\n"}
            Quartz is a stone of power. It is an amplifier, transmitter, and
            receiver of universal energy, and it is useful for transmitting
            healing energy.{"\n"}
            It strengthens psychic and prophetic abilities. Clear quartz crystal
            gives knowledge of your power and teaches caution in using it
            properly.{"\n"}
            It reminds you not to be too harsh or rigid in your views and
            philosophies. Crystals bring clarity and renewal at the emotional,
            physical, mental, and spiritual levels. They energize and balance
            the chakras.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il quarzo è il totem minerale associato alla Luna del Rinnovamento
            della Terra.{"\n"}
            Sebbene tutte le forme di quarzo possano influenzare le persone che
            attraversano questa posizione, il maggiore effetto proviene dai
            cristalli di quarzo trasparente.{"\n"}
            Il quarzo è una pietra di potere. È un amplificatore, trasmettitore
            e ricevitore di energia universale, ed è utile per trasmettere
            energia di guarigione.{"\n"}
            Rafforza le abilità psichiche e profetiche. Il cristallo di quarzo
            dà conoscenza del tuo potere e insegna cautela nell'esercitarlo
            correttamente.{"\n"}
            Ti ricorda di non essere troppo rigido o severo nei tuoi punti di
            vista e nelle tue filosofie. I cristalli portano chiarezza e
            rinnovamento a livello emotivo, fisico, mentale e spirituale.
            Energizzano e bilanciano i chakra.
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
    height: 370,
    width: "95%",
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "black",
  },

  image: {
    height: "100%",
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
