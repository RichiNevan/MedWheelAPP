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
        {language === "prt" && <Text style={styles.title}>Ametista</Text>}
        {language === "eng" && <Text style={styles.title}>Amethyst</Text>}
        {language === "ita" && <Text style={styles.title}>Ametista</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/ametista.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A Ametista simboliza o bom julgamento, justiça e coragem. {"\n"}É
            uma pedra que consola, pacifica e ensina discriminação. {"\n"}A
            ametista protege contra magia negra, relâmpagos, tempestades de
            granizo e intoxicações. {"\n"}Pode nos ajudar a alcançar sintonia
            espiritual bem como um bom equilíbrio entre as energias do nível
            físico e espiritual.{"\n"} A Ametista pode ajudar a entender a fonte
            de nossa ira, e com isso iniciar a liberá-las.{"\n"} Também pode
            ajudar a acalmar e clarear o estado de sonho.{"\n"} É uma pedra que
            estimula nobreza e pureza dentro daqueles que a carregam consigo.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Amethyst symbolizes good judgment, justice, and courage.{"\n"}
            It is a stone that consoles, pacifies, and teaches discrimination.
            {"\n"}
            Amethyst protects against black magic, lightning, hailstorms, and
            intoxications.{"\n"}
            It can help us achieve spiritual alignment as well as a good balance
            between physical and spiritual energies.{"\n"}
            Amethyst can help understand the source of our anger, and with that,
            begin to release it.{"\n"}
            It can also help calm and clarify the dream state.{"\n"}
            It is a stone that stimulates nobility and purity within those who
            carry it.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            L'Ametista simboleggia il buon giudizio, la giustizia e il coraggio.
            {"\n"}È una pietra che consola, pacifica e insegna discriminazione.
            {"\n"}
            L'ametista protegge contro la magia nera, i fulmini, le tempeste di
            grandine e le intossicazioni.{"\n"}
            Può aiutarci a raggiungere l'allineamento spirituale così come un
            buon equilibrio tra le energie del livello fisico e spirituale.
            {"\n"}
            L'ametista può aiutare a comprendere la fonte della nostra rabbia e,
            con ciò, iniziare a liberarla.{"\n"}
            Può anche aiutare a calmare e chiarire lo stato onirico.{"\n"}È una
            pietra che stimola la nobiltà e la purezza dentro coloro che la
            portano con sé.
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
    height: 320,
    width: 350,
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
