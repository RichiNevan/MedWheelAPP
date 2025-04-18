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
          <Text style={styles.title}>Lua da Decomposiçao</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Decomposition</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna della Decomposizione</Text>
        )}

        {/* <View style={styles.imageView}></View> */}

        {language === "prt" && (
          <Text style={styles.testo}>
            Segundo Sun Bear é a Lua Gelada, Tempo da Geada. {"\n"}Para Kenneth
            Meadows e na Roda Medicinal Voo da Águia chamaremos de Lua da
            Decomposição.{"\n"}
            {"\n"}A Lua da Ultima Colheita é a segunda Lua de Mudjekewis, tem a
            cor laranja e recebe a influência do Clã dos Sapos. {"\n"}
            São regidos pelo elemento água. {"\n"}O Cobre ensina às pessoas
            desta lua a focalizar sua energia. {"\n"}A Malaquita lhes ensina a
            ser mais sensíveis a todas as energias. {"\n"}O Cardo demonstra
            habilidades curativas e versatilidade. {"\n"}A Cobra ensina
            adaptabilidade e a capacidade de viajar silenciosamente para lugares
            onde outros possam ter medo de ir.{"\n"}
            São geralmente sintonizados com a mais alta energia ao redor deles.{" "}
            {"\n"}
            Uma vez que tenham purificado os seu próprio espírito, eles são
            capazes de ajudar os outros com esta tarefa. {"\n"}
            Desde que muito deles são curadores naturais, eles são capazes de
            ajudar as pessoas a purificar os seus próprios corpos e seu sangue.
            {"\n"}
            Eles ajudam a manter a rigidez ou a fraqueza longe daqueles com os
            quais se associam pela força e poder de sua própria energia. {"\n"}
            São capazes de conduzir as mais altas energia que estão ao nosso
            redor. {"\n"}
            Naturalmente tem vislumbres de outras realidade espirituais como
            materiais. {"\n"}
            Por causa do seu questionamento e natureza investigativa, eles são
            capazes de trazer o conhecimento destas realidade de uma forma
            facilmente compreendida por outras pessoas. {"\n"}
            Como o cobre eles tem habilidade de espalhar o calor por igual, seja
            o calor de suas mais novas idéias, ou o calor de situações que não
            estão indo da maneira apropriada.{"\n"}
            Se estão confusos, são os mais agudos e doloridos espinhos. {"\n"}
            Podem ser teimosos, críticos, invejosos, traiçoeiros e dados á fúria
            geralmente direcionada aos que estão mais próximos a ele. {"\n"}
            Nesta situação é importante para eles lembrarem que tem a força
            necessária para trazerem suas energias de uma maneira mais solidária
            e agradável em condições de servirem os outros.{"\n"}
            Eles tendem a mistérios e segredos. {"\n"}
            Levam algum tempo para se abrirem com outras pessoas, e mesmo assim
            são relutantes frequentemente em revelar os segredos do seu ser.{" "}
            {"\n"}
            Por causa disso, e por causa de sua maneira dura, e incapazes de
            cobrirem, eles algumas vezes são mal entendidos e mal ditos. {"\n"}
            Eles tem muita energia vital fluindo, que muitas vezes as pessoas
            não entendem as profundezas de seu ser. {"\n"}
            Tem sentidos aguçados para sentirem o gosto e o odor da verdade,
            sobre as pessoas e situações. {"\n"}
            Eles tem olhos aguçados que o permitem ver através das profundezas
            da alma, quer seja dele ou de outros. {"\n"}
            Desequilibrados sentem-se confusos e não permitem sua força fluir
            suavemente através deles.{"\n"}
            São bons para manter o equilíbrio da natureza ou de qualquer
            situação. {"\n"}
            Quando sentem-se em harmonia consigo mesmo, são pessoas adaptáveis,
            tem habilidade para abandonar velhas idéias, meio ambiente ou
            sentimentos, para transformarem-se em outro ser. {"\n"}
            As mudanças nem sempre vem facilmente para esse povo, mas quando vem
            permite, é permanente até a hora de partirem para algo novo. {"\n"}
            Geralmente são capazes de alcançar performances heróicas para ajudar
            o próximo na nossa Mãe Terra.{"\n"}
            {"\n"}
            Essa lua ensina sobre a força de transformas o seu mais íntimo ser,
            trazendo todas as lições que eles tenham aprendido em outras
            posições harmônicas. {"\n"}
            Eles podem aprender sua própria adaptabilidade, paciência,
            tenacidade, ambição e poder.{"\n"}
            Esta é a posição para aprender a viajar entre as variadas dimensões
            da Criação e como se tornar um mensageiro para os aspectos
            espirituais da vida. {"\n"}A posição da cobra nos ensinará sobre a
            extensão de nossa própria energia, nossa habilidade de criar
            mudanças, nossa inquisitividade, nosso desejo pela verdade e nossa
            visão objetiva. {"\n"}
            Devemos cuidar para nos manter centrados e não nos tornarmos
            desconfiados das pessoas.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            According to Sun Bear, it is the Frozen Moon, Time of the Frost.{" "}
            {"\n"}For Kenneth Meadows and in the Eagle's Flight Medicine Wheel,
            we will call it the Moon of Decomposition.{"\n"}
            {"\n"}The Moon of the Last Harvest is the second Moon of Mudjekewis,
            it has the color orange and receives the influence of the Frog Clan.{" "}
            {"\n"} They are ruled by the water element. {"\n"} Copper teaches
            the people of this moon to focus their energy. {"\n"} Malachite
            teaches them to be more sensitive to all energies. {"\n"} The
            Thistle demonstrates healing abilities and versatility. {"\n"} The
            Snake teaches adaptability and the ability to travel silently to
            places where others may be afraid to go.{"\n"} They are generally
            attuned to the highest energy around them.{"\n"}
            {"\n"} Once they have purified their own spirit, they are able to
            help others with this task. {"\n"} Since many of them are natural
            healers, they can help people purify their own bodies and blood.{" "}
            {"\n"} They help keep rigidity or weakness away from those they
            associate with through the strength and power of their own energy.{" "}
            {"\n"} They are capable of conducting the highest energies around
            us. {"\n"} Naturally, they have glimpses of other spiritual
            realities as material ones. {"\n"} Because of their questioning and
            investigative nature, they are able to bring knowledge of these
            realities in a way that others can easily understand. {"\n"} Like
            copper, they have the ability to spread heat evenly, whether it is
            the heat of their newest ideas or the heat of situations that are
            not going in the proper direction.{"\n"} If they are confused, they
            are the sharpest and most painful thorns. {"\n"} They can be
            stubborn, critical, envious, treacherous, and prone to fury, usually
            directed at those who are closest to them. {"\n"} In this situation,
            it is important for them to remember that they have the strength to
            bring their energies in a more supportive and pleasant manner when
            serving others.{"\n"} They tend towards mysteries and secrets.{" "}
            {"\n"} It takes them some time to open up to others, and even then,
            they are often reluctant to reveal the secrets of their being.{"\n"}
            {"\n"} Because of this, and because of their harsh nature, and
            inability to cover up, they are sometimes misunderstood and
            misrepresented. {"\n"} They have a lot of vital energy flowing,
            which often causes people not to understand the depths of their
            being. {"\n"} They have sharp senses to taste and smell the truth
            about people and situations. {"\n"} They have sharp eyes that allow
            them to see through the depths of the soul, whether it is their own
            or others'. {"\n"} Unbalanced, they feel confused and do not allow
            their strength to flow smoothly through them.{"\n"} They are good at
            maintaining the balance of nature or any situation. {"\n"} When they
            feel in harmony with themselves, they are adaptable people, able to
            let go of old ideas, environments, or feelings to transform into
            another being. {"\n"} Changes do not always come easily to these
            people, but when they do, they are permanent until the time comes to
            move on to something new. {"\n"} They are generally capable of
            achieving heroic performances to help others on our Mother Earth.
            {"\n"}
            {"\n"} This moon teaches the strength to transform one's innermost
            being, bringing all the lessons they have learned in other
            harmonious positions. {"\n"} They can learn their own adaptability,
            patience, tenacity, ambition, and power.{"\n"} This is the position
            to learn how to travel between the varied dimensions of Creation and
            how to become a messenger for the spiritual aspects of life. {"\n"}{" "}
            The position of the snake will teach us about the extent of our own
            energy, our ability to create change, our inquisitiveness, our
            desire for truth, and our objective vision. {"\n"} We must be
            careful to stay centered and not become distrustful of people.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Secondo Sun Bear, è la Luna Ghiacciata, Tempo della Brina. {"\n"}Per
            Kenneth Meadows e nella Ruota Medicinale del Volo dell'Aquila, la
            chiameremo Luna della Decomposizione.{"\n"}
            {"\n"}La Luna dell'Ultima Raccolta è la seconda Luna di Mudjekewis,
            ha il colore arancione e riceve l'influenza del Clan delle Rane.{" "}
            {"\n"} Sono governati dall'elemento acqua. {"\n"} Il Rame insegna
            alle persone di questa luna a focalizzare la loro energia. {"\n"} La
            Malaquita gli insegna a essere più sensibili a tutte le energie.{" "}
            {"\n"} Il Cardo dimostra abilità curative e versatilità. {"\n"} Il
            Serpente insegna adattabilità e la capacità di viaggiare
            silenziosamente verso luoghi in cui altri potrebbero avere paura di
            andare.{"\n"} Sono generalmente sintonizzati con l'energia più alta
            intorno a loro.{"\n"}
            {"\n"} Una volta che hanno purificato il loro spirito, sono in grado
            di aiutare gli altri in questo compito. {"\n"} Poiché molti di loro
            sono guaritori naturali, sono in grado di aiutare le persone a
            purificare i propri corpi e il sangue. {"\n"} Aiutano a mantenere la
            rigidità o la debolezza lontano da coloro con cui si associano
            attraverso la forza e il potere della loro energia. {"\n"} Sono in
            grado di condurre le energie più alte intorno a noi. {"\n"}{" "}
            Naturalmente, hanno visioni di altre realtà spirituali come realtà
            materiali. {"\n"} Grazie alla loro natura investigativa e di
            ricerca, sono in grado di portare la conoscenza di queste realtà in
            un modo che gli altri possono facilmente comprendere. {"\n"} Come il
            rame, hanno la capacità di diffondere il calore in modo uniforme,
            sia che si tratti del calore delle loro idee più nuove, sia che si
            tratti del calore di situazioni che non stanno andando nella
            direzione giusta.{"\n"} Se sono confusi, sono i più acuti e dolorosi
            spine. {"\n"} Possono essere testardi, critici, invidiosi, traditori
            e inclini alla furia, di solito diretta verso coloro che sono più
            vicini a loro. {"\n"} In questa situazione, è importante che
            ricordino che hanno la forza necessaria per portare le loro energie
            in un modo più solidale e piacevole quando servono gli altri.{"\n"}{" "}
            Tendono ai misteri e ai segreti. {"\n"} Ci vuole del tempo per
            aprirsi con gli altri, e anche in tal caso sono spesso riluttanti a
            rivelare i segreti del loro essere.{"\n"}
            {"\n"} Per questo, e a causa della loro natura dura, e incapaci di
            coprirsi, a volte sono fraintesi e mal interpretati. {"\n"} Hanno
            molta energia vitale che scorre, il che spesso fa sì che le persone
            non comprendano la profondità del loro essere. {"\n"} Hanno sensi
            acuti per sentire il gusto e l'odore della verità, riguardo le
            persone e le situazioni. {"\n"} Hanno occhi acuti che gli permettono
            di vedere attraverso le profondità dell'anima, sia della loro che
            degli altri. {"\n"} Quando sono sbilanciati, si sentono confusi e
            non permettono alla loro forza di fluire dolcemente attraverso di
            loro.{"\n"} Sono bravi a mantenere l'equilibrio della natura o di
            qualsiasi situazione. {"\n"} Quando si sentono in armonia con se
            stessi, sono persone adattabili, in grado di abbandonare vecchie
            idee, ambienti o sentimenti, per trasformarsi in un altro essere.{" "}
            {"\n"} I cambiamenti non sempre arrivano facilmente per queste
            persone, ma quando arrivano, sono permanenti fino al momento in cui
            passeranno a qualcosa di nuovo. {"\n"} Sono generalmente in grado di
            raggiungere prestazioni eroiche per aiutare gli altri sulla nostra
            Madre Terra.{"\n"}
            {"\n"} Questa luna insegna la forza di trasformare il proprio essere
            più intimo, portando tutte le lezioni che hanno imparato in altre
            posizioni armoniche. {"\n"} Possono imparare la propria
            adattabilità, pazienza, tenacia, ambizione e potere.{"\n"} Questa è
            la posizione per imparare a viaggiare tra le varie dimensioni della
            Creazione e come diventare un messaggero per gli aspetti spirituali
            della vita. {"\n"} La posizione del serpente ci insegnerà
            sull'estensione della nostra energia, la nostra capacità di creare
            cambiamenti, la nostra curiosità, il nostro desiderio di verità e la
            nostra visione obiettiva. {"\n"} Dobbiamo fare attenzione a rimanere
            centrati e a non diventare diffidenti verso le persone.
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