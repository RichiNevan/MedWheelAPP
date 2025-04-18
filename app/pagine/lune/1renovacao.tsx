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
        {language === "prt" && (
          <Text style={styles.title}>Lua da Renovaçao</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Renovation</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna del Rinnovamento</Text>
        )}
<View style={styles.imageView}>
<Image
          style={styles.image}
          source={require("@/assets/images/lune/renovacao.png")}
        />
        </View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A Lua do Inverno.{"\n"}
            Encerra o ciclo do outono, trazendo a renovação e o esfriamento.
            {"\n"}É marcada pelo Solstício de Inverno (a noite mais escura do
            ano), onde ficamos mais distante do Sol. {"\n"}
            Os raios solares estão com a máxima inclinação, então o tempo do Sol
            no Horizonte fica menor, tornando o dia mais curto. {"\n"}
            As sementes na Terra parecem dormentes e frias, a Terra é coberta
            com uma seriedade que vem com o frio, nas casas se buscam abrigo e
            calor e nos convida a pensar no futuro, nos dias quentes que virão.
            {"\n"}È um momento de dar e receber. {"\n"}É Yule (Xamanismo Celta),
            tempo de mudança para um novo ciclo, de se confraternização da
            família, de trocar presentes, que corresponde ao Natal.{"\n"}
            Na roda Medicinal dos nativos norte-americanos é a Lua da Renovação
            da Terra.{"\n"}
            Sun Bear e Wabun, explica que essa lua nos ensina a ser um receptor
            e transmissor claro de energia universal como é o Cristal de
            Quartzo, um comunicador tão importante do conhecimento ancestral
            como a Bétula e tão respeitoso das tradições e rituais como o Ganso
            da neve.{"\n"}
            Essa lua inspira a ter fluidez com correção na conduta, a sermos
            claros e adaptáveis, prudentes e sábios.{"\n"}
            Estabelece a pureza da intenção, libertando a alma para experimentar
            coisas novas, novas idéias, vencer limites. {"\n"}
            Fortalece a paciência. {"\n"}
            Ensina sobre a necessidade de dar e receber amor, a harmonizar
            relacionamentos com a família, seguir as próprias percepções e
            intuições. {"\n"}
            Desperta um sentido de segurança e motiva a encontrar um direção
            espiritual, um caminho.{"\n"}
            Pode ajudar tanto a desenvolver suas habilidades psíquicas quanto a
            descobrir o aspecto inteligente, humanitário, corajoso e gentil de
            seu próprio ser.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The Winter Moon.{"\n"}
            It closes the autumn cycle, bringing renewal and cooling.{"\n"}
            It is marked by the Winter Solstice (the darkest night of the year),
            when we are farthest from the Sun.{"\n"}
            The sun's rays are at their maximum tilt, so the time the Sun spends
            on the Horizon is shorter, making the day shorter.{"\n"}
            The seeds in the Earth seem dormant and cold, the Earth is covered
            with a seriousness that comes with the cold, in the houses people
            seek shelter and warmth, and it invites us to think about the
            future, the warm days to come.{"\n"}
            It is a time for giving and receiving.{"\n"}
            It is Yule (Celtic Shamanism), a time for change into a new cycle,
            for family gatherings, for exchanging gifts, corresponding to
            Christmas.{"\n"}
            In the Native American Medicine Wheel, it is the Moon of Earth
            Renewal.{"\n"}
            Sun Bear and Wabun explain that this moon teaches us to be a clear
            receiver and transmitter of universal energy, like the Quartz
            Crystal, a communicator as important of ancestral knowledge as the
            Birch, and as respectful of traditions and rituals as the Snow
            Goose.{"\n"}
            This moon inspires fluidity with correctness in conduct, to be clear
            and adaptable, prudent and wise.{"\n"}
            It establishes the purity of intention, freeing the soul to
            experience new things, new ideas, and break limits.{"\n"}
            It strengthens patience.{"\n"}
            It teaches about the need to give and receive love, to harmonize
            relationships with family, to follow one's own perceptions and
            intuitions.{"\n"}
            It awakens a sense of security and motivates finding a spiritual
            direction, a path.{"\n"}
            It can help both develop psychic abilities and discover the
            intelligent, humanitarian, courageous, and kind aspects of your own
            being.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            La Luna d'Inverno.{"\n"}
            Chiude il ciclo dell'autunno, portando rinnovamento e
            raffreddamento.{"\n"}È segnata dal Solstizio d'Inverno (la notte più
            buia dell'anno), quando siamo più lontani dal Sole.{"\n"}I raggi
            solari sono inclinati al massimo, quindi il tempo che il Sole passa
            sull'Orizzonte è più breve, rendendo il giorno più corto.{"\n"}I
            semi nella Terra sembrano dormienti e freddi, la Terra è coperta da
            una serietà che arriva con il freddo, nelle case si cerca rifugio e
            calore, e ci invita a pensare al futuro, ai giorni caldi che
            verranno.{"\n"}È un momento per dare e ricevere.{"\n"}È Yule
            (Sciamanismo Celtico), un momento di cambiamento per un nuovo ciclo,
            di riunioni familiari, di scambio di regali, che corrisponde al
            Natale.{"\n"}
            Nella Ruota Medicinale dei nativi americani è la Luna del
            Rinnovamento della Terra.{"\n"}
            Sun Bear e Wabun spiegano che questa luna ci insegna a essere un
            chiaro ricevitore e trasmettitore di energia universale, come il
            Cristallo di Quarzo, un comunicatore tanto importante per la
            conoscenza ancestrale quanto la Betulla, e tanto rispettoso delle
            tradizioni e rituali quanto l'Oca delle Nevi.{"\n"}
            Questa luna ispira fluidità con correttezza nella condotta, a essere
            chiari e adattabili, prudenti e saggi.{"\n"}
            Stabilisce la purezza dell'intenzione, liberando l'anima per
            sperimentare cose nuove, nuove idee, e superare i limiti.{"\n"}
            Rafforza la pazienza.{"\n"}
            Insegna la necessità di dare e ricevere amore, di armonizzare i
            rapporti familiari, di seguire le proprie percezioni e intuizioni.
            {"\n"}
            Suscita un senso di sicurezza e motiva a trovare una direzione
            spirituale, un cammino.{"\n"}
            Può aiutare sia a sviluppare le proprie abilità psichiche che a
            scoprire l'aspetto intelligente, umanitario, coraggioso e gentile
            del proprio essere.
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
    fontSize: 35,
    fontFamily: "Cocchin",
    color: "darkred",
    margin: 20,
  },
  imageView: {
    flex: 1,
    height: 360,
    width: 350,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    marginVertical: 10,
    borderRadius: 20,
  },

  image: {
    resizeMode: "contain",
    bottom: 290,
    width: 350,
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