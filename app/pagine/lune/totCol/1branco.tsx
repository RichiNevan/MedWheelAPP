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
        {language === "prt" && <Text style={styles.title}>Branco</Text>}
        {language === "eng" && <Text style={styles.title}>White</Text>}
        {language === "ita" && <Text style={styles.title}>Bianco</Text>}

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/branco.jpg")}
        />
</View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O branco é a cor associada ao ganso-da-neve e à Lua da Renovação da
            Terra. {"\n"}
            Este é o branco da neve que vem com o inverno: o branco que faz tudo
            parecer novo e cintilante. {"\n"}
            Branco é a presença de todas as cores, a soma de todas as cores.
            Embora pareça não ter cor, ela é, na verdade, toda cor. {"\n"}O
            branco é considerado a cor da iluminação, perfeição e evolução
            avançada. {"\n"}
            Muitas pessoas invocam luz branca para cobrir e proteger-se de
            quaisquer energias negativas que possam estar ao seu redor. {"\n"}
            Embora o branco possa proteger, ele também pode cegá-lo para o fato
            de que você deve trabalhar para conhecer a si mesmo, a fim de ter a
            mais verdadeira proteção contra qualquer coisa que possa ser
            prejudicial. {"\n"}
            Ter branco ao seu redor encoraja sentimentos de pureza,
            tranquilidade, paz, equilíbrio, serenidade, compaixão, proteção e
            altruísmo.{" "}
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            White is the color associated with the snow goose and the Moon of
            Earth’s Renewal. {"\n"}
            This is the white of snow that comes with winter: the white that
            makes everything seem new and sparkling. {"\n"}
            White is the presence of all colors, the sum of all colors. Although
            it appears colorless, it is, in fact, all colors. {"\n"}
            White is considered the color of enlightenment, perfection, and
            advanced evolution. {"\n"}
            Many people invoke white light to cover and protect themselves from
            any negative energies that may surround them. {"\n"}
            Although white can protect, it can also blind you to the fact that
            you must work to know yourself, in order to have the truest
            protection against anything that could be harmful. {"\n"}
            Having white around you encourages feelings of purity, tranquility,
            peace, balance, serenity, compassion, protection, and altruism.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il bianco è il colore associato all'oca delle nevi e alla Luna della
            Rinnovazione della Terra. {"\n"}
            Questo è il bianco della neve che arriva con l'inverno: il bianco
            che fa sembrare tutto nuovo e scintillante. {"\n"}
            Il bianco è la presenza di tutti i colori, la somma di tutti i
            colori. Sebbene sembri privo di colore, in realtà è tutti i colori.{" "}
            {"\n"}
            Il bianco è considerato il colore dell'illuminazione, della
            perfezione e dell'evoluzione avanzata. {"\n"}
            Molte persone invocano la luce bianca per coprirsi e proteggersi da
            qualsiasi energia negativa che potrebbe essere intorno a loro.{" "}
            {"\n"}
            Anche se il bianco può proteggere, può anche accecarti al fatto che
            devi lavorare per conoscere te stesso, al fine di avere la
            protezione più vera contro qualsiasi cosa che possa essere dannosa.{" "}
            {"\n"}
            Avere il bianco intorno a te incoraggia sentimenti di purezza,
            tranquillità, pace, equilibrio, serenità, compassione, protezione e
            altruismo.
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
    height: 290,
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
    bottom: 10,
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
