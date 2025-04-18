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
        {language === "prt" && <Text style={styles.title}>Violeta</Text>}
        {language === "eng" && <Text style={styles.title}>Violet</Text>}
        {language === "ita" && <Text style={styles.title}>Viola</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/violeta.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A violeta representa a calma, o calor e a sentimentalidade
            reservada. {"\n"}
            Também é uma poderosa planta medicinal. Ambas folhas e flores são
            boas como agentes ativadores, particularmente para membranas mucosas
            irritadas. {"\n"}
            Também tem um alto teor de vitamina C. {"\n"}
            Medicinalmente, a violeta é boa para penetrar nos fluídos linfáticos
            e sanguíneos, dissolvendo toxinas nestas áreas. {"\n"}
            Pode ajudar no tratamento do câncer, toxidade no estômago e
            intestino. {"\n"}
            Alivia dores de garganta, dificuldades respiratórias, ajuda nos
            tumores da garganta, problemas de ouvido e dores de cabeça. Também
            ajuda na dor de dentes e problemas da pele. {"\n"}
            Diminui febre. Pode também ser usada para fins culinários.{"\n"}
            Ter violetas em volta, acorda o coração, para a plenitude de seus
            sentimentos e ajuda a compreender a profundidade do amor.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The violet represents calm, warmth, and reserved sentimentality.
            {"\n"}
            It is also a powerful medicinal plant. Both the leaves and flowers
            are good as activating agents, particularly for irritated mucous
            membranes.{"\n"}
            It also has a high vitamin C content.{"\n"}
            Medicinally, the violet is good for penetrating lymphatic and blood
            fluids, dissolving toxins in these areas.{"\n"}
            It can help in the treatment of cancer, toxicity in the stomach and
            intestines.{"\n"}
            It relieves sore throats, respiratory difficulties, aids in throat
            tumors, ear problems, and headaches. It also helps with tooth pain
            and skin problems.{"\n"}
            It lowers fever. It can also be used for culinary purposes.{"\n"}
            Having violets around awakens the heart, bringing fullness to your
            feelings and helping to understand the depth of love.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            La viola rappresenta la calma, il calore e la sentimentalità
            riservata.{"\n"}È anche una potente pianta medicinale. Sia le foglie
            che i fiori sono buoni come agenti attivatori, particolarmente per
            le membrane mucose irritate.{"\n"}
            Ha anche un alto contenuto di vitamina C.{"\n"}
            Medicinalmente, la viola è buona per penetrare nei fluidi linfatici
            e sanguigni, dissolvendo le tossine in queste aree.{"\n"}
            Può aiutare nel trattamento del cancro, tossicità nello stomaco e
            nell'intestino.{"\n"}
            Allevia il mal di gola, le difficoltà respiratorie, aiuta nei tumori
            alla gola, nei problemi alle orecchie e nei mal di testa. Aiuta
            anche con il mal di denti e i problemi della pelle.{"\n"}
            Abbassa la febbre. Può anche essere usata per scopi culinari.{"\n"}
            Avere viole intorno risveglia il cuore, portando pienezza ai tuoi
            sentimenti e aiutando a comprendere la profondità dell'amore.
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
