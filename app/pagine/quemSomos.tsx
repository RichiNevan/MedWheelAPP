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
          <Image style={styles.image} source={require('@/assets/images/altro/leo.jpg')} />
          </View>
            <Text style={styles.testo}>
              Estudioso de xamanismo e condutor de cerimônias, ritos, grupos de
              estudo, cursos e oficinas de xamanismo desde 1991.{"\n"} Criador e
              condutor das Jornadas Xamânicas Voo da Águia, cerimonia de cura e
              autoconhecimento através dos ritos de passagens sazonais, tendo
              levado esse trabalho em todas as regiões brasileiras e em outros
              países também, através do Movimento “Xamanismo Sem Fronteiras”.{"\n"}
              Proprietário e editor do site www.xamanismo.com.br.{"\n"} Fundador e
              Presidente do Centro Eclético da Fluente Luz Universal Céu da Lua
              Cheia – Santo Daime.{"\n"} Embaixador Ancestral do Conselho Indígena
              Internacional – México – Promovido pela UNESCO.{"\n"} Fundador e
              Presidente da Aliança Internacional de Xamanismo Universal – IAUSH.{"\n"}
              Fundador e Diretor do ESPAÇO – A Kiva Urbana – Centro de Estudos
              de Xamanismo Voo da Águia.{"\n"} Idealizador do EBX – Encontro
              Brasileiro de Xamanismo e o VMX – Virada Musical Xamânica.{"\n"}
              Terapeuta holístico, acupunturista Formado em locução e
              radialismo, Mestre de Cerimonias e Contador de Histórias – SENAC.{"\n"}
              Professor de comunicação verbal, técnicas de apresentações em
              público.{"\n"} Personal Professional Coach e Master Practitioner em
              Programação Neurolinguística Sistêmica.{"\n"} Palestrante e escritor dos
              livros : O Voo da Águia e O Espírito Animal. {"\n"}{"\n"}Sou um estudioso de xamanismo dedicado a entrelaçar as
              sabedorias ancestrais com o conhecimento contemporâneo, criando um
              caminho que nos conduz ao bem-estar e à compreensão profunda dos
              desafios da vida.{"\n"} Este portal é mais do que um espaço virtual; é
              um convite para uma jornada espiritual, onde valorizo
              profundamente a busca interior de cada um – uma busca que
              considero sagrada.{"\n"} Minha trajetória no xamanismo é uma exploração
              pessoal, longe de representar qualquer tradição específica. Meus
              anos de pesquisa, iniciações e aplicação de conhecimentos
              espirituais moldaram a forma como conduzo ritos e cerimônias, e
              como interpreto as práticas xamânicas.{"\n"} A minha verdade encontra-se
              na beleza da Criação Divina, um caminho mapeado nas pequenas
              maravilhas da natureza – desde as plantas até as estrelas.{"\n"} A
              sabedoria que compartilho aqui transformou minha vida e vi
              transformar a de muitos outros.{"\n"} Convido você a refletir: se está
              em busca de transformação, esta jornada pode ser também a sua.{"\n"}
              Considero-me um “Bom Companheiro de Viagem”, apaixonado pela vida,
              pela natureza, pelas pessoas e, acima de tudo, pelo “Caminho do
              Amor” que encontro no Xamanismo Universal.{"\n"} A influência espiritual
              começou cedo na minha vida, com uma mãe benzedeira e um pai médium
              de Umbanda. {"\n"}Aos 11 anos, experiências iniciáticas e visões
              espirituais já faziam parte do meu cotidiano.{"\n"} Minha iniciação
              espiritual veio através do meu padrinho de batismo, Cidáo de
              Xangô, um mestre que o Criador colocou em meu caminho. Minha
              jornada é rica e diversificada, passando por escolas iniciáticas,
              artes marciais, terapias alternativas, yoga, e estudos profundos
              sobre ervas medicinais e aromaterapia.{"\n"} A sabedoria dos nativos
              norte-americanos, os ensinamentos sobre a Roda Medicinal, e as
              cerimônias da Tenda do Suor foram fundamentais em meu reencontro
              com o Sagrado. Destaco também as experiências inesquecíveis com
              xamãs no Peru e a imersão nas práticas da Igreja Nativa Americana.{"\n"}
              O estudo das “Plantas de Poder” me levou ao Centro Eclético
              Fluente Luz Universal – Santo Daime, onde atualmente conduzo
              rituais.{"\n"} Cada passo deste caminho me ensinou a “Caminhar na
              Beleza”. Convido você a se juntar a mim nesta jornada espiritual,
              a explorar o “Caminho do Amor” através do xamanismo, e a descobrir
              como esta sabedoria ancestral pode enriquecer e transformar sua
              vida.{"\n"}{"\n"}Em 1990, fundei o “Movimento
              Xamânico Universal”, um marco na minha jornada espiritual.{"\n"} Este
              movimento ergue a bandeira do “Xamanismo Universal”, promovendo
              alianças espirituais entre diversos sistemas de crenças.{"\n"} Ele se
              baseia na sabedoria da Roda Medicinal dos nativos
              norte-americanos, nos Ritos de Passagem do Calendário Sagrado e
              outras praticas ancestrais, todos adaptados à contemporaneidade.{"\n"} O
              princípio fundamental é a interconexão de todos na Família
              Universal, reconhecendo que “Tudo é Sagrado”, e buscando a
              harmonia com o universo, o amor incondicional, e o equilíbrio da
              mente e do corpo.{"\n"}{"\n"}Desde
              1992, dedico-me a apresentar este rico conhecimento por meio de
              cursos, workshops, cerimônias, formações de multiplicadores,
              jornadas e ritos.{"\n"} Dentre estes, as “Jornadas Xamânicas Voo da
              Águia” se destacam como uma experiência profundamente
              transformadora.{"\n"}{"\n"} Em 2010, iniciei o “Movimento Xamanismo Sem
              Fronteiras”, expandindo nossa missão para além das fronteiras
              nacionais.{"\n"} Esse movimento abraça a filosofia e as práticas do
              xamanismo universal, promovendo a união de entidades e indivíduos
              globalmente.{"\n"} Temos recebido convites de vários países, incluindo
              Europa, América do Norte e do Sul, Caribe, e também o movimento
              Xamanismo Brasil, levando a muitos Estados Brasileiros
              estabelecendo um diálogo enriquecedor entre diversas culturas e
              práticas espirituais.{"\n"}{"\n"}Em 2016, um passo significativo foi dado com a
              criação da IAUSH (International Alliance Of The Universal
              Shamanism). {"\n"}Esta aliança náo formalizada, é de coraçoes e
              dedica-se à preservação, estudo e disseminação das práticas
              xamânicas. {"\n"}A IAUSH enfrenta o desafio de resgatar e atualizar o
              conhecimento ancestral xamânico, integrando-o à Medicina Acadêmica
              e contribuindo para a saúde, autoconhecimento, e bem-estar.{"\n"} Além
              disso, apoia movimentos ambientais e indígenas, tecendo uma rede
              internacional de condutores e praticantes de xamanismo.{"\n"}{"\n"} Atualmente, lidero o ‘ESPAÇO – A KIVA
              URBANA’ e o Centro de Estudos de Xamanismo Voo da Águia.{"\n"} Aqui,
              compartilho cerimônias xamânicas e oficinas de trabalho, além de
              grupos de estudos e jornadas.{"\n"} Sou também criador da Comunidade de
              Xamanismo no Facebook
              (https://www.facebook.com/xamanismo.com.br/), um espaço para
              conectar e inspirar praticantes.{"\n"} O Centro forma multiplicadores da
              metodologia “Roda de Estudos de Xamanismo Universal Voo da Águia”,
              que desenvolvi para estudar e praticar o xamanismo universal no
              dia-a-dia.{"\n"} Esses multiplicadores, agora espalhados pelo Brasil e
              em vários países, atuam como facilitadores deste processo
              transformador.{"\n"}{"\n"}Com grande orgulho, compartilho minhas contribuições ao
              mundo literário do xamanismo. Em 1996, publiquei “O Voo da Águia”,
              um livro que oferece uma iniciação aos mistérios e magia do
              xamanismo, seguido por “O Espírito Animal” em 2000, ambos pela
              Editora Roca.{"\n"} Recentemente, em 2023, lançamos uma terceira edição
              atualizada de “O Voo da Águia” com a Editora Ajna, distribuída
              também em Portugal pela Livraria Senda e na Espanha através da
              Editora Cuantico.{"\n"} Além disso, estou ansioso pelo lançamento
              previsto para 2024 de “O Espírito Animal”. Também tive a honra de
              escrever a introdução para o livro “O Caminho do Xamã” de Michael
              Harner, publicado pela Editora Goya.{"\n"}{"\n"}Em 2005, idealizei o Primeiro Encontro
              Brasileiro de Xamanismo (EBX), um marco significativo que, após 13
              anos, deu origem ao Segundo Encontro, agora um evento fixo no
              calendário do xamanismo no Brasil.{"\n"}{"\n"}Em 2017, com o Céu da Lua Cheia e um grupo
              de irmãos do caminho, criei o movimento musical “VMX – Virada
              Musical Xamânica”. {"\n"}Este festival de canções de medicina,
              celebrando um ponto de encontro espiritual, se espalhou para a
              Europa e os Estados Unidos.{"\n"} Em julho de 2018, realizamos a
              primeira Virada Musical Chamânica em Madrid, e temos planos para a
              “Shamanic Musical Vigil” na Califórnia em 2019.{"\n"} Estes eventos são
              uma extensão da Virada Musical Xamânica que começou em Itapecerica
              da Serra, SP, no Sítio Lua Cheia.{"\n"}</Text>

              <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('@/assets/images/altro/leo2.jpg')} />
              </View>
              <Text style={styles.testo}>
              {"\n"}
              Acredito firmemente que o verdadeiro poder reside dentro de cada
              um de nós, emanando do desenvolvimento de nossos dons e potenciais
              internos.{"\n"} Este poder pode ser identificado como o Eu Superior,
              Cristo Interno, Kundalini, Poder Mental, entre outros. O mais
              importante é reconhecer e acessar a Centelha Divina inerente a
              cada um de nós.{"\n"} Entendo que, independentemente do caminho
              espiritual escolhido, é essencial confiar, ter fé e entregar-se
              para alcançar a integração plena.{"\n"}O reconhecimento do Caminho da
              Verdade emerge da expansão de nossa consciência, de nossas
              experiências pessoais e de nossos relacionamentos.{"\n"} O Caminho do
              Xamanismo Universal: Uma Visão Contemporânea Unificação das
              Crenças e a Linguagem do Amor Universal Abraço a bandeira do
              “Xamanismo Universal”, um caminho que permite alianças espirituais
              entre diversos sistemas de crenças.{"\n"} Honro e valorizo os
              ensinamentos de cada linha que cruzei, tecendo-os juntos numa
              linguagem unificada de amor universal.{"\n"} Este é o coração de um
              “novo xamanismo”, adaptado e relevante para os dias atuais, que
              celebra a diversidade e a unidade.{"\n"}{"\n"}Central para
              minha filosofia é o entendimento de que “Tudo é Sagrado”.{"\n"} Esta
              percepção nos guia à unificação na corrente universal da beleza,
              da paz, do amor incondicional e do bem-estar físico e mental.{"\n"}
              Reconhecer o sagrado em tudo é o primeiro passo para uma vida de
              harmonia e conexão profunda. {"\n"}{"\n"}
              Creio firmemente que a magia reside dentro de cada um de nós. É a
              busca interior que nos permite compreender e transformar os
              processos que retardam nosso progresso, guiando-nos no “Caminho da
              Beleza”. {"\n"}Esta jornada de autoconhecimento é essencial para a
              realização espiritual e pessoal.{"\n"}{"\n"}Mais importante do que a prática é viver em estado de
              ritual constante, mantendo uma consciência plena em todas as
              ações.{"\n"}Cada passo que damos deve ser uma expressão de amor, não só
              para nós mesmos, mas para a humanidade e toda a criação.{"\n"} É uma
              jornada de viver com propósito e intenção, honrando a vida em
              todas as suas formas. {"\n"}{"\n"}Minha missão é
              inspirar as pessoas a se conhecerem melhor, a buscarem a
              felicidade, a se conectarem com o Sagrado e a viverem em harmonia
              com todas as formas de vida.{"\n"} Aspiro a guiar os outros no caminho
              da autoexploração, ajudando-os a encontrar equilíbrio e paz em
              suas relações com todos os reinos da natureza e do espírito. {"\n"}{"\n"}Nos
              anos 90 fundei o IEC – Instituto Para a Expansáo da Consciencia,
              que desenvolvia formaçoes, cursos e atendimentos em terapias
              complementares e praticas ancestrais. {"\n"}{"\n"}Reconhecido pelo
              Conselho Indígena Internacional no México e promovido pela UNESCO,
              refletindo meu compromisso com as tradições e culturas indígenas.
              {"\n"}{"\n"} Pioneiro na realização de
              cerimônias de passagem das estações, como Solstícios e Equinócios,
              e em Festivais de Fogo, celebrando e honrando a natureza e seus
              ciclos. {"\n"}{"\n"} Certificado como
              Personal Professional Coach pela International Coaching Council e
              como Master Practitioner em Programação Neurolinguística Sistêmica
              pela PAHC. Terapeuta Holístico e Acupunturista: Combinando
              técnicas tradicionais e modernas para promover a saúde e o
              bem-estar. Comunicação e Educação: Formado em Locução e Radialismo
              pelo SENAC (DRT 27844/SP) e em dublagem pela Lypsing.{"\n"}
           Palestrante e conferencista: Compartilho minha sabedoria
              e experiências através de palestras, enriquecendo o conhecimento e
              a compreensão do público sobre o xamanismo e desenvolvimento
              pessoal.{"\n"}Gestão de Negócios: Com formação em Gestão de Negócios
              pela Universidade Braz Cubas, integrando habilidades de liderança
              e administração em minhas iniciativas. Especialista em
              Comunicação: Exerci o cargo de Gerente de Marketing Regional numa
              importante multinacional americana, Formado em Locução e
              Radialismo pelo SENAC (DRT 27844/SP) e em dublagem pela Lypsing.{"\n"}
              Além disso, sou Professor de Comunicação Verbal e Técnicas de
              Oratória, capacitando indivíduos a aprimorarem suas habilidades de
              fala e apresentação. Mestre de Cerimônias e Contador de Histórias.
            </Text>
          </>
        )}
        {language === "eng" && <Text style={styles.testo}></Text>}
        {language === "ita" && <Text style={styles.testo}></Text>}
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
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Cocchin",
    color: "darkred",
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageContainer: {
    position: "relative",
    width: '100%',
    height: 250,
  },
  headerBg: {
    width: '100%',
    height: '100%',
    opacity: 0.95
  },
  header: {
    borderBlockColor: 'white',
   borderColor: 'white',
  }
});
