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
          <Text style={styles.title}>Lua dos Novos Começos</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of New Beginnings</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna dei Nuovi Inizi</Text>
        )}

        <View style={styles.imageView}></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Segundo Sun Bear é a Lua do Florescer das Árvores, Tempo de
            Despertar e de Novos Começos.{"\n"}
            Para Kenneth Meadows e na Roda de Estudos Voo da Águia chamaremos de
            Lua dos Novos Começos.{"\n"}É a primeira Lua de Wabun, Espírito
            Guardião do Leste, acontece na época do equinócio. {"\n"}A cor é o
            amarelo e recebe influência do Clã do Pássaro Trovão. {"\n"}A
            Opala-de-Fogo pode ensinar às pessoas nesta posição a necessidade de
            água – as emoções – para temperar suas energias ígneas. {"\n"}O
            Dente-de-Leão pode mostrar as vantagens de se criar raízes, bem como
            de voar. {"\n"}O Falcão Vermelho pode demonstrar a alegria da
            liberdade e de uma visibilidade distante e clara. {"\n"}
            Esta Lua nos ensina sobre energia, intensidade, mudança
            catalizadora, destemor e oportunismo. Esta posição poderá nos
            mostrar nossas habilidades de liderança, a enormidade de nosso
            próprio espírito, e a extensão de nossa visibilidade clara. {"\n"}
            Pessoas vivenciando esta lua, precisam aprender a canalizar suas
            energias, saber fluir suas emoções e a ser mais pacientes com os
            outros.{"\n"}
            Se você nasceu nesta lua, tem a dádiva do equilíbrio e da harmonia,
            e de como entender as mensagens de seu coração, através de sua
            introspeção e força. {"\n"}
            Você deve aprender realmente o que é equilíbrio, mesmo que necessite
            sentir desconforto para fazer isso. De uma forma geral, os nascidos
            nesta lua, são bondosos e amorosos. {"\n"}
            São realmente preocupados com o bem estar dos outros. Quando estão
            nesse estado possuem a força de absorver e refletir luz a todos os
            que eles encontram. {"\n"}
            Podem ser um alívio para os ferimentos dos outros, qualquer que
            tenha sido a causa.{"\n"}
            Seu verdadeiro interesse pelas pessoas, dá aos outros o empurrão que
            precisam para retornarem à estrada. {"\n"}
            Quando estão desequilibradas, tem a força de gerar profundas
            depressões ou confusões. Eles tendem a ir de um lado para o outro
            num curto espaço de tempo. Podem ir rapidamente de uma idéia,
            conceito ou humor para o seu oposto, de acordo com o estado que lhes
            pareçam melhor naquele momento particular. {"\n"}
            No entanto quando encontram seu ponto de equilíbrio, que está dentro
            deles mesmos, acessam poderes especiais para o bem dos que estão ao
            seu redor, normalmente sendo curadores talentosos ou médiuns de boas
            energias. {"\n"}
            Ficam nervosos, irritados ou paranoicos, se não forem capazes de
            voltarem ao equilíbrio. {"\n"}
            São responsáveis, inteligentes e capazes de aprenderem todos os
            pontos de vista ou de idéias que puderem enxergar.{"\n"}
            Eles são, por natureza, adaptáveis e acostumados a viverem num mundo
            de mudanças emocionantes. Mudanças no mundo psíquico não são capazes
            de abalá-los grandemente. {"\n"}
            São capazes de ensinar aos outros como a combinar a energia do Céu
            com a da Terra, por isso ajudam a trazer equilíbrio entre os que
            estão com eles. {"\n"}
            Eles podem ajudar a encontrar um equilíbrio entre o homem e a
            natureza.{"\n"}
            Podem explorar seus sentimentos de participação e serem leais a
            quaisquer grupos que eles queiram se envolver. Uma meta que eles
            sempre carregam no coração é a de ajudar os outros. {"\n"}
            Se usarem sua introspeção para olharem primeiro a si próprios,
            chegarão mais rapidamente ao equilibrio e serão capazes de ajudar os
            outros.{"\n"}
            {"\n"}
            Esta lua ensina sobre os paradoxos da própria vida, de uma maneira
            mais direta e intensa, pela própria experimentação. {"\n"}
            Ensina a mostrar a afeição física e como se sentir confortável,
            tanto no Céu como na Terra, e a compreensão dos relacionamentos com
            grupos.{"\n"}
            {"\n"}
            Os nascidos nesta lua devem cuidarem-se para não serem totalmente
            indecisos, e tão mutáveis que cheguem a confundir a si próprios.
            {"\n"}
            Gostam de estar em situações que possam colocar em prática sua
            intensa atividade mental, física ou emocional. {"\n"}
            São na sua maioria abertas, dispostas a ouvirem qualquer novas
            ideias ou filosofias.{"\n"}
            Aceitam coisas que mais tarde vão se mostrar prejudiciais a eles
            mesmos. {"\n"}
            Eles podem ir para situações erradas ou sob um certo estresse, e ai
            pode ficar dividido e perder a vitalidade que lhes dá o seu fogo e
            seu brilho.{"\n"}
            Podem ser daqueles que brilham constantemente com nuances de energia
            de fogo ou podem ser aqueles que como um flash, a vitalidade do fogo
            surge neles, ou eles podem ter formações constantes e fogo que irão
            fosforescer constantemente. {"\n"}
            Tudo vai depender do que ele aprendeu sobre o fogo da vida, que flui
            facilmente através deles.{"\n"}É raro encontrar alguns que chegaram
            a controlar a sua energia a ponto que sempre esteja disponível a
            eles. {"\n"}
            Eles são muito valiosos, porque eles podem não somente iniciar
            projetos, como também mante-los em andamento junto com a força de
            sua energia. {"\n"}
            São comumente o símbolo de esperança de uma nova ideia que está
            lutando para nascer. Eles são catalisadores capazes de transformar
            uma ideia em realidade. {"\n"}
            Eles tem a direta conexão com o Sol e com o fogo. {"\n"}
            Sua conexão com a lua e emoções é seu desafio, e essencial para um
            aprendizado de sucesso, no sentidos de usarem bem as suas energias.{" "}
            {"\n"}O fogo deles vem de suas emoções, que se movem mais rápido que
            a maioria das pessoas. Eles tem medo de suas complexidades
            emocionais e de outras pessoas.{"\n"}A Lua do Florescer das árvores,
            injeta um maior nível energia para os que nascem sob ela. {"\n"}
            Essa lua governa os tempos mais rápido de crescimento da Terra. Traz
            uma energia de crescimento rápido e mudança. {"\n"}
            Ajudando os nativos desta lua a terem uma adaptabilidade aparente em
            crescerem de uma filosofia ou projeto para outro.{"\n"}
            Eles tem a tendência para aparecer em todos os lugares, partindo do
            principio que pulam de um projeto para o outro. {"\n"}
            Esse hábito não facilita eles a conhecerem pessoas difíceis de
            lidarem com seu nível de energia, e não entendam dos benefícios que
            possam trazer a coisas que lhe interessam. {"\n"}
            Eles podem ser muito interessantes para aqueles que souberem
            entende-los e fazer proveito de suas ideias. {"\n"}
            Desde que sejam sinceros consigo mesmos, eles podem limpar ideias e
            coisas em pessoas que eles tenham contato. Quando são sinceros
            consigo mesmos, não gostam de encontrar falsidades ou manipulações
            nos outros, e irão tentar convencer com toda a alma que suas
            qualidades se fazem presentes. {"\n"}
            Eles são sinceros e comumente certeiros no que vem.{"\n"}
            Eles são teimosos e podem adquirir dores de cabeças e outros males
            da cabeça. {"\n"}
            Tem a tendência de baterem acidentalmente suas cabeças, mais que as
            outras, pois seu jeito acelerado, as vezes faz com que eles não
            olhem ao seu redor. {"\n"}
            As pessoas nascidas sob esta lua são em sua maioria pessoas grandes
            ou em espírito ou em corpo. Eles tem a capacidade de abrir suas asas
            em um grande raio. {"\n"}
            Eles vivem caçando novas coisas para fazer, novos projetos, novas
            áreas a explorar, filosofias e etc. {"\n"}
            Eles tendem a ter fases claras e escuras. {"\n"}
            Nas claras são agradáveis e abertos para tudo. {"\n"}
            Nas escuras, querem voar fora, sozinhos para algum lugar para ver o
            que pode ter acontecido de errado para eles. {"\n"}
            Eles tendem a serem destemidos, indo atrás do que acreditam. {"\n"}
            Tem pouca ou nenhuma paciência com os que eles julgam ser hipócritas
            ou injustos. {"\n"}
            Eles claramente tendem a dizer o que eles sentem a respeito deles,
            querendo eles ouvirem ou não.{"\n"}
            As vezes eles se envolvem em situações além de suas capacidades e
            nesse instante eles podem acabar sendo perdedores ao invés de
            ganhadores. {"\n"}
            Não tem senso do perigo. Ë feroz quando acha que enfrenta um inimigo
            potencial. {"\n"}
            Agem como se a melhor defesa fosse um bom ataque. Quando estão
            irados seus comentários irão ferir. Eles são atacados por pessoas
            que não os entende quando se trata de novos projetos ou ideias.{" "}
            {"\n"}
            No entanto os ataques não terminaram em ferimentos e algumas vezes
            precipitarão conversações que irão clarear desentendimentos de ambas
            as partes.{"\n"}
            Em equilíbrio eles veem claramente aspectos que ficam nublados na
            vida. {"\n"}
            Eles são capazes de ver claramente como as coisas devem ser na
            Terra. {"\n"}
            Esta é a sua força, a habilidade de começar coisas novas de uma boa
            maneira, ou coisas estabelecidas no seu próprio caminho.{"\n"}
            Eles verdadeiramente querem fazer o bem e ver as coisas se
            desdobrarem da melhor maneira. {"\n"}
            São otimistas por natureza, grande força de vontade para suas
            determinações de ver as suas coisas certas. {"\n"}
            São independentes e pensadores e sempre sinceros sobre o que elas
            pensam e sentem. {"\n"}
            Muito embora, as vezes, pareçam rudes, geralmente tomam o cuidado
            suficiente antes de agir. {"\n"}
            Sua natureza é as vezes aberta, no entanto não se concentram por
            muito tempo, e cansam-se quando mal começaram uma atividade. Eles
            sentem que as coisas podem funcionar bem sem a presença deles.{" "}
            {"\n"}
            Para equilibrar suas energias eles precisam aprender a ter mais
            paciência e estabilidade.{"\n"}
            Eles tendem a ser fisicamente fortes e podem manter a boa saúde se
            eles se lembrarem dos próprios cuidados. O elemento fogo, faz
            intensificar sua natureza, lhe dando mais energia e penetração.{" "}
            {"\n"}
            Mas do que outra lua , esta deve se guardar de brilhar tão
            intensamente, que acabe perdendo sua própria energia. {"\n"}
            Devem aprender a temperar energia que o fogo lhe dá, para que o fogo
            interior possa trazer calor e luz para com as coisas que eles entram
            em contato. Os nascidos sobre esta lua recebem ajuda no sentido de
            encontrar caminhos e meios de trazerem evolução espiritual para eles
            e os outros.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            According to Sun Bear, it is the Moon of the Blossoming of Trees,
            Time of Awakening and New Beginnings.{"\n"} For Kenneth Meadows and
            in the Eagle's Flight Study Circle, it is called the Moon of New
            Beginnings.{"\n"}
            It is the first Moon of Wabun, the Guardian Spirit of the East,
            occurring during the equinox. {"\n"} The color is yellow, and it is
            influenced by the Thunderbird Clan. {"\n"} The Fire Opal can teach
            people in this position the need for water—emotions—to temper their
            fiery energies. {"\n"} The Dandelion can show the benefits of both
            grounding oneself and soaring. {"\n"} The Red Hawk can demonstrate
            the joy of freedom and distant, clear visibility. {"\n"} This Moon
            teaches us about energy, intensity, catalytic change, fearlessness,
            and opportunism. This position may reveal our leadership skills, the
            vastness of our own spirit, and the extent of our clear vision.{" "}
            {"\n"} People born under this moon need to learn to channel their
            energies, flow with their emotions, and be more patient with others.
            {"\n"} If you were born under this moon, you have the gift of
            balance and harmony, and of understanding the messages of your heart
            through introspection and strength. {"\n"} You must truly learn what
            balance is, even if it requires feeling discomfort to do so. In
            general, those born under this moon are kind and loving. {"\n"} They
            are truly concerned about the well-being of others. When in this
            state, they have the power to absorb and reflect light to everyone
            they meet. {"\n"} They can be a relief for the wounds of others,
            whatever the cause.{"\n"} Their true concern for people gives others
            the push they need to get back on track. {"\n"} When out of balance,
            they have the power to generate deep depressions or confusion. They
            tend to swing back and forth in a short period of time. They can
            quickly go from one idea, concept, or mood to its opposite,
            depending on what seems best to them at that particular moment.{" "}
            {"\n"} However, when they find their point of balance, which lies
            within themselves, they access special powers for the good of those
            around them, often becoming talented healers or mediums of good
            energy. {"\n"} They become nervous, irritated, or paranoid if they
            cannot return to balance. {"\n"} They are responsible, intelligent,
            and able to learn all perspectives or ideas they can perceive.{"\n"}{" "}
            They are naturally adaptable and accustomed to living in a world of
            exciting changes. Changes in the psychic world are not likely to
            shake them greatly. {"\n"} They are capable of teaching others how
            to combine the energy of the Sky with that of the Earth, thus
            helping to bring balance among those around them. {"\n"} They can
            help find balance between man and nature.{"\n"} They may explore
            their feelings of participation and be loyal to any groups they wish
            to be involved with. A goal they always carry in their heart is to
            help others. {"\n"} If they use their introspection to first look
            within themselves, they will quickly reach balance and be able to
            help others.{"\n"}
            {"\n"}
            This moon teaches about the paradoxes of life itself, in a more
            direct and intense way, through personal experience. {"\n"} It
            teaches how to show physical affection and feel comfortable, both in
            the Sky and on Earth, and the understanding of relationships with
            groups.{"\n"}
            {"\n"}
            Those born under this moon must be careful not to become completely
            indecisive, and so changeable that they end up confusing themselves.
            {"\n"} They enjoy being in situations that allow them to put their
            intense mental, physical, or emotional activity into practice.{" "}
            {"\n"} They are mostly open, willing to listen to any new ideas or
            philosophies.{"\n"} They accept things that later prove to be
            harmful to themselves. {"\n"} They may end up in wrong situations or
            under certain stress, and there they may become divided and lose the
            vitality that gives them their fire and shine.{"\n"} They can be
            those who constantly shine with nuances of fire energy, or they can
            be those who, like a flash, the vitality of fire bursts within them,
            or they may have constant formations of fire that will constantly
            glow. {"\n"} It all depends on what they have learned about the fire
            of life that flows easily through them.{"\n"} It is rare to find
            those who have managed to control their energy to the point that it
            is always available to them. {"\n"} They are very valuable because
            they can not only start projects, but also keep them going with the
            strength of their energy. {"\n"} They are often the symbol of hope
            for a new idea struggling to be born. They are catalysts capable of
            turning an idea into reality. {"\n"} They have a direct connection
            with the Sun and with fire. {"\n"} Their connection with the moon
            and emotions is their challenge, and essential for successful
            learning, in the sense of using their energies well. {"\n"} Their
            fire comes from their emotions, which move faster than most
            people’s. They are afraid of their emotional complexities and of
            other people.{"\n"} The Moon of the Blossoming of Trees injects a
            higher level of energy to those born under it. {"\n"} This moon
            governs the fastest growing times on Earth. It brings a rapid growth
            and change energy. {"\n"} It helps the natives of this moon to have
            an apparent adaptability in moving from one philosophy or project to
            another.{"\n"} They tend to show up everywhere, starting with the
            fact that they jump from one project to another. {"\n"} This habit
            doesn't make it easy for them to meet people who have trouble
            dealing with their energy levels, and don't understand the benefits
            they can bring to things that interest them. {"\n"} They can be very
            interesting to those who know how to understand them and make use of
            their ideas. {"\n"} As long as they are sincere with themselves,
            they can clear ideas and things in people they come into contact
            with. When they are sincere with themselves, they don't like
            encountering falsehoods or manipulations in others, and will try to
            convince with all their soul that their qualities are present.{" "}
            {"\n"} They are sincere and often right in what they do.{"\n"} They
            are stubborn and can acquire headaches and other ailments in their
            heads. {"\n"} They tend to accidentally bump their heads more than
            others because their fast-paced nature sometimes makes them not look
            around. {"\n"} People born under this moon are mostly big in spirit
            or body. They have the ability to spread their wings over a great
            distance. {"\n"} They live hunting for new things to do, new
            projects, new areas to explore, philosophies, etc. {"\n"} They tend
            to have clear and dark phases. {"\n"} In the clear, they are
            pleasant and open to everything. {"\n"} In the dark, they want to
            fly off, alone, to somewhere to see what might have gone wrong for
            them. {"\n"} They tend to be fearless, going after what they believe
            in. {"\n"} They have little or no patience with those they judge to
            be hypocritical or unjust. {"\n"} They clearly tend to say what they
            feel about them, whether they want to hear it or not.{"\n"}{" "}
            Sometimes they get involved in situations beyond their abilities and
            at that moment, they may end up being losers rather than winners.{" "}
            {"\n"} They have no sense of danger. They are fierce when they think
            they are facing a potential enemy. {"\n"} They act as if the best
            defense is a good attack. When they are angry, their comments will
            hurt. They are attacked by people who don't understand them when it
            comes to new projects or ideas. {"\n"} However, the attacks do not
            end in injuries, and sometimes will prompt conversations that will
            clear up misunderstandings on both sides.{"\n"} In balance, they see
            clearly aspects that remain clouded in life. {"\n"} They are capable
            of seeing clearly how things should be on Earth. {"\n"} This is
            their strength, the ability to start things in a good way, or things
            already established on their own path.{"\n"} They truly want to do
            good and see things unfold in the best way. {"\n"} They are
            naturally optimistic, with great willpower for their determination
            to see their things right. {"\n"} They are independent thinkers and
            always sincere about what they think and feel. {"\n"} Although
            sometimes they may seem rude, they usually take enough care before
            acting. {"\n"} Their nature is sometimes open, but they don’t focus
            for long, and get tired when they have barely started an activity.
            They feel that things can work well without their presence. {"\n"}{" "}
            To balance their energies, they need to learn more patience and
            stability.{"\n"} They tend to be physically strong and can maintain
            good health if they remember to care for themselves. The fire
            element intensifies their nature, giving them more energy and
            penetration. {"\n"} But more than any other moon, this one must
            guard against shining so intensely that it loses its own energy.{" "}
            {"\n"} They must learn to temper the energy that fire gives them, so
            that their inner fire can bring warmth and light to the things they
            come into contact with. Those born under this moon receive help in
            finding paths and ways to bring spiritual evolution for themselves
            and others.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Secondo Sun Bear è la Luna della Fioritura degli Alberi, il Tempo
            del Risveglio e dei Nuovi Inizi.{"\n"} Per Kenneth Meadows e il
            Cerchio di Studio del Volo dell'Aquila, la chiameremo la Luna dei
            Nuovi Inizi.{"\n"}È la prima Luna di Wabun, lo Spirito Guardiano
            dell'Est, che si verifica durante l'equinozio.{"\n"} Il colore è
            giallo e riceve l'influenza del Clan dell'Uccello Tuono.{"\n"}{" "}
            L'Opale di Fuoco può insegnare alle persone in questa posizione la
            necessità di acqua – le emozioni – per temperare le loro energie
            infuocate.{"\n"} Il Dente di Leone può mostrare i vantaggi di
            mettere radici, così come di volare.{"\n"} Il Falco Rosso può
            dimostrare la gioia della libertà e di una visibilità chiara e
            lontana.{"\n"} Questa Luna ci insegna sull'energia, l'intensità, il
            cambiamento catalizzatore, il coraggio e l'opportunismo. Questa
            posizione potrebbe mostrarci le nostre abilità di leadership, la
            vastità del nostro spirito e l'estensione della nostra visibilità
            chiara.{"\n"} Le persone che vivono sotto questa luna devono
            imparare a canalizzare le loro energie, a fluire con le loro
            emozioni e a essere più pazienti con gli altri.{"\n"} Se sei nato
            sotto questa luna, hai il dono dell'equilibrio e dell'armonia, e
            della comprensione dei messaggi del tuo cuore, attraverso la tua
            introspezione e forza.{"\n"} Devi davvero imparare cosa sia
            l'equilibrio, anche se questo richiede di provare disagio per farlo.
            In generale, coloro che sono nati sotto questa luna sono gentili e
            amorevoli.{"\n"} Sono davvero preoccupati per il benessere degli
            altri. Quando sono in questo stato, possiedono la forza di assorbire
            e riflettere la luce a tutti coloro che incontrano.{"\n"} Possono
            essere un sollievo per le ferite degli altri, qualunque sia stata la
            causa.{"\n"} Il loro vero interesse per le persone dà agli altri la
            spinta di cui hanno bisogno per tornare sulla strada giusta.{"\n"}{" "}
            Quando sono fuori equilibrio, hanno la forza di generare profonde
            depressioni o confusione. Tendono a passare da un lato all'altro in
            un breve periodo di tempo. Possono passare rapidamente da un'idea,
            concetto o umore al suo opposto, a seconda di quello che sembra
            essere meglio in quel particolare momento.{"\n"} Tuttavia, quando
            trovano il loro punto di equilibrio, che si trova dentro di loro,
            accedono a poteri speciali per il bene di coloro che li circondano,
            diventando normalmente guaritori di talento o mediatori di energie
            positive.{"\n"} Si agitano, si irritano o diventano paranoici se non
            riescono a tornare in equilibrio.{"\n"} Sono responsabili,
            intelligenti e capaci di comprendere tutti i punti di vista o le
            idee che riescono a percepire.{"\n"} Sono, per natura, adattabili e
            abituati a vivere in un mondo di cambiamenti emozionanti. I
            cambiamenti nel mondo psichico non li scossero molto.{"\n"} Sono in
            grado di insegnare agli altri come combinare l'energia del Cielo con
            quella della Terra, aiutando così a portare equilibrio tra chi li
            circonda.{"\n"} Possono aiutare a trovare un equilibrio tra l'uomo e
            la natura.{"\n"} Possono esplorare i loro sentimenti di
            partecipazione e rimanere fedeli a qualsiasi gruppo con cui scelgano
            di associarsi. Un obiettivo che portano sempre nel cuore è quello di
            aiutare gli altri.{"\n"} Se usano la loro introspezione per guardare
            prima dentro se stessi, raggiungeranno rapidamente l'equilibrio e
            saranno in grado di aiutare gli altri.{"\n"}
            {"\n"}
            Questa luna insegna i paradossi della vita stessa, in modo più
            diretto e intenso, attraverso l'esperienza personale.{"\n"} Insegna
            come mostrare affetto fisico e come sentirsi a proprio agio, sia nel
            Cielo che sulla Terra, e la comprensione delle relazioni con i
            gruppi.{"\n"}
            {"\n"}I nati sotto questa luna devono fare attenzione a non essere
            completamente indecisi, e così mutevoli da confondersi da soli.
            {"\n"} Amano trovarsi in situazioni che permettano di mettere in
            pratica la loro intensa attività mentale, fisica o emozionale.{"\n"}{" "}
            Per lo più sono aperti, disposti ad ascoltare qualsiasi nuova idea o
            filosofia.{"\n"} Accettano cose che in seguito si riveleranno
            dannose per loro stessi.{"\n"} Possono trovarsi in situazioni
            sbagliate o sotto un certo stress, e allora possono dividersi e
            perdere la vitalità che deriva dal loro fuoco e dalla loro
            brillantezza.{"\n"} Possono essere quelli che brillano costantemente
            con sfumature di energia di fuoco o quelli in cui la vitalità del
            fuoco appare improvvisamente, oppure possono avere formazioni
            costanti e fuoco che continua a fosforesce.{"\n"} Tutto dipenderà da
            ciò che hanno imparato riguardo al fuoco della vita, che scorre
            facilmente attraverso di loro.{"\n"} È raro trovare qualcuno che sia
            riuscito a controllare la propria energia in modo che sia sempre
            disponibile.{"\n"} Sono molto preziosi, perché non solo possono
            iniziare progetti, ma anche mantenerli in corso grazie alla forza
            della loro energia.{"\n"} Sono comunemente il simbolo di speranza
            per una nuova idea che sta lottando per nascere. Sono catalizzatori
            capaci di trasformare un'idea in realtà.{"\n"} Hanno una connessione
            diretta con il Sole e con il fuoco.{"\n"} La loro connessione con la
            luna e le emozioni è la loro sfida, ed è essenziale per un
            apprendimento di successo, nel senso di usare correttamente le loro
            energie.{"\n"} Il loro fuoco proviene dalle loro emozioni, che si
            muovono più velocemente della maggior parte delle persone. Hanno
            paura delle loro complessità emotive e degli altri.{"\n"} La Luna
            della Fioritura degli Alberi inietta un livello maggiore di energia
            per coloro che nascono sotto di essa.{"\n"} Questa luna governa i
            periodi di crescita più rapidi della Terra. Porta un'energia di
            crescita rapida e cambiamento.{"\n"} Aiutando i nativi di questa
            luna ad avere un'adattabilità apparente nel passare da una filosofia
            o progetto all'altro.{"\n"} Tendono a comparire ovunque, partendo
            dal principio che saltano da un progetto all'altro.{"\n"} Questo
            comportamento non facilita loro la conoscenza di persone difficili
            con cui gestire il loro livello di energia, e che non capiscono i
            benefici che possono portare alle cose che li interessano.{"\n"}{" "}
            Possono essere molto interessanti per coloro che sanno come capirli
            e sfruttare le loro idee.{"\n"} Finché sono sinceri con se stessi,
            possono purificare idee e cose nelle persone con cui entrano in
            contatto. Quando sono sinceri con se stessi, non amano incontrare
            falsità o manipolazioni negli altri, e cercheranno di convincere con
            tutta l'anima che le loro qualità sono evidenti.{"\n"} Sono sinceri
            e solitamente precisi in quello che fanno.{"\n"} Sono testardi e
            possono soffrire di mal di testa e altri disturbi legati alla testa.
            {"\n"} Tendono a sbattere accidentalmente la testa più degli altri,
            poiché il loro comportamento accelerato a volte li fa non guardare
            intorno.{"\n"} Le persone nate sotto questa luna sono per lo più
            grandi, sia nello spirito che nel corpo. Hanno la capacità di aprire
            le loro ali su un ampio raggio.{"\n"} Vivono cacciando cose nuove da
            fare, nuovi progetti, nuove aree da esplorare, filosofie, ecc.{"\n"}{" "}
            Tendono ad avere fasi chiare e scure.{"\n"} Nelle fasi chiare sono
            piacevoli e aperti a tutto.{"\n"} Nelle fasi scure, vogliono volare
            via, da soli, in qualche posto per vedere cosa potrebbe essere
            andato storto per loro.{"\n"} Tendono ad essere temerari, andando
            dietro a ciò che credono.{"\n"} Hanno poca o nessuna pazienza con
            chi giudicano essere ipocriti o ingiusti.{"\n"} Tendono chiaramente
            a dire ciò che pensano di loro, che gli altri lo vogliano sentire o
            meno.{"\n"} A volte si coinvolgono in situazioni che vanno oltre le
            loro capacità e in quel momento potrebbero finire per essere
            perdenti invece di vincenti.{"\n"} Non hanno senso del pericolo.
            Sono feroci quando pensano di affrontare un nemico potenziale.{"\n"}{" "}
            Agiscono come se la miglior difesa fosse un buon attacco. Quando
            sono arrabbiati, i loro commenti possono ferire. Sono attaccati da
            persone che non li capiscono quando si tratta di nuovi progetti o
            idee.{"\n"} Tuttavia, gli attacchi non portano a ferite e a volte
            porteranno a conversazioni che chiariranno i malintesi da entrambe
            le parti.{"\n"} In equilibrio, vedono chiaramente gli aspetti che
            sono offuscati nella vita.{"\n"} Sono in grado di vedere chiaramente
            come le cose dovrebbero essere sulla Terra.{"\n"} Questa è la loro
            forza, la capacità di iniziare nuove cose in modo positivo, o cose
            stabilite nel loro proprio cammino.{"\n"} Vogliono davvero fare del
            bene e vedere le cose svilupparsi nel miglior modo possibile.{"\n"}{" "}
            Sono ottimisti per natura, con una grande forza di volontà per
            realizzare le loro determinazioni e far andare le cose per il verso
            giusto.{"\n"} Sono indipendenti e pensatori, e sempre sinceri su
            quello che pensano e sentono.{"\n"} Anche se a volte sembrano
            sgarbati, generalmente prestano abbastanza attenzione prima di
            agire.{"\n"} La loro natura è a volte aperta, ma non si concentrano
            per molto tempo e si stancano quando non hanno nemmeno iniziato
            un'attività. Sentono che le cose possono funzionare bene senza la
            loro presenza.{"\n"} Per equilibrare le loro energie, devono
            imparare ad avere più pazienza e stabilità.{"\n"} Tendono ad essere
            fisicamente forti e possono mantenere una buona salute se si
            ricordano di prendersi cura di sé stessi. L'elemento fuoco
            intensifica la loro natura, dando loro più energia e penetrazione.
            {"\n"} Ma più di ogni altra luna, questa deve guardarsi dal brillare
            così intensamente da perdere la propria energia.{"\n"} Devono
            imparare a temperare l'energia che il fuoco gli dà, affinché il
            fuoco interiore possa portare calore e luce alle cose con cui
            entrano in contatto. I nati sotto questa luna ricevono aiuto nel
            trovare modi e mezzi per portare evoluzione spirituale a loro stessi
            e agli altri.
          </Text>
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
    height: 300,
    width: 350,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20
  },

  image: {
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
