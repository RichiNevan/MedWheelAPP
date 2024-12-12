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
        {language === "prt" && <Text style={styles.title}>Azul</Text>}
        {language === "eng" && <Text style={styles.title}>Blue</Text>}
        {language === "ita" && <Text style={styles.title}>Blu</Text>}

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/azul.jpg")}
        />
</View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Azul é a cor da Lua do Retorno dos Sapos.{"\n"} Este é o azul
            brilhante encontrado nas camas flor ou no crisocola que não tem
            impurezas.{"\n"}
            Essa cor irradia sentimentos de paz, felicidade e energia sutil.
            {"\n"}
            Esse azul pode aliviar o mau humor e lembrar um dos reinos mais
            sutis.{"\n"} Ter este azul ao seu redor irá ajudá-lo a ficar
            satisfeito com o que o rodeia, emocionalmente contente, harmonioso e
            feliz com a vida, à medida que se desdobra para você.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Blue is the color of the Moon of the Return of the Frogs.{"\n"} This
            is the bright blue found in flower beds or in chrysocolla free of
            impurities.{"\n"}
            This color radiates feelings of peace, happiness, and subtle energy.
            {"\n"}
            This blue can ease bad moods and remind one of the most subtle
            realms.{"\n"}
            Having this blue around you will help you feel satisfied with your
            surroundings, emotionally content, harmonious, and happy with life
            as it unfolds for you.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il blu è il colore della Luna del Ritorno delle Rane.{"\n"} Questo è
            il blu brillante che si trova nei letti di fiori o nella crisocolla
            priva di impurità.{"\n"}
            Questo colore irradia sentimenti di pace, felicità ed energia
            sottile.{"\n"}
            Questo blu può alleviare il cattivo umore e ricordare uno dei regni
            più sottili.{"\n"} Avere questo blu intorno a te ti aiuterà a
            sentirti soddisfatto di ciò che ti circonda, emotivamente appagato,
            armonioso e felice della vita mentre si svolge davanti a te.
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
    height: 310,
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
