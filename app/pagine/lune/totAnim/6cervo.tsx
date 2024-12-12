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

const Cervo = () => {
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
        {language === "prt" && <Text style={styles.title}>Cervo</Text>}
        {language === "eng" && <Text style={styles.title}>Deer</Text>}
        {language === "ita" && <Text style={styles.title}>Cervo</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/cervo.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O cervo é o totem animal associado à lua cheia. {"\n"}O cervo é uma
            criatura sensível, graciosa e alerta. Sua beleza traz alegria a
            todos que o vêem. {"\n"}Apesar de algumas diferenças de tamanho e
            hábito entre diferentes espécies de cervos, todos eles tendem a
            variar entre dois e quatro pés no ombro e entre 50 e 400 libras.{" "}
            {"\n"}Os cervos têm uma voz ( balido), mas bufam quando
            excitados,guincham quando estão sob ataque ou com dor e às vezes têm
            um grito especial para chamar os filhotes. {"\n"}Os filhotes de
            todos os cervos são manchados quando nascem para camuflá-los. Os
            filhotes também nascem sem um cheiro para lhes proporcionar maior
            proteção. {"\n"}Têm conjuntos de chifres que perdem e regeneram a
            cada ano. {"\n"}Os cervos vivem em rebanhos, ou em pequenos grupos
            com outros do seu próprio sexo, exceto durante a época de
            acasalamento, quando, de outra forma, os fanfarrões amigáveislutam
            usando seus agora chifres fresquinhos. {"\n"}Após a estação de
            acasalamento, uma corça mais velha geralmente leva o rebanho para o
            inverno. Na primavera, dá à luz, muitas vezes a gêmeos ou trigêmeos.
            {"\n"}
            Nascimentos múltiplos às vezes causam superpopulação. Pumas,
            coiotes, cães, ursos, linces, incêndios florestais, seres humanos e
            automóveis são os assassinos de veados. Estima-se que mais de
            400.000 cervos sejam mortos anualmente nos Estados Unidos em
            rodovias e outras estradas. {"\n"}Os cervos eram uma parte muito
            importante do círculo da vida de muitos povos nativos. Eles
            forneciam alimento básico para várias tribos que honravam o presente
            dos cervos por meio de cerimônias, danças e orações. {"\n"}Para
            algumas tribos, notadamente o Huichol, no México, o cervo era o mais
            importante dos animais. Os huichol acreditam que o cervo representa
            o coração e é o guardião do mundo espiritual. {"\n"}A Dança dos
            Cervos é a dança mais sagrada para os Huichol, que os ajuda a
            penetrar o véu entre os mundos. {"\n"}Trabalhar com o cervo pode
            ensiná-lo sobre adaptabilidade, camuflagem, graça, beleza,
            velocidade, cura, sensibilidade, atenção, criatividade, energia do
            seu coração e sua conexão com o Espírito.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The deer is the animal totem associated with the full moon. {"\n"}
            The deer is a sensitive, graceful, and alert creature. Its beauty
            brings joy to all who see it. {"\n"}
            Despite some size and habit differences among different species of
            deer, they all tend to range between two and four feet at the
            shoulder and between 50 and 400 pounds.{"\n"}
            Deer have a voice (bleat), but they grunt when excited, whine when
            under attack or in pain, and sometimes have a special cry to call
            their fawns. {"\n"}
            Fawns of all deer species are spotted when born to camouflage them.
            The fawns are also born scentless for added protection.{"\n"}
            They have antlers that they shed and regenerate every year. {"\n"}
            Deer live in herds, or in small groups with others of their own sex,
            except during the mating season, when, otherwise friendly bucks
            fight using their now fresh antlers. {"\n"}
            After the mating season, an older doe usually leads the herd into
            winter. In spring, she gives birth, often to twins or triplets.
            {"\n"}
            Multiple births sometimes cause overpopulation. Pumas, coyotes,
            dogs, bears, lynxes, wildfires, humans, and vehicles are the deer’s
            killers. It is estimated that over 400,000 deer are killed annually
            in the United States on highways and other roads.{"\n"}
            Deer were a very important part of the circle of life for many
            native peoples. They provided staple food for several tribes who
            honored the gift of the deer through ceremonies, dances, and
            prayers.{"\n"}
            For some tribes, notably the Huichol in Mexico, the deer was the
            most important of animals. The Huichol believe that the deer
            represents the heart and is the guardian of the spiritual world.
            {"\n"}
            The Dance of the Deer is the most sacred dance for the Huichol,
            helping them to penetrate the veil between the worlds. {"\n"}
            Working with the deer can teach you about adaptability, camouflage,
            grace, beauty, speed, healing, sensitivity, attentiveness,
            creativity, the energy of your heart, and your connection to the
            Spirit.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il cervo è il totem animale associato alla luna piena. {"\n"}
            Il cervo è una creatura sensibile, aggraziata e vigile. La sua
            bellezza porta gioia a tutti coloro che lo vedono. {"\n"}
            Nonostante alcune differenze di dimensione e abitudini tra le
            diverse specie di cervi, tutti tendono a variare tra i due e i
            quattro piedi al garrese e tra i 50 e i 400 libbre.{"\n"}I cervi
            hanno una voce (belato), ma sbuffano quando sono eccitati, stridono
            quando sono sotto attacco o provano dolore, e a volte emettono un
            grido speciale per chiamare i loro cuccioli. {"\n"}I cuccioli di
            tutti i cervi sono macchiati alla nascita per camuffarli. I cuccioli
            nascono anche senza odore per offrire una maggiore protezione.{"\n"}
            Hanno corna che perdono e rigenerano ogni anno. {"\n"}I cervi vivono
            in branchi o in piccoli gruppi con altri del loro stesso sesso,
            tranne durante la stagione degli accoppiamenti, quando, altrimenti
            amichevoli, i maschi si combattono usando le loro corna ora fresche.{" "}
            {"\n"}
            Dopo la stagione degli accoppiamenti, una vecchia femmina
            generalmente guida il branco durante l'inverno. In primavera, dà
            alla luce, spesso gemelli o trigeniti.{"\n"}
            Le nascite multiple a volte causano sovrappopolazione. Puma, coyote,
            cani, orsi, linci, incendi boschivi, esseri umani e veicoli sono i
            predatori dei cervi. Si stima che oltre 400.000 cervi vengano uccisi
            ogni anno negli Stati Uniti sulle autostrade e altre strade.{"\n"}I
            cervi erano una parte molto importante del cerchio della vita di
            molti popoli nativi. Fornivano cibo base per diverse tribù che
            onoravano il dono del cervo tramite cerimonie, danze e preghiere.
            {"\n"}
            Per alcune tribù, in particolare gli Huichol in Messico, il cervo
            è l'animale più importante. Gli Huichol credono che il cervo
            rappresenti il cuore ed è il guardiano del mondo spirituale.{"\n"}
            La Danza dei Cervi è la danza più sacra per gli Huichol, che li
            aiuta a penetrare il velo tra i mondi.{"\n"}
            Lavorare con il cervo può insegnarti l'adattabilità, il
            camuffamento, la grazia, la bellezza, la velocità, la guarigione, la
            sensibilità, l'attenzione, la creatività, l'energia del tuo cuore e
            la tua connessione con lo Spirito.
          </Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Cervo;

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
    height: 340,
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
    width: '100%',
    height: '100%',
    opacity: 0.95
  },
  header: {
    borderBlockColor: 'white',
   borderColor: 'white',
  }
});
