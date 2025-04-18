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
        {language === "prt" && <Text style={styles.title}>Marrom</Text>}
        {language === "eng" && <Text style={styles.title}>Brown</Text>}
        {language === "ita" && <Text style={styles.title}>Marrone</Text>}

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/brown.jpg")}
        />
</View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A cor associada com o corvo e a Lua do Voo dos Patos é o marrom da
            terra no outono, um marrom rico com tons do vermelho.{"\n"} É um
            marrom que chama a atenção para a terra, um marrom que ajuda você a
            perceber sua conexão com a Grande Mãe.{"\n"} É uma cor com muitos
            tons que evocam muitos humores.{"\n"} Ter marrom em torno de você
            pode ajudá-lo a aumentar sua conexão de terra e sua estabilidade ao
            ponto que lhe permite alcançar com segurança os reinos além.{"\n"}{" "}
            Também pode aumentar sua consciência ambiental.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The color associated with the crow and the Moon of the Flight of the
            Ducks is the brown of the earth in autumn, a rich brown with shades
            of red.{"\n"} It is a brown that draws attention to the earth, a
            brown that helps you perceive your connection with the Great Mother.
            {"\n"} It is a color with many tones that evoke many moods.{"\n"}{" "}
            Having brown around you can help you strengthen your earth
            connection and your stability to the point where it allows you to
            safely reach the realms beyond.{"\n"} It can also increase your
            environmental awareness.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il colore associato al corvo e alla Luna del Volo delle Anatre è il
            marrone della terra in autunno, un marrone ricco con sfumature di
            rosso.{"\n"} È un marrone che attira l'attenzione sulla terra, un
            marrone che ti aiuta a percepire la tua connessione con la Grande
            Madre.{"\n"} È un colore con molte sfumature che evocano molti
            umori.{"\n"} Avere il marrone intorno a te può aiutarti a rafforzare
            la tua connessione con la terra e la tua stabilità al punto in cui
            ti consente di raggiungere in sicurezza i regni oltre.{"\n"} Può
            anche aumentare la tua consapevolezza ambientale.
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
    height: 300,
    width: 300,
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
