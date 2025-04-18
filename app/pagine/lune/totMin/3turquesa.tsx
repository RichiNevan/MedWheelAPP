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
        {language === "prt" && <Text style={styles.title}>Turquesa</Text>}
        {language === "eng" && <Text style={styles.title}>Turquoise</Text>}
        {language === "ita" && <Text style={styles.title}>Turchese</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/mineraliLune/turquesa.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem mineral é a Turquesa.{"\n"} Ela dá excelente proteção em
            todos os níveis do ser. Muitos povos nativos acreditavam que a
            Turquesa pode poteger o portador de ferimentos e perigos.{"\n"} No
            passado eles a utilizavam sobre os escudos para desviar armas. Tem
            sido utilizada em cerimônias religiosas e tem sido esculpida em
            fetiches e engastada em outros objetos. {"\n"} Turquesa é utilizada
            em cerimonioas para se fazer chover. A pedra fornece e fortalece
            habilidades de cura já inerentes.{"\n"}Ela é uma boa pedra de cura
            preventiva para nos ajudar a entender alguns dos mistérios da vida e
            do Universo.{"\n"} Tal compreensão poderá nos ajudar a evitar os
            perigos das doenças.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The mineral totem is Turquoise.{"\n"}
            It provides excellent protection on all levels of being. Many native
            peoples believed that Turquoise could protect the wearer from wounds
            and dangers.{"\n"}
            In the past, they used it on shields to deflect weapons. It has been
            used in religious ceremonies and has been carved into fetishes and
            set into other objects.{"\n"}
            Turquoise is used in ceremonies to make it rain. The stone provides
            and strengthens inherent healing abilities.{"\n"}
            It is a good preventive healing stone to help us understand some of
            the mysteries of life and the Universe.{"\n"}
            Such understanding can help us avoid the dangers of illness.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem minerale è la Turchese.{"\n"}
            Essa fornisce un'ottima protezione su tutti i livelli dell'essere.
            Molti popoli nativi credevano che la Turchese potesse proteggere chi
            la indossava da ferite e pericoli.{"\n"}
            In passato, la usavano sugli scudi per deviare le armi. È stata
            utilizzata in cerimonie religiose ed è stata scolpita in feticci e
            incastonata in altri oggetti.{"\n"}
            La Turchese è utilizzata nelle cerimonie per fare piovere. La pietra
            fornisce e rafforza le abilità di guarigione già insite.{"\n"}È una
            buona pietra di guarigione preventiva per aiutarci a comprendere
            alcuni dei misteri della vita e dell'Universo.{"\n"}
            Tale comprensione può aiutarci a evitare i pericoli delle malattie.
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
    height: 184,
    width: 300,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "black",
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
