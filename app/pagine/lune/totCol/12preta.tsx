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
        {language === "prt" && <Text style={styles.title}>Preta</Text>}
        {language === "eng" && <Text style={styles.title}>Black</Text>}
        {language === "ita" && <Text style={styles.title}>Nero</Text>}

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("@/assets/images/coloriLune/preta.jpg")}
          />
        </View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A cor associada ao alce e à Lua das Neves Longas é preta. {"\n"}Este
            é o preto sombrio do profundo e escuro céu da noite. {"\n"}É um
            negro de ausência de forma, de mistério, de vazio, do qual tudo pode
            vir.{"\n"} É a escuridão que contém promessa e ameaça.{"\n"} Ter o
            preto ao seu redor irá ajudá-lo a olhar para dentro, a conhecer a si
            mesmo e à vida mais profundamente.{"\n"} O preto pode te ensinar
            sobre rendição, intuição, percepção e renascimento. É uma cor
            sagrada para muitas pessoas nativas.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The color associated with the moose and the Moon of the Long Snows
            is black. {"\n"}
            This is the dark black of the deep and dark night sky. {"\n"}
            It is a black of formlessness, mystery, emptiness, from which
            everything can arise.{"\n"}
            It is the darkness that holds both promise and threat.{"\n"}
            Having black around you will help you look within, to know yourself
            and life more deeply.{"\n"} Black can teach you about surrender,
            intuition, perception, and rebirth. It is a sacred color for many
            indigenous people.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il colore associato all'alce e alla Luna delle Lunghe Nevi è il
            nero. {"\n"}
            Questo è il nero profondo del cielo notturno profondo e scuro.{" "}
            {"\n"}È un nero di assenza di forma, di mistero, di vuoto, da cui
            tutto può venire.{"\n"}È l'oscurità che contiene sia promessa che
            minaccia.{"\n"}
            Avere il nero intorno a te ti aiuterà a guardare dentro di te, a
            conoscere te stesso e la vita più profondamente.{"\n"} Il nero può
            insegnarti sulla resa, l'intuizione, la percezione e la rinascita. È
            un colore sacro per molte persone indigene.
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
    height: 158,
    width: 290,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7
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
