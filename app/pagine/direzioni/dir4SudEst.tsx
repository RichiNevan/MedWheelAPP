import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React, {useEffect} from "react";
import { useSettings } from "../../SettingsContext";
import { useNavigation } from "expo-router";

const SudEst = () => {
  const { language } = useSettings();
  const navigation = useNavigation()

  useEffect(() => {
    // Dynamically setting header options when this page is loaded
    navigation.setOptions({
      title: '',
      headerBackground: () => (
        <ImageBackground source={require('@/assets/images/headerbg.jpg')}
        style={styles.headerBg} />
      ),
      headerStyle: styles.header,
      headerTintColor: 'white',
      headerBackTitle: language === 'prt' ? 'Voltar' : language === 'ita' ? 'Indietro' : 'Back'
    });
  }, [navigation]);

  return (
    <ImageBackground source={require("@/assets/images/background.jpg")}>
      <ScrollView style={styles.scrollView}>
        {language === "prt" && (
          <Text style={styles.title}>Fertilizaçao - Uniao Sagrada</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Fertilization - Divine Union</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Fertilizzazione - Unione Sacra</Text>
        )}

        {/* <View style={styles.imageView}></View> */}

        {language === "prt" && (
          <Text style={styles.testo}>
            O perfume doce das plantas já podem ser sentidos, começa a
            florescência. {"\n"}A Direção Nordeste anuncia a aproximação do
            Verão. {"\n"}
            Caminhamos para o auge da energia, aumentamos a nossa expectativa de
            boas colheitas. {"\n"}
            Abrimos nosso coração para a comunidade, nos preparamos para
            celebrar a fertilidade na Terra. {"\n"}
            Chegamos ao ponto médio entre o Equinócio de Primavera e o Solstício
            de Verão. {"\n"}
            Momento dos ritos de iniciação para a fase adulta, da florescência
            das árvores, quando os aromas das flores tornam-se mais fortes e
            encantadores. {"\n"}O poder está em ascensão assim como as emoções
            nos relacionamentos, a energia e fluxo do poder está aumentando,
            assim como a nossas expectativas. Momento na Terra para abençoarmos
            nossas relações e relacionamentos. {"\n"}A Sagrada União do
            Masculino e Feminino. {"\n"}
            Para complementar os opostos e nos harmonizarmos com nossa energia
            sexual, do amor sexual.{"\n"}
            Para fortalecermos nosso relacionamento atual ou para buscar um novo
            relacionamento de qualidade, de amor, verdadeiro.{"\n"} Para
            fortalecer casais e para quem está a procura de seu amor.{"\n"}
            Para fertilizar Todas As Nossas Relações.. O maior desafio que
            teremos para esse novo milênio é o de harmonizar nossos
            relacionamentos, nossas relações.{"\n"} Harmonizar relações /
            relacionamentos em todos os níveis : na família, nos casais, na
            relação homem e mulher, com os filhos, com os pais, com chefes, com
            subordinados, com fornecedores, com clientes, com companheiros de
            trabalho, vizinhos, amigos em geral. {"\n"}E é claro, relacionamento
            consigo mesmo, com Deus, crença/religião….{"\n"} Ou seja: Tudo na
            vida é relacionamento. Hoje, mais do que nunca, temos que nos
            relacionar com o meio-ambiente, com a nossa alimentação, com a
            escola de nossos filhos, com os amigos de nossos filhos…. {"\n"}
            Vivemos numa rede interminável de relacionamentos!{"\n"} Se a vida é
            a dança das Relações, é sábio aprendermos cada vez mais a dançar, em
            harmonia com tudo o que nos cerca.{"\n"}
            Nós necessitamos de outros para sobreviver, e nós nos alegramos na
            presença de outros para viver. Nesta estação, povos dos passado,
            rezavam para a segurança dos seus rebanhos, iluminando cumes com
            chamas enormes.{"\n"} Aqui nós vamos orar pela liberdade e pela vida
            de nossos animais, para que o mundo melhore o seu relacionamento com
            eles, assim como para todo o nosso planeta, nossas árvores e
            minerais.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The sweet perfume of the plants can already be sensed, the blooming
            begins. {"\n"} The Northeast Direction announces the approach of
            Summer. {"\n"} We walk towards the peak of energy, increasing our
            expectation of good harvests. {"\n"} We open our hearts to the
            community, preparing to celebrate fertility on Earth. {"\n"} We
            reach the midpoint between the Spring Equinox and the Summer
            Solstice. {"\n"} A time of initiation rites for adulthood, of the
            blooming of trees, when the aromas of flowers become stronger and
            more enchanting. {"\n"} Power is rising, just like emotions in
            relationships. The energy and flow of power is increasing, as are
            our expectations. A time on Earth to bless our relationships and
            connections. {"\n"} The Sacred Union of Masculine and Feminine.{" "}
            {"\n"} To complement opposites and harmonize with our sexual energy,
            the energy of sexual love.{"\n"} To strengthen our current
            relationship or to seek a new, meaningful relationship filled with
            true love.{"\n"} To strengthen couples and for those seeking their
            love.{"\n"} To fertilize All Our Relationships. The greatest
            challenge we face in this new millennium is to harmonize our
            relationships, our connections.{"\n"} Harmonizing relationships on
            all levels: within families, between couples, in the relationship
            between man and woman, with children, with parents, with bosses,
            with subordinates, with suppliers, with clients, with coworkers,
            neighbors, and friends in general. {"\n"} And of course, the
            relationship with oneself, with God, belief/religion….{"\n"} In
            other words: Everything in life is about relationships. Today, more
            than ever, we must relate to the environment, to our food, to our
            children's school, to our children's friends…. {"\n"} We live in an
            endless web of relationships!{"\n"} If life is the dance of
            Relationships, it is wise to learn to dance more and more in harmony
            with everything around us.{"\n"} We need others to survive, and we
            rejoice in the presence of others to live. In this season, people of
            the past prayed for the safety of their herds, lighting hilltops
            with enormous flames.{"\n"} Here we will pray for the freedom and
            lives of our animals, so that the world may improve its relationship
            with them, as well as with our entire planet, our trees, and
            minerals.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il dolce profumo delle piante si può già percepire, inizia la
            fioritura. {"\n"} La Direzione Nord-Est annuncia l’avvicinarsi
            dell’Estate. {"\n"} Camminiamo verso il culmine dell’energia,
            aumentando le nostre aspettative di buoni raccolti. {"\n"} Apriamo
            il nostro cuore alla comunità, preparandoci a celebrare la fertilità
            della Terra. {"\n"} Raggiungiamo il punto medio tra l’Equinozio di
            Primavera e il Solstizio d’Estate. {"\n"} Momento di riti di
            iniziazione all’età adulta, della fioritura degli alberi, quando gli
            aromi dei fiori diventano più forti e incantevoli. {"\n"} Il potere
            è in ascesa, così come le emozioni nelle relazioni. L’energia e il
            flusso del potere stanno crescendo, così come le nostre aspettative.
            Un momento sulla Terra per benedire le nostre relazioni e i nostri
            legami. {"\n"} La Sacra Unione del Maschile e del Femminile. {"\n"}{" "}
            Per completare gli opposti e armonizzarci con la nostra energia
            sessuale, l’energia dell’amore sessuale.{"\n"} Per rafforzare la
            nostra relazione attuale o per cercare una nuova relazione di
            qualità, basata sull’amore vero.{"\n"} Per rafforzare le coppie e
            per chi è in cerca del proprio amore.{"\n"} Per fertilizzare Tutte
            le Nostre Relazioni. La più grande sfida che affrontiamo in questo
            nuovo millennio è armonizzare le nostre relazioni, i nostri legami.
            {"\n"} Armonizzare le relazioni a tutti i livelli: in famiglia, tra
            coppie, nella relazione tra uomo e donna, con i figli, con i
            genitori, con i capi, con i subordinati, con i fornitori, con i
            clienti, con i colleghi di lavoro, vicini di casa, amici in
            generale. {"\n"} E, naturalmente, la relazione con noi stessi, con
            Dio, con la fede/religione….{"\n"} In altre parole: Tutto nella vita
            è relazione. Oggi, più che mai, dobbiamo relazionarci con
            l’ambiente, con il nostro cibo, con la scuola dei nostri figli, con
            gli amici dei nostri figli…. {"\n"} Viviamo in una rete infinita di
            relazioni!{"\n"} Se la vita è la danza delle Relazioni, è saggio
            imparare sempre di più a danzare in armonia con tutto ciò che ci
            circonda.{"\n"} Abbiamo bisogno degli altri per sopravvivere e ci
            rallegriamo della presenza degli altri per vivere. In questa
            stagione, i popoli del passato pregavano per la sicurezza delle loro
            greggi, illuminando le cime con grandi fiamme.{"\n"} Qui pregheremo
            per la libertà e la vita dei nostri animali, affinché il mondo
            migliori il proprio rapporto con loro, così come con l’intero
            pianeta, i nostri alberi e i minerali.
          </Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default SudEst;

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
