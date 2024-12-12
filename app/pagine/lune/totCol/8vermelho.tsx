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
        {language === "prt" && <Text style={styles.title}>VERMELHO</Text>}
        {language === "eng" && <Text style={styles.title}>RED</Text>}
        {language === "ita" && <Text style={styles.title}>ROSSO</Text>}

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/vermelho.jpg")}
        />
</View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A cor associada ao esturjão e à Lua das Frutas Maduras é vermelho.
            {"\n"}
            Este é o vermelho da framboesa madura, o vermelho da mais valorizada
            das granadas.{"\n"} É o vermelho da força vital, o vermelho da
            vontade forte. Este é um vermelho que pode significar orgulho,
            ganância, sexualidade irrefletida e ações erráticas.{"\n"} Ter essa
            cor ao seu redor aumentará sua energia e poder.{"\n"} Ele também irá
            desafiá-lo a moderar suas ações com o pensamento.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The color associated with the sturgeon and the Moon of the Ripe
            Fruits is red.{"\n"}
            This is the red of ripe raspberries, the red of the most prized
            garnets.{"\n"} It is the red of life force, the red of strong will.
            This is a red that can signify pride, greed, unreflected sexuality,
            and erratic actions.{"\n"} Having this color around you will enhance
            your energy and power.{"\n"} It will also challenge you to moderate
            your actions with thought.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il colore associato allo storione e alla Luna dei Frutti Maturi è il
            rosso.{"\n"}
            Questo è il rosso dei lamponi maturi, il rosso delle più preziose
            granate.{"\n"} È il rosso della forza vitale, il rosso della volontà
            forte. Questo è un rosso che può significare orgoglio, avidità,
            sessualità non riflessa e azioni erratiche.{"\n"} Avere questo
            colore intorno a te aumenterà la tua energia e il tuo potere.{"\n"}{" "}
            Ti sfiderà anche a moderare le tue azioni con il pensiero.
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
    height: 300,
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
    resizeMode: 'contain'
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