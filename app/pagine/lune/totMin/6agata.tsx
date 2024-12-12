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
        {language === "prt" && <Text style={styles.title}>Agata Musgosa</Text>}
        {language === "eng" && <Text style={styles.title}>Moss Agate</Text>}
        {language === "ita" && (
          <Text style={styles.title}>Agata Muschiata</Text>
        )}

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("@/assets/images/mineraliLune/agata-musgosa.jpg")}
          />
        </View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Ágata musgosa é o mineral associado com a Lua da Plantação do Milho.
            {"\n"}É uma pedra de cura global que traz equilíbrio para todas as
            partes do corpo especialmente benéfica para os olhos.{"\n"} Ágata
            musgosa tem sido usada em cerimônias de chuva.{"\n"} É uma pedra que
            pode ajudar a construir uma ponte entre os reinos mineral, animal e
            humano.{"\n"}Pode nos ajudar a remover as fronteiras entre nossos
            próprios corpos mentais e emocionais.{"\n"} Ela nos ajuda a
            encontrar verdade e coragem interna, mesmo em circunstâncias
            difíceis. {"\n"}Auxilía no alívio da depressão, realça nossa
            habilidade para sonhar, nos centra e energiza.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Moss agate is the mineral associated with the Moon of the Corn
            Planting.{"\n"}
            It is a healing stone that brings balance to all parts of the body,
            especially beneficial for the eyes.{"\n"}
            Moss agate has been used in rain ceremonies.{"\n"}
            It is a stone that can help build a bridge between the mineral,
            animal, and human realms.{"\n"}
            It can help us remove the boundaries between our own mental and
            emotional bodies.{"\n"}
            It helps us find truth and inner courage, even in difficult
            circumstances.{"\n"}
            It aids in relieving depression, enhances our ability to dream,
            centers us, and energizes.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            L'agata musgosa è il minerale associato alla Luna della Piantagione
            del Mais.{"\n"}È una pietra di guarigione che porta equilibrio a
            tutte le parti del corpo, particolarmente benefica per gli occhi.
            {"\n"}
            L'agata musgosa è stata utilizzata in cerimonie della pioggia.{"\n"}
            È una pietra che può aiutare a costruire un ponte tra i regni
            minerale, animale e umano.{"\n"}
            Può aiutarci a rimuovere i confini tra i nostri corpi mentali ed
            emozionali.{"\n"}
            Ci aiuta a trovare verità e coraggio interiore, anche in circostanze
            difficili.{"\n"}
            Aiuta ad alleviare la depressione, migliora la nostra capacità di
            sognare, ci centra e ci energizza.
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
    margin: 20,
  },
  imageView: {
    flex: 1,
    height: 370,
    width: "95%",
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
