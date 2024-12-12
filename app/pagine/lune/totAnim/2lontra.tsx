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
        {language === "prt" && <Text style={styles.title}>Lontra</Text>}
        {language === "eng" && <Text style={styles.title}>Otter</Text>}
        {language === "ita" && <Text style={styles.title}>Lontra</Text>}

        <View style={styles.imageView}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/lonta.jpg")}
        /></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            A lontra é o totem animal associado com a lua de repouso e limpeza.
            {"\n"}A lontra é um dos animais mais brincalhões da natureza. As
            lontras existem nos rios e no mar dos Estados Unidos.{"\n"} As
            lontras são membros da família da doninha que dependem da água para
            sua existência. As lontras do rio são encontradas na maioria dos
            grandes lagos, pântanos e rios do oeste dos Estados Unidos.{"\n"} As
            lontras marinhas são maiores que as dos rios. Eles agora são
            encontrados apenas na costa norte da Califórnia.{"\n"} A lontra do
            mar quase se extinguiu no início deste século porque os caçadores
            massacraram a maioria deles por sus peles.{"\n"} A lontra do mar
            passa a maior parte do tempo comendo, dormindo, tomando sol,
            brincando, dando à luz e criando seus filhotes.{"\n"} Todas as
            lontras têm grande apetite. Um dos poucos animais que pode utilizar
            ferramentas, eles usam pedras para abrir seus jantares de frutos do
            mar. As lontras têm um amplo alcance vocal que consiste em chips,
            guinchos, soluços, risos e assobios quando estão com raiva.{"\n"}{" "}
            Algumas de suas ligações levam até uma milha. Quando as lontras não
            estão comendo, caçando ou tomando sol, elas geralmente brincam. As
            lontras têm uma vida doméstica calorosa e ativa.{"\n"} Ambos os pais
            ajudam a criar os filhotes que permanecem com eles por mais tempo
            que os filhotes da maioria dos animais selvagens.{"\n"} As lontras
            são companheiros ardentes umas das outras. Um companheiro lamentará
            a morte de seu companheiro.{"\n"} Por causa da vida doméstica
            exemplar das lontras, da nobreza, da curiosidade, da inventividade e
            da diversão, os nativos reconheceram o poder da lontra.{"\n"} Alguns
            dos sacos de remédios mais poderosos de certas tribos eram feitos de
            pele de lontra.{"\n"} O remédio da lontra é tão forte para algumas
            tribos que é secreto até você alcançar certo grau de iniciação.
            Trabalhar com a lontra pode ensiná-lo sobre brincadeira, carinho,
            originalidade, inventividade, nobreza, curiosidade, humanitarismo,
            companheirismo e educação infantil.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The otter is the animal totem associated with the moon of rest and
            cleaning.{"\n"}
            The otter is one of the most playful animals in nature. Otters exist
            in rivers and the sea in the United States.{"\n"} Otters are members
            of the weasel family that depend on water for their existence. River
            otters are found in most large lakes, swamps, and rivers in the
            western United States.{"\n"}
            Sea otters are larger than river otters. They are now found only on
            the northern coast of California.{"\n"} The sea otter nearly became
            extinct early in this century because hunters massacred most of them
            for their pelts.{"\n"} The sea otter spends most of its time eating,
            sleeping, sunbathing, playing, giving birth, and raising its young.
            {"\n"} All otters have a large appetite. One of the few animals that
            can use tools, they use rocks to open their seafood dinners. Otters
            have a wide vocal range consisting of chirps, squeaks, sobs, laughs,
            and whistles when they are angry.{"\n"} Some of their calls can be
            heard up to a mile away. When otters are not eating, hunting, or
            sunbathing, they are usually playing. Otters have a warm and active
            domestic life.{"\n"} Both parents help raise the young, who stay
            with them longer than the offspring of most wild animals.{"\n"}
            Otters are ardent companions to one another. A companion will mourn
            the death of its mate.{"\n"} Because of otters' exemplary domestic
            life, nobility, curiosity, inventiveness, and playfulness, natives
            recognized the otter's power.{"\n"} Some of the most powerful
            medicine bags of certain tribes were made from otter pelts.{"\n"}{" "}
            Otter medicine is so strong for some tribes that it is kept secret
            until you reach a certain degree of initiation. Working with the
            otter can teach you about playfulness, affection, originality,
            inventiveness, nobility, curiosity, humanitarianism, companionship,
            and child-rearing.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            La lontra è il totem animale associato alla luna del riposo e della
            purificazione.{"\n"}
            La lontra è uno degli animali più giocherelloni della natura. Le
            lontre vivono nei fiumi e nel mare degli Stati Uniti.{"\n"} Le
            lontre sono membri della famiglia delle donnole e dipendono
            dall'acqua per la loro esistenza. Le lontre di fiume si trovano
            nella maggior parte dei grandi laghi, paludi e fiumi dell'ovest
            degli Stati Uniti.{"\n"} Le lontre marine sono più grandi di quelle
            di fiume. Ora si trovano solo sulla costa settentrionale della
            California.{"\n"} La lontra marina rischiò quasi l'estinzione
            all'inizio di questo secolo perché i cacciatori ne massacrarono la
            maggior parte per le loro pellicce.{"\n"} La lontra marina trascorre
            la maggior parte del tempo mangiando, dormendo, prendendo il sole,
            giocando, dando alla luce e allevando i suoi piccoli.{"\n"} Tutte le
            lontre hanno un grande appetito. Uno dei pochi animali capaci di
            utilizzare strumenti, usano le pietre per aprire i loro pasti a base
            di frutti di mare. Le lontre hanno una vasta gamma vocale che
            comprende cinguettii, squittii, singhiozzi, risate e fischi quando
            sono arrabbiate.{"\n"} Alcuni dei loro richiami si sentono fino a un
            miglio di distanza. Quando le lontre non stanno mangiando, cacciando
            o prendendo il sole, di solito stanno giocando. Le lontre hanno una
            vita domestica calorosa e attiva.{"\n"} Entrambi i genitori aiutano
            ad allevare i piccoli, che rimangono con loro più a lungo rispetto
            ai cuccioli della maggior parte degli animali selvatici.{"\n"} Le
            lontre sono compagne ardenti l'una per l'altra. Un compagno piangerà
            la morte del proprio partner.{"\n"} Grazie alla vita domestica
            esemplare delle lontre, alla loro nobiltà, curiosità, inventiva e
            gioia, i nativi riconobbero il potere della lontra.{"\n"} Alcune
            delle borse di medicina più potenti di alcune tribù erano fatte di
            pelliccia di lontra.{"\n"}
            La medicina della lontra è così forte per alcune tribù che rimane
            segreta fino a quando non si raggiunge un certo grado di
            iniziazione. Lavorare con la lontra può insegnarti la gioia,
            l'affetto, l'originalità, l'inventiva, la nobiltà, la curiosità,
            l'umanitarismo, la compagnia e l'educazione dei figli.
          </Text>
        )}

<View style={[styles.imageView, {width: 330}]}><Image
          style={styles.image}
          source={require("@/assets/images/animaliLune/lontra.jpg")}
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
  },
  imageView: {
    flex: 1,
    height: 350,
    width: 260,
    margin: 'auto',
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: 'black'
  },

  image: {
    resizeMode: 'contain'
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
