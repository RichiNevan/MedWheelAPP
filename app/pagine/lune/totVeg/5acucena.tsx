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
        {language === "prt" && <Text style={styles.title}>Açucena Azul</Text>}
        {language === "eng" && <Text style={styles.title}>Azucena</Text>}
        {language === "ita" && <Text style={styles.title}>Azucena</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/acucena-azul.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem vegetal da Lua do Retorno dos Sapos é a Açucena Azul.{"\n"}
            Ela foi um alimento muito importante para muitos povos nativos.{" "}
            {"\n"}É essencial que seja utilizada apenas a açucena que te tenha
            flores azuis. As outras espécies são mortalmente venenosas. {"\n"}A
            açucena é uma excelente matéria prima e pode ser utilizada para
            fazer panquecas, melaço e um substituto do açúcar. É um alimento que
            tem sustentado pessoas por milhares de anos. {"\n"}
            Ela serve para equilibrar níveis de açúcar e como purgativa e
            emética. {"\n"}É uma excelente planta para criar movimento onde há
            estagnação, para promover sustentação e para ensinar a discriminar
            em todos os níveis da vida.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The plant totem of the Moon of the Return of the Toads is the Blue
            Lily.{"\n"}
            It was a very important food for many native peoples.{"\n"}
            It is essential to use only the lily that has blue flowers. Other
            species are fatally poisonous.{"\n"}
            The lily is an excellent raw material and can be used to make
            pancakes, molasses, and a sugar substitute. It is a food that has
            sustained people for thousands of years.{"\n"}
            It serves to balance sugar levels and as a purgative and emetic.
            {"\n"}
            It is an excellent plant to create movement where there is
            stagnation, to promote support, and to teach discrimination at all
            levels of life.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem vegetale della Luna del Ritorno delle Rane è il Giglio Blu.
            {"\n"}È stato un alimento molto importante per molti popoli nativi.
            {"\n"}È essenziale utilizzare solo il giglio che ha fiori blu. Altre
            specie sono mortalmente velenose.{"\n"}
            Il giglio è una materia prima eccellente e può essere usato per fare
            pancake, melassa e un sostituto dello zucchero. È un alimento che ha
            sostenuto le persone per migliaia di anni.{"\n"}
            Serve per bilanciare i livelli di zucchero e come purgante ed
            emetico.{"\n"}È una pianta eccellente per creare movimento dove c'è
            stasi, per promuovere il sostegno e per insegnare a discriminare a
            tutti i livelli della vita.
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
    height: 300,
    width: 340,
    margin: 'auto',
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: 'black'
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
