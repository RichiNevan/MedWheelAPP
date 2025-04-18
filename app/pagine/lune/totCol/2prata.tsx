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

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/prata.jpg")}
        />
</View>
        {language === "prt" && (
          <Text style={styles.testo}>
            A prata é a cor associada à lontra e à lua da purificação e limpeza.
            {"\n"}A prata tem sido considerada uma cor mágica. Algumas
            filosofias deliciosas ensinam que é um cordão de prata que prende a
            alma ao corpo; outros que existem céus de prata acima dos de ouro.{" "}
            {"\n"}A prata é a cor da riqueza, prosperidade e riqueza do
            espírito. {"\n"}A prata está associada à lua e, consequentemente, é
            uma cor que aumenta sua conexão com a avó. {"\n"}A prata ao seu
            redor promove habilidades psíquicas e sentimentos de melhor
            percepção, intuição e emoções fluentes. {"\n"}Também ajuda você a
            ter uma atitude melhor em relação ao dinheiro e à sua própria
            prosperidade.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Silver is the color associated with the otter and the Moon of
            purification and cleansing.
            {"\n"}Silver has been considered a magical color. Some delightful
            philosophies teach that it is a silver cord that binds the soul to
            the body; others say there are silver heavens above the golden ones.{" "}
            {"\n"}Silver is the color of wealth, prosperity, and the richness of
            spirit. {"\n"}Silver is associated with the moon and, consequently,
            is a color that enhances your connection with the grandmother.{" "}
            {"\n"}Silver around you promotes psychic abilities and feelings of
            better perception, intuition, and flowing emotions. {"\n"}It also
            helps you to have a better attitude towards money and your own
            prosperity.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            L'argento è il colore associato all'otter e alla luna della
            purificazione e pulizia.
            {"\n"}L'argento è stato considerato un colore magico. Alcune
            filosofie affascinanti insegnano che è un filo d'argento che lega
            l'anima al corpo; altre dicono che ci sono cieli d'argento sopra
            quelli d'oro. {"\n"}L'argento è il colore della ricchezza, della
            prosperità e della ricchezza dello spirito. {"\n"}L'argento è
            associato alla luna e, di conseguenza, è un colore che aumenta la
            tua connessione con la nonna. {"\n"}L'argento intorno a te promuove
            abilità psichiche e sentimenti di maggiore percezione, intuizione e
            emozioni fluide. {"\n"}Aiuta anche a migliorare l'atteggiamento
            verso il denaro e la propria prosperità.
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
    height: 190,
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
