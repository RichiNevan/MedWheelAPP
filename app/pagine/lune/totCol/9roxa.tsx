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
        {language === "prt" && <Text style={styles.title}>Roxa</Text>}
        {language === "eng" && <Text style={styles.title}>Purple</Text>}
        {language === "ita" && <Text style={styles.title}>Viola</Text>}

        <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("@/assets/images/coloriLune/roxa.jpg")}
        />
</View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A cor associada ao urso pardo e à Lua da Abundância é roxa. {"\n"}
            Esta é a púrpura do violeta tímido cujas flores podem ser facilmente
            perdidas crescendo no chão da floresta. É também a cor dos cristais
            de ametista profunda. {"\n"}Este roxo é a cor da cerimônia, ritual,
            percepção espiritual, idealismo e amor da humanidade.{"\n"} Algumas
            gradações de púrpura indicam alguém usando poder espiritual para
            ganho pessoal.{"\n"} O roxo é uma cor de sabedoria, mas pode ser
            usado de maneiras positivas ou negativas. {"\n"} roxo ao seu redor
            irá inspirá-lo, trazer-lhe insights espirituais, aumentar seu amor
            pela cerimônia e fazer com que você examine como está usando seu
            poder.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The color associated with the grizzly bear and the Moon of Abundance
            is purple. {"\n"}
            This is the purple of the shy violet, whose flowers can easily go
            unnoticed growing on the forest floor. It is also the color of deep
            amethyst crystals. {"\n"} This purple is the color of ceremony,
            ritual, spiritual awareness, idealism, and love for humanity.{"\n"}{" "}
            Some shades of purple indicate someone using spiritual power for
            personal gain.{"\n"} Purple is a color of wisdom, but it can be used
            in positive or negative ways. {"\n"} Having purple around you will
            inspire you, bring you spiritual insights, increase your love for
            ceremony, and make you reflect on how you are using your power.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il colore associato all'orso grizzly e alla Luna dell'Abbondanza è
            il viola. {"\n"}
            Questo è il viola della timida violetta, i cui fiori possono
            facilmente passare inosservati crescendo sul suolo della foresta. È
            anche il colore dei cristalli di ametista profonda. {"\n"} Questo
            viola è il colore della cerimonia, del rituale, della consapevolezza
            spirituale, dell'idealismo e dell'amore per l'umanità.{"\n"} Alcune
            sfumature di viola indicano qualcuno che usa il potere spirituale
            per guadagni personali.{"\n"} Il viola è un colore di saggezza, ma
            può essere usato in modi positivi o negativi. {"\n"} Avere il viola
            intorno a te ti ispirerà, ti porterà intuizioni spirituali,
            aumenterà il tuo amore per la cerimonia e ti farà riflettere su come
            stai usando il tuo potere.
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
    height: 195,
    width: 300,
    margin: 'auto',
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7
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