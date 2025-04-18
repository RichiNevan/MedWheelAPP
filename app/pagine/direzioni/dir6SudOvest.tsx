import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React, {useEffect} from "react";
import { useSettings } from "../../SettingsContext";
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
        {language === "prt" && (
          <Text style={styles.title}>Primeira Colheita - Abundancia</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>First Harvest - Abundance</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Primo Raccolto - Abbondanza</Text>
        )}

        <View style={styles.imageView}></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Celebração da Primeira Colheita. {"\n"}
            Este Festival do fogo corresponde sazonalmente com o Festival do
            Milho Verde, a Dança do Milho dos nativos norte-americanos; com
            Lammas ou Lughnasadh (que acontecem em 01 de agosto no hemisfério
            Norte e 01 de fevereiro no Hemisfério Sul); e muitas outras
            celebrações da colheita. {"\n"}
            Lammas em inglês arcaico, significava a Missa do Pão (Loaf Mass),
            descrevendo assim, a festa do pão fresco, feitos dos primeiros grãos
            de trigo. {"\n"}
            Pelo Calendário Cristão é associado ao “Dia de Ação de Graças”, “A
            Massa de Pão”.{"\n"}É o momento onde avaliamos aquilo que colhemos,
            fazendo um balanço de nosso sucessos e frustrações. Onde
            conscientemente e através do lívre-arbítrio abrimos mão, rejeitamos,
            limpamos o velho e começamos a plantar novos projetos. {"\n"}É o
            momento de honrar as divindades relacionadas com a colheita e darmos
            graças por nossa primeira colheita. Invocamos a conexão com a
            natureza e com os seres da Criação. {"\n"}
            Buscamos a consciência que estamos todos ligados por “Todas As
            Nossas Relações“. Preservamos nossa essência, celebramos os
            resultados e fazemos cerimônias de agradecimento e purificação.{" "}
            {"\n"}
            Fazemos a avaliação dos sucessos e fracassos e nos preparamos para o
            Equinócio de Outono.{"\n"}
            {"\n"}O grão está maduro para a colheita, as árvores estão
            carregadas das primeiras frutas do verão. Marca um descanso do
            trabalho, para avaliar o estoque. A safra que o sol rendeu. Um
            momento de agraciar, comemorar, apreciar o nosso trabalho diário.{" "}
            {"\n"}
            Época para lembrarmos que não estamos sozinhos e celebrarmos com
            nossas relações, do trabalho e conquistas em grupo, da comunidade
            que vivemos, dos nossos ancestrais, antepassados. {"\n"}
            Para resgatarmos o sentido de pertencer, do compromisso. Onde
            agradecemos por comer e por ter um lugar para viver. {"\n"}
            Para louvar o sacrifício da Mãe Terra e de toda a alma feminina.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Celebration of the First Harvest. {"\n"}
            This Fire Festival corresponds seasonally with the Green Corn
            Festival, the Corn Dance of the Native Americans; with Lammas or
            Lughnasadh (which take place on August 1st in the Northern
            Hemisphere and February 1st in the Southern Hemisphere); and many
            other harvest celebrations. {"\n"}
            Lammas, in Old English, meant the Loaf Mass, thus describing the
            feast of fresh bread made from the first wheat grains. {"\n"}
            In the Christian Calendar, it is associated with “Thanksgiving Day”
            or “The Loaf Mass.” {"\n"}
            It is the moment when we evaluate what we have harvested, taking
            stock of our successes and frustrations. Where consciously and
            through free will, we let go, reject, cleanse the old, and begin to
            plant new projects. {"\n"}
            It is the time to honor the deities associated with the harvest and
            give thanks for our first harvest. We invoke the connection with
            nature and with the beings of Creation. {"\n"}
            We seek the awareness that we are all connected through “All Our
            Relations.” We preserve our essence, celebrate the results, and
            perform ceremonies of gratitude and purification. {"\n"}
            We evaluate successes and failures and prepare for the Autumn
            Equinox. {"\n"}
            {"\n"}
            The grain is ripe for harvesting, the trees are laden with the first
            fruits of summer. It marks a pause from work to assess the stock.
            The yield that the sun has provided. A moment to give thanks,
            celebrate, and appreciate our daily work. {"\n"}A time to remember
            that we are not alone and to celebrate with our relationships, from
            work and group achievements, the community we live in, our
            ancestors, and forebears. {"\n"}
            To restore the sense of belonging and commitment. Where we give
            thanks for the food we eat and the place we live. {"\n"}
            To praise the sacrifice of Mother Earth and the entire feminine
            soul.{" "}
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Celebrazione del Primo Raccolto. {"\n"}
            Questo Festival del Fuoco corrisponde stagionalmente al Festival del
            Mais Verde, alla Danza del Mais dei nativi americani; con Lammas o
            Lughnasadh (che si celebrano il 1° agosto nell'emisfero
            settentrionale e il 1° febbraio in quello meridionale); e molte
            altre celebrazioni del raccolto. {"\n"}
            Lammas, in antico inglese, significava la Messa del Pane (Loaf
            Mass), descrivendo così la festa del pane fresco fatto con i primi
            chicchi di grano. {"\n"}
            Nel Calendario Cristiano è associato al “Giorno del Ringraziamento”
            o alla “Messa del Pane.” {"\n"}È il momento in cui valutiamo ciò che
            abbiamo raccolto, facendo un bilancio dei nostri successi e
            frustrazioni. Dove, consapevolmente e attraverso il libero arbitrio,
            lasciamo andare, rifiutiamo, purifichiamo il vecchio e iniziamo a
            piantare nuovi progetti. {"\n"}È il momento di onorare le divinità
            legate al raccolto e ringraziare per il nostro primo raccolto.
            Invochiamo la connessione con la natura e con gli esseri della
            Creazione. {"\n"}
            Cerchiamo la consapevolezza che siamo tutti connessi attraverso
            “Tutte le Nostre Relazioni.” Preserviamo la nostra essenza,
            celebriamo i risultati e compiamo cerimonie di gratitudine e
            purificazione. {"\n"}
            Valutiamo successi e fallimenti e ci prepariamo per l’Equinozio
            d’Autunno. {"\n"}
            {"\n"}
            Il grano è maturo per la raccolta, gli alberi sono carichi dei primi
            frutti dell'estate. Segna una pausa dal lavoro per valutare le
            scorte. Il raccolto che il sole ha reso possibile. Un momento per
            ringraziare, celebrare e apprezzare il nostro lavoro quotidiano.{" "}
            {"\n"}
            Un periodo per ricordare che non siamo soli e per celebrare con le
            nostre relazioni, il lavoro e i successi di gruppo, la comunità in
            cui viviamo, i nostri antenati e predecessori. {"\n"}
            Per recuperare il senso di appartenenza e impegno. Dove ringraziamo
            per il cibo che mangiamo e il luogo in cui viviamo. {"\n"}
            Per lodare il sacrificio di Madre Terra e di tutta l'anima
            femminile.{" "}
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
  },
  imageView: {
    flex: 1,
    height: 350,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
  },

  image: {
    bottom: 20,
    width: "98%",
    height: 400,
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
