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
        {language === "prt" && <Text style={styles.title}>Branco-Verde</Text>}
        {language === "eng" && <Text style={styles.title}>White-Green</Text>}
        {language === "ita" && <Text style={styles.title}>Bianco-Verde</Text>}

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/greenwhite.jpg")}
        />
</View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Branco e verde são as cores dos cervos e da Lua da Plantação do
            Milho. {"\n"}O branco desta posição é translúcido, como aquele visto
            em muitas ágatas musgosas.{"\n"} É um branco que indica ausência de
            forma e a perfeita pureza e inocência com as quais todos nós
            entramos no mundo.{"\n"} O verde é o tom escuro e ceroso encontrado
            em plantas que crescem em florestas profundas ou em áreas onde a
            água é abundante.{"\n"}
            Isto é um verde de cura profunda e de restauração nos níveis mais
            profundos. {"\n"}Ter esta combinação verde e branca em seu ambiente
            estimulará a pureza e a inocência necessárias para que a verdadeira
            cura ocorra nos níveis físico, mental, emocional ou espiritual.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            White and green are the colors of the deer and the Moon of the Corn
            Planting. {"\n"}
            The white of this position is translucent, like that seen in many
            moss agates.{"\n"} It is a white that indicates the absence of form
            and the perfect purity and innocence with which we all enter the
            world.{"\n"} The green is the dark, waxy shade found in plants that
            grow in deep forests or in areas where water is abundant.{"\n"}
            This is a green of deep healing and restoration at the most profound
            levels. {"\n"} Having this combination of green and white in your
            environment will stimulate the purity and innocence necessary for
            true healing to occur on the physical, mental, emotional, or
            spiritual levels.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Bianco e verde sono i colori dei cervi e della Luna della Semina del
            Mais. {"\n"} Il bianco di questa posizione è traslucido, come quello
            visto in molte agate muschiose.{"\n"} È un bianco che indica assenza
            di forma e la perfetta purezza e innocenza con cui tutti noi
            entriamo nel mondo.{"\n"} Il verde è la tonalità scura e cerosa che
            si trova nelle piante che crescono nelle foreste profonde o in aree
            dove l'acqua è abbondante.{"\n"}
            Questo è un verde di profonda guarigione e di ristoro ai livelli più
            profondi. {"\n"} Avere questa combinazione di verde e bianco nel tuo
            ambiente stimolerà la purezza e l'innocenza necessarie affinché la
            vera guarigione avvenga a livello fisico, mentale, emotivo o
            spirituale.
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
    width: 350,
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
