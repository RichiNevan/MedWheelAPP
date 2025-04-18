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
        {language === "prt" && <Text style={styles.title}>Puma</Text>}
        {language === "eng" && <Text style={styles.title}>Puma</Text>}
        {language === "ita" && <Text style={styles.title}>Puma</Text>}

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("@/assets/images/animaliLune/puma1.jpg")}
          />
        </View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O totem animal associado à Lua dos Grandes Ventos é o Puma.{"\n"}O
            Puma ou Leão das Montanhas, tem sido mal compreendido e temido,
            resultando em ser caçado pelos humanos. {"\n"}É também conhecido
            como Cougar, Pantera, Gato Fantasma. Os pumas são os melhores
            escaladores de todos os felinos. {"\n"}
            São velozes corredores que têm grandes territórios individuais. Sua
            estrutura social não permite que esses territórios sejam invadidos.{" "}
            {"\n"}
            Eles caçam apenas para saciar a fome. As fêmeas são melhores
            caçadores que os machos. O puma, o leão deste continente, não
            recebeu o mesmo respeito que o seu homólogo africano. {"\n"}O puma
            foi mal compreendido e temido, muitas vezes resultando em sua
            matança desmedida. {"\n"}O puma é o maior membro da família felina
            no continente americano. Os pumas medem entre sete e nove pés e
            pesam entre 150 e 300 libras. {"\n"}
            Suas caudas de ponta preta ou marrom e tufos de orelha nunca parecem
            ficar parados. Cougars foram encontrados em todo os Estados Unidos
            antes da disseminação desta civilização atual. {"\n"}
            Agora eles são encontrados no oeste dos Estados Unidos, Flórida,
            Canadá e México. Os pumas são caçadores. Eles gostam da perseguição
            e muitas vezes juntam esforços com seus companheiros ou relações
            para obter melhores resultados. {"\n"}
            Eles não caçam mais comida do que eles comem. {"\n"}
            Eles só caçam animais quando seus suprimentos naturais de alimentos
            foi esgotado. {"\n"}
            Quando os pumas se acasalam, a fêmea freqüentemente é a agressora. A
            maioria das ninhadas nascem na primavera e consistem em apenas dois
            kits. {"\n"}
            Embora a mãe puma seja muito carinhosa e dedicada aos seus kits, os
            pumas não têm muito a ver com eles.{"\n"}
            Os pumas podem ensiná-lo sobre velocidade, graça, territorialidade,
            sensibilidade, mistério, comunicação sem palavras, perseguição e
            iniciativa.{"\n"}
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The animal totem associated with the Moon of the Great Winds is the
            Puma.{"\n"}
            The Puma, or Mountain Lion, has been misunderstood and feared,
            resulting in being hunted by humans.{"\n"}
            It is also known as Cougar, Panther, Ghost Cat. Pumas are the best
            climbers of all felines.{"\n"}
            They are swift runners with large individual territories. Their
            social structure does not allow these territories to overlap. {"\n"}
            They hunt only to satisfy hunger. Females are better hunters than
            males. The puma, the lion of this continent, has not received the
            same respect as its African counterpart.{"\n"}
            The puma has been misunderstood and feared, often resulting in its
            wanton killing.{"\n"}
            The puma is the largest member of the feline family in the Americas.
            Pumas measure between seven and nine feet and weigh between 150 and
            300 pounds.{"\n"}
            Their black- or brown-tipped tails and tufted ears never seem to
            stay still. Cougars were once found throughout the United States
            before the spread of the current civilization.{"\n"}
            Now they are found in the western United States, Florida, Canada,
            and Mexico. Pumas are hunters. They enjoy the chase and often team
            up with their companions or kin to achieve better results.{"\n"}
            They do not hunt more food than they eat.{"\n"}
            They only hunt animals when their natural food supplies are
            depleted.{"\n"}
            When pumas mate, the female is often the aggressor. Most litters are
            born in spring and consist of only two cubs.{"\n"}
            Although the puma mother is very caring and dedicated to her cubs,
            pumas do not have much involvement with them.{"\n"}
            Pumas can teach you about speed, grace, territoriality, sensitivity,
            mystery, wordless communication, pursuit, and initiative.{"\n"}
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il totem animale associato alla Luna dei Grandi Venti è il Puma.
            {"\n"}
            Il Puma, o Leone di Montagna, è stato frainteso e temuto, risultando
            spesso cacciato dagli esseri umani.{"\n"}È anche conosciuto come
            Cougar, Pantera, Gatto Fantasma. I puma sono i migliori scalatori di
            tutti i felini.{"\n"}
            Sono corridori veloci con ampi territori individuali. La loro
            struttura sociale non permette che questi territori si
            sovrappongano. {"\n"}
            Cacciano solo per soddisfare la fame. Le femmine sono cacciatrici
            migliori dei maschi. Il puma, il leone di questo continente, non ha
            ricevuto lo stesso rispetto del suo omologo africano.{"\n"}
            Il puma è stato frainteso e temuto, spesso portando alla sua
            uccisione indiscriminata.{"\n"}
            Il puma è il membro più grande della famiglia dei felini nel
            continente americano. I puma misurano tra i due e i tre metri e
            pesano tra i 70 e i 140 chilogrammi.{"\n"}
            Le loro code con punte nere o marroni e le orecchie con ciuffi
            sembrano non fermarsi mai. I cougars erano presenti in tutti gli
            Stati Uniti prima della diffusione di questa civiltà attuale.{"\n"}
            Ora si trovano negli Stati Uniti occidentali, in Florida, in Canada
            e in Messico. I puma sono cacciatori. Amano l'inseguimento e spesso
            collaborano con i loro compagni o parenti per ottenere risultati
            migliori.{"\n"}
            Non cacciano più cibo di quanto ne consumino.{"\n"}
            Cacciano altri animali solo quando le loro risorse alimentari
            naturali sono esaurite.{"\n"}
            Quando i puma si accoppiano, spesso è la femmina a essere
            l'aggressiva. La maggior parte delle cucciolate nasce in primavera e
            consiste in soli due cuccioli.{"\n"}
            Sebbene la madre puma sia molto affettuosa e dedita ai suoi
            cuccioli, i puma non hanno molti legami con loro.{"\n"}I puma
            possono insegnarti la velocità, la grazia, la territorialità, la
            sensibilità, il mistero, la comunicazione senza parole,
            l'inseguimento e l'iniziativa.{"\n"}
          </Text>
        )}

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("@/assets/images/animaliLune/puma2.jpg")}
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
    height: 300,
    width: "100%",
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
