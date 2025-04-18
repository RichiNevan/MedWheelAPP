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
        {language === "prt" && <Text style={styles.title}>Esturjão</Text>}
        {language === "eng" && <Text style={styles.title}>Sturgeon</Text>}
        {language === "ita" && <Text style={styles.title}>Storione</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/esturjao2.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem animal associado à Lua dos Frutos Maduros é o Esturjão.{" "}
            {"\n"}O Esturjão também é conhecido como o ” Rei dos Peixes “. Um
            peixe primitivo que existe na Terra, provavelmente desde a época do
            desaparecimento dos dinossauros. {"\n"}
            Tem uma variedade de tamanhos, mas pode atingir quase quatro metros
            de comprimento e pelo menos 150 kg de peso.{"\n"}
            Os esturjões eram considerados a realeza dos peixes entre os povos
            nativos, que habitavam nas áreas dos Grandes Lagos. Na nação Ojibwa,
            existe o Clã do Esturjão, que é um dos clãs professores. {"\n"}
            Para os Ojibwa o Esturjão representa profundidade e força. {"\n"}
            Os europeus não tinham o mesmo respeito por este peixe, até
            descobrirem o valor de suas ovas (caviar). O trabalho com o Esturjão
            nos ensina sobre determinação, perseverança, profundidade,
            conhecimento, generosidade, força e sexualidade.{"\n"}O esturjão foi
            usado como um totem entre muitas tribos indígenas americanas. Ele se
            move entre o mar e a água doce, vivendo no fundo lamacento dos
            estuários e subindo para águas mais rasas para desovar na primavera.{" "}
            {"\n"}
            Sua pele é muito dura, e tem fileiras de placas ósseas que o fazem o
            cavaleiro das águas.{"\n"}O esturjão foi denominado pelos ameríndios
            como o Guardião da Longevidade porque poderia sobreviver até uma
            idade madura. {"\n"}
            Potencialmente, as pessoas que têm esturjão ou salmão como um totem
            são abençoadas com a longevidade para que aprendam a envelhecer
            graciosamente.{"\n"}O movimento do esturjão através da água é tão
            gracioso que o peixe quase não causa perturbações. {"\n"}
            As pessoas nascidas no Tempo de Maturação devem emular seu animal
            totêmico e aprender a se mover pela vida sem criar atrito e
            perturbação, pois é sua resistência à mudança e as demandas que os
            outros impõem a elas que causam a maioria de seus transtornos
            emocionais.{"\n"}
            Trabalhar com o esturjão pode ensinar determinação, perseverança,
            profundidade, conhecimento, generosidade, força e sexualidade.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The animal totem associated with the Moon of Ripe Fruits is the
            Sturgeon. {"\n"}
            The Sturgeon is also known as the "King of Fish," a primitive fish
            that has likely existed on Earth since the time of the dinosaurs'
            extinction. {"\n"}
            It comes in a variety of sizes, but it can grow to nearly four
            meters in length and weigh at least 150 kg. {"\n"}
            Sturgeons were considered the royalty of fish among native peoples
            who lived around the Great Lakes. In the Ojibwa nation, there exists
            the Sturgeon Clan, which is one of the teaching clans. {"\n"}
            For the Ojibwa, the Sturgeon represents depth and strength. {"\n"}
            The Europeans did not share the same respect for this fish until
            they discovered the value of its roe (caviar). Working with the
            Sturgeon teaches us about determination, perseverance, depth,
            knowledge, generosity, strength, and sexuality. {"\n"}
            The sturgeon was used as a totem among many Native American tribes.
            It moves between the sea and freshwater, living at the muddy bottom
            of estuaries and rising to shallower waters to spawn in the spring.{" "}
            {"\n"}
            Its skin is very tough, with rows of bony plates that make it the
            knight of the waters. {"\n"}
            The sturgeon was called the Guardian of Longevity by Native
            Americans because it can live to a ripe age. {"\n"}
            People with sturgeon or salmon as a totem are potentially blessed
            with longevity to learn how to age gracefully. {"\n"}
            The movement of the sturgeon through the water is so graceful that
            the fish causes almost no disturbance. {"\n"}
            People born under the Time of Maturation should emulate their totem
            animal and learn to move through life without creating friction and
            disturbance, as it is their resistance to change and the demands
            placed on them by others that cause most of their emotional turmoil.{" "}
            {"\n"}
            Working with the sturgeon can teach determination, perseverance,
            depth, knowledge, generosity, strength, and sexuality.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem animale associato alla Luna dei Frutti Maturi è lo
            Storione. {"\n"}
            Lo Storione è anche conosciuto come il "Re dei Pesci", un pesce
            primitivo che esiste probabilmente sulla Terra fin dai tempi
            dell'estinzione dei dinosauri. {"\n"}
            Ha una varietà di dimensioni, ma può raggiungere quasi i quattro
            metri di lunghezza e pesare almeno 150 kg. {"\n"}
            Gli storioni erano considerati la regalità dei pesci tra i popoli
            nativi che vivevano nelle aree dei Grandi Laghi. Nella nazione
            Ojibwa, esiste il Clan dello Storione, che è uno dei clan
            insegnanti. {"\n"}
            Per gli Ojibwa, lo Storione rappresenta profondità e forza. {"\n"}
            Gli europei non avevano lo stesso rispetto per questo pesce fino a
            quando non scoprirono il valore delle sue uova (caviale). Lavorare
            con lo Storione ci insegna determinazione, perseveranza, profondità,
            conoscenza, generosità, forza e sessualità. {"\n"}
            Lo storione è stato utilizzato come totem tra molte tribù dei nativi
            americani. Si sposta tra il mare e l'acqua dolce, vivendo sul fondo
            fangoso degli estuari e risalendo in acque più basse per deporre le
            uova in primavera. {"\n"}
            La sua pelle è molto dura e ha file di piastre ossee che lo rendono
            il cavaliere delle acque. {"\n"}
            Lo storione è stato chiamato dai nativi americani il Guardiano della
            Longevitù perché può vivere fino a una età matura. {"\n"}
            Le persone che hanno lo storione o il salmone come totem sono
            potenzialmente benedette con la longevità per imparare a invecchiare
            con grazia. {"\n"}
            Il movimento dello storione attraverso l'acqua è così aggraziato che
            il pesce non provoca quasi alcuna disturbo. {"\n"}
            Le persone nate nel Tempo della Maturazione dovrebbero emulare il
            loro animale totemico e imparare a muoversi nella vita senza creare
            attrito e disturbo, poiché è la loro resistenza al cambiamento e
            alle richieste che gli altri impongono loro a causare la maggior
            parte dei loro turbamenti emotivi. {"\n"}
            Lavorare con lo storione può insegnare determinazione, perseveranza,
            profondità, conoscenza, generosità, forza e sessualità.
          </Text>
        )}
        <View style={[styles.imageView, {height: 140, width: '98%', marginVertical: 20}]}><Image
          style={styles.image}
         
          source={require("@/assets/images/animaliLune/esturjao.jpg")}
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
    height: 220,
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
    width: "100%",
    height: "100%",
    opacity: 0.95,
  },
  header: {
    borderBlockColor: "white",
    borderColor: "white",
  },
});
