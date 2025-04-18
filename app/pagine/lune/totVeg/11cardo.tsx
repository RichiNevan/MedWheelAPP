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
        {language === "prt" && <Text style={styles.title}>Cardo</Text>}
        {language === "eng" && <Text style={styles.title}>Thistle</Text>}
        {language === "ita" && <Text style={styles.title}>Cardo</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/vegLune/cardo.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O cardo tem propriedades curativas e nutritivas. {"\n"}
            Todas as suas partes são ricas em minerais. O caule jovem ou raiz
            pode ser raspada e comido cru ou cozido. {"\n"}
            As sementes em forma de frutos podem ser comidos cruas ou assadas.{" "}
            {"\n"}O chá do Cardo é bom para curar problemas estomacais e
            digestivos, para reduzir febre, expelir vermes, aumentar o leite das
            mães que amamentam e fortalecer os órgãos internos.{"\n"}
            Dizem que aumenta o sentido de alerta e faz o cérebro funcionar com
            maior atividade. {"\n"}
            Pode nos ajudar a compreender e trabalhar com os muitos diferentes
            níveis de realidade.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The thistle has healing and nutritional properties.{"\n"}
            All its parts are rich in minerals. The young stem or root can be
            scraped and eaten raw or cooked.{"\n"}
            The fruit-shaped seeds can be eaten raw or roasted.{"\n"}
            Thistle tea is good for healing stomach and digestive problems,
            reducing fever, expelling worms, increasing milk for breastfeeding
            mothers, and strengthening internal organs.{"\n"}
            It is said to increase alertness and make the brain function with
            greater activity.{"\n"}
            It can help us understand and work with the many different levels of
            reality.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il cardo ha proprietà curative e nutritive.{"\n"}
            Tutte le sue parti sono ricche di minerali. Il giovane fusto o
            radice può essere raschiato e mangiato crudo o cotto.{"\n"}I semi a
            forma di frutto possono essere mangiati crudi o arrostiti.{"\n"}
            Il tè di cardo è utile per curare problemi di stomaco e digestivi,
            ridurre la febbre, espellere i vermi, aumentare il latte per le
            madri che allattano e rinforzare gli organi interni.{"\n"}
            Si dice che aumenti il senso di vigilanza e faccia funzionare il
            cervello con maggiore attività.{"\n"}
            Può aiutarci a comprendere e lavorare con i molti diversi livelli di
            realtà.
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
    height: 310,
    width: 350,
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
