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
          <Text style={styles.title}>Lua dos Dias Longos</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Long Days</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna delle Lunghe Giornate</Text>
        )}

        <View style={styles.imageView}></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Segundo Sun Bear é a Lua do Sol Forte, Tempo dos Dias Quentes.{"\n"}{" "}
            Para Kenneth Meadows e na Roda de Estudos Voo da Águia chamaremos de
            Lua do Verão ou Lua dos Dias Longos.{"\n"}
            {"\n"}
            Os nascidos sob essa lua, tem a ágata cornalina no reino mineral, a
            rosa silvestre no vegetal e o pica-pau no reino animal. {"\n"}
            Ele pertence ao elemento água. {"\n"}É a primeira lua de Shawnodese,
            Espírito Guardião do Sul, e acontece na época do Solstício de Verão.{" "}
            {"\n"}
            Sua cor é Rosa e a influência elemental é do Clã dos Sapos.{"\n"}
            Da Ágata Cornalina, podemos aprender sobre sua forte conexão com o
            coração. {"\n"}
            Da Rosa Silvestre, sobre sua habilidade de curar e inspirar.{"\n"}
            Do Pica-Pau, sobre seu desejo de auto expressão. {"\n"}
            Enquanto trabalhamos com o Pica-Pau, devemos nos prevenir para não
            nos espojar em nossas emoções e temer tomar qualquer posição. {"\n"}
            Esta lua ensina sobre a importância das emoções e a necessidade de
            base e lar forte. {"\n"}
            As pessoas vivenciando a energia desta posição são intuitivas e
            selvagens em algumas maneiras de ser, mas conservadoras e amantes do
            lar em outras. {"\n"}
            Esta lua nos educará sobre a lei de relacionamentos, sobre a
            família, nutrição, ser mãe.{"\n"}
            Os nascidos nessa lua tem a ambição da beleza e do conforto. {"\n"}
            Eles são muito orientados para o lar e trabalham melhor nos seus
            lares, seja física, mental e emocionalmente, em ordem apropriada e
            um lugar atraente de estar. {"\n"}
            São facilmente pegos com novos pensamentos e sentimentos, e desde
            que pegos eles são muito sólidos na sua crença em qualquer novo
            conceito que lhe tenha sido apresentado, no entanto antes que eles
            permitam que novas coisa entrem em suas vidas, eles irão retomar
            algum tempo para analisar e pesar o que são e como, irão se encaixar
            com outros conceitos governando a sua vida. {"\n"}
            Eles estão associados com o sangue. Eles tem uma conexão especial
            com o baço e com a reserva de sangue de seu corpo, bem como o peito
            e estomago.{"\n"}
            Eles tem a habilidade de fluir livremente com a vida como o sangue
            flui livremente através de um corpo sadio. {"\n"}
            São benéficos para terem ao redor numa emergência, suas forças
            intuitivas podem ajuda-los a ver a natureza da real emergência. A
            sua atenção pode ser em ajudar a pessoa ferida para que eles tenham
            o sentimento e a sensação de que estão sendo cuidados da melhor
            maneira possível.{"\n"}
            São pessoas realmente sensitivas aos seus próprios corações e as
            mensagens que podem dar a eles. {"\n"}
            Se decide que ele lhe ama, esse é um amor que você pode contar como
            sendo sólido e estável, longe de traição de sua parte. {"\n"}
            Quando estão equilibrados são muito abertos aos seus amigos. {"\n"}
            Seus corações são capazes de transbordarem de amor por todos os que
            estão ao redor deles. {"\n"}
            Geralmente são pais amáveis de boa vontade e de muito sacrifício
            para a alegria de sua criança. {"\n"}
            Em sua maioria, tem uma definição muito aberta do que suas crianças
            são. É aquele que terá uma casa cheia de crianças. Suas próprias
            misturadas com outras crianças da vizinhança, com quem eles acham
            que precisa um pouco de atenção e amor. E ele irá dar isso
            abundantemente.{"\n"}
            Quando estão em desequilíbrio eles podem tornar-se relaxados e
            envolvidos em emoções ilusórias mais do que qualquer emoção real e
            duradoura. {"\n"}
            Em desequilíbrio ele parece que não é capaz de um pensamento
            independente, ação, e relacionamentos emocionais estáveis. {"\n"}
            No equilíbrio eles são extremamente sensitivos e capazes de absorver
            e refletir sobre as coisa que estão ao seu redor. {"\n"}
            São muito capazes de tomarem uma decisão quer seja mental ou
            emocional e de se agarrar a decisão.{"\n"}A mudança emocional
            natural é intensificada pelo elemento água. {"\n"}
            Eles podem se achar sendo carregados junto com a força de seus
            próprios sentimentos seguindo fortemente mas sem uma direção
            definida. {"\n"}A Lua do Verão lhe dá alguma estabilidade e faz com
            que caminhem devagar. {"\n"}É a lua onde devemos crescer mais
            rapidamente, mas somente numa direção apropriada, porque o Sol tira
            nossa força em atividades dispersas. {"\n"}
            Ao mesmo tempo nos ajuda a crescer em nosso próprio curso. Eles
            precisam da habilidade de dar ritmo e cantar na canção de sua vida,
            de qualquer forma que eles percebam que a canção seja. {"\n"}
            Mas antes de se sentirem suficientemente equilibrados para cantarem
            eles precisam ter um ninho confortável. {"\n"}O lar é muito
            importante para eles. Mais do que a maioria das pessoas eles tem um
            verdadeiro amor ao lar. {"\n"}
            Eles sentem-se infelizes quando não tem um lar confortável e
            harmonioso para retornar depois de qualquer voo que fazem. Parte do
            lar harmonioso deve ser gente com que se sintam como um. {"\n"}
            Eles fazem bons ninhos para serem usados por eles e por outros.{" "}
            {"\n"}
            Não importa quão lindo seja seu ninho, eles nãos sentem completo se
            não for compartilhado por outros que eles a realmente amam. {"\n"}
            Relacionamentos são muito importante para eles. {"\n"}
            Eles irão dar muito de sua energia para estabilizarem e manterem
            bons relacionamentos com os outros.{"\n"}
            Essa lua ensina sobre suas próprias necessidade de dar e receber
            amor e de seguir suas próprias percepções e intuições, eles irão
            também aprender sobre seu próprio sentido de segurança e sua
            necessidade pessoal em encontrar uma direção espiritual que os ajude
            a canalizar as energias da vida que sempre flui através de todos
            nós.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            According to Sun Bear, it is the Moon of the Strong Sun, Time of the
            Hot Days.{"\n"} For Kenneth Meadows and in the Wheel of Eagle's
            Flight studies, we will call it the Summer Moon or the Moon of the
            Long Days.{"\n"}
            {"\n"}
            Those born under this moon have carnelian agate in the mineral
            realm, wild rose in the plant realm, and the woodpecker in the
            animal realm. {"\n"}
            It belongs to the water element.{"\n"}It is the first moon of
            Shawnodese, Spirit Guardian of the South, and occurs during the
            Summer Solstice.{"\n"}
            Its color is pink, and its elemental influence is from the Frog
            Clan.{"\n"}
            From the Carnelian Agate, we can learn about its strong connection
            with the heart. {"\n"}
            From the Wild Rose, about its ability to heal and inspire.{"\n"}
            From the Woodpecker, about its desire for self-expression. {"\n"}
            While working with the Woodpecker, we must be careful not to indulge
            in our emotions and fear taking any stance. {"\n"}
            This moon teaches about the importance of emotions and the need for
            a strong foundation and home. {"\n"}
            People experiencing the energy of this position are intuitive and
            wild in some ways of being, but conservative and home-loving in
            others. {"\n"}
            This moon will educate us about the law of relationships, family,
            nurturing, and being a mother.{"\n"}
            Those born under this moon have the ambition for beauty and comfort.{" "}
            {"\n"}
            They are very home-oriented and work best in their homes, whether
            physically, mentally, or emotionally, in proper order and in an
            attractive place to be. {"\n"}
            They are easily caught up in new thoughts and feelings, and once
            they are caught, they are very solid in their belief in any new
            concept that has been presented to them. However, before allowing
            new things into their lives, they will take some time to analyze and
            weigh what they are and how they will fit with other concepts
            governing their life. {"\n"}
            They are associated with the blood. They have a special connection
            with the spleen and the blood reserve of their body, as well as the
            chest and stomach.{"\n"}
            They have the ability to flow freely with life, just as blood flows
            freely through a healthy body. {"\n"}
            They are beneficial to have around in an emergency, as their
            intuitive strengths can help them see the true nature of the
            emergency. Their attention may be on helping the injured person so
            that they have the feeling and sensation of being cared for in the
            best possible way.{"\n"}
            They are truly sensitive to their own hearts and the messages they
            can give them.{"\n"}
            If they decide that they love you, that is a love you can count on
            as being solid and stable, far from betrayal on their part.{"\n"}
            When balanced, they are very open to their friends. {"\n"}
            Their hearts are capable of overflowing with love for everyone
            around them.{"\n"}
            They are generally loving parents, willing to sacrifice a lot for
            the joy of their child.{"\n"}
            For the most part, they have a very open definition of what their
            children are. They are the ones who will have a house full of
            children. Their own, mixed with other neighborhood children, whom
            they feel need a little attention and love. And they will give this
            abundantly.{"\n"}
            When out of balance, they may become relaxed and involved in
            illusory emotions more than any real, lasting emotion. {"\n"}
            When out of balance, they seem unable to have independent thought,
            action, or stable emotional relationships. {"\n"}
            In balance, they are extremely sensitive and able to absorb and
            reflect on the things around them.{"\n"}
            They are very capable of making a decision, whether mental or
            emotional, and sticking to that decision.{"\n"}The natural emotional
            change is intensified by the water element.{"\n"}
            They may find themselves being carried along with the force of their
            own feelings, moving strongly but without a defined direction.{" "}
            {"\n"}The Summer Moon gives them some stability and makes them walk
            slowly.{"\n"}
            It is the moon where we should grow most quickly, but only in an
            appropriate direction, because the Sun drains our strength in
            scattered activities. {"\n"}
            At the same time, it helps us grow in our own course. They need the
            ability to give rhythm and sing the song of their life, in whatever
            way they perceive that song to be.{"\n"}
            But before they feel balanced enough to sing, they need a
            comfortable nest. {"\n"}Home is very important to them. More than
            most people, they have a true love for home.{"\n"}
            They feel unhappy when they don’t have a comfortable and harmonious
            home to return to after any flight they take. Part of the harmonious
            home must be people they feel like one with.{"\n"}
            They make good nests to be used by them and others. {"\n"}
            No matter how beautiful their nest is, they do not feel complete if
            it is not shared by others they truly love.{"\n"}
            Relationships are very important to them.{"\n"}
            They will give much of their energy to stabilize and maintain good
            relationships with others.{"\n"}
            This moon teaches about their own need to give and receive love and
            to follow their own perceptions and intuitions. They will also learn
            about their own sense of security and their personal need to find a
            spiritual direction that helps channel the life energies that always
            flow through all of us.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Secondo Sun Bear, è la Luna del Sole Forte, Tempo dei Giorni Caldi.
            {"\n"} Per Kenneth Meadows e nella Ruota degli Studi del Volo
            dell'Aquila, la chiameremo Luna dell'Estate o Luna dei Giorni
            Lunghi.{"\n"}
            {"\n"}I nati sotto questa luna hanno l'agata cornalina nel regno
            minerale, la rosa selvatica nel regno vegetale e il picchio nel
            regno animale. {"\n"}
            Appartiene all'elemento acqua.{"\n"}È la prima luna di Shawnodese,
            Spirito Guardiano del Sud, e si verifica durante il Solstizio
            d'Estate.{"\n"}
            Il suo colore è rosa e l'influenza elementale proviene dal Clan
            delle Rane.{"\n"}
            Dall'Agata Cornalina possiamo imparare della sua forte connessione
            con il cuore. {"\n"}
            Dalla Rosa Selvatica, della sua capacità di guarire e ispirare.
            {"\n"}
            Dal Picchio, del suo desiderio di autoespressione. {"\n"}
            Mentre lavoriamo con il Picchio, dobbiamo stare attenti a non
            indulgere nelle nostre emozioni e temere di prendere qualsiasi
            posizione. {"\n"}
            Questa luna insegna l'importanza delle emozioni e la necessità di
            una base solida e di un focolare. {"\n"}
            Le persone che vivono l'energia di questa posizione sono intuitive e
            selvagge in alcuni modi di essere, ma conservatrici e amanti del
            focolare in altri. {"\n"}
            Questa luna ci educherà sulla legge delle relazioni, sulla famiglia,
            sul nutrimento e sull'essere madre.{"\n"}I nati sotto questa luna
            hanno l'ambizione per la bellezza e il comfort. {"\n"}
            Sono molto orientati verso la casa e lavorano meglio nelle loro
            case, sia fisicamente, mentalmente che emotivamente, in ordine
            appropriato e in un posto attraente dove stare. {"\n"}
            Sono facilmente coinvolti in nuovi pensieri e sentimenti, e una
            volta coinvolti, sono molto solidi nella loro convinzione in
            qualsiasi nuovo concetto che gli è stato presentato. Tuttavia, prima
            di permettere che le nuove cose entrino nelle loro vite, prenderanno
            del tempo per analizzare e ponderare cosa sono e come si adatteranno
            ad altri concetti che governano la loro vita. {"\n"}
            Sono associati al sangue. Hanno una connessione speciale con la
            milza e con la riserva di sangue del loro corpo, nonché con il petto
            e lo stomaco.{"\n"}
            Hanno la capacità di fluire liberamente con la vita, proprio come il
            sangue scorre liberamente attraverso un corpo sano. {"\n"}
            Sono utili da avere intorno in caso di emergenza, poiché le loro
            forze intuitive possono aiutarli a vedere la vera natura
            dell'emergenza. La loro attenzione può essere rivolta ad aiutare la
            persona ferita affinché senta e percepisca di essere curata nel
            miglior modo possibile.{"\n"}
            Sono persone veramente sensibili ai propri cuori e ai messaggi che
            possono dare loro.{"\n"}
            Se decidono che ti amano, quell'amore è solido e stabile, lontano
            dal tradimento da parte loro.{"\n"}
            Quando sono equilibrati, sono molto aperti con i loro amici. {"\n"}I
            loro cuori sono capaci di traboccare d'amore per tutti quelli che
            sono intorno a loro.{"\n"}
            Generalmente sono genitori affettuosi, disposti a fare molti
            sacrifici per la gioia del loro bambino.{"\n"}
            Per la maggior parte, hanno una definizione molto aperta di cosa
            sono i loro bambini. Sono quelli che avranno una casa piena di
            bambini. I loro, mescolati con altri bambini del quartiere, con cui
            pensano che abbiano bisogno di un po' di attenzione e amore. E
            daranno questo in abbondanza.{"\n"}
            Quando sono sbilanciati, possono diventare rilassati e coinvolti in
            emozioni illusorie più che in qualsiasi emozione reale e duratura.{" "}
            {"\n"}
            Quando sono sbilanciati, sembrano incapaci di pensare in modo
            indipendente, agire o mantenere relazioni emotive stabili. {"\n"}
            In equilibrio, sono estremamente sensibili e capaci di assorbire e
            riflettere su ciò che li circonda.{"\n"}
            Sono molto capaci di prendere una decisione, sia mentale che
            emotiva, e di mantenerla.{"\n"}Il cambiamento emotivo naturale è
            intensificato dall'elemento acqua.{"\n"}
            Possono trovarsi a essere trascinati dalla forza dei loro
            sentimenti, seguendo fortemente ma senza una direzione definita.{" "}
            {"\n"}La Luna dell'Estate offre loro una certa stabilità e li fa
            camminare lentamente.{"\n"}È la luna in cui dovremmo crescere più
            velocemente, ma solo in una direzione appropriata, perché il Sole ci
            toglie forza in attività disperse. {"\n"}
            Allo stesso tempo ci aiuta a crescere nel nostro corso. Hanno
            bisogno della capacità di dare ritmo e cantare la canzone della loro
            vita, in qualsiasi modo percepiscano che sia.{"\n"}
            Ma prima di sentirsi abbastanza equilibrati da cantare, devono avere
            un nido confortevole. {"\n"}La casa è molto importante per loro. Più
            di molte persone, hanno un vero amore per la casa.{"\n"}
            Si sentono infelici quando non hanno una casa confortevole e
            armoniosa a cui tornare dopo qualsiasi volo che fanno. Parte della
            casa armoniosa deve essere fatta di persone con cui si sentano come
            un'uno.{"\n"}
            Fanno dei buoni nidi da usare da loro e da altri. {"\n"}
            Non importa quanto sia bello il loro nido, non si sentono completi
            se non è condiviso con altri che amano veramente.{"\n"}
            Le relazioni sono molto importanti per loro.{"\n"}
            Daranno molta della loro energia per stabilizzare e mantenere buone
            relazioni con gli altri.{"\n"}
            Questa luna insegna le loro stesse necessità di dare e ricevere
            amore e di seguire le proprie percezioni e intuizioni. Impareranno
            anche riguardo al loro senso di sicurezza e alla loro necessità
            personale di trovare una direzione spirituale che li aiuti a
            canalizzare le energie della vita che fluiscono sempre attraverso di
            noi tutti.
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
