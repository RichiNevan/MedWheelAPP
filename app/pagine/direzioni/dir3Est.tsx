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

const Est = () => {
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
    <ImageBackground source={require("@/assets/images/background.jpg")}>
      <ScrollView style={styles.scrollView}>
        {language === "prt" && (
          <Text style={styles.title}>LESTE PRIMAVERA CLAREZA - ILUMINAçAO</Text>
        )}
        {language === "eng" && <Text style={styles.title}>SPRING</Text>}
        {language === "ita" && <Text style={styles.title}>PRIMAVERA</Text>}
{/* <View style={styles.imageView}></View> */}

        {language === "prt" && (
          <Text style={styles.testo}>
            A direção e o poder do espírito do Leste é a Iluminação que abre o
            olho espiritual e traz discernimento e claridade.{"\n"} É o poder de
            novo começo e nova vida, como o despertar da Primavera depois do
            sono do Inverno.{"\n"} É a Luz que dispersa a escuridão e a
            ignorância.{"\n"} É neste momento, que às coisas nascem e renascem,
            observamos o nosso jeito de ser, aquilo que aprendemos com a vida.
            E, com os olhos da Águia, voar acima dos preconceitos, das regras e
            escolher, do alto da consciência, aquilo que nos serve e que nos
            eleva, e o que queremos deixar cair.{"\n"} Ele nos traz o impulso da
            inspiração, da iluminação, da clareza e da sabedoria. {"\n"}No
            Caminho da Iluminação voamos para perceber que nossas vidas têm um
            propósito, aqui estamos por uma razão que talvez, não compreendemos
            inteiramente.{"\n"} Nesta direção adquirimos à clareza que devemos,
            e podemos nos conectar com a Origem e o Poder Divino, que criou o
            Universo.{"\n"}
            {"\n"} TOTEM ANIMAL : ÁGUIA DOURADA{"\n"} Wabun, o Espírito Guardião
            do Leste é representado pela Águia Dourada, o pássaro mensageiro do
            Grande Espírito, uma das aves que voam mais alto e vêem a vida mais
            claramente.{"\n"} A Águia é sagrada para a maioria do povo nativo,
            devido a sua habilidade de enviar mensagens para o Criador.{"\n"} A
            pena de águia é um simbolo de honra para as pessoas da medicina,
            para os chefes e para guerreiros, porque a águia tem presentes e
            lições para diversas áreas da vida. Como o povo da medicina a águia
            pode elevar-se até o Criador. Como os chefes, elas ganham respeito
            de todos os outros alados.{"\n"}Como guerreiras, elas lutam
            bravamente para proteger seu território e suas crias.{"\n"} Esta
            poderosa ave de oração é um acróbata aéreo inspirador. Embora as
            águias há muito tenham tocado a imaginação dos homens, eles tem
            caçado as águias a ponto de ameaçar as espécies.{"\n"}
            Embora a Águia – Espírito Guardião, goste dos Duas-Pernas (humanos),
            guiando-nos para o Espírito, a majestosa ave que habita o plano
            terreno, evita os humanos para proteger suas crias e sua vida.{"\n"}
            Quando serve a Wabun, a Águia veste as penas douradas da aurora, a
            luz dourada da sabedoria que nos lembra que cada momento é um novo
            começo.{"\n"} É o pássaro que voa mais alto. Os nativos consideram
            “o mais perto do Céu”. É evidente que essa expressão é mais do que o
            sentido literal. Para o índio o Céu é sinônimo do Reino do Espírito
            e das Casas Espirituais.{"\n"} Então a águia é simbolizada pela
            importância de princípios. O principio pode ser definido como a
            verdade fundamental, o espírito essencial ou intenção, ou um guia
            para a ação. {"\n"}É também destacada por sua notável visão. Pode
            ver claramente acima de grandes distâncias e identificar pequenas
            criaturas e objetos de longe.{"\n"}A águia é associada com “ver de
            longe” e com a habilidade de “olhar para frente”. Ela pode olhar
            diretamente para o Sol sem se ofuscar. Por essa intensidade, essa
            habilidade indica outra atribuição do Leste – Iluminação.{"\n"}{" "}
            Iluminação que chega a mente através da visão espiritual. O Sol é um
            símbolo vivo de divindade ou espiritualidade, habilidade para ver a
            essência do Espírito das coisas. {"\n"}As penas de águia são um
            grande tesouro para o índio americano, porque ela ajuda o pássaro a
            ir a grande alturas e chegar perto do céu, e de um elevado ponto de
            vista, distanciar da terra e das coisas materiais, estende-a rumo à
            consciência.{"\n"}Ela habilita a ver mais claramente onde coisas na
            Terra e o índio procura adquirir essa habilidade para sí. {"\n"}
            Pessoas vivem frequentemente fechadas em seus pensamentos para
            entender como ela pode ser parte de um significativo exemplo. {"\n"}
            Nos vamos pela vida observando tapetes e pinturas procurando algo
            que faça sentido somente vendo aquelas poucas coisas que estão à
            frente de nosso nariz. Quando damos uma devida distância pode o
            quadro tornar-se claro e a verdadeira criatividade e intensão dos
            artistas pode ser reconhecida e apreciada.{"\n"} A águia pode dar
            maior habilidade para sintonizar com o Espírito do Leste e abrir
            nossa mente para essa energia.{"\n"} Os antigos usavam penas de
            águia quando faziam preces para o Grande Espírito ouvir. Eles usavam
            em seus paramentos espirituais e em suas preces.{"\n"} Oravam para a
            águia ajudá-los a ver mais claramente, a conectar com a sabedoria e
            iluminação. A águia de Wabun é a Águia Dourada, cujas penas são da
            cor do por-do-sol.{"\n"}
            {"\n"}
            {"\n"}
            Totem Mineral: Pipestone (Pedra-De-Cachimbo) Catlinita.{"\n"}
            {"\n"} É uma argila vermelha com branco, ou raramente, dourada,
            metamorfoseada em fina granulação que é facilmente esculpível.{"\n"}{" "}
            Esta argila encontra-se, principalmente, nos EUA, nas áreas Dakota.
            {"\n"} Ela tem sido utilizada em cerimonias nativas por milhares de
            anos. O bojo do cachimbo sagrado é frequentemente esculpido de
            catlinita, assim como pequenos fetiches e figuras.{"\n"} Várias
            tribos contam a história, onde muitos anos atrás, haviam duas tribos
            guerreiras que não cessavam de lutar, embora muitas pessoas tivessem
            morrido. O Criador, desgostoso com essa matança, veio até às tribos
            e lhes disse que deviam parar com suas batalhas.{"\n"} Para lembrar
            ao povo a insensatez e o desperdício da guerra, o Criador
            transformou o sangue dos mortos em pedra e disse ao povo para fazer
            cachimbos desta pedra.{"\n"} Quando eles quisessem guerrear, o
            Criador instruiu para fumar o cachimbo. Desta forma todo o povo teve
            um novo começo.{"\n"} A “pipestone” promove a paz, a verdade, a
            cura, a oração, cerimônias, sabedoria, visão clara e amor.{"\n"}{" "}
            Pode nos ajudar a deixar nossas pequenas fronteiras mentais e entrar
            na consciência coletiva. Isso ajudará na cura pessoal que por sua
            vez ajuda a Terra e trabalha com toda a natureza.{"\n"} Pode também
            ajudar a desenvolver a fé, otimismo, comunicação, harmonia,
            tranquilidade. Pessoas fortemente atraidas por esta pedra, podem
            aprender novas formas de ajudar a Mãe Terra e a desenvolver
            profundas formas de comunicação com ela e com o Espírito. {"\n"}A
            catlinita pode despertar tanto o pacificador quanto aquele que fala
            a verdade dentro de você.{"\n"}
            {"\n"}
            {"\n"}
            Totem Vegetal – Tabaco{"\n"}
            {"\n"} O Guardião dos Espíritos do Leste, Wabun, é representado pelo
            tabaco. Muitos povos indígenas contam a história de uma mulher
            sagrada que ficou grávida de gêmeos.{"\n"} Mesmo dentro do útero
            esses meninos lutaram. Um representava tudo o que era bom em
            humanos, enquanto o outro representava o oposto. Quando chegou a
            hora de nascerem, o bom filho nasceu da maneira normal.{"\n"} O
            outro filho estava tão ansioso para sair do útero que chutou para o
            lado da mulher, ferindo-a mortalmente.{"\n"} O bom filho permaneceu
            com a mãe e, com seus poderes extraordinários, enterrou-a como ela
            instruiu.{"\n"}
            Ela o instruiu que mesmo com sua morte as coisas boas viriam ao
            povo. Ele permaneceu em seu túmulo por alguns dias, como ela pediu.
            {"\n"}
            Antes de partir, viu que de seu corpo cresciam as três plantas irmãs
            – milho, feijão e abóbora - que, a partir daquele momento, davam
            sustento a todo o povo. De sua testa veio a planta sagrada do
            tabaco.{"\n"} Porque veio dessa parte da mulher sagrada, o tabaco é
            considerado uma erva cuja fumaça pode trazer clareza. {"\n"}A
            clareza é um presente de dois gumes que pode atrair você para o bem
            e para o mal: liberdade ou prisão. Assim é com o tabaco.{"\n"} Dito
            corretamente, pode trazer clareza, atrair energias, absorver a
            negatividade e transformá-la em energias positivas.{"\n"} Usado
            incorretamente, pode envenenar você. É uma planta que deve ser usada
            com respeito. O tabaco é considerado uma das plantas mais sagradas
            pelos nativos americanos.{"\n"} Quando fumado em um cachimbo
            sagrado, ele leva orações ao Espírito. É freqüentemente usado para
            fazer oferendas aos Guardiões Espirituais e Guias Espirituais.{"\n"}{" "}
            Fumar tabaco é pedir ajuda ao Plano Espiritual. Se alguém fuma por
            recreação, então eles estão continuamente prendendo o Espírito a
            eles com um falso alarme similar àquele dado pelo “menino que gritou
            lobo”. A folha de tabaco tem de seis a doze polegadas de
            comprimento, larga e pontiaguda.{"\n"} A folha é a parte usada para
            fumar. A planta do tabaco pertence ao gênero Nicotiana. A maior
            parte do tabaco comprado em lojas é misturado com material químico,
            nocivo à saude.{"\n"} Um nome nativo americano comum para uma
            mistura de fumar é kinnikinnick. Kinnikinnick pode referir-se a
            apenas uma erva, mais frequentemente uva-ursi, ou a tabaco em
            combinação com ervas.{"\n"} O tabaco é uma planta auxiliar forte.
            Usado em folhas ou no cachimbo sagrado pode, como Wabun, trazer
            novos começos para quem está usando ou para qualquer projeto ou
            lugar para o qual ele é queimado.{"\n"}
            {"\n"}
            {"\n"} Cor: Ouro {"\n"}
            {"\n"}Wabun, o Guardião do Espírito do Oriente, é representado pelo
            ouro e pelo vermelho do sol nascendo no horizonte, anunciando a
            aurora e o começo de um novo dia.{"\n"} Esta é também a luz dourada
            que vem com o sol da primavera e a luz dourada da sabedoria que pode
            iluminar o nosso caminho ao longo da vida, lembrando-nos que cada
            momento é um novo começo.{"\n"} O vermelho de Wabun é o vermelho da
            vitalidade, o vermelho do sangue. Ouro e vermelho ajudam você a
            encontrar clareza, sabedoria e iluminação.{"\n"} Essas cores
            estimulam o renascimento, o rejuvenescimento, a força vital forte, a
            iluminação e a coragem. O vermelho sozinho pode estimular a
            agressividade e a ausência de medo, por isso é importante moderar
            sua energia com o ouro, o que agrega equilíbrio e sensibilidade.
            {"\n"} O ouro e o vermelho ajudam você a trabalhar com as coisas da
            Terra, assim como com outros planos. Essas cores vão te ancorar e
            ajudar você a comunicar seus verdadeiros pensamentos e sentimentos.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The direction and power of the spirit of the East is Illumination,
            which opens the spiritual eye and brings discernment and clarity.
            {"\n"} It is the power of new beginnings and new life, like the
            awakening of Spring after the slumber of Winter.{"\n"} It is the
            Light that disperses darkness and ignorance.{"\n"} It is in this
            moment, when things are born and reborn, that we observe our way of
            being, what we have learned from life. And, with the eyes of the
            Eagle, we soar above prejudices and rules to choose, from the height
            of consciousness, what serves and elevates us, and what we want to
            let go.{"\n"}
            It brings us the impulse of inspiration, illumination, clarity, and
            wisdom.{"\n"} On the Path of Illumination, we fly to perceive that
            our lives have a purpose, that we are here for a reason we may not
            fully comprehend.{"\n"} In this direction, we gain the clarity that
            we should and can connect with the Origin and Divine Power that
            created the Universe.{"\n"}
            {"\n"} ANIMAL TOTEM: GOLDEN EAGLE{"\n"}
            Wabun, the Guardian Spirit of the East, is represented by the Golden
            Eagle, the messenger bird of the Great Spirit, one of the birds that
            flies the highest and sees life the clearest.{"\n"} The Eagle is
            sacred to most Native peoples because of its ability to send
            messages to the Creator.{"\n"} The eagle feather is a symbol of
            honor for medicine people, chiefs, and warriors because the eagle
            carries gifts and lessons for various areas of life. As medicine
            people, the eagle can ascend to the Creator. As chiefs, they gain
            the respect of all other winged beings.{"\n"} As warriors, they
            fight bravely to protect their territory and their young.{"\n"} This
            powerful bird of prayer is an inspiring aerial acrobat. Though
            eagles have long captured the imagination of humankind, they have
            been hunted to the point of threatening their species.{"\n"}
            Though the Eagle – Guardian Spirit – cares for the Two-Legs
            (humans), guiding us to the Spirit, the majestic bird that dwells on
            the earthly plane avoids humans to protect its young and its life.
            {"\n"}
            When serving Wabun, the Eagle wears the golden feathers of dawn, the
            golden light of wisdom that reminds us that each moment is a new
            beginning.{"\n"} It is the bird that flies the highest. Natives
            consider it “the closest to Heaven.” This expression is more than
            literal. For the Native, Heaven is synonymous with the Spirit Realm
            and the Spiritual Houses.{"\n"} Thus, the eagle is symbolized by the
            importance of principles. Principles can be defined as fundamental
            truth, essential spirit or intention, or a guide to action.{"\n"} It
            is also noted for its remarkable vision. It can see clearly over
            great distances and identify small creatures and objects from afar.
            {"\n"}
            The eagle is associated with “seeing far” and the ability to “look
            ahead.” It can look directly at the Sun without being blinded. This
            intensity and ability indicate another attribute of the East –
            Illumination.{"\n"}
            Illumination reaches the mind through spiritual vision. The Sun is a
            living symbol of divinity or spirituality, the ability to see the
            essence of the Spirit of things.{"\n"} Eagle feathers are a great
            treasure for Native Americans because they help the bird reach great
            heights and get closer to the sky. From such an elevated point of
            view, it distances itself from the earth and material things,
            extending toward consciousness.{"\n"} It enables clearer vision of
            earthly matters, a skill Natives seek to develop in themselves.
            {"\n"}
            People often live closed in their thoughts, failing to understand
            how they can be part of a meaningful example.{"\n"} We move through
            life looking at rugs and paintings, searching for something that
            makes sense, seeing only what is directly in front of our noses.
            When we gain proper distance, the picture can become clear, and the
            true creativity and intention of the artist can be recognized and
            appreciated.{"\n"}
            The eagle can give us a greater ability to tune into the Spirit of
            the East and open our minds to its energy.{"\n"} The ancients used
            eagle feathers in prayers to the Great Spirit, wearing them in
            spiritual attire and during prayers.{"\n"} They prayed for the eagle
            to help them see more clearly, to connect with wisdom and
            illumination. Wabun’s eagle is the Golden Eagle, whose feathers are
            the color of the sunset.{"\n"}
            {"\n"}
            {"\n"}
            Mineral Totem: Pipestone (Sacred Pipe Stone) – Catlinite It is a red
            clay with white or, rarely, golden hues, metamorphosed into fine
            granulation that is easily carvable.{"\n"}
            {"\n"}
            This clay is found primarily in the United States, in the Dakota
            regions.{"\n"}
            It has been used in native ceremonies for thousands of years. The
            bowl of the sacred pipe is often carved from catlinite, as are small
            fetishes and figures.{"\n"}
            Various tribes tell a story where, many years ago, there were two
            warring tribes who would not stop fighting, even though many people
            had died. The Creator, displeased with this killing, came to the
            tribes and told them they must cease their battles.{"\n"}
            To remind the people of the senselessness and waste of war, the
            Creator transformed the blood of the dead into stone and told the
            people to make pipes from this stone.{"\n"}
            When they wanted to fight, the Creator instructed them to smoke the
            pipe. In this way, all the people had a new beginning.{"\n"}
            “Pipestone” promotes peace, truth, healing, prayer, ceremonies,
            wisdom, clear vision, and love.{"\n"}
            It can help us move beyond our mental boundaries and enter
            collective consciousness. This aids personal healing, which in turn
            helps the Earth and works in harmony with all of nature.{"\n"}
            It can also help develop faith, optimism, communication, harmony,
            and tranquility. People strongly drawn to this stone may learn new
            ways to assist Mother Earth and develop deep forms of communication
            with her and with the Spirit.{"\n"}
            Catlinite can awaken both the peacemaker and the truth-speaker
            within you.{"\n"}
            {"\n"}
            {"\n"}
            Totem Plant: Tobacco{"\n"}
            {"\n"}
            The Guardian Spirit of the East, Wabun, is represented by tobacco.
            Many indigenous peoples tell the story of a sacred woman who became
            pregnant with twins.{"\n"}
            Even within the womb, these boys fought. One represented all that
            was good in humans, while the other represented the opposite. When
            the time came for them to be born, the good son was delivered in the
            normal way.{"\n"}
            The other son was so eager to leave the womb that he kicked his way
            out through the woman's side, fatally wounding her.{"\n"}
            The good son stayed with his mother and, with his extraordinary
            powers, buried her as she instructed.{"\n"}
            She told him that even in her death, good things would come to the
            people. He remained at her grave for a few days, as she had asked.
            {"\n"}
            Before leaving, he saw that from her body grew the three sister
            plants—corn, beans, and squash—which, from that moment, sustained
            all the people. From her forehead came the sacred tobacco plant.
            {"\n"}
            Because it came from this part of the sacred woman, tobacco is
            considered an herb whose smoke can bring clarity.{"\n"}
            Clarity is a double-edged gift that can attract you to both good and
            evil: freedom or imprisonment. Such is the nature of tobacco.{"\n"}
            Used properly, it can bring clarity, attract energies, absorb
            negativity, and transform it into positive energies.{"\n"}
            Used improperly, it can poison you. It is a plant that must be used
            with respect. Tobacco is considered one of the most sacred plants by
            Native Americans.{"\n"}
            When smoked in a sacred pipe, it carries prayers to the Spirit. It
            is often used to make offerings to Spirit Guardians and Spirit
            Guides.{"\n"}
            Smoking tobacco is a way of asking for help from the Spiritual
            Plane. If someone smokes for recreation, they are constantly
            summoning the Spirit with a false alarm, similar to the story of
            "the boy who cried wolf."{"\n"}
            The tobacco leaf ranges from six to twelve inches long, wide, and
            pointed.{"\n"}
            The leaf is the part used for smoking. The tobacco plant belongs to
            the genus Nicotiana. Most tobacco bought in stores is mixed with
            chemicals harmful to health.{"\n"}A common Native American name for
            a smoking mixture is kinnikinnick. Kinnikinnick may refer to just
            one herb, most often bearberry (uva-ursi), or to tobacco combined
            with other herbs.{"\n"}
            Tobacco is a strong helper plant. Used as leaves or in the sacred
            pipe, it can, like Wabun, bring new beginnings to the person using
            it or to any project or place where it is burned.{"\n"}
            {"\n"}
            {"\n"}
            Color: Gold{"\n"}
            {"\n"}
            Wabun, the Guardian Spirit of the East, is represented by the gold
            and red of the rising sun on the horizon, announcing the dawn and
            the beginning of a new day.{"\n"}
            This is also the golden light that comes with the spring sun and the
            golden light of wisdom that can illuminate our path through life,
            reminding us that each moment is a new beginning.{"\n"}
            Wabun's red is the red of vitality, the red of blood. Gold and red
            help you find clarity, wisdom, and enlightenment.{"\n"}
            These colors stimulate rebirth, rejuvenation, strong vital force,
            illumination, and courage. Red alone can stimulate aggression and
            fearlessness, so it is important to balance its energy with gold,
            which adds balance and sensitivity.{"\n"}
            Gold and red help you work with earthly matters as well as with
            other planes. These colors will ground you and help you communicate
            your true thoughts and feelings.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            La direzione e il potere dello spirito dell'Est è l'Illuminazione,
            che apre l'occhio spirituale e porta discernimento e chiarezza.
            {"\n"} È il potere di nuovi inizi e nuova vita, come il risveglio
            della primavera dopo il sonno dell'inverno.{"\n"}È la Luce che
            disperde l'oscurità e l'ignoranza.{"\n"} È in questo momento, quando
            le cose nascono e rinascono, che osserviamo il nostro modo di
            essere, ciò che abbiamo imparato dalla vita. E, con gli occhi
            dell'Aquila, voliamo sopra i pregiudizi e le regole per scegliere,
            dall'alto della coscienza, ciò che ci serve e ci eleva, e ciò che
            vogliamo lasciar andare.{"\n"}
            Ci porta l'impulso dell'ispirazione, dell'illuminazione, della
            chiarezza e della saggezza.{"\n"} Sul Sentiero dell'Illuminazione,
            voliamo per percepire che le nostre vite hanno uno scopo, che siamo
            qui per una ragione che forse non comprendiamo pienamente.{"\n"} In
            questa direzione, otteniamo la chiarezza che dobbiamo e possiamo
            connetterci con l'Origine e il Potere Divino che ha creato
            l'Universo.{"\n"}
            {"\n"} TOTEM ANIMALE: AQUILA REALE{"\n"}
            Wabun, lo Spirito Guardiano dell'Est, è rappresentato dall'Aquila
            Reale, l'uccello messaggero del Grande Spirito, uno degli uccelli
            che vola più in alto e vede la vita più chiaramente.{"\n"} L'Aquila
            è sacra per la maggior parte dei popoli nativi grazie alla sua
            capacità di inviare messaggi al Creatore.{"\n"} La piuma d'aquila è
            un simbolo di onore per i guaritori, i capi e i guerrieri, perché
            l'aquila porta doni e lezioni per vari ambiti della vita. Come
            guaritori, l'aquila può elevarsi fino al Creatore. Come capi,
            guadagnano il rispetto di tutti gli altri esseri alati.{"\n"} Come
            guerriere, combattono coraggiosamente per proteggere il loro
            territorio e i loro piccoli.{"\n"} Questo potente uccello di
            preghiera è un acrobata aereo ispiratore. Sebbene le aquile abbiano
            a lungo catturato l'immaginazione dell'umanità, sono state cacciate
            al punto da minacciarne la specie.{"\n"}
            Sebbene l'Aquila – Spirito Guardiano – si prenda cura dei Due-Gambe
            (umani), guidandoci verso lo Spirito, il maestoso uccello che abita
            il piano terreno evita gli umani per proteggere i suoi piccoli e la
            sua vita.{"\n"}
            Servendo Wabun, l'Aquila indossa le piume dorate dell'aurora, la
            luce dorata della saggezza che ci ricorda che ogni momento è un
            nuovo inizio.{"\n"} È l'uccello che vola più in alto. I nativi la
            considerano “la più vicina al Cielo.” Questa espressione è più che
            letterale. Per il nativo, il Cielo è sinonimo del Regno dello
            Spirito e delle Dimore Spirituali.{"\n"} Così l'aquila è
            simbolizzata dall'importanza dei principi. I principi possono essere
            definiti come verità fondamentali, spirito essenziale o intenzione,
            o una guida all'azione.{"\n"} È anche nota per la sua straordinaria
            vista. Può vedere chiaramente a grandi distanze e identificare
            piccole creature e oggetti da lontano.{"\n"}
            L'aquila è associata al “vedere lontano” e alla capacità di
            “guardare avanti.” Può guardare direttamente il Sole senza essere
            accecata. Questa intensità e capacità indicano un altro attributo
            dell'Est – l'Illuminazione.{"\n"}
            L'Illuminazione raggiunge la mente attraverso la visione spirituale.
            Il Sole è un simbolo vivente della divinità o della spiritualità, la
            capacità di vedere l'essenza dello Spirito delle cose.{"\n"} Le
            piume d'aquila sono un grande tesoro per i Nativi Americani perché
            aiutano l'uccello a raggiungere grandi altezze e avvicinarsi al
            cielo. Da tale punto di vista elevato, si distanzia dalla terra e
            dalle cose materiali, estendendosi verso la coscienza.{"\n"}
            Permette di vedere più chiaramente le questioni terrene, una
            capacità che i nativi cercano di acquisire.{"\n"}
            Le persone vivono spesso chiuse nei propri pensieri, non
            comprendendo come possano essere parte di un esempio significativo.
            {"\n"}
            Andiamo attraverso la vita guardando tappeti e dipinti, cercando
            qualcosa che abbia senso, vedendo solo ciò che è direttamente
            davanti al nostro naso. Quando prendiamo la giusta distanza, il
            quadro può diventare chiaro, e la vera creatività e intenzione
            dell'artista possono essere riconosciute e apprezzate.{"\n"}
            L'aquila può darci una maggiore capacità di sintonizzarci con lo
            Spirito dell'Est e aprire la nostra mente alla sua energia.{
              "\n"
            }{" "}
            Gli antichi usavano le piume d'aquila nelle preghiere al Grande
            Spirito, indossandole negli abiti spirituali e durante le preghiere.
            {"\n"} Pregavano affinché l'aquila li aiutasse a vedere più
            chiaramente, a connettersi con saggezza e illuminazione. L'aquila di
            Wabun è l'Aquila Reale, le cui piume sono del colore del tramonto.
            {"\n"}
            {"\n"}
            {"\n"}
            Totem Minerale: Pipestone (Pietra Sacra del Calumet) – Catlinite È
            un’argilla rossa con sfumature bianche o, raramente, dorate,
            metamorfosata in una grana fine facilmente scolpibile.{"\n"}
            {"\n"}
            Questa argilla si trova principalmente negli Stati Uniti, nelle
            regioni del Dakota.{"\n"}È stata usata per migliaia di anni in
            cerimonie native. Il fornello del calumet sacro è spesso scolpito in
            catlinite, così come piccoli feticci e figure.{"\n"}
            Diverse tribù raccontano la storia di due tribù in guerra che, molti
            anni fa, non smettevano di combattere nonostante molte persone
            fossero morte. Il Creatore, scontento di questa carneficina, si
            presentò alle tribù e disse loro di cessare le battaglie.{"\n"}
            Per ricordare al popolo l’insensatezza e lo spreco della guerra, il
            Creatore trasformò il sangue dei morti in pietra e disse loro di
            fare calumet con questa pietra.{"\n"}
            Quando desideravano combattere, il Creatore disse loro di fumare il
            calumet. In questo modo, il popolo ebbe un nuovo inizio.{"\n"}
            La “pipestone” promuove pace, verità, guarigione, preghiera,
            cerimonie, saggezza, visione chiara e amore.{"\n"}
            Può aiutarci a superare i limiti mentali e a entrare nella coscienza
            collettiva. Questo favorisce la guarigione personale, che a sua
            volta aiuta la Terra e armonizza con tutta la natura.{"\n"}
            Può anche sviluppare fede, ottimismo, comunicazione, armonia e
            tranquillità. Le persone fortemente attratte da questa pietra
            possono imparare nuovi modi per aiutare Madre Terra e sviluppare
            forme profonde di comunicazione con lei e con lo Spirito.{"\n"}
            La catlinite può risvegliare sia il pacificatore sia colui che parla
            la verità dentro di te.{"\n"}
            {"\n"}
            {"\n"}
            Totem Vegetale: Tabacco{"\n"}
            {"\n"}
            Il Guardiano degli Spiriti dell'Est, Wabun, è rappresentato dal
            tabacco. Molti popoli indigeni raccontano la storia di una donna
            sacra che rimase incinta di gemelli.{"\n"}
            Anche nel grembo materno, questi ragazzi lottavano. Uno
            rappresentava tutto ciò che c’è di buono nell’uomo, mentre l’altro
            rappresentava l’opposto. Quando arrivò il momento di nascere, il
            figlio buono nacque in modo normale.{"\n"}
            L’altro figlio, così impaziente di uscire, diede un calcio al fianco
            della madre, ferendola mortalmente.{"\n"}
            Il figlio buono rimase con la madre e, con i suoi straordinari
            poteri, la seppellì come lei gli aveva ordinato.{"\n"}
            Lei gli disse che, nonostante la sua morte, cose buone sarebbero
            venute per il popolo. Egli rimase presso la sua tomba per alcuni
            giorni, come lei aveva chiesto.{"\n"}
            Prima di partire, vide che dal suo corpo crescevano le tre piante
            sorelle—mais, fagioli e zucca—che da quel momento sostentarono tutto
            il popolo. Dalla sua fronte crebbe la pianta sacra del tabacco.
            {"\n"}
            Poiché proveniva da quella parte della donna sacra, il tabacco è
            considerato un’erba il cui fumo può portare chiarezza.{"\n"}
            La chiarezza è un dono a doppio taglio che può attirarti sia verso
            il bene che verso il male: libertà o prigionia. Così è anche per il
            tabacco.{"\n"}
            Usato correttamente, può portare chiarezza, attrarre energie,
            assorbire negatività e trasformarla in energie positive.{"\n"}
            Usato in modo improprio, può avvelenarti. È una pianta che deve
            essere usata con rispetto. Il tabacco è considerato una delle piante
            più sacre dai nativi americani.{"\n"}
            Quando fumato in un calumet sacro, porta le preghiere allo Spirito.
            È spesso usato per fare offerte ai Guardiani e Guide Spirituali.
            {"\n"}
            Fumare tabacco è un modo per chiedere aiuto al Piano Spirituale. Se
            qualcuno fuma per svago, richiama continuamente lo Spirito con un
            falso allarme, simile alla storia del "ragazzo che gridava al lupo".
            {"\n"}
            La foglia di tabacco è lunga tra sei e dodici pollici, larga e
            appuntita.{"\n"}
            La foglia è la parte utilizzata per fumare. La pianta del tabacco
            appartiene al genere Nicotiana. La maggior parte del tabacco
            acquistato nei negozi è mischiato con sostanze chimiche nocive per
            la salute.{"\n"}
            Un nome comune dei nativi americani per una miscela da fumo è
            kinnikinnick. Kinnikinnick può riferirsi a una sola erba, più
            frequentemente l’uva ursina (uva-ursi), o al tabacco combinato con
            altre erbe.{"\n"}
            Il tabacco è una pianta ausiliare potente. Usato in foglie o nel
            calumet sacro, può, come Wabun, portare nuovi inizi a chi lo usa o a
            qualsiasi progetto o luogo in cui viene bruciato.{"\n"}
            {"\n"}
            {"\n"}
            Colore: Oro{"\n"}
            {"\n"}
            Wabun, il Guardiano dello Spirito dell'Est, è rappresentato dall’oro
            e dal rosso del sole che sorge all’orizzonte, annunciando l’alba e
            l’inizio di un nuovo giorno.{"\n"}
            Questa è anche la luce dorata che accompagna il sole primaverile e
            la luce della saggezza che può illuminare il nostro cammino nella
            vita, ricordandoci che ogni momento è un nuovo inizio.{"\n"}
            Il rosso di Wabun è il rosso della vitalità, il rosso del sangue.
            Oro e rosso ti aiutano a trovare chiarezza, saggezza e
            illuminazione.{"\n"}
            Questi colori stimolano rinascita, ringiovanimento, una forte forza
            vitale, illuminazione e coraggio. Il rosso da solo può stimolare
            aggressività e temerarietà, quindi è importante bilanciare la sua
            energia con l’oro, che aggiunge equilibrio e sensibilità.{"\n"}
            Oro e rosso ti aiutano a lavorare con le questioni terrestri così
            come con altri piani. Questi colori ti ancorano e ti aiutano a
            comunicare i tuoi veri pensieri e sentimenti.
          </Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Est;

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
    height: 350,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
  },

  image: {
    bottom: 20,
    width: "98%",
    height: 400,
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
