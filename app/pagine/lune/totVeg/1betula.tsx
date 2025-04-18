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
        {language === "prt" && <Text style={styles.title}>Betula</Text>}
        {language === "eng" && <Text style={styles.title}>Birch</Text>}
        {language === "ita" && <Text style={styles.title}>Betulla</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/betula.png")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A bétula é a planta associada à Lua da Renovação da Terra (Lua do
            Inverno). {"\n"}A bétula é uma das árvores mais antigas e
            abundantes. {"\n"}
            As pessoas nativas usavam a casca para escrever, a seiva para o
            xarope e uma bebida, e a casca e as folhas para chás e remédios
            medicinais. {"\n"}
            Colocar as folhas em pedras quentes em banhos de suor cria um vapor
            que ajuda a limpar o corpo e a eliminar a eletricidade estática.
            {"\n"}
            Ramos do vidoeiro podem ser unidos e usados durante suores para
            espancar o corpo ajudando a expelir toxinas. {"\n"}
            Birch faz um bom chá para tratar problemas de pele, artrite,
            reumatismo, rim, bexiga e problemas digestivos. Birch traz
            conhecimento de tradições antigas e mais sabedoria. {"\n"}
            Abre todas as energias para que fluam bem, ajudando assim a sua
            capacidade de transmitir e receber os poderes do universo.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The birch is the plant associated with the Moon of Earth's Renewal
            (Winter Moon).{"\n"}
            Birch is one of the oldest and most abundant trees.{"\n"}
            Native people used the bark for writing, the sap for syrup and as a
            drink, and the bark and leaves for teas and medicinal remedies.
            {"\n"}
            Placing the leaves on hot stones in sweat baths creates a vapor that
            helps cleanse the body and eliminate static electricity.{"\n"}
            Birch branches can be tied together and used during sweats to beat
            the body, helping expel toxins.{"\n"}
            Birch makes a good tea for treating skin problems, arthritis,
            rheumatism, kidney, bladder, and digestive issues. Birch brings
            knowledge of ancient traditions and more wisdom.{"\n"}
            It opens all energies to flow well, thus helping your ability to
            transmit and receive the powers of the universe.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            La betulla è la pianta associata alla Luna del Rinnovamento della
            Terra (Luna d'Inverno).{"\n"}
            La betulla è una delle piante più antiche e abbondanti.{"\n"}I
            popoli nativi usavano la corteccia per scrivere, la linfa per
            sciroppo e bevande, e la corteccia e le foglie per tisane e rimedi
            medicinali.{"\n"}
            Mettere le foglie su pietre calde durante i bagni di sudore crea un
            vapore che aiuta a purificare il corpo ed eliminare l'elettricità
            statica.{"\n"}I rami della betulla possono essere legati insieme e
            usati durante i sudori per battere il corpo, aiutando a espellere le
            tossine.{"\n"}
            La betulla fa un buon tè per trattare problemi di pelle, artrite,
            reumatismi, reni, vescica e problemi digestivi. La betulla porta
            conoscenza delle tradizioni antiche e più saggezza.{"\n"}
            Apre tutte le energie affinché fluiscano bene, aiutando così la tua
            capacità di trasmettere e ricevere i poteri dell'universo.
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
    height: 350,
    width: 225,
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
