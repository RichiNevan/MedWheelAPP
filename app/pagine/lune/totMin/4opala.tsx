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
        {language === "prt" && <Text style={styles.title}>Opala de Fogo</Text>}
        {language === "eng" && <Text style={styles.title}>Fire Opal</Text>}
        {language === "ita" && <Text style={styles.title}>Opale di Fuoco</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/opala.png")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O opala de fogo é o mineral associado à Lua do Florescer das
            Árvores.{"\n"} Opala é um símbolo de esperança. A pedra pode
            conectar uma pessoa com os poderes do sol, da lua e do fogo.{"\n"}{" "}
            Ele desperta energia e ensina sobre o aproveitamento e a utilização
            do fogo da força vital.{"\n"}A opala pode ser usada para provocar
            intensa energia mental, física e emocional, por isso é útil para
            aliviar sensações de letargia e fadiga. {"\n"}Ele neutraliza a
            estagnação em todos os níveis da vida. A opala aumenta todas as
            qualidades existentes – positivas ou negativas – dentro de você e
            ajuda a sua capacidade de visualizar ou viajar para outros reinos da
            existência.{"\n"} Opala pode ajudá-lo a compreender e curar
            problemas relacionados à sua sexualidade e seu poder.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The fire opal is the mineral associated with the Moon of the
            Blossoming Trees.{"\n"}
            Opal is a symbol of hope. The stone can connect a person with the
            powers of the sun, moon, and fire.{"\n"}
            It awakens energy and teaches about harnessing and utilizing the
            fire of life force.{"\n"}
            Opal can be used to provoke intense mental, physical, and emotional
            energy, making it useful for relieving feelings of lethargy and
            fatigue.{"\n"}
            It neutralizes stagnation at all levels of life. Opal enhances all
            existing qualities – positive or negative – within you and aids your
            ability to visualize or travel to other realms of existence.{"\n"}
            Opal can help you understand and heal issues related to your
            sexuality and power.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            L'opale di fuoco è il minerale associato alla Luna della Fioritura
            degli Alberi.{"\n"}
            L'opale è un simbolo di speranza. La pietra può connettere una
            persona con i poteri del sole, della luna e del fuoco.{"\n"}
            Risveglia l'energia e insegna come sfruttare e utilizzare il fuoco
            della forza vitale.{"\n"}
            L'opale può essere utilizzato per provocare un'intensa energia
            mentale, fisica ed emozionale, perciò è utile per alleviare
            sensazioni di letargia e stanchezza.{"\n"}
            Neutralizza la stagnazione a tutti i livelli della vita. L'opale
            aumenta tutte le qualità esistenti – positive o negative – dentro di
            te e aiuta la tua capacità di visualizzare o viaggiare verso altri
            regni dell'esistenza.{"\n"}
            L'opale può aiutarti a comprendere e curare i problemi legati alla
            tua sessualità e al tuo potere.
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
    height: 350,
    width: 310,
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
