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
        {language === "prt" && <Text style={styles.title}>Malaquita</Text>}
        {language === "eng" && <Text style={styles.title}>Malachite</Text>}
        {language === "ita" && <Text style={styles.title}>Malachite</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/malaquita.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A Malaquita tem poderes espirituais e aumenta a sensibilidade da
            pessoa para voz do Espírito.{"\n"} Aumenta a receptividade para todas as
            formas de energia sutíl e ajuda a cultivar nossos poderes psíquicos.{"\n"}
            É a Grande Pedra de cura. O cobre é excelente para purificar o
            espírito e o sangue.{"\n"} É um condutor de energias, espalhando-as por
            uma superfície ou pessoa. O cobre promove a força, o poder, o
            equilíbrio e a capacidade de entender sua energia. Desencoraja
            fraqueza.{"\n"} Promove a cura para a artrite, o reumatismo, o
            endurecimento das articulações e o fortalecimento do corpo,
            particularmente se usado como uma pulseira de pulso ou tornozelo.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Malachite has spiritual powers and enhances a person's sensitivity
            to the voice of the Spirit.{"\n"} It increases receptivity to all forms of
            subtle energy and helps cultivate our psychic powers. It is the
            Great Healing Stone.{"\n"} Copper is excellent for purifying the spirit
            and the blood. It is a conductor of energies, spreading them across
            a surface or person. Copper promotes strength, power, balance, and
            the ability to understand one's energy.{"\n"} It discourages weakness. It
            supports healing for arthritis, rheumatism, joint stiffness, and
            strengthens the body, particularly when worn as a bracelet or
            anklet.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            La Malachite ha poteri spirituali e aumenta la sensibilità della
            persona alla voce dello Spirito. Aumenta la ricettività a tutte le
            forme di energia sottile e aiuta a coltivare i nostri poteri
            psichici. È la Grande Pietra di Guarigione.{"\n"} Il rame è eccellente per
            purificare lo spirito e il sangue.{"\n"} È un conduttore di energie,
            diffondendole su una superficie o su una persona. Il rame promuove
            la forza, il potere, l'equilibrio e la capacità di comprendere la
            propria energia.{"\n"} Discourage la debolezza.{"\n"} Favorisce la guarigione
            dall'artrite, dal reumatismo, dalla rigidità articolare e rafforza
            il corpo, in particolare se indossato come braccialetto o
            cavigliera.
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
    height: 220,
    width: 290,
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
