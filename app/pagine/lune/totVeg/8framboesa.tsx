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
        {language === "prt" && <Text style={styles.title}>Framboeza</Text>}
        {language === "eng" && <Text style={styles.title}>Raspberry</Text>}
        {language === "ita" && <Text style={styles.title}>Lampone</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/framboeza.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem vegetal da Lua do Amadurecimento é a Framboeza. {"\n"}
            Suas folhas e suas raízes tem propriedades medicinais.{"\n"}
            Ela é útil para eliminar cálculos da vesícula e dos rins e estimula
            o trato urinário. A raiz é um adstringente e tem algumas
            propriedades curativas e antibióticas. {"\n"}
            Pode ser utilizado para gargarejos. {"\n"}O chá como compressa tem
            sido aplicado em ferimentos e cortes para diminuir sangramentos.
            {"\n"}O chá das folhas pode ser utilizado para diarreias, cancros,
            problemas uterinos e nas menstruações. É um dos melhores chás para
            mulheres grávidas, agindo como tônico. {"\n"}O Chá dos brotos é bom
            para resfriados, gripes, dificuldades respiratórias e para
            equilibrar os níveis de açúcar no sangue. {"\n"}
            As framboeseiras nos ajudam a encontrar a doçura nas aflições da
            vida.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The plant totem of the Moon of Maturation is the Raspberry.{"\n"}
            Its leaves and roots have medicinal properties.{"\n"}
            It is useful for eliminating gallstones and kidney stones, and it
            stimulates the urinary tract. The root is an astringent and has some
            healing and antibiotic properties.{"\n"}
            It can be used for gargles.{"\n"}
            The tea, when used as a compress, has been applied to wounds and
            cuts to reduce bleeding.{"\n"}
            The leaf tea can be used for diarrhea, cancer, uterine problems, and
            menstrual issues. It is one of the best teas for pregnant women,
            acting as a tonic.{"\n"}
            The sprout tea is good for colds, flu, respiratory difficulties, and
            balancing blood sugar levels.{"\n"}
            Raspberry bushes help us find sweetness in the afflictions of life.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem vegetale della Luna della Maturazione è il Lampone.{"\n"}
            Le sue foglie e le sue radici hanno proprietà medicinali.{"\n"}È
            utile per eliminare i calcoli biliari e renali e stimola il tratto
            urinario. La radice è un astringente e ha alcune proprietà curative
            e antibiotiche.{"\n"}
            Può essere utilizzato per fare gargarismi.{"\n"}
            Il tè, usato come impacco, è stato applicato su ferite e tagli per
            ridurre il sanguinamento.{"\n"}
            Il tè delle foglie può essere utilizzato per la diarrea, il cancro,
            i problemi uterini e per le mestruazioni. È uno dei migliori tè per
            le donne in gravidanza, agendo come tonico.{"\n"}
            Il tè dei germogli è utile per il raffreddore, l'influenza, le
            difficoltà respiratorie e per bilanciare i livelli di zucchero nel
            sangue.{"\n"}I lampaneti ci aiutano a trovare la dolcezza nelle
            afflizioni della vita.
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
    height: 380,
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
