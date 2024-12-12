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
        {language === "prt" && <Text style={styles.title}>Abeto</Text>}
        {language === "eng" && <Text style={styles.title}>Fir</Text>}
        {language === "ita" && <Text style={styles.title}>Abete</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/abeto.png")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Além de nos fornecer beleza, madeira e oxigênio, o Abeto Negro tem
            outros usos. {"\n"}
            As pontas das árvores são ricas em vitamina C e podem ser utilizadas
            para chás ou serem mordiscadas.{"\n"}O chá das folhas é um bom
            antisséptico e ajuda a soltar o muco do peito e da garganta.{"\n"}A
            resina das folhas pode ser aplicada sobre cortes e ferimentos para
            limpá-los e também pode ser utilizada como inalante tanto saunas e
            inaladores. {"\n"}A resina do tronco pode ser utilizada com gesso
            para consolidar fraturas. O chá dos brotos dá um bom banho e ajuda a
            curar resfriados.{"\n"}O Abeto Negro ajuda a explorar idéias
            grandiosas, nossa conexão terrena, e nossa forma especial de
            alcançar o Espírito.{"\n"}
            Pode nos ensinar sobre uma força interior mais profunda que encoraja
            a doçura.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            In addition to providing us with beauty, wood, and oxygen, the Black
            Fir has other uses.{"\n"}
            The tips of the trees are rich in vitamin C and can be used for teas
            or chewed.{"\n"}
            The leaf tea is a good antiseptic and helps loosen mucus from the
            chest and throat.{"\n"}
            The resin from the leaves can be applied to cuts and wounds to clean
            them, and it can also be used as an inhalant for saunas and
            inhalers.{"\n"}
            The resin from the trunk can be used with plaster to consolidate
            fractures. The tea from the buds makes a good bath and helps cure
            colds.{"\n"}
            The Black Fir helps explore grand ideas, our earthly connection, and
            our special way of reaching the Spirit.{"\n"}
            It can teach us about a deeper inner strength that encourages
            sweetness.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Oltre a fornirci bellezza, legno e ossigeno, l'Abete Nero ha altri
            usi.{"\n"}
            Le punte degli alberi sono ricche di vitamina C e possono essere
            utilizzate per preparare tè o essere masticate.{"\n"}
            Il tè delle foglie è un buon antisettico e aiuta a sciogliere il
            muco dal petto e dalla gola.{"\n"}
            La resina delle foglie può essere applicata su tagli e ferite per
            pulirle e può anche essere utilizzata come inalante per saune e
            inalatori.{"\n"}
            La resina del tronco può essere utilizzata con il gesso per
            consolidare le fratture. Il tè dei germogli fa un buon bagno e aiuta
            a curare il raffreddore.{"\n"}
            L'Abete Nero aiuta a esplorare idee grandiose, la nostra connessione
            terrena e il nostro modo speciale di raggiungere lo Spirito.{"\n"}
            Può insegnarci una forza interiore più profonda che incoraggia la
            dolcezza.
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
    width: 265,
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
