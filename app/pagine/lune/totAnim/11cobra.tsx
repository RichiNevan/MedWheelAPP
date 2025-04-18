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
        {language === "prt" && <Text style={styles.title}>Cobra</Text>}
        {language === "eng" && <Text style={styles.title}>Snake</Text>}
        {language === "ita" && <Text style={styles.title}>Serpente</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/cobra.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O Totem animal da Lua Gelada é a Cobra. {"\n"}A cobra, ou serpente,
            é aquele membro antigo, misterioso, difamado e incompreendido da
            família dos vertebrados. {"\n"}
            No mundo existem cerca de 2.500 espécies de cobras. As cobras são
            répteis carnívoros e sem membros com mandíbulas expansíveis. {"\n"}
            Eles comem principalmente pequenos animais como ratos e sapos. Eles
            também comem insetos. Por causa de suas preferências alimentares, as
            cobras são uma parte essencial do equilíbrio da natureza. {"\n"}
            Quando o homem assassina cobras arbitrariamente, ele geralmente é
            invadido por ratos e camundongos.{"\n"}
            As cobras são muito adaptáveis ao seu ambiente e são extremamente
            sensíveis ao toque e às vibrações. Elas são de sangue frio e
            dependem do ambiente para se aquecer e hibernar no inverno. {"\n"}
            Elas podem mudar sua cor para se misturar com a terra que os rodeia
            e tirar suas peles. {"\n"}
            Cobras não têm voz, mas alguns silvos. Cascavéis zumbem seus
            chocalhos. {"\n"}
            Apesar de sua reputação de ser sem emoção, o namoro de cobras pode
            ser um assunto muito caloroso. {"\n"}A maioria das cobras, mesmo as
            das variedades venenosas, evitam seres humanos e atacam apenas em
            autodefesa.{"\n"}A cobra foi respeitada na maioria das culturas
            indígenas. A serpente emplumada (Quetzalcoatl), um antigo símbolo
            das tribos da América do Sul e Central, representava a justiça e a
            transformação. {"\n"}O povo Hopi acredita que a cobra é um
            mensageiro de e para outros reinos e tem o poder de trazer as chuvas
            vitais. O povo Ojibwa tem um Clã das Cobras, que é um clã de
            medicina. {"\n"}
            Eles acreditam que a cobra representa paciência, porque ele é tão
            lento para se irritar. Muitos povos indígenas usaram a serpente para
            representar a energia vital que flui através dos seres humanos.{" "}
            {"\n"}
            Cobra também é um símbolo dos poderes femininos e da cura.{"\n"}
            Trabalhar com a serpente pode ensinar-lhe sobre o mistério, os
            domínios da criação, transformação profunda, equilíbrio da natureza,
            adaptabilidade, sensibilidade, comunicação, sexualidade,
            regeneração, paciência, autodefesa, justiça, cura, o feminino dentro
            você e sua própria força vital.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The totem animal of the Frozen Moon is the Snake. {"\n"}
            The snake, or serpent, is an ancient, mysterious, defamed, and
            misunderstood member of the vertebrate family. {"\n"}
            There are about 2,500 species of snakes in the world. Snakes are
            carnivorous reptiles without limbs and with expandable jaws. {"\n"}
            They mostly eat small animals like mice and frogs. They also eat
            insects. Because of their dietary preferences, snakes are an
            essential part of nature's balance. {"\n"}
            When humans arbitrarily kill snakes, they are usually invaded by
            rats and mice. {"\n"}
            Snakes are very adaptable to their environment and are extremely
            sensitive to touch and vibrations. They are cold-blooded and rely on
            the environment to warm up and hibernate during the winter. {"\n"}
            They can change their color to blend with the earth around them and
            shed their skin. {"\n"}
            Snakes have no voice, but some hiss. Rattlesnakes buzz their
            rattles. {"\n"}
            Despite their reputation for being emotionless, snake courtship can
            be a very warm affair. {"\n"}
            Most snakes, even venomous varieties, avoid humans and only attack
            in self-defense. {"\n"}
            The snake was respected in most indigenous cultures. The feathered
            serpent (Quetzalcoatl), an ancient symbol of South and Central
            American tribes, represented justice and transformation. {"\n"}
            The Hopi people believe that the snake is a messenger to and from
            other realms and has the power to bring vital rain. The Ojibwa
            people have a Snake Clan, which is a medicine clan. {"\n"}
            They believe that the snake represents patience because it is slow
            to anger. Many indigenous peoples used the serpent to represent the
            vital energy that flows through humans. {"\n"}
            The snake is also a symbol of feminine power and healing. {"\n"}
            Working with the snake can teach you about mystery, the realms of
            creation, deep transformation, nature's balance, adaptability,
            sensitivity, communication, sexuality, regeneration, patience,
            self-defense, justice, healing, the feminine within you, and your
            own life force.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem animale della Luna Congelata è il Serpente. {"\n"}
            Il serpente, o serpente, è un membro antico, misterioso, diffamato e
            incomprensibile della famiglia dei vertebrati. {"\n"}
            Nel mondo esistono circa 2.500 specie di serpenti. I serpenti sono
            rettili carnivori senza arti e con mascelle espandibili. {"\n"}
            Mangiano principalmente piccoli animali come topi e rane. Mangiano
            anche insetti. Grazie alle loro preferenze alimentari, i serpenti
            sono una parte essenziale dell'equilibrio della natura. {"\n"}
            Quando l'uomo uccide i serpenti arbitrariamente, di solito viene
            invaso da topi e roditori. {"\n"}I serpenti sono molto adattabili al
            loro ambiente e sono estremamente sensibili al tocco e alle
            vibrazioni. Sono animali a sangue freddo e dipendono dall'ambiente
            per riscaldarsi e ibernarsi durante l'inverno. {"\n"}
            Possono cambiare colore per mimetizzarsi con la terra che li
            circonda e mutare la pelle. {"\n"}I serpenti non hanno voce, ma
            alcuni sibili. I crotali emettono il suono dei loro sonagli. {"\n"}
            Nonostante la loro reputazione di essere privi di emozioni, il
            corteggiamento dei serpenti può essere un affare molto caloroso.{" "}
            {"\n"}
            La maggior parte dei serpenti, anche quelli velenosi, evita gli
            esseri umani e attaccano solo per autodifesa. {"\n"}
            Il serpente è stato rispettato nella maggior parte delle culture
            indigene. Il serpente piumato (Quetzalcoatl), un antico simbolo
            delle tribù dell'America del Sud e Centrale, rappresentava la
            giustizia e la trasformazione. {"\n"}
            Il popolo Hopi crede che il serpente sia un messaggero da e per
            altri regni e abbia il potere di portare la pioggia vitale. Il
            popolo Ojibwa ha un Clan dei Serpenti, che è un clan di medicina.{" "}
            {"\n"}
            Credono che il serpente rappresenti la pazienza perché è lento ad
            arrabbiarsi. Molti popoli indigeni usavano il serpente per
            rappresentare l'energia vitale che scorre attraverso gli esseri
            umani. {"\n"}
            Il serpente è anche un simbolo dei poteri femminili e della
            guarigione. {"\n"}
            Lavorare con il serpente può insegnarti mistero, i regni della
            creazione, trasformazione profonda, equilibrio della natura,
            adattabilità, sensibilità, comunicazione, sessualità, rigenerazione,
            pazienza, autodifesa, giustizia, guarigione, il femminile dentro di
            te e la tua forza vitale.
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
    height: 390,
    width: "95%",
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
