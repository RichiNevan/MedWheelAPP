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
        {language === "prt" && <Text style={styles.title}>Rosa Silvestre</Text>}
        {language === "eng" && <Text style={styles.title}>Wild Rose</Text>}
        {language === "ita" && <Text style={styles.title}>Rosa Silvestre</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/rosasilvestre.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem vegetal da Lua dos Dias Longos é a r Rosa Silvestre. {"\n"}
            Além da beleza, tem muitos outros atributos. Os frutos da rosa, tem
            um alto teor de vitamina C. {"\n"}
            Podem ser comidos ou utilizados em chás para ajudar a curar dor de
            garganta, resfriados e gripes. {"\n"}O chá também pode ser usado
            para problemas de fígado e de sangue. O chá das pétalas é um
            adstringente suave e tônico. {"\n"}A água da rosa tem sido utilizada
            como loção ocular e para aliviar o desconforto da febre do feno.{" "}
            {"\n"}A Rosa Selvagem pode refrescar nosso espírito e ajudar em
            problemas que requerem um efeito sutil e refrescante. {"\n"}
            Também pode ajudar a abrir o coração e elevar o espírito.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The plant totem of the Moon of the Long Days is the Wild Rose.{"\n"}
            Beyond its beauty, it has many other attributes. The fruit of the
            rose has a high vitamin C content.{"\n"}
            They can be eaten or used in teas to help heal sore throats, colds,
            and flu.{"\n"}
            The tea can also be used for liver and blood problems. The petal tea
            is a mild astringent and tonic.{"\n"}
            Rosewater has been used as an eye lotion and to relieve discomfort
            from hay fever.{"\n"}
            The Wild Rose can refresh our spirit and assist with problems that
            require a subtle and refreshing effect.{"\n"}
            It can also help open the heart and uplift the spirit.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem vegetale della Luna dei Giorni Lunghi è la Rosa Selvatica.
            {"\n"}
            Oltre alla sua bellezza, ha molti altri attributi. I frutti della
            rosa hanno un alto contenuto di vitamina C.{"\n"}
            Possono essere mangiati o usati in tisane per aiutare a guarire il
            mal di gola, il raffreddore e l'influenza.{"\n"}
            La tisana può anche essere usata per problemi al fegato e al sangue.
            La tisana di petali è un astringente delicato e un tonico.{"\n"}
            L'acqua di rosa è stata usata come lozione per gli occhi e per
            alleviare il fastidio della febbre da fieno.{"\n"}
            La Rosa Selvatica può rinfrescare il nostro spirito e aiutare con
            problemi che richiedono un effetto sottile e rinfrescante.{"\n"}
            Può anche aiutare ad aprire il cuore e a elevare lo spirito.
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
    width: 295,
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
