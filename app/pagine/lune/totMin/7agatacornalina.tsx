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
        {language === "prt" && (
          <Text style={styles.title}>Agata Cornalina</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Cornalline Agate</Text>
        )}
        {language === "ita" && <Text style={styles.title}>Agata Corniola</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/crisocola.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem mineral da Lua dos Dias Longos é a Ágata Cornalina.{"\n"} É
            um presente do coração e representa amor.{"\n"} É boa para manter o
            coração saudável e aberto aos centros emocionais.{"\n"} Dizem que
            você pode pendurar a Carnelia como pêndulo e utilizá-la sobre uma
            ferida para estancar o sangue e iniciar o processo de cura. É sabido
            que a Carnelia ajuda as curas de emergência{"\n"}. Ter sempre
            conosco uma Carnelia nos ajudará a manter o coração aberto e sadio,
            enquanto nos protege de qualquer um que tente ler nossa mente.{"\n"}{" "}
            Ajudará a desenvolver sentimentos de paz tanto interna, como à nossa
            volta.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The mineral totem of the Moon of Long Days is Carnelian Agate.{"\n"}
            It is a gift from the heart and represents love.{"\n"}
            It is good for keeping the heart healthy and open to emotional
            centers.{"\n"}
            It is said that you can hang Carnelian as a pendulum and use it on a
            wound to stop the bleeding and initiate the healing process. It is
            known that Carnelian aids in emergency healing.{"\n"}
            Having Carnelian with us will help keep the heart open and healthy
            while protecting us from anyone trying to read our mind.{"\n"}
            It will help develop feelings of peace both internally and around
            us.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem minerale della Luna dei Giorni Lunghi è l'Agata Carneliana.
            {"\n"}È un dono dal cuore e rappresenta l'amore.{"\n"}È utile per
            mantenere il cuore sano e aperto ai centri emotivi.{"\n"}
            Si dice che puoi appendere la Carneliana come pendolo e usarla su
            una ferita per fermare il sanguinamento e avviare il processo di
            guarigione. È noto che la Carneliana aiuta nelle guarigioni di
            emergenza.{"\n"}
            Avere la Carneliana con noi ci aiuterà a mantenere il cuore aperto e
            sano, proteggendoci da chiunque cerchi di leggere la nostra mente.
            {"\n"}
            Aiuterà a sviluppare sentimenti di pace sia dentro di noi che
            intorno a noi.
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
