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
        {language === "prt" && (
          <Text style={styles.title}>O que è a Roda Medicinal?</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>What is the Medicine Wheel?</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Cos'è la Ruota di Medicina?</Text>
        )}

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("@/assets/images/altro/roda3.jpg")}
          />
        </View>

        {language === "prt" && (
          <>
            <Text style={styles.testo}>
              A Roda Medicinal é uma Jornada da Consciência, que pode nos
              conduzir com mais clareza dentro das energias criadoras da vida,
              que movimentam a nossa existência.{"\n"} Ela traz a compreensão
              dos relacionamentos, mostrando as conexões entre os acontecimentos
              importantes de nossa vida dos ciclos pessoais e espirituais para o
              nosso autoconhecimento e equilíbrio.{"\n"} A Roda que trabalhamos
              deriva de milhares de rodas medicinais existentes no mundo. Essas
              rodas serviam a múltiplas finalidades: laboratórios astronômicos,
              espaços de meditação, de cura, de rezas, centros cerimonias,
              pontos de fortalecimento de ligação entre o homem e a natureza e
              toda a Criação, como uma mandala de cura e proteção, pontos de
              transformações e início de mudanças na vida, expansão da
              consciência.{"\n"} Um sonho, acontecimentos, fases desafiantes da
              vida, podem dar pistas do lugar onde as pessoas se encontram na
              Roda e do caminho que deverá trilhar e das habilidades necessárias
              para serem adquiridas no presente. A Roda Medicinal simboliza
              todos os ciclos da vida, inícios e términos, germinações e
              colheitas, decomposição e renovação, nascimento e crescimento,
              crescimento e morte, morte e decomposição, decomposição e
              renovação, renovação e germinação, nascimento e fertilização,
              fertilização e crescimento, que constituem caminhos sagrados que
              nos levam a novos entendimentos do nosso padrão evolutivo e ainda
              resgata a memória da nossa ligação com todos os aspectos do
              universo, o respeito ancestral a todos os seres (mineral, vegetal,
              animal, espiritual) com todas as relações.{"\n"} E cada posição
              sua repercute em algum ponto da nossa existência.{"\n"} {"\n"} É
              uma adaptação das Rodas Medicinais dos nativos norte-americanos, a
              Roda da Vida do Xamanismo Celta, mas podemos enxergar nelas os
              trigramas chineses, Iching, as runas, cartas de tarot, o
              Calendário Sagrado das Estações, os Arcanjos, as emoções,
              alimentos, adaptadas dentro das realidades ecológicas dos
              respectivos Hemisférios – Norte e Sul, ou seja ela é um Mapa do
              Universo.{"\n"}
            </Text>

            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/roda.png")}
              />
            </View>

            <Text style={styles.testo}>
              {"\n"} As rodas, ou círculos, representam a totalidade.{"\n"} Na
              aurora da humanidade o homem primitivo tinha que aprender a
              sobreviver num ambiente hostil. Ele tinha um pensamento circular.
              Aprenderam a sentar em roda, as casas eram circulares, até o
              descobrimento da roda, considerada a maior de todas as invenções.
              {"\n"} Na Índia é um instrumento para conduzir ao Eu Profundo, e é
              chamada de mandala. {"\n"}Segundo Jung, a mandala se encontra na
              própria alma humana, aparecendo nos sonhos e em diversas imagens
              criadas pelo nosso inconsciente.
              {"\n"} O círculo é o símbolo do Sol, do Céu e da Eternidade.{"\n"}
              O princípio masculino e feminino na China (Yin-Yang) é simbolizado
              por um círculo dividido, em branco representando o Céu, e o preto
              a Terra.{"\n"}
            </Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/yinyang.png")}
              />
            </View>
            <Text style={styles.testo}>
              {" "}
              {"\n"}
              No simbolismo ancestral o círculo é o símbolo do espaço infinito,
              sem começo e sem fim, e quando dividido por uma linha horizontal
              ele indicava a divisão do espaço infinito na ordem para prover a
              vida no tempo, no aqui e agora. Dividido por uma vertical,
              representa também a força receptiva, o princípio feminino, sem
              largura ou profundidade. {"\n"} Tudo é nascido da mulher e o poder
              ativo e força conceitual, o princípio masculino. {"\n"} A fusão
              das duas linha no círculo formam um terceiro que é uma cruz
              circundada. Tempo e espaço. A cruz quando contida dentro de um
              círculo é um símbolo do ilimitado e mudando a realidade das
              coisas, perpetuando o espírito. {"\n"} Pode representar também as
              quatro   expressões do poder cósmico fluindo para sua fonte, ou
              quatro elementos, quatro corpos, e muito mais.{"\n"}
              Os círculos aparecem no zodíaco, calendários, talismãs, pontos,
              templos, altares, etc. {"\n"} No silêncio do vazio existe
              movimento. A origem. O começo é também o fim. {"\n"} De tudo flue
              e tudo pode ao final retornar. A Suprema Unidade. O círculo é um
              símbolo para o entendimento do mistério da Roda da Vida. Universo.
              {"\n"} Cada pedra na Roda Medicinal é uma ferramenta para ajudar
              você a entender traços de seu passado que molda o presente e o
              futuro planetário. Os nativos americanos reconhecem o círculo como
              o principal símbolo para o entendimento dos mistérios da vida.
              {"\n"}Observaram que ele estava impresso em toda a natureza. O
              homem olha o mundo através dos olhos, que é um círculo. A Terra, a
              Lua, o Sol, os planetas; são todos circulares. A vida inteira,
              para o nativo, discorre de maneira circular. O nascer e o pôr do
              Sol, acompanham um movimento circular. As estações formam um
              círculo. Os pássaros constroem ninhos em círculos, animais marcam
              seus territórios em círculos. As tipis (cabanas) são circulares,
              as tipis das comunidades eram dispostas de maneira circular.
              {"\n"} Quando um xamã construiu uma Roda Medicinal, ele
              reconstruiu a representação simbólica do Universo e da mente
              Universal. {"\n"} Para o nativo, medicina significa poder, energia
              vital que está em todas as formas da natureza. {"\n"} Eles tem um
              conceito de um vórtex (espiral de energia) em movimento. A Roda
              significa um círculo ou espiral de geração de poder, debaixo do
              controle da mente, que é multidimensional. Considera os planos,
              físico, mental, emocional e espiritual. É o mapa da mente, a carta
              da vida, que permite seu uso para obter maior auto-conhecimento,
              mais auto-controle, melhorar a vida, obter satisfação. {"\n"} A
              roda é composta por um grupo de símbolos. Ela pode ser construída
              simplesmente colocando pequenas pedras em forma circular. {"\n"} O
              crânio de búfalo era algumas vezes colocado no centro da Roda,
              como o assento da mente e da consciência e também símbolo da
              representação de Wakan Tanka (Grande Espírito). {"\n"} A Roda não
              representa somente um universo de nossa própria vida e o produto
              de nossa própria mente, mas o Cosmos e a mente de Wakan Tanka, em
              manifestação de tudo na existência e como manifestação do
              pensamento. {"\n"} Cada parte do universo físico e cada coisa viva
              na Terra era vista como tendo origens no não material, mas no
              espiritual, mental e cada manifestação era um estado contínuo de
              mudança. {"\n"} O Espírito ou a essência é aquela inteligência
              seja humana, animal, planta ou mineral, todos juntos numa
              sincronização harmônica. {"\n"} O circulo então é o símbolo da
              totalidade, que representa o Universo. {"\n"} A totalidade de
              espaço, ou o individual e tudo em volta dele. Em outras palavras
              quando você constrói a Roda ela torna-se o seu espaço pessoal, seu
              Universo Pessoal.
            </Text>
          </>
        )}
        {language === "eng" && (
            <>
              <Text style={styles.testo}>
                The Medicine Wheel is a Journey of Consciousness, which can lead
                us more clearly into the creative energies of life that drive
                our existence.{"\n"} It brings an understanding of
                relationships, showing the connections between the significant
                events of our lives, personal and spiritual cycles, for our
                self-knowledge and balance.{"\n"} The Wheel we work with is
                derived from thousands of medicine wheels existing around the
                world. These wheels served multiple purposes: astronomical
                laboratories, spaces for meditation, healing, prayers,
                ceremonial centers, strengthening points of connection between
                man and nature and all Creation, like a mandala of healing and
                protection, points of transformation, and the beginning of life
                changes, and the expansion of consciousness.{"\n"} A dream,
                events, challenging phases of life can give clues about where
                people are on the Wheel, the path they should follow, and the
                skills they need to acquire in the present. The Medicine Wheel
                symbolizes all the cycles of life: beginnings and endings,
                germination and harvest, decomposition and renewal, birth and
                growth, growth and death, death and decomposition, decomposition
                and renewal, renewal and germination, birth and fertilization,
                fertilization and growth. These constitute sacred paths that
                lead us to new understandings of our evolutionary pattern and
                also recover the memory of our connection with all aspects of
                the universe, the ancestral respect for all beings (mineral,
                plant, animal, spiritual) and all relationships.{"\n"} And each
                position reverberates at some point in our existence.{"\n"}{" "}
                {"\n"} It is an adaptation of the Medicine Wheels of the North
                American natives and the Wheel of Life of Celtic Shamanism.
                However, we can also see in them the Chinese trigrams, I Ching,
                runes, tarot cards, the Sacred Calendar of Seasons, Archangels,
                emotions, and foods, adapted to the ecological realities of
                their respective Hemispheres – North and South. In other words,
                it is a Map of the Universe.{"\n"}
              </Text>

              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/altro/roda.png")}
                />
              </View>

              <Text style={styles.testo}>
                {"\n"} Wheels, or circles, represent wholeness.{"\n"} At the
                dawn of humanity, primitive man had to learn to survive in a
                hostile environment. He had circular thinking. They learned to
                sit in a circle, houses were circular, even the discovery of the
                wheel was considered the greatest of all inventions.{"\n"} In
                India, it is an instrument for guiding one to the Deep Self and
                is called a mandala.{"\n"} According to Jung, the mandala
                resides in the human soul itself, appearing in dreams and in
                various images created by our unconscious.{"\n"} The circle is
                the symbol of the Sun, the Sky, and Eternity.{"\n"} The
                masculine and feminine principle in China (Yin-Yang) is
                symbolized by a divided circle, with white representing the Sky
                and black representing the Earth.{"\n"}
              </Text>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/altro/yinyang.png")}
                />
              </View>
              <Text style={styles.testo}>
                {" "}
                {"\n"}
                In ancestral symbolism, the circle is the symbol of infinite
                space, without beginning or end, and when divided by a
                horizontal line, it indicated the division of infinite space
                into order to provide life in time, in the here and now. Divided
                by a vertical line, it also represents the receptive force, the
                feminine principle, without width or depth.{"\n"} All is born
                from the woman, and the active power and conceptual force, the
                masculine principle.{"\n"} The fusion of the two lines in the
                circle forms a third, which is a circled cross. Time and space.
                The cross contained within a circle is a symbol of the unlimited
                and ever-changing reality of things, perpetuating the spirit.
                {"\n"} It can also represent the four expressions of cosmic
                power flowing to their source, or the four elements, four
                bodies, and much more.{"\n"} Circles appear in the zodiac,
                calendars, talismans, points, temples, altars, etc.{"\n"} In the
                silence of the void, there is movement. The origin. The
                beginning is also the end.{"\n"} From everything, it flows, and
                all may eventually return. The Supreme Unity. The circle is a
                symbol for understanding the mystery of the Wheel of Life. The
                Universe.{"\n"} Each stone in the Medicine Wheel is a tool to
                help you understand traces of your past that shape the present
                and planetary future. Native Americans recognize the circle as
                the primary symbol for understanding the mysteries of life.
                {"\n"} They observed that it was imprinted throughout nature.
                Man looks at the world through his eyes, which are circles. The
                Earth, the Moon, the Sun, the planets—all are circular. Life
                itself, for the native, unfolds in a circular manner. The rising
                and setting of the Sun follow a circular motion. The seasons
                form a circle. Birds build nests in circles; animals mark their
                territories in circles. Tipis (lodges) are circular, and
                community tipis were arranged in a circular pattern.{"\n"} When
                a shaman built a Medicine Wheel, he reconstructed the symbolic
                representation of the Universe and the Universal mind.{"\n"} For
                the native, medicine means power, vital energy present in all
                forms of nature.{"\n"} They have a concept of a vortex (spiral
                of energy) in motion. The Wheel signifies a circle or spiral of
                power generation, under the control of the mind, which is
                multidimensional. It considers the physical, mental, emotional,
                and spiritual planes. It is the map of the mind, the chart of
                life, which allows its use for greater self-knowledge, more
                self-control, life improvement, and achieving satisfaction.
                {"\n"} The wheel is composed of a group of symbols. It can be
                constructed simply by placing small stones in a circular shape.
                {"\n"} A buffalo skull was sometimes placed at the center of the
                Wheel as the seat of the mind and consciousness and also as a
                symbol of the representation of Wakan Tanka (Great Spirit).
                {"\n"} The Wheel not only represents a universe of our own life
                and the product of our own mind but also the Cosmos and the mind
                of Wakan Tanka, as a manifestation of everything in existence
                and as a manifestation of thought.{"\n"} Every part of the
                physical universe and every living thing on Earth was seen as
                having origins not in the material but in the spiritual and
                mental, with each manifestation being in a continuous state of
                change.{"\n"} Spirit or essence is that intelligence, whether
                human, animal, plant, or mineral, all together in harmonic
                synchronization.{"\n"} The circle, then, is the symbol of
                wholeness, representing the Universe.{"\n"} The totality of
                space, or the individual and everything around them. In other
                words, when you build the Wheel, it becomes your personal space,
                your Personal Universe.
              </Text>
            </>
        )}
        {language === "ita" && (
            <>
              <Text style={styles.testo}>
                La Ruota Medicinale è un Viaggio di Consapevolezza, che può
                condurci con maggiore chiarezza dentro le energie creative della
                vita, che guidano la nostra esistenza.{"\n"} Porta alla
                comprensione delle relazioni, mostrando le connessioni tra gli
                eventi significativi della nostra vita, i cicli personali e
                spirituali, per la nostra conoscenza di sé e il nostro
                equilibrio.{"\n"} La Ruota con cui lavoriamo deriva da migliaia
                di ruote medicinali esistenti nel mondo. Queste ruote servivano
                a molteplici scopi: laboratori astronomici, spazi di
                meditazione, guarigione, preghiere, centri cerimoniali, punti di
                rafforzamento della connessione tra l'uomo e la natura e tutta
                la Creazione, come un mandala di guarigione e protezione, punti
                di trasformazione e l'inizio di cambiamenti nella vita, e
                l'espansione della consapevolezza.{"\n"} Un sogno, eventi, fasi
                difficili della vita possono dare indizi sul luogo in cui le
                persone si trovano sulla Ruota, sul percorso che dovrebbero
                seguire e sulle competenze che devono acquisire nel presente. La
                Ruota Medicinale simboleggia tutti i cicli della vita: inizi e
                fini, germinazione e raccolto, decomposizione e rinnovamento,
                nascita e crescita, crescita e morte, morte e decomposizione,
                decomposizione e rinnovamento, rinnovamento e germinazione,
                nascita e fertilizzazione, fertilizzazione e crescita. Questi
                costituiscono percorsi sacri che ci conducono a nuove
                comprensioni del nostro schema evolutivo e recuperano anche la
                memoria della nostra connessione con tutti gli aspetti
                dell'universo, il rispetto ancestrale per tutti gli esseri
                (minerali, vegetali, animali, spirituali) e tutte le relazioni.
                {"\n"} E ogni posizione risuona in un punto della nostra
                esistenza.{"\n"} {"\n"} È un adattamento delle Ruote Medicinali
                dei nativi nordamericani e della Ruota della Vita dello
                Sciamanesimo Celtico. Tuttavia, possiamo vedere in essa anche i
                trigrammi cinesi, l’I Ching, le rune, le carte dei tarocchi, il
                Calendario Sacro delle Stagioni, gli Arcangeli, le emozioni, i
                cibi, adattati alle realtà ecologiche dei rispettivi emisferi –
                Nord e Sud. In altre parole, è una Mappa dell’Universo.{"\n"}
              </Text>

              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/altro/roda.png")}
                />
              </View>

              <Text style={styles.testo}>
                {"\n"} Le ruote, o cerchi, rappresentano la totalità.{"\n"}{" "}
                All'alba dell'umanità, l'uomo primitivo dovette imparare a
                sopravvivere in un ambiente ostile. Aveva un pensiero circolare.
                Impararono a sedersi in cerchio, le case erano circolari, fino
                alla scoperta della ruota, considerata la più grande di tutte le
                invenzioni.{"\n"} In India, è uno strumento per guidare verso il
                Sé Profondo ed è chiamato mandala.{"\n"} Secondo Jung, il
                mandala si trova nell'anima umana stessa, apparendo nei sogni e
                in diverse immagini create dal nostro inconscio.{"\n"} Il
                cerchio è il simbolo del Sole, del Cielo e dell'Eternità.{"\n"}{" "}
                Il principio maschile e femminile in Cina (Yin-Yang) è
                simboleggiato da un cerchio diviso, con il bianco che
                rappresenta il Cielo e il nero la Terra.{"\n"}
              </Text>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/altro/yinyang.png")}
                />
              </View>
              <Text style={styles.testo}>
                {"\n"}
                Nel simbolismo ancestrale, il cerchio è il simbolo dello spazio
                infinito, senza inizio né fine, e quando viene diviso da una
                linea orizzontale, indica la divisione dello spazio infinito in
                ordine per fornire la vita nel tempo, nell'"adesso". Diviso da
                una linea verticale, rappresenta anche la forza ricettiva, il
                principio femminile, senza larghezza né profondità.{"\n"} Tutto
                nasce dalla donna, e il potere attivo e la forza concettuale, il
                principio maschile.{"\n"} La fusione delle due linee nel cerchio
                forma un terzo elemento, che è una croce circondata. Tempo e
                spazio. La croce contenuta in un cerchio è un simbolo
                dell'illimitato e della mutevole realtà delle cose, perpetuando
                lo spirito.{"\n"} Può anche rappresentare le quattro espressioni
                del potere cosmico che fluiscono verso la loro fonte, oppure i
                quattro elementi, i quattro corpi e molto altro.{"\n"} I cerchi
                appaiono nello zodiaco, nei calendari, nei talismani, nei punti,
                nei templi, sugli altari, ecc.{"\n"} Nel silenzio del vuoto c'è
                movimento. L'origine. L'inizio è anche la fine.{"\n"} Da tutto
                fluisce, e tutto può alla fine ritornare. L'Unità Suprema. Il
                cerchio è un simbolo per comprendere il mistero della Ruota
                della Vita. L'Universo.{"\n"} Ogni pietra nella Ruota della
                Medicina è uno strumento per aiutarti a comprendere tracce del
                tuo passato che modellano il presente e il futuro planetario. I
                nativi americani riconoscono il cerchio come il simbolo
                principale per comprendere i misteri della vita.{"\n"}{" "}
                Osservavano che era impresso in tutta la natura. L'uomo guarda
                il mondo attraverso gli occhi, che sono cerchi. La Terra, la
                Luna, il Sole, i pianeti: sono tutti circolari. La vita stessa,
                per il nativo, si svolge in modo circolare. Il sorgere e il
                tramontare del Sole seguono un movimento circolare. Le stagioni
                formano un cerchio. Gli uccelli costruiscono nidi in cerchi; gli
                animali delimitano i loro territori in cerchi. Le tipis
                (abitazioni) sono circolari, e le tipis delle comunità erano
                disposte in modo circolare.{"\n"} Quando uno sciamano costruiva
                una Ruota della Medicina, ricostruiva la rappresentazione
                simbolica dell'Universo e della mente Universale.{"\n"} Per il
                nativo, medicina significa potere, energia vitale presente in
                tutte le forme della natura.{"\n"} Hanno un concetto di vortice
                (spirale di energia) in movimento. La Ruota rappresenta un
                cerchio o una spirale di generazione di potere, sotto il
                controllo della mente, che è multidimensionale. Considera i
                piani fisico, mentale, emotivo e spirituale. È la mappa della
                mente, la carta della vita, che permette il suo utilizzo per
                ottenere maggiore autoconoscenza, più autocontrollo, migliorare
                la vita e raggiungere la soddisfazione.{"\n"} La ruota è
                composta da un gruppo di simboli. Può essere costruita
                semplicemente posizionando piccole pietre in forma circolare.
                {"\n"} A volte, un teschio di bufalo veniva posto al centro
                della Ruota come sede della mente e della coscienza e anche come
                simbolo della rappresentazione di Wakan Tanka (Grande Spirito).
                {"\n"} La Ruota non rappresenta solo un universo della nostra
                stessa vita e il prodotto della nostra mente, ma anche il Cosmo
                e la mente di Wakan Tanka, come manifestazione di tutto ciò che
                esiste e come manifestazione del pensiero.{"\n"} Ogni parte
                dell'universo fisico e ogni essere vivente sulla Terra era visto
                come avente origini non nel materiale, ma nello spirituale e
                mentale, con ogni manifestazione in uno stato continuo di
                cambiamento.{"\n"} Lo Spirito o l'essenza è quell'intelligenza,
                sia umana, animale, vegetale o minerale, tutti insieme in una
                sincronizzazione armonica.{"\n"} Il cerchio, quindi, è il
                simbolo della totalità, che rappresenta l'Universo.{"\n"} La
                totalità dello spazio, o l'individuo e tutto ciò che lo
                circonda. In altre parole, quando costruisci la Ruota, essa
                diventa il tuo spazio personale, il tuo Universo Personale.
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
    fontSize: 18,
    lineHeight: 23,
    fontFamily: "Cocchin",
  },
  scrollView: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 60,
  },
  imageView: {
    flex: 1,
    height: 304,
    width: 320,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
  },

  title: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Cocchin",
    color: "darkred",
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginHorizontal: "auto",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 250,
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
