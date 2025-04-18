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
          <Text style={styles.title}>Ultima Colheita - Decomposição</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Last Harvest - Decomposition</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Ultimo Raccolto - Decomposizione</Text>
        )}

        <View style={styles.imageView}></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O frio aumenta na terra, o Sol diminui sua intensidade, as folhas
            das árvores secam e caem.{"\n"}É o período dos términos.{"\n"}{" "}
            Sementes caem na Terra e deixam o ventre da Deusa com uma esperança
            de vida O fio que separa as estações, o fio que separa a morte da
            vida, é a Ultima Colheita. {"\n"}
            Onde honramos todos aqueles que já passaram por este mundo. {"\n"}É
            o véu que se solta para a comunicação com os espíritos familiares,
            seus ancestrais. É o momento do Calendário Sagrado que podemos
            comparar aqui no Hesmifério Sul com a época do Dia dos Finados, de
            Todos os Santos, Samhain, Halloweeen.{"\n"}A morte é profundamente
            significativa. Descobrindo o que ela é em si mesma, conheceremos o
            segredo da vida. {"\n"}
            Aquilo que continua além da sepultura somente pode ser conhecido por
            pessoas de consciência desperta. Quem está adormecido desconhece
            aquilo que está além da morte. {"\n"}
            Teorias há muitas, cada um pode formular sua opinião, porém o mais
            importante é experimentar diretamente tudo isso que perternce aos
            mistérios da morte.{"\n"}
            Evocamos a medicina da purificação e limpeza, morte e renovação
            (renascimento).{"\n"}
            Celebraremos a esperança da vida na escuridão, a preparação para o
            período de renovação que chegará com o inverno. {"\n"}Os elementos
            que influenciam são Fogo e Terra.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The cold increases on the earth, the Sun diminishes its intensity,
            the leaves of the trees dry up and fall.{"\n"}
            It is the period of endings.{"\n"}
            Seeds fall to the Earth and leave the womb of the Goddess with a
            hope of life. The thread that separates the seasons, the thread that
            separates death from life, is the Last Harvest.{"\n"}
            Where we honor all those who have passed through this world.{"\n"}
            It is the veil that lifts for communication with the spirit
            ancestors, your ancestors. It is the moment in the Sacred Calendar
            that we can compare here in the Southern Hemisphere with the time of
            All Souls’ Day, All Saints’ Day, Samhain, Halloween.{"\n"}
            Death is deeply significant. By discovering what it is in itself, we
            will know the secret of life.{"\n"}
            That which continues beyond the grave can only be known by those
            with awakened consciousness. Those who are asleep are unaware of
            what lies beyond death.{"\n"}
            There are many theories, anyone can form their own opinion, but the
            most important is to directly experience all that pertains to the
            mysteries of death.{"\n"}
            We invoke the medicine of purification and cleansing, death and
            renewal (rebirth).{"\n"}
            We will celebrate the hope of life in the darkness, the preparation
            for the period of renewal that will come with winter.{"\n"}
            The elements that influence are Fire and Earth.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il freddo aumenta sulla terra, il Sole diminuisce la sua intensità,
            le foglie degli alberi si seccano e cadono.{"\n"}È il periodo delle
            conclusioni.{"\n"}I semi cadono sulla Terra e lasciano il grembo
            della Dea con una speranza di vita. Il filo che separa le stagioni,
            il filo che separa la morte dalla vita, è l'Ultima Raccolta.{"\n"}
            Dove onoriamo tutti coloro che sono già passati attraverso questo
            mondo.{"\n"}È il velo che si solleva per la comunicazione con gli
            spiriti ancestrali, i tuoi antenati. È il momento nel Calendario
            Sacro che possiamo paragonare qui nell'Emisfero Sud con il periodo
            di Tutti i Santi, il Giorno dei Morti, Samhain, Halloween.{"\n"}
            La morte è profondamente significativa. Scoprendo cosa essa sia in
            se stessa, conosceremo il segreto della vita.{"\n"}
            Ciò che continua oltre la tomba può essere conosciuto solo da coloro
            che hanno una coscienza risvegliata. Chi è addormentato ignora ciò
            che c'è oltre la morte.{"\n"}
            Ci sono molte teorie, ognuno può formulare la propria opinione, ma
            ciò che è più importante è sperimentare direttamente tutto ciò che
            appartiene ai misteri della morte.{"\n"}
            Evociamo la medicina della purificazione e pulizia, della morte e
            della rinnovazione (rinascita).{"\n"}
            Celebreremo la speranza della vita nell'oscurità, la preparazione
            per il periodo di rinnovamento che arriverà con l'inverno.{"\n"}
            Gli elementi che influenzano sono Fuoco e Terra.
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
