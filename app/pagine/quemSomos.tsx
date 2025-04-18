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
        {language === "prt" && <Text style={styles.title}>Leo Artese</Text>}
        {language === "eng" && <Text style={styles.title}>Leo Artese</Text>}
        {language === "ita" && <Text style={styles.title}>Leo Artese</Text>}

        {language === "prt" && (
          <>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/leo.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              Estudioso de xamanismo e condutor de cerimônias, ritos, grupos de
              estudo, cursos e oficinas de xamanismo desde 1991.{"\n"} Criador e
              condutor das Jornadas Xamânicas Voo da Águia, cerimonia de cura e
              autoconhecimento através dos ritos de passagens sazonais, tendo
              levado esse trabalho em todas as regiões brasileiras e em outros
              países também, através do Movimento “Xamanismo Sem Fronteiras”.
              {"\n"}
              Proprietário e editor do site www.xamanismo.com.br.{"\n"} Fundador
              e Presidente do Centro Eclético da Fluente Luz Universal Céu da
              Lua Cheia – Santo Daime.{"\n"} Embaixador Ancestral do Conselho
              Indígena Internacional – México – Promovido pela UNESCO.{"\n"}{" "}
              Fundador e Presidente da Aliança Internacional de Xamanismo
              Universal – IAUSH.{"\n"}
              Fundador e Diretor do ESPAÇO – A Kiva Urbana – Centro de Estudos
              de Xamanismo Voo da Águia.{"\n"} Idealizador do EBX – Encontro
              Brasileiro de Xamanismo e o VMX – Virada Musical Xamânica.{"\n"}
              Terapeuta holístico, acupunturista Formado em locução e
              radialismo, Mestre de Cerimonias e Contador de Histórias – SENAC.
              {"\n"}
              Palestrante e escritor dos livros : O Voo da Águia e O Espírito
              Animal. {"\n"}
              {"\n"}Sou um estudioso de xamanismo dedicado a entrelaçar as
              sabedorias ancestrais com o conhecimento contemporâneo, criando um
              caminho que nos conduz ao bem-estar e à compreensão profunda dos
              desafios da vida.{"\n"} Este portal é mais do que um espaço
              virtual; é um convite para uma jornada espiritual, onde valorizo
              profundamente a busca interior de cada um – uma busca que
              considero sagrada.{"\n"} Minha trajetória no xamanismo é uma
              exploração pessoal, longe de representar qualquer tradição
              específica. Meus anos de pesquisa, iniciações e aplicação de
              conhecimentos espirituais moldaram a forma como conduzo ritos e
              cerimônias, e como interpreto as práticas xamânicas.{"\n"} A minha
              verdade encontra-se na beleza da Criação Divina, um caminho
              mapeado nas pequenas maravilhas da natureza – desde as plantas até
              as estrelas.{"\n"} A sabedoria que compartilho aqui transformou
              minha vida e vi transformar a de muitos outros.{"\n"} Convido você
              a refletir: se está em busca de transformação, esta jornada pode
              ser também a sua.{"\n"}
            </Text>

            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/leo2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"}
              Acredito firmemente que o verdadeiro poder reside dentro de cada
              um de nós, emanando do desenvolvimento de nossos dons e potenciais
              internos.{"\n"} Este poder pode ser identificado como o Eu
              Superior, Cristo Interno, Kundalini, Poder Mental, entre outros. O
              mais importante é reconhecer e acessar a Centelha Divina inerente
              a cada um de nós.{"\n"} Entendo que, independentemente do caminho
              espiritual escolhido, é essencial confiar, ter fé e entregar-se
              para alcançar a integração plena.{"\n"}O reconhecimento do Caminho
              da Verdade emerge da expansão de nossa consciência, de nossas
              experiências pessoais e de nossos relacionamentos.{"\n"} O Caminho
              do Xamanismo Universal: Uma Visão Contemporânea Unificação das
              Crenças e a Linguagem do Amor Universal Abraço a bandeira do
              “Xamanismo Universal”, um caminho que permite alianças espirituais
              entre diversos sistemas de crenças.{"\n"} Honro e valorizo os
              ensinamentos de cada linha que cruzei, tecendo-os juntos numa
              linguagem unificada de amor universal.{"\n"} Este é o coração de
              um “novo xamanismo”, adaptado e relevante para os dias atuais, que
              celebra a diversidade e a unidade.{"\n"}
              {"\n"}Central para minha filosofia é o entendimento de que “Tudo é
              Sagrado”.{"\n"} Esta percepção nos guia à unificação na corrente
              universal da beleza, da paz, do amor incondicional e do bem-estar
              físico e mental.{"\n"}
              Reconhecer o sagrado em tudo é o primeiro passo para uma vida de
              harmonia e conexão profunda. {"\n"}
              {"\n"}
            </Text>
          </>
        )}
        {language === "eng" && (
          <>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/leo.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              Scholar of shamanism and conductor of ceremonies, rites, study
              groups, courses, and shamanism workshops since 1991.{"\n"} Creator
              and conductor of the Shamanic Journeys Eagle Flight, a healing and
              self-knowledge ceremony through seasonal rites of passage, having
              taken this work to all regions of Brazil and other countries as
              well, through the "Shamanism Without Borders" Movement.{"\n"}{" "}
              Owner and editor of the website www.xamanismo.com.br.{"\n"}
              Founder and President of the Eclectic Center of Fluent Universal
              Light Sky of the Full Moon – Santo Daime.{"\n"}
              Ancestral Ambassador of the International Indigenous Council –
              Mexico – Promoted by UNESCO.{"\n"}
              Founder and President of the International Alliance of Universal
              Shamanism – IAUSH.{"\n"}
              Founder and Director of ESPAÇO – The Urban Kiva – Center for
              Shamanism Studies Eagle Flight.{"\n"}
              Creator of EBX – Brazilian Shamanism Meeting and VMX – Shamanic
              Musical Turn.{"\n"}
              Holistic therapist, acupuncturist. Trained in voice work and
              radio, Master of Ceremonies, and Storyteller – SENAC.{"\n"}
              Speaker and author of the books: The Eagle Flight and The Animal
              Spirit. {"\n"}
              {"\n"}I am a scholar of shamanism dedicated to intertwining
              ancestral wisdom with contemporary knowledge, creating a path that
              leads us to well-being and a deep understanding of life's
              challenges.{"\n"}
              This portal is more than a virtual space; it is an invitation to a
              spiritual journey, where I deeply value each individual's inner
              search – a search I consider sacred.{"\n"}
              My journey in shamanism is a personal exploration, far from
              representing any specific tradition. My years of research,
              initiations, and the application of spiritual knowledge have
              shaped the way I conduct rites and ceremonies, and how I interpret
              shamanic practices.{"\n"}
              My truth is found in the beauty of Divine Creation, a path mapped
              in the small wonders of nature – from plants to stars.
              {"\n"}
              The wisdom I share here has transformed my life, and I have seen
              it transform many others.{"\n"}I invite you to reflect: if you are
              seeking transformation, this journey could also be yours.
              {"\n"}
            </Text>

            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/leo2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"}I firmly believe that true power resides within each of us,
              emanating from the development of our gifts and inner potentials.
              {"\n"}
              This power can be identified as the Higher Self, Inner Christ,
              Kundalini, Mental Power, among others. The most important thing is
              to recognize and access the Divine Spark inherent in each of us.
              {"\n"}I understand that, regardless of the spiritual path chosen,
              it is essential to trust, have faith, and surrender to achieve
              full integration.{"\n"}
              The recognition of the Path of Truth emerges from the expansion of
              our consciousness, our personal experiences, and our
              relationships.{"\n"}
              The Path of Universal Shamanism: A Contemporary Vision Unification
              of Beliefs and the Language of Universal Love. I embrace the
              banner of “Universal Shamanism,” a path that allows spiritual
              alliances between different belief systems.{"\n"}I honor and value
              the teachings of each tradition I have crossed, weaving them
              together into a unified language of universal love.
              {"\n"}
              This is the heart of a “new shamanism,” adapted and relevant to
              the present day, which celebrates diversity and unity.{"\n"}
              {"\n"}
              Central to my philosophy is the understanding that “Everything is
              Sacred.”{"\n"}
              This perception guides us to unification in the universal current
              of beauty, peace, unconditional love, and physical and mental
              well-being.{"\n"}
              Recognizing the sacred in everything is the first step towards a
              life of harmony and deep connection. {"\n"}
              {"\n"}
            </Text>
          </>
        )}
        {language === "ita" && (
          <>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/leo.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              Studioso di sciamanesimo e conduttore di cerimonie, riti, gruppi
              di studio, corsi e workshop di sciamanesimo dal 1991.{"\n"}
              Creatore e conduttore delle Jornadas Xamânicas Voo da Águia,
              cerimonia di guarigione e autoconoscenza attraverso i riti di
              passaggio stagionali, avendo portato questo lavoro in tutte le
              regioni brasiliane e anche in altri paesi, tramite il Movimento
              “Sciamanesimo Senza Frontiere”.{"\n"} Proprietario ed editore del
              sito www.xamanismo.com.br.{"\n"} Fondatore e Presidente del Centro
              Eclettico della Fluente Luce Universale Cielo della Luna Piena –
              Santo Daime.{"\n"}
              Ambasciatore Ancestrale del Consiglio Indigeno Internazionale –
              Messico – Promosso dall'UNESCO.{"\n"} Fondatore e Presidente
              dell'Alleanza Internazionale di Sciamanesimo Universale – IAUSH.
              {"\n"} Fondatore e Direttore di ESPAÇO – La Kiva Urbana – Centro
              di Studi Sciamanici Voo da Águia.{"\n"} Creatore dell'EBX –
              Incontro Brasiliano di Sciamanesimo e del VMX – Virada Musical
              Xamânica.{"\n"}
              Terapeuta olistico, agopuntore. Formato in tecnica vocale e
              radiofonica, Maestro di Cerimonie e Raccontatore di Storie –
              SENAC.{"\n"} Palestrante e autore dei libri: Il Volo dell'Aquila e
              Lo Spirito Animale. {"\n"}
              {"\n"} Sono uno studioso di sciamanesimo dedicato a intrecciare le
              saggezze ancestrali con le conoscenze contemporanee, creando un
              cammino che ci conduce al benessere e alla comprensione profonda
              delle sfide della vita.{"\n"} Questo portale è più di uno spazio
              virtuale; è un invito a un viaggio spirituale, dove valorizzo
              profondamente la ricerca interiore di ciascuno – una ricerca che
              considero sacra.{"\n"} Il mio cammino nello sciamanesimo è
              un'esplorazione personale, lontano dal rappresentare qualsiasi
              tradizione specifica. I miei anni di ricerca, iniziazioni e
              applicazione delle conoscenze spirituali hanno plasmato il modo in
              cui conduco riti e cerimonie, e come interpreto le pratiche
              sciamaniche.{"\n"} La mia verità si trova nella bellezza della
              Creazione Divina, un cammino tracciato nelle piccole meraviglie
              della natura – dalle piante alle stelle.{"\n"}
              La saggezza che condivido qui ha trasformato la mia vita, e l'ho
              vista trasformare quella di molti altri.{"\n"} Ti invito a
              riflettere: se sei alla ricerca di trasformazione, questo viaggio
              potrebbe essere anche il tuo.{"\n"}
            </Text>

            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("@/assets/images/altro/leo2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"}
              Credo fermamente che il vero potere risieda dentro ciascuno di
              noi, emanando dallo sviluppo dei nostri doni e potenziali
              interiori.{"\n"} Questo potere può essere identificato come il Sé
              Superiore, Cristo Interno, Kundalini, Potere Mentale, tra gli
              altri. La cosa più importante è riconoscere e accedere alla
              Scintilla Divina inerente a ciascuno di noi.{"\n"} Comprendo che,
              indipendentemente dal cammino spirituale scelto, è essenziale
              fidarsi, avere fede e abbandonarsi per raggiungere l'integrazione
              completa.{"\n"} Il riconoscimento del Cammino della Verità emerge
              dall'espansione della nostra coscienza, delle nostre esperienze
              personali e delle nostre relazioni.
              {"\n"} Il Cammino dello Sciamanesimo Universale: Una Visione
              Contemporanea Unificazione delle Credenze e il Linguaggio
              dell'Amore Universale. Abbraccio la bandiera del “Sciamanesimo
              Universale”, un cammino che permette alleanze spirituali tra
              diversi sistemi di credenze.{"\n"} Onoro e valorizzo gli
              insegnamenti di ogni tradizione che ho incrociato, intrecciandoli
              insieme in un linguaggio unificato di amore universale.{"\n"}{" "}
              Questo è il cuore di un “nuovo sciamanesimo”, adattato e
              pertinente ai giorni nostri, che celebra la diversità e l'unità.
              {"\n"}
              {"\n"}
              Centrale nella mia filosofia è la comprensione che “Tutto è
              Sacro.”{"\n"}
              Questa percezione ci guida verso l'unificazione nella corrente
              universale della bellezza, della pace, dell'amore incondizionato e
              del benessere fisico e mentale.{"\n"}
              Riconoscere il sacro in tutto è il primo passo verso una vita di
              armonia e connessione profonda. {"\n"}
              {"\n"}
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
