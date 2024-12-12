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

const Nord = () => {
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
          <Text style={styles.title}>NORTE (Hem.Norte){"\n"} ~{"\n"} SUL (Hem.Sul)</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>
            NORTH (North Hemisphere){"\n"} /{"\n"} SOUTH (Southern Hemisphere)
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>
            NORD (Emisfero Boreale) {"\n"}/{"\n"} SUD (Emisfero Australe)
          </Text>
        )}

        <View style={[styles.imageView, { height: 340, width: 360 }]}>
          <Image
            style={[styles.image, { width: 360, bottom: 350 }]}
            source={require("@/assets/images/direzioni/inverno2.jpg")}
          />
        </View>

        {language === "prt" && (
          <>
            <Text style={styles.testo}>
              Estamos chegando no Inverno.{"\n"} Quero compartilhar de um pouco
              da sabedoria milenar taoísta, expressa no I Ching, O Livro das
              Mutações, que surgiu no ano de 1.150 a.C., que faz comentários
              sobre o Solstício de Inverno: {"\n"}
              {"\n"}Hexagrama 24 – FU / RETORNO ( O PONTO DE TRANSIÇÃO ){"\n"} –
              Tradução Richard Wilhelm{"\n"}
              {"\n"} O Solstício de Inverno traz a vitória da luz no julgamento
              : Após uma época de decadência vem o ponto de transição.{"\n"} A
              luz poderosa que tinha sido banida retorna. Porém, esse movimento
              não é provocado pela força, o movimento é natural e surge
              espontaneamente.
              {"\n"} Por isso a transformação do antigo também torna-se fácil. O
              velho é descartado e o novo introduzido. Ambos os movimentos estão
              de acordo com as exigências do tempo e, portanto, não causam
              prejuízos.{"\n"} Formam-se associações de pessoas que têm os
              mesmos ideais. Como tal grupo se une em público e está em harmonia
              com o tempo, os propósitos particulares e egoístas estão ausentes,
              e assim erros são evitados.{"\n"} A idéia do retorno baseia-se no
              curso da natureza. O movimento é cíclico e o caminho se completa
              em si mesmo. Por isso não é preciso precipitá-lo artificialmente.
              {"\n"}
              Tudo vem de modo espontâneo e no tempo devido. Este é o sentido do
              Céu e da Terra. Todos os movimentos se completam em seis etapas, e
              a sétima traz o retorno. Desse modo, o Solstício de Inverno, com o
              qual tem início o declínio do ano, ocorre no sétimo mês depois do
              Solstício de Verão.{"\n"} Na China, o Solstício de Inverno foi
              sempre celebrado como a época de repouso do ano, costume que se
              conserva até hoje, no período de descanso do ano novo. No inverno,
              a energia vital, simbolizada pelo trovão, O Incitar”, encontra-se
              ainda no interior da terra.{"\n"} O movimento está em seus
              primórdios e por isso deve fortaleçê-lo através do repouso, para
              que não dissipe em um uso prematuro. Esse princípio básico, de
              fazer com que a energia nascente se fortifique através do repouso,
              aplica-se a todas as situações similares.{"\n"} A saúde que
              retorna após uma doença, o entendimento que ressurge após uma
              discórdia, enfim tudo o que está recomeçando deve ser tratado com
              suavidade e cuidado, para que o retorno leve ao florescimento.
              {"\n"} O inverno chega para renovar as esperanças, trazer novas
              promessas de realização. O momento de purificação e renascimento.
              O vento frio purifica e limpa a Terra. Faz com que as pessoas
              fiquem mais em casa, mais para dentro, a fim de manter o calor.
              {"\n"}
              Meus estudos xamânicos ensinaram-me a interpretar o inverno
              através de seus símbolos como o Elemento Ar, que é ligado ao Corpo
              Mental, ao pensamento, reflexão.{"\n"} A hora do dia é a
              meia-noite. É associado à velhice. Os anciãos, os sábios e
              ancestrais tinham seus cabelos brancos como a neve do inverno.
              Também pode ser ligado aos cabelos dos recém nascidos. (24 horas /
              zero hora).{"\n"} É o local de preces e de agradecimento. É o
              local da honra, o melhor para conexão com nossos ancestrais
              xamânicos e seres extra terrestres. No inverno tudo parece estar
              meio adormecido, congelado, mas, na verdade, grandes crescimentos
              estão ocorrendo. As sementes que estavam dentro da Terra começam a
              se enraizar. O crescimento é para dentro. Esse crescimento
              interior, essas raízes é que permitirão à planta desabrochar na
              primavera. {"\n"}O inverno é para desacelerar, reduzir a
              velocidade e aprendermos a entrar na escuridão e quietude de
              nossos sonhos. Na estação inverno, nossos corpos não se movimentam
              tanto quanto no outono e nem como se movimentarão na primavera e
              verão. Assim vamos buscando a sabedoria e calor do espírito para
              trazê-los para dentro de nós.{"\n"}Aproveitamos o inverno, para
              compartilhar mais em casa nossas experiências e ensinos, avaliamos
              nossas realizações e propósitos, praticamos a paciência e nos
              preparamos para as mortes e renascimentos. Estudando a Roda
              Medicinal dos nativos norte-americanos, fui inspirado a adaptá-la
              para as realidades ecológicas do Hemisfério Sul.{"\n"} Nessa
              adaptação o inverno é associado à Direção Sul (no Hemisferio
              Norte, è associado à direçao Norte).{"\n"} O Sul é a parte mais
              gelada de nosso Hemisfério (Pólo Sul). O Sul é o local da doação,
              é o portal da sabedoria, do conhecimento, do intelecto. O Corpo
              Mental é visto como uma mente invisível que pode ir à qualquer
              lugar, não é presa pelo racional e o conhecimento, é aquilo que
              pode ser transformado em sabedoria.{"\n"} Na metáfora da Terra
              sendo renovada e purificada pelo inverno, podemos transformar os
              acontecimentos em experiência de vida, nos preparando para
              períodos de crescimento.
              {"\n"}
              Época para libertar de velhos padrões negativos de comportamento,
              preparar-se para pequenas mudanças e para as mudanças maiores que
              virão.{"\n"} A energia do inverno ajuda as pessoas a atingirem uma
              compreensão de suas próprias vidas, a ter a aceitação do que elas
              alcançaram e do que não. O inverno é a estação propícia para a
              paz, para recuperar o poder, perdoar, ter compaixão por tudo à sua
              volta. É a estação da ressonância harmônica ensinando que além de
              se harmonizar, você pode levar harmonia, fraternidade, caridade,
              onde quer que vá, praticando a boa vontade para com toda a
              humanidade.
              {"\n"} O inverno representa os buscadores de conhecimentos que nos
              oferecem novas visões da humanidade e também os sábios e anciões
              que serviram-nos de inspiração através dos tempos.{"\n"} Celebra a
              alegria de pertencer, o valor do vínculo familiar e dos
              relacionamentos. Marca um tempo para fazer ajustes, da purificação
              da intenção, a preparação da chegada da primavera e a transição
              para um novo ciclo de atividades da Roda do Ano.{"\n"} Para alguns
              nativos americanos o “Animal Totêmico” do inverno é o Búfalo
              Branco. No período do Inverno, o Búfalo Branco, solta uma grande
              quantidade de fumaça branca, simbolizando a fumaça do Cachimbo
              Sagrado, instrumento de preces e ação de graças. É através da
              fumaça do cachimbo que eles enviam suas preces ao Grande Espírito.
              {"\n"} O inverno oferece a energia para revermos tudo aquilo que
              aprendemos em nossa vida, para incorporar os conhecimentos da
              Fonte Superior e entender melhor a vida na Terra.{"\n"} Momento
              para melhor escutar, compreender e integrar palavras, pensamentos
              e atos. O conhecimento é aquele que provê respostas para as
              questões: que, quem, onde e como; e a sabedoria responde o por
              quê.{"\n"} De nada vale um conhecimento a serviço da vaidade ou
              somente para estimular a mente. Ele só tem validade se é
              transformado em sabedoria através do amor. Com o inverno chega a
              noite mais longa do ano e o início do período de Regeneração da
              Terra que contém em si a semente da luz e proporciona um grande
              momento para vislumbrar o futuro, ativar as sementes de novos
              planos e preparando-as para o nascimento.{"\n"}
              Segundo os ensinamentos da Roda Medicinal, os 3 portais dos
              caminhos espirituais do inverno, um conjunto de práticas de
              virtudes, que influenciam nosso corpos (corpo, mente, emoções,
              alma) são:{"\n"}
              {"\n"} Limpeza{"\n"} No nível físico limpeza é desintoxicar o
              corpo. Principalmente da bebida, comida, cigarros, remédios.
              Adotar práticas saudáveis para manter o corpo limpo. No nível
              mental serve para livrar-se de velhas idéias, idéias repetitivas,
              limitantes. {"\n"}Limpar a mente de preconceitos, bloqueios,
              formas de pensamento inadequadas, negativas, pessimistas. No nível
              emocional começamos a trabalhar emoções que estão bloqueadas e
              abrir os sentimentos, limpar nossos lixos emocionais, mágoa,
              culpa, etc. No nível espiritual fortalece o conceito do que é
              Sagrado, para limpar conceitos obsoletos, e para queimar as
              máscaras atrás da qual se escondem problemas e impurezas.{"\n"}
            </Text>
            <View style={[styles.imageView, { height: 340, width: 360 }]}>
              <Image
                style={[styles.image, { width: 360, bottom: 350 }]}
                source={require("@/assets/images/direzioni/inverno1.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"} Renovação{"\n"} O corpo físico recebe a energia para
              melhorar a saúde, colocar-se em boa forma e restabelecer
              equilíbrio energético. No nível mental inspira a ter atitudes
              mentais saudáveis, para ter novas idéias ou reestruturar as
              antigas. No nível emocional inspira a auto-estima, o amor-próprio.
              No nível espiritual facilita a conexão com a base de nossas
              crenças espirituais, formulando nossas próprias cerimônias, para
              focalizar a espiritualidade.{"\n"} Renova nossa crença na bondade
              de toda a vida. Estimula as habilidades psíquicas e proféticas e
              lembranças de outras vidas.{"\n"}
              {"\n"} Pureza{"\n"} No corpo físico, procurar por alimentos puros,
              integrais, respirar bem, atitudes saudáveis, purificar o corpo.
              {"\n"} No mental é olhar para o mundo com os olhos de uma criança.
              Livrar-se dos preconceitos, sarcasmos, julgamentos, fofocas,
              intrigas.{"\n"}No nível emocional é praticar a honestidade, a
              espontaneidade, receptividade, integridade, buscar de equilíbrio e
              auto-realização. No espiritual é nosso encontro com o Eu Superior,
              com a alma. Buscar Essência Divina e confiar mais.{"\n"} A Roda
              Medicinal marca também as luas do período de Inverno.{"\n"} As
              luas do inverno inspiram a contemplar a vida e seus paradoxos e
              sobre a morte. É tempo de aprender a ter paciência. Época em que
              as habilidades psíquicas e místicas estarão bem acima da média.
              Para contemplarmos os presentes que a vida nos deu, praticar
              doações.
              {"\n"} O inverno traz o momento de queimar as nossas máscaras.
              Aquelas máscaras que passamos aos outros para sermos aprovados ou
              respeitados.{"\n"} Às vezes são tantas máscaras, que podemos
              esquecer do nosso rosto verdadeiro. É Momento de firmar nossos
              guardiões.{"\n"} A maior lição do inverno é a dádiva de dar. É a
              nossa maior responsabilidade compartilhar com os outros a dádiva
              do nosso conhecimento adquirido na jornada da Roda, a dádiva de
              nossos corpos à Mãe Terra, que nos alimentou enquanto nela
              estivemos, e do amor que compartilhamos com todos os outros seres,
              sabendo que quanto mais damos amor, mais recebemos.{"\n"} O
              inverno traz essa energia da compreensão intuitiva dessa dádiva e
              junto com ela estão as faculdades psíquicas mais ativadas e uma
              grande perspicácia em sintonizar sonhos e visões, tanto nossos
              como de outras pessoas.
              {"\n"} Para os nativos norte-americanos o Búfalo Branco, o
              espírito animal totêmico do inverno, é um animal que doou tudo de
              sí aos humanos: carne , pele, ossos e espírito e foi a Mulher
              Búfalo Branco que deu o cachimbo aos humanos.{"\n"} Para o
              pensamento nativo, Poder é Medicina, é remédio.{"\n"} É a forma de
              utilizar a energia para o nosso fortalecimento pessoal,
              profissional, espiritual, nos nossos relacionamentos. O Solstício
              de Inverno nos trás o “Poder da Renovação” que foi guardado por um
              período de recolhimento. Um ciclo termina para recomeçar o próximo
              com mais foco na jornada da alma. Outro ícone do inverno são as
              “Estrelas”. A Estrela representa a guia de esperança e fé.
              Simboliza as forças condutoras.{"\n"}Os marinheiros utilizam-as
              para encontrar o rumo.{"\n"} Os astrólogos sabem que as estrelas
              estão intimamente ligadas ao destino da humanidade. As estrelas
              ligam cada momento individual ao tempo transcendental.{"\n"}
              Estão ligadas à imortalidade. São os olhos do Céu. Foi a estrela
              de Belém que conduziu os Reis do Oriente à manjedoura onde estava
              Jesus. Em alguns contos nativos diz-se que o Grande Espírito, ao
              sentir o Universo muito escuro, pegou um cristal e o despedaçou
              criando assim as estrelas.{"\n"} Algumas Tribos acreditam que as
              estrelas são locais de entidades, que tem um especial
              relacionamento com a alma humana. Elas são estudadas para a
              confecção de amuletos, pontos riscados, altares.{"\n"} Na forma de
              cinco pontas (associada a Daví) e seis pontas (associada a
              Salomão). É a visão mística da Consciência Cósmica, é a visão que
              a Terra é matéria de uma estrela que explodiu.{"\n"} Se você sonha
              que está olhando para o Céu noturno cheio de estrelas é porque
              está caminhando em equilíbrio e pode esperar felicidade.{"\n"}{" "}
              Tenha esperança. Desenvolver a visão das estrelas significa olhar
              sem limitações de tempo e espaço. É uma maneira para treinar
              clarividência, poderes oraculares, é ampliar sua intuição e
              aprender com a sabedoria cósmica.{"\n"}
              Na cosmologia de muitos sacerdotes da Medicina Tradicional, as
              estrelas movem-se em torno do céu impelidas por seu próprio poder.
              {"\n"} Acreditam que as grandes estrelas, são designadas pelo
              Grande Mistério como guardiãs das menores. Grupos de estrelas
              pensam ser cidades, constelações são consideradas a reunião de
              conselho dos Seres Espíritos. Muitas tribos acreditam que nas
              estrelas habitam entidades espirituais que têm um relacionamento
              pessoal com as almas humanas.{"\n"}
              {"\n"} Desenvolvendo a Visão das Estrelas:{"\n"}
              {"\n"} No clarão da noite, olhe para o céu, veja as estrelas.
              Deixe que sua imaginação forme desenhos no céu com as estrelas.
              Olhando fixamente para as estrelas você terá a impressão que elas
              brilham sómente para você. Medite na luz e sinta o brilho das
              estrelas entrar através de seus olhos. Então feche os olhos e
              respire profundamente. Sinta a luz das estrelas te preencher. Uma
              inundação de luz. Sinta o a luz das estrelas saindo de dentro do
              seu coração e envolvendo a Terra. Sinta sua consciência se
              expandindo com a luz. Agora sinta a luz expandindo-se para cima
              cobrindo este sistema solar, então a galáxia, então o Universo e
              sinta sua consciência se expandindo junto com a luz das estrelas.
              {"\n"}
              {"\n"} O solstício do inverno firmou-se como o tempo que estivemos
              carregados, quando flutuamos no vácuo uterino, esse anel preto
              vasto em torno de toda a possibilidade, seu perímetro que traz uma
              promessa. {"\n"}O sol, um mero vislumbre no olho da eternidade,
              nos agracia com o raio, a sugestão de um fulgor, imaginada agora
              no ambiente denso de sua ausência. {"\n"}Nós comemoramos o
              solstício do inverno em comunidades, que se recolhem honrando a
              escuridão a qual todos experimentamos nestes últimos meses, e cria
              espaço de abertura em nós para a luz e os começos novos que seguem
              este giro do ano.
              {"\n"} Durante as épocas de inverno você precisará centrar-se,
              lembrar que é tanto um ser da Terra, como do Céu.{"\n"} O poder do
              inverno é o da aceitação da morte e a necessidade de compartilhar
              tudo o que foi dado.{"\n"} Em algumas culturas, os Ventos do
              Inverno são personificados pelos “Deuses do Gelo”, que tem o poder
              para transformar água em gelo e imprimir nas pedras cristais com a
              temperatura de seu sopro. É também quem nos faz buscar o calor de
              nossos corações e a compaixão. E energia do inverno tem uma força
              interna e poder para mudar fluidos em sólidos, situações incertas
              à ajustes permanentes.{"\n"} Não é fria, na prática, mas quente e
              com compaixão para permitir fluir suas emoções mais livremente, e
              assim o desenvolvimento espiritual não fica congelado.{"\n"}
              Perguntas para o Solstício de Inverno: Quem eu sou? Onde quero
              colocar o meu esforço? {"\n"}Como posso mudar meus padrões de
              pensamento para atingir meus objetivos? {"\n"}Onde posso conseguir
              melhores fontes de inspiração para as soluções que preciso?{"\n"}{" "}
              O que o Universo quer me revelar aqui e agora? {"\n"}Qual é a nova
              idéia que quero semear para nutrir-me no futuro?{"\n"} O que
              preciso liberar para renovar?{"\n"} Como posso transformar o
              negativo em positivo?{"\n"} O que preciso para viver mais feliz?
              {"\n"}
              {"\n"}
              {"\n"} Bibliografia consultada: Kenneth Meadows – The Medicine Way
              – Element {"\n"}Sun Bear, Wabun Wind & Crysalis Mulligan – Dancing
              With The Wheel – Fireside {"\n"}Richard Wilhelm – I Ching –
              Pensamento{"\n"} Willian Bloom – Tempos Sagrados – Triom {"\n"}
              Richard Heinberg – Celebrando os Solstícios – Madras
            </Text>
          </>
        )}
        {language === "eng" && (
          <>
            <Text style={styles.testo}>
              We are approaching Winter.{"\n"} I want to share a bit of ancient
              Taoist wisdom, expressed in the I Ching, The Book of Changes,
              which emerged in 1,150 B.C., and comments on the Winter Solstice:{" "}
              {"\n"}
              {"\n"} Hexagram 24 – FU / RETURN (THE POINT OF TRANSITION) {"\n"}{" "}
              – Translation by Richard Wilhelm{"\n"}
              {"\n"} The Winter Solstice brings the victory of light in
              judgment: After a time of decay comes the point of transition.
              {"\n"} The powerful light that had been banished returns. However,
              this movement is not caused by force; the movement is natural and
              arises spontaneously.{"\n"} Therefore, the transformation of the
              old also becomes easy. The old is discarded, and the new is
              introduced. Both movements align with the demands of time and,
              therefore, cause no harm.{"\n"} Associations of people with the
              same ideals form. As such a group unites in public and is in
              harmony with the time, particular and selfish purposes are absent,
              and thus mistakes are avoided.{"\n"} The idea of return is based
              on the course of nature. The movement is cyclical, and the path
              completes itself. Therefore, there is no need to hasten it
              artificially.{"\n"} Everything comes spontaneously and in due
              time. This is the meaning of Heaven and Earth. All movements
              complete themselves in six stages, and the seventh brings the
              return. Thus, the Winter Solstice, which marks the beginning of
              the decline of the year, occurs in the seventh month after the
              Summer Solstice.{"\n"} In China, the Winter Solstice has always
              been celebrated as the time of rest for the year, a custom that is
              still maintained today during the New Year’s rest period. In
              winter, vital energy, symbolized by thunder, The Stirring, is
              still within the earth.{"\n"} The movement is in its early stages,
              and thus it must be strengthened through rest so that it does not
              dissipate through premature use. This basic principle, of
              fortifying emerging energy through rest, applies to all similar
              situations.{"\n"} Health that returns after illness, understanding
              that arises after discord, in short, everything that is beginning
              anew must be treated with gentleness and care, so that the return
              leads to flourishing.{"\n"} Winter comes to renew hopes, bring new
              promises of fulfillment. The moment of purification and rebirth.
              The cold wind purifies and cleanses the Earth. It causes people to
              stay more at home, more inward, in order to maintain warmth.{"\n"}
              My shamanic studies have taught me to interpret winter through its
              symbols, such as the Air Element, which is linked to the Mental
              Body, to thought, reflection.{"\n"} The time of day is midnight.
              It is associated with old age. The elders, the wise, and ancestors
              had hair as white as the snow of winter. It can also be linked to
              the hair of newborns. (24 hours / midnight).{"\n"} It is the place
              of prayers and gratitude. It is the place of honor, the best for
              connection with our shamanic ancestors and extraterrestrial
              beings. In winter, everything seems to be half asleep, frozen, but
              in reality, great growth is taking place. The seeds that were
              inside the Earth begin to take root. The growth is inward. This
              inner growth, these roots, are what will allow the plant to bloom
              in the spring.{"\n"} Winter is for slowing down, reducing speed,
              and learning to enter the darkness and stillness of our dreams. In
              the winter season, our bodies do not move as much as in the
              autumn, nor will they move as much in the spring and summer. Thus,
              we seek the wisdom and warmth of the spirit to bring them within
              us.{"\n"} We take advantage of winter to share our experiences and
              teachings more at home, evaluate our achievements and purposes,
              practice patience, and prepare for deaths and rebirths. Studying
              the Medicine Wheel of North American natives, I was inspired to
              adapt it to the ecological realities of the Southern Hemisphere.
              {"\n"} In this adaptation, winter is associated with the South
              Direction (in the Northern Hemisphere, it is associated with the
              North direction).{"\n"} The South is the coldest part of our
              Hemisphere (South Pole). The South is the place of giving, the
              portal of wisdom, knowledge, intellect. The Mental Body is seen as
              an invisible mind that can go anywhere, not trapped by rationality
              and knowledge; it is that which can be transformed into wisdom.
              {"\n"} In the metaphor of the Earth being renewed and purified by
              winter, we can transform events into life experiences, preparing
              for periods of growth.{"\n"} A time to liberate from old negative
              behavioral patterns, prepare for small changes, and for the larger
              changes that will come.{"\n"} The energy of winter helps people
              achieve an understanding of their own lives, accept what they have
              achieved and what they have not. Winter is the season for peace,
              to recover power, forgive, and have compassion for everything
              around you. It is the season of harmonic resonance teaching that
              beyond harmonizing, you can bring harmony, fraternity, charity,
              wherever you go, practicing goodwill towards all of humanity.
              {"\n"} Winter represents the seekers of knowledge who offer us new
              visions of humanity and also the wise and elders who have served
              as our inspiration through the ages.{"\n"} It celebrates the joy
              of belonging, the value of family bonds, and relationships. It
              marks a time to make adjustments, purify intentions, prepare for
              the arrival of spring, and the transition to a new cycle of
              activities in the Wheel of the Year.{"\n"} For some Native
              Americans, the "Totemic Animal" of winter is the White Buffalo. In
              the winter period, the White Buffalo releases a great amount of
              white smoke, symbolizing the smoke of the Sacred Pipe, an
              instrument for prayers and thanksgiving. It is through the smoke
              of the pipe that they send their prayers to the Great Spirit.
              {"\n"} Winter offers the energy to review everything we have
              learned in our lives, to incorporate the knowledge of the Higher
              Source and better understand life on Earth.
              {"\n"} A moment to better listen, understand, and integrate words,
              thoughts, and actions. Knowledge is that which provides answers to
              the questions: what, who, where, and how; and wisdom answers why.
              {"\n"} Knowledge is of no use when it serves vanity or only to
              stimulate the mind. It is only valid if it is transformed into
              wisdom through love. With winter comes the longest night of the
              year and the beginning of the Earth’s Regeneration period, which
              contains the seed of light and provides a great moment to glimpse
              the future, activate the seeds of new plans, and prepare them for
              birth.{"\n"}
              According to the teachings of the Medicine Wheel, the 3 portals of
              the spiritual paths of winter, a set of practices of virtues that
              influence our bodies (body, mind, emotions, soul) are:{"\n"}
              {"\n"} Cleansing{"\n"} At the physical level, cleansing means
              detoxifying the body, mainly from alcohol, food, cigarettes, and
              medicine. It involves adopting healthy practices to keep the body
              clean. At the mental level, it serves to get rid of old ideas,
              repetitive, limiting thoughts. {"\n"} Clean the mind of
              prejudices, blockages, inappropriate, negative, or pessimistic
              ways of thinking. At the emotional level, we begin working on
              blocked emotions, opening up feelings, clearing emotional garbage
              like grief, guilt, etc. At the spiritual level, it strengthens the
              concept of what is Sacred, to clear obsolete concepts, and to burn
              the masks behind which problems and impurities hide.{"\n"}
            </Text>
            <View style={[styles.imageView, { height: 340, width: 360 }]}>
              <Image
                style={[styles.image, { width: 360, bottom: 350 }]}
                source={require("@/assets/images/direzioni/inverno1.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"} Renewal{"\n"} The physical body receives energy to improve
              health, get in good shape, and restore energetic balance. At the
              mental level, it inspires having healthy mental attitudes, coming
              up with new ideas, or restructuring the old ones. At the emotional
              level, it inspires self-esteem, self-love. At the spiritual level,
              it facilitates connection with the foundation of our spiritual
              beliefs, forming our own ceremonies to focus on spirituality.
              {"\n"} It renews our belief in the goodness of all life. It
              stimulates psychic and prophetic abilities and memories of past
              lives.{"\n"}
              {"\n"} Purity{"\n"} At the physical level, seek pure, whole foods,
              breathe well, adopt healthy attitudes, purify the body.{"\n"}{" "}
              Mentally, it’s about looking at the world with the eyes of a
              child. Get rid of prejudices, sarcasm, judgments, gossip,
              intrigue.{"\n"} At the emotional level, it’s about practicing
              honesty, spontaneity, receptivity, integrity, seeking balance and
              self-fulfillment. Spiritually, it’s our encounter with the Higher
              Self, with the soul. Seek Divine Essence and trust more.{"\n"} The
              Medicine Wheel also marks the moons of the Winter period.{"\n"}{" "}
              The winter moons inspire contemplating life and its paradoxes, and
              about death. It’s time to learn patience. It’s a season when
              psychic and mystical abilities will be well above average. It’s
              time to contemplate the gifts that life has given us, to practice
              giving.{"\n"} Winter brings the moment to burn our masks. Those
              masks we put on for others to be approved or respected.{"\n"}{" "}
              Sometimes there are so many masks that we may forget our true
              face. It’s a time to solidify our guardians.
              {"\n"} The greatest lesson of winter is the gift of giving. It’s
              our greatest responsibility to share with others the gift of our
              knowledge gained on the Medicine Wheel journey, the gift of our
              bodies to Mother Earth, which nourished us while we were on it,
              and the love we share with all other beings, knowing that the more
              we give love, the more we receive.{"\n"} Winter brings the energy
              of intuitive understanding of this gift, and with it, the most
              activated psychic faculties and great insight in tuning into
              dreams and visions, both our own and those of others.{"\n"} For
              Native Americans, the White Buffalo, the totemic animal spirit of
              winter, is an animal that gave everything of itself to humans:
              meat, skin, bones, and spirit, and it was the White Buffalo Woman
              who gave the pipe to humans.{"\n"} For Native thought, Power is
              Medicine, it is the remedy.{"\n"} It is the way of using energy
              for our personal, professional, and spiritual strengthening in our
              relationships. The Winter Solstice brings us the “Power of
              Renewal” which has been kept for a period of retreat. A cycle ends
              to begin the next with more focus on the soul's journey. Another
              icon of winter is the “Stars.” The Star represents the guide of
              hope and faith. It symbolizes the guiding forces.{"\n"} Sailors
              use them to find their course.{"\n"} Astrologers know that the
              stars are intimately connected to the destiny of humanity. The
              stars link each individual moment to transcendental time.{"\n"}{" "}
              They are connected to immortality. They are the eyes of the Sky.
              It was the star of Bethlehem that led the Wise Men to the manger
              where Jesus was born. In some Native tales, it’s said that the
              Great Spirit, feeling the Universe was too dark, took a crystal
              and shattered it, thus creating the stars.{"\n"} Some Tribes
              believe the stars are places of entities that have a special
              relationship with the human soul. They are studied for making
              amulets, sacred markings, and altars.{"\n"} In the form of five
              points (associated with David) and six points (associated with
              Solomon). It’s the mystical vision of Cosmic Consciousness, the
              vision that the Earth is the matter of a star that exploded.{"\n"}{" "}
              If you dream you are looking at the night sky filled with stars,
              it’s because you are walking in balance and can expect happiness.
              {"\n"} Have hope. Developing the vision of the stars means looking
              without the limitations of time and space. It’s a way to train
              clairvoyance, oracular powers, to expand intuition, and learn from
              cosmic wisdom.{"\n"}
              In the cosmology of many priests of Traditional Medicine, the
              stars move around the sky propelled by their own power.{"\n"} They
              believe that the great stars are designated by the Great Mystery
              as guardians of the smaller ones. Groups of stars are thought to
              be cities, and constellations are considered the council meeting
              of Spirit Beings. Many tribes believe that spiritual entities
              inhabit the stars, having a personal relationship with human
              souls.{"\n"}
              {"\n"} Developing the Vision of the Stars:{"\n"}
              {"\n"} In the glow of the night, look up at the sky, see the
              stars. Let your imagination form drawings in the sky with the
              stars. By staring at the stars, you will get the impression that
              they shine only for you. Meditate on the light and feel the star's
              glow enter through your eyes. Then, close your eyes and breathe
              deeply. Feel the light of the stars filling you. A flood of light.
              Feel the light of the stars coming from within your heart and
              surrounding the Earth. Feel your consciousness expanding with the
              light. Now feel the light expanding upward, covering this solar
              system, then the galaxy, then the Universe, and feel your
              consciousness expanding along with the light of the stars.{"\n"}
              {"\n"} The winter solstice has become the time when we were laden,
              when we floated in the uterine void, this vast black ring
              surrounding all possibility, its perimeter carrying a promise.
              {"\n"} The sun, a mere glimpse in the eye of eternity, graces us
              with a ray, the suggestion of a glow, now imagined in the dense
              environment of its absence.{"\n"} We celebrate the winter solstice
              in communities that gather honoring the darkness we all have
              experienced in the last months, and create space for the light and
              new beginnings that follow this turn of the year.{"\n"} During the
              winter times, you will need to center yourself, remembering that
              you are both a being of the Earth and the Sky.{"\n"} The power of
              winter is that of accepting death and the need to share all that
              has been given.{"\n"} In some cultures, the Winds of Winter are
              personified by the “Gods of Ice,” who have the power to transform
              water into ice and imprint crystals in stones with the temperature
              of their breath. It is also they who make us seek the warmth of
              our hearts and compassion. The energy of winter has an internal
              strength and power to change fluids into solids, uncertain
              situations into permanent adjustments.{"\n"} It is not cold, in
              practice, but warm and compassionate to allow your emotions to
              flow more freely, so spiritual development does not become frozen.
              {"\n"} Questions for the Winter Solstice: Who am I? Where do I
              want to place my effort?
              {"\n"} How can I change my thought patterns to achieve my goals?
              {"\n"} Where can I find better sources of inspiration for the
              solutions I need?{"\n"} What does the Universe want to reveal to
              me here and now?{"\n"} What is the new idea I want to sow to
              nourish myself in the future?{"\n"} What do I need to release to
              renew?
              {"\n"} How can I transform the negative into the positive?{"\n"}{" "}
              What do I need to live happier?{"\n"}
              {"\n"}
              {"\n"}
            </Text>
          </>
        )}
        {language === "ita" && (
          <>
            <Text style={styles.testo}>
              Stiamo arrivando all'Inverno.{"\n"} Voglio condividere un po'
              della saggezza millenaria taoista, espressa nell'I Ching, Il Libro
              delle Mutazioni, che è emerso nel 1.150 a.C., e fa dei commenti
              sul Solstizio d'Inverno: {"\n"}
              {"\n"} Esagramma 24 – FU / RITORNO (IL PUNTO DI TRANSIZIONE){" "}
              {"\n"} – Traduzione di Richard Wilhelm{"\n"}
              {"\n"} Il Solstizio d'Inverno porta la vittoria della luce nel
              giudizio: Dopo un periodo di decadenza arriva il punto di
              transizione.{"\n"} La potente luce che era stata bandita ritorna.
              Tuttavia, questo movimento non è provocato dalla forza; il
              movimento è naturale e nasce spontaneamente.{"\n"} Pertanto, la
              trasformazione del vecchio diventa facile. Il vecchio viene
              scartato e il nuovo viene introdotto. Entrambi i movimenti sono in
              armonia con le richieste del tempo e, quindi, non causano danni.
              {"\n"} Si formano associazioni di persone con gli stessi ideali.
              Poiché un tale gruppo si unisce in pubblico e armonizza con il
              tempo, gli scopi particolari ed egoisti sono assenti, e così gli
              errori vengono evitati.{"\n"} L'idea del ritorno si basa sul corso
              della natura. Il movimento è ciclico e il percorso si completa da
              solo. Perciò non è necessario accelerarlo artificialmente.{"\n"}{" "}
              Tutto arriva spontaneamente e nel tempo dovuto. Questo è il
              significato del Cielo e della Terra. Tutti i movimenti si
              completano in sei fasi, e la settima porta al ritorno. Così, il
              Solstizio d'Inverno, che segna l'inizio del declino dell'anno,
              avviene nel settimo mese dopo il Solstizio d'Estate.{"\n"} In
              Cina, il Solstizio d'Inverno è sempre stato celebrato come il
              periodo di riposo dell'anno, una tradizione che viene mantenuta
              anche oggi durante il periodo di riposo del Capodanno. In inverno,
              l'energia vitale, simboleggiata dal tuono, Il Risveglio, è ancora
              all'interno della terra.{"\n"} Il movimento è nelle sue fasi
              iniziali, e quindi deve essere rafforzato attraverso il riposo,
              affinché non si disperda con un uso prematuro. Questo principio di
              base, di rafforzare l'energia nascente attraverso il riposo, si
              applica a tutte le situazioni simili.{"\n"} La salute che ritorna
              dopo una malattia, la comprensione che riemerge dopo una
              discordia, insomma, tutto ciò che sta ricominciando deve essere
              trattato con delicatezza e attenzione, affinché il ritorno porti
              alla fioritura.{"\n"} L'inverno arriva per rinnovare le speranze,
              portare nuove promesse di realizzazione. Il momento della
              purificazione e della rinascita. Il vento freddo purifica e
              pulisce la Terra. Fa sì che le persone stiano più a casa, più
              verso l'interno, per mantenere il calore.{"\n"}I miei studi
              sciamanici mi hanno insegnato a interpretare l'inverno attraverso
              i suoi simboli, come l'Elemento Aria, che è legato al Corpo
              Mentale, al pensiero, alla riflessione.{"\n"} L'ora del giorno è
              la mezzanotte. È associata alla vecchiaia. Gli anziani, i saggi e
              gli antenati avevano i capelli bianchi come la neve dell'inverno.
              Può anche essere legata ai capelli dei neonati. (24 ore /
              mezzanotte).{"\n"} È il luogo delle preghiere e della gratitudine.
              È il luogo dell'onore, il migliore per la connessione con i nostri
              antenati sciamanici e esseri extraterrestri. In inverno, tutto
              sembra essere mezzo addormentato, congelato, ma in realtà, grandi
              crescite stanno accadendo. I semi che erano dentro la Terra
              iniziano a radicarsi. La crescita è verso l'interno. Questa
              crescita interiore, queste radici, sono quelle che permetteranno
              alla pianta di sbocciare in primavera.{"\n"} L'inverno è per
              rallentare, ridurre la velocità e imparare ad entrare
              nell'oscurità e nella quiete dei nostri sogni. Nella stagione
              invernale, i nostri corpi non si muovono tanto quanto in autunno,
              né si muoveranno tanto in primavera e estate. Così cerchiamo la
              saggezza e il calore dello spirito per portarli dentro di noi.
              {"\n"} Approfittiamo dell'inverno per condividere le nostre
              esperienze e insegnamenti più a casa, valutare le nostre
              realizzazioni e i nostri scopi, praticare la pazienza e prepararci
              per le morti e le rinascite. Studiando la Ruota Medicinale dei
              nativi americani, sono stato ispirato ad adattarla alle realtà
              ecologiche dell'Emisfero Sud.{"\n"} In questa adattazione,
              l'inverno è associato alla Direzione Sud (nell'Emisfero Nord, è
              associato alla direzione Nord).{"\n"} Il Sud è la parte più fredda
              del nostro Emisfero (Polo Sud). Il Sud è il luogo del dono, il
              portale della saggezza, della conoscenza, dell'intelletto. Il
              Corpo Mentale è visto come una mente invisibile che può andare
              ovunque, non è prigioniera della razionalità e della conoscenza; è
              quella che può essere trasformata in saggezza.{"\n"} Nella
              metafora della Terra che viene rinnovata e purificata
              dall'inverno, possiamo trasformare gli eventi in esperienze di
              vita, preparandoci per periodi di crescita.
              {"\n"} È tempo di liberarsi dai vecchi schemi negativi di
              comportamento, prepararsi per piccoli cambiamenti e per i
              cambiamenti maggiori che arriveranno.{"\n"} L'energia dell'inverno
              aiuta le persone a raggiungere una comprensione delle proprie
              vite, ad accettare ciò che hanno raggiunto e ciò che non hanno.
              L'inverno è la stagione della pace, per recuperare il potere,
              perdonare e avere compassione per tutto ciò che ci circonda. È la
              stagione della risonanza armonica che insegna che oltre a
              armonizzarsi, puoi portare armonia, fraternità, carità, ovunque tu
              vada, praticando la buona volontà verso tutta l'umanità.{"\n"}{" "}
              L'inverno rappresenta i ricercatori di conoscenza che ci offrono
              nuove visioni dell'umanità e anche i saggi e gli anziani che ci
              hanno servito come ispirazione nel corso dei secoli.{"\n"} Celebra
              la gioia di appartenere, il valore del legame familiare e delle
              relazioni. Segna un tempo per fare aggiustamenti, per purificare
              l'intenzione, per prepararsi all'arrivo della primavera e alla
              transizione verso un nuovo ciclo di attività della Ruota
              dell'Anno.{"\n"} Per alcuni nativi americani, l'"Animale Totemico"
              dell'inverno è il Bisonte Bianco. Nel periodo invernale, il
              Bisonte Bianco rilascia una grande quantità di fumo bianco,
              simbolizzando il fumo del Pipistrello Sacro, uno strumento per le
              preghiere e le azioni di grazie. È attraverso il fumo del
              pipistrello che inviano le loro preghiere al Grande Spirito.{"\n"}{" "}
              L'inverno offre l'energia per rivedere tutto ciò che abbiamo
              imparato nella nostra vita, per incorporare le conoscenze della
              Fonte Superiore e comprendere meglio la vita sulla Terra.{"\n"} Un
              momento per ascoltare meglio, comprendere e integrare parole,
              pensieri e azioni. La conoscenza è quella che fornisce risposte
              alle domande: che, chi, dove e come; e la saggezza risponde al
              perché.{"\n"} Non ha valore una conoscenza al servizio della
              vanità o solo per stimolare la mente. Ha valore solo se viene
              trasformata in saggezza attraverso l'amore. Con l'inverno arriva
              la notte più lunga dell'anno e l'inizio del periodo di
              Rigenerazione della Terra che contiene in sé il seme della luce e
              fornisce un grande momento per intravedere il futuro, attivare i
              semi di nuovi piani e prepararli per la nascita.{"\n"}
              Secondo gli insegnamenti della Ruota Medicinale, i 3 portali dei
              cammini spirituali dell'inverno, un insieme di pratiche di virtù
              che influenzano i nostri corpi (corpo, mente, emozioni, anima)
              sono:
              {"\n"}
              {"\n"} Purificazione{"\n"} A livello fisico la purificazione
              significa disintossicare il corpo, principalmente da alcol, cibo,
              sigarette e medicinali. Si tratta di adottare pratiche salutari
              per mantenere il corpo pulito. A livello mentale serve a liberarsi
              da vecchie idee, pensieri ripetitivi e limitanti. {"\n"} Pulire la
              mente da pregiudizi, blocchi, modi di pensare inappropriati,
              negativi o pessimisti. A livello emotivo cominciamo a lavorare su
              emozioni bloccate, ad aprire i sentimenti, a pulire i nostri
              rifiuti emotivi, come rancore, colpa, ecc. A livello spirituale
              rinforza il concetto di ciò che è Sacro, per pulire concetti
              obsoleti e per bruciare le maschere dietro le quali si nascondono
              problemi e impurità.{"\n"}
            </Text>
            <View style={[styles.imageView, { height: 340, width: 360 }]}>
              <Image
                style={[styles.image, { width: 360, bottom: 350 }]}
                source={require("@/assets/images/direzioni/inverno1.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"} Rinnovamento{"\n"} Il corpo fisico riceve energia per
              migliorare la salute, mettersi in buona forma e ripristinare
              l'equilibrio energetico. A livello mentale ispira ad avere
              atteggiamenti mentali salutari, ad avere nuove idee o a
              ristrutturare quelle vecchie. A livello emotivo ispira autostima,
              amore per sé stessi. A livello spirituale facilita la connessione
              con la base delle nostre credenze spirituali, formulando le nostre
              cerimonie per focalizzarci sulla spiritualità.{"\n"} Rinnova la
              nostra credenza nella bontà di tutta la vita. Stimola le abilità
              psichiche e profetiche e i ricordi di vite precedenti.{"\n"}
              {"\n"} Purezza{"\n"} A livello fisico, cerca cibi puri, integrali,
              respira bene, adotta atteggiamenti salutari, purifica il corpo.
              {"\n"} A livello mentale, guardare al mondo con gli occhi di un
              bambino. Liberarsi da pregiudizi, sarcasmi, giudizi, pettegolezzi,
              intrighi.{"\n"} A livello emotivo, è praticare l'onestà, la
              spontaneità, la ricettività, l'integrità, cercare l'equilibrio e
              l'autorealizzazione. A livello spirituale, è il nostro incontro
              con il Sé Superiore, con l'anima. Cercare l'Essenza Divina e avere
              più fiducia.{"\n"} La Ruota Medicinale segna anche le lune del
              periodo invernale.{"\n"} Le lune dell'inverno ispirano a
              contemplare la vita e i suoi paradossi, e sulla morte. È il
              momento di imparare a pazientare. È il periodo in cui le abilità
              psichiche e mistiche saranno molto al di sopra della media. È il
              momento di contemplare i doni che la vita ci ha dato, praticare il
              dono.{"\n"} L'inverno porta il momento di bruciare le nostre
              maschere. Quelle maschere che mettiamo per gli altri per essere
              approvati o rispettati.{"\n"} A volte ci sono così tante maschere
              che possiamo dimenticare il nostro vero volto. È il momento di
              solidificare i nostri guardiani.{"\n"} La lezione più grande
              dell'inverno è il dono di dare. È la nostra più grande
              responsabilità condividere con gli altri il dono della nostra
              conoscenza acquisita nel cammino della Ruota, il dono dei nostri
              corpi alla Madre Terra, che ci ha nutrito mentre eravamo su di
              essa, e dell'amore che condividiamo con tutti gli altri esseri,
              sapendo che più diamo amore, più riceviamo.{"\n"} L'inverno porta
              questa energia della comprensione intuitiva di questo dono, e con
              essa le facoltà psichiche più attivate e una grande perspicacia
              nell'afferrare sogni e visioni, sia i nostri che quelli degli
              altri.
              {"\n"} Per i nativi americani, il Bisonte Bianco, lo spirito
              animale totemico dell'inverno, è un animale che ha dato tutto di
              sé agli esseri umani: carne, pelle, ossa e spirito, ed è stata la
              Donna Bisonte Bianca a dare il pipa agli esseri umani.{"\n"} Per
              il pensiero nativo, il Potere è Medicina, è rimedio.{"\n"} È il
              modo di utilizzare l'energia per il nostro rafforzamento
              personale, professionale, spirituale, nelle nostre relazioni. Il
              Solstizio d'Inverno ci porta il “Potere del Rinnovamento” che è
              stato custodito per un periodo di ritiro. Un ciclo finisce per
              iniziarne un altro con maggiore focus nel viaggio dell'anima. Un
              altro simbolo dell'inverno sono le “Stelle”. La Stella rappresenta
              la guida della speranza e della fede. Simboleggia le forze che ci
              conducono.{"\n"} I marinai le usano per trovare la loro rotta.
              {"\n"} Gli astrologi sanno che le stelle sono intimamente legate
              al destino dell'umanità. Le stelle collegano ogni momento
              individuale al tempo trascendentale.{"\n"} Sono legate
              all'immortalità. Sono gli occhi del Cielo. È stata la stella di
              Betlemme che ha guidato i Re Magi alla mangiatoia dove c'era Gesù.
              In alcune storie native, si dice che il Grande Spirito, sentendo
              l'Universo troppo oscuro, abbia preso un cristallo e lo abbia
              frantumato, creando così le stelle.
              {"\n"} Alcune Tribù credono che le stelle siano luoghi di entità
              che hanno una relazione speciale con l'anima umana. Vengono
              studiate per creare amuleti, segni tracciati, altari.{"\n"} Nella
              forma a cinque punte (associata a Davide) e sei punte (associata a
              Salomone). È la visione mistica della Coscienza Cosmica, è la
              visione che la Terra è la materia di una stella che è esplosa.
              {"\n"} Se sogni di guardare il cielo notturno pieno di stelle,
              significa che stai camminando in equilibrio e puoi aspettarti
              felicità.{"\n"} Abbi speranza. Sviluppare la visione delle stelle
              significa guardare senza le limitazioni di tempo e spazio. È un
              modo per allenare la chiaroveggenza, i poteri oracolari, ampliare
              la tua intuizione e imparare dalla saggezza cosmica.{"\n"}
              Nella cosmologia di molti sacerdoti della Medicina Tradizionale,
              le stelle si muovono nel cielo spinte dal proprio potere.{
                "\n"
              }{" "}
              Credono che le grandi stelle siano designate dal Grande Mistero
              come guardiane delle stelle più piccole. I gruppi di stelle sono
              considerati città, le costellazioni sono viste come la riunione
              del consiglio degli Spiriti. Molte tribù credono che nelle stelle
              abitino entità spirituali che hanno una relazione personale con le
              anime umane.{"\n"}
              {"\n"} Sviluppare la Visione delle Stelle:{"\n"}
              {"\n"} Nella luce della notte, guarda il cielo, osserva le stelle.
              Lascia che la tua immaginazione formi disegni nel cielo con le
              stelle. Guardando fisso le stelle, avrai l'impressione che
              brillino solo per te. Medita sulla luce e senti il brillio delle
              stelle entrare attraverso i tuoi occhi. Poi chiudi gli occhi e
              respira profondamente. Senti la luce delle stelle riempirti.
              Un'inondazione di luce. Senti la luce delle stelle uscire dal tuo
              cuore e avvolgere la Terra. Senti la tua coscienza espandersi con
              la luce. Ora senti la luce espandersi verso l'alto, coprendo
              questo sistema solare, poi la galassia, poi l'Universo e senti la
              tua coscienza espandersi insieme alla luce delle stelle.{"\n"}
              {"\n"} Il solstizio d'inverno si è affermato come il momento in
              cui siamo stati caricati, quando fluttuavamo nel vuoto uterino,
              questo vasto anello nero attorno a tutta la possibilità, il cui
              perimetro porta una promessa.{"\n"} Il sole, un semplice scorcio
              nell'occhio dell'eternità, ci onora con un raggio, il suggerimento
              di un bagliore, ora immaginato nell'ambiente denso della sua
              assenza.
              {"\n"} Celebriamo il solstizio d'inverno in comunità che si
              raccolgono onorando l'oscurità che tutti abbiamo sperimentato
              negli ultimi mesi, e creano spazio per la luce e i nuovi inizi che
              seguono questo giro dell'anno.{"\n"} Durante il periodo invernale,
              dovrai centrarti, ricordando che sei sia un essere della Terra che
              del Cielo.{"\n"} Il potere dell'inverno è quello dell'accettazione
              della morte e della necessità di condividere tutto ciò che ci è
              stato dato.{"\n"} In alcune culture, i Venti dell'Inverno sono
              personificati dai "Dèi del Gelo", che hanno il potere di
              trasformare l'acqua in ghiaccio e imprimere cristalli nelle pietre
              con la temperatura del loro respiro. Sono anche quelli che ci
              fanno cercare il calore dei nostri cuori e la compassione.
              L'energia dell'inverno ha una forza interna e un potere per
              cambiare i fluidi in solidi, le situazioni incerte in
              aggiustamenti permanenti.{"\n"} Non è fredda, in pratica, ma calda
              e compassionevole per permettere alle tue emozioni di fluire più
              liberamente, così lo sviluppo spirituale non si congela.{"\n"}{" "}
              Domande per il Solstizio d'Inverno: Chi sono? Dove voglio mettere
              il mio impegno?{"\n"} Come posso cambiare i miei schemi di
              pensiero per raggiungere i miei obiettivi?{"\n"} Dove posso
              trovare fonti migliori di ispirazione per le soluzioni di cui ho
              bisogno?{"\n"} Cosa vuole rivelarmi l'Universo qui e ora?{"\n"}{" "}
              Qual è la nuova idea che voglio seminare per nutrirmi nel futuro?
              {"\n"} Cosa devo liberare per rinnovarmi?{"\n"} Come posso
              trasformare il negativo in positivo?{"\n"} Cosa mi serve per
              vivere più felice?{"\n"}
              {"\n"}
              {"\n"}
            </Text>
          </>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Nord;

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
