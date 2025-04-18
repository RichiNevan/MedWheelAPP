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
        {language === "prt" && <Text style={styles.title}>PRIMAVERA</Text>}
        {language === "eng" && <Text style={styles.title}>SPRING</Text>}
        {language === "ita" && <Text style={styles.title}>PRIMAVERA</Text>}

        <View style={[styles.imageView, { height: 300 }]}>
          <Image
            style={[styles.image, { width: 350, bottom: 50 }]}
            source={require("@/assets/images/stagioni/spring2.jpg")}
          />
        </View>

        {language === "prt" && (
          <>
            <Text style={styles.testo}>
              Estudo da Primavera – Parte 1{"\n"} O elemento associado à Direção
              Leste é o Fogo, as cores são o dourado ou amarelo. {"\n"}A estação
              do ano é a primavera, a hora do dia é a madrugada, a época da vida
              humana é a infância e a adolescência.{"\n"} O poder do espírito
              guardião da Direção Leste, Wabun, é muito direto: é o de novos
              começos.{"\n"} Wabun traz a época de novos crescimentos para todas
              as crianças da terra. A época de Wabun é de frescura, novidade,
              entusiasmo e criatividade. É a época de novos rebentos, da luz que
              vem após cada escuridão, do brilho que você vê após ter saído do
              limbo.{"\n"} O leste é realmente o lugar do renascer, uma época
              onde todas as coisas são possíveis. Tempo de despertar.{"\n"} O
              Leste traz consigo a eterna promessa da primavera, a promessa da
              madrugada. Wabun nos ajuda, a saber, que cada momento pode ser um
              novo começo. Os presentes de Wabun são os da espontaneidade,
              admiração, inquisitividade e da verdade.{"\n"} Wabun traz as
              habilidades para explorar, sentir alta energia, ser cheio de
              curiosidade, questionar tudo e ter determinação para ver o que se
              encontra na outra esquina.{"\n"} Pessoas sob a influência de Wabun
              têm a habilidade de ver mais adiante e claramente que as outras
              pessoas. Parcialmente isso se deve ao fato de estarem sob a
              influência da Águia. Como todas as águias, a Águia Dourada tem a
              habilidade de voar alto e planar até o Criador.{"\n"} Do alto a
              Águia pode ver o que acontece na Terra. Como a Águia, as pessoas
              de Wabun também têm a habilidade para planar e ver de uma
              perspectiva mais ampla.{"\n"} A época de Wabun é a da primavera, e
              quando os humanos estão nessa posição, são como o resto da
              natureza. Estão cheios de entusiasmo, energia e vontade de tentar
              muitas coisas novas.{"\n"} Parece que tudo é possível, onde cada
              sopro, cada momento, é um novo começo, quando uma energia incrível
              está disponível para crescimento em todos os níveis.{"\n"} Mas
              também é uma época em que se deve aprender a controlar esta
              energia. De outra forma, poderá ser difícil trabalhar com os
              outros ou sustentar tanto um projeto como a si mesmo.{"\n"} Wabun
              é o lugar que nós procuramos para encontrar a verdade da vida e
              libertar-nos de quaisquer mentiras que possam estar nos ligando a
              velhos lugares que nos impedem de recomeçar.{"\n"} Também nos
              fornece energia abundante, intensidade e persistência. Uma boa
              época para tirar vantagem de nossa claridade da visão, a
              habilidade para se trabalhar coisas terrenas enquanto ainda
              lembramos-nos das lições que aprendemos em outros níveis de
              realidade.{"\n"} É o lugar para ir quando se quiser ver o mundo
              com outros olhos, quando deseja abrir novas fontes de
              criatividade, tornar-se mais otimista, observador, apaixonado ou
              determinado.{"\n"} Nela poderá aprender o real significado da
              verdade para você, e como transmitir isso para os outros. Os
              poderes da verdade, abertura e iluminação. A Direção Leste é o
              local da Claridade e da Iluminação, da Luz Espiritual e do nascer
              do Sol.
              {"\n"} É o local da visão, da visualização, da miração, do
              masculino elevado. Da criatividade e da expansão da consciência,
              da imagem em ação e dos Espíritos. É o lugar de nascer. É o
              masculino elevado, nas asas da Águia Dourada. Quando precisamos de
              maior clareza em nossa vida, ser mais livres e criativos, quando
              não enxergamos alguns aspectos de nosso ser, quando ficamos por
              demais presos no chão, quando sentimos necessidade de maior
              espiritualização, e receber canalizações, sentamos no Leste.{"\n"}{" "}
              Meadows classifica bem os componentes do Leste:{"\n"}
              {"\n"} 1. Qualidade: Iluminação e Clareza.{"\n"} O LESTE é o lugar
              onde você pode ver onde você está!{"\n"} O poder do leste é o
              poder da luz, da iluminação mental e espiritual, e da visão
              interna que vem de uma consciência da unidade de todas as coisas
              vivas. Quando nós estamos na escuridão ficamos receosos para
              arriscar além do que nós sabemos, experimentamos.{"\n"} Mas uma
              vez que há um acesso à luz para iluminar podemos ter coragem,
              abrir para o novo, reinos desconhecidos. O leste fornece a
              iluminação para termos a coragem de viver as aventuras da vida.
              {"\n"} A vida pode tornar-se agradável, excitante a partir de
              agora se permitirmos. O leste é o lugar para expandir a visão,
              considerar as coisas de longe, de ver um panorama mais amplo. O
              Leste é o lugar dos visionários.{"\n"} O Grande Espírito é
              refletido em todo o trabalho da criação e aparece em cada pedra e
              rocha, árvore e planta, pássaro, animal e nos seres humanos. Onde
              buscamos um relacionamento de amor com a Natureza.{"\n"}
              {"\n"} 2. Totem: Águia Dourada{"\n"} A águia voa mais alto do que
              os outros pássaros e vê distante e amplamente. O índio diz que a
              águia voa mais perto do Céu, do Grande Espírito.{"\n"} A águia
              pode voar diretamente olhando para o Sol, recebe a luz
              diretamente, que é o Grande Espírito.{"\n"}
              {"\n"} 3. Elemento: Fogo{"\n"} O fogo é a energia radiante do
              universo, a faísca de vida. No nível humano é expresso no
              entusiasmo, na ambição e na empresa. O fogo é um elemento muito
              poderoso. Seus resultados manifestam rapidamente desde que sua
              característica é expansão. A atividade elementar do fogo de nosso
              sistema digestivo que torna possível a disponibilidade das
              substâncias que fornecem o calor e a energia para nossos corpos.
              As chamas trazem um sentimento de satisfação e o bem estar.{"\n"}{" "}
              O fogo energiza e purifica, mas pode igualmente ser destruidor e
              penetrante. De acordo com a sabedoria antiga, o universo inteiro é
              fogo no processo de transformação.{"\n"} Tudo na existência física
              foi considerado como condensado Fogo – como luz solidificada.
              {"\n"}
              {"\n"} 4. Cor: Amarelo{"\n"} O amarelo é a cor da luz solar, uma
              cor alegre e feliz.{"\n"} O amarelo expressa a necessidade para a
              estimulação e a atividade constantes. É uma cor que inspira a
              mente e a capacidade de entendimento.{"\n"} O amarelo é associado
              com as aventuras mentais. É cor do chakra do plexo solar. {"\n"}
              {"\n"}5. Reino: Espiritual/Humano{"\n"} O xamã sabe que dentro de
              um corpo físico reside uma alma, uma entidade espiritual. Essa
              alma se manifesta através de um corpo para experimentar o plano
              físico da existência.{"\n"} O homem é um ser duplo, matéria e
              espírito, um temporal e outro eterno. De acordo com as tradições
              orais dos xamãs viajantes, a vida humana veio para a terra uns
              250.000 anos.{"\n"} O homem se relaciona com todas as coisas
              vivas, os animais, as plantas e os minerais que se originaram
              todos da mesma fonte.{"\n"} O índio reconhece que todos nós, somos
              um e compostos desses 3 reinos. E Deus e a humanidade são aspectos
              da mesma coisa.{"\n"}
              {"\n"} 6. Corpo Celestial: Sol. {"\n"}O leste é a direção do
              nascer do sol e do milagre do nascimento. É o Sol que faz com que
              todas as criaturas despertem de seu descanso para começar um dia
              novo com frescor.{"\n"} Sol é a força do masculino que traz a luz
              na escuridão, a ordem fora do caos, a fonte principal da energia
              de tudo, de quem toda a vida depende. É também um símbolo da luz
              interna em cada pessoa – o Divino Sol dentro de nós todos.{"\n"}{" "}
              Cada um de nós é um Sol.{"\n"}
              {"\n"} 7. Aspecto Humano: Corpo Espiritual, O Espírito.{"\n"} O
              princípio vital que é despercebido e intangível. O espírito pode
              ser descrito como a força motriz existente num organismo vivo,
              seja ele ser humano, animal, planta, humano ou celestial. Uma
              diferença entre o espírito e a energia é que o espírito tem a
              inteligência inerente. Exigiu mais do que o poder criar o
              Universo.{"\n"} Exigiu a inteligência. Nós determinamos com o
              espírito – deixe o espírito tomar as decisões.{"\n"}
              Nós precisamos receber o conhecimento em nossa mente, mas é o
              espírito que deve ser o fator de determinação. A distinção pode
              ser feita claramente desta maneira: A mente cria. O espírito
              dirige.
              {"\n"} A força ou a energia executam. A matéria aparece.{"\n"}
              {"\n"} 8. Período De Tempo: O Momento.{"\n"} Este período de tempo
              força a importância do momento. Um momento é não somente um
              momento, é igualmente um poder ou uma força que cause a rotação e
              o movimento. Um momento pode ser considerado como apenas um
              segundo.
              {"\n"} O poder de um momento encontra-se na qualidade do
              pensamento que é contido dentro dele. Um flash de inspiração, não
              dura um longo tempo em período de tempo, mas em momento.{"\n"}
              {"\n"} 9. Estação: Primavera{"\n"} É a estação em que a vida nova
              que esteve escondida no ventre da terra é despertada e estourada
              adiante no esplendor. O leste, então, é o sentido do despertar e
              de tornar-se ciente ambos, dentro e fora. A vinda adiante da nova
              vida. É onde nós podemos encontrar as respostas às nossas
              necessidades na natureza e no espírito. {"\n"}
              {"\n"}10. Número: Um.{"\n"} O número um representa a
              individualidade. Um é a monada, o primeiro, o começo, a
              individuação que não sai de nada. É o número principal –
              indivisível e imutável. Significa a existência e a identidade.
              {"\n"} É a semente de todos os números restantes, o princípio
              masculino na natureza. É o símbolo da vontade que atua com o
              espírito.{"\n"} Um, no leste, é o poder da visão desobstruída e de
              perceber o alvo ou o objetivo principal. Força a ação e a
              auto-organização independente. Onze são suas contrapartes para uma
              comunicação plena interna, para ligar com o Inconsciente Coletivo
              e para fazer o acesso possível ao conhecimento antigo.{"\n"}
              {"\n"} 11. Inimigo: Morte e idade avançada.{"\n"} A morte é uma
              inimiga até que possa ser convertida em conselheira, no
              aprendizado do Oeste (não só vida física, mas cada mudança que nós
              fazemos). Nós fazemos a morte uma conselheira aprendendo as lições
              daquelas mudanças. A idade avançada é um inimigo que o aventureiro
              espiritual nunca poderá derrotar completamente.{"\n"} O melhor que
              nós podemos fazer é afastá-lo. Como? Permanecendo ativo e criativo
              e abrir-se às idéias novas – não se abandonando às devastações do
              tempo. O segredo consiste em adquirir a idade avançada jovem. No
              contexto do Leste, a realização vem-nos que se nós perdemos nosso
              corpo físico com as devastações da idade avançada ou pela morte
              física antes que a iluminação venha a seguir nós retornaremos à
              Terra outra vez em outro corpo físico para atravessar o mesmo
              processo de procurar, aprendendo, experimentando e na tentativa de
              alcançar – a ILUMINAÇÃO!{"\n"}
              {"\n"} 12. Manifestação: Arte e escrita.{"\n"} Sendo o Leste o
              símbolo da luz nascente que rompe a escuridão, criatividade chega
              através da luz que estava escondida no self e é expressa através
              da arte e da escrita.{"\n"}
              {"\n"}
            </Text>
            <View style={[styles.imageView, { height: 447 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/spring3.jpg")}
              />
            </View>

            <Text style={styles.testo}>
              {"\n"}
              Estudo da Primavera – Parte 2{"\n"}
              {"\n"} O Leste é o lugar que nós procuramos para encontrar a
              verdade da vida e libertar-nos de quaisquer mentiras que possam
              estar nos ligando a velhos lugares que nos impedem de recomeçar.
              {"\n"} Também nos fornece energia abundante, intensidade e
              persistência. Uma boa época para tirar vantagem de nossa claridade
              da visão, a habilidade para se trabalhar coisas terrenas enquanto
              ainda lembramo-nos das lições que aprendemos em outros níveis de
              realidade.{"\n"} É o lugar para ir quando se quiser ver o mundo
              com outros olhos, quando deseja abrir novas fontes de
              criatividade, tornar-se mais otimista, observador, apaixonado ou
              determinado.{"\n"} Nela poderá aprender o real significado da
              verdade para você, e como transmitir isso para os outros.{"\n"} Os
              poderes da verdade, abertura e iluminação. Cada um dos quatro
              ventos e dos Quatro Pontos Cardeais (Direções) tem um especial
              relacionamento com uma das quatro principais formas de vida da
              Terra, que são chamados de “reinos”, explica K. Meadows: eles são
              os Reinos Humano, Animal, Vegetal e Mineral.{"\n"} Os
              entendimentos desses relacionamentos podem ajudar-nos a promover
              os “insights” para começarmos a desenvolver a nós mesmos e nossa
              terra.{"\n"} O especial relacionamento do Leste é com o Reino
              humano. Os ventos do Leste têm ênfase na compreensão espiritual,
              considerando os princípios, as virtudes.{"\n"} Desta forma o Leste
              nos ajuda a compreender mais a natureza espiritual humana do que a
              natureza física, mental, ou emocional. Para o nativo o ser humano
              é um Divino Mortal ou Um Ser Físico Divino. É um ser dual que
              existe em ambos os reinos do espírito e matéria. Cada um de nós,
              em nossas vidas, determinou de que forma iremos aplicar nossas
              energias seja nos aspectos positivos, como negativos. Ela pode ser
              utilizada destrutivamente ou construtivamente.{"\n"} O motivo é
              tudo. A principal função do Leste é o poder de determinar, o poder
              de fazer mudanças. É o poder de decidir o modo que nós usaremos a
              energia que dispomos.{"\n"}
              Como o Leste é concernente com o espírito e o ser humano, o índio
              conclui que o homem tem o equilíbrio e a harmonia dentro de si
              quando determina com o Espírito.{"\n"} Esse é o jeito que sistema
              de energia dos seres humanos esta estruturado. Desarmonia e
              desequilíbrio resultarão se, vivendo um clichê, ao determinar com
              outra parte de seu ser.{"\n"} Com a mente, por exemplo, que é
              associada com o Norte, ou com as emoções, que está associado com o
              Sul. O harmonioso e sincrônico funcionamento do ser humano é
              absolutamente vital para o bem estar.{"\n"} De fato, saúde,
              felicidade, abundância, seguramente depende disso. Achando o
              equilíbrio correto entre o interior e outros aspectos do ser,
              entre os conscientes e subconscientes aspectos da mente,
              sintonizando com o natural e com as forças cósmicas chegar ao
              cumprimento, com aquele estado de equilíbrio onde tudo e qualquer
              coisa tornam-se possível.
              {"\n"} De certo as raízes da questão: "O que é o Espírito?"{"\n"}{" "}
              Existem confusões de ideias sobre o que constitui o Espírito.
              Algumas definições tratam como alma, ou fantasma e outros. Os
              índios norte-americanos entendem-na como consciência individual
              expressa em si mesmo de diferentes e organizadas formas.{"\n"}{" "}
              Espírito é dirigido pela inteligência, e a inteligência é
              transportada pela mente. Então Espírito era o Poder da Mente e
              Mente Consciente. O índio vê cada entidade, inclusive o ser
              humano, como um espírito individual, expressando-se com
              consciência. A alma humana era a moradia do espírito
              individualizado e permitia a ligação entre espírito e matéria.
              {"\n"} O nativo considera a alma como o Arquivo de experiências e
              ela incorporam a personalidade permanente que sobrevive a todas as
              encarnações. Os índios concluem que como Divinos Mortais, nós
              deveríamos determinar nossas ações com o Espírito, porque ele é o
              veículo das inteligências e das intenções.
              {"\n"} Intenções onde relacionamos os princípios, éticos e morais,
              em tudo o que é atividade do espírito. Contudo, mesmo que tenhamos
              certeza no coração e “boas intenções”, poderemos ainda obter
              resultados não desejados, se determinarmos com a mente ou com as
              emoções e não com o Espírito.{"\n"} O Poder do Leste, expressa a
              si mesmo através do espírito, por motivar o desejo para novos
              começos e novos interesses.{"\n"} Então, a resposta dentro dos
              indivíduos é o impulso para se iniciar novos projetos e voltar-se
              à novos interesses.{"\n"}
              Sumarizando, o Leste é primariamente a direção para “insights” dos
              princípios espirituais. Portanto, os nascidos no Leste são
              comumente conduzidos em situações de vida, cujos princípios são de
              primeira importância para eles e para a direção de suas vidas.
              {"\n"}
            </Text>
            <View style={[styles.imageView, { height: 447, width: 300 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/spring1.jpg")}
              />
            </View>

            <Text style={styles.testo}>
              {"\n"}
              {"\n"}Estudo da Primavera – Parte 3{"\n"}
              {"\n"}
              Como o Leste é concernente com o espírito e o ser humano, o índio
              conclui que o homem tem o equilíbrio e a harmonia dentro de si
              quando determina com o Espírito.{"\n"} Esse é o jeito que sistema
              de energia dos seres humanos esta estruturado.{"\n"}
              Desarmonia e desequilíbrio resultarão se, vivendo um clichê, ao
              determinar com outra parte de seu ser. Com a mente, por exemplo,
              que é associado com o Sul (hemisfério Sul), ou com as emoções, que
              está associado com o Norte (Hemisfério Sul). {"\n"} harmonioso e
              sincrônico funcionamento do ser humano é absolutamente vital para
              o bem estar. De fato, saúde, felicidade, abundância, seguramente
              depende disso.{"\n"}
              Achando o equilíbrio correto entre o interior e outros aspectos do
              ser, entre os conscientes e subconscientes aspectos da mente,
              sintonizando com o natural e com as forças cósmicas chegar ao
              cumprimento, com aquele estado de equilíbrio onde tudo e qualquer
              coisa tornam-se possível.{"\n"} De novo, a questão: "O que é o
              Espírito?" {"\n"}Algumas definições tratam como alma, ou fantasma
              e outros. Os índios norte-americanos entendem-na como consciência
              individual expressa em si mesmo de diferentes e organizadas
              formas. Espírito é dirigido pela inteligência, e a inteligência é
              transportada pela mente. Então Espírito era o Poder da Mente e
              Mente Consciente. O índio vê cada entidade, inclusive o ser
              humano, como um espírito individual, expressando-se com
              consciência. A alma humana era a moradia do espírito
              individualizado e permitia a ligação entre espírito e matéria.{" "}
              {"\n"}O nativo considera a alma como o Arquivo de experiências e
              ela incorporam a personalidade permanente que sobrevive a todas as
              encarnações. Os índios concluem que como Divinos Mortais, nós
              deveríamos determinar nossas ações com o Espírito, porque ele é o
              veículo das inteligências e das intenções.{"\n"}
              Intenções onde relacionamos os princípios éticos e morais em tudo
              o que é atividade do espírito. Contudo, mesmo que tenhamos certeza
              no coração e “boas intenções”, poderemos ainda obter resultados
              não desejados se determinarmos com a mente ou com as emoções e não
              com o Espírito.{"\n"} Meadows exemplifica, com as leis que são
              formadas pelas atividades da mente e nos designa a estabelecermos
              e a salvaguardar princípios (que assim como vemos, são atividades
              do espírito). {"\n"}É possível determinar a aplicação de algumas
              leis com a mente para manter a letra da lei e segui-la
              literalmente, mesmo sendo contrárias à intenção do espírito.{"\n"}{" "}
              Nós viajamos através da vida com nossos próprios passos, fazemos
              nossas escolhas, e determinamos o caminho de como usar nossas
              energias na coreografia da vida na Terra. Nós somos, portanto,
              produto de nossa determinação e criadores das circunstâncias. Não
              somos meros robôs.{"\n"} Como nós sabemos quando estamos
              determinando com o Espírito? {"\n"}Nós determinamos com o Espírito
              quando seguimos o que o coração quer que façamos, porque a verdade
              do coração é a voz do Espírito. Dar é um atributo do Leste. Nós
              damos com o coração e determinamos com o espírito.. O “Caminho do
              Coração” ou o “Belo Caminho” é o jeito de amar que não tira
              partido ou vantagem dos outros para interesses próprios, mas os
              inclui nas vantagens que recebemos.{"\n"}O modo nativo considera
              que devemos ajudar uns aos outros para a Terra permanecer na
              Beleza. Do entendimento dos Quatro Ventos, o índio concluiu que o
              homem é composto de todos os outros reinos. Ele é carne, sangue,
              ossos e essência, e as águas do corpo contêm vida do mundo
              mineral, vida das plantas, das frutas, sementes e dos animais. O
              homem não é meramente uma parte do mundo físico. O mundo físico
              que inclui minerais, plantas e animais, é literalmente parte do
              homem.{"\n"} O homem é uma miniatura do sistema solar, um
              microcosmo do Universo. Entenda o homem, e você entenderá a Terra
              e o Universo.
              {"\n"} Entendendo a Terra e o meio ambiente, você entenderá ambos:
              o homem e o Universo. {"\n"}O Eu Real é a entidade espiritual que
              existe antes de sua presença nesta vida na Terra e que continuará
              a existir depois de sua morte terrena. O Espírito é o “Eu Interior
              “que é eterno. Ele é perene. Pessoas mais velhas devem entender a
              realidade da sua própria idade. Os mais jovens pensam que sentem
              diferentes, até ficarem velhos.{"\n"} Sente-se mais com sessenta
              do que com dezesseis anos a consciência do que a idade faz ao
              corpo. Na verdade, nossas ideias e opiniões podem mudar com a
              maturidade dos anos. O corpo pode não ser tão capaz fisicamente e
              as limitações podem chegar à frustração, mas você continua sendo o
              que sempre foi = VOCÊ!{"\n"} Idade não faz a morte. Morte é
              meramente uma mudança de consciência. Então, qual é o propósito
              disso tudo? Em termos gerais o índio norte americano entendeu que
              o propósito da vida é para expandir, ampliar o “Eu Real”.{"\n"} O
              propósito da vida é continuar a evolução do “Divino Espírito
              Interior”. O propósito da vida é a Educação do Espírito.{"\n"} A
              Direção Leste é o local da Claridade e da Iluminação, da Luz
              Espiritual e do nascer do Sol. É o local da visão, da
              visualização, da miração, do masculino elevado. Da criatividade e
              da expansão da consciência, da imagem em ação e dos Espíritos.
              {"\n"} É o lugar de nascer. É o masculino elevado, nas asas da
              Águia Dourada. Quando precisamos de maior clareza em nossa vida,
              ser mais livres e criativos, quando não enxergamos alguns aspectos
              de nosso ser, quando ficamos por demais presos no chão, quando
              sentimos necessidade de maior espiritualização, e receber
              canalizações, sentamos no Leste.
              {"\n"}
              {"\n"} Evocação: “Ó Espírito da Direção Leste, local de Iluminação
              e Claridade, Portal da Espiritualidade e do Elemento Fogo.
              Ilumine-me!"{"\n"}
              {"\n"} Voltando para examinar a Teia da Terra, mesmo as pessoas
              que nascem no mesmo lugar, no mesmo dia, na mesma hora, com
              influências e qualidades similares, não são idênticas. Embora
              tenham o mesmo totem, o totem é uma indicação móvel, flutuando no
              Cosmos por si mesmo, governado por nossa própria dinâmica interna.
              {"\n"} Então, duas pessoas do mesmo totem podem dividir
              experiências similares. O efeito é determinado pelo grau de
              exposição às influências e o nível de nossa reação.{"\n"} O
              Espírito que o índio define como a Essência da Entidade Real. O
              Espírito é a Essência real. O índio não só aceita a realidade de
              uma vida após a morte, como também na vida antes do nascimento.
              {"\n"} A Natureza era sua testemunha para comprovar essa verdade.
              Antes de cada vida, damos um forte salto na primavera.{"\n"} Há
              vida antes dela e depois. Cada vida é como uma forma de produzir
              sementes para a auto perpetuação. A vida passa. Isso é a Lei
              Cósmica. Se ele acompanha a vida que há depois da morte, existe
              também a vida antes do nascimento? O índio foi além desse
              conceito, crendo que as sementes que agora plantamos são para a
              próxima vida.{"\n"} As sementes da próxima vida estão sendo
              preparadas na vida presente que estamos vivendo. Em outras
              palavras: Não há como escapar da consequência de nossas ações.
              {"\n"} Cedo ou tarde o passado reaparece para nós. Tendo a
              consciência da existência antes de nascer, porque não nos
              lembramos? Porque iniciamos cada vida com um disco em branco de
              memória.{"\n"} O novo disco é inserido no drive a cada nova vida.
              Mas o disco rígido ainda retém informações no banco de memória do
              nosso “Eu Inconsciente”.
            </Text>
          </>
        )}
        {language === "eng" && (
          <>
            <Text style={styles.testo}>
              Spring Study – Part 1{"\n"} The element associated with the East
              Direction is Fire, and the colors are golden or yellow. {"\n"}The
              season of the year is spring, the time of day is dawn, and the
              stage of human life is childhood and adolescence.{"\n"} The power
              of the guardian spirit of the East Direction, Wabun, is very
              direct: it is that of new beginnings.{"\n"} Wabun brings the time
              of new growth for all the children of the earth. The time of Wabun
              is one of freshness, novelty, enthusiasm, and creativity. It is
              the time of new sprouts, the light that comes after each darkness,
              the brightness you see after emerging from limbo.{"\n"} The East
              is truly the place of rebirth, a time when all things are
              possible. A time of awakening.{"\n"} The East brings with it the
              eternal promise of spring, the promise of dawn. Wabun helps us
              know that each moment can be a new beginning. The gifts of Wabun
              are those of spontaneity, wonder, inquisitiveness, and truth.
              {"\n"} Wabun brings the abilities to explore, feel high energy, be
              full of curiosity, question everything, and have the determination
              to see what lies around the corner.{"\n"} People under the
              influence of Wabun have the ability to see farther and more
              clearly than others. Partly, this is because they are under the
              influence of the Eagle. Like all eagles, the Golden Eagle has the
              ability to fly high and soar toward the Creator.{"\n"} From above,
              the Eagle can see what happens on Earth. Like the Eagle, the
              people of Wabun also have the ability to soar and see from a
              broader perspective.{"\n"} The time of Wabun is that of spring,
              and when humans are in this position, they are like the rest of
              nature. They are full of enthusiasm, energy, and a desire to try
              many new things.{"\n"} It seems like anything is possible, where
              every breath, every moment, is a new beginning, when an incredible
              energy is available for growth at all levels.{"\n"} But it is also
              a time when one must learn to control this energy. Otherwise, it
              may be difficult to work with others or sustain both a project and
              oneself.{"\n"} Wabun is the place we seek to find the truth of
              life and free ourselves from any lies that may be binding us to
              old places that prevent us from starting anew.{"\n"} It also
              provides us with abundant energy, intensity, and persistence. A
              good time to take advantage of our clarity of vision, the ability
              to work on earthly matters while still remembering the lessons
              we've learned on other levels of reality.{"\n"} It is the place to
              go when you want to see the world with new eyes, when you wish to
              open new sources of creativity, become more optimistic, observant,
              passionate, or determined.{"\n"} There you can learn the true
              meaning of truth for you, and how to convey it to others. The
              powers of truth, openness, and illumination. The East Direction is
              the place of Clarity and Illumination, of Spiritual Light, and the
              rising Sun.{"\n"} It is the place of vision, visualization,
              gazing, of the elevated masculine. Of creativity and expansion of
              consciousness, of image in action, and of the Spirits. It is the
              place of birth. It is the elevated masculine, on the wings of the
              Golden Eagle. When we need greater clarity in our lives, to be
              freer and more creative, when we do not see some aspects of our
              being, when we are too grounded, when we feel the need for greater
              spiritualization, and to receive channelings, we sit in the East.
              {"\n"} Meadows clearly classifies the components of the East:
              {"\n"}
              {"\n"} 1. Quality: Illumination and Clarity.{"\n"} The EAST is the
              place where you can see where you are!{"\n"} The power of the east
              is the power of light, mental and spiritual illumination, and the
              inner vision that comes from an awareness of the unity of all
              living things. When we are in darkness, we are afraid to risk
              beyond what we know and experience.{"\n"} But once there is access
              to light to illuminate, we can have courage, open up to the new,
              to unknown realms. The east provides the illumination to have the
              courage to live life's adventures.{"\n"} Life can become pleasant
              and exciting from now on if we allow it. The east is the place to
              expand vision, to consider things from afar, to see a broader
              panorama. The East is the place of visionaries.{"\n"} The Great
              Spirit is reflected in all the work of creation and appears in
              every stone and rock, tree and plant, bird, animal, and in humans.
              Where we seek a relationship of love with Nature.{"\n"}
              {"\n"} 2. Totem: Golden Eagle{"\n"} The eagle flies higher than
              other birds and sees far and wide. The Indian says that the eagle
              flies closer to the Sky, to the Great Spirit.{"\n"} The eagle can
              fly directly looking at the Sun, receiving the light directly,
              which is the Great Spirit.{"\n"}
              {"\n"} 3. Element: Fire{"\n"} Fire is the radiant energy of the
              universe, the spark of life. At the human level, it is expressed
              in enthusiasm, ambition, and enterprise. Fire is a very powerful
              element. Its results manifest quickly since its characteristic is
              expansion. The elemental activity of fire in our digestive system
              makes it possible for the substances that provide heat and energy
              to our bodies to be available. Flames bring a feeling of
              satisfaction and well-being.{"\n"} Fire energizes and purifies,
              but can also be destructive and penetrating. According to ancient
              wisdom, the entire universe is fire in the process of
              transformation.{"\n"} Everything in physical existence was
              considered condensed Fire – like solidified light.{"\n"}
              {"\n"} 4. Color: Yellow{"\n"} Yellow is the color of sunlight, a
              cheerful and happy color.{"\n"} Yellow expresses the need for
              constant stimulation and activity. It is a color that inspires the
              mind and the ability to understand.{"\n"} Yellow is associated
              with mental adventures. It is the color of the solar plexus
              chakra. {"\n"}
              {"\n"} 5. Realm: Spiritual/Human{"\n"} The shaman knows that
              within a physical body resides a soul, a spiritual entity. This
              soul manifests through a body to experience the physical plane of
              existence.{"\n"} Man is a dual being, matter and spirit, one
              temporal and the other eternal. According to the oral traditions
              of traveling shamans, human life came to earth about 250,000 years
              ago.
              {"\n"} Man relates to all living things, animals, plants, and
              minerals that all originated from the same source.{"\n"} The
              Indian recognizes that we all are one and composed of these three
              realms. And God and humanity are aspects of the same thing.{"\n"}
              {"\n"} 6. Celestial Body: Sun.{"\n"} The east is the direction of
              the sunrise and the miracle of birth. It is the Sun that makes all
              creatures wake from their rest to start a new day with freshness.
              {"\n"} The Sun is the force of the masculine that brings light in
              the darkness, order from chaos, the primary source of energy for
              everything, from which all life depends. It is also a symbol of
              the inner light in every person – the Divine Sun within us all.
              {"\n"} Each one of us is a Sun.{"\n"}
              {"\n"} 7. Human Aspect: Spiritual Body, The Spirit.{"\n"} The
              vital principle that is imperceptible and intangible. The spirit
              can be described as the driving force within a living organism,
              whether human, animal, plant, or celestial. One difference between
              the spirit and energy is that the spirit has inherent
              intelligence. It took more than the power to create the Universe.
              {"\n"} It required intelligence. We determine with the spirit –
              let the spirit make the decisions.{"\n"} We need to receive
              knowledge in our mind, but it is the spirit that must be the
              determining factor. The distinction can be made clearly this way:
              The mind creates. The spirit directs.
              {"\n"} The force or energy executes. Matter appears.{"\n"}
              {"\n"} 8. Time Period: The Moment.{"\n"} This time period
              emphasizes the importance of the moment. A moment is not just a
              moment, it is also a power or a force that causes rotation and
              movement. A moment can be considered as just a second.{"\n"} The
              power of a moment lies in the quality of the thought contained
              within it. A flash of inspiration, it doesn’t last a long time in
              a period of time, but in a moment.{"\n"}
              {"\n"} 9. Season: Spring{"\n"} It is the season in which new life,
              which has been hidden in the womb of the earth, is awakened and
              bursts forth in splendor. The east, then, is the sense of
              awakening and becoming aware both within and without. The coming
              forth of new life. It is where we can find the answers to our
              needs in nature and in spirit.{"\n"}
              {"\n"} 10. Number: One.{"\n"} The number one represents
              individuality. One is the monad, the first, the beginning, the
              individuation that comes from nothing. It is the main number –
              indivisible and unchanging. It signifies existence and identity.
              {"\n"} It is the seed of all the other numbers, the masculine
              principle in nature. It is the symbol of the will that acts with
              the spirit.{"\n"} One, in the east, is the power of unobstructed
              vision and perceiving the target or the main objective. It forces
              action and independent self-organization. Eleven is its
              counterpart for full internal communication, to connect with the
              Collective Unconscious and to make access to ancient knowledge
              possible.{"\n"}
              {"\n"} 11. Enemy: Death and old age.{"\n"} Death is an enemy until
              it can be turned into a counselor, in the learning of the West
              (not just physical life, but every change we make). We make death
              a counselor by learning the lessons from those changes. Old age is
              an enemy that the spiritual adventurer can never completely
              defeat.
              {"\n"} The best we can do is keep it at bay. How? By remaining
              active and creative and opening ourselves to new ideas – not
              surrendering to the devastations of time. The secret is to acquire
              old age while young. In the context of the East, we realize that
              if we lose our physical body through the devastations of old age
              or physical death before enlightenment comes, we will return to
              Earth again in another physical body to go through the same
              process of seeking, learning, experiencing, and striving to reach
              – ENLIGHTENMENT!{"\n"}
              {"\n"} 12. Manifestation: Art and writing.{"\n"} Being the East
              the symbol of the rising light that breaks the darkness,
              creativity comes through the light that was hidden within the self
              and is expressed through art and writing.{"\n"}
            </Text>
            <View style={[styles.imageView, { height: 447 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/spring3.jpg")}
              />
            </View>

            <Text style={styles.testo}>
              {"\n"}
              Study of Spring – Part 2{"\n"}
              {"\n"} The East is the place we seek to find the truth of life and
              free ourselves from any lies that may be tying us to old places
              that prevent us from starting anew.{"\n"} It also provides us with
              abundant energy, intensity, and persistence. A good time to take
              advantage of our clarity of vision, the ability to work on earthly
              things while still remembering the lessons we have learned on
              other levels of reality.{"\n"} It is the place to go when you want
              to see the world with new eyes, when you wish to open new sources
              of creativity, become more optimistic, observant, passionate, or
              determined.{"\n"} In it, you can learn the true meaning of truth
              for yourself, and how to convey that to others.{"\n"} The powers
              of truth, openness, and enlightenment. Each of the four winds and
              the Four Cardinal Points (Directions) has a special relationship
              with one of the four main forms of life on Earth, which are called
              "kingdoms," explains K. Meadows: they are the Human, Animal,
              Plant, and Mineral Kingdoms.{"\n"} The understanding of these
              relationships can help us promote "insights" to begin developing
              ourselves and our land.{"\n"} The special relationship of the East
              is with the Human Kingdom. The winds of the East emphasize
              spiritual understanding, considering principles, virtues.{"\n"} In
              this way, the East helps us to understand more about the human
              spiritual nature than the physical, mental, or emotional nature.
              For the native, the human being is a Divine Mortal or a Divine
              Physical Being. It is a dual being that exists in both the realms
              of spirit and matter. Each of us, in our lives, has determined how
              we will apply our energies, whether in positive or negative
              aspects. It can be used destructively or constructively.{"\n"} The
              motive is everything. The primary function of the East is the
              power of determination, the power to make changes. It is the power
              to decide how we will use the energy we have.{"\n"} Since the East
              is concerned with spirit and the human being, the Indian concludes
              that man has balance and harmony within when he determines with
              the Spirit.{"\n"} This is how the energy system of human beings is
              structured. Disharmony and imbalance will result if, living a
              cliché, we determine with another part of our being.{"\n"} With
              the mind, for example, which is associated with the North, or with
              the emotions, which are associated with the South. The harmonious
              and synchronous functioning of the human being is absolutely vital
              for well-being.
              {"\n"} In fact, health, happiness, and abundance surely depend on
              this. Finding the right balance between the interior and other
              aspects of the being, between the conscious and subconscious
              aspects of the mind, tuning in with the natural and cosmic forces
              leads to fulfillment, to that state of balance where everything
              and anything becomes possible.{"\n"} Indeed, the roots of the
              question: "What is Spirit?"{"\n"} There is confusion about what
              constitutes the Spirit. Some definitions treat it as soul, or
              ghost, and others. The Native Americans understand it as
              individual consciousness expressed in different and organized
              forms.{"\n"} Spirit is guided by intelligence, and intelligence is
              carried by the mind. So, Spirit was the Power of the Mind and the
              Conscious Mind. The Indian sees each entity, including the human
              being, as an individual spirit, expressing itself with
              consciousness. The human soul was the dwelling place of the
              individualized spirit and allowed the connection between spirit
              and matter.{"\n"} The native considers the soul as the Archive of
              experiences, and it incorporates the permanent personality that
              survives all incarnations. The Indians conclude that as Divine
              Mortals, we should determine our actions with the Spirit, because
              it is the vehicle of intelligence and intentions.{"\n"} Intentions
              where we relate principles, ethics, and morals in everything that
              is the activity of the spirit. However, even if we are certain in
              our hearts and have "good intentions," we may still get undesired
              results if we determine with the mind or emotions and not with the
              Spirit.{"\n"} The Power of the East expresses itself through the
              spirit, motivating the desire for new beginnings and new
              interests.{"\n"} Thus, the response within individuals is the
              drive to start new projects and turn to new interests.{"\n"}{" "}
              Summarizing, the East is primarily the direction for "insights"
              into spiritual principles. Therefore, those born in the East are
              commonly led in life situations where principles are of primary
              importance to them and to the direction of their lives.
              {"\n"}
            </Text>
            <View style={[styles.imageView, { height: 447, width: 300 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/spring1.jpg")}
              />
            </View>

            <Text style={styles.testo}>
              {"\n"}
              {"\n"}
              Study of Spring – Part 3{"\n"}
              {"\n"} Since the East is concerned with the spirit and the human
              being, the Native American concludes that a person has balance and
              harmony within themselves when they determine with the Spirit.
              {"\n"} This is the way the human energy system is structured.
              {"\n"} Disharmony and imbalance will result if, living a cliché,
              one determines with another part of their being. With the mind,
              for example, which is associated with the South (Southern
              Hemisphere), or with the emotions, which are associated with the
              North (Southern Hemisphere).{"\n"} The harmonious and synchronous
              functioning of the human being is absolutely vital for well-being.
              In fact, health, happiness, and abundance surely depend on this.
              {"\n"} Finding the correct balance between the inner and other
              aspects of the being, between the conscious and subconscious
              aspects of the mind, attuning to the natural and cosmic forces
              leads to fulfillment, to that state of balance where everything
              and anything becomes possible.{"\n"} Again, the question: "What is
              the Spirit?"{"\n"} Some definitions treat it as soul, or ghost,
              and others. Native Americans understand it as individual
              consciousness expressed in different and organized forms. Spirit
              is driven by intelligence, and intelligence is carried by the
              mind. So, Spirit was the Power of the Mind and Conscious Mind. The
              Native sees each entity, including the human being, as an
              individual spirit, expressing itself with consciousness. The human
              soul was the dwelling of the individualized spirit and allowed the
              connection between spirit and matter.{"\n"} The Native considers
              the soul as the Archive of experiences and it incorporates the
              permanent personality that survives all incarnations. The Native
              Americans conclude that as Divine Mortals, we should determine our
              actions with the Spirit, because it is the vehicle for
              intelligences and intentions.{"\n"} Intentions where we relate the
              ethical and moral principles in everything that is activity of the
              spirit. However, even if we are certain in our hearts and have
              "good intentions," we may still obtain undesired results if we
              determine with the mind or emotions and not with the Spirit.{"\n"}{" "}
              Meadows exemplifies, with the laws formed by the activities of the
              mind, and asks us to establish and safeguard principles (which, as
              we see, are activities of the spirit).{"\n"} It is possible to
              determine the application of some laws with the mind to uphold the
              letter of the law and follow it literally, even if they are
              contrary to the spirit's intention.
              {"\n"} We travel through life with our own steps, make our
              choices, and determine the path of how we use our energies in the
              choreography of life on Earth. We are, therefore, the product of
              our determination and creators of circumstances. We are not mere
              robots.
              {"\n"} How do we know when we are determining with the Spirit?
              {"\n"} We determine with the Spirit when we follow what the heart
              wants us to do, because the truth of the heart is the voice of the
              Spirit. Giving is an attribute of the East. We give with the heart
              and determine with the spirit. The "Way of the Heart" or the
              "Beautiful Path" is the way of love that does not take advantage
              or exploit others for selfish interests but includes them in the
              advantages we receive.{"\n"} The Native mode considers that we
              must help each other so that the Earth remains in Beauty. From the
              understanding of the Four Winds, the Native concluded that man is
              composed of all the other realms. He is flesh, blood, bones, and
              essence, and the waters of the body contain the life of the
              mineral world, life of the plants, fruits, seeds, and animals. Man
              is not merely a part of the physical world. The physical world,
              which includes minerals, plants, and animals, is literally part of
              man.{"\n"} Man is a miniature of the solar system, a microcosm of
              the Universe. Understand man, and you will understand the Earth
              and the Universe.{"\n"} Understanding the Earth and the
              environment, you will understand both: man and the Universe.{"\n"}{" "}
              The Real Self is the spiritual entity that exists before its
              presence in this life on Earth and will continue to exist after
              its earthly death. The Spirit is the "Inner Self" which is
              eternal. It is perennial. Older people should understand the
              reality of their own age. Younger people think they feel
              differently, until they get old.{"\n"} You feel more with sixty
              than with sixteen years the awareness of what age does to the
              body. In fact, our ideas and opinions can change with the maturity
              of the years. The body may not be as physically capable, and
              limitations may lead to frustration, but you remain who you have
              always been = YOU!{"\n"} Age does not make death. Death is merely
              a change of consciousness. So, what is the purpose of all this? In
              general terms, the Native American understood that the purpose of
              life is to expand, to amplify the "Real Self."{"\n"} The purpose
              of life is to continue the evolution of the "Divine Inner Spirit."
              The purpose of life is the Education of the Spirit.{"\n"} The East
              Direction is the place of Clarity and Enlightenment, of Spiritual
              Light and the sunrise. It is the place of vision, of
              visualization, of aiming, of the elevated masculine. Of creativity
              and the expansion of consciousness, of the image in action and the
              Spirits.{"\n"} It is the place of birth. It is the elevated
              masculine, on the wings of the Golden Eagle. When we need greater
              clarity in our lives, to be freer and more creative, when we do
              not see some aspects of our being, when we are too grounded, when
              we feel the need for greater spirituality, and to receive
              channelings, we sit in the East. Invocation: “Oh Spirit of the
              East, place of Illumination and Clarity, Portal of Spirituality
              and the Element of Fire. Illuminate me!”{"\n"}
              {"\n"} Turning to examine the Web of Earth, even people born in
              the same place, on the same day, at the same hour, with similar
              influences and qualities, are not identical. Although they have
              the same totem, the totem is a moving indication, floating in the
              Cosmos by itself, governed by our own internal dynamics.{"\n"} So,
              two people of the same totem may share similar experiences. The
              effect is determined by the degree of exposure to influences and
              the level of our reaction.{"\n"} The Spirit, as defined by the
              native, is the Essence of the Real Entity. The Spirit is the real
              Essence. The native not only accepts the reality of life after
              death but also the life before birth.{"\n"} Nature was their
              witness to prove this truth. Before each life, we make a strong
              leap in the spring.{"\n"} There is life before and after it. Each
              life is like a way of producing seeds for self-perpetuation. Life
              passes. This is the Cosmic Law. If life continues after death, is
              there also life before birth? The native went beyond this concept,
              believing that the seeds we plant now are for the next life.{"\n"}{" "}
              The seeds of the next life are being prepared in the present life
              we are living. In other words: There is no escaping the
              consequence of our actions.{"\n"} Sooner or later, the past
              reappears to us. Having the awareness of existence before birth,
              why don't we remember? Because we begin each life with a blank
              memory disk.{"\n"} The new disk is inserted into the drive with
              each new life. But the hard drive still retains information in the
              memory bank of our “Unconscious Self.”
            </Text>
          </>
        )}
        {language === "ita" && (
          <>
            <Text style={styles.testo}>
              Studio della Primavera – Parte 1{"\n"} L'elemento associato alla
              Direzione Est è il Fuoco, i colori sono l'oro o il giallo. {"\n"}
              La stagione dell'anno è la primavera, l'ora del giorno è l'alba, e
              la fase della vita umana è l'infanzia e l'adolescenza.{"\n"} Il
              potere dello spirito guardiano della Direzione Est, Wabun, è molto
              diretto: è quello dei nuovi inizi.{"\n"} Wabun porta il periodo di
              nuove crescite per tutti i bambini della terra. Il periodo di
              Wabun è di freschezza, novità, entusiasmo e creatività. È il
              periodo dei nuovi germogli, della luce che arriva dopo ogni
              oscurità, della brillantezza che si vede dopo essere usciti dal
              limbo.{"\n"} L'Est è davvero il luogo della rinascita, un periodo
              in cui tutte le cose sono possibili. Tempo di risveglio.{"\n"}{" "}
              L'Est porta con sé la promessa eterna della primavera, la promessa
              dell'alba. Wabun ci aiuta a sapere che ogni momento può essere un
              nuovo inizio. I doni di Wabun sono quelli della spontaneità,
              ammirazione, curiosità e verità.{"\n"} Wabun porta le capacità di
              esplorare, sentire alta energia, essere pieni di curiosità,
              mettere in discussione tutto e avere la determinazione di vedere
              cosa c'è dietro l'angolo.{"\n"} Le persone sotto l'influenza di
              Wabun hanno la capacità di vedere più lontano e chiaramente
              rispetto ad altre persone. Parzialmente, ciò è dovuto al fatto che
              sono sotto l'influenza dell'Aquila. Come tutte le aquile, l'Aquila
              Dorata ha la capacità di volare in alto e planare verso il
              Creatore.{"\n"} Da lassù, l'Aquila può vedere cosa succede sulla
              Terra. Come l'Aquila, anche le persone di Wabun hanno la capacità
              di planare e vedere da una prospettiva più ampia.{"\n"} Il periodo
              di Wabun è quello della primavera, e quando gli esseri umani sono
              in questa posizione, sono come il resto della natura. Sono pieni
              di entusiasmo, energia e voglia di provare molte cose nuove.{"\n"}{" "}
              Sembra che tutto sia possibile, dove ogni respiro, ogni momento, è
              un nuovo inizio, quando una straordinaria energia è disponibile
              per crescere a tutti i livelli.{"\n"} Ma è anche un periodo in cui
              bisogna imparare a controllare questa energia. Altrimenti,
              potrebbe essere difficile lavorare con gli altri o sostenere un
              progetto e se stessi.{"\n"} Wabun è il luogo che cerchiamo per
              trovare la verità della vita e liberarci da eventuali bugie che
              potrebbero legarci a vecchi luoghi che ci impediscono di
              ricominciare.{"\n"} Ci fornisce anche energia abbondante,
              intensità e persistenza. Un buon periodo per approfittare della
              nostra chiarezza di visione, della capacità di lavorare su
              questioni terrene mentre ricordiamo ancora le lezioni che abbiamo
              imparato su altri livelli di realtà.{"\n"} È il luogo da cui
              andare quando si vuole vedere il mondo con occhi nuovi, quando si
              desidera aprire nuove fonti di creatività, diventare più
              ottimisti, osservatori, appassionati o determinati.{"\n"} In esso
              puoi imparare il vero significato della verità per te, e come
              trasmetterlo agli altri. I poteri della verità, dell'apertura e
              dell'illuminazione. La Direzione Est è il luogo della Chiarezza e
              dell'Illuminazione, della Luce Spirituale e dell'alba del Sole.
              {"\n"} È il luogo della visione, della visualizzazione, della
              contemplazione, del maschile elevato. Della creatività e
              dell'espansione della consapevolezza, dell'immagine in azione e
              degli Spiriti. È il luogo della nascita. È il maschile elevato,
              sulle ali dell'Aquila Dorata. Quando abbiamo bisogno di maggiore
              chiarezza nella nostra vita, di essere più liberi e creativi,
              quando non vediamo alcuni aspetti del nostro essere, quando siamo
              troppo legati alla terra, quando sentiamo il bisogno di una
              maggiore spiritualizzazione e di ricevere canalizzazioni, ci
              sediamo nell'Est.{"\n"} Meadows classifica chiaramente i
              componenti dell'Est:{"\n"}
              {"\n"} 1. Qualità: Illuminazione e Chiarezza.{"\n"} L'EST è il
              luogo dove puoi vedere dove ti trovi!{"\n"} Il potere dell'est è
              il potere della luce, dell'illuminazione mentale e spirituale, e
              della visione interiore che proviene dalla consapevolezza
              dell'unità di tutte le cose viventi. Quando siamo nell'oscurità,
              siamo timorosi di rischiare oltre ciò che conosciamo e
              sperimentiamo.{"\n"} Ma una volta che c'è l'accesso alla luce per
              illuminare, possiamo avere il coraggio di aprirci al nuovo, ai
              regni sconosciuti. L'est fornisce l'illuminazione per avere il
              coraggio di vivere le avventure della vita.{"\n"} La vita può
              diventare piacevole ed emozionante da ora in poi, se lo
              permettiamo. L'est è il luogo per espandere la visione,
              considerare le cose da lontano, vedere un panorama più ampio.
              L'Est è il luogo dei visionari.{"\n"} Il Grande Spirito è riflesso
              in tutto il lavoro della creazione e appare in ogni pietra e
              roccia, albero e pianta, uccello, animale e negli esseri umani.
              Dove cerchiamo una relazione d'amore con la Natura.{"\n"}
              {"\n"} 2. Totem: Aquila Dorata{"\n"} L'aquila vola più in alto
              degli altri uccelli e vede lontano e ampiamente. L'indiano dice
              che l'aquila vola più vicino al Cielo, al Grande Spirito.{"\n"}{" "}
              L'aquila può volare guardando direttamente il Sole, ricevendo la
              luce direttamente, che è il Grande Spirito.{"\n"}
              {"\n"} 3. Elemento: Fuoco{"\n"} Il fuoco è l'energia radiante
              dell'universo, la scintilla della vita. A livello umano, si
              esprime nell'entusiasmo, nell'ambizione e nell'iniziativa. Il
              fuoco è un elemento molto potente. I suoi risultati si manifestano
              rapidamente poiché la sua caratteristica è l'espansione.
              L'attività elementare del fuoco nel nostro sistema digestivo rende
              possibile la disponibilità delle sostanze che forniscono il calore
              e l'energia per i nostri corpi. Le fiamme portano un senso di
              soddisfazione e benessere.{"\n"} Il fuoco energizza e purifica, ma
              può anche essere distruttivo e penetrante. Secondo la saggezza
              antica, l'intero universo è fuoco nel processo di trasformazione.
              {"\n"} Tutto nell'esistenza fisica è stato considerato come Fuoco
              condensato – come luce solidificata.{"\n"}
              {"\n"} 4. Colore: Giallo{"\n"} Il giallo è il colore della luce
              solare, un colore allegro e felice.{"\n"} Il giallo esprime la
              necessità di stimolazione e attività costante. È un colore che
              ispira la mente e la capacità di comprensione.{"\n"} Il giallo è
              associato alle avventure mentali. È il colore del chakra del
              plesso solare. {"\n"}
              {"\n"} 5. Regno: Spirituale/Umano{"\n"} Lo sciamano sa che dentro
              un corpo fisico risiede un'anima, un'entità spirituale. Questa
              anima si manifesta attraverso un corpo per sperimentare il piano
              fisico dell'esistenza.{"\n"} L'uomo è un essere doppio, materia e
              spirito, uno temporale e l'altro eterno. Secondo le tradizioni
              orali degli sciamani viaggiatori, la vita umana è arrivata sulla
              terra circa 250.000 anni fa.{"\n"} L'uomo si relaziona con tutte
              le cose viventi, gli animali, le piante e i minerali, che tutti
              sono originati dalla stessa fonte.{"\n"} L'indiano riconosce che
              tutti noi siamo uno e composti da questi tre regni. E Dio e
              l'umanità sono aspetti della stessa cosa.{"\n"}
              {"\n"} 6. Corpo Celeste: Sole.{"\n"} L'est è la direzione del
              sorgere del sole e del miracolo della nascita. È il Sole che fa
              svegliare tutte le creature dal loro riposo per iniziare un nuovo
              giorno con freschezza.{"\n"} Il Sole è la forza del maschile che
              porta la luce nell'oscurità, l'ordine fuori dal caos, la fonte
              principale dell'energia per tutto, da cui tutta la vita dipende. È
              anche un simbolo della luce interiore in ogni persona – il Sole
              Divino dentro di noi tutti.{"\n"} Ognuno di noi è un Sole.{"\n"}
              {"\n"} 7. Aspetto Umano: Corpo Spirituale, Lo Spirito.{"\n"} Il
              principio vitale che è impercepibile e intangibile. Lo spirito può
              essere descritto come la forza motrice dentro un organismo
              vivente, sia esso umano, animale, vegetale o celestiale. Una
              differenza tra lo spirito e l'energia è che lo spirito ha
              un'intelligenza inerente. Ci è voluto più del potere di creare
              l'Universo.{"\n"} Ci è voluta l'intelligenza. Noi determiniamo con
              lo spirito – lasciamo che sia lo spirito a prendere le decisioni.
              {"\n"} Dobbiamo ricevere la conoscenza nella nostra mente, ma è lo
              spirito che deve essere il fattore determinante. La distinzione
              può essere fatta chiaramente in questo modo: La mente crea. Lo
              spirito dirige.{"\n"} La forza o l'energia eseguono. La materia
              appare.{"\n"}
              {"\n"} 8. Periodo di Tempo: Il Momento.{"\n"} Questo periodo di
              tempo sottolinea l'importanza del momento. Un momento non è solo
              un momento, è anche un potere o una forza che causa rotazione e
              movimento. Un momento può essere considerato solo come un secondo.
              {"\n"} Il potere di un momento risiede nella qualità del pensiero
              contenuto al suo interno. Un lampo di ispirazione, non dura a
              lungo in un periodo di tempo, ma in un momento.{"\n"}
              {"\n"} 9. Stagione: Primavera{"\n"} È la stagione in cui la nuova
              vita, che è stata nascosta nel grembo della terra, si sveglia e
              scoppia in splendore. L'est, quindi, è il senso di risveglio e di
              diventare consapevoli sia dentro che fuori. L'avvento della nuova
              vita. È dove possiamo trovare le risposte ai nostri bisogni nella
              natura e nello spirito.{"\n"}
              {"\n"} 10. Numero: Uno.{"\n"} Il numero uno rappresenta
              l'individualità. Uno è la monade, il primo, l'inizio,
              l'individuazione che viene da nulla. È il numero principale –
              indivisibile e immutabile. Significa esistenza e identità.{"\n"} È
              il seme di tutti gli altri numeri, il principio maschile nella
              natura. È il simbolo della volontà che agisce con lo spirito.
              {"\n"} Uno, nell'est, è il potere della visione senza ostacoli e
              di percepire l'obiettivo o il fine principale. Forza l'azione e
              l'auto-organizzazione indipendente. Undici è il suo contrapposto
              per una comunicazione interna completa, per connettersi con
              l'Inconscio Collettivo e per rendere possibile l'accesso alla
              conoscenza antica.
              {"\n"}
              {"\n"} 11. Nemico: Morte e vecchiaia.{"\n"} La morte è un nemico
              fino a quando non può essere trasformata in una consigliera,
              nell'apprendimento dell'Ovest (non solo la vita fisica, ma ogni
              cambiamento che facciamo). Noi rendiamo la morte una consigliera
              imparando le lezioni di quei cambiamenti. La vecchiaia è un nemico
              che l'avventuriero spirituale non potrà mai sconfiggere
              completamente.{"\n"} Il meglio che possiamo fare è tenerla a bada.
              Come? Rimanendo attivi e creativi e aprendoci alle nuove idee –
              non arrendendoci alle devastazioni del tempo. Il segreto è
              acquisire la vecchiaia da giovani. Nel contesto dell'Est, ci
              rendiamo conto che se perdiamo il nostro corpo fisico con le
              devastazioni della vecchiaia o con la morte fisica prima che
              l'illuminazione arrivi, torneremo sulla Terra ancora in un altro
              corpo fisico per attraversare lo stesso processo di ricerca,
              apprendimento, esperienza e nella prova di raggiungere –
              l'ILLUMINAZIONE!{"\n"}
              {"\n"} 12. Manifestazione: Arte e scrittura.{"\n"} Essendo l'Est
              il simbolo della luce nascente che rompe l'oscurità, la creatività
              arriva attraverso la luce che era nascosta nel sé ed è espressa
              attraverso l'arte e la scrittura.{"\n"}
            </Text>
            <View style={[styles.imageView, { height: 447 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/spring3.jpg")}
              />
            </View>

            <Text style={styles.testo}>
              {"\n"}
              Studio della Primavera – Parte 2{"\n"}
              {"\n"} L'Est è il luogo che cerchiamo per trovare la verità della
              vita e liberarci da qualsiasi menzogna che potrebbe legarci a
              vecchi luoghi che ci impediscono di ricominciare.{"\n"} Ci
              fornisce anche abbondante energia, intensità e perseveranza. Un
              buon momento per sfruttare la nostra chiarezza di visione, la
              capacità di lavorare su cose terrene mentre ricordiamo ancora le
              lezioni che abbiamo imparato su altri livelli di realtà.{"\n"} È
              il posto dove andare quando si vuole vedere il mondo con occhi
              nuovi, quando si desidera aprire nuove fonti di creatività,
              diventare più ottimisti, osservatori, appassionati o determinati.
              {"\n"} In esso, puoi imparare il vero significato della verità per
              te stesso e come trasmetterlo agli altri.{"\n"} I poteri della
              verità, dell'apertura e dell'illuminazione. Ognuno dei quattro
              venti e dei Quattro Punti Cardinali (Direzioni) ha una relazione
              speciale con una delle quattro principali forme di vita sulla
              Terra, che sono chiamati "regni", spiega K. Meadows: sono i Regni
              Umano, Animale, Vegetale e Minerale.{"\n"} La comprensione di
              queste relazioni può aiutarci a promuovere "intuizioni" per
              iniziare a sviluppare noi stessi e la nostra terra.{"\n"} La
              relazione speciale dell'Est è con il Regno Umano. I venti dell'Est
              pongono enfasi sulla comprensione spirituale, considerando
              principi e virtù.{"\n"} In questo modo, l'Est ci aiuta a
              comprendere meglio la natura spirituale umana rispetto alla natura
              fisica, mentale o emotiva. Per il nativo, l'essere umano è un
              Mortale Divino o un Essere Fisico Divino. È un essere duale che
              esiste in entrambi i regni dello spirito e della materia. Ognuno
              di noi, nelle nostre vite, ha determinato come applicheremo le
              nostre energie, sia in aspetti positivi che negativi. Può essere
              usato in modo distruttivo o costruttivo.{"\n"} Il motivo è tutto.
              La funzione principale dell'Est è il potere di determinare, il
              potere di fare cambiamenti. È il potere di decidere come useremo
              l'energia che abbiamo.{"\n"} Poiché l'Est riguarda lo spirito e
              l'essere umano, l'indiano conclude che l'uomo ha equilibrio e
              armonia dentro di sé quando determina con lo Spirito.
              {"\n"} Questo è il modo in cui il sistema energetico degli esseri
              umani è strutturato. La disarmonia e lo squilibrio si
              verificheranno se, vivendo un cliché, determiniamo con un'altra
              parte del nostro essere.{"\n"} Con la mente, ad esempio, che è
              associata al Nord, o con le emozioni, che sono associate al Sud.
              Il funzionamento armonioso e sincronico dell'essere umano è
              assolutamente vitale per il benessere.{"\n"} In effetti, salute,
              felicità e abbondanza dipendono sicuramente da questo. Trovare
              l'equilibrio giusto tra l'interno e altri aspetti dell'essere, tra
              gli aspetti consci e subconci della mente, sintonizzarsi con le
              forze naturali e cosmiche porta al compimento, a quello stato di
              equilibrio in cui tutto e qualsiasi cosa diventa possibile.{"\n"}{" "}
              Infatti, le radici della domanda: "Cos'è lo Spirito?"{"\n"} Ci
              sono confusioni su cosa costituisca lo Spirito. Alcune definizioni
              lo trattano come anima, o fantasma, e altre. I nativi americani lo
              intendono come coscienza individuale espressa in forme diverse e
              organizzate.{"\n"} Lo Spirito è guidato dall'intelligenza, e
              l'intelligenza è portata dalla mente. Quindi, lo Spirito era il
              Potere della Mente e della Mente Conscia. L'indiano vede ogni
              entità, incluso l'essere umano, come uno spirito individuale, che
              si esprime con coscienza. L'anima umana era la dimora dello
              spirito individualizzato e permetteva la connessione tra spirito e
              materia.{"\n"} Il nativo considera l'anima come l'Archivio delle
              esperienze, e incorpora la personalità permanente che sopravvive a
              tutte le incarnazioni. I nativi concludono che, come Mortali
              Divini, dovremmo determinare le nostre azioni con lo Spirito,
              perché è il veicolo delle intelligenze e delle intenzioni.{"\n"}{" "}
              Le intenzioni con le quali colleghiamo i principi, etici e morali,
              in tutto ciò che è attività dello spirito. Tuttavia, anche se
              siamo certi nel nostro cuore e abbiamo "buone intenzioni",
              potremmo comunque ottenere risultati indesiderati se determiniamo
              con la mente o con le emozioni e non con lo Spirito.
              {"\n"} Il Potere dell'Est si esprime attraverso lo spirito,
              motivando il desiderio di nuovi inizi e nuovi interessi.{"\n"}{" "}
              Quindi, la risposta dentro gli individui è l'impulso per iniziare
              nuovi progetti e rivolgersi a nuovi interessi.{"\n"} Riassumendo,
              l'Est è principalmente la direzione per "intuizioni" sui principi
              spirituali. Pertanto, coloro che sono nati nell'Est sono
              comunemente guidati in situazioni di vita in cui i principi sono
              di primaria importanza per loro e per la direzione delle loro
              vite.{"\n"}
              {"\n"}
            </Text>
            <View style={[styles.imageView, { height: 447, width: 300 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/spring1.jpg")}
              />
            </View>

            <Text style={styles.testo}>
              {"\n"}
              Studio della Primavera – Parte 3{"\n"}
              {"\n"} Poiché l'Est è legato allo spirito e all'essere umano, il
              nativo americano conclude che l'uomo ha equilibrio e armonia
              dentro di sé quando si determina con lo Spirito.{"\n"} Questo è il
              modo in cui il sistema energetico degli esseri umani è
              strutturato.{"\n"} Disarmonia e squilibrio risulteranno se,
              vivendo un cliché, si determina con un'altra parte del proprio
              essere. Con la mente, per esempio, che è associata con il Sud
              (Emisfero Sud), o con le emozioni, che sono associate con il Nord
              (Emisfero Sud).{"\n"} Il funzionamento armonioso e sincrono
              dell'essere umano è assolutamente vitale per il benessere. In
              effetti, salute, felicità e abbondanza dipendono sicuramente da
              questo.{"\n"} Trovare l'equilibrio corretto tra l'interno e gli
              altri aspetti dell'essere, tra gli aspetti consapevoli e
              subconscienti della mente, accordandosi con la natura e le forze
              cosmiche porta al compimento, a quello stato di equilibrio dove
              tutto e qualsiasi cosa diventa possibile.{"\n"} Ancora una volta,
              la domanda: "Cos'è lo Spirito?"{"\n"} Alcune definizioni lo
              trattano come anima, o fantasma, e altre. I nativi americani lo
              comprendono come coscienza individuale espressa in forme diverse e
              organizzate. Lo Spirito è guidato dall'intelligenza, e
              l'intelligenza è trasportata dalla mente. Quindi, lo Spirito era
              il Potere della Mente e della Mente Consapevole. Il nativo vede
              ogni entità, incluso l'essere umano, come uno spirito individuale,
              che si esprime con consapevolezza. L'anima umana era la dimora
              dello spirito individualizzato e permetteva il collegamento tra
              spirito e materia.{"\n"} Il nativo considera l'anima come
              l'Archivio delle esperienze e incorpora la personalità permanente
              che sopravvive a tutte le incarnazioni. I nativi americani
              concludono che, come Divini Mortali, dovremmo determinare le
              nostre azioni con lo Spirito, perché è il veicolo delle
              intelligenze e delle intenzioni.
              {"\n"} Le intenzioni sono dove colleghiamo i principi etici e
              morali in tutto ciò che è attività dello spirito. Tuttavia, anche
              se siamo certi nel nostro cuore e abbiamo "buone intenzioni",
              potremmo ancora ottenere risultati indesiderati se ci determiniamo
              con la mente o le emozioni e non con lo Spirito.{"\n"} Meadows
              esemplifica, con le leggi formate dalle attività della mente, e ci
              chiede di stabilire e proteggere i principi (che, come vediamo,
              sono attività dello spirito).{"\n"} È possibile determinare
              l'applicazione di alcune leggi con la mente per mantenere la
              lettera della legge e seguirla letteralmente, anche se contrarie
              all'intenzione dello spirito.
              {"\n"} Viaggiamo attraverso la vita con i nostri passi, facciamo
              le nostre scelte e determiniamo il percorso di come usare le
              nostre energie nella coreografia della vita sulla Terra. Siamo,
              quindi, il prodotto della nostra determinazione e creatori delle
              circostanze. Non siamo semplici robot.{"\n"} Come sappiamo quando
              ci stiamo determinando con lo Spirito?{"\n"} Ci determiniamo con
              lo Spirito quando seguiamo ciò che il cuore vuole che facciamo,
              perché la verità del cuore è la voce dello Spirito. Dare è un
              attributo dell'Est. Diamo con il cuore e determiniamo con lo
              spirito. Il "Cammino del Cuore" o il "Bel Cammino" è il modo di
              amare che non approfitta o sfrutta gli altri per interessi
              personali, ma li include nei vantaggi che riceviamo.{"\n"} Il modo
              nativo considera che dobbiamo aiutarci l'uno con l'altro affinché
              la Terra rimanga nella Bellezza. Dalla comprensione dei Quattro
              Venti, il nativo concluse che l'uomo è composto da tutti gli altri
              regni. È carne, sangue, ossa ed essenza, e le acque del corpo
              contengono la vita del mondo minerale, vita delle piante, dei
              frutti, dei semi e degli animali. L'uomo non è semplicemente una
              parte del mondo fisico. Il mondo fisico, che include minerali,
              piante e animali, è letteralmente parte dell'uomo.{"\n"} L'uomo è
              una miniatura del sistema solare, un microcosmo dell'Universo.
              Comprendere l'uomo, e comprenderai la Terra e l'Universo.{"\n"}{" "}
              Comprendendo la Terra e l'ambiente, comprenderai entrambi: l'uomo
              e l'Universo.{"\n"} Il Vero Sé è l'entità spirituale che esiste
              prima della sua presenza in questa vita sulla Terra e che
              continuerà a esistere dopo la sua morte terrena. Lo Spirito è il
              "Sé Interiore" che è eterno. È perenne. Le persone più anziane
              dovrebbero comprendere la realtà della propria età. I più giovani
              pensano di sentirsi diversi, fino a quando non invecchiano.{"\n"}{" "}
              Ti senti più a sessanta anni che a sedici anni la consapevolezza
              di ciò che l'età fa al corpo. In effetti, le nostre idee e
              opinioni possono cambiare con la maturità degli anni. Il corpo
              potrebbe non essere fisicamente così capace e le limitazioni
              possono arrivare a frustrazione, ma continui ad essere ciò che sei
              sempre stato = TU!{"\n"} L'età non fa la morte. La morte è
              semplicemente un cambiamento di coscienza. Quindi, qual è lo scopo
              di tutto questo? In termini generali, il nativo americano ha
              compreso che lo scopo della vita è espandere, amplificare il "Vero
              Sé".{"\n"} Lo scopo della vita è continuare l'evoluzione dello
              "Spirito Divino Interiore". Lo scopo della vita è l'Educazione
              dello Spirito.{"\n"} La Direzione Est è il luogo della Chiarezza e
              dell'Illuminazione, della Luce Spirituale e del sorgere del Sole.
              È il luogo della visione, della visualizzazione, della mira, del
              maschile elevato. Della creatività e dell'espansione della
              coscienza, dell'immagine in azione e degli Spiriti.{"\n"} È il
              luogo della nascita. È il maschile elevato, sulle ali dell'Aquila
              Dorata. Quando abbiamo bisogno di maggiore chiarezza nella nostra
              vita, di essere più liberi e creativi, quando non vediamo alcuni
              aspetti del nostro essere, quando siamo troppo ancorati a terra,
              quando sentiamo il bisogno di maggiore spiritualità, e di ricevere
              canalizzazioni, ci sediamo nell'Est. Evocazione: “Oh Spirito
              dell'Est, luogo di Illuminazione e Chiarezza, Porta della
              Spiritualità e dell'Elemento Fuoco. Illuminami!”{"\n"}
              {"\n"} Rivolgendo l'attenzione alla Rete della Terra, anche le
              persone nate nello stesso luogo, lo stesso giorno, alla stessa
              ora, con influenze e qualità simili, non sono identiche. Sebbene
              abbiano lo stesso totem, il totem è un'indicazione mobile, che
              fluttua nel Cosmo da solo, governato dalla nostra dinamica
              interna.{"\n"} Quindi, due persone dello stesso totem possono
              condividere esperienze simili. L'effetto è determinato dal grado
              di esposizione alle influenze e dal livello della nostra reazione.
              {"\n"} Lo Spirito che il nativo definisce come l'Essenza
              dell'Entità Reale. Lo Spirito è l'Essenza reale. Il nativo non
              solo accetta la realtà di una vita dopo la morte, ma anche di una
              vita prima della nascita.{"\n"} La Natura era la sua testimone per
              provare questa verità. Prima di ogni vita, facciamo un forte salto
              nella primavera.{"\n"} C'è vita prima e dopo di essa. Ogni vita è
              come un modo per produrre semi per l'auto-perpetuazione. La vita
              passa. Questa è la Legge Cosmica. Se la vita continua dopo la
              morte, esiste anche la vita prima della nascita? Il nativo ha
              superato questo concetto, credendo che i semi che piantiamo ora
              siano per la prossima vita.{"\n"} I semi della prossima vita si
              stanno preparando nella vita presente che stiamo vivendo. In altre
              parole: Non c'è modo di sfuggire alla conseguenza delle nostre
              azioni.{"\n"} Prima o poi, il passato riappare per noi. Avendo
              consapevolezza dell'esistenza prima della nascita, perché non ci
              ricordiamo? Perché iniziamo ogni vita con un disco di memoria
              vuoto.{"\n"} Il nuovo disco viene inserito nel drive con ogni
              nuova vita. Ma il disco rigido conserva ancora informazioni nel
              banco di memoria del nostro “Sé Inconscio.”
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
