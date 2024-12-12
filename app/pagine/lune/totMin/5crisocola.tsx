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
        {language === "prt" && <Text style={styles.title}>Crisocola</Text>}
        {language === "eng" && <Text style={styles.title}>Chrysocolla</Text>}
        {language === "ita" && <Text style={styles.title}>Crisocolla</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/crisocola.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A crisocola é o mineral associado à Rãs de Volta à Lua.{"\n"}{" "}
            Crisocola ajuda a equilibrar os elementos da terra e do céu dentro
            de você.{"\n"} Ela ajuda você a alcançar os reinos mais elevados da
            consciência enquanto mantém uma base firme na terra.{"\n"}
            Crisocola é uma pedra de boa medicina que pode trazer sorte e saúde
            ao usuário.{"\n"} A crisocola ajuda a purificar o coração, a mente e
            o espírito.{"\n"} Ajuda a equilibrar, aterrar e ter uma sensação
            geral de bem-estar e força.{"\n"} É uma pedra que promove uma
            sensação de paz e estabilidade, dando a você um forte senso de
            conexão com a terra.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Chrysocolla is the mineral associated with the Frogs of the Return
            to the Moon.{"\n"}
            Chrysocolla helps balance the elements of earth and sky within you.
            {"\n"}
            It helps you reach the higher realms of consciousness while
            maintaining a firm base in the earth.{"\n"}
            Chrysocolla is a good medicine stone that can bring luck and health
            to the user.{"\n"}
            Chrysocolla helps purify the heart, mind, and spirit.{"\n"}
            It helps balance, ground, and create a general sense of well-being
            and strength.{"\n"}
            It is a stone that promotes a sense of peace and stability, giving
            you a strong sense of connection to the earth.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            La crisocolla è il minerale associato alle Rane del Ritorno alla
            Luna.{"\n"}
            La crisocolla aiuta a bilanciare gli elementi della terra e del
            cielo dentro di te.{"\n"}
            Ti aiuta a raggiungere i regni più elevati della consapevolezza
            mantenendo una solida base sulla terra.{"\n"}
            La crisocolla è una pietra di buona medicina che può portare fortuna
            e salute all'utilizzatore.{"\n"}
            La crisocolla aiuta a purificare il cuore, la mente e lo spirito.
            {"\n"}
            Aiuta a bilanciare, radicare e avere una sensazione generale di
            benessere e forza.{"\n"}È una pietra che promuove una sensazione di
            pace e stabilità, dandoti un forte senso di connessione con la
            terra.
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
    height: 260,
    width: 338,
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
