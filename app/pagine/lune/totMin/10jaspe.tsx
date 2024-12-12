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
        {language === "prt" && <Text style={styles.title}>Jaspe</Text>}
        {language === "eng" && <Text style={styles.title}>Jasper</Text>}
        {language === "ita" && <Text style={styles.title}>Diaspro</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/jaspe.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem mineral é o Jaspe, em especial o Jaspe de Sangue. {"\n"}
            Também chamado de Heliotropo, o jaspe de sangue é uma pedra que traz
            muitas bençãos.{"\n"} Promove uma força de concentração positiva e
            ajuda a harmonizar com a energia da Terra.{"\n"}O Jaspe estanca
            hemorragias; segundo nativos, torna seu possuidor desapercebido,
            para segurança e vida longa; puxa consigo o veneno das picadas de
            cobra, restaura a vista perdida, provoca chuva.{"\n"} Acredita-se
            que esta pedra tem poderes sobre os maus espíritos.{"\n"} O Jaspe
            estimula e e clareia os processos mentais pessoais, permitindo que a
            pessoa encontre o equilíbrio neste plano da existência.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The mineral totem is Jasper, especially Blood Jasper.{"\n"}
            Also known as Heliotrope, blood jasper is a stone that brings many
            blessings.{"\n"}
            It promotes a positive concentration force and helps harmonize with
            the Earth's energy.{"\n"}
            Jasper stops hemorrhages; according to natives, it makes its
            possessor unnoticed, for safety and long life; it draws out the
            venom from snake bites, restores lost vision, and causes rain.{"\n"}
            It is believed that this stone has power over evil spirits.{"\n"}
            Jasper stimulates and clarifies personal mental processes, allowing
            the person to find balance in this plane of existence.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem minerale è il Jasper, in particolare il Jasper di Sangue.
            {"\n"}
            Conosciuto anche come Eliotropo, il jasper di sangue è una pietra
            che porta molte benedizioni.{"\n"}
            Promuove una forza di concentrazione positiva e aiuta a armonizzarsi
            con l'energia della Terra.{"\n"}
            Il Jasper arresta le emorragie; secondo i nativi, rende il suo
            possessore inosservato, per sicurezza e lunga vita; estrae il veleno
            dalle punture di serpente, ripristina la vista perduta e provoca la
            pioggia.{"\n"}
            Si crede che questa pietra abbia poteri contro gli spiriti maligni.
            {"\n"}
            Il Jasper stimola e chiarisce i processi mentali personali,
            permettendo alla persona di trovare l'equilibrio in questo piano
            dell'esistenza.
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
    height: 239,
    width: 330,
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
