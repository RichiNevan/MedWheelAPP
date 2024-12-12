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
          <Text style={styles.title}>Lua dos Ventos Fortes</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Strong Winds</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna dei Venti Forti</Text>
        )}

        <View style={styles.imageView}></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Esta lua acompanha rápidas mudanças na atmosfera, quando os ventos
            trazem turbulências, as temperaturas mais mornas e chuvas preparam a
            terra para o novo período de florescimento.{"\n"}
            Vão encerrando os períodos de escuridão, a Terra prepara-se para
            meses mais quentes. {"\n"}
            Esse período que se aproxima da primavera, é como de começássemos a
            despertar de um sono, mas, ainda não estamos totalmente acordados.{" "}
            {"\n"}O corpo físico vai sendo recarregado, mas a consciência está
            ainda absorvendo as experiências dos sonhos. {"\n"}É como se fosse
            um período fora do tempo.{"\n"} Um limiar entre o mundo físico e o
            espiritual. A energia desta lua, ajuda-nos na reconexão do
            significado da vida e o valor da paz. {"\n"}É o momento onde podemos
            ver com novos olhos a alegria de ser e estar, o milagre da vida, de
            cada amanhecer.{"\n"}
            Na Roda Medicinal de Sun Bear, é a Lua dos Grandes Ventos, a última
            lua do inverno que pode nos ajudar a descobrir o poder natural de
            medicina e a profundidade de nossas habilidades psíquicas. {"\n"}
            Onde aprenderemos sobre a sensibilidade profunda, o desejo pela
            espiritualidade, expressar nossos verdadeiros sentimentos, e nossa
            necessidade de se firmar na Terra. {"\n"}
            As pessoas vivenciando esta lua podem estar sujeitas a melancolias.{" "}
            {"\n"}
            Esta lua ensina a temperar sua sensibilidade e a ter maior senso de
            realidade.{"\n"}
            No xamanismo sabemos que, para criar alguma coisa nova, primeiro
            algo precisa ser destruído. A velha forma é destruída e de sua fonte
            energética surge algo novo. {"\n"}A própria natureza nos ensina
            isso, as estações nos ensinam isso.{"\n"}O outono faz desaparecer o
            sol do verão, acaba com as folhas verdes e torna a paisagem seca.{" "}
            {"\n"}O inverno extermina os pastos com o frio, os animais e os
            homens ficam mais frágeis. {"\n"}A primavera destrói o frio, derrete
            neves, e as inundações arrancam árvores e aterros ao longo dos rios.{" "}
            {"\n"}O dia mais longo comprime as noites escuras e destrói o frio
            do inverno. {"\n"}O Sol do verão resseca a terra e gradativamente
            seca a água e pastos. {"\n"}O verão acaba com a primavera e morre no
            outono. A natureza mostra as destruições quando reforma a terra e os
            mares e cria novas paisagens. {"\n"}
            Terremotos, vulcões, secas, erosões, maremotos, etc. No xamanismo,
            acreditamos que é necessária a morte ou destruição da maneira
            habitual de vermos o mundo. {"\n"}
            Destruímos velhas crenças e modos de viver. Destruição e morte são
            partes da rede de poder. {"\n"}
            Quando aprendemos a lidar com isso, livrando-nos daquilo que não nos
            serve, nossos apegos se tornam menos poderosos.{"\n"}
            Depois de criarmos vácuo, espaço, a proposta é re-experimentar o
            nascimento, reviver fisiologicamente, psicologicamente e
            espiritualmente o momento da primeira respiração e liberar o trauma
            disso. {"\n"}
            Dissolver padrões de energia na mente e no corpo.{"\n"}
            Ao renascermos, vamos deixando para traz aquilo que nos incomodava,
            assim nasce um ser mais livre. {"\n"}
            Assim como a cobra troca sua pele, trocamos nossos programas
            negativos para vivermos a vida com excelência.{"\n"}
            Essa viagem é feita com nossos aliados espirituais, nosso animal
            guardião, ao som do tambor e da simulação de um útero, onde
            percorreremos o trajeto que nos levará ao renascimento.{"\n"}O
            Inverno marca um tempo maior para os contadores de histórias, para a
            comunicação com a “Sabedoria Superior”. Os xamãs foram os primeiros
            contadores de histórias. {"\n"}
            Através das histórias se conserva o conhecimento através das
            gerações. A narração oral da história e tradição foi o aspecto
            essencial das religiões nativas. {"\n"}O Contador de Histórias
            criava vínculo, fazia curas, clarificava a identidade, celebrava os
            paradoxos da vida, os divertimentos. Ele também estava presente
            mantendo ou criticando a história, servia de reforço cultural e
            religioso. Todas as tribos tinham seus contadores de histórias.{" "}
            {"\n"}
            Algumas culturas tinham homens e mulheres contadores de histórias.
            Para ser um contador de histórias o aspirante deve dedicar-se a
            conhecer as histórias da comunidade, dos ancestrais, da cosmologia,
            e é claro ter dons de oratória e ser aceito pelos Anciões. {"\n"}
            Muitas das histórias são visões, sonhos, insights. {"\n"}O Contador
            de histórias tem um posto no Conselho dos Anciões. {"\n"}
            Ele possui o dom de falar a alguém em particular sem se dirigir a
            ele.{"\n"}
            Todos os sábios nativos preferiam ensinar por meio de histórias a
            apontar diretamente os defeitos de alguém. {"\n"}
            Todos os mestres iluminados desta Terra, sempre se utilizavam de
            histórias para passar suas verdades, pois eram sabedores que as
            vêzes a verdade é muito dura para ser aceita. {"\n"}
            Veja o exemplo de Jesus que falava por meio de parábolas, de Buda,
            Lao-Tsé e outros.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            This moon accompanies rapid changes in the atmosphere, when the
            winds bring turbulence, warmer temperatures and rains prepare the
            earth for the new blooming period.{"\n"}
            The periods of darkness are coming to an end, and the Earth prepares
            for warmer months.{"\n"}
            This period, which approaches spring, is like we are waking up from
            a sleep, but we are not fully awake yet.{"\n"}
            The physical body is being recharged, but consciousness is still
            absorbing the experiences of dreams.{"\n"}
            It is like a time outside of time.{"\n"}A threshold between the
            physical world and the spiritual. The energy of this moon helps us
            reconnect with the meaning of life and the value of peace.{"\n"}
            It is a moment where we can see with new eyes the joy of being and
            living, the miracle of life, with every dawn.{"\n"}
            In the Sun Bear's Medicinal Wheel, it is the Moon of the Great
            Winds, the last moon of winter that can help us discover the natural
            power of medicine and the depth of our psychic abilities.{"\n"}
            Here we will learn about deep sensitivity, the desire for
            spirituality, how to express our true feelings, and our need to
            ground ourselves on Earth.{"\n"}
            People experiencing this moon may be subject to melancholies.{"\n"}
            This moon teaches us to temper our sensitivity and to have a greater
            sense of reality.{"\n"}
            In shamanism, we know that in order to create something new,
            something must first be destroyed. The old form is destroyed, and
            from its energetic source, something new emerges.{"\n"}
            Nature itself teaches us this, the seasons teach us this.{"\n"}
            Autumn makes the summer sun disappear, ends the green leaves, and
            turns the landscape dry.{"\n"}
            Winter exterminates the pastures with cold, animals and humans
            become more fragile.{"\n"}
            Spring destroys the cold, melts the snow, and floods uproot trees
            and embankments along the rivers.{"\n"}
            The longest day compresses the dark nights and destroys the cold of
            winter.{"\n"}
            The summer sun dries the earth and gradually dries the water and
            pastures.{"\n"}
            Summer ends spring and dies in autumn. Nature shows destruction when
            it reforms the earth and seas and creates new landscapes.{"\n"}
            Earthquakes, volcanoes, droughts, erosions, tsunamis, etc. In
            shamanism, we believe that death or destruction of the way we
            usually see the world is necessary.{"\n"}
            We destroy old beliefs and ways of living. Destruction and death are
            parts of the web of power.{"\n"}
            When we learn to deal with this, freeing ourselves from what no
            longer serves us, our attachments become less powerful.{"\n"}
            After creating a vacuum, space, the goal is to re-experience birth,
            to physiologically, psychologically, and spiritually relive the
            moment of the first breath and release the trauma of it.{"\n"}
            Dissolve energy patterns in the mind and body.{"\n"}
            As we are reborn, we leave behind what troubled us, thus creating a
            freer being.{"\n"}
            Just as the snake sheds its skin, we replace our negative programs
            to live life with excellence.{"\n"}
            This journey is made with our spiritual allies, our spirit animal,
            to the sound of the drum and the simulation of a womb, where we will
            travel the path that leads us to rebirth.{"\n"}
            Winter marks a longer time for storytellers, for communication with
            the "Higher Wisdom." The shamans were the first storytellers.{"\n"}
            Through stories, knowledge is preserved across generations. The oral
            storytelling tradition was the essential aspect of native religions.
            {"\n"}
            The Storyteller created bonds, performed healing, clarified
            identity, celebrated the paradoxes of life, and entertainment. He
            was also present, maintaining or criticizing the story, serving as a
            cultural and religious reinforcement. All tribes had their
            storytellers.{"\n"}
            Some cultures had male and female storytellers. To be a storyteller,
            the aspirant must dedicate themselves to learning the community's
            stories, the ancestors' stories, cosmology, and of course, have
            oratory skills and be accepted by the Elders.{"\n"}
            Many of the stories are visions, dreams, insights.{"\n"}
            The Storyteller has a seat in the Council of Elders.{"\n"}
            He has the gift of speaking to someone in particular without
            directly addressing them.{"\n"}
            All native sages preferred teaching through stories rather than
            pointing directly at someone's flaws.{"\n"}
            All the enlightened masters of this Earth always used stories to
            pass on their truths because they knew that sometimes the truth is
            too hard to accept.{"\n"}
            See the example of Jesus who spoke through parables, of Buddha,
            Lao-Tzu, and others.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Questa luna accompagna rapidi cambiamenti nell'atmosfera, quando i
            venti portano turbolenze, le temperature più miti e le piogge
            preparano la terra per il nuovo periodo di fioritura.{"\n"}I periodi
            di oscurità stanno per finire, e la Terra si prepara per i mesi più
            caldi.{"\n"}
            Questo periodo, che si avvicina alla primavera, è come se ci
            stessimo svegliando da un sonno, ma non siamo ancora completamente
            svegli.{"\n"}
            Il corpo fisico si sta ricaricando, ma la coscienza sta ancora
            assorbendo le esperienze dei sogni.{"\n"}È come un periodo fuori dal
            tempo.{"\n"}
            Un confine tra il mondo fisico e quello spirituale. L'energia di
            questa luna ci aiuta a riconnetterci con il significato della vita e
            il valore della pace.{"\n"}È un momento in cui possiamo vedere con
            occhi nuovi la gioia di essere e di vivere, il miracolo della vita,
            con ogni alba.{"\n"}
            Nella Ruota Medicinale di Sun Bear, è la Luna dei Grandi Venti,
            l'ultima luna dell'inverno che può aiutarci a scoprire il potere
            naturale della medicina e la profondità delle nostre abilità
            psichiche.{"\n"}
            Qui impareremo sulla sensibilità profonda, il desiderio di
            spiritualità, come esprimere i nostri veri sentimenti, e il nostro
            bisogno di radicarci sulla Terra.{"\n"}
            Le persone che vivono questa luna possono essere soggette a
            malinconie.{"\n"}
            Questa luna ci insegna a temperare la nostra sensibilità e ad avere
            un maggiore senso della realtà.{"\n"}
            Nel xamanismo, sappiamo che per creare qualcosa di nuovo, prima
            qualcosa deve essere distrutto. La vecchia forma viene distrutta, e
            dalla sua fonte energetica emerge qualcosa di nuovo.{"\n"}
            La natura stessa ci insegna questo, le stagioni ci insegnano questo.
            {"\n"}
            L'autunno fa scomparire il sole estivo, finisce le foglie verdi e
            rende il paesaggio secco.{"\n"}
            L'inverno stermina i pascoli con il freddo, gli animali e gli esseri
            umani diventano più fragili.{"\n"}
            La primavera distrugge il freddo, scioglie la neve e le inondazioni
            abbattano alberi e terre lungo i fiumi.{"\n"}
            Il giorno più lungo comprime le notti scure e distrugge il freddo
            dell'inverno.{"\n"}
            Il sole estivo asciuga la terra e gradualmente asciuga l'acqua e i
            pascoli.{"\n"}
            L'estate finisce la primavera e muore nell'autunno. La natura mostra
            la distruzione quando riforma la terra e i mari e crea nuovi
            paesaggi.{"\n"}
            Terremoti, vulcani, siccità, erosioni, tsunami, ecc. Nel xamanismo,
            crediamo che la morte o la distruzione del modo in cui vediamo
            abitualmente il mondo sia necessaria.{"\n"}
            Distruggiamo vecchie credenze e modi di vivere. La distruzione e la
            morte sono parti della rete del potere.{"\n"}
            Quando impariamo a gestirlo, liberandoci di ciò che non ci serve
            più, i nostri attaccamenti diventano meno potenti.{"\n"}
            Dopo aver creato un vuoto, uno spazio, l'obiettivo è
            ri-esperimentare la nascita, rivivere fisiologicamente,
            psicologicamente e spiritualmente il momento del primo respiro e
            liberare il trauma di esso.{"\n"}
            Dissolvere i modelli energetici nella mente e nel corpo.{"\n"}
            Quando rinascendo, lasciamo indietro ciò che ci dava fastidio,
            creando così un essere più libero.{"\n"}
            Proprio come il serpente cambia pelle, sostituiamo i nostri
            programmi negativi per vivere la vita con eccellenza.{"\n"}
            Questo viaggio è fatto con i nostri alleati spirituali, il nostro
            animale guida, al suono del tamburo e della simulazione di un utero,
            dove percorreremo il cammino che ci porterà alla rinascita.{"\n"}
            L'inverno segna un tempo più lungo per i narratori, per la
            comunicazione con la "Saggezza Superiore". I sciamani sono stati i
            primi narratori di storie.{"\n"}
            Attraverso le storie, la conoscenza si conserva attraverso le
            generazioni. La narrazione orale della storia e della tradizione è
            stata l'aspetto essenziale delle religioni native.{"\n"}
            Il Narratore di Storie creava legami, compiva guarigioni, chiariva
            l'identità, celebrava i paradossi della vita, il divertimento. Era
            anche presente, mantenendo o criticando la storia, servendo come
            rinforzo culturale e religioso. Tutte le tribù avevano i loro
            narratori di storie.{"\n"}
            Alcune culture avevano narratori di storie uomini e donne. Per
            diventare un narratore di storie, l'aspirante deve dedicarsi a
            conoscere le storie della comunità, le storie degli antenati, la
            cosmologia, e naturalmente avere doti di oratoria ed essere
            accettato dagli Anziani.{"\n"}
            Molte delle storie sono visioni, sogni, intuizioni.{"\n"}
            Il Narratore di Storie ha un posto nel Consiglio degli Anziani.
            {"\n"}
            Ha il dono di parlare a qualcuno in particolare senza rivolgersi
            direttamente a lui.{"\n"}
            Tutti i saggi nativi preferivano insegnare tramite storie piuttosto
            che puntare direttamente i difetti di qualcuno.{"\n"}
            Tutti i maestri illuminati di questa Terra, si sono sempre avvalsi
            delle storie per trasmettere le loro verità, poiché sapevano che a
            volte la verità è troppo dura per essere accettata.{"\n"}
            Vedi l'esempio di Gesù che parlava tramite parabole, di Buddha,
            Lao-Tzu e altri.
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