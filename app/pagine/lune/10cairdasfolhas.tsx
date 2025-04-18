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
          <Text style={styles.title}>Lua do Cair das Folhas</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Falling Leaves</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna del Cadere delle Foglie</Text>
        )}

        {/* <View style={styles.imageView}></View> */}

        {language === "prt" && (
          <Text style={styles.testo}>
            Segundo Sun Bear é a Lua do Voo dos Patos, Tempo das Folhas que
            caem. {"\n"}Para Kenneth Meadows e na Roda de Estudos Voo da Águia
            chamaremos de Lua do Cair das Folhas.{"\n"}
            {"\n"}A Lua do Vôo dos Patos é a primeira Lua de Mudjekeewis, o
            Espírito Guardião do Oeste, e acontece na época do Equinócio de
            Outono. {"\n"}A cor é o marrom e recebe influência do Clã das
            Borboletas.{"\n"}
            {"\n"}
            Da pedra Jaspe as pessoas podem aprender tanto como atrair as
            energias do Sol como da Terra, para seu ser e compreender as
            mensagens do coração. {"\n"}
            Do Verbasco elas podem aprender suas habilidades de aliviar e
            irritar. {"\n"}
            Do Corvo elas ganharão a compreensão de seus relacionamentos com
            grupos e a habilidade de voar alto e mergulhar. {"\n"}
            Esta é a posição na qual podemos aprender o que realmente é
            equilíbrio, mesmo que necessitemos sentir desconforto para saber
            isso. {"\n"}
            Quem vivencia esta lua pode ir rapidamente de uma ideia, conceito ou
            humor, para o seu oposto. {"\n"}
            Esta posição ensina a demonstrar afeição física e como sentir-se
            confortável tanto no Céu, como na Terra. {"\n"}
            As pessoas que vivenciam a energia do Corvo devem cuidar para não
            serem indecisas e excessivamente mutáveis, evitando a confusão. São
            influenciados pelo elemento ar. {"\n"}
            São bondosos e amorosos. São realmente preocupados com o bem estar
            dos outros. {"\n"}
            Quando estão neste estado tem a força de absorver e refletir luz a
            todos os que eles encontram.{"\n"}
            Quando estão fora de equilíbrio, tem a força de gerar profundezas de
            depressão ou confusão que podem causar a água a ferver em alta
            intensidade. {"\n"}
            Tem a tendência de ir de um estado para o outro num curto espaço de
            tempo, de acordo com o estado que lhes pareça melhor naquele momento
            particular.{"\n"}
            Quando se encontram nessas mudanças, acham-se confortáveis e não
            irão entender porque outras pessoas se parecem tão confusas com
            esses movimentos de vai e vem. {"\n"}
            No entanto, quando encontram com o seu ponto de equilíbrio que está
            dentro de si próprio tem poderes especiais para o bem dos que estão
            ao seu redor e comumente são curadores talentosos ou médiuns de boas
            energias do universo.{"\n"}
            Os nascidos nessa lua recebem a dádiva da achar seus próprios
            equilíbrio através da introspeção e da força. {"\n"}
            Se usar as dádivas da força e da introspeção para olharem a si
            próprios eles irão ao ponto de equilíbrio muito mais rapidamente e
            serão capazes de ajudar os outros. {"\n"}
            Uma meta que eles sempre carregam no coração. Podem ser um alívio
            para os ferimentos, qualquer que tenha sido a causa. Seu verdadeiro
            interesse irá dar o empurrão que você precisa para retornar na sua
            estrada.{"\n"}
            São propícios a terem problemas com sua vesícula e rins, tanto
            quanto problemas nervosos, quando perdem o sentido do seu
            equilíbrio. {"\n"}
            Ficam nervosos ou irritados, ou paranoicos, se não forem capazes de
            voltar ao equilíbrio. {"\n"}O estado de equilíbrio é crucial. {"\n"}
            São responsáveis. São inteligentes e capazes de aprender todos os
            pontos de vista ou de ideias que puderem enxergar.{"\n"}
            Eles são de natureza adaptável e são acostumados a viver num mundo
            de mudanças emocionantes. {"\n"}
            Mudanças no mundo psíquico não são capazes de abalá-los grandemente.
            {"\n"}
            Quando vão alcançar equilíbrio pessoal, tem habilidade de buscar
            coisas escondidas, são capazes de personificar paradoxos, de viver
            sem ser agredido por eles. {"\n"}
            São capazes de ensinar aos outros como combinar a energia da Terra e
            do Céu dentro deles, por isso, ajudam a trazer o equilíbrio entre os
            que estão com eles.{"\n"}
            {"\n"}A lua ensina sobre os paradoxos de sua própria vida de uma
            maneira mais direta e intensa que anteriormente, por experimentarem
            eles próprios, acharão que são mais capazes de resolver. {"\n"}
            Eles podem descobrir como podem ajudar a encontrar um equilíbrio
            entre eles e a natureza. {"\n"}
            Eles podem explorar seus sentimentos de participação e sendo leais a
            qualquer grupo que eles possam querer se envolver.
          </Text>
        )}
        {language === "eng" && <Text style={styles.testo}>According to Sun Bear, it is the Moon of Duck Flight, Time of Falling Leaves. {"\n"} For Kenneth Meadows and in the Eagle's Wheel of Studies, we will call it the Moon of the Falling Leaves.{"\n"}{"\n"}The Moon of Duck Flight is the first Moon of Mudjekeewis, the Spirit Guardian of the West, and it happens during the Autumn Equinox. {"\n"} Its color is brown and it is influenced by the Butterfly Clan.{"\n"}{"\n"} From the Jasper stone, people can learn how to attract the energies of the Sun and the Earth to their being and understand the messages of the heart. {"\n"} From the Mullein, they can learn its abilities to soothe and to irritate. {"\n"} From the Raven, they will gain an understanding of their relationships with groups and the ability to fly high and dive. {"\n"} This is the position where we can learn what true balance is, even if we need to feel discomfort to know this. {"\n"} Those who experience this moon can quickly shift from one idea, concept, or mood to its opposite. {"\n"} This position teaches how to show physical affection and how to feel comfortable both in the Sky and on the Earth. {"\n"} People experiencing the energy of the Raven should be careful not to be indecisive and excessively changeable, avoiding confusion. They are influenced by the air element. {"\n"} They are kind and loving. They are truly concerned about the well-being of others. {"\n"} When in this state, they have the strength to absorb and reflect light to all those they meet.{"\n"} When out of balance, they have the strength to generate depths of depression or confusion that can cause water to boil with high intensity. {"\n"} They tend to go from one state to another in a short amount of time, depending on the state that feels best to them at that particular moment.{"\n"} When they are in these shifts, they feel comfortable and will not understand why others seem so confused by these back-and-forth movements. {"\n"} However, when they find their point of balance within themselves, they have special powers for the good of those around them and are often talented healers or mediums of good energy from the universe.{"\n"} Those born under this moon are gifted with finding their own balance through introspection and strength. {"\n"} If they use the gifts of strength and introspection to look within themselves, they will reach their point of balance much more quickly and will be able to help others. {"\n"} A goal they always carry in their hearts. They can be a relief to wounds, whatever the cause may be. Their true interest will give you the push you need to get back on your path.{"\n"} They are prone to having problems with their gallbladder and kidneys, as well as nervous issues when they lose their sense of balance. {"\n"} They become nervous or irritated, or paranoid, if they are unable to return to balance. {"\n"} The state of balance is crucial. {"\n"} They are responsible. They are intelligent and capable of learning all the viewpoints or ideas they can see.{"\n"} They are adaptable by nature and are used to living in a world of exciting changes. {"\n"} Changes in the psychic world do not greatly unsettle them. {"\n"} When they reach personal balance, they have the ability to seek out hidden things, are capable of personifying paradoxes, and living without being harmed by them. {"\n"} They are able to teach others how to combine the energy of the Earth and the Sky within themselves, helping to bring balance to those around them.{"\n"}{"\n"} The moon teaches about the paradoxes of their own life in a more direct and intense way than before, and by experiencing them themselves, they will feel more capable of resolving them. {"\n"} They may discover how they can help find a balance between themselves and nature. {"\n"} They may explore their feelings of participation and loyalty to any group they may wish to become involved with.</Text>}
        {language === "ita" && <Text style={styles.testo}>Secondo Sun Bear, è la Luna del Volo dei Paperi, Tempo delle Foglie che Cadono. {"\n"} Per Kenneth Meadows e nella Ruota degli Studi del Volo dell'Aquila, la chiameremo la Luna della Caduta delle Foglie.{"\n"}{"\n"}La Luna del Volo dei Paperi è la prima Luna di Mudjekeewis, lo Spirito Guardiano dell'Ovest, e si verifica durante l'Equinozio d'Autunno. {"\n"} Il suo colore è il marrone e riceve l'influenza del Clan delle Farfalle.{"\n"}{"\n"} Dalla pietra Jaspe le persone possono imparare come attrarre le energie del Sole e della Terra verso il loro essere e comprendere i messaggi del cuore. {"\n"} Dal Verbasco, possono imparare le sue capacità di lenire e di irritare. {"\n"} Dal Corvo, guadagneranno la comprensione delle loro relazioni con i gruppi e la capacità di volare in alto e tuffarsi. {"\n"} Questa è la posizione in cui possiamo imparare cosa sia veramente l'equilibrio, anche se dobbiamo provare disagio per capirlo. {"\n"} Chi vive questa luna può passare rapidamente da un'idea, concetto o umore al suo opposto. {"\n"} Questa posizione insegna come mostrare affetto fisico e come sentirsi a proprio agio sia nel Cielo che sulla Terra. {"\n"} Le persone che vivono l'energia del Corvo devono fare attenzione a non essere indecise e eccessivamente mutevoli, evitando la confusione. Sono influenzati dall'elemento aria. {"\n"} Sono gentili e amorevoli. Sono davvero preoccupati per il benessere degli altri. {"\n"} Quando sono in questo stato, hanno la forza di assorbire e riflettere luce a tutti coloro che incontrano.{"\n"} Quando sono fuori equilibrio, hanno la forza di generare profondità di depressione o confusione che possono far bollire l'acqua con grande intensità. {"\n"} Tendono a passare da uno stato all'altro in un breve periodo di tempo, a seconda dello stato che sembra loro migliore in quel particolare momento.{"\n"} Quando si trovano in questi cambiamenti, si sentono a proprio agio e non capiranno perché le altre persone sembrano così confuse da questi movimenti avanti e indietro. {"\n"} Tuttavia, quando trovano il loro punto di equilibrio all'interno di sé stessi, hanno poteri speciali per il bene di coloro che li circondano e sono spesso guaritori talentuosi o medium delle buone energie dell'universo.{"\n"} I nati sotto questa luna sono dotati della capacità di trovare il proprio equilibrio attraverso l'introspezione e la forza. {"\n"} Se usano i doni della forza e dell'introspezione per guardare dentro di sé, raggiungeranno il loro punto di equilibrio molto più rapidamente e saranno in grado di aiutare gli altri. {"\n"} Un obiettivo che portano sempre nel cuore. Possono essere un sollievo per le ferite, qualunque sia la causa. Il loro vero interesse ti darà la spinta di cui hai bisogno per tornare sulla tua strada.{"\n"} Sono soggetti a problemi con la loro cistifellea e i reni, così come a problemi nervosi quando perdono il senso del loro equilibrio. {"\n"} Diventano nervosi o irritati, o paranoici, se non sono in grado di tornare all'equilibrio. {"\n"} Lo stato di equilibrio è cruciale. {"\n"} Sono responsabili. Sono intelligenti e capaci di imparare tutti i punti di vista o le idee che riescono a vedere.{"\n"} Sono di natura adattabile e sono abituati a vivere in un mondo di cambiamenti emozionanti. {"\n"} I cambiamenti nel mondo psichico non sono in grado di sconvolgerli notevolmente. {"\n"} Quando raggiungono l'equilibrio personale, hanno la capacità di cercare cose nascoste, sono in grado di personificare i paradossi e di vivere senza essere danneggiati da essi. {"\n"} Sono in grado di insegnare agli altri come combinare l'energia della Terra e del Cielo dentro di sé, aiutando a portare equilibrio a chi è con loro.{"\n"}{"\n"} La luna insegna i paradossi della loro stessa vita in modo più diretto e intenso di prima, e sperimentandoli personalmente, si sentiranno più capaci di risolverli. {"\n"} Possono scoprire come possono aiutare a trovare un equilibrio tra loro e la natura. {"\n"} Possono esplorare i loro sentimenti di partecipazione e lealtà a qualsiasi gruppo con cui desiderano entrare in contatto.</Text>}
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
