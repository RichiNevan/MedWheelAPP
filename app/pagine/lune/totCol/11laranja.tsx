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
        {language === "prt" && <Text style={styles.title}>Laranja</Text>}
        {language === "eng" && <Text style={styles.title}>Orange</Text>}
        {language === "ita" && <Text style={styles.title}>Arancione</Text>}

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/laranja.jpg")}
        />
</View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A cor associada à Cobra e à Lua Gelada é laranja. {"\n"}Esta é uma
            laranja clara que você pode ver no céu do por do sol, ou na abóbora
            e abóboras amadurecendo no campo.{"\n"} Este laranja significa tanto
            uma pessoa ambiciosa e orgulhosa e uma capaz de sintetizar e aplicar
            o conhecimento que ele ganha da vida.{"\n"} Ter essa cor ao seu
            redor estimulará seu intelecto, sua vitalidade e seu autocontrole.
            {"\n"} Ajudará você a observar a vida mais intensamente e usar as
            informações obtidas tanto para o seu bem quanto para o bem dos
            outros.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The color associated with the Cobra and the Frozen Moon is orange.{" "}
            {"\n"}
            This is a light orange that you can see in the sunset sky, or in the
            pumpkin and squash ripening in the field.{"\n"} This orange
            represents both an ambitious and proud person, as well as one
            capable of synthesizing and applying the knowledge gained from life.
            {"\n"} Having this color around you will stimulate your intellect,
            vitality, and self-control.{"\n"} It will help you observe life more
            intensely and use the information gained both for your own benefit
            and for the benefit of others.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il colore associato alla Cobra e alla Luna Gelata è l'arancione.{" "}
            {"\n"}
            Questo è un arancione chiaro che puoi vedere nel cielo del tramonto,
            o nella zucca e nelle zucche che maturano nei campi.{"\n"} Questo
            arancione rappresenta sia una persona ambiziosa e orgogliosa, che
            una persona capace di sintetizzare e applicare la conoscenza che
            ottiene dalla vita.{"\n"} Avere questo colore intorno a te stimolerà
            il tuo intelletto, la tua vitalità e il tuo autocontrollo.{"\n"} Ti
            aiuterà ad osservare la vita più intensamente e a utilizzare le
            informazioni ottenute sia per il tuo bene che per il bene degli
            altri.
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
    width: 300,
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
