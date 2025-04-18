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
        {language === "prt" && <Text style={styles.title}>Prata</Text>}
        {language === "eng" && <Text style={styles.title}>Silver</Text>}
        {language === "ita" && <Text style={styles.title}>Argento</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/prata.png")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A prata é o totem mineral associado à Lua de Limpeza e Descanso.
            {"\n"} A prata tem sido considerada um dos minerais mais preciosos
            da Terra por causa de seu brilho, beleza e brilho.{"\n"} A prata é
            maleável e foi moldada em muitas formas de arte. Tem propriedades
            mágicas, permite que a energia emocional adequada flua e ajuda a
            liberar qualquer energia espiritual congestionada.{"\n"} A prata
            encoraja qualidades intuitivas, telepáticas e visionárias.{"\n"}{" "}
            Este mineral pode ajudá-lo a despertar para a sua natureza mais
            elevada e pode ajudar a curar o seu eu superior.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Silver is the mineral totem associated with the Moon of Cleansing
            and Rest.{"\n"}
            Silver has been considered one of the most precious minerals on
            Earth because of its shine, beauty, and brilliance.{"\n"}
            Silver is malleable and has been shaped into many forms of art. It
            has magical properties, allows proper emotional energy to flow, and
            helps release any stagnant spiritual energy.{"\n"}
            Silver encourages intuitive, telepathic, and visionary qualities.
            {"\n"}
            This mineral can help you awaken to your higher nature and assist in
            healing your higher self.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            L'argento è il totem minerale associato alla Luna della Pulizia e
            del Riposo.{"\n"}
            L'argento è stato considerato uno dei minerali più preziosi della
            Terra per il suo splendore, la sua bellezza e il suo luccichio.
            {"\n"}
            L'argento è malleabile e è stato modellato in molte forme d'arte. Ha
            proprietà magiche, permette il flusso dell'energia emotiva adeguata
            e aiuta a liberare qualsiasi energia spirituale stagnante.{"\n"}
            L'argento incoraggia qualità intuitive, telepatiche e visionarie.
            {"\n"}
            Questo minerale può aiutarti a risvegliarti alla tua natura più
            elevata e può aiutare a curare il tuo sé superiore.
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
    height: 400,
    width: 300,
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
