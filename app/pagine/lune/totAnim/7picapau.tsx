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
        {language === "prt" && <Text style={styles.title}>Pica-Pau</Text>}
        {language === "eng" && <Text style={styles.title}>Woodpecker</Text>}
        {language === "ita" && <Text style={styles.title}>Picchio</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/picapau.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem animal associado à Lua do sol forte é o Pica-Pau. {"\n"}
            Os Pica-Paus são tocadores de tambor. Cantam sua canção em troncos
            mortos, telhados de zinco e casas de madeira. {"\n"}
            Algumas vezes para extrair insetos e outras pelo simples prazer de
            cantar. Durante o acasalamento os pica-paus apresentam uma magnífica
            performance de seus talentos musicais. {"\n"}
            Como a maioria dos pássaros, os pica-paus são bons pais. Alimentam
            seus filhotes até que possam voar sozinhos.{"\n"}O Pica-Pau é uma
            ave especial para muitos povos nativos. Particularmente, porque eles
            tamborilam tão bem. {"\n"}
            As penas do pica-pau vermelho são associadas ao sangue e com
            frequência são presenteadas para espíritos guerreiros. {"\n"}
            Penas vermelhas num bastão-de-oração são consideradas oferendas de
            guerra, tanto contra inimigos humanos quanto espirituais. Os membros
            de algumas sociedades medicinais usavam penas de pica-paus em seus
            cabelos para identificar a sua filiação.{"\n"}
            Algumas lendas dizem que ele tem asas vermelhas porque ele foi muito
            perto de um incêndio, feito pelo tremor do Espirito da Terra, para
            tentar apagá-lo. As chamas desse fogo coloriam suas asas e cauda
            vermelha. {"\n"}
            Penas de cintilação vermelha estão associadas com sangue e são
            freqüentemente apresentadas aos espíritos de guerra. {"\n"}
            Penas vermelhas em paus de oração são consideradas ofertas de
            guerra, contra inimigos humanos ou espirituais. {"\n"}
            Membros de algumas sociedades de medicina usavam penas de cintilação
            no cabelo para identificar sua afiliação.{"\n"}
            Trabalhar com o Pica-Pau nos ensina sobre comunicação, música,
            alegria, nutrição, amamentação, coragem, proteção, tenacidade e sua
            conexão com o universal.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The animal totem associated with the Full Sun Moon is the
            Woodpecker. {"\n"}
            Woodpeckers are drummers. They sing their song on dead tree trunks,
            zinc roofs, and wooden houses. {"\n"}
            Sometimes to extract insects and other times simply for the joy of
            singing. During mating, woodpeckers perform a magnificent display of
            their musical talents. {"\n"}
            Like most birds, woodpeckers are good parents. They feed their young
            until they can fly on their own.{"\n"}
            The Woodpecker is a special bird for many native peoples,
            particularly because they drum so well. {"\n"}
            The red feathers of the woodpecker are associated with blood and are
            often gifted to warrior spirits. {"\n"}
            Red feathers on a prayer stick are considered war offerings, both
            against human and spiritual enemies. Members of some medicinal
            societies used woodpecker feathers in their hair to identify their
            affiliation.{"\n"}
            Some legends say that the woodpecker has red wings because it was
            very close to a fire caused by the trembling of the Spirit of the
            Earth, trying to extinguish it. The flames of this fire colored its
            wings and tail red. {"\n"}
            Red shimmering feathers are associated with blood and are often
            presented to the spirits of war. {"\n"}
            Red feathers on prayer sticks are considered war offerings, against
            human or spiritual enemies.{"\n"}
            Members of some medicine societies used shimmering feathers in their
            hair to identify their affiliation.{"\n"}
            Working with the Woodpecker teaches us about communication, music,
            joy, nourishment, breastfeeding, courage, protection, tenacity, and
            its connection with the universal.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem animale associato alla Luna del Sole Forte è il Picchio.{" "}
            {"\n"}I picchiatori sono batteristi. Cantano la loro canzone su
            tronchi morti, tetti di zinco e case di legno. {"\n"}A volte per
            estrarre insetti e altre volte semplicemente per il piacere di
            cantare. Durante l'accoppiamento, i picchiatori eseguono una
            magnifica performance dei loro talenti musicali. {"\n"}
            Come la maggior parte degli uccelli, i picchiatori sono buoni
            genitori. Nutrono i loro piccoli fino a quando non possono volare da
            soli.{"\n"}
            Il Picchio è un uccello speciale per molti popoli nativi,
            particolarmente per il fatto che battere così bene. {"\n"}
            Le piume del picchio rosso sono associate al sangue e vengono spesso
            regalate agli spiriti guerrieri. {"\n"}
            Le piume rosse su un bastone da preghiera sono considerate offerte
            di guerra, sia contro nemici umani che spirituali. I membri di
            alcune società medicinali usavano piume di picchio nei loro capelli
            per identificare la loro affiliazione.{"\n"}
            Alcune leggende dicono che il picchio ha le ali rosse perché era
            molto vicino a un incendio causato dal tremore dello Spirito della
            Terra, cercando di spegnerlo. Le fiamme di questo fuoco colorarono
            le sue ali e la coda di rosso. {"\n"}
            Le piume scintillanti rosse sono associate al sangue e vengono
            frequentemente presentate agli spiriti di guerra. {"\n"}
            Le piume rosse sui bastoni da preghiera sono considerate offerte di
            guerra, contro nemici umani o spirituali.{"\n"}I membri di alcune
            società di medicina usavano piume scintillanti nei capelli per
            identificare la loro affiliazione.{"\n"}
            Lavorare con il Picchio ci insegna la comunicazione, la musica, la
            gioia, il nutrimento, l'allattamento, il coraggio, la protezione, la
            tenacia e la sua connessione con l'universale.
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
    width: "78%",
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
