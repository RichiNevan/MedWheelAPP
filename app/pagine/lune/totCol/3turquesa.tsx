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
        {language === "prt" && <Text style={styles.title}>Turquesa</Text>}
        {language === "eng" && <Text style={styles.title}>Turquoise</Text>}
        {language === "ita" && <Text style={styles.title}>Turchese</Text>}

        
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/turquesa.jpg")}
        />


        {language === "prt" && (
          <Text style={styles.testo}>
            Turquesa (azul-verde) é a cor associada ao puma e à Lua dos Grandes
            Ventos.{"\n"} O azul da turquesa é um azul celeste, semelhante ao
            céu azul representando o Pai Sol.{"\n"} Esse azul pode indicar
            sentimentos idealistas, altruístas, artísticos e espirituais,
            sentimentos melancólicos e lutas autoimpostas.{"\n"} O verde da
            turquesa ajuda a equilibrar essas duas tendências com a serenidade
            de uma verdadeira conexão com a natureza. {"\n"}Ter turquesa ao seu
            redor ajuda a fortalecer quaisquer habilidades artísticas ou de cura
            latentes. Também ajuda a sentir a conexão que você tem entre o céu e
            a terra.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Turquoise (blue-green) is the color associated with the cougar and
            the Moon of the Great Winds.
            {"\n"}The blue of turquoise is a celestial blue, similar to the blue
            sky representing Father Sun.
            {"\n"}This blue can indicate idealistic, altruistic, artistic, and
            spiritual feelings, as well as melancholic emotions and self-imposed
            struggles.
            {"\n"}The green in turquoise helps balance these two tendencies with
            the serenity of a true connection to nature.
            {"\n"}Having turquoise around you helps strengthen any latent
            artistic or healing abilities. It also helps you feel the connection
            you have between the sky and the earth.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Turchese (blu-verde) è il colore associato al puma e alla Luna dei
            Grandi Venti.
            {"\n"}Il blu del turchese è un blu celestiale, simile al cielo
            azzurro che rappresenta il Padre Sole.
            {"\n"}Questo blu può indicare sentimenti idealistici, altruistici,
            artistici e spirituali, oltre a emozioni malinconiche e lotte
            autoimposte.
            {"\n"}Il verde del turchese aiuta a bilanciare queste due tendenze
            con la serenità di una vera connessione con la natura.
            {"\n"}Avere il turchese intorno a te aiuta a rafforzare eventuali
            abilità artistiche o curative latenti. Aiuta anche a percepire la
            connessione che hai tra il cielo e la terra.
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
    fontSize: 17,
    lineHeight: 23,
  },
  scrollView: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 60
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Cocchin",
    color: "darkred",
    margin: 20
  },
  imageView: {
    flex: 1,
    height: 400,
    width: 265,
    margin: 'auto',
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7
  },

  image: {
    resizeMode: 'contain',
    margin: 'auto',
    marginVertical: 30
  },
  headerBg: {
    width: '100%',
    height: '100%',
    opacity: 0.95
  },
  header: {
    borderBlockColor: 'white',
   borderColor: 'white',
  }
});
