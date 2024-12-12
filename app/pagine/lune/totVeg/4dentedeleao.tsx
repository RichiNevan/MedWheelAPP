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
        {language === "prt" && <Text style={styles.title}>Dente de Leão</Text>}
        {language === "eng" && <Text style={styles.title}>Dandelion</Text>}
        {language === "ita" && <Text style={styles.title}>Tarassaco</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/dandelion.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O dente-de-leão é a planta associada à Lua do Florescer das Árvores
            de Brotamento. {"\n"}O dente de leão é uma erva com muitos usos. A
            raiz é boa como um substituto do café e remédio herbal, bem como uma
            erva cozinhar. {"\n"}
            As folhas de dente de leão jovens podem ser usadas em saladas.{" "}
            {"\n"}
            As folhas mais velhas são um delicioso verde cozido. As mais velhas
            são comidas cozidas. {"\n"}
            Elas tem um alto teor de vitaminas A, B, C e G; cálcio; fósforo;
            ferro e sódio natural. {"\n"}
            Ela é calmante, relaxante e levemente sedativo. {"\n"}
            Pode ser usado para limpar todos os órgãos eliminadores do corpo.
            Dandelion ajuda a purificar e alcalinizar a corrente sanguínea.
            Também ajuda a equilibrar os níveis de açúcar no sangue no corpo.
            {"\n"}O dente-de-leão onipresente pode lembrá-lo da necessidade de
            exploração e experimentação na vida. {"\n"}
            Também pode mostrar a beleza de vários estágios de crescimento.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The dandelion is the plant associated with the Moon of the Tree
            Blossoming.{"\n"}
            The dandelion is an herb with many uses. The root is good as a
            coffee substitute and herbal remedy, as well as an herb for cooking.
            {"\n"}
            The young dandelion leaves can be used in salads.{"\n"}
            The older leaves are a delicious cooked green. The older ones are
            eaten cooked.{"\n"}
            They have a high content of vitamins A, B, C, and G; calcium;
            phosphorus; iron; and natural sodium.{"\n"}
            It is soothing, relaxing, and mildly sedative.{"\n"}
            It can be used to cleanse all the body's eliminatory organs.
            Dandelion helps purify and alkalize the bloodstream. It also helps
            balance blood sugar levels in the body.{"\n"}
            The ubiquitous dandelion may remind you of the need for exploration
            and experimentation in life.{"\n"}
            It may also show the beauty of various stages of growth.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il dente di leone è la pianta associata alla Luna della Fioritura
            degli Alberi.{"\n"}
            Il dente di leone è un'erba con molti usi. La radice è un buon
            sostituto del caffè e rimedio erboristico, oltre a essere un'erba da
            cucinare.{"\n"}
            Le foglie giovani del dente di leone possono essere usate nelle
            insalate.{"\n"}
            Le foglie più vecchie sono un delizioso verde cotto. Le più vecchie
            vengono mangiate cotte.{"\n"}
            Hanno un alto contenuto di vitamine A, B, C e G; calcio; fosforo;
            ferro e sodio naturale.{"\n"}È lenitiva, rilassante e leggermente
            sedativa.{"\n"}
            Può essere usato per purificare tutti gli organi di eliminazione del
            corpo. Il dente di leone aiuta a purificare e alcalinizzare il
            flusso sanguigno. Aiuta anche a bilanciare i livelli di zucchero nel
            sangue nel corpo.{"\n"}
            Il dente di leone onnipresente può ricordarti la necessità di
            esplorare e sperimentare nella vita.{"\n"}
            Può anche mostrare la bellezza dei vari stadi di crescita.
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
