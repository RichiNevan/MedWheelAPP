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
  const navigation = useNavigation();

  useEffect(() => {
    // Dynamically setting header options when this page is loaded
    navigation.setOptions({
      title: "",
      headerBackground: () => (
        <ImageBackground
          source={require("@/assets/images/headerbg.jpg")}
          style={styles.headerBg}
        />
      ),
      headerStyle: styles.header,
      headerTintColor: "white",
      headerBackTitle:
        language === "prt"
          ? "Voltar"
          : language === "ita"
          ? "Indietro"
          : "Back",
    });
  }, [navigation]);

  return (
    <ImageBackground source={require("@/assets/images/background.jpg")}>
      <ScrollView style={styles.scrollView}>
        {language === "prt" && <Text style={styles.title}>Alamo</Text>}
        {language === "eng" && <Text style={styles.title}>Poplar</Text>}
        {language === "ita" && <Text style={styles.title}>Alamo</Text>}
        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/alamo.jpg")}
        /></View>
        {language === "prt" && (
          <Text style={styles.testo}>
            O álamo a planta associada à Lua de Descanso e Limpeza. {"\n"}
            As folhas, casca e brotos desta árvore podem ser usados para um
            tônico ou chá para ajudar no fígado ou distúrbios digestivos. {"\n"}
            O álamo tremedor de trepadeira também tem sido usado como relaxante,
            como desmaio, febre do feno, órgãos internos e como adstringente.{" "}
            {"\n"}
            Usado diariamente, o álamo tem ajudado com tratamentos de pele como
            eczema, úlceras e queimaduras. {"\n"}O pó raspado da casca pode ser
            usado como um desodorante e foi dito para ajudar a tratar a
            catarata. {"\n"}
            Chás e tônicos de tremer álamo pode ajudar a prevenir congestão no
            corpo, febre do feno, asma, bronquite e toxicidade. {"\n"}
            Estar perto de álamos, com o som de suas em forma de sino, aumenta o
            seu senso de brincadeira e a crença em magia.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The poplar is the plant associated with the Moon of Rest and
            Cleansing.{"\n"}
            The leaves, bark, and buds of this tree can be used for a tonic or
            tea to help with liver or digestive disorders.{"\n"}
            The trembling poplar vine has also been used as a relaxant, for
            fainting, hay fever, internal organs, and as an astringent.{"\n"}
            When used daily, poplar has helped with skin treatments like eczema,
            ulcers, and burns.{"\n"}
            The powdered bark can be used as a deodorant and has been said to
            help treat cataracts.{"\n"}
            Poplar teas and tonics can help prevent congestion in the body, hay
            fever, asthma, bronchitis, and toxicity.{"\n"}
            Being near poplars, with the sound of their bell-shaped leaves,
            enhances your sense of playfulness and belief in magic.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il pioppo è la pianta associata alla Luna di Riposo e Pulizia.{"\n"}
            Le foglie, la corteccia e i germogli di quest'albero possono essere
            utilizzati per un tonico o una tisana che aiuta con il fegato o
            disturbi digestivi.{"\n"}
            Il pioppo tremulo rampicante è stato anche utilizzato come
            rilassante, per svenimenti, febbre da fieno, organi interni e come
            astringente.{"\n"}
            Quando usato quotidianamente, il pioppo ha aiutato con trattamenti
            della pelle come eczema, ulcere e ustioni.{"\n"}
            La polvere della corteccia può essere usata come deodorante e si
            dice che aiuti a trattare la cataratta.{"\n"}
            Le tisane e i tonici di pioppo possono aiutare a prevenire la
            congestione nel corpo, la febbre da fieno, l'asma, la bronchite e la
            tossicità.{"\n"}
            Stare vicino ai pioppi, con il suono delle loro foglie a forma di
            campana, aumenta il senso di gioco e la credenza nella magia.
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
    width: 275,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "black",
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
