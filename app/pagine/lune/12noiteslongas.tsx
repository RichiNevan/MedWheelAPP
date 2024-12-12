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
          <Text style={styles.title}>Lua das Noites Longas</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Long Nights</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna delle Lunghe Notti</Text>
        )}

        <View style={styles.imageView}></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Segundo Sun Bear é Lua das Grandes Neves, Tempo das Noites Longas.
            {"\n"}Para Kenneth Meadows e na Roda Medicinal Voo da Águia
            chamaremos de Lua das Noites Longas.{"\n"}
            {"\n"}A Lua das Noites Longas é a última lua de Mudjekeewis, sua cor
            é o preto e recebe influência do Clã do Pássaro Trovão.{"\n"}É
            regida pelo Elemento Fogo. {"\n"}
            Da pedra Obsidiana as pessoas vivenciando esta posição aprendem suas
            habilidades de perceber e espelhar os pensamentos e sentimentos dos
            outros. {"\n"}O Abeto Negro ensina como ser macio e forte ao mesmo
            tempo e o Alce demonstra o poder da beleza, majestade e cooperação.
            {"\n"}
            Esta é a posição na qual aprendemos sobre nosso desejo de justiça, e
            nossa habilidade para viver com as dualidades da natureza e da vida.
            {"\n"}
            Esta Lua ensina sobre força mental, medo profundo das emoções,
            relacionamentos, ensinamentos e comunicação. {"\n"}
            Pessoas na posição do Alce são perspicazes, independentes,
            destemidas, determinadas e têm coração aberto. {"\n"}
            Devem se prevenir para não serem super argumentadoras e erráticas em
            relacionamentos íntimos.{"\n"}
            Equilibrados tem um brilho interior que ilumina todo o seu ser.
            {"\n"}
            Eles também tem a habilidade de deixa-los Ter um vislumbre sobre
            eles, mas não mais profundo do que desejarem. {"\n"}
            Tem dificuldades de lidar com novas situações, mas uma vez que eles
            mudam serão muito sólidos.{"\n"}
            São de natureza dual. Tem habilidades clarividentes e telepáticas.
            {"\n"}
            Costumam proteger aqueles que estejam próximos a eles de quaisquer
            perigos que percebam, seja de nível material ou de outro nível.
            {"\n"}
            Eles tem uma maneira orgulhosa e digna de serem, um ar de majestade
            ao seu redor, quando estão em equilíbrio.{"\n"}
            Partindo do princípio que sejam muito intuitivos, introspectivos e
            capazes de absorverem muito do que leem, escutam, vêem, ou tenham
            experimentado na vida, são geralmente encontrados em posição de
            professores de algum tipo de coisa, onde seu ar intelectual atrai
            estudantes a eles. {"\n"}
            Eles têm um senso inato de justiça, e vão tentar limpar qualquer
            coisa que eles sentem como injusto em qualquer situação. {"\n"}
            Com a sua intuição eles também são capazes de ver o coração dos
            outros e ajudá-los a soltar qualquer dos nós. {"\n"}
            Eles usam essa atração muito bem, em muitos casos, trazendo os
            estudantes desta maneira e depois repartindo generosamente o que
            aprenderam. {"\n"}
            Tenham escolhido ou não serem professores, eles são muito cuidadosos
            com os outros, verdadeiramente preocupados com o bem estar ao seu
            redor.{"\n"}
            Eles gostam de ir aos mais altos lugares, seja psiquicamente ou de
            outra maneira. {"\n"}
            Suas mentes sensitivas são capazes de abrir portas que os permite
            ver realidades que outros evitam.{"\n"}
            Sua intuição lhes diz, quando estão prontos para fazerem vôos, e
            quando é necessário para eles voltarem e se aterrarem.{"\n"}
            Uma vez que ele tenha se determinado a fazer alguma coisa é muito
            difícil de mudar. {"\n"}
            Eles são indivíduos determinados e não tementes quando estão
            convencidos que estão corretos.{"\n"}
            Têm dons espirituais naturais e a capacidade de ensinar para os
            outros, eles devem ter aterramento ou eles não vão usar esses dons
            da melhor maneira que podem. {"\n"}
            São pessoas muito independentes, embora estejam dispostos a assumir
            a liderança dos outros se for do tipo adequado para eles naquele
            momento.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            According to Sun Bear, it is the Moon of the Great Snows, Time of
            the Long Nights. {"\n"}For Kenneth Meadows and in the Eagle's Flight
            Medicinal Wheel, we will call it the Moon of the Long Nights.{"\n"}
            {"\n"}The Moon of the Long Nights is the last moon of Mudjekeewis,
            its color is black and it receives the influence of the Thunder Bird
            Clan. {"\n"} It is governed by the Fire Element. {"\n"} From the
            Obsidian stone, people experiencing this position learn their skills
            in perceiving and mirroring the thoughts and feelings of others.{" "}
            {"\n"} The Black Spruce teaches how to be soft and strong at the
            same time, and the Moose demonstrates the power of beauty, majesty,
            and cooperation.{"\n"} This is the position where we learn about our
            desire for justice, and our ability to live with the dualities of
            nature and life.{"\n"} This Moon teaches about mental strength, deep
            fear of emotions, relationships, teachings, and communication.{" "}
            {"\n"} People in the Moose position are insightful, independent,
            fearless, determined, and have open hearts. {"\n"} They must guard
            against being overly argumentative and erratic in intimate
            relationships.{"\n"} When balanced, they have an inner glow that
            illuminates their whole being. {"\n"} They also have the ability to
            let others have a glimpse of them, but no deeper than they wish.{" "}
            {"\n"} They have difficulty dealing with new situations, but once
            they change, they will be very solid.{"\n"} They are of a dual
            nature. They have clairvoyant and telepathic abilities. {"\n"} They
            tend to protect those close to them from any dangers they perceive,
            whether at a material level or another level. {"\n"} They have a
            proud and dignified way of being, an air of majesty around them,
            when they are in balance.{"\n"} Assuming they are very intuitive,
            introspective, and able to absorb much of what they read, hear, see,
            or have experienced in life, they are usually found in positions of
            teachers of some sort, where their intellectual air attracts
            students to them. {"\n"} They have an innate sense of justice, and
            they will try to clear anything they feel is unjust in any
            situation. {"\n"} With their intuition, they are also able to see
            the heart of others and help them untie any knots. {"\n"} They use
            this attraction very well, in many cases, bringing students this way
            and then generously sharing what they have learned. {"\n"} Whether
            they choose to be teachers or not, they are very careful with
            others, truly concerned for the well-being around them. {"\n"} They
            like to go to the highest places, whether psychically or otherwise.{" "}
            {"\n"} Their sensitive minds are able to open doors that allow them
            to see realities that others avoid. {"\n"} Their intuition tells
            them when they are ready to take flights, and when it is necessary
            for them to return and ground themselves. {"\n"} Once they have
            determined to do something, it is very difficult to change their
            minds. {"\n"} They are determined individuals and unafraid when they
            are convinced they are right. {"\n"} They have natural spiritual
            gifts and the ability to teach others, but they must have grounding
            or they will not use these gifts in the best way they can. {"\n"}{" "}
            They are very independent people, although they are willing to take
            leadership of others if it is the right type for them at that
            moment.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Secondo Sun Bear, è la Luna delle Grandi Nevi, Tempo delle Lunghe
            Notti. {"\n"}Per Kenneth Meadows e nella Ruota Medicinale del Volo
            dell'Aquila, la chiameremo Luna delle Lunghe Notti.{"\n"}
            {"\n"}La Luna delle Lunghe Notti è l'ultima luna di Mudjekeewis, il
            suo colore è il nero e riceve l'influenza del Clan dell'Uccello del
            Tuono. {"\n"} È governata dall'Elemento Fuoco. {"\n"} Dalla pietra
            Ossidiana, le persone che vivono questa posizione apprendono le loro
            capacità di percepire e riflettere i pensieri e i sentimenti degli
            altri. {"\n"} L'Abete Nero insegna come essere morbidi e forti allo
            stesso tempo, e l'Alce dimostra il potere della bellezza, della
            maestosità e della cooperazione.{"\n"} Questa è la posizione in cui
            impariamo il nostro desiderio di giustizia e la nostra capacità di
            vivere con le dualità della natura e della vita.{"\n"} Questa Luna
            insegna sulla forza mentale, la paura profonda delle emozioni, delle
            relazioni, degli insegnamenti e della comunicazione. {"\n"} Le
            persone nella posizione dell'Alce sono perspicaci, indipendenti,
            impavide, determinate e hanno il cuore aperto. {"\n"} Devono
            prevenire di essere troppo polemiche e irregolari nelle relazioni
            intime.{"\n"} Quando sono equilibrati, hanno un bagliore interiore
            che illumina tutto il loro essere. {"\n"} Hanno anche la capacità di
            lasciare che gli altri possano dare uno sguardo a loro, ma non più
            profondo di quanto desiderino. {"\n"} Hanno difficoltà a gestire
            situazioni nuove, ma una volta che cambiano, diventano molto solidi.
            {"\n"} Sono di natura duale. Hanno abilità chiaroveggenti e
            telepatiche. {"\n"} Tendono a proteggere quelli che sono vicini a
            loro da qualsiasi pericolo che percepiscono, sia a livello materiale
            che di altro tipo. {"\n"} Hanno un modo fiero e dignitoso di essere,
            un'aura di maestosità intorno a loro, quando sono in equilibrio.
            {"\n"} Partendo dal presupposto che siano molto intuitivi,
            introspettivi e capaci di assorbire molto di ciò che leggono,
            ascoltano, vedono o hanno sperimentato nella vita, generalmente si
            trovano in posizioni di insegnanti di qualche tipo, dove il loro
            atteggiamento intellettuale attira studenti verso di loro. {"\n"}{" "}
            Hanno un senso innato di giustizia e cercheranno di eliminare
            qualsiasi cosa percepiscano come ingiusta in qualsiasi situazione.{" "}
            {"\n"} Con la loro intuizione, sono anche in grado di vedere il
            cuore degli altri e aiutarli a sciogliere eventuali nodi. {"\n"}{" "}
            Usano questa attrazione molto bene, in molti casi, portando gli
            studenti in questo modo e poi condividendo generosamente ciò che
            hanno imparato. {"\n"} Sia che abbiano scelto o meno di essere
            insegnanti, sono molto attenti agli altri, davvero preoccupati per
            il benessere di chi li circonda. {"\n"} Amano andare nei luoghi più
            alti, sia psichicamente che in altro modo. {"\n"} Le loro menti
            sensibili sono in grado di aprire porte che permettono loro di
            vedere realtà che altri evitano. {"\n"} La loro intuizione dice loro
            quando sono pronti a fare dei voli e quando è necessario che tornino
            e si radichino. {"\n"} Una volta che si sono determinati a fare
            qualcosa, è molto difficile cambiarli. {"\n"} Sono individui
            determinati e senza paura quando sono convinti di avere ragione.{" "}
            {"\n"} Hanno doni spirituali naturali e la capacità di insegnare
            agli altri, ma devono essere radicati o non utilizzeranno questi
            doni nel miglior modo possibile. {"\n"} Sono persone molto
            indipendenti, anche se sono disposte a prendere la leadership degli
            altri se è il tipo giusto per loro in quel momento.
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