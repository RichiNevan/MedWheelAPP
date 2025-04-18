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
          <Text style={styles.title}>Lua da Floraçao</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Florishing</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna della Fioritura</Text>
        )}

        {/* <View style={styles.imageView}></View> */}

        {language === "prt" && (
          <Text style={styles.testo}>
            Segundo Sun Bear é a Lua da Plantação do Milho, Tempo de
            Florescimento. {"\n"}Para Kenneth Meadows e na Roda de Estudos Voo
            da Águia chamaremos de Lua da Floração.{"\n"}
            Os nascidos nesta lua tem a ágata musgosa, o milefólio no vegetal e
            o veado no animal. {"\n"}
            São influenciados pelo elemento Ar.{"\n"}Esta é a terceira lua de
            Wabun, as suas cores são o verde e o branco e sua influência
            elemental é do Clã das Borboletas. {"\n"}A Ágata Musgosa ensina às
            pessoas desta posição a ver claramente seus laços com o reino
            mineral e vegetal. {"\n"}O Milefólio ensina sobre limpeza e
            fortalecimento. {"\n"}O Cervo demonstra a beleza da graça e do
            movimento rápido. Esta posição ensina sobre beleza em nós mesmos,
            nos outros e em nosso meio ambiente e sobre nossas próprias
            habilidades curadoras. {"\n"}
            Esta posição apontará qualquer ângulo cortante em nossa
            personalidade, a necessidade de equilibrar tempo e energia, e nossa
            capacidade de criar. {"\n"}
            Pessoas vivenciando esta lua, devem aprender a ser mais
            consistentes, menos suspeitos e mais dispostas a mostrar alguns dos
            seus próprios sentimentos profundos.{"\n"}
            Eles tem habilidades particulares de cura se aprenderem a
            desenvolve-las.{"\n"}
            Podem ter habilidades em qualquer campo que queiram trabalhar. São
            benéficos aos olhos dos que estão ao seu redor, e gostam de fazer os
            seus ambientes belos.{"\n"}
            Eles fortalecem energeticamente os que estão ao seu redor. {"\n"}
            São bons amigos que irão ajudar as pessoas em qualquer tipo de
            situações, e encoraja-las a abrirem-se e liberar qualquer
            aborrecimento, desde que você faça de uma maneira interessante, eles
            estarão mais contentes em ouvir o que tem a dizer, mas não se torne
            muito repetitivos com eles.{"\n"}
            Suas mentes são rápidas para permitirem a paciência para escutarem
            os mesmos problemas de novo e de novo. {"\n"}
            Quando você termina algo antes eles o seduzem através de suas reais
            intenções e seu charme. {"\n"}
            Eles gostam de gente e vão sinceramente tentar fazer o seu amigo se
            sentir melhor, não importa qual é o problema.{"\n"}
            Eles podem ficar um pouco nervosos se você tentar entrar numa área
            que ele considera muito pessoal e profunda. {"\n"}
            Sentem que se lhe escutarem de uma maneira tão aberta e honesta você
            vai esperar que ele faça o mesmo. {"\n"}
            São muito lentos em se abrirem das profundezas de seu ser a qualquer
            pessoa. {"\n"}
            Eles tem a dádiva de poder se gabar. {"\n"}
            Gostam de conversar sobre qualquer assunto, com qualquer um a não
            ser que o assunto seja muito pessoal que no momento apropriado irão
            trocar o tópico da conversação, tão fácil e charmosamente que você
            não irá nem notar que ele se esqueceu de responder a pergunta sobre
            si e sua vida.{"\n"}
            Por serem do elemento ar, aumenta sua tendência de rapidamente pular
            de uma coisa para a outra. {"\n"}
            Eles tendem a despender muito tempo flutuando no ar, examinando uma
            coisa atrás de outra e nunca realmente sendo capazes de se
            assentarem em qualquer coisa. {"\n"}
            {"\n"}
            No entanto a Lua da Plantação de Milho ajuda a trazer um pouco de
            estabilidade e sabedoria. {"\n"}
            São sensíveis, graciosos, movem-se com destreza e alerto. {"\n"}A
            natureza os ajuda em sua intuição e isso os ajuda a sentirem
            facilmente outras pessoas, pelo menos as da superfície.{"\n"}
            Desde que seus próprios sentimentos se movem tão rapidamente eles
            geralmente já experimentaram a maioria dos estados emocionais que os
            outros já passaram. {"\n"}
            Isso os ajuda a lhes dar a habilidade de ouvir, nem que seja com só
            uma orelha, e mesmo assim entender tudo aquilo que seus amigos e
            associados estão sentindo. {"\n"}
            Eles frequentemente sentem dificuldades pra ouvir os outros por
            completo, porque seus próprios pensamentos e sentimentos, estão
            avivados pelo que a outra pessoa está dizendo, seus próprios
            pensamentos começam a se mover por eles tão rapidamente, que eles
            sentem que devem expressá-los antes que eles fujam por completo.
            {"\n"}
            Eles são tão generosos e graciosos na maneira de trazer seus
            próprios sentimentos numa conversação, que você nem se dá conto que
            está sendo interrompido.{"\n"}
            Por causa de sua atenção ele irá sentir quando estão interrompendo
            muito e parar para ouvir mais atentamente para que você nunca vá
            embora com o sentimento que não lhe foi dada a sua melhor atenção.
            São espertos cheios de recursos, e criativos.{"\n"}
            Eles sabem como fazer algo belo dos mais simples materiais, tanto no
            nível físico como emocional. {"\n"}
            Eles são geralmente artistas, músicos, e essa arte lhes traz uma
            real sensação de preenchimento em suas almas.{"\n"}
            Eles tem uma grande gama de sons que eles mesmos fazem e que
            geralmente se escutam de uma maneira entusiástica. {"\n"}
            Esse entusiasmo é contagioso. Quando começa a rir, geralmente todos
            na sala estão lhe acompanhando.{"\n"}
            Eles tem lições que devem aprender sobre serem capazes de
            encontrarem um relacionamento que possam estar confortáveis
            suficientemente para abrirem as partes de seu ser que geralmente
            tentam esconder dos outros.{"\n"}
            Eles também necessitam aprender o valor de alguma consistência em
            suas vidas senão podem ficar a maior parte do seu tempo pulando de
            uma ideia para a outra sem nunca realmente completar o que eles
            querem. {"\n"}
            Encontram dificuldades para equilibrar o seu tempo e suas energias e
            organizar as suas vidas de uma maneira eficiente.{"\n"}
            Se eles não aprenderem a fazer essas coisas eles podem fazer de si
            próprios, portais de doenças que irão forçosamente diminuir o seu
            ritmo.{"\n"}
            Essa lua ensina sobre suas próprias habilidades para serem mais
            sensitivos, mais velozes, e apreciar a beleza em todas as suas
            formas. {"\n"}
            Ela revela as forças e as fraquezas que vem da energia vital
            correndo através deles tão rapidamente.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            According to Sun Bear, it is the Moon of the Corn Planting, Time of
            Blooming. {"\n"}For Kenneth Meadows and in the Eagle's Flight Study
            Wheel, we will call it the Moon of Flowering.{"\n"}
            Those born under this moon have moss agate, yarrow in the plant, and
            the deer in the animal. {"\n"}
            They are influenced by the Air element.{"\n"}This is the third moon
            of Wabun, its colors are green and white, and its elemental
            influence is from the Butterfly Clan. {"\n"}
            The Moss Agate teaches people of this position to clearly see their
            bonds with the mineral and plant kingdoms. {"\n"}
            Yarrow teaches about cleansing and strengthening. {"\n"}
            The Deer demonstrates the beauty of grace and quick movement. This
            position teaches about beauty in ourselves, others, and our
            environment, and about our own healing abilities. {"\n"}
            This position will point out any sharp angle in our personality, the
            need to balance time and energy, and our ability to create. {"\n"}
            People experiencing this moon should learn to be more consistent,
            less suspicious, and more willing to show some of their deeper
            feelings.{"\n"}
            They have particular healing abilities if they learn to develop
            them.{"\n"}
            They may have abilities in any field they wish to work in. They are
            beneficial in the eyes of those around them, and they enjoy making
            their environments beautiful.{"\n"}
            They energetically strengthen those around them. {"\n"}
            They are good friends who will help people in any type of situation,
            and encourage them to open up and release any frustration, as long
            as you do it in an interesting way, they will be happier to hear
            what you have to say, but don’t become too repetitive with them.
            {"\n"}
            Their minds are quick to allow the patience to listen to the same
            problems again and again. {"\n"}
            When you finish something, they seduce you through their true
            intentions and charm. {"\n"}
            They like people and will sincerely try to make their friend feel
            better, no matter what the problem is.{"\n"}
            They may become a little nervous if you try to enter an area they
            consider too personal and deep. {"\n"}
            They feel that if they listen to you in such an open and honest way,
            you will expect them to do the same. {"\n"}
            They are very slow to open up from the depths of their being to
            anyone. {"\n"}
            They have the gift of boasting. {"\n"}
            They like to talk about any subject, with anyone, unless the subject
            is too personal, at which point they will change the topic of
            conversation so smoothly and charmingly that you won’t even notice
            they forgot to answer the question about themselves and their life.
            {"\n"}
            Being of the air element, it increases their tendency to quickly
            jump from one thing to another. {"\n"}
            They tend to spend a lot of time floating in the air, examining one
            thing after another and never really being able to settle on
            anything. {"\n"}
            However, the Moon of Corn Planting helps bring some stability and
            wisdom. {"\n"}
            They are sensitive, graceful, move with dexterity and alertness.{" "}
            {"\n"}
            Nature helps them with their intuition, and this helps them easily
            feel other people, at least those on the surface.{"\n"}
            Since their own feelings move so quickly, they have usually already
            experienced most of the emotional states that others have gone
            through. {"\n"}
            This helps them give the ability to listen, even if just with one
            ear, and still understand everything that their friends and
            associates are feeling. {"\n"}
            They often find it difficult to listen to others completely because
            their own thoughts and feelings are heightened by what the other
            person is saying, and their own thoughts start moving so quickly
            that they feel they must express them before they completely escape.{" "}
            {"\n"}
            They are so generous and graceful in the way they bring their own
            feelings into a conversation that you don’t even realize you’re
            being interrupted.{"\n"}
            Because of their attention, they will feel when they are
            interrupting too much and stop to listen more attentively so that
            you never leave with the feeling that you weren’t given their best
            attention. They are clever, resourceful, and creative.{"\n"}
            They know how to make something beautiful from the simplest
            materials, both on a physical and emotional level. {"\n"}
            They are generally artists, musicians, and this art brings them a
            true sense of fulfillment in their souls.{"\n"}
            They have a wide range of sounds that they make themselves and
            generally listen to enthusiastically. {"\n"}
            This enthusiasm is contagious. When they start laughing, usually
            everyone in the room is joining in.{"\n"}
            They have lessons to learn about being able to find a relationship
            where they can feel comfortable enough to open up parts of their
            being that they usually try to hide from others.{"\n"}
            They also need to learn the value of some consistency in their
            lives, otherwise, they may spend most of their time jumping from one
            idea to another without ever really completing what they want.{" "}
            {"\n"}
            They find it difficult to balance their time and energy and organize
            their lives efficiently.{"\n"}
            If they don’t learn to do these things, they may create portals of
            illness for themselves that will force them to slow down.{"\n"}
            This moon teaches about their own abilities to be more sensitive,
            faster, and appreciate beauty in all its forms. {"\n"}
            It reveals the strengths and weaknesses that come from the vital
            energy rushing through them so quickly.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Secondo Sun Bear, è la Luna della Piantagione del Mais, Tempo di
            Fioritura. {"\n"}Per Kenneth Meadows e nella Ruota degli Studi Volo
            dell'Aquila, la chiameremo Luna della Fioritura.{"\n"}
            Coloro che sono nati sotto questa luna hanno l'agata musgosa,
            l'achillea nella pianta e il cervo nell'animale. {"\n"}
            Sono influenzati dall'elemento Aria.{"\n"}Questa è la terza luna di
            Wabun, i suoi colori sono il verde e il bianco, e la sua influenza
            elementale è del Clan delle Farfalle. {"\n"}
            L'Agata Musgosa insegna alle persone di questa posizione a vedere
            chiaramente i loro legami con i regni minerale e vegetale. {"\n"}
            L'Achillea insegna la purificazione e il rafforzamento. {"\n"}
            Il Cervo dimostra la bellezza della grazia e del movimento veloce.
            Questa posizione insegna la bellezza in noi stessi, negli altri e
            nel nostro ambiente, e le nostre stesse abilità curative. {"\n"}
            Questa posizione indicherà qualsiasi angolo tagliente nella nostra
            personalità, la necessità di bilanciare il tempo e l'energia, e la
            nostra capacità di creare. {"\n"}
            Le persone che vivono questa luna dovrebbero imparare a essere più
            coerenti, meno sospettose e più disposte a mostrare alcuni dei loro
            sentimenti più profondi.{"\n"}
            Hanno abilità particolari di guarigione se imparano a svilupparle.
            {"\n"}
            Possono avere abilità in qualsiasi campo vogliano lavorare. Sono
            benefici agli occhi di chi li circonda e amano rendere i loro
            ambienti belli.{"\n"}
            Rafforzano energeticamente chi li circonda. {"\n"}
            Sono buoni amici che aiuteranno le persone in qualsiasi tipo di
            situazione e le incoraggeranno ad aprirsi e liberare qualsiasi
            frustrazione, purché lo facciate in modo interessante, saranno più
            felici di ascoltare ciò che avete da dire, ma non diventate troppo
            ripetitivi con loro.{"\n"}
            Le loro menti sono veloci per permettere la pazienza di ascoltare
            gli stessi problemi più e più volte. {"\n"}
            Quando finisci qualcosa, ti seducono attraverso le loro vere
            intenzioni e il loro fascino. {"\n"}
            Amano le persone e cercheranno sinceramente di far sentire meglio il
            loro amico, non importa quale sia il problema.{"\n"}
            Possono diventare un po' nervosi se provi a entrare in un'area che
            considerano troppo personale e profonda. {"\n"}
            Sentono che se ti ascoltano in modo così aperto e onesto, ti
            aspetterai che facciano lo stesso. {"\n"}
            Sono molto lenti ad aprirsi dalle profondità del loro essere con
            chiunque. {"\n"}
            Hanno il dono di vantarsi. {"\n"}
            Amano parlare di qualsiasi argomento, con chiunque, a meno che
            l'argomento non sia troppo personale, momento in cui cambieranno il
            topic della conversazione così facilmente e con tanto fascino che
            non noterai nemmeno che si sono dimenticati di rispondere alla
            domanda su di sé e sulla loro vita.{"\n"}
            Essendo dell'elemento aria, aumenta la loro tendenza a saltare
            rapidamente da una cosa all'altra. {"\n"}
            Tendono a trascorrere molto tempo fluttuando nell'aria, esaminando
            una cosa dopo l'altra e non riuscendo mai veramente a stabilirsi su
            qualcosa. {"\n"}
            Tuttavia, la Luna della Piantagione del Mais aiuta a portare un po'
            di stabilità e saggezza. {"\n"}
            Sono sensibili, graziosi, si muovono con destrezza e attenzione.{" "}
            {"\n"}
            La natura li aiuta con la loro intuizione e questo li aiuta a
            sentire facilmente le altre persone, almeno quelle in superficie.
            {"\n"}
            Poiché i loro stessi sentimenti si muovono così velocemente, hanno
            generalmente già sperimentato la maggior parte degli stati emotivi
            che gli altri hanno attraversato. {"\n"}
            Questo li aiuta a dare loro la capacità di ascoltare, anche se solo
            con un orecchio, e capire comunque tutto ciò che i loro amici e
            associati stanno sentendo. {"\n"}
            Spesso trovano difficoltà ad ascoltare gli altri completamente,
            perché i loro stessi pensieri e sentimenti sono ravvivati da ciò che
            l'altra persona sta dicendo, i loro pensieri iniziano a muoversi
            così velocemente che sentono di doverli esprimere prima che sfuggano
            del tutto. {"\n"}
            Sono così generosi e graziosi nel modo in cui portano i propri
            sentimenti in una conversazione che non ti accorgi nemmeno che stai
            venendo interrotto.{"\n"}A causa della loro attenzione, sentiranno
            quando stanno interrompendo troppo e si fermeranno per ascoltare più
            attentamente, affinché tu non vada via con la sensazione che non ti
            sia stata data la loro migliore attenzione. Sono astuti, pieni di
            risorse e creativi.{"\n"}
            Sanno come fare qualcosa di bello con i materiali più semplici, sia
            a livello fisico che emotivo. {"\n"}
            Sono generalmente artisti, musicisti, e quest'arte porta loro una
            vera sensazione di realizzazione nelle loro anime.{"\n"}
            Hanno una vasta gamma di suoni che fanno loro stessi e che
            generalmente ascoltano con entusiasmo. {"\n"}
            Questo entusiasmo è contagioso. Quando iniziano a ridere, di solito
            tutti nella stanza li seguono.{"\n"}
            Hanno lezioni da imparare su come trovare una relazione in cui
            possano sentirsi abbastanza a loro agio da aprire le parti del loro
            essere che di solito cercano di nascondere agli altri.{"\n"}
            Devono anche imparare il valore di un po' di coerenza nelle loro
            vite, altrimenti potrebbero passare la maggior parte del loro tempo
            saltando da un'idea all'altra senza mai completare veramente ciò che
            vogliono. {"\n"}
            Trovano difficoltà nell'equilibrare il loro tempo e le loro energie
            e nell'organizzare le loro vite in modo efficiente.{"\n"}
            Se non imparano a fare queste cose, potrebbero creare per sé stessi
            dei portali di malattia che li costringeranno a rallentare.{"\n"}
            Questa luna insegna le proprie abilità per essere più sensibili, più
            veloci e apprezzare la bellezza in tutte le sue forme. {"\n"}
            Rivela le forze e le debolezze che provengono dall'energia vitale
            che scorre attraverso di loro così rapidamente.
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
