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
        {language === "prt" && <Text style={styles.title}>Milefolio</Text>}
        {language === "eng" && <Text style={styles.title}>Yarrow</Text>}
        {language === "ita" && <Text style={styles.title}>Achillea</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/milefolio.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem vegetal da Lua da Floraçao é o Milefólio. {"\n"}
            Como tônico e fortalecedor tem sido usado com bons resultados para
            distúrbios do trato digestivo e como depurador do sangue. {"\n"}É
            uma erva que ajuda a combater o resfriado. É um bom diurético, abre
            os poros e ajuda a eliminar as toxinas através da pele. {"\n"}É
            excelente para estancar hemorragias e é essencial na ajuda ao
            combate das dores menstruais. Externamente ele atua como anestésico
            local e desinfetante. {"\n"}
            Também ajuda a aliviar a coceira de picadas de mosquitos e dor de
            dente. O Milefólio também ajuda os pulmões, glândulas e tubos
            brônquicos. {"\n"}
            Ter Milefólio por perto pode nos ajudar a descobrir nossos próprios
            poderes de cura, bem como nossa força interior.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The plant totem of the Moon of the Flowering is Yarrow.{"\n"}
            As a tonic and strengthener, it has been used with good results for
            digestive tract disorders and as a blood purifier.{"\n"}
            It is an herb that helps fight colds. It is a good diuretic, opens
            the pores, and helps eliminate toxins through the skin.{"\n"}
            It is excellent for stopping bleeding and is essential in helping
            with menstrual pain. Externally, it acts as a local anesthetic and
            disinfectant.{"\n"}
            It also helps relieve itching from mosquito bites and toothaches.
            Yarrow also helps the lungs, glands, and bronchial tubes.{"\n"}
            Having Yarrow nearby can help us discover our own healing powers as
            well as our inner strength.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem vegetale della Luna della Fioritura è l'Achillea.{"\n"}
            Come tonico e rinforzante, è stata usata con buoni risultati per
            disturbi del tratto digestivo e come depuratore del sangue.{"\n"}È
            un'erba che aiuta a combattere il raffreddore. È un buon diuretico,
            apre i pori e aiuta a eliminare le tossine attraverso la pelle.
            {"\n"}È eccellente per fermare le emorragie ed è essenziale
            nell'aiutare a combattere i dolori mestruali. Esteriormente, agisce
            come anestetico locale e disinfettante.{"\n"}
            Aiuta anche ad alleviare il prurito delle punture di zanzara e il
            mal di denti. L'achillea aiuta anche i polmoni, le ghiandole e i
            tubi bronchiali.{"\n"}
            Avere l'achillea vicino può aiutarci a scoprire i nostri poteri di
            guarigione, così come la nostra forza interiore.
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
    height: 390,
    width: 350,
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
