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
        {language === "prt" && <Text style={styles.title}>Rosa</Text>}
        {language === "eng" && <Text style={styles.title}>Pink</Text>}
        {language === "ita" && <Text style={styles.title}>Rosa</Text>}

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/rosa.jpg")}
        />
</View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A cor associada ao Pica-Pau e a Lua do Sol Forte é rosa.{"\n"} Este
            é o rosa puro das mais finas rosas cor-de-rosa, nem muito vermelho
            nem muito roxo na sombra.{"\n"} É um rosa associado a meninas e,
            portanto, imaturidade.{"\n"} Mas também é o rosa do amor de cura que
            muitas vezes é invocado por aqueles que trabalham com cores.{"\n"}{" "}
            Ter essa cor ao seu redor ajudará a abrir seu coração para o amor, a
            sensibilidade e suas próprias emoções fluentes.{"\n"} Ele também irá
            iluminar todas as áreas de sentimento em que você precisa
            amadurecer.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The color associated with the Woodpecker and the Moon of the Strong
            Sun is pink.{"\n"}
            This is the pure pink of the finest pink roses, neither too red nor
            too purple in shade.{"\n"} It is a pink associated with girls and,
            therefore, immaturity.{"\n"} But it is also the pink of healing love
            often invoked by those who work with colors.{"\n"} Having this color
            around you will help open your heart to love, sensitivity, and your
            own flowing emotions.{"\n"} It will also illuminate all the areas of
            feeling where you need to mature.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il colore associato al Picchio e alla Luna del Sole Forte è il rosa.
            {"\n"}
            Questo è il rosa puro delle rose rosa più raffinate, né troppo rosso
            né troppo viola nella tonalità.{"\n"} È un rosa associato alle
            ragazze e, quindi, all'immaturità.{"\n"} Ma è anche il rosa
            dell'amore curativo spesso invocato da coloro che lavorano con i
            colori.{"\n"} Avere questo colore intorno a te ti aiuterà ad aprire
            il cuore all'amore, alla sensibilità e alle tue emozioni fluide.
            {"\n"} Illuminerà anche tutte le aree di sentimento in cui hai
            bisogno di maturare.
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
    height: 280,
    width: 280,
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
