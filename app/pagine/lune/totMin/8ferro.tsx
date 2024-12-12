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
  const navigation = useNavigation();

  useEffect(() => {
    // Dynamically setting header options when this page is loaded
    navigation.setOptions({
      title: "",
      headerBackground: () => (
        <ImageBackground
          source={require("@/assets/images/headerbg.jpg")}
          style={styles.headerBg}
        />
      ),
      headerStyle: styles.header,
      headerTintColor: "white",
      headerBackTitle:
        language === "prt"
          ? "Voltar"
          : language === "ita"
          ? "Indietro"
          : "Back",
    });
  }, [navigation]);

  return (
    <ImageBackground source={require("@/assets/images/background.jpg")}>
      <ScrollView style={styles.scrollView}>
        {language === "prt" && (
          <Text style={styles.title}>Granada e Ferro</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Grenade and Iron</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Granato e Ferro</Text>
        )}

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("@/assets/images/mineraliLune/ferro.jpg")}
          />
        </View>
        {language === "prt" && (
          <Text style={styles.subTitle}>Ferro</Text>
        )}
        {language === "eng" && (
          <Text style={styles.subTitle}>Iron</Text>
        )}
        {language === "ita" && (
          <Text style={styles.subTitle}>Ferro</Text>
        )}
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("@/assets/images/mineraliLune/granada.jpg")}
          />
        </View>
        {language === "prt" && (
          <Text style={styles.subTitle}>Granada</Text>
        )}
        {language === "eng" && (
          <Text style={styles.subTitle}>Grenade</Text>
        )}
        {language === "ita" && (
          <Text style={styles.subTitle}>Granato</Text>
        )}

        {language === "prt" && (
          <Text style={styles.testo}>
            Os totens minerais da Lua do Amadurecimento são a Granada e o Ferro.
            {"\n"}A Granada ajuda a equilibrar nossas energias sexuais.{"\n"}É
            associada ao coração e ao sangue e pode estimular o livre fluxo de
            emoção na pessoas que as usam. A Granada pode ajudar a fortalecer
            aquele que a usa, proteger do perigo e a levar uma vida boa e
            honrosa.{"\n"} Pode ajudar também a penetrar no âmago de cada
            questão. {"\n"}O Ferro é bom para o sangue e coração. {"\n"}Pode nos
            lembrar da necessidade de sermos temperados pelas experiências da
            vida.{"\n"} Pode nos encorajar a ter uma dureza discriminadora que
            nos permitirá saber quando a palavra “não” é a resposta que
            promoverá o bem melhor para todos os envolvidos.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The mineral totems of the Moon of Ripening are Garnet and Iron.
            {"\n"}
            The Garnet helps balance our sexual energies.{"\n"}
            It is associated with the heart and blood and can stimulate the free
            flow of emotion in those who use it. The Garnet can help strengthen
            the user, protect from danger, and lead a good and honorable life.
            {"\n"}
            It can also help penetrate to the heart of every issue.{"\n"}
            Iron is good for the blood and heart.{"\n"}
            It can remind us of the need to be tempered by the experiences of
            life.{"\n"}
            It can encourage us to have a discerning hardness that will allow us
            to know when the word “no” is the response that will promote the
            greatest good for everyone involved.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            I totem minerali della Luna della Maturazione sono il Granato e il
            Ferro.{"\n"}
            Il Granato aiuta a bilanciare le nostre energie sessuali.{"\n"}È
            associato al cuore e al sangue e può stimolare il libero flusso
            delle emozioni in chi lo usa. Il Granato può aiutare a rafforzare
            chi lo usa, proteggere dal pericolo e condurre una vita buona e
            onorevole.{"\n"}
            Può anche aiutare a penetrare nel cuore di ogni questione.{"\n"}
            Il Ferro è buono per il sangue e il cuore.{"\n"}
            Può ricordarci la necessità di essere temperati dalle esperienze
            della vita.{"\n"}
            Può incoraggiarci ad avere una durezza discriminante che ci
            permetterà di sapere quando la parola “no” è la risposta che
            promuoverà il bene migliore per tutti i coinvolti.
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
    margin: 20,
  },
  imageView: {
    flex: 1,
    height: 180,
    width: 270,
    margin: "auto",
    marginBottom: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "black",
  },
subTitle: {
  textAlign: 'center',
  fontStyle: 'italic',
  fontSize: 12
},

  image: {
    height: "100%",
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
