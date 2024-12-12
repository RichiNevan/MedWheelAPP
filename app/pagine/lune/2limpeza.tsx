import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useSettings } from "../../SettingsContext";
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
    });
  }, [navigation]);

  return (
    <ImageBackground source={require("@/assets/images/background.jpg")}>
      <ScrollView style={styles.scrollView}>
        {language === "prt" && <Text style={styles.title}>Lua da Limpeza</Text>}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Cleansing</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna della Pulizia</Text>
        )}

        <View style={styles.imageView}></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A Lua da Limpeza.{"\n"}
            E' a lua do meio do inverno, onde sentimos mais os ventos frios, nos
            impulsionando para ficarmos mais confinados, mais limitados,
            ficarmos mais quietos descansando.{"\n"}
            Porém há movimento dentro da terra (semente) com a nova vida que se
            esconde por debaixo da superfície. Período de aumento da luz e
            despertar das sementes. {"\n"}
            No xamanismo celta é Imbolc (01 de fevereiro), corresponde ao “Dia
            da Candelária” Na Roda, Wabun traz como a Lua de Repouso e Limpeza,
            que ajuda a desenvolver habilidades psíquicas, a descobrir o aspecto
            corajoso e humanitário de nosso próprio ser. {"\n"}
            Ela ensina a saber demonstrar afeição e de encarar temores, que o
            coração é a fonte da força e desenvolver habilidades de liderança.
            {"\n"}
            Ajuda a desenvolver a coragem e o poder. {"\n"}
            Indica a necessidade de ser silencioso e escutar, ficar longe da
            confusão, a praticar a meditação e a contemplação, a descansar da
            atividade externa de modo a priorizar o crescimento interno.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The Cleansing Moon.{"\n"}
            It is the moon of midwinter, when we feel the cold winds more
            strongly, pushing us to be more confined, more limited, to be still
            and rest.{"\n"}
            However, there is movement within the earth (seeds) with new life
            hidden beneath the surface. A period of increasing light and
            awakening of the seeds.{"\n"}
            In Celtic shamanism, it is Imbolc (February 1), corresponding to the
            "Candlemas Day." In the Wheel, Wabun brings it as the Moon of Rest
            and Cleansing, which helps to develop psychic abilities, to discover
            the courageous and humanitarian aspect of our own being.{"\n"}
            It teaches us how to show affection and face our fears, that the
            heart is the source of strength, and helps develop leadership
            skills.{"\n"}
            It helps to develop courage and power.{"\n"}
            It indicates the need to be silent and listen, stay away from
            confusion, practice meditation and contemplation, rest from external
            activity to prioritize internal growth.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            La Luna della Pulizia.{"\n"}È la luna di metà inverno, quando
            sentiamo più forti i venti freddi, che ci spingono a essere più
            confinati, più limitati, a stare fermi e riposare.{"\n"}
            Tuttavia, c'è movimento dentro la terra (semi) con la nuova vita che
            si nasconde sotto la superficie. Un periodo di aumento della luce e
            risveglio dei semi.{"\n"}
            Nello sciamanesimo celtico, è Imbolc (1 febbraio), corrisponde al
            “Giorno della Candelora”. Nella Ruota, Wabun la presenta come la
            Luna del Riposo e della Pulizia, che aiuta a sviluppare abilità
            psichiche, a scoprire l'aspetto coraggioso e umanitario del nostro
            essere.{"\n"}
            Insegna come mostrare affetto e affrontare le paure, che il cuore è
            la fonte della forza, e aiuta a sviluppare abilità di leadership.
            {"\n"}
            Aiuta a sviluppare il coraggio e il potere.{"\n"}
            Indica la necessità di essere silenziosi e ascoltare, stare lontani
            dalla confusione, praticare meditazione e contemplazione, riposare
            dall'attività esterna per dare priorità alla crescita interiore.
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
    marginBottom: 60,
  },
  title: {
    textAlign: "center",
    fontSize: 35,
    fontFamily: "Cocchin",
    color: "darkred",
    margin: 20,
   
  },
  imageView: {
    flex: 1,
    height: 300,
    width: 350,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20
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
