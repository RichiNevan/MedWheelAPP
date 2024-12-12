import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useSettings } from "@/app/SettingsContext";
import { useNavigation } from "expo-router";

const Outono = () => {
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
        {language === "prt" && <Text style={styles.title}>OUTONO</Text>}
        {language === "eng" && <Text style={styles.title}>AUTUMN</Text>}
        {language === "ita" && <Text style={styles.title}>AUTUNNO</Text>}
        <View style={styles.imageView}>
          <Image
            style={[styles.image, { width: 350, height: 400, bottom: 50 }]}
            resizeMode="contain"
            source={require("@/assets/images/stagioni/autumn.jpg")}
          />
        </View>

        {language === "prt" && (
          <>
            <Text style={styles.testo}>
              ESTUDO DO OUTONO - PARTE 1 {"\n"}
              {"\n"}O poder que vem do Oeste é o do desenvolvimento da força
              interior, da autossuficiência, que nos permite enfrentar os
              desafios do dia-a-dia, as dificuldades da vida. É o reconhecimento
              dessa força que está dentro de todos nós. {"\n"}É um momento de
              acumular energias, de repensar o projeto de vida, os conhecimentos
              e deixar de lado o que é inútil, assim como as arvores deixam cair
              as suas folhas secas.{"\n"} O oeste tem o sentido de "olhar para
              dentro", da introspecção. Momento de avaliar o aprendizado das
              ações e adquirir experiência para tomar decisões mais sábias.
              {"\n"} De avaliar as nossas verdadeiras intenções e digeri-las
              como o Urso em sua caverna.{"\n"} O Poder do Oeste, simboliza a
              escuridão da caverna do urso também simboliza o útero, o elemento
              Terra, a Raça Negra, o Reino Mineral e suas riquezas, o corpo
              físico, os ossos.{"\n"} A função principal da Direção Oeste da
              Roda Medicinal (em ambos os hemisférios; olhando para o Polo Sul,
              fica na sua mão direita) é segurar, prender. {"\n"}O reino Mineral
              tem as rochas, pedras, gemas, substâncias minerais como suportes e
              condutores de grande energia.{"\n"} No pensamento nativo as rochas
              e pedras já estavam no planeta antes da vegetação, animais e
              humanos, sendo portanto, a mais antiga forma de vida entre os
              quatro reinos.{"\n"} Eles veem as pedras e rochas como os "ossos
              da Mãe-Terra", relacionam gemas a partes do corpo físico humano.
              {"\n"} Quando seguramos um quartzo, ou qualquer pedra na mão,
              estamos tocando em algo que esteve no planeta antes do homem
              aparecer.{"\n"} Kenneth Meadows em "Earth medicine: Element",
              narra que segundo a sabedoria antiga as gemas relacionadas com os
              cinco sentidos são: perídoto aos olhos e com a visão, ônix às
              orelhas e com a audição, a ágata às mãos e o tato, o topázio com a
              língua e o paladar, o jaspe com o nariz e com o olfato. O quartzo,
              é visto como portador de propriedades especiais de transformação e
              acumulação e expansão de energia, e hoje é usado por todos em
              calculadoras, relógios, computadores, etc.{"\n"} O corpo humano é
              dependente dos minerais inorgânicos essenciais e muitas desordens
              físicas podem ocorrer devido às deficiências ou excessos de
              minerais.{"\n"} Nosso corpo físico é o que nos prende aqui como
              parte da terra. Nele nós podemos explorar e experimentar o reino
              da matéria. A função do oeste é segurar, prender o que não
              significa estagnar, congelar algo para manter do jeito que é.
              {"\n"} Os ancestrais consideram segurar como uma pausa reflexiva
              antes da mudança. Meadows trata como um intervalo entre dar e
              receber ou de receber e dar.{"\n"} Uma aceitação do que é
              concebido com nossos próprios esforços e a consideração de dar de
              si ao sustento da roda para que ela gire.{"\n"} O oeste é
              relacionado na cosmologia nativa norte-americana com o olhar para
              dentro, introspecção. Fazemos a viagem de volta para o oeste para
              examinar nosso eu interno e avaliarmos o que necessitamos mudar
              para poder crescer no novo ciclo que se aproxima.{"\n"} A ênfase é
              na mudança e na transição. É também onde nós temos que enfrentar a
              realidade da morte. A morte como transição para o novo começo.{" "}
              {"\n"}O oeste é também o lugar dos sonhos e das visões sobre o
              futuro. Os índios americanos falam em dançar um sonho acordado, o
              giro dos sonhos em realidades físicas sendo práticos e
              realísticos.{"\n"} O oeste pode ser comparado ao outono que é a
              estação da consolidação quando o crescimento para e a preparação
              para a renovação começa.{"\n"} O oeste pode também ser comparado
              ao crepúsculo e ao sombrio. Meadows classifica bem os componentes
              do oeste: {"\n"}
              {"\n"}1. Qualidade: Mudança e transição.{"\n"} A vida está envolta
              na incerteza e no inesperado.. A mudança é inevitável, e uma coisa
              está determinada é que à partir do seu nascimento você caminha
              para a morte.{"\n"} Imagine que nossa caverna do urso inicial é no
              útero de nossa mãe, onde somos nutridos, antes de sermos
              concebidos, daí morremos nesse mundo e nascemos neste plano.{"\n"}
              Assim é morte, morremos nesta dimensão e nascemos em outra, onde
              passamos por ciclo, nos desfazemos de nossa personalidade e
              morremos naquela dimensão e voltamos para um novo útero, uma nova
              personalidade que se cria, onde embarcamos para uma aventura
              material, um ciclo sem fim.{"\n"} O xamã sabe da lei sagrada e
              natural de que a vida conduz à morte, assim como sabe que a morte
              conduz à vida.{"\n"} A realidade mostra a morte como parte da vida
              e como parte do processo de renascimento. Como um acordar e
              despertar contínuo{"\n"}. A morte é como um sono, que ao
              despertarmos ficamos renovados. Segundo Meadows: Há um pensamento
              de que ao morrer há uma sensação de entrar num túnel, de ouvir
              sons incomuns, mas agradáveis, de viajar para cima num ponto
              distante de luz.{"\n"} O processo de nascimento é similar mas mais
              traumático. Há uma sensação, de um som contínuo ao longo de um
              túnel, que é o útero da mãe e o portal do nascimento. Com
              nascimento há uma sensação de confinamento, de sentir uma pressão
              que carrega para baixo, visto que com morte há um sensação da
              liberação da pressão para cima.{"\n"} Se, consequentemente, você
              sobrevive depois que o corpo morre, você também existiu antes que
              o corpo esteve carregado com sua alma - apenas porque é o mesmo ‘
              você ‘ nessas vigílias após o sono. A morte é assim uma parte da
              vida e está neste contexto inteiro da continuidade da vida que uma
              outra lei cósmica - a lei do karma opera.{"\n"} Muitos autores
              descrevem o karma como lei de causa e efeito ou como uma dívida
              que deva ser paga por ações de vidas passadas. Segundo Meadows, o
              pensamento nativo tem uma compreensão diferente, eles o consideram
              um professor que ensina aspectos que estão fora do equilíbrio e
              que necessitam ser corrigidos. São as situações repetitivas da
              vida, os discos rachados, os velhos problemas que retornam
              repetitivas vezes, em circunstancias diferentes.{"\n"} Ele
              compreende lições de nossa vida que são parte de nosso destino.
              Lições que devemos aprender para crescermos espiritualmente,
              evoluirmos, e assim cumprirmos a missão de nossa existência.{"\n"}
              {"\n"} 2. Totem: Urso Cinzento {"\n"}Segundo a Roda medicinal dos
              índios norte-americanos, o animal associado ao poder do Oeste é o
              Urso Cinzento.{"\n"} Ele é o mais forte de todos os ursos.
              Autossuficiente, vive por sua própria força, e se cura através de
              seu conhecimento de ervas e sua ligação com a terra.{"\n"}{" "}
              Inspirados na grande força do Urso Cinzento, vamos buscar nossa
              força interna no período do outono.{"\n"} Vamos olhar para dentro,
              buscar a introspecção, ver nossa verdadeira intenção no coração,
              examinar nossas fraquezas, buscar as nossas forças e poder
              pessoal.{"\n"} Avaliamos as lições das experiências passadas, para
              tomarmos decisões sábias. No outono o urso vai se alimentando de
              todas as formas possíveis de energia (comida) para se preparar
              para a hibernação do inverno que traz a renovação.{"\n"} Caminha
              lentamente, e delicado apesar de sua força bruta.{"\n"}
              {"\n"} 3. Elemento: Terra{"\n"} O Elemento do Oeste é a Terra,
              representada pelo seu filho mais durável e forte, a pedra.{"\n"} A
              pedra não sugere apenas a solidificação mas a resiliência (
              resistir a pressão e ser flexível perante aos desafios) e
              segurança. A terra é o yin, o passivo, o receptivo, a nutrição.
              {"\n"}
              {"\n"} 4. Cor: Preto.{"\n"} A cor do oeste é o preto. A Luz sai da
              escuridão. Ele absorve e armazena, é a cor do mistério e da
              profundidade, da germinação.{"\n"}É a cor do olhar para dentro, da
              introspecção, do aspecto feminino de nossa existência, o escuro da
              caverna do urso, o útero da mãe.{"\n"}
              {"\n"} 5. Reino: Mineral. {"\n"}Quando a terra estava em seu
              estágio embrionário, as rochas tornaram-se como o esqueleto humano
              e podem ser consideradas como os ossos da terra assim como a as
              árvores e a vegetação ao cabelo, e assim por diante.{"\n"}
              Os cristais eram considerados (quartzo, por exemplo) como as
              pilhas, cérebro da Terra. Os xamãs sabiam que embora as rochas e
              as pedras não tivessem olhos como animais e seres humanos, têm um
              sentido ‘ da visão e embora não tenham as orelhas, as pedras
              escutam.{"\n"}
              {"\n"} 6. Corpo Celestial: Mãe Terra.{"\n"}
              {"\n"} O pensamento nativo trata a terra como ser vivo e
              verdadeiramente sua ‘ mãe ‘. Ela quem forneceu seu corpo físico,
              cuja a substância é sua substância e é nela onde as entidades do
              espírito podem encarnar e experimentar o reino físico. Deve-se dar
              amor e cuidados com a Mãe-Terra, com o mesmo sentimento e emoção
              que deve-se ter para com os humanos.{"\n"} É a Mãe que tudo nos
              dá, morada, água, alimento e beleza. Nos recebe à cada vida e
              acolhe carinhosamente nossa carne na morte.{"\n"}
              {"\n"} 7. Aspecto Humano: Corpo físico.{"\n"} O corpo físico é um
              veículo ou uma roupa para o espírito. Quando as forças que se
              operam no corpo físico estão na harmonia e equilibram o corpo, a
              saúde está boa. Se houver uma discordância ou um desequilíbrio, se
              materializa como a doença.{"\n"}
              {"\n"} 8. Período De Tempo: Presente.{"\n"} O futuro chega para
              nós de acordo com o que fazemos no presente.{"\n"}
              {"\n"} 9. Estação: Outono.{"\n"} O outono é a estação da
              consolidação, quando o crescimento para. A conclusão de um ciclo
              natural. O ciclo que se completa em si mesmo. {"\n"}
              {"\n"}10. Números: Dois e doze.{"\n"} É o número da dualidade. A
              criação material inteira que está sendo enfatizada no oeste, é uma
              expressão deste dualismo. A dualidade é a coisa a mais evidente na
              existência.{"\n"} Está a noite e dia, verão e inverno, inalação e
              exalação, quente e frio, sol e lua. Nos planos internos, doze é o
              número da estabilidade organizacional em um nível espiritual.
              {"\n"} É concernido também com o espírito dos planetas. {"\n"}
              {"\n"}11. Inimigo: Fraqueza / Impotência.{"\n"} Quando o poder é
              abusado ou empregado mal é auto-destrutivo, pode voltar em quem o
              abusou ou aplicou mal. Quando o poder é usado construtivamente e
              para o bem, então é nosso amigo.{"\n"} Desenvolva a
              auto-confiança. Seja positivo. Exercite seu poder. Resista o abuso
              do poder e a opressão.{"\n"}
              {"\n"} 12. Manifestação: Magia{"\n"} É a arte de fazer as mudanças
              desejadas. {"\n"}
            </Text>
            <View style={[styles.imageView, { width: 220 }]}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require("@/assets/images/stagioni/outono2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"}ESTUDO DO OUTONO – PARTE 2{"\n"} OUTONO – A FASE DE RECLUSÃO
              – RECESSÃO – INTROSPECÇÃO{"\n"}
              {"\n"} Meditando na vida, no Calendário Sagrado, na
              responsabilidade que alguns de nós assumimos com a transformação
              de nossas próprias vidas, já estamos prontos para mais uma jornada
              de transformação que não tem fim e se renova à cada estação.{"\n"}{" "}
              Neste momento nos preparamos para a introspecção, para o início do
              outono, tempo de digerir nossas ideias, nossas metas de olho na
              estação do futuro, o Inverno.{"\n"} É o momento em que as energias
              estão desaparecendo até o reino do imanifestado, então, é tempo
              mais para manifestar princípios espirituais, do que pedir
              benefícios materiais.{"\n"} No outono as folhas secam e caem, os
              últimos frutos são colhidos. A colheita é guardada para o inverno.
              O ciclo mostrou o crescimento na primavera, a exuberância no
              verão, e agora se encaminha para o fim. É a maturidade. O momento
              do crepúsculo, quando o Sol se põe e a vida diurna vai se
              recolhendo.{"\n"} O nível humano é empurrado para relacionar-se
              mais com os outros e participar e ajudar o que chega de
              associações, quer seja com grupo, família ou comunidade.{"\n"}{" "}
              Indica a morte do velho e a promessa de novos começos,
              renascimento. É o tempo de transformação e mudança de ênfase, para
              outras atividades, para o crescimento interior.{"\n"} Para avaliar
              tudo o que foi plantado e colhido, e agradecer a colheita seja ela
              farta ou escassa, tendo consciência do aprendizado, sem pedir nada
              nesta ocasião.{"\n"} O período de dia e de noite são iguais, é a
              época para colher o que semeamos na Primavera. A abundância da
              colheita também deve trazer o senso de preparação para o momento
              do frio que se aproxima, e para o ciclo de morte da natureza.
              {"\n"} Para entrarmos em introspecção, no nosso interior e de nos
              prepararmos para sobreviver, físicamente e espiritualmente,
              durante os meses de inverno.{"\n"} Para fazermos introspecção,
              para encontrar a sabedoria e o conhecimento, que vem com o período
              de maturidade. Momento de expansão da consciência, para mudar o
              nível de percepção e compreender o mistério da vida e da morte
              além dos medos e limitações.{"\n"} Na caverna nos contemplaremos
              as dualidades da vida; as alegrias e tristezas, forças e
              fraquezas, medos e amores.{"\n"} É lá que iremos liberar nossos
              sofrimentos antigos, vícios, obsessões. Onde aprenderemos a curar
              as feridas antigas e nos tornar curadores curados. {"\n"}Nesse
              estudo nos sentimos amorosamente envergonhados, quando temos
              consciência de ter feito algo que precisa ser corrigido, e, nos
              responsabilizamos por nossas ações.{"\n"} Iremos sentir nossa
              capacidade de curar, quando estivermos dispostos a corrigir nossos
              comportamentos inadequados e aprendemos a não carregar culpas.
              {"\n"} Na Caverna do Urso aprenderemos a perceber quando nos
              autossabotamos, quando temos atitudes inspiradas pela nossa
              sombra, e obtermos firmeza, através das virtudes, para seguirmos
              em frente.{"\n"}
              Buscaremos essa resposta dentro de nós mesmos. Seremos desafiados
              a enfrentar nossos medos, nosso sentido de autoimportância, a
              evitar que a sombra impeça nosso bem estar. {"\n"}As lições da
              Caverna do Urso nos ensinam a respeitar nosso Espaço Sagrado, a
              estabelecer limites saudáveis, a nos distanciar do que nos agride,
              a preservar nossa autoestima.{"\n"} É o tempo da maturidade.
              Podemos aprender sobre força, poder,
              adaptabilidade,responsabilidade, liderança, ensinamento,
              introspecção. Aprendemos o equilíbrio entre olhar para dentro e
              agir para fora. O lugar para tornar consciente os verdadeiros
              propósitos de nossas vidas.{"\n"} O útero da Mãe Terra é
              representado pela caverna do Urso. É o lugar de morrer para
              renascer. Da nutrição e da proteção. Do mundo subterrâneo e da
              escuridão, o Feminino Profundo.{"\n"} É o tempo para se encontrar
              consigo mesmo, meditar profundamente. Para ser nutrido com maior
              energia física, colocar os pés no chão. Para alcançar metas
              pessoais, conseguir silêncio interior e saúde fisica, mudar de
              emprego ou trabalho.{"\n"} A ênfase do Oeste é nas coisas sólidas
              e físicas. Nosso corpo físico é quem nos “segura” como parte da
              Terra. Cada um de nós é o centro do seu próprio Universo dentro da
              aura humana, e assim podemos experiênciar o reino da matéria.
              {"\n"} A Direção Oeste é ligada ao Outono, que é a estação de
              consolidação, quando para o crescimento è o esquema natural das
              coisas.{"\n"} Humanos armazenam frutos dos seus esforços e também
              examinam a si mesmos para descobrir que mudanças necessitam para
              progredir, quando o tempo de renovação chegar.{"\n"} Assim como as
              árvores liberam suas folhas, criando vazio no inverno e para a
              chegada das novas folhas na primavera, aprendemos a liberar,
              comportamentos, atitudes, apegos que não nos são úteis, criando
              espaços vazio para o novo, para a excelência.{"\n"} Esse “entrar
              dentro” é a essência de muitas experiências de vida que no Oeste
              acharão por sí próprios. O Poder do Oeste expressa-se como uma
              influência estável.{"\n"} A responsabilidade humana por reunir
              coisas em volta, de segurar coisas organizadas com direções,
              regras e condições claras, para ter pensamentos “curtos e secos”.
              O Oeste nos fala da capacidade de concretizar nossos objetivos e
              do pleno reconhecimento de nossas forças interiores.{"\n"}
              Tudo aquilo que o futuro nos reserva está sempre no Oeste, o lugar
              do nosso amanhã.{"\n"}Praticaremos a medicina introspecção e da
              Cura Física. É hibernando (poder do silêncio e da meditação) na
              caverna do urso (subconsciente) que vamos encontrar respostas para
              nossas perguntas.{"\n"} É o momento de rezar, de deleitar, de
              refletir, de agradecer e de colher. Um momento para honrar aqueles
              que já foram antes de nós, nossos antepassados.{"\n"} De agradecer
              nossos parentes para examinar nossas próprias vidas. É também um
              momento de aceitar as coisas como são. É o lugar de morrer para
              renascer de resignificar o propósito da vida.{"\n"} Nas palavras
              de Jamie Sams: Esta direção (Oeste) está relacionada com o Vazio,
              suas respostas vem da escura caverna do Urso.{"\n"} A capacidade
              de exercer a interiorização e a introspecção faz parte da energia
              feminina, que é uma energia mais receptiva.{"\n"} O ventre da
              mulher é o lugar onde todas as idéias, assim como todos os bebês
              são alimentados. A escuridão do ventre fértil da mulher é o lugar
              onde cada um de nós teve o seu começo (assim esperamos que
              continue!). O Oeste nos fala da capacidade de concretizar nossos
              objetivos e do pleno reconhecimento de nossas forças interiores.
              {"\n"}
              Tudo aquilo que o futuro nos reserva está sempre no Oeste, o lugar
              do nosso amanhã. É medicina introspecção e da Cura Física. É
              hibernando (poder do silêncio e da meditação) na caverna do urso
              (subconsciente) que vamos encontrar respostas para nossas
              perguntas. Pode ser evocado para poderes curativos.{"\n"} O Urso
              pode ser evocado para resistir a um ambiente hostil, e para trazer
              calor aos nossos corações. Desperta o poder feminino profundo. Na
              caverna do urso digerimos as nossas ideias, nossos pensamentos. Os
              Ventos do Oeste chegam com o outono, é o tempo de crescimento,
              onde as coisas chegam à maturidade. É tempo de colheita, onde
              somos compensados por nosso trabalho passado.{"\n"} Mudjekeewis
              (Espirito Guardião do Oeste) traz as brisas frescas do outono, nos
              ajudando a ir para nosso interior e buscar nossas próprias forças.
              {"\n"} O Poder do Oeste é uma influencia que realça a
              autossuficiência e o desenvolvimento de um tipo de força que chega
              do interior e que é a mais importante das forças.{"\n"} Quem
              nasceu nessa época é geralmente dotado de um grau de força
              interior para enfrentar as dificuldades da vida, mas
              frequentemente necessita reconhecer que deve colocar-se para fora
              quando necessário São mais introspectivos e sentem atração pela
              cura natural e medicinas complementares. ESTUDO DO OUTONO - PARTE
              3 Meadows relata que a ênfase do Oeste é nas coisas sólidas e
              físicas. Nosso corpo físico é quem nos “segura” como parte da
              Terra. {"\n"}
              Cada um de nós é o centro do seu próprio Universo dentro da aura
              humana, e assim podemos experienciar o reino da matéria.{"\n"} O
              corpo físico humano é uma peça de um equipamento complexo e
              altamente sofisticado. {"\n"}Nós crescemos de uma pequena célula
              do tamanho de um ponto de alfinete. Aquela célula era como um
              microchip miniaturizado, tão minúsculo que é invisível para o olho
              humano. Ainda contém um programa, um código genético, com a imagem
              do que você deve se tornar. {"\n"}Este programa, esta imagem, foi
              objetivada até a forma física com corpo, cabeça, pernas, braços,
              efeitos faciais, órgãos vitais, etc; cujo desenvolvimento, está de
              acordo com as leis cósmicas e naturais.{"\n"} O código genético é
              um sistema de transmissão de informações entre células e inclui
              interiormente uma estrutura matemática. A Roda Medicinal cuja Teia
              da Terra é baseada, é também estruturada com esse caminho
              harmônico.
              {"\n"}
              Assim como o oriental I Ching, como o Círculo Ancestral da Vida e
              Poder. Nesse código genético estão as instruções do bio-computador
              orgânico que é o nosso cérebro, cujos componentes podem ser
              carregados juntos e contém interiormente uma cobertura protetora,
              que é o crânio.{"\n"}O crânio é uma oitava de oito ossos. Ele era
              reverenciado como símbolo pelos ancestrais. Somente com a
              civilização, que o representou como um objeto sinistro.{"\n"} O
              Universo é mente. {"\n"}O crânio é o que contém o cérebro, que é
              um computador que dirige a mente e pode ser considerado o
              microcosmo para representar a mente da Fonte ” O Grande Espírito”.
              {"\n"}
              Quem põe o código genético para fazer prodígios, assim como um
              maravilhoso veículo físico para você? A inteligência! As coisas
              não acontecem simplesmente. Não há acidentes. {"\n"}Existe uma
              inteligência por detrás, e você pode dar o nome que quiser à essa
              inteligência. Desde que a inteligência é presente, há uma mente,
              que é o alicerce da inteligência.{"\n"} Pode você acreditar que
              seu nascimento foi apenas um acidente? Nossas células são como
              microchips – um pequenino circuito eletrônico que tem a capacidade
              de memorizar, processar e circular informações – um inteiro,
              fantástico universo de informações todas contidas num simples
              código. O corpo físico é mais do que um veículo de expressão.
              {"\n"} Ele não é você somente a seu serviço. É um meio de
              transportá-lo e o capacita para funcionar na Terra, dentro do
              reino físico da existência.{"\n"} Nunca desvalorize o seu corpo
              físico. O Outono vai se firmando, criando uma tensão. Ao sair do
              verão, o tempo flutua diariamente às vezes com o morno e como as
              chuvas do frio do inverno.{"\n"}A natureza faz a passagem da
              estação do crescimento e da produtividade para a estação da
              colheita e do ajuste. Onde o urso nos ensina o valor de sonhar, de
              entrar na introspecção, e como usar isso para a manifestação na
              realidade física.{"\n"} Do simbolismo da Roda Medicinal e do
              significado espiritual da 4 direções, é tempo para comemorar a
              paz, e preparar-se para um futuro que não envolva a violência, o
              racismo, a opressão. É o momento de rezar, de deleitar, de
              refletir, de agradecer e de colher. Um momento para honrar aqueles
              que já foram antes de nós, nossos antepassados. De agradecer
              nossos parentes para examinar nossas próprias vidas.{"\n"} É
              também um momento de aceitar as coisas como são. Na celebração da
              colheita é colocado um altar de frutas, vegetais coloridos, com
              velas. As velas queimarão durante toda a noite, agradecendo a tudo
              o que recebemos nessa estação.{"\n"}Procurar a orientação do
              Espírito do Outono para ajudar a ter maturidade. Rezamos para
              força e adaptabilidade, responsabilidade, ensino, liderança e o
              poder. {"\n"}Pedimos ajuda para encontrar nossa finalidade na vida
              e rezar para poder cumprir essa finalidade.{"\n"}A época de
              Mudjekeewis, o Espírito Guardião do Outono contém um paradoxo:
              embora vivencie o seu ponto mais alto de força, torna-se também
              consciente das pequenas mortes que ocorrem à sua volta; embora
              sinta que pode conquistar o mundo, torna-se consciente de sua
              própria mortalidade e o seu verdadeiro significado.{"\n"} A
              posição de Mudjekeewis é o lugar de se procurar, quando aspiramos
              a maturidade. Podemos aprender sobre força, poder, adaptabilidade,
              responsabilidade, liderança, introspecção. {"\n"}É a posição que
              realmente se preocupa com o bem estar dos outros. Ajuda a temperar
              a paixão e a acessar o conhecimento que se ganhou da vida. {"\n"}
              Aprendemos o equilíbrio entre olhar para dentro e agir para fora.
              {"\n"} O lugar para se ir quando sabemos quais são os verdadeiros
              propósitos de nossas vidas, mas precisamos de ajuda para
              realizá-los. Mudjekeewis traz a cura em nível espiritual, cura
              para tudo o que consideramos sagrado. É nessa época que podemos
              ser mais eficientes como líderes espirituais e cerimoniais. {"\n"}
              É quando temos bastante experiência da vida para compartilhar, que
              podemos dar os mais verdadeiros ensinamentos. O poder de
              Mudjekeewis é o de servir: servir com força, coragem, graça e
              habilidade. Para se encontrar consigo mesmo, meditar
              profundamente. Quando você necessita ser nutrido com maior energia
              física, quando você estiver aéreo e necessitar colocar os pés no
              chão.{"\n"} Para pedir por equilíbrio ecológico, alcançar sua
              metas pessoais, conseguir silêncio interior e saúde física, mudar
              de emprego ou trabalho, a Direção Oeste é o lugar para se sentar.{" "}
              {"\n"}
              {"\n"}
              {"\n"}Evocação{"\n"}
              {"\n"} ” Espírito da Direção Oeste, local de introspecção e
              intuição.{"\n"} Portal da saúde e do Elemento Terra – Cure-nos “.
              {"\n"}
              {"\n"} A lição maior de Mudjekeewis é a responsabilidade por nós
              mesmos, pela Terra e por todas as Nossas Relações. É a época em
              que nos preparamos para devolver nossa colheita à Mãe Terra.{" "}
              {"\n"}
              Quando a maioria das sementes cai de volta à terra para recomeçar
              o ciclo de vida. {"\n"}É nessa época da vida que as pessoas que
              foram agraciadas com a visão, se conhecem o suficiente para
              compartilhar suas lições.{"\n"}
              Mudjekeewis traz as dádivas da maturidade, da experiência, da
              especialização.{"\n"} Nesta época as pessoas descobrem quais são
              as suas verdadeiras habilidades e aptidões e ganham um
              conhecimento inabalável do que eles podem e não podem fazer na
              vida.{"\n"} É a época em que não se tem mais medo de dizer que
              algo é desconhecido para nós ou que está além de nossas
              capacidades.{"\n"} É época em que já estabelecemos firmemente
              nossos hábitos e padrões, quando finalmente nos conhecemos o
              suficiente para relaxar na vida.{"\n"} O Oeste é um tempo de força
              na vida humana, um tempo de equilíbrio. Por Todas As Nossas
              Relações!
            </Text>
          </>
        )}

        {language === "eng" && (
          <>
            <Text style={styles.testo}>
              AUTUMN STUDY - PART 1{"\n"}
              {"\n"}The power that comes from the West is that of developing
              inner strength and self-sufficiency, which enables us to face
              daily challenges and life's difficulties. It is the recognition of
              this power that resides within all of us. {"\n"}It is a moment to
              gather energy, rethink life projects, reassess knowledge, and
              discard what is useless, much like trees shed their dry leaves.
              {"\n"} The West represents "looking within," introspection. It is
              a time to evaluate the lessons learned from actions and gain
              experience to make wiser decisions.{"\n"} It is a moment to assess
              our true intentions and process them like the Bear in its cave.
              {"\n"} The Power of the West symbolizes the darkness of the bear's
              cave, which also represents the womb, the Earth element, the Black
              Race, the Mineral Kingdom and its riches, the physical body, and
              the bones.{"\n"} The primary function of the West Direction of the
              Medicine Wheel (in both hemispheres; when facing the South Pole,
              it is on your right hand) is to hold and contain. {"\n"}The
              Mineral Kingdom has rocks, stones, gems, and mineral substances as
              supports and conduits of great energy.{"\n"} In Native thought,
              rocks and stones were on the planet before vegetation, animals,
              and humans, and are therefore considered the oldest form of life
              among the four kingdoms.{"\n"} They see stones and rocks as the
              "bones of Mother Earth," relating gems to parts of the human
              physical body.{"\n"} When we hold a quartz or any stone in our
              hand, we are touching something that was on the planet before
              humans appeared.{"\n"} Kenneth Meadows, in "Earth Medicine:
              Element," narrates that according to ancient wisdom, gems
              associated with the five senses are: peridot for the eyes and
              vision, onyx for the ears and hearing, agate for the hands and
              touch, topaz for the tongue and taste, and jasper for the nose and
              smell. Quartz is seen as having special properties of
              transformation, accumulation, and expansion of energy, and today
              it is used by everyone in calculators, watches, computers, etc.
              {"\n"} The human body depends on essential inorganic minerals, and
              many physical disorders can occur due to mineral deficiencies or
              excesses.{"\n"} Our physical body is what binds us here as part of
              the earth. Through it, we can explore and experience the realm of
              matter. The function of the West is to hold, to contain—not to
              stagnate, but to pause and freeze something momentarily to
              maintain it as it is.{"\n"} Ancestors viewed holding as a
              reflective pause before change. Meadows describes it as an
              interval between giving and receiving, or between receiving and
              giving.{"\n"} It is an acceptance of what is conceived through our
              own efforts and a consideration of giving oneself to sustain the
              wheel so it can turn.{"\n"} The West is related, in Native
              American cosmology, to introspection and looking inward. We take
              the journey back to the West to examine our inner self and
              evaluate what needs to change so we can grow in the new cycle that
              approaches.{"\n"} The emphasis is on change and transition. It is
              also where we must face the reality of death. Death as a
              transition to a new beginning.{"\n"} The West is also the place of
              dreams and visions of the future. Native Americans speak of
              dancing a waking dream, turning dreams into physical realities by
              being practical and realistic.{"\n"} The West can be compared to
              autumn, the season of consolidation, when growth ceases, and
              preparation for renewal begins.{"\n"} The West can also be
              compared to twilight and the somber. Meadows well classifies the
              components of the West: {"\n"}
              {"\n"}1. Quality: Change and transition.{"\n"} Life is surrounded
              by uncertainty and the unexpected. Change is inevitable, and one
              thing is certain: from the moment of your birth, you are walking
              toward death.{"\n"} Imagine that our initial bear cave is the womb
              of our mother, where we are nurtured before being conceived. Then,
              we die in that world and are born into this plane.{"\n"} This is
              how death works: we die in this dimension and are born into
              another, where we go through cycles, shed our personality, and die
              in that dimension, returning to a new womb, a new personality that
              is created, where we embark on a material adventure, an endless
              cycle.{"\n"} The shaman understands the sacred and natural law
              that life leads to death, just as death leads to life.{"\n"}{" "}
              Reality shows death as part of life and as part of the rebirth
              process. It is like an ongoing awakening and renewal.{"\n"} Death
              is like sleep; when we awaken, we feel renewed. According to
              Meadows, there is a thought that upon dying, there is a sensation
              of entering a tunnel, hearing unusual but pleasant sounds, and
              traveling upward to a distant point of light.{"\n"} The process of
              birth is similar but more traumatic. There is a sensation of
              continuous sound through a tunnel, which is the mother’s womb and
              the portal of birth. With birth, there is a sensation of
              confinement, of feeling pressure that pulls downward, whereas with
              death, there is a sensation of release from pressure upward.{"\n"}{" "}
              Consequently, if you survive after the body dies, you also existed
              before the body was imbued with your soul—because it is the same
              "you" in these wakeful states after sleep. Death is thus a part of
              life, and in this whole context of life’s continuity, another
              cosmic law operates—the law of karma.{"\n"} Many authors describe
              karma as the law of cause and effect or as a debt to be paid for
              actions of past lives. According to Meadows, native thought has a
              different understanding; they consider it a teacher that
              highlights imbalances that need correction. These are the
              repetitive situations in life, the broken records, the old
              problems that return repeatedly under different circumstances.
              {"\n"} It involves the lessons of our life, which are part of our
              destiny. Lessons we must learn to grow spiritually, evolve, and
              thus fulfill the mission of our existence.{"\n"}
              {"\n"}2. Totem: Grizzly Bear {"\n"} According to the Native
              American Medicine Wheel, the animal associated with the power of
              the West is the Grizzly Bear.{"\n"} It is the strongest of all
              bears. Self-sufficient, it lives by its own strength and heals
              itself through its knowledge of herbs and its connection to the
              earth.
              {"\n"} Inspired by the great strength of the Grizzly Bear, let us
              seek our inner strength during the autumn period.{"\n"} Let us
              look inward, seek introspection, see our true intentions in our
              hearts, examine our weaknesses, and seek our strengths and
              personal power.
              {"\n"} We evaluate the lessons of past experiences to make wise
              decisions. In autumn, the bear feeds on all possible forms of
              energy (food) to prepare for winter hibernation, which brings
              renewal.
              {"\n"} It moves slowly and is delicate despite its brute strength.
              {"\n"}
              {"\n"}3. Element: Earth{"\n"} The element of the West is Earth,
              represented by its most enduring and strong offspring: the stone.
              {"\n"} The stone not only symbolizes solidification but also
              resilience (resisting pressure and being flexible in the face of
              challenges) and security. Earth is the yin, the passive, the
              receptive, the nurturing.{"\n"}
              {"\n"}4. Color: Black.{"\n"} The color of the West is black. Light
              emerges from darkness. It absorbs and stores; it is the color of
              mystery and depth, of germination.{"\n"} It is the color of
              looking inward, of introspection, of the feminine aspect of our
              existence—the darkness of the bear’s cave, the mother’s womb.
              {"\n"}
              {"\n"}5. Kingdom: Mineral. {"\n"} When the earth was in its
              embryonic stage, rocks became like the human skeleton and can be
              considered the bones of the earth, just as trees and vegetation
              can be likened to hair, and so on.{"\n"} Crystals (such as quartz,
              for example) were considered the batteries or brains of the Earth.
              Shamans knew that although rocks and stones do not have eyes like
              animals and humans, they possess a sense of "sight," and although
              they do not have ears, stones can hear.{"\n"}
              {"\n"}6. Celestial Body: Mother Earth.{"\n"}
              {"\n"} The native thought regards the earth as a living being and
              truly as its ‘mother.’ She is the one who provided your physical
              body, whose substance is her substance, and it is in her that
              spirit entities can incarnate and experience the physical realm.
              {"\n"} Love and care must be given to Mother Earth, with the same
              feelings and emotions that one should have for humans.{"\n"} She
              is the Mother who gives us everything: shelter, water, food, and
              beauty. She welcomes us in every life and lovingly embraces our
              flesh in death.
              {"\n"}
              {"\n"} 7. Human Aspect: Physical body.{"\n"} The physical body is
              a vehicle or a garment for the spirit.{"\n"} When the forces
              operating within the physical body are in harmony and balance, the
              body remains healthy. If discord or imbalance occurs, it
              materializes as illness.{"\n"}
              {"\n"} 8. Time Period: Present.{"\n"} The future comes to us
              according to what we do in the present.{"\n"}
              {"\n"} 9. Season: Autumn.{"\n"} Autumn is the season of
              consolidation when growth stops. It is the conclusion of a natural
              cycle, a cycle that completes itself. {"\n"}
              {"\n"} 10. Numbers: Two and twelve.{"\n"} Two is the number of
              duality. The entire material creation emphasized in the west is an
              expression of this dualism.{"\n"} Duality is the most evident
              aspect of existence.{"\n"} There is night and day, summer and
              winter, inhalation and exhalation, heat and cold, sun and moon.
              {"\n"} On inner planes, twelve is the number of organizational
              stability on a spiritual level.{"\n"} It is also concerned with
              the spirit of the planets.{"\n"}
              {"\n"} 11. Enemy: Weakness / Impotence.{"\n"} When power is abused
              or misused, it becomes self-destructive and can rebound on the one
              who misused it. When power is used constructively and for good,
              then it is our ally.{"\n"} Develop self-confidence. Be positive.
              Exercise your power. Resist the abuse of power and oppression.
              {"\n"}
              {"\n"} 12. Manifestation: Magic.{"\n"} It is the art of bringing
              about desired changes. {"\n"}
            </Text>
            <View style={[styles.imageView, { width: 220 }]}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require("@/assets/images/stagioni/outono2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"}AUTUMN STUDY – PART 2{"\n"} AUTUMN – THE PHASE OF WITHDRAWAL
              – RECESSION – INTROSPECTION{"\n"}
              {"\n"} Meditating on life, the Sacred Calendar, and the
              responsibility that some of us take on to transform our lives, we
              are ready for yet another endless journey of transformation that
              renews itself each season.{"\n"} At this moment, we prepare for
              introspection, for the start of autumn, a time to digest our ideas
              and goals with an eye on the future season, Winter.{"\n"} It is
              the time when energies fade into the realm of the unmanifested,
              making it more a time to manifest spiritual principles than to
              seek material benefits.{"\n"} In autumn, leaves dry and fall, the
              last fruits are harvested. The harvest is stored for winter. The
              cycle has shown growth in spring, abundance in summer, and now
              moves toward its end. It is maturity. The twilight moment, when
              the Sun sets and daytime life begins to withdraw.{"\n"} The human
              level is pushed to relate more to others, to participate and help
              in associations, whether with a group, family, or community.{"\n"}{" "}
              It signifies the death of the old and the promise of new
              beginnings, rebirth. It is a time of transformation and a shift in
              emphasis to other activities and inner growth.{"\n"} To assess
              everything planted and harvested, to give thanks for the harvest,
              whether plentiful or scarce, with awareness of the learning,
              without asking for anything at this moment.{"\n"} The period of
              day and night is equal, it is the time to reap what we sowed in
              Spring. The abundance of the harvest should also bring a sense of
              preparation for the approaching cold and the cycle of nature's
              death.{"\n"} To enter introspection, delve into our inner selves,
              and prepare to survive, physically and spiritually, through the
              winter months.{"\n"} To reflect inwardly, to find wisdom and
              knowledge that come with the period of maturity. A moment to
              expand consciousness, to change our perception, and to understand
              the mystery of life and death beyond fears and limitations.{"\n"}{" "}
              In the cave, we will contemplate life's dualities; joys and
              sorrows, strengths and weaknesses, fears and loves.{"\n"} It is
              there we will release old sufferings, addictions, and obsessions.
              Where we will learn to heal old wounds and become healed healers.
              {"\n"} In this study, we feel lovingly humbled when we become
              aware of having done something that needs correction, and we take
              responsibility for our actions.{"\n"} We will feel our capacity to
              heal when we are willing to correct inappropriate behaviors and
              learn not to carry guilt.{"\n"} In the Bear's Cave, we will learn
              to recognize when we sabotage ourselves, when our actions are
              inspired by our shadow, and gain steadfastness through virtues to
              move forward.{"\n"} We will seek these answers within ourselves.
              We will be challenged to face our fears, our sense of self-
              importance, to ensure the shadow does not block our well-being.
              {"\n"} The lessons of the Bear's Cave teach us to respect our
              Sacred Space, to set healthy boundaries, to distance ourselves
              from what harms us, to preserve our self- esteem.{"\n"} It is the
              time of maturity. We can learn about strength, power,
              adaptability, responsibility, leadership, teaching, and
              introspection. We learn to balance looking inward and acting
              outward. The place to become conscious of the true purposes of our
              lives.{"\n"} The womb of Mother Earth is represented by the Bear's
              Cave. It is the place to die and be reborn. Of nurturing and
              protection. Of the underground world and darkness, the Deep
              Feminine.{"\n"} It is the time to meet oneself, meditate deeply.
              To be nourished with greater physical energy, to ground ourselves.
              To achieve personal goals, attain inner silence and physical
              health, change jobs or work.{"\n"} The emphasis of the West is on
              solid and physical things. Our physical body “holds” us as part of
              the Earth. Each of us is the center of our own Universe within the
              human aura, and thus we can experience the realm of matter.{"\n"}{" "}
              The West Direction is linked to Autumn, which is the season of
              consolidation, when growth stops as the natural order of things.
              {"\n"} Humans store the fruits of their efforts and also examine
              themselves to discover what changes are needed to progress when
              the time for renewal arrives.{"\n"} Just as trees shed their
              leaves, creating emptiness in winter for new leaves to emerge in
              spring, we learn to release behaviors, attitudes, and attachments
              that no longer serve us, creating space for the new, for
              excellence.
              {"\n"} This “turning inward” is the essence of many life
              experiences that will find themselves in the West. The Power of
              the West is expressed as a stabilizing influence.{"\n"} The human
              responsibility of gathering things around, keeping things
              organized with directions, rules, and clear conditions, to have
              “short and dry” thoughts. The West tells us of the capacity to
              fulfill our goals and the full recognition of our inner strengths.
              {"\n"}
              Everything the future holds for us is always in the West, the
              place of our tomorrow.{"\n"} We will practice the medicine of
              introspection and Physical Healing. It is by hibernating (the
              power of silence and meditation) in the Bear's Cave (subconscious)
              that we will find answers to our questions.{"\n"} It is a moment
              to pray, delight, reflect, give thanks, and harvest. A moment to
              honor those who came before us, our ancestors.{"\n"} To thank our
              relatives and examine our own lives. It is also a moment to accept
              things as they are. It is the place to die to be reborn, to
              redefine the purpose of life.{"\n"} In the words of Jamie Sams:
              This direction (West) is related to the Void, its answers come
              from the dark cave of the Bear.{"\n"} The capacity for
              introspection and inner reflection is part of the feminine energy,
              which is more receptive.{"\n"} A woman's womb is the place where
              all ideas, just like all babies, are nurtured. The darkness of the
              fertile womb of a woman is where each of us began (as we hope it
              continues!). The West tells us of the capacity to fulfill our
              goals and the full recognition of our inner strengths.{"\n"}{" "}
              Everything the future holds for us is always in the West, the
              place of our tomorrow. It is the medicine of introspection and
              Physical Healing. It is by hibernating (the power of silence and
              meditation) in the Bear's Cave (subconscious) that we will find
              answers to our questions.{"\n"} It can be invoked for healing
              powers.{"\n"} The Bear can be invoked to withstand a hostile
              environment and bring warmth to our hearts. It awakens deep
              feminine power. In the Bear's Cave, we digest our ideas, our
              thoughts. The Winds of the West arrive with autumn; it is the time
              of growth, where things reach maturity. It is the time of harvest,
              where we are rewarded for our past work.{"\n"} Mudjekeewis
              (Guardian Spirit of the West) brings the cool breezes of autumn,
              helping us turn inward to seek our inner strength.{"\n"} The Power
              of the West is an influence that enhances self-sufficiency and the
              development of a type of strength that comes from within, which is
              the most important of strengths.{"\n"} Those born in this time are
              often endowed with a degree of inner strength to face life's
              challenges but often need to recognize when to step outward when
              necessary. They are more introspective and drawn to natural
              healing and complementary medicines. STUDY ON AUTUMN - PART 3
              Meadows reports that the emphasis of the West is on solid and
              physical things. {"\n"}
              Our physical body is what “holds” us as part of the Earth. {"\n"}
              Each one of us is the center of their own Universe within the
              human aura, and so we can experience the realm of matter. {"\n"}
              The human physical body is a piece of a complex and highly
              sophisticated apparatus. {"\n"}
              We grow from a tiny cell the size of a pinhead. That cell was like
              a miniaturized microchip, so tiny that it is invisible to the
              human eye. It still contains a program, a genetic code, with the
              image of what you are meant to become. {"\n"}
              This program, this image, has been projected into the physical
              form with a body, head, legs, arms, facial features, vital organs,
              etc., whose development is in accordance with cosmic and natural
              laws. {"\n"}
              The genetic code is a system for transmitting information between
              cells and internally includes a mathematical structure. The
              Medicine Wheel, upon which the Web of the Earth is based, is also
              structured with this harmonic path. {"\n"}
              Just like the Eastern I Ching, like the Ancestral Circle of Life
              and Power. In this genetic code are the instructions for the
              bio-computer that is our brain, whose components can be loaded
              together and contain within them a protective cover, which is the
              skull. {"\n"}
              The skull is an octave of eight bones. It was revered as a symbol
              by our ancestors. Only with civilization did it come to be seen as
              a sinister object. {"\n"}
              The Universe is mind. {"\n"}
              The skull is what contains the brain, which is a computer that
              directs the mind and can be considered the microcosm that
              represents the mind of the Source, “The Great Spirit.” {"\n"}
              Who sets the genetic code to perform miracles, just as a wonderful
              physical vehicle for you? Intelligence! Things don’t just happen.
              There are no accidents. {"\n"}
              There is intelligence behind everything, and you can call it
              whatever you like. As long as intelligence is present, there is a
              mind, which is the foundation of intelligence. {"\n"}
              Can you believe that your birth was just an accident? Our cells
              are like microchips – a tiny electronic circuit that has the
              ability to memorize, process, and circulate information – a whole,
              fantastic universe of information all contained in a simple code.
              The physical body is more than a vehicle for expression. {"\n"}
              It is not just at your service. It is a means to transport you and
              enables you to function on Earth, within the physical realm of
              existence. {"\n"}
              Never undervalue your physical body. The Autumn is settling in,
              creating tension. As summer fades, the weather fluctuates daily,
              sometimes with warmth and the rains of winter’s cold. {"\n"}
              Nature makes the transition from the season of growth and
              productivity to the season of harvest and adjustment. Where the
              bear teaches us the value of dreaming, of entering introspection,
              and how to use this for manifestation in physical reality. {"\n"}
              From the symbolism of the Medicine Wheel and the spiritual meaning
              of the 4 directions, it is time to celebrate peace, and prepare
              for a future that does not involve violence, racism, or
              oppression. It is the moment to pray, to delight, to reflect, to
              give thanks, and to harvest. A time to honor those who have gone
              before us, our ancestors. To thank our relatives for examining our
              own lives. {"\n"}
              It is also a time to accept things as they are. In the celebration
              of the harvest, an altar of fruits, colorful vegetables, and
              candles is set up. The candles will burn all night, giving thanks
              for everything we received in this season. {"\n"}
              Seek the guidance of the Spirit of Autumn to help attain maturity.
              We pray for strength and adaptability, responsibility, teaching,
              leadership, and power. {"\n"}
              We ask for help to find our purpose in life and pray for the power
              to fulfill that purpose. {"\n"}
              The time of Mudjekeewis, the Spirit Guardian of Autumn, contains a
              paradox: although it experiences its highest point of strength, it
              also becomes aware of the small deaths occurring around it;
              although it feels it can conquer the world, it becomes aware of
              its own mortality and its true meaning. {"\n"}
              The position of Mudjekeewis is the place to seek when we aspire to
              maturity. We can learn about strength, power, adaptability,
              responsibility, leadership, introspection. {"\n"}
              It is the position that truly cares about the well-being of
              others. It helps temper passion and access the knowledge gained
              from life. {"\n"}
              We learn the balance between looking inward and acting outward.{" "}
              {"\n"}
              The place to go when we know what the true purposes of our lives
              are, but need help in fulfilling them. Mudjekeewis brings healing
              on a spiritual level, healing for everything we consider sacred.
              It is during this time that we can be the most effective as
              spiritual and ceremonial leaders. {"\n"}
              When we have enough life experience to share, we can give the most
              genuine teachings. The power of Mudjekeewis is to serve: to serve
              with strength, courage, grace, and skill. To find yourself,
              meditate deeply. When you need to be nourished with greater
              physical energy, when you are airy and need to place your feet on
              the ground. {"\n"}
              To ask for ecological balance, achieve your personal goals, gain
              inner silence and physical health, change jobs or work, the West
              is the place to sit. {"\n"}
              Evocation {"\n"}
              "Spirit of the West, place of introspection and intuition. {"\n"}
              Portal of health and the Earth Element – Heal us." {"\n"}
              The greatest lesson of Mudjekeewis is responsibility for
              ourselves, the Earth, and all our Relations. It is the time when
              we prepare to give back our harvest to Mother Earth. {"\n"}
              When most of the seeds fall back to the earth to begin the cycle
              of life again. {"\n"}
              It is during this time in life that those who have been graced
              with vision, know themselves enough to share their lessons. {"\n"}
              Mudjekeewis brings the gifts of maturity, experience, and
              specialization. {"\n"}
              During this time, people discover their true abilities and
              aptitudes and gain an unshakable understanding of what they can
              and cannot do in life. {"\n"}
              It is a time when we are no longer afraid to say that something is
              unknown to us or that it is beyond our abilities. {"\n"}
              It is the time when we have firmly established our habits and
              patterns, when we finally know ourselves enough to relax in life.{" "}
              {"\n"}
              The West is a time of strength in human life, a time of balance.
              For All Our Relations!
            </Text>
          </>
        )}

        {language === "ita" && (
          <>
            <Text style={styles.testo}>
              STUDIO DELL'AUTUNNO - PARTE 1{"\n"}
              {"\n"}Il potere che viene dall'Ovest è quello dello sviluppo della
              forza interiore e dell'autosufficienza, che ci permette di
              affrontare le sfide quotidiane e le difficoltà della vita. È il
              riconoscimento di questa forza che risiede dentro ognuno di noi.{" "}
              {"\n"}È un momento per accumulare energie, ripensare i progetti di
              vita, rivalutare le conoscenze e abbandonare ciò che è inutile,
              proprio come gli alberi lasciano cadere le loro foglie secche.
              {"\n"} L'Ovest rappresenta il "guardarsi dentro," l'introspezione.
              È un momento per valutare le lezioni apprese dalle azioni e
              acquisire esperienza per prendere decisioni più sagge.{"\n"} È il
              momento per valutare le nostre vere intenzioni e processarle come
              l'Orso nella sua caverna.{"\n"} Il Potere dell'Ovest simboleggia
              l'oscurità della caverna dell'orso, che rappresenta anche il
              grembo, l'elemento Terra, la Razza Nera, il Regno Minerale e le
              sue ricchezze, il corpo fisico e le ossa.{"\n"} La funzione
              principale della Direzione Ovest della Ruota di Medicina (in
              entrambi gli emisferi; guardando il Polo Sud, si trova alla tua
              mano destra) è quella di contenere e trattenere. {"\n"}Il Regno
              Minerale ha rocce, pietre, gemme e sostanze minerali come supporti
              e conduttori di grande energia.
              {"\n"} Nel pensiero nativo, le rocce e le pietre erano sul pianeta
              prima della vegetazione, degli animali e degli esseri umani e sono
              quindi considerate la forma di vita più antica tra i quattro
              regni.
              {"\n"} Vedono le pietre e le rocce come le "ossa della Madre
              Terra," associando le gemme a parti del corpo fisico umano.{"\n"}{" "}
              Quando teniamo in mano un quarzo o qualsiasi pietra, stiamo
              toccando qualcosa che era sul pianeta prima dell'apparizione
              dell'uomo.{"\n"} Kenneth Meadows, in "Earth Medicine: Element,"
              racconta che, secondo l'antica saggezza, le gemme associate ai
              cinque sensi sono: il peridoto per gli occhi e la vista, l'onice
              per le orecchie e l'udito, l'agata per le mani e il tatto, il
              topazio per la lingua e il gusto, e il diaspro per il naso e
              l'olfatto. Il quarzo è considerato portatore di proprietà speciali
              di trasformazione, accumulazione ed espansione dell'energia, e
              oggi è utilizzato da tutti in calcolatrici, orologi, computer,
              ecc.{"\n"} Il corpo umano dipende dai minerali inorganici
              essenziali, e molti disturbi fisici possono verificarsi a causa di
              carenze o eccessi di minerali.{"\n"} Il nostro corpo fisico è ciò
              che ci lega qui come parte della terra. Attraverso di esso
              possiamo esplorare e sperimentare il regno della materia. La
              funzione dell'Ovest è contenere, trattenere, non stagnare, ma fare
              una pausa per mantenere qualcosa com'è.{"\n"} Gli antenati
              vedevano il trattenere come una pausa riflessiva prima del
              cambiamento. Meadows lo descrive come un intervallo tra il dare e
              il ricevere o tra il ricevere e il dare.{"\n"} È un'accettazione
              di ciò che è stato concepito attraverso i nostri sforzi e una
              considerazione del dare sé stessi per sostenere la ruota affinché
              possa girare.{"\n"} L'Ovest è legato, nella cosmologia nativa
              nordamericana, all'introspezione e al guardarsi dentro. Torniamo
              verso l'Ovest per esaminare il nostro io interiore e valutare cosa
              dobbiamo cambiare per poter crescere nel nuovo ciclo che si
              avvicina.{"\n"} L'enfasi è sul cambiamento e sulla transizione. È
              anche il luogo in cui dobbiamo affrontare la realtà della morte.
              La morte come transizione verso un nuovo inizio.{"\n"} L'Ovest è
              anche il luogo dei sogni e delle visioni del futuro. I nativi
              americani parlano di danzare un sogno ad occhi aperti,
              trasformando i sogni in realtà fisiche essendo pratici e
              realistici.{"\n"} L'Ovest può essere paragonato all'autunno, la
              stagione della consolidazione, quando la crescita si ferma e
              inizia la preparazione per il rinnovamento.{"\n"} L'Ovest può
              anche essere paragonato al crepuscolo e al cupo. Meadows
              classifica bene i componenti dell'Ovest: {"\n"}
              {"\n"}1. Qualità: Cambiamento e transizione.{"\n"} La vita è
              avvolta nell'incertezza e nell'inaspettato. Il cambiamento è
              inevitabile, e una cosa è certa: dal momento della tua nascita,
              cammini verso la morte.{"\n"} Immagina che la nostra caverna
              iniziale dell'orso sia il grembo di nostra madre, dove siamo
              nutriti prima di essere concepiti. Poi, moriamo in quel mondo e
              nasciamo in questo piano.
              {"\n"} Questo è il funzionamento della morte: moriamo in questa
              dimensione e nasciamo in un'altra, dove attraversiamo cicli,
              abbandoniamo la nostra personalità e moriamo in quella dimensione,
              tornando a un nuovo grembo, una nuova personalità che si crea,
              dove intraprendiamo un'avventura materiale, un ciclo senza fine.
              {"\n"} Lo sciamano comprende la legge sacra e naturale secondo cui
              la vita conduce alla morte, così come la morte conduce alla vita.
              {"\n"} La realtà mostra la morte come parte della vita e come
              parte del processo di rinascita. È come un continuo risveglio e
              rinnovamento.
              {"\n"} La morte è come il sonno; quando ci svegliamo, ci sentiamo
              rinnovati. Secondo Meadows, c'è un pensiero secondo cui, nel
              morire, si prova la sensazione di entrare in un tunnel, di udire
              suoni insoliti ma piacevoli, e di viaggiare verso l'alto fino a un
              punto lontano di luce.{"\n"} Il processo di nascita è simile ma
              più traumatico. Si prova una sensazione di suono continuo lungo un
              tunnel, che è il grembo materno e il portale della nascita. Con la
              nascita, si avverte una sensazione di confinamento, di sentire una
              pressione che spinge verso il basso, mentre con la morte si prova
              una sensazione di rilascio dalla pressione verso l'alto.{"\n"} Di
              conseguenza, se sopravvivi dopo che il corpo muore, esistevi anche
              prima che il corpo fosse impregnato della tua anima—perché è lo
              stesso "te" in questi stati di veglia dopo il sonno. La morte è
              quindi una parte della vita e, in questo intero contesto di
              continuità della vita, opera un'altra legge cosmica: la legge del
              karma.{"\n"} Molti autori descrivono il karma come la legge di
              causa ed effetto o come un debito che deve essere saldato per le
              azioni delle vite passate. Secondo Meadows, il pensiero nativo ha
              una comprensione diversa; lo considerano un insegnante che
              evidenzia squilibri che necessitano di correzione. Queste sono le
              situazioni ripetitive della vita, i dischi rotti, i vecchi
              problemi che ritornano ripetutamente in circostanze diverse.{"\n"}{" "}
              Comprende le lezioni della nostra vita, che fanno parte del nostro
              destino. Lezioni che dobbiamo imparare per crescere
              spiritualmente, evolverci e così adempiere alla missione della
              nostra esistenza.{"\n"}
              {"\n"}2. Totem: Orso Grizzly {"\n"} Secondo la Ruota della
              Medicina dei nativi americani, l'animale associato al potere
              dell'Ovest è l'Orso Grizzly.{"\n"} È il più forte di tutti gli
              orsi. Autosufficiente, vive grazie alla propria forza e si cura
              grazie alla sua conoscenza delle erbe e al suo legame con la
              terra.{"\n"} Ispirati dalla grande forza dell'Orso Grizzly,
              cerchiamo la nostra forza interiore durante il periodo autunnale.
              {"\n"} Guardiamo dentro di noi, cerchiamo l'introspezione, vediamo
              le nostre vere intenzioni nel cuore, esaminiamo le nostre
              debolezze e cerchiamo le nostre forze e il potere personale.{"\n"}{" "}
              Valutiamo le lezioni delle esperienze passate per prendere
              decisioni sagge. In autunno, l'orso si nutre di tutte le forme
              possibili di energia (cibo) per prepararsi al letargo invernale,
              che porta rinnovamento.{"\n"} Cammina lentamente, ed è delicato
              nonostante la sua forza bruta.
              {"\n"}
              {"\n"}3. Elemento: Terra{"\n"} L'elemento dell'Ovest è la Terra,
              rappresentata dal suo figlio più resistente e forte: la pietra.
              {"\n"} La pietra non simboleggia solo la solidificazione ma anche
              la resilienza (resistere alla pressione ed essere flessibili di
              fronte alle sfide) e la sicurezza. La terra è lo yin, il passivo,
              il ricettivo, il nutrimento.{"\n"}
              {"\n"}4. Colore: Nero.{"\n"} Il colore dell'Ovest è il nero. La
              luce emerge dall'oscurità. Assorbe e conserva; è il colore del
              mistero e della profondità, della germinazione.{"\n"} È il colore
              del guardare dentro, dell'introspezione, dell'aspetto femminile
              della nostra esistenza—l'oscurità della caverna dell'orso, il
              grembo della madre.
              {"\n"}
              {"\n"}5. Regno: Minerale. {"\n"} Quando la terra era nel suo
              stadio embrionale, le rocce divennero come lo scheletro umano e
              possono essere considerate come le ossa della terra, così come gli
              alberi e la vegetazione possono essere paragonati ai capelli, e
              così via.
              {"\n"} I cristalli (come il quarzo, ad esempio) erano considerati
              le batterie o i cervelli della Terra. Gli sciamani sapevano che,
              anche se le rocce e le pietre non hanno occhi come gli animali e
              gli esseri umani, possiedono un senso di "vista," e anche se non
              hanno orecchie, le pietre possono ascoltare.{"\n"}
              {"\n"}6. Corpo Celeste: Madre Terra.{"\n"}
              {"\n"} Il pensiero nativo considera la terra come un essere
              vivente e, veramente, come la sua ‘madre.’ È lei che ha fornito il
              tuo corpo fisico, la cui sostanza è la sua sostanza, ed è in lei
              che le entità dello spirito possono incarnarsi ed esperimentare il
              regno fisico.
              {"\n"} Bisogna dare amore e cure a Madre Terra, con gli stessi
              sentimenti ed emozioni che si dovrebbero avere verso gli esseri
              umani.{"\n"} È la Madre che ci dà tutto: dimora, acqua, cibo e
              bellezza. Ci accoglie in ogni vita e abbraccia amorevolmente la
              nostra carne nella morte.{"\n"}
              {"\n"} 7. Aspetto Umano: Corpo fisico.{"\n"} Il corpo fisico è un
              veicolo o un abito per lo spirito.{"\n"} Quando le forze che
              operano nel corpo fisico sono in armonia ed equilibrio, il corpo
              rimane sano. Se si verifica una discordanza o uno squilibrio, si
              manifesta come malattia.{"\n"}
              {"\n"} 8. Periodo di Tempo: Presente.{"\n"} Il futuro arriva a noi
              in base a ciò che facciamo nel presente.{"\n"}
              {"\n"} 9. Stagione: Autunno.{"\n"} L’autunno è la stagione della
              consolidazione, quando la crescita si ferma. È la conclusione di
              un ciclo naturale, un ciclo che si completa da solo.{"\n"}
              {"\n"} 10. Numeri: Due e dodici.{"\n"} Due è il numero della
              dualità.{"\n"} L'intera creazione materiale enfatizzata a ovest è
              un’espressione di questo dualismo.{"\n"} La dualità è l’aspetto
              più evidente dell’esistenza.{"\n"} Ci sono notte e giorno, estate
              e inverno, inspirazione ed espirazione, caldo e freddo, sole e
              luna.
              {"\n"} Nei piani interiori, dodici è il numero della stabilità
              organizzativa a livello spirituale.{"\n"} È anche legato allo
              spirito dei pianeti.{"\n"}
              {"\n"} 11. Nemico: Debolezza / Impotenza.{"\n"} Quando il potere è
              abusato o usato male, diventa autodistruttivo e può ripercuotersi
              su chi ne ha abusato. Quando il potere è usato in modo costruttivo
              e per il bene, allora è nostro alleato.{"\n"} Sviluppa fiducia in
              te stesso. Sii positivo. Esercita il tuo potere. Resisti all’abuso
              di potere e all’oppressione.{"\n"}
              {"\n"} 12. Manifestazione: Magia.{"\n"} È l’arte di apportare i
              cambiamenti desiderati. {"\n"}
            </Text>
            <View style={[styles.imageView, { width: 220 }]}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require("@/assets/images/stagioni/outono2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"}STUDIO DELL’AUTUNNO – PARTE 2{"\n"}
              AUTUNNO – LA FASE DI RITIRO – RECESSIONE – INTROSPEZIONE{"\n"}
              {"\n"}
              Meditando sulla vita, sul Calendario Sacro, sulla responsabilità
              che alcuni di noi assumono per la trasformazione delle proprie
              vite, siamo già pronti per un altro viaggio di trasformazione
              senza fine, che si rinnova a ogni stagione.{"\n"}
              In questo momento ci prepariamo per l’introspezione, per l’inizio
              dell’autunno, un tempo per assimilare le nostre idee, i nostri
              obiettivi, con lo sguardo rivolto alla stagione futura, l’inverno.
              {"\n"}È il momento in cui le energie svaniscono fino al regno del
              non manifestato; quindi, è un tempo più propizio per manifestare
              principi spirituali che per chiedere benefici materiali.{"\n"}
              In autunno le foglie si seccano e cadono, gli ultimi frutti
              vengono raccolti. Il raccolto viene conservato per l’inverno. Il
              ciclo ha mostrato la crescita in primavera, l’esuberanza in
              estate, e ora si avvia verso la conclusione. È la maturità.{"\n"}
              Il crepuscolo, quando il sole tramonta e la vita diurna si ritira.
              {"\n"}
              Il livello umano viene spinto a relazionarsi di più con gli altri,
              partecipare e aiutare nelle associazioni che sorgono, sia che si
              tratti di gruppi, famiglie o comunità.{"\n"}
              Indica la morte del vecchio e la promessa di nuovi inizi, di
              rinascita. È un tempo di trasformazione e di cambiamento di enfasi
              verso altre attività, per la crescita interiore.{"\n"}
              Per valutare tutto ciò che è stato seminato e raccolto, e
              ringraziare per il raccolto, sia esso abbondante o scarso, avendo
              consapevolezza dell’apprendimento, senza chiedere nulla in questa
              occasione.{"\n"}
              Il periodo di uguale durata tra giorno e notte è il momento di
              raccogliere ciò che abbiamo seminato in primavera. L’abbondanza
              del raccolto dovrebbe anche portarci il senso della preparazione
              per il freddo che si avvicina e per il ciclo di morte della
              natura.{"\n"}
              Per entrare nell’introspezione, guardare dentro di noi e
              prepararci a sopravvivere, fisicamente e spiritualmente, durante i
              mesi invernali.{"\n"}
              Per fare introspezione, trovare saggezza e conoscenza, che
              arrivano con il periodo della maturità. Momento di espansione
              della coscienza, per cambiare il livello di percezione e
              comprendere il mistero della vita e della morte oltre le paure e
              le limitazioni.
              {"\n"}
              Nella caverna contempleremo le dualità della vita: le gioie e le
              tristezze, le forze e le debolezze, le paure e gli amori.{"\n"}È
              lì che libereremo le nostre sofferenze antiche, le dipendenze, le
              ossessioni. Impareremo a curare le ferite antiche e a diventare
              guaritori guariti.{"\n"}
              In questo studio ci sentiamo amorevolmente imbarazzati, quando
              prendiamo coscienza di aver fatto qualcosa che deve essere
              corretto e ci assumiamo la responsabilità delle nostre azioni.
              {"\n"}
              Sentiremo la nostra capacità di guarire quando saremo disposti a
              correggere i nostri comportamenti inadeguati e impareremo a non
              portare con noi i sensi di colpa.{"\n"}
              Nella Caverna dell’Orso impareremo a riconoscere quando ci
              autosabotiamo, quando abbiamo atteggiamenti ispirati dalla nostra
              ombra, e otterremo fermezza attraverso le virtù per andare avanti.
              {"\n"}
              Cercheremo questa risposta dentro di noi stessi. Saremo sfidati ad
              affrontare le nostre paure, il nostro senso di autoimportanza, per
              evitare che l’ombra impedisca il nostro benessere.{"\n"}
              Le lezioni della Caverna dell’Orso ci insegnano a rispettare il
              nostro Spazio Sacro, a stabilire limiti sani, a distanziarci da
              ciò che ci aggredisce, a preservare la nostra autostima.{"\n"}È il
              tempo della maturità. Possiamo imparare sulla forza, il potere,
              l’adattabilità, la responsabilità, la leadership, l’insegnamento,
              l’introspezione.{"\n"}
              Impariamo l’equilibrio tra guardare dentro e agire verso
              l’esterno. Il luogo per rendere consapevoli i veri scopi della
              nostra vita.
              {"\n"}
              L’utero della Madre Terra è rappresentato dalla caverna dell’Orso.
              È il luogo dove si muore per rinascere, dove si trova nutrimento e
              protezione.{"\n"}
              Dal mondo sotterraneo e dall’oscurità, il Femminile Profondo.
              {"\n"}È il momento di incontrare se stessi, meditare
              profondamente. Per essere nutriti con maggiore energia fisica,
              radicarsi, raggiungere obiettivi personali, ottenere silenzio
              interiore e salute fisica, cambiare lavoro.{"\n"}
              L’enfasi dell’Ovest è sulle cose solide e fisiche. Il nostro corpo
              fisico ci sostiene come parte della Terra. Ognuno di noi è il
              centro del proprio Universo all’interno dell’aura umana, e così
              possiamo sperimentare il regno della materia.{"\n"}
              La Direzione Ovest è legata all’Autunno, che è la stagione della
              consolidazione, quando fermarsi è il corso naturale delle cose.
              {"\n"}
              Gli esseri umani conservano i frutti dei loro sforzi e si
              esaminano per scoprire quali cambiamenti sono necessari per
              progredire quando arriverà il momento del rinnovamento.{"\n"}
              Come gli alberi rilasciano le foglie, creando spazio vuoto in
              inverno per l’arrivo di nuove foglie in primavera, impariamo a
              liberarci di comportamenti, atteggiamenti, attaccamenti inutili,
              creando spazio per il nuovo e per l’eccellenza.{"\n"}
              Questo “entrare dentro” è l’essenza di molte esperienze di vita
              che nell’Ovest troveranno significato.{"\n"}
              La Forza dell’Ovest si esprime come un’influenza stabile.{"\n"}
              {"\n"}
              La responsabilità umana consiste nel raccogliere le cose intorno a
              sé, mantenendo tutto organizzato con direzioni, regole e
              condizioni chiare, per avere pensieri “precisi e concisi”.{"\n"}
              L’Ovest ci parla della capacità di concretizzare i nostri
              obiettivi e del pieno riconoscimento delle nostre forze interiori.
              {"\n"}
              Tutto ciò che il futuro ci riserva è sempre all’Ovest, il luogo
              del nostro domani.{"\n"}
              Praticheremo la medicina dell’introspezione e della Guarigione
              Fisica. È ibernando (il potere del silenzio e della meditazione)
              nella caverna dell’orso (subconscio) che troveremo risposte alle
              nostre domande.{"\n"}È il momento di pregare, di deliziarsi, di
              riflettere, di ringraziare e di raccogliere. Un momento per
              onorare coloro che ci hanno preceduto, i nostri antenati.{"\n"}
              Per ringraziare i nostri parenti e esaminare le nostre vite.{"\n"}
              È anche un momento per accettare le cose così come sono. È il
              luogo dove si muore per rinascere e dare un nuovo significato al
              proposito della vita.{"\n"}
              Nelle parole di Jamie Sams: Questa direzione (Ovest) è legata al
              Vuoto, le sue risposte arrivano dalla scura caverna dell’Orso.
              {"\n"}
              La capacità di praticare l’interiorizzazione e l’introspezione fa
              parte dell’energia femminile, che è un’energia più ricettiva.
              {"\n"}
              Il grembo della donna è il luogo dove tutte le idee, così come
              tutti i bambini, vengono nutriti. L’oscurità del grembo fertile
              della donna è il luogo dove ciascuno di noi ha avuto il suo inizio
              (e così speriamo che continui!).{"\n"}
              L’Ovest ci parla della capacità di concretizzare i nostri
              obiettivi e del pieno riconoscimento delle nostre forze interiori.
              {"\n"}
              Tutto ciò che il futuro ci riserva è sempre all’Ovest, il luogo
              del nostro domani.{"\n"}È la medicina dell’introspezione e della
              Guarigione Fisica. È ibernando (il potere del silenzio e della
              meditazione) nella caverna dell’orso (subconscio) che troveremo
              risposte alle nostre domande.{"\n"}
              Può essere evocata per poteri curativi.{"\n"}
              L’Orso può essere evocato per resistere a un ambiente ostile e per
              portare calore ai nostri cuori. Risveglia il profondo potere
              femminile.{"\n"}
              Nella caverna dell’orso digeriamo le nostre idee, i nostri
              pensieri.
              {"\n"}I Venti dell’Ovest arrivano con l’autunno, è il tempo della
              crescita, dove le cose raggiungono la maturità.{"\n"}È tempo di
              raccolta, dove siamo ricompensati per il nostro lavoro passato.
              {"\n"}
              Mudjekeewis (Spirito Guardiano dell’Ovest) porta le brezze fresche
              dell’autunno, aiutandoci a rivolgerci verso il nostro interno per
              cercare le nostre forze interiori.{"\n"}
              Il Potere dell’Ovest si manifesta come un’influenza che esalta
              l’autosufficienza e lo sviluppo di una forza che viene
              dall’interno, ed è la più importante tra le forze.{"\n"}
              Coloro che sono nati in questo periodo sono generalmente dotati di
              un grado di forza interiore per affrontare le difficoltà della
              vita, ma spesso devono riconoscere la necessità di esporsi quando
              necessario.{"\n"}
              Sono più introspettivi e sentono un’attrazione per la guarigione
              naturale e le medicine complementari.{"\n"}
              SULL' AUTUNNO - PARTE 3 Meadows riferisce che l'enfasi dell'Ovest
              è sulle cose solide e fisiche. {"\n"}
              Il nostro corpo fisico è ciò che "ci tiene" come parte della
              Terra. {"\n"}
              Ognuno di noi è il centro del proprio Universo dentro l'aura
              umana, e così possiamo sperimentare il regno della materia. {"\n"}
              Il corpo fisico umano è un pezzo di un apparecchio complesso e
              altamente sofisticato. {"\n"}
              Cresciamo da una piccola cellula delle dimensioni di una testa di
              spillo. Quella cellula era come un microchip miniaturizzato, così
              minuscolo da essere invisibile all'occhio umano. Contiene ancora
              un programma, un codice genetico, con l'immagine di ciò che
              dovresti diventare. {"\n"}
              Questo programma, questa immagine, è stata proiettata nella forma
              fisica con corpo, testa, gambe, braccia, caratteristiche facciali,
              organi vitali, ecc., il cui sviluppo è in accordo con le leggi
              cosmiche e naturali. {"\n"}
              Il codice genetico è un sistema di trasmissione delle informazioni
              tra le cellule e include internamente una struttura matematica. La
              Ruota Medicinale, sulla quale si basa la Rete della Terra, è
              anch'essa strutturata con questo cammino armonico. {"\n"}
              Proprio come l'I Ching orientale, come il Cerchio Ancestrale della
              Vita e del Potere. In questo codice genetico ci sono le istruzioni
              per il bio-computer che è il nostro cervello, i cui componenti
              possono essere caricati insieme e contengono al loro interno una
              copertura protettiva, che è il cranio. {"\n"}
              Il cranio è un'ottava di otto ossa. È stato venerato come simbolo
              dai nostri antenati. Solo con la civiltà è stato visto come un
              oggetto sinistro. {"\n"}
              L'Universo è mente. {"\n"}
              Il cranio è ciò che contiene il cervello, che è un computer che
              dirige la mente e può essere considerato il microcosmo che
              rappresenta la mente della Fonte, "Il Grande Spirito". {"\n"}
              Chi imposta il codice genetico per fare miracoli, proprio come un
              meraviglioso veicolo fisico per te? L'intelligenza! Le cose non
              succedono semplicemente. Non ci sono incidenti. {"\n"}
              C'è un'intelligenza dietro tutto, e puoi chiamarla come vuoi.
              Finché l'intelligenza è presente, c'è una mente, che è la base
              dell'intelligenza. {"\n"}
              Puoi credere che la tua nascita sia stata solo un incidente? Le
              nostre cellule sono come microchip – un piccolo circuito
              elettronico che ha la capacità di memorizzare, elaborare e
              circolare informazioni – un intero, fantastico universo di
              informazioni contenute in un semplice codice. Il corpo fisico è
              più di un veicolo di espressione. {"\n"}
              Non è solo al tuo servizio. È un mezzo per trasportarti e ti
              consente di funzionare sulla Terra, nel regno fisico
              dell'esistenza. {"\n"}
              Non svalutare mai il tuo corpo fisico. L'autunno si sta
              stabilendo, creando tensione. Quando l'estate svanisce, il tempo
              fluttua quotidianamente, a volte con calore e le piogge del freddo
              inverno. {"\n"}
              La natura fa la transizione dalla stagione della crescita e della
              produttività alla stagione del raccolto e dell'adattamento. Dove
              l'orso ci insegna il valore di sognare, di entrare
              nell'introspezione e come usare questo per la manifestazione nella
              realtà fisica. {"\n"}
              Dal simbolismo della Ruota Medicinale e dal significato spirituale
              delle 4 direzioni, è tempo di celebrare la pace e prepararsi per
              un futuro che non coinvolga violenza, razzismo o oppressione. È il
              momento di pregare, di godere, di riflettere, di ringraziare e di
              raccogliere. Un momento per onorare coloro che sono venuti prima
              di noi, i nostri antenati. Ringraziare i nostri parenti per
              esaminare le nostre vite. {"\n"}È anche un momento per accettare
              le cose per come sono. Nella celebrazione del raccolto, viene
              allestito un altare di frutta, verdura colorata e candele. Le
              candele bruceranno tutta la notte, ringraziando per tutto ciò che
              abbiamo ricevuto in questa stagione. {"\n"}
              Cerca la guida dello Spirito dell'Autunno per aiutarti a
              raggiungere la maturità. Preghiamo per forza e adattabilità,
              responsabilità, insegnamento, leadership e potere. {"\n"}
              Chiediamo aiuto per trovare il nostro scopo nella vita e preghiamo
              per il potere di adempiere a tale scopo. {"\n"}
              Il tempo di Mudjekeewis, lo Spirito Guardiano dell'Autunno,
              contiene un paradosso: pur vivendo il suo punto più alto di forza,
              diventa anche consapevole delle piccole morti che si verificano
              attorno a sé; sebbene senta di poter conquistare il mondo, diventa
              consapevole della sua mortalità e del suo vero significato. {"\n"}
              La posizione di Mudjekeewis è il luogo da cercare quando aspiriamo
              alla maturità. Possiamo imparare sulla forza, sul potere,
              sull'adattabilità, sulla responsabilità, sulla leadership,
              sull'introspezione. {"\n"}È la posizione che si preoccupa
              veramente del benessere degli altri. Aiuta ad temperare la
              passione e ad accedere alla conoscenza guadagnata dalla vita.{" "}
              {"\n"}
              Impariamo l'equilibrio tra guardare dentro di sé e agire verso
              l'esterno. {"\n"}
              Il luogo dove andare quando sappiamo quali sono i veri scopi della
              nostra vita, ma abbiamo bisogno di aiuto per realizzarli.
              Mudjekeewis porta la guarigione a livello spirituale, guarigione
              per tutto ciò che consideriamo sacro. È durante questo periodo che
              possiamo essere i più efficaci come leader spirituali e
              cerimoniali. {"\n"}
              Quando abbiamo abbastanza esperienza di vita da condividere,
              possiamo dare gli insegnamenti più veri. Il potere di Mudjekeewis
              è servire: servire con forza, coraggio, grazia e abilità. Per
              trovare te stesso, medita profondamente. {"\n"}
              Quando hai bisogno di essere nutrito con maggiore energia fisica,
              quando sei aereo e hai bisogno di mettere i piedi per terra.{" "}
              {"\n"}
              Per chiedere equilibrio ecologico, raggiungere i tuoi obiettivi
              personali, ottenere silenzio interiore e salute fisica, cambiare
              lavoro o impiego, la Direzione Ovest è il posto dove sedersi.{" "}
              {"\n"}
              Evocazione {"\n"}
              "Spirito della Direzione Ovest, luogo di introspezione e
              intuizione. {"\n"}
              Portale della salute e dell'Elemento Terra – Guariscici." {"\n"}
              La lezione più grande di Mudjekeewis è la responsabilità per noi
              stessi, per la Terra e per tutte le nostre Relazioni. È il periodo
              in cui ci prepariamo a restituire il nostro raccolto alla Madre
              Terra. {"\n"}
              Quando la maggior parte dei semi torna alla terra per ricominciare
              il ciclo della vita. {"\n"}È in questo periodo della vita che le
              persone che sono state benedette con la visione, si conoscono
              abbastanza per condividere le loro lezioni. {"\n"}
              Mudjekeewis porta i doni della maturità, dell'esperienza, della
              specializzazione. {"\n"}
              In questo periodo, le persone scoprono quali sono le loro vere
              abilità e attitudini e acquisiscono una conoscenza incrollabile di
              ciò che possono e non possono fare nella vita. {"\n"}È il periodo
              in cui non abbiamo più paura di dire che qualcosa è sconosciuto
              per noi o che è oltre le nostre capacità. {"\n"}È il periodo in
              cui abbiamo già stabilito saldamente le nostre abitudini e i
              nostri modelli, quando finalmente ci conosciamo abbastanza da
              rilassarci nella vita. {"\n"}
              L'Ovest è un tempo di forza nella vita umana, un tempo di
              equilibrio. Per Tutte le Nostra Relazioni!
            </Text>
          </>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Outono;

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
    fontSize: 40,
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
