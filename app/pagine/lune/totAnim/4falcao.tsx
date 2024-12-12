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
        {language === "prt" && (
          <Text style={styles.title}>Falcão de Rabo Vermelho</Text>
        )}
        {language === "eng" && <Text style={styles.title}>Red Falcon</Text>}
        {language === "ita" && <Text style={styles.title}>Falco Rosso</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/falcao2.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O Falcão Vermelho é o totem animal associado à Lua do Florescer das
            Árvores. {"\n"}O falcão de rabo vermelho é o único falcão com uma
            extensão de asa larga e uma cauda vermelha em forma de leque. {"\n"}
            É um falcão grande, que tem sido chamado de gavião-galinheiro por
            fazendeiros que temiam, erroneamente, que os pássaros estivessem
            roubando suas aves.{"\n"}
            Os falcões de cauda vermelha são por vezes atacados por corvos,
            pegas, corujas, outros falcões e aves canoras em disputas
            territoriais. {"\n"}
            Esses ataques raramente terminam em lesão. Os falcões de cauda
            vermelha podem viver até aos catorze anos de idade. Eles costumam se
            aninhar em árvores altas, cactos, yuccas ou nos rostos dos
            penhascos. {"\n"}
            Ambos os pais ajudam a criar os jovens. Falcões de cauda vermelha
            muitas vezes retornam ano após ano para o mesmo ninho. {"\n"}
            Falcões costumavam ser encontrados em todo os Estados Unidos. Agora
            eles vivem principalmente nos estados do oeste, no México e no
            Canadá. {"\n"}
            Os falcões de cauda vermelha são muito adaptáveis e podem sobreviver
            quase em qualquer lugar onde o homem os deixa sozinhos. Sua voz em
            voo pode soar como vapor escapando de uma chaleira. {"\n"}
            Os falcões de cauda vermelha são magníficos pilotos, especialmente
            durante as suas danças de acasalamento.{"\n"}
            Os falcões de cauda vermelha são muito especiais para os povos
            nativos. Os povos indígenas se referiam a eles como “águias
            vermelhas” e sentiam que os falcões de cauda vermelha, como a águia,
            tinham uma conexão especial com o céu e o sol. {"\n"}
            Como os falcões são grandes aviadores que podem ver a terra
            claramente de suas alturas, suas penas eram freqüentemente usadas
            cerimonialmente para levar orações ao sol e ao Criador. {"\n"}
            As penas de falcão, bem como a águia, também foram usadas em
            cerimônias de cura. As pessoas do sudoeste usavam-nas em cerimônias
            para rezar pela chuva. {"\n"}
            Para os ojibwa, o clã Falcão Vermelho-Atado era um dos clãs de
            liderança. Seus membros têm os dons de deliberação e previsão.{"\n"}
            Trabalhar com o falcão vermelho pode ensiná-lo sobre adaptabilidade,
            voo, sobrevivência, longevidade e visão clara, oração, liderança,
            deliberação, otimismo, intensidade e abertura.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The Red-tailed Hawk is the animal totem associated with the Moon of
            the Blooming Trees.{"\n"}
            The red-tailed hawk is the only hawk with a broad wingspan and a
            fan-shaped red tail.{"\n"}
            It is a large hawk, often called a chicken hawk by farmers who
            mistakenly feared the birds were stealing their poultry.{"\n"}
            Red-tailed hawks are sometimes attacked by crows, magpies, owls,
            other hawks, and songbirds in territorial disputes.{"\n"}
            These attacks rarely result in injury. Red-tailed hawks can live up
            to fourteen years. They often nest in tall trees, cacti, yuccas, or
            cliff faces.{"\n"}
            Both parents help raise the young. Red-tailed hawks often return
            year after year to the same nest.{"\n"}
            Hawks were once found throughout the United States. Now they mainly
            live in the western states, Mexico, and Canada.{"\n"}
            Red-tailed hawks are highly adaptable and can survive almost
            anywhere the human allows them to. Their voice in flight sounds like
            steam escaping from a kettle.{"\n"}
            Red-tailed hawks are magnificent pilots, especially during their
            courtship dances.{"\n"}
            Red-tailed hawks are very special to indigenous peoples. Native
            people referred to them as “red eagles” and believed that red-tailed
            hawks, like the eagle, had a special connection with the sky and the
            sun.{"\n"}
            As hawks are great aviators who can see the land clearly from their
            heights, their feathers were often used ceremonially to carry
            prayers to the sun and the Creator.{"\n"}
            Hawk feathers, as well as eagle feathers, were also used in healing
            ceremonies. People from the Southwest used them in ceremonies to
            pray for rain.{"\n"}
            For the Ojibwa, the Red-Tailed Hawk-Bound clan was one of the
            leadership clans. Its members have the gifts of deliberation and
            foresight.{"\n"}
            Working with the red-tailed hawk can teach you about adaptability,
            flight, survival, longevity, clear vision, prayer, leadership,
            deliberation, optimism, intensity, and openness.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il Falco dalla coda rossa è il totem animale associato alla Luna
            della Fioritura degli Alberi.{"\n"}
            Il falco dalla coda rossa è l'unico falco con un'apertura alare
            ampia e una coda rossa a forma di ventaglio.{"\n"}È un falco grande,
            spesso chiamato falco gallinario dai contadini che temevano
            erroneamente che gli uccelli stessero rubando il loro pollame.{"\n"}
            I falchi dalla coda rossa sono talvolta attaccati da corvi, gazze,
            gufi, altri falchi e uccelli canori in dispute territoriali.{"\n"}
            Questi attacchi raramente finiscono con ferite. I falchi dalla coda
            rossa possono vivere fino a quattordici anni. NIdificano solitamente
            in alberi alti, cactus, yucche o pareti rocciose.{"\n"}
            Entrambi i genitori aiutano a crescere i giovani. I falchi dalla
            coda rossa tornano spesso anno dopo anno nello stesso nido.{"\n"}I
            falchi erano un tempo presenti in tutto gli Stati Uniti. Ora vivono
            principalmente negli stati occidentali, in Messico e in Canada.
            {"\n"}I falchi dalla coda rossa sono molto adattabili e possono
            sopravvivere quasi ovunque l'uomo li lasci in pace. Il loro verso in
            volo suona come vapore che esce da un bollitore.{"\n"}I falchi dalla
            coda rossa sono piloti magnifici, specialmente durante le loro danze
            di accoppiamento.{"\n"}I falchi dalla coda rossa sono molto speciali
            per i popoli nativi. I popoli indigeni li chiamavano “aquile rosse”
            e credevano che i falchi dalla coda rossa, come le aquile, avessero
            una connessione speciale con il cielo e il sole.{"\n"}
            Poiché i falchi sono grandi aviatori che possono vedere chiaramente
            la terra dalle loro altezze, le loro piume venivano spesso
            utilizzate cerimonialmente per portare preghiere al sole e al
            Creatore.{"\n"}
            Le piume di falco, così come quelle d'aquila, venivano anche
            utilizzate in cerimonie di guarigione. Le persone del sud-ovest le
            usavano in cerimonie per pregare per la pioggia.{"\n"}
            Per gli Ojibwa, il clan Falco Rosso-Fissato era uno dei clan di
            leadership. I suoi membri hanno i doni della deliberazione e della
            previsione.{"\n"}
            Lavorare con il falco dalla coda rossa può insegnarti
            l'adattabilità, il volo, la sopravvivenza, la longevità, la visione
            chiara, la preghiera, la leadership, la deliberazione, l'ottimismo,
            l'intensità e l'apertura.
          </Text>
        )}
        <View style={[styles.imageView, {width: 290, height: 380}]}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/falcao.jpg")}
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
    height: 247,
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
