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


const Obsidiana = () => {
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
        {language === "prt" && <Text style={styles.title}>Obsidiana</Text>}
        {language === "eng" && <Text style={styles.title}>Obsydian</Text>}
        {language === "ita" && <Text style={styles.title}>Ossidiana</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/obsidiana.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem mineral é a Obsidiana.{"\n"} Ela tem o poder de centrar as
            pessoas às energias da Terra, ensinando-as a utilizar essa energia
            dentro de si mesmos. Segundo nativos, a Obsidiana reflete os
            pensamentos de outra pessoa para aqueles que a estão usando,
            proporcionando ao usuário uma espécie de clarividência.{"\n"} Também
            ajuda as pessoas a ver o futuro. É uma pedra protetora e também boa
            para clarear estados internos, desapegar-se de relacionamentos
            passados.{"\n"} Por ajudar a centrar com a energia da Terra, ela
            proporciona a proteção da estabilidade.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The mineral totem is Obsidian.{"\n"}
            It has the power to center people to the energies of the Earth,
            teaching them to use this energy within themselves. According to
            natives, Obsidian reflects the thoughts of another person to those
            who are using it, providing the user with a form of clairvoyance.
            {"\n"}
            It also helps people see the future. It is a protective stone and
            also good for clarifying internal states, letting go of past
            relationships.{"\n"}
            By helping to center with the Earth's energy, it provides protection
            through stability.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem minerale è l'Obsidiana.{"\n"}
            Ha il potere di centrare le persone sulle energie della Terra,
            insegnando loro a utilizzare questa energia dentro di sé. Secondo i
            nativi, l'Obsidiana riflette i pensieri di un'altra persona verso
            chi la sta usando, offrendo all'utente una sorta di chiaroveggenza.
            {"\n"}
            Aiuta anche le persone a vedere il futuro. È una pietra protettrice
            e anche utile per chiarire gli stati interni, staccandosi dalle
            relazioni passate.{"\n"}
            Aiutando a centrare con l'energia della Terra, fornisce protezione
            attraverso la stabilità.
          </Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Obsidiana;

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
    width: 360,
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
    width: '100%',
    height: '100%',
    opacity: 0.95
  },
  header: {
    borderBlockColor: 'white',
   borderColor: 'white',
  }
});
