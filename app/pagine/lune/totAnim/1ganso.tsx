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
          <Text style={styles.title}>Ganso das Neves</Text>
        )}
        {language === "eng" && <Text style={styles.title}>Snow Goose</Text>}
        {language === "ita" && <Text style={styles.title}>Oca delle Nevi</Text>}

<View style={styles.imageView}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("@/assets/images/animaliLune/ganso.jpg")}
        />
</View>
        {language === "prt" && (
          <Text style={styles.testo}>
            Ganso das Neves é o totem animal associado à Lua da Renovação da
            Terra (Lua Do Inverno).{"\n"} O ganso da neve, um belo pássaro branco, tem
            sido chamado de “ganso do além do vento norte” por causa da direção
            que esses gansos vão quando migram na primavera.{"\n"} Algumas espécies de
            ganso da neve viajam 5.000 milhas a cada ano, voando em um padrão V
            solto.{"\n"} Os gansos da neve são muito gregários. Não é incomum ver
            20.000 ou 30.000 aves parando para comer no mesmo local.{"\n"} Em seus
            locais de nidificação eles mostram respeito pela tradição,
            permitindo que os mais experientes a primeira escolha de.{"\n"} Tanto o
            macho quanto a fêmea ficam com os ovos. {"\n"}Gansos da neve são
            metódicos. Eles vão passar horas colhendo mosquitos ou insetos uns
            dos outros.{"\n"} Os gansos têm uma visão muito mais apurada que os
            humanos. O ganso buzina, mas quando vários milhares de gansos estão
            se aproximando, o som equivocado por qualquer coisa, de um bando de
            cães selvagens a latindo coiotes.{"\n"} Viver com o ganso da neve pode
            ensiná-lo sobre o mistério criativo, os poderes universais, a
            tradição, a perfeição, a estabilidade, a comunidade, a cerimônia e a
            evolução
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Snow Goose is the animal totem associated with the Moon of Earth
            Renewal (Winter Moon).{"\n"} The snow goose, a beautiful white bird, has
            been called the "goose from beyond the north wind" because of the
            direction these geese migrate in the spring.{"\n"} Some species of snow
            geese travel 5,000 miles each year, flying in a loose V pattern.
            Snow geese are very social.{"\n"} It is not uncommon to see 20,000 or
            30,000 birds stopping to feed at the same place. At their nesting
            sites, they show respect for tradition, allowing the more
            experienced ones to have the first choice.{"\n"} Both the male and female
            geese take care of the eggs. Snow geese are methodical. They will
            spend hours picking mosquitoes or insects off each other. Geese have
            much sharper vision than humans.{"\n"} The goose honks, but when several
            thousand geese are approaching, the sound can be mistaken for
            anything from a pack of wild dogs to howling coyotes.{"\n"} Living with
            the snow goose can teach you about creative mystery, universal
            powers, tradition, perfection, stability, community, ceremony, and
            evolution.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Oca delle Nevi è il totem animale associato alla Luna del
            Rinnovamento della Terra (Luna d’Inverno).{"\n"} L’oca delle nevi, un
            bellissimo uccello bianco, è stata chiamata “oca da oltre il vento
            del nord” per via della direzione verso cui queste oche migrano in
            primavera.{"\n"} Alcune specie di oche delle nevi percorrono 5.000 miglia
            ogni anno, volando in una formazione a V allentata. Le oche delle
            nevi sono molto socievoli.{"\n"} Non è raro vedere 20.000 o 30.000 uccelli
            fermarsi a nutrirsi nello stesso luogo. Nei loro luoghi di
            nidificazione dimostrano rispetto per la tradizione, permettendo ai
            più esperti di scegliere per primi.{"\n"} Sia il maschio che la femmina si
            prendono cura delle uova. Le oche delle nevi sono metodiche. Passano
            ore a rimuovere zanzare o insetti l’una dall’altra.{"\n"} Le oche hanno
            una vista molto più acuta rispetto agli esseri umani. Il loro
            starnazzare può sembrare qualsiasi cosa, dal latrato di un branco di
            cani selvatici all’ululato dei coyote, quando si avvicinano migliaia
            di oche insieme.{"\n"} Vivere con l’oca delle nevi può insegnarti il
            mistero creativo, i poteri universali, la tradizione, la perfezione,
            la stabilità, la comunità, la cerimonia e l’evoluzione.
          </Text>
        )}

<View style={styles.imageView2}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("@/assets/images/animaliLune/ganso2.jpg")}
        />
</View>
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
    margin: 20,
  },
  imageView: {
    flex: 1,
    width: '95%',
    margin: 'auto',
    alignItems: "center",
    overflow: "hidden",
    marginVertical: 30,
    borderColor: 'black',
    borderWidth: 1,
  },

  image: {
   
  },

  imageView2: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    margin: 'auto',
    width: 350,
    overflow: 'hidden',
    marginVertical: 20
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
