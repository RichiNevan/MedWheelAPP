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
        {language === "prt" && <Text style={styles.title}>Alce</Text>}
        {language === "eng" && <Text style={styles.title}>Moose</Text>}
        {language === "ita" && <Text style={styles.title}>Alce</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/alce.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O alce, também conhecido como wapiti, é o maior e mais famoso membro
            da família dos veados. {"\n"}
            Chifres de alce podem se assemelhar a galhos de árvores. Os alces
            vivem nas florestas e parecem ter um senso de responsabilidade um
            pelo outro. {"\n"}
            Quando as neves são pesadas, elas se revezam para quebrar a trilha.
            Às vezes os alces formam um grande círculo; fazendo piruetas ao
            redor, às vezes quebrando em um galope de alegria, e parecem dançar
            juntos. {"\n"}
            Os alces são rápidos: conseguem percorrer trinta quilômetros por
            hora para curtas distâncias. Eles também são capazes de saltar
            cercas tão altas quanto dez pés.{"\n"}
            Alce tem poucos inimigos naturais. Pumas, ursos e lobos às vezes
            conseguem derrubar um bezerro, ou um animal fraco ou doente. Nenhum
            deles é páreo para o Alce no seu auge. {"\n"}
            Antes de 1900, no entanto, a maioria dos alces nos Estados Unidos
            foi abatida por caçadores. Muitas vezes, a única razão para o
            assassinato era transformar dois de seus dentes em jóias valorizadas
            por uma organização fraternal.{"\n"}A maior parte do ano alces, como
            cervos, vivem em rebanhos do mesmo sexo. {"\n"}
            Quando a estação de acasalamento está prestes a começar, os alces
            machos tentam obter o máximo de fêmeas que puderem em seu harém, e
            defenderão fervorosamente seu harém da aproximação de quaisquer
            outros touros.{"\n"}
            Na primavera, quando é hora de bezerro, as fêmeas vão para os vales.
            Os bezerros ficam escondidos na primeira parte de suas vidas
            enquanto suas mães saem para procurar comida. {"\n"}
            Como filhotes, os bezerros nascem sem cheiro para lhes dar proteção.
            {"\n"}
            As pessoas nativas tinham grande respeito pelo alce: por sua
            velocidade, sua beleza, sua força e preocupação com seu povo. Em
            algumas tribos, se um homem sonhasse com um alce, ou visse alguém em
            visão, isso faria dele alguém que pudesse participar e falar no
            conselho de mulheres.{"\n"}
            Trabalhando com o alce você pode aprender sobre força,
            responsabilidade, alegria, velocidade, agilidade, possessividade,
            proteção, justiça, justiça e sabedoria.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The moose, also known as wapiti, is the largest and most famous
            member of the deer family. {"\n"}
            Moose antlers can resemble tree branches. Moose live in forests and
            seem to have a sense of responsibility towards one another. {"\n"}
            When the snow is heavy, they take turns breaking the trail.
            Sometimes, the moose form a large circle, spinning around, sometimes
            breaking into a joyous gallop, and they seem to dance together.{" "}
            {"\n"}
            Moose are fast: they can travel up to thirty kilometers per hour
            over short distances. They are also capable of jumping fences as
            high as ten feet. {"\n"}
            Moose have few natural enemies. Pumas, bears, and wolves may
            sometimes bring down a calf or a weak or sick animal. None of them
            are a match for the moose at its prime. {"\n"}
            Before 1900, however, most moose in the United States were hunted
            down by hunters. Often, the only reason for the killing was to turn
            two of their teeth into jewels highly valued by a fraternal
            organization. {"\n"}
            For most of the year, moose, like deer, live in same-sex herds.{" "}
            {"\n"}
            When the mating season is about to begin, male moose try to gather
            as many females as they can into their harems, and they will
            fiercely defend their harems from any approaching bulls. {"\n"}
            In spring, when it's calf season, females go to the valleys. The
            calves stay hidden in the early part of their lives while their
            mothers go out to find food.{"\n"}
            As newborns, calves are born without a scent to protect them. {"\n"}
            Native people had great respect for the moose: for its speed,
            beauty, strength, and concern for its people. In some tribes, if a
            man dreamed of a moose or saw one in vision, it would make him
            someone who could participate and speak in the women's council.{" "}
            {"\n"}
            Working with the moose can teach you about strength, responsibility,
            joy, speed, agility, possessiveness, protection, justice, and
            wisdom.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            L'alce, noto anche come wapiti, è il membro più grande e famoso
            della famiglia dei cervidi. {"\n"}I palchi degli alci possono
            assomigliare a rami di alberi. Gli alci vivono nelle foreste e
            sembrano avere un senso di responsabilità reciproca. {"\n"}
            Quando la neve è pesante, si alternano per rompere il sentiero. A
            volte gli alci formano un grande cerchio, facendo delle pirouette
            intorno, a volte saltando in un galoppo di gioia, e sembrano danzare
            insieme. {"\n"}
            Gli alci sono veloci: possono percorrere fino a trenta chilometri
            all'ora su brevi distanze. Sono anche in grado di saltare recinzioni
            alte fino a tre metri. {"\n"}
            Gli alci hanno pochi nemici naturali. Pumai, orsi e lupi a volte
            riescono a abbattere un vitello o un animale debole o malato.
            Nessuno di loro è un avversario per l'alce al suo meglio. {"\n"}
            Prima del 1900, tuttavia, la maggior parte degli alci negli Stati
            Uniti veniva abbattuta dai cacciatori. Spesso, l'unica ragione per
            l'uccisione era trasformare due dei loro denti in gioielli molto
            apprezzati da un'organizzazione fraterna. {"\n"}
            Per la maggior parte dell'anno, gli alci, come i cervi, vivono in
            branchi dello stesso sesso. {"\n"}
            Quando la stagione degli accoppiamenti è imminente, i maschi di alce
            cercano di radunare quante più femmine possibile nel loro harem e
            difenderanno fieramente il loro harem dall'avvicinarsi di altri
            tori. {"\n"}
            In primavera, quando è la stagione dei vitelli, le femmine vanno
            nelle valli. I vitelli restano nascosti nella prima parte della loro
            vita mentre le madri escono a cercare cibo. {"\n"}
            Come cuccioli, i vitelli nascono senza odore per proteggerli. {"\n"}
            I popoli nativi avevano grande rispetto per l'alce: per la sua
            velocità, la sua bellezza, la sua forza e la preoccupazione per il
            suo popolo. In alcune tribù, se un uomo sognava un alce o ne vedeva
            uno in visione, questo lo rendeva qualcuno che poteva partecipare e
            parlare nel consiglio delle donne. {"\n"}
            Lavorare con l'alce può insegnarti forza, responsabilità, gioia,
            velocità, agilità, possessività, protezione, giustizia e saggezza.
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
    height: 370,
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
