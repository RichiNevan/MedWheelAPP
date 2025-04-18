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
        {language === "prt" && <Text style={styles.title}>Tanchagem</Text>}
        {language === "eng" && <Text style={styles.title}>Plantain</Text>}
        {language === "ita" && <Text style={styles.title}>Piantaggine</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/tanchagem.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem vegetal da Lua dos Ventos Fortes é a Tanchagem. {"\n"}
            Ela é uma planta “Mestre de Cura”. Pode ser utilizada internamente
            como chá ou externamente como compressa para esfriar, acalmar e
            curar. {"\n"}A Tanchagem é conhecida por ser um excelente depurador
            do sangue e ajuda a aliviar a dor. Em alguns casos, a Tanchagem
            reverte efeito de venenos.{"\n"}
            Utilizada como compressa, chá ou num banho, pode audar a curar
            picadas, feridas, úlceras e inflamações. {"\n"}
            Também ajuda a curar problemas renais e da bexiga. Sendo o prenúncio
            da primavera, a tanchagem é um lembrete da eterna promessa da nova
            vida. {"\n"}
            Suas raízes profundas demonstram a importância da tenacidade e
            estabilidade e ajudam a nos firmar na Terra.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The plant totem of the Moon of Strong Winds is Plantain.{"\n"}
            It is a "Master of Healing" plant. It can be used internally as tea
            or externally as a compress to cool, calm, and heal.{"\n"}
            Plantain is known to be an excellent blood purifier and helps
            relieve pain. In some cases, Plantain reverses the effects of
            poisons.{"\n"}
            Used as a compress, tea, or in a bath, it can help heal bites,
            wounds, ulcers, and inflammations.{"\n"}
            It also helps to heal kidney and bladder problems. Being the
            harbinger of spring, Plantain is a reminder of the eternal promise
            of new life.{"\n"}
            Its deep roots demonstrate the importance of tenacity and stability
            and help us to anchor ourselves to the Earth.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem vegetale della Luna dei Venti Forti è la Piantaggine.{"\n"}
            È una pianta "Maestro di Guarigione". Può essere utilizzata
            internamente come tisana o esternamente come impacco per
            raffreddare, calmare e guarire.{"\n"}
            La Piantaggine è conosciuta per essere un eccellente depuratore del
            sangue e aiuta ad alleviare il dolore. In alcuni casi, la
            Piantaggine inverte gli effetti dei veleni.{"\n"}
            Usata come impacco, tisana o in un bagno, può aiutare a guarire
            morsi, ferite, ulcere e infiammazioni.{"\n"}
            Aiuta anche a guarire problemi renali e alla vescica. Essendo il
            presagio della primavera, la Piantaggine è un promemoria della
            promessa eterna della nuova vita.{"\n"}
            Le sue radici profonde dimostrano l'importanza della tenacia e della
            stabilità e ci aiutano a radicarci sulla Terra.
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
    height: 380,
    width: "95%",
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
