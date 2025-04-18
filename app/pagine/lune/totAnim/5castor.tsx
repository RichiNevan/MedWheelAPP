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
        {language === "prt" && <Text style={styles.title}>Castor</Text>}
        {language === "eng" && <Text style={styles.title}>Beaver</Text>}
        {language === "ita" && <Text style={styles.title}>Castoro</Text>}

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("@/assets/images/animaliLune/castor.jpg")}
          />
        </View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Castor é o totem animal associado com a Lua do Retorno dos Sapos.{" "}
            {"\n"}O castor é, além do homem, o único animal capaz de mudar
            drasticamente seu ambiente para prover sua própria paz, segurança e
            contentamento. {"\n"}O castor é o maior roedor nos estados unidos.
            Castores adultos pesam entre trinta e setenta libras. {"\n"}
            Os castores nunca param de crescer e podem crescer de três a quatro
            pés de comprimento.{"\n"}
            Castores não fazem muitos sons. Ocasionalmente eles latem, assobiam
            ou guincham, mas normalmente eles só fazem um miado suave na
            privacidade de sua loja. {"\n"}
            Eles batem na água com suas caudas para alertar sobre o perigo. Os
            castores acasalam por toda a vida. São pais afetuosos que mantêm
            seus filhos por dois anos ou até a próxima ninhada chegar. {"\n"}
            Os machos velhos que perdem suas companheiras às vezes ficam
            mal-humorados. O castor é um mamífero terrestre que passa muito
            tempo na água. {"\n"}
            Seu corpo é incrivelmente projetado para se adequar aos seus hábitos
            e habitat. Adaptável de castores os corpos poderiam tê-los tornado o
            animal dominante na Terra, exceto que os castores têm duas coisas
            que os homens desejavam: pele de castor (usada para fazer chapéus de
            cavalheiros) e uma glândula que secreta castoreum. {"\n"}
            Castoreum era considerada uma cura desde a época dos primórdios
            Gregos até o século 18.{"\n"}
            Os castores eram tão exigentes que a busca por eles provavelmente
            fez tanto para motivar a exploração das Américas quanto qualquer
            outra coisa. {"\n"}
            Como os seres humanos dividiam suas partes, os castores quase foram
            levados à extinção em 1800. Fiéis humanos descobriram que os
            castores ajudavam a manter o lençol freático e eram: “grande valor
            para a pesca, a vida selvagem, a vegetação e a estética, de modo que
            deixavam as espécies viverem”.{"\n"}
            As pessoas nativas também haviam valorizado peles e carne de castor
            e usado o casulo para curar, mas eles haviam caçado o castor com
            moderação e respeito. {"\n"}
            Quando os europeus chegaram, incentivaram os nativos a caçarem mais
            reaversores e ofereceram os bens comerciais mais valorizados em
            troca de peles de castor. {"\n"}
            Essas práticas ajudaram a corroer a tradicional cultura indígena em
            algumas áreas.{"\n"}
            Trabalhar com o castor pode ensiná-lo sobre estabilidade,
            equilíbrio, tradição, valor, adaptabilidade com o meio ambiente,
            cura, afeição, tenacidade, trabalho duro e autoconfiança.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            Beaver is the animal totem associated with the Moon of the Return of
            the Toads.{"\n"}
            The beaver is, besides humans, the only animal capable of
            drastically changing its environment to provide its own peace,
            safety, and contentment.{"\n"}
            The beaver is the largest rodent in the United States. Adult beavers
            weigh between thirty and seventy pounds.{"\n"}
            Beavers never stop growing and can grow three to four feet in
            length.{"\n"}
            Beavers do not make many sounds. Occasionally, they bark, whistle,
            or squeal, but usually, they just make a soft mewing in the privacy
            of their lodge.{"\n"}
            They slap the water with their tails to alert others of danger.
            Beavers mate for life. They are affectionate parents who keep their
            young for two years or until the next litter arrives.{"\n"}
            Older males who lose their mates sometimes become moody. The beaver
            is a land mammal that spends much of its time in the water.{"\n"}
            Its body is incredibly designed to fit its habits and habitat.
            Adaptable beavers’ bodies could have made them the dominant animal
            on Earth, except that beavers had two things that humans desired:
            beaver pelts (used to make gentlemen’s hats) and a gland that
            secretes castoreum.{"\n"}
            Castoreum was considered a cure from the time of the early Greeks
            until the 18th century.{"\n"}
            Beavers were so highly sought after that their pursuit likely did as
            much to motivate the exploration of the Americas as anything else.
            {"\n"}
            As humans divided their parts, beavers were almost driven to
            extinction in the 1800s. Faithful humans discovered that beavers
            helped maintain the water table and were: “of great value for
            fishing, wildlife, vegetation, and aesthetics, so they allowed the
            species to live.”{"\n"}
            Native people had also valued beaver pelts and meat and used the
            pelt for healing, but they had hunted beavers with moderation and
            respect.{"\n"}
            When the Europeans arrived, they encouraged the natives to hunt more
            beavers and offered the most valued trade goods in exchange for
            beaver pelts.{"\n"}
            These practices helped erode the traditional indigenous culture in
            some areas.{"\n"}
            Working with the beaver can teach you about stability, balance,
            tradition, value, adaptability to the environment, healing,
            affection, tenacity, hard work, and self-confidence.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il castoro è il totem animale associato alla Luna del Ritorno delle
            Rane.{"\n"}
            Il castoro è, oltre all'uomo, l'unico animale capace di cambiare
            drasticamente il suo ambiente per procurarsi pace, sicurezza e
            contentezza.{"\n"}
            Il castoro è il roditore più grande negli Stati Uniti. I castori
            adulti pesano tra i trenta e i settanta libbre.{"\n"}I castori non
            smettono mai di crescere e possono raggiungere i tre o quattro piedi
            di lunghezza.{"\n"}I castori non emettono molti suoni.
            Occasionalmente abbaiano, fischiano o stridono, ma di solito fanno
            solo un leggero miagolio nella privacy della loro tana.{"\n"}
            Battano l'acqua con le loro code per avvertire del pericolo. I
            castori si accoppiano per tutta la vita. Sono genitori affettuosi
            che tengono i loro piccoli per due anni o fino all'arrivo della
            nuova cucciolata.{"\n"}I maschi anziani che perdono le loro compagne
            a volte diventano di cattivo umore. Il castoro è un mammifero
            terrestre che passa molto tempo nell'acqua.{"\n"}
            Il suo corpo è incredibilmente progettato per adattarsi alle sue
            abitudini e al suo habitat. I castori adattabili avrebbero potuto
            renderli l'animale dominante sulla Terra, se non fosse che i castori
            avevano due cose che gli esseri umani desideravano: la pelliccia di
            castoro (usata per fare i cappelli da gentiluomo) e una ghiandola
            che secerne il castoreo.{"\n"}
            Il castoreo era considerato una cura fin dai tempi degli antichi
            Greci fino al XVIII secolo.{"\n"}I castori erano così ricercati che
            la loro caccia probabilmente ha fatto tanto per motivare
            l'esplorazione delle Americhe quanto qualsiasi altra cosa.{"\n"}
            Mentre gli esseri umani dividevano le loro parti, i castori furono
            quasi portati all'estinzione nel 1800. Gli esseri umani fedeli
            scoprirono che i castori aiutavano a mantenere il livello delle
            falde acquifere e furono: “di grande valore per la pesca, la fauna
            selvatica, la vegetazione e l'estetica, così permettevano alle
            specie di vivere.”{"\n"}
            Anche i popoli nativi avevano valorizzato la pelliccia e la carne di
            castoro e usato la pelle per curare, ma avevano cacciato i castori
            con moderazione e rispetto.{"\n"}
            Quando gli europei arrivarono, incoraggiarono i nativi a cacciare
            più castori e offrirono le merci commerciali più apprezzate in
            cambio delle pellicce di castoro.{"\n"}
            Queste pratiche aiutarono ad erodere la cultura tradizionale
            indigena in alcune aree.{"\n"}
            Lavorare con il castoro può insegnarti la stabilità, l'equilibrio,
            la tradizione, il valore, l'adattabilità all'ambiente, la
            guarigione, l'affetto, la tenacia, il duro lavoro e la fiducia in te
            stesso.
          </Text>
        )}

        <View style={[styles.imageView, { height: 215 }]}>
          <Image
            style={styles.image}
            source={require("@/assets/images/animaliLune/castor2.jpg")}
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
  },
  imageView: {
    flex: 1,
    height: 250,
    width: "90%",
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "black",
  },

  image: {
    resizeMode: "contain",
    bottom: 7,
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
