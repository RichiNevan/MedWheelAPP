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
        {language === "prt" && <Text style={styles.title}>Urso Marrom</Text>}
        {language === "eng" && <Text style={styles.title}>Brown Bear</Text>}
        {language === "ita" && <Text style={styles.title}>Orso</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/urso1.png")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem animal da Lua da Abundância é o Urso Marrom.{"\n"} O Urso
            Marrom é a mesma espécie do Urso Preto. A fêmea pode ter um ursinho
            marrom e um preto, na mesma ninhada.{"\n"} Ursos marrons fazem suas
            tocas em buracos, em cavernas, debaixo de árvores caídas, em
            edifícios desamparados, ou debaixo de cachoeiras.{"\n"} Os ursos
            marrons são criaturas calmas e cuidadosas. Entre seus alimentos
            favoritos estão o mel e as frutas silvestres.{"\n"} Ursos são
            curiosos, assim como seu primo, o guaxinim. Eles levam tempo para
            assistir e aprender com as coisas ao seu redor. Eles só se apressam
            no cume quando precisam comer o suficiente para sustentá-los durante
            o longo sono de inverno.{"\n"} A hibernação do urso não é completa.
            Durante o último período de hibernação, as fêmeas têm seus filhotes,
            então precisam ficar acordados o suficiente para amamentá-los.{"\n"}
            Os ursos têm uma natureza alegre e boa e compartilham muitas
            habilidades com os humanos. Eles podem ficar sobre as duas pernas e
            andar uma curta distância.{"\n"} Eles podem trepar nas árvores, e
            usam suas garras como anzol na pesca.{"\n"} Para o nativo, o Urso é
            um animal muito especial. Em muitas lendas do mundo animal, tal como
            aquela que conta como Animais Espíritos Guardiães foram designados,
            o urso é conhecido como um dos chefes dos animais.{"\n"} O Urso
            trabalha a honestidade, força, coragem. Na maiorias das tribos, o
            Clã do Urso é o da Medicina, ou da liderança ou da defesa.{"\n"}
            Trabalhar com o Urso nos ensina deliberação, prazer, observação,
            movimentos vagarosos e firmes, honestidade, coragem, força, cura e
            aprendizado.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The totem animal of the Moon of Abundance is the Brown Bear. {"\n"}
            The Brown Bear is the same species as the Black Bear. A female can
            have both a brown bear cub and a black bear cub in the same litter.{" "}
            {"\n"}
            Brown Bears make their dens in holes, caves, under fallen trees, in
            abandoned buildings, or under waterfalls. {"\n"}
            Brown Bears are calm and careful creatures. Among their favorite
            foods are honey and wild berries. {"\n"}
            Bears are curious, just like their cousin, the raccoon. They take
            time to watch and learn from the things around them. They only rush
            to the summit when they need to eat enough to sustain them during
            the long winter sleep. {"\n"}
            Bear hibernation is not complete. During the last period of
            hibernation, females give birth to their cubs and must stay awake
            enough to nurse them. {"\n"}
            Bears have a cheerful and good nature and share many skills with
            humans. They can stand on their hind legs and walk a short distance.{" "}
            {"\n"}
            They can climb trees and use their claws as hooks for fishing.{" "}
            {"\n"}
            For natives, the Bear is a very special animal. In many animal world
            legends, such as the one telling how the Spirit Animal Guardians
            were chosen, the bear is known as one of the chiefs of the animals.{" "}
            {"\n"}
            The Bear represents honesty, strength, and courage. In most tribes,
            the Bear Clan is associated with Medicine, leadership, or defense.{" "}
            {"\n"}
            Working with the Bear teaches us deliberation, pleasure,
            observation, slow and steady movements, honesty, courage, strength,
            healing, and learning.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem animale della Luna dell'Abbondanza è l'Orso Bruno. {"\n"}
            L'Orso Bruno è la stessa specie dell'Orso Nero. Una femmina può
            avere un cucciolo di orso bruno e uno nero nella stessa cucciolata.{" "}
            {"\n"}
            Gli orsi bruni fanno i loro rifugi in buche, caverne, sotto alberi
            abbattuti, in edifici abbandonati o sotto cascate. {"\n"}
            Gli orsi bruni sono creature calme e attente. Tra i loro cibi
            preferiti ci sono il miele e i frutti di bosco. {"\n"}
            Gli orsi sono curiosi, proprio come il loro cugino, il procione. Si
            prendono il tempo di osservare e imparare dalle cose che li
            circondano. Si affrettano solo verso la cima quando devono mangiare
            abbastanza per sostenersi durante il lungo sonno invernale. {"\n"}
            La letargia dell'orso non è completa. Durante l'ultimo periodo di
            letargo, le femmine partoriscono i loro cuccioli e devono restare
            sveglie abbastanza per allattarli. {"\n"}
            Gli orsi hanno una natura allegra e buona e condividono molte
            abilità con gli esseri umani. Possono stare sulle due zampe e
            camminare per brevi distanze. {"\n"}
            Possono arrampicarsi sugli alberi e usano le loro unghie come ami
            per pescare. {"\n"}
            Per i nativi, l'Orso è un animale molto speciale. In molte leggende
            del mondo animale, come quella che racconta come sono stati scelti
            gli Spiriti Animali Guardiani, l'orso è conosciuto come uno dei capi
            degli animali. {"\n"}
            L'Orso rappresenta l'onestà, la forza e il coraggio. Nella maggior
            parte delle tribù, il Clan dell'Orso è associato alla Medicina, alla
            leadership o alla difesa. {"\n"}
            Lavorare con l'Orso ci insegna la delibera, il piacere,
            l'osservazione, i movimenti lenti e decisi, l'onestà, il coraggio,
            la forza, la guarigione e l'apprendimento.
          </Text>
        )}

<View style={[styles.imageView, {width: '95%', height: 360}]}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/urso.jpg")}
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
    height: 278,
    width: "79%",
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
    width: '100%',
    height: '100%',
    opacity: 0.95
  },
  header: {
    borderBlockColor: 'white',
   borderColor: 'white',
  }
});
