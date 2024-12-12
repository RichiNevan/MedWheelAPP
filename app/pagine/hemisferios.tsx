import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useSettings } from "../SettingsContext";
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
      headerBackTitle:
        language === "prt"
          ? "Voltar"
          : language === "ita"
          ? "Indietro"
          : "Back",
    });
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("@/assets/images/background.jpg")}
    >
      <ScrollView style={styles.scrollView}>
        {language === "prt" && <Text style={styles.title}>Os Hemisferios</Text>}
        {language === "eng" && (
          <Text style={styles.title}>The Hemispheres</Text>
        )}
        {language === "ita" && <Text style={styles.title}>Gli Emisferi</Text>}

        {language === "prt" && (
          <>
            <Text style={styles.testo}>
              Estudando os passos da dança, na Roda Medicinal fui vendo que me
              movia muito de acordo com o mundo observado pelo Hemisfério Norte
              e a partir de 2.003 comecei a praticar a dança de acordo com o que
              vivemos aqui no Hemisfério Sul, e pude compreender que viver de
              acordo com as estações é uma das maiores chaves para andar em
              equilíbrio na Mãe-Terra.{"\n"}Estou aprendendo a harmonizar os
              corpos: mental, espiritual, emocional e físico remando de acordo
              com a maré.{"\n"}
              Aprendemos que o Sol nasce no Leste quando aparece no horizonte
              pela manhã e que o Sol se põe no Oeste quando descansa no
              horizonte a tarde.{"\n"} Segundo o pensamento ancestral um novo
              Sol nasce todos os dias e depois, a tardinha se coloca abaixo do
              horizonte para morrer.{"\n"}
              {"\n"}
              Tomando o Sol como referência: Os mapas de antigamente apontavam
              para o Oriente, onde nasce o Sol.{"\n"} À noite os povos do
              Hemisfério Norte da Terra usavam como referência, a estrela
              Polaris, que sempre está no mesmo lugar.{"\n"} Vendo Polaris,
              estará de frente o Norte, atrás terá o Sul, o Leste à direita e o
              Oeste à esquerda.{"\n"} Nós aqui no Hemisfério Sul, não vemos a
              estrela polar, mas sim a Constelação do Cruzeiro do Sul, cuja
              ponta está direcionada para o Polo Sul, enquanto Polaris aponta
              para o Polo Norte.
            </Text>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/cruzeiro.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              As estações do ano são diferentes em cada lugar. No Sul e Sudeste
              do Brasil é mais fácil perceber as quatro estações. Já nos estados
              do norte do Brasil é mais fácil dividir o ano em duas estações,
              verão e inverno ou chuvas e seca. No norte e nordeste as
              temperaturas não são baixas no inverno, é marcado mais pelas
              chuvas.{"\n"} No outono época das árvores deixarem cair suas
              folhas, muitas arvores florescem. Nas regiões tropicais e
              equatoriais, onde a maior parte do Brasil se insere, as estações
              não são tão definidas pela neve no inverno, por exemplo: Quando
              consideramos a Dança das Estações no Planeta, enquanto estamos no
              inverno no hemisfério Norte, é Verão no Sul. As estações são
              opostas. {"\n"}Estudamos o mapa-múndi com o hemisfério Norte
              ocupando dois terços do planeta e a Europa no Centro.{"\n"} O
              professor Rafael Sanzio graduado em geografia pela Universidade
              Federal de Brasília (UnB), traz uma nova interpretação com blocos
              continentais com as proporções reais, através de imagens de
              satélite mostrando o globo invertido. (de cabeça para baixo) e
              outro com o Brasil situado em posição central no planeta.{"\n"} O
              físico Marcomede Rangel, do Observatório Nacional elaborou um mapa
              que mostra a paisagem celeste vista pelo hemisfério Sul, com o
              observador invertido.{"\n"} “As pessoas ficavam frustradas por não
              encontrar no céu o que estava no desenho”, diz Marcomede.{"\n"} No
              hemisfério norte a constelação de Touro é vista como um V, mas no
              hemisfério Sul é um A. A Constelação de Escorpião no Norte é um
              gancho e no Sul um ponto de interrogação ao contrário.{"\n"} Nos
              EUA, o Polo Norte está acima, eles se vêm acima da linha do
              Equador e nós estamos abaixo. Aqui para nós, eles estão abaixo da
              linha do Equador, pois acima de nós está o Polo Sul.{"\n"} O
              administrador Stephen Kanitz propõe: Vamos começar uma vida nova,
              de início virando esses nossos mapas para cima, para o Cruzeiro do
              Sul.{"\n"}
              Vamos criar nossos referenciais, nossos pontos de apoio, nossas
              formas de ver o mundo. Essa é a única forma de criar uma nação.
              {"\n"}
              Vamos finalmente descobrir o Brasil, mas, desta vez, com nossos
              próprios olhos. Observando o que acontece no Brasil, com nossos
              próprios olhos, nosso mapa estará para cima, para o Cruzeiro do
              Sul, com o Norte para baixo. {"\n"}Mas lembrando de que o conceito
              de embaixo e em cima depende de uma referência, pois numa roda não
              há começo nem fim, nem embaixo e nem em cima.{"\n"} Observando do
              Equador, podemos dizer que Hemisfério Norte fica ao Norte do
              Equador e o Hemisfério Sul fica ao Sul do Equador. Os passos da
              dança são bem simples. São 36 posições de relacionamentos
              corretos, respeito humano, a todos os seres; a Todas As Nossas
              Relações – minerais, plantas, animais, espíritos que vivem na Mãe
              Terra.{"\n"} Cada posição da Roda afetará diretamente a você em
              algum ponto de sua vida Para iniciar e compreender essa visão de
              realidade deverá deixar de lado ideias pré-concebidas,
              preconceitos, para deixar sua imaginação superar o físico e o
              intelectual.{"\n"} Permitir enxergar além das aparências para que
              o corpo chame novas aberturas e se conectar com intensas energias
              da Terra e de cura.{"\n"} O estudo da Roda Medicinal resgata a
              conexão com todos os aspectos da vida, valores, virtudes, ajudando
              a entender traços do passado que influenciam no presente e no
              futuro.{"\n"}
              Segundo Lucy Harmer em seu Livro Shamanic Astrology: “Uma
              diferença básica separa os sistemas xamânicos e ocidentais da
              astrologia, claramente explicado por Kenneth Meadows.{"\n"} Ele
              descreve astrologia ocidental como um cinturão imaginário ou
              constelação fixa em torno da Terra, enquanto a astrologia xamânica
              é mais adaptada para o nosso ambiente particular do que a
              astrologia ocidental.{"\n"} Como a astrologia xamânica se baseia
              no ciclo natural das estações do ano e do sol, os sinais
              astrológicos mudam de um hemisfério para outro.{"\n"} Os animais
              espírito e as suas propriedades diferem no hemisfério norte do
              hemisfério sul.{"\n"} Por exemplo, o solstício de verão no
              Hemisfério Norte corresponde a junho 21/22. O pica-pau é o animal
              associado a este período, quando os dias são longos e quente e o
              sol está em seu apogeu. {"\n"}No entanto, no Hemisfério Sul, o
              solstício de verão corresponde a dezembro 21/22, portanto, o
              período do pica-pau neste hemisfério é de 22 de dezembros – 19 de
              janeiro.{"\n"} Na Roda Medicinal para o Hemisfério Sul as datas
              para cada signo são o oposto daquelas para o Hemisfério Norte.
              {"\n"} Todas as direções são invertidas, incluindo as do Oeste
              (referem-se à roda da medicina para o hemisfério norte e da roda
              da medicina para o Hemisfério Sul).{"\n"} Na roda xamânica, a alma
              entra no corpo físico antes do nascimento, trazendo todas as
              qualidades, pontos fortes e potenciais e lições de vida
              necessárias, que precisamos aprender para a nossa evolução. O
              momento do nosso nascimento marca a nossa entrada na Roda da
              Medicina, o Círculo da Vida, acompanhado pelo nosso espírito
              animal.{"\n"} Naquele momento, nosso potencial é completo, nós
              temos tudo que precisamos espiritualmente para seguir o nosso
              caminho de vida.{"\n"} A meditação/visualização é o veiculo.{"\n"}{" "}
              O tambor, os sons; a respiração, os movimentos; as vivências são o
              combustível. O Mistério é o condutor. {"\n"}Juntos proporcionam
              possibilidades para ver, sentir, perceber, compreender a si
              próprio e sua vida e conectar a Sagrada Energia Pessoal com a
              Sagrada Energia do Universo.{"\n"} Aprendendo mais sobre as
              estações; hora do dia, hora da vida; as luas, sobres os 3 reinos,
              sobre os espíritos guardiões que são evocados, caminhamos em
              direção ao Espaço Sagrado do Grande Espírito.{"\n"} Assim sendo, o
              Centro de Estudos de Xamanismo Voo da Águia, propõe o estudo com
              referência daquilo que acontece em nosso Hemisfério Sul e no
              Hemisfério Norte dentro das suas realidades ecológicas e seus
              pontos de visão.{"\n"}
              {"\n"} Por Todas as Nossas Relações!
            </Text>
          </>
        )}
        {language === "eng" && (
          <>
            <Text style={styles.testo}>
              Studying the dance steps, in the Medicine Wheel I saw that I moved
              very much in accordance with the world as observed in the Northern
              Hemisphere, and starting in 2003, I began to practice the dance
              according to what we experience here in the Southern Hemisphere. I
              was able to understand that living in accordance with the seasons
              is one of the greatest keys to walking in balance on Mother Earth.
              {"\n"} I am learning to harmonize the bodies: mental, spiritual,
              emotional, and physical, rowing with the tide.{"\n"} We learned
              that the Sun rises in the East when it appears on the horizon in
              the morning, and that the Sun sets in the West when it rests on
              the horizon in the evening.{"\n"} According to ancestral thinking,
              a new Sun is born every day and later, in the evening, it sets
              below the horizon to die.{"\n"}
              {"\n"} Taking the Sun as a reference: Old maps pointed to the
              East, where the Sun rises.{"\n"} At night, the peoples of the
              Northern Hemisphere of the Earth used the Polaris star as a
              reference, which is always in the same place.{"\n"} Facing
              Polaris, you are looking North; behind you will be South, East
              will be to your right, and West to your left.{"\n"} Here in the
              Southern Hemisphere, we do not see the Polaris star but rather the
              Southern Cross constellation, whose tip points to the South Pole,
              while Polaris points to the North Pole.
            </Text>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/cruzeiro.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              The seasons of the year are different in each place. In the South
              and Southeast of Brazil, it is easier to notice the four seasons.
              However, in the northern states of Brazil, it is easier to divide
              the year into two seasons: summer and winter, or wet and dry. In
              the North and Northeast, temperatures are not low in the winter;
              it is more marked by the rains.{"\n"} In the autumn, when trees
              are supposed to shed their leaves, many trees bloom. In tropical
              and equatorial regions, where most of Brazil is located, the
              seasons are not so defined by snow in the winter, for example:
              {"\n"} When we consider the Dance of the Seasons on the Planet,
              while it is winter in the Northern Hemisphere, it is summer in the
              South. The seasons are opposite.{"\n"} We studied the world map
              with the Northern Hemisphere occupying two-thirds of the planet
              and Europe at its center.{"\n"} Professor Rafael Sanzio, a
              geography graduate from the University of Brasília (UnB), brings a
              new interpretation with continental blocks showing real
              proportions through satellite images, displaying the globe
              inverted (upside down) and another with Brazil situated in a
              central position on the planet.{"\n"} Physicist Marcomede Rangel,
              from the National Observatory, created a map that shows the
              celestial landscape as seen from the Southern Hemisphere, with the
              observer inverted.{"\n"} "People were frustrated because they
              could not find in the sky what was on the drawing," says
              Marcomede.{"\n"} In the Northern Hemisphere, the constellation
              Taurus is seen as a V, but in the Southern Hemisphere, it is an A.
              The Scorpio constellation is a hook in the North and an
              upside-down question mark in the South.{"\n"} In the USA, the
              North Pole is above; they see themselves above the Equator, and we
              are below. Here for us, they are below the Equator line because
              above us is the South Pole.{"\n"} Administrator Stephen Kanitz
              proposes: Let us start a new life by flipping these maps of ours
              to the top, toward the Southern Cross.{"\n"} Let us create our
              references, our points of support, our ways of seeing the world.
              That is the only way to create a nation.{"\n"} Let us finally
              discover Brazil, but this time with our own eyes. Observing what
              happens in Brazil, with our own eyes, our map will point upward,
              toward the Southern Cross, with the North at the bottom.{"\n"} But
              remembering that the concept of above and below depends on a
              reference, because in a wheel there is no beginning or end, no
              above or below.{"\n"} Observing from the Equator, we can say that
              the Northern Hemisphere is north of the Equator, and the Southern
              Hemisphere is south of the Equator. The dance steps are quite
              simple. There are 36 positions of proper relationships, human
              respect for all beings; for All Our Relations – minerals, plants,
              animals, spirits that live on Mother Earth.{"\n"} Each position of
              the Wheel will directly affect you at some point in your life. To
              begin and understand this vision of reality, you must set aside
              preconceived ideas and prejudices to allow your imagination to
              transcend the physical and intellectual.{"\n"} Allow yourself to
              see beyond appearances so that the body calls for new openings and
              connects with intense Earth and healing energies.{"\n"} The study
              of the Medicine Wheel restores connection with all aspects of
              life, values, and virtues, helping to understand traits of the
              past that influence the present and future.{"\n"} According to
              Lucy Harmer in her book Shamanic Astrology: “A basic difference
              separates shamanic and Western systems of astrology, as clearly
              explained by Kenneth Meadows.{"\n"} He describes Western astrology
              as an imaginary belt or fixed constellation around the Earth,
              whereas shamanic astrology is more adapted to our particular
              environment than Western astrology.{"\n"} Since shamanic astrology
              is based on the natural cycle of the seasons and the sun, the
              astrological signs change from one hemisphere to another.{"\n"}{" "}
              Spirit animals and their properties differ between the Northern
              and Southern Hemispheres.{"\n"} For example, the summer solstice
              in the Northern Hemisphere corresponds to June 21/22. The
              woodpecker is the animal associated with this period, when days
              are long and hot and the sun is at its peak.{"\n"} However, in the
              Southern Hemisphere, the summer solstice corresponds to December
              21/22, so the woodpecker period in this hemisphere is from
              December 22 – January 19.{"\n"} In the Medicine Wheel for the
              Southern Hemisphere, the dates for each sign are the opposite of
              those for the Northern Hemisphere.{"\n"} All directions are
              inverted, including those of the West (referencing the Medicine
              Wheel for the Northern Hemisphere and the Medicine Wheel for the
              Southern Hemisphere).{"\n"} In the shamanic wheel, the soul enters
              the physical body before birth, bringing all the qualities,
              strengths, potentials, and life lessons necessary for our
              evolution.
              {"\n"} The moment of our birth marks our entry into the Medicine
              Wheel, the Circle of Life, accompanied by our spirit animal.{"\n"}{" "}
              At that moment, our potential is complete; we have everything we
              need spiritually to follow our life path.{"\n"}{" "}
              Meditation/visualization is the vehicle.{"\n"} The drum, the
              sounds; the breathing, the movements; the experiences are the
              fuel. The Mystery is the driver.{"\n"} Together, they provide
              possibilities to see, feel, perceive, and understand yourself and
              your life, connecting Sacred Personal Energy with the Sacred
              Energy of the Universe.{"\n"} Learning more about the seasons;
              time of day, time of life; the moons, the three kingdoms, the
              guardian spirits that are invoked, we move toward the Sacred Space
              of the Great Spirit.
              {"\n"} Thus, the Eagle Flight Shamanism Study Center proposes the
              study with reference to what happens in our Southern Hemisphere
              and in the Northern Hemisphere within their ecological realities
              and their points of view. {"\n"}
              {"\n"}For All Our Relations!
            </Text>
          </>
        )}
        {language === "ita" && (
          <>
            <Text style={styles.testo}>
              Studiando i passi della danza, nella Ruota Medicinale, ho visto
              che mi muovevo molto in accordo con il mondo osservato
              dall'Emisfero Nord e, a partire dal 2003, ho cominciato a
              praticare la danza secondo ciò che viviamo qui nell'Emisfero Sud.
              Ho potuto comprendere che vivere in accordo con le stagioni è una
              delle chiavi più importanti per camminare in equilibrio sulla
              Madre Terra.{"\n"} Sto imparando a armonizzare i corpi: mentale,
              spirituale, emotivo e fisico, remando secondo la marea.{"\n"}{" "}
              Abbiamo imparato che il Sole sorge ad est quando appare
              all'orizzonte al mattino e che il Sole tramonta ad ovest quando
              riposa all'orizzonte nel pomeriggio.{"\n"} Secondo il pensiero
              ancestrale, ogni giorno nasce un nuovo Sole e poi, nel tardo
              pomeriggio, si posiziona sotto l'orizzonte per morire.{"\n"}
              {"\n"} Prendendo il Sole come riferimento: le mappe di un tempo
              indicavano l'Oriente, dove nasce il Sole.{"\n"} Di notte, i popoli
              dell'Emisfero Nord della Terra usavano come riferimento la stella
              Polare, che è sempre nello stesso posto.{"\n"} Guardando Polare,
              si trova di fronte il Nord, dietro c'è il Sud, l'Est a destra e
              l'Ovest a sinistra.{"\n"} Noi qui nell'Emisfero Sud non vediamo la
              stella polare, ma la Costellazione del Cruzeiro do Sul, la cui
              punta è diretta verso il Polo Sud, mentre Polaris punta verso il
              Polo Nord.
            </Text>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/cruzeiro.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              Le stagioni dell'anno sono diverse in ogni luogo. Nel Sud e
              Sud-est del Brasile è più facile percepire le quattro stagioni.
              Nei stati del nord del Brasile è più facile dividere l'anno in due
              stagioni: estate e inverno o piogge e siccità. Nel nord e nord-est
              le temperature non sono basse in inverno, è più marcato dalle
              piogge.{"\n"} In autunno, periodo in cui gli alberi lasciano
              cadere le loro foglie, molti alberi fioriscono. Nelle regioni
              tropicali ed equatoriali, dove si trova la maggior parte del
              Brasile, le stagioni non sono così definite dalla neve in inverno,
              ad esempio: quando consideriamo la Danza delle Stagioni sul
              Pianeta, mentre siamo in inverno nell'emisfero Nord, è estate
              nell'emisfero Sud. Le stagioni sono opposte. {"\n"} Studiamo la
              mappa del mondo con l'emisfero Nord che occupa due terzi del
              pianeta e l'Europa al centro.{"\n"} Il professore Rafael Sanzio,
              laureato in geografia presso l'Università Federale di Brasília
              (UnB), propone una nuova interpretazione con i blocchi
              continentali nelle proporzioni reali, attraverso immagini
              satellitari che mostrano il globo capovolto (a testa in giù) e un
              altro con il Brasile situato in posizione centrale nel pianeta.
              {"\n"} Il fisico Marcomede Rangel, dell'Osservatorio Nazionale, ha
              elaborato una mappa che mostra il paesaggio celeste visto
              dall'emisfero Sud, con l'osservatore capovolto.{"\n"} "Le persone
              si sentivano frustrate per non trovare nel cielo ciò che era
              disegnato," dice Marcomede.{"\n"} Nell'emisfero nord la
              costellazione del Toro è vista come una V, ma nell'emisfero Sud è
              una A. La Costellazione dello Scorpione nel Nord è un uncino e nel
              Sud un punto interrogativo al contrario.{"\n"} Negli Stati Uniti,
              il Polo Nord è in alto, si vedono sopra la linea dell'Equatore e
              noi siamo sotto. Qui per noi, loro sono sotto la linea
              dell'Equatore, poiché sopra di noi c'è il Polo Sud.{"\n"}{" "}
              L'amministratore Stephen Kanitz propone: Iniziamo una vita nuova,
              mettendo questi nostri mappe in alto, verso il Cruzeiro do Sul.
              {"\n"} Creiamo i nostri riferimenti, i nostri punti di sostegno, i
              nostri modi di vedere il mondo. Questa è l'unica forma di creare
              una nazione.{"\n"} Scopriremo finalmente il Brasile, ma, questa
              volta, con i nostri propri occhi. Osservando ciò che accade in
              Brasile, con i nostri occhi, la nostra mappa sarà in alto, verso
              il Cruzeiro do Sul, con il Nord in basso.{"\n"} Ma ricordiamo che
              il concetto di sopra e sotto dipende da un riferimento, poiché in
              una ruota non c'è né inizio né fine, né sopra né sotto.{"\n"}{" "}
              Osservando dall'Equatore, possiamo dire che l'Emisfero Nord è a
              Nord dell'Equatore e l'Emisfero Sud è a Sud dell'Equatore. I passi
              della danza sono molto semplici. Sono 36 posizioni di relazioni
              corrette, rispetto umano, a tutti gli esseri; a tutte le nostre
              relazioni - minerali, piante, animali, spiriti che vivono nella
              Madre Terra.
              {"\n"} Ogni posizione della Ruota influenzerà direttamente te in
              qualche punto della tua vita. Per iniziare e comprendere questa
              visione della realtà, dovrai lasciar da parte idee preconcette,
              pregiudizi, per permettere alla tua immaginazione di superare il
              fisico e l'intellettuale.{"\n"} Permettere di vedere oltre le
              apparenze affinché il corpo chiami nuove aperture e si connetta
              con intense energie della Terra e di guarigione.{"\n"} Lo studio
              della Roda Medicinal recupera la connessione con tutti gli aspetti
              della vita, valori, virtù, aiutando a capire i tratti del passato
              che influenzano il presente e il futuro.{"\n"} Secondo Lucy Harmer
              nel suo libro "Shamanic Astrology": "Una differenza fondamentale
              separa i sistemi astrologici sciamanici e occidentali, chiaramente
              spiegata da Kenneth Meadows.{"\n"} Egli descrive l'astrologia
              occidentale come una cintura immaginaria o costellazione fissa
              attorno alla Terra, mentre l'astrologia sciamanica è più adattata
              al nostro ambiente particolare rispetto all'astrologia
              occidentale.{"\n"} Poiché l'astrologia sciamanica si basa sul
              ciclo naturale delle stagioni dell'anno e del sole, i segni
              astrologici cambiano da un emisfero all'altro.{"\n"} Gli animali
              spirito e le loro proprietà differiscono nell'emisfero nord e
              nell'emisfero sud.{"\n"} Per esempio, il solstizio d'estate
              nell'emisfero Nord corrisponde al 21/22 giugno. Il picchio è
              l'animale associato a questo periodo, quando i giorni sono lunghi
              e caldi e il sole è al suo apice.{"\n"} Tuttavia, nell'emisfero
              Sud, il solstizio d'estate corrisponde al 21/22 dicembre, quindi
              il periodo del picchio in questo emisfero è dal 22 dicembre al 19
              gennaio.{"\n"} Nella Roda Medicinal per l'Emisfero Sud le date per
              ogni segno sono l'opposto di quelle per l'Emisfero Nord.{"\n"}{" "}
              Tutte le direzioni sono invertite, comprese quelle dell'Ovest (si
              riferiscono alla ruota della medicina per l'emisfero nord e alla
              ruota della medicina per l'Emisfero Sud).
              {"\n"} Nella ruota sciamanica, l'anima entra nel corpo fisico
              prima della nascita, portando tutte le qualità, i punti di forza,
              i potenziali e le lezioni di vita necessarie che dobbiamo imparare
              per la nostra evoluzione. Il momento della nostra nascita segna il
              nostro ingresso nella Ruota della Medicina, il Cerchio della Vita,
              accompagnato dal nostro spirito animale.{"\n"} In quel momento, il
              nostro potenziale è completo, abbiamo tutto ciò che ci serve
              spiritualmente per seguire il nostro cammino di vita.{"\n"} La
              meditazione/visualizzazione è il veicolo.{"\n"} Il tamburo, i
              suoni; il respiro, i movimenti; le esperienze sono il carburante.
              Il Mistero è il conduttore.{"\n"} Insieme offrono possibilità di
              vedere, sentire, percepire, comprendere se stessi e la propria
              vita e connettere l'Energia Sacra Personale con l'Energia Sacra
              dell'Universo.{"\n"} Imparando di più sulle stagioni; l'ora del
              giorno, l'ora della vita; le lune, sui 3 regni, sugli spiriti
              guardiani che vengono evocati, camminiamo verso lo Spazio Sacro
              del Grande Spirito.{"\n"} Così, il Centro di Studi di Sciamanismo
              Voo da Águia propone lo studio con riferimento a ciò che accade
              nel nostro Emisfero Sud e nell'Emisfero Nord, all'interno delle
              loro realtà ecologiche e dei loro punti di vista.{"\n"}
              {"\n"} Per tutte le nostre relazioni!
            </Text>
          </>
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
    fontSize: 17,
    lineHeight: 23,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginHorizontal: "auto",
  },
  imageView: {
    flex: 1,
    height: 240,
    width: 360,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "black",
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
