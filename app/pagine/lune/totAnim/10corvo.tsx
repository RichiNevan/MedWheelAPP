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
        {language === "prt" && <Text style={styles.title}>Corvo</Text>}
        {language === "eng" && <Text style={styles.title}>Raven</Text>}
        {language === "ita" && <Text style={styles.title}>Corvo</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/corvo.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem animal da Lua do Voo dos Patos é o Corvo. {"\n"}
            Geralmente o corvo é uma ave toda preta com cauda em forma de cunha.
            {"\n"}O corvo tem o mesmo tamanho que o Falcão Vermelho. Algumas
            vezes agressivos, de uma maneira geral são precavidos. {"\n"}
            São aves inteligentes, que sabem como jogar um caramujo para o ar
            para quebrar sua conchas. {"\n"}
            Os corvos vivem em grupo e defendem bravamente os seus domínios.
            Alguns corvos se acasalam para toda a vida. {"\n"}
            Dizem que estas aves tem conselhos tribais. Para os povos nativos,
            os corvos são considerados aves de equilíbrio entre o homem e a
            natureza. {"\n"}
            Quase todas as tribos tem uma lenda sobre os corvos. Para alguns ele
            é um mau auspício, para outros, um bom. {"\n"}
            Os povos Pueblo conetam o Corvo com os Espíritos Kachinas. Ao Corvo
            tem sido atribuído o crédito de trazer nuvens que chamam a chuva,
            como o de levá-las. {"\n"}
            Simboliza também a magia (o companheiro do mago).
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The totem animal of the Moon of Duck Flight is the Raven. {"\n"}
            Generally, the raven is an all-black bird with a wedge-shaped tail.{" "}
            {"\n"}
            The raven is the same size as the Red-tailed Hawk. Sometimes
            aggressive, they are generally cautious. {"\n"}
            They are intelligent birds that know how to toss a snail into the
            air to break its shell. {"\n"}
            Ravens live in groups and bravely defend their territory. Some
            ravens mate for life. {"\n"}
            It is said that these birds have tribal wisdom. For the native
            peoples, ravens are considered birds of balance between man and
            nature. {"\n"}
            Almost all tribes have a legend about ravens. For some, they are an
            omen of bad luck, for others, a good one. {"\n"}
            The Pueblo peoples connect the Raven with the Kachina Spirits. The
            Raven has been credited with bringing clouds that call for rain, as
            well as taking them away. {"\n"}
            It also symbolizes magic (the companion of the wizard).
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem animale della Luna del Volo degli Anatroccoli è il Corvo.{" "}
            {"\n"}
            Generalmente, il corvo è un uccello completamente nero con una coda
            a forma di cuneo. {"\n"}
            Il corvo ha la stessa dimensione del Falco dalle Doppie Code. A
            volte aggressivi, in generale sono cauti. {"\n"}
            Sono uccelli intelligenti che sanno come lanciare una lumaca in aria
            per rompere il suo guscio. {"\n"}I corvi vivono in gruppo e
            difendono coraggiosamente i loro territori. Alcuni corvi si
            accoppiano per tutta la vita. {"\n"}
            Si dice che questi uccelli abbiano saggezza tribale. Per i popoli
            nativi, i corvi sono considerati uccelli di equilibrio tra l'uomo e
            la natura. {"\n"}
            Quasi tutte le tribù hanno una leggenda sui corvi. Per alcuni sono
            un presagio di cattiva sorte, per altri di buona sorte. {"\n"}I
            popoli Pueblo collegano il Corvo agli Spiriti Kachina. Al Corvo è
            stato attribuito il merito di portare nuvole che evocano la pioggia,
            così come di allontanarle. {"\n"}
            Simbolizza anche la magia (il compagno del mago).
          </Text>
        )}

<View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/corvo2.jpg")}
        /></View>
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
    height: 327,
    width: "90%",
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
