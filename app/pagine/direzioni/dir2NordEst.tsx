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

const NordEst = () => {
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
      headerBackTitle:
        language === "prt"
          ? "Voltar"
          : language === "ita"
          ? "Indietro"
          : "Back",
    });
  }, [navigation]);

  return (
    <ImageBackground source={require("@/assets/images/background.jpg")}>
      <ScrollView style={styles.scrollView}>
        {language === "prt" && (
          <Text style={styles.title}>Germinaçao - Preparaçao</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Germination - Preparation</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Germinazione - Preparazione</Text>
        )}

        {language === "prt" && (
          <Text style={styles.testo}>
            É o meio do inverno, onde sentimos mais os ventos frios, nos
            impulsionando para ficarmos mais confinados, mais limitados,
            ficarmos mais quietos descansando. {"\n"}
            Porém há movimento dentro da terra com a nova vida que se esconde
            por debaixo da superfície.{"\n"}
            Esta época ensina como trabalhar o centro do coração, como
            demonstrar afeição, como encarar os medos, e como desenvolver
            habilidades de liderança. {"\n"}
            Ajuda a desenvolver a coragem e o poder.{"\n"}
            No meNordEst, a Terra faz a sua própria limpeza preparando-se para
            um novo ritmo de crescimento que está por vir.{"\n"} Um momento de
            preparação, para planejar, buscar visões e ideias inovadoras. Um
            momento do inverno onde podemos sentir a influência solar se
            agitando, na frescura do ar. Uma energia estimulante, revigorante e
            de limpeza. {"\n"}A semente se rompe, a planta vence a limitação e
            no ventre da Mãe Terra uma nova vida que estará por vir, movendo-se
            para debaixo da superfície.{"\n"} Nós aqui na Terra aproveitamos
            essa energia para vencer limitações e constrangimentos.{"\n"}
            Na Grã-Bretanha, a data era celebrada como Imbolc (fevereiro no
            Hemisfério Norte), cujo siginifcado do nome significa barriga
            (gravidez) onde se comemorava o retorno da luz e tem o equivalente
            cristão do Festival da Candelária. {"\n"}
            Nos tempos antigos era um festival de limpeza. {"\n"}
            De limpar a terra e a confusão de coisas acumuladas no ano interior
            e que já não serviam mais. Um tempo de preparação para o novo
            crescimento quando a dormência do inverno subitamente irá se
            transformar na atividade da primavera. {"\n"}
            Os nativos americanos faziam a cerimônia do “dar e receber”, ocasião
            para que essas coisas serem oferecidas. {"\n"}
            Também para banir más atitudes e hábitos, pequenos medos e
            ressentimentos, e os maus sentimentos. {"\n"}
            Ceriomonialmente cada banimento era representado por um único grão
            ou por um pau lançado para dentro do fogo e sendo comumido. Chega o
            poder da nova vida que se esconde no repouso, indicando a
            necessidade de estar em silêncio e ouvir, para fugir da conversa
            fiada e confusão. {"\n"}O Poder é associado com a meditação e
            contemplação cuja essência é o repouso da atividade externa para
            preparação.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            It is the middle of winter, where we feel the cold winds more
            strongly, pushing us to remain more confined, more limited, staying
            quieter and resting.{"\n"}
            Yet there is movement within the earth, with new life hidden beneath
            the surface.{"\n"}
            This season teaches us how to work with the heart's center, how to
            show affection, how to face fears, and how to develop leadership
            skills.{"\n"}
            It helps to develop courage and power.{"\n"}
            In the middle of winter, the Earth undergoes its own cleansing,
            preparing for a new rhythm of growth that is about to come.{"\n"}A
            time of preparation, to plan, to seek visions and innovative ideas.
            A moment in winter where we can feel the sun’s influence stirring in
            the freshness of the air. A stimulating, invigorating, and cleansing
            energy.{"\n"}
            The seed breaks, the plant overcomes its limitations, and in the
            womb of Mother Earth, new life is forming, moving beneath the
            surface.{"\n"}
            Here on Earth, we use this energy to overcome limitations and
            constraints.{"\n"}
            In Britain, the date was celebrated as Imbolc (February in the
            Northern Hemisphere), whose name means "belly" (pregnancy), marking
            the return of light and having the Christian equivalent of the
            Festival of Candlemas.{"\n"}
            In ancient times, it was a festival of cleansing.{"\n"}A time to
            clean the land and clear away the clutter of accumulated things from
            the past year that were no longer useful. A time of preparation for
            new growth when the dormancy of winter would suddenly turn into the
            activity of spring.{"\n"}
            Native Americans held the “give and take” ceremony, a time for these
            things to be offered.{"\n"}
            It was also a time to banish bad attitudes and habits, small fears
            and resentments, and negative feelings.{"\n"}
            Ceremonially, each banishment was represented by a single grain or a
            stick thrown into the fire and consumed. The power of new life
            hidden in rest arrives, signaling the need to be silent and listen,
            to escape idle chatter and confusion.{"\n"}
            The power is associated with meditation and contemplation, whose
            essence is the rest from external activity in preparation for what
            is to come.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            È il cuore dell’inverno, quando sentiamo più intensamente i venti
            freddi, che ci spingono a rimanere più confinati, più limitati, a
            stare più tranquilli e a riposare.{"\n"}
            Tuttavia, c’è movimento all’interno della terra, con una nuova vita
            nascosta sotto la superficie.{"\n"}
            Questo periodo insegna come lavorare con il centro del cuore, come
            mostrare affetto, come affrontare le paure e come sviluppare
            capacità di leadership.{"\n"}
            Aiuta a sviluppare coraggio e forza.{"\n"}A metà inverno, la Terra
            subisce la sua purificazione, preparandosi a un nuovo ritmo di
            crescita che sta per arrivare.{"\n"}
            Un momento di preparazione, per pianificare, cercare visioni e idee
            innovative. Un momento dell’inverno in cui possiamo sentire
            l’influenza del sole agitarsi nella freschezza dell’aria. Un’energia
            stimolante, rinvigorente e purificatrice.{"\n"}
            Il seme si rompe, la pianta supera le sue limitazioni, e nel grembo
            di Madre Terra si forma una nuova vita, che si muove sotto la
            superficie.{"\n"}
            Qui sulla Terra utilizziamo questa energia per superare limitazioni
            e costrizioni.{"\n"}
            In Gran Bretagna, questa data veniva celebrata come Imbolc (febbraio
            nell’Emisfero Settentrionale), il cui nome significa "ventre"
            (gravidanza), per celebrare il ritorno della luce, con l’equivalente
            cristiano della Festa della Candelora.{"\n"}
            Nei tempi antichi, era un festival di purificazione.{"\n"}
            Un momento per pulire la terra e eliminare il disordine delle cose
            accumulate nell’anno passato che non servivano più. Un momento di
            preparazione per una nuova crescita, quando la dormienza
            dell’inverno si trasformerà improvvisamente nell’attività della
            primavera.{"\n"}I nativi americani celebravano la cerimonia del
            “dare e ricevere”, un’occasione per offrire queste cose.{"\n"}
            Era anche un momento per bandire cattive attitudini e abitudini,
            piccole paure e risentimenti, e sentimenti negativi.{"\n"}
            Cerimonialmente, ogni bandizione era rappresentata da un singolo
            chicco o da un bastoncino gettato nel fuoco e consumato. Arriva il
            potere della nuova vita nascosta nel riposo, indicando la necessità
            di stare in silenzio e ascoltare, di sfuggire alle chiacchiere
            inutili e alla confusione.{"\n"}
            Il potere è associato alla meditazione e alla contemplazione, la cui
            essenza è il riposo dall’attività esterna per la preparazione di ciò
            che sta per arrivare.
          </Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default NordEst;

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
