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
        {language === "prt" && <Text style={styles.title}>INVERNO</Text>}
        {language === "eng" && <Text style={styles.title}>WINTER</Text>}
        {language === "ita" && <Text style={styles.title}>INVERNO</Text>}

        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("@/assets/images/stagioni/winter.jpg")}
          />
        </View>

        {language === "prt" && (
          <>
            <Text style={styles.testo}>
              É o tempo em que as coisas parecem estar adormecidas.{"\n"}{" "}
              Contudo, com a aparente dormência, um dos maiores crescimentos
              está ocorrendo. É no inverno quando as sementes permanecem
              congeladas dentro da terra, que elas pegam para sí as energias da
              terra que lhes permitem crescer nas estações por vir.{"\n"} É no
              Sul que nossos corpos não conseguem se mover tão facilmente quanto
              o fizeram no passado ou farão no futuro, que parecemos forçados a
              levar para dentro de nós a sabedoria do Espírito que usaremos à
              medida que contiuamos a nossa jornada em torno da Roda.{"\n"} O
              poder do Espírito do Inverno é a Renovação, a Sabedoria, o
              Conhecimento.
              {"\n"} Da beleza e da ressonância harmônica. Da imaginação
              ilimitada e do intelecto. Dos sábios, anciões e ancestrais, das
              preces e agradecimentos. É o portal da honra. Período em que as
              coisas parecem estar adormecidas. {"\n"}É um tempo de escuridão,
              quietude e sonhos. É um tempo para se avaliar realizações e
              propósitos e de se preparar para a dádiva maior de morte e
              renascimento. {"\n"}Época em que muitas pessoas atingem uma
              compreensão de suas próprias vidas, aceitação do que elas
              alcançaram ou não. Pode ser um tempo de paz, um tempo de poder, um
              tempo de perdão, de compaixão por tudo à sua volta.{"\n"} Época de
              se libertar de velhos padrões de comportamento, para se render às
              pequenas mudanças do corpo e da mente em preparação, para as
              mudanças maiores que virão.{"\n"}
              {"\n"}
              {"\n"}
              ESTUDO DO INVERNO - PARTE 1{"\n"}
              {"\n"}A Direção Sul (para o Hemisfério Sul, Norte para o
              Hemisferio Norte) é o portal da Sabedoria, do Conhecimento, do
              Intelecto.{"\n"} Representa o Corpo Mental, lembrando que a mente
              aqui não é o cérebro. O cérebro é um instrumento da mente. O
              cérebro é físico, material. {"\n"}A mente é invisível, ela pode ir
              para qualquer lugar. O conhecimento é aquele que pode ser
              transformado em sabedoria.{"\n"}O Sul é associado com o inverno
              quando a Terra está sendo renovada,quando a Terra está se
              purificando.É onde transformamos os acontecimentos de nossa vida
              em experiências de vida.{"\n"} O inverno nos força a ficar mais
              tempo dentro de nossas casas, dentro de nossas mentes, e nos
              preparar para um período de crescimento e desenvolvimento.{"\n"} É
              o local da ressonância harmônica. Na Roda Medicinal Espírito
              Guardião do Inverno é conhecido também como Waboose. O totem
              animal é o Búfalo Branco. {"\n"}No período do Inverno, o Búfalo
              Branco, solta uma grande quantidade de fumaça branca, simbolizando
              a fumaça do Cachimbo Sagrado, instrumento de preces e ação de
              graças. {"\n"}É através da fumaça do cachimbo que nossas preces
              chegam a Wakan Tanka. O ar, ou melhor, o Vento ( o ar em movimento
              ) é o elemento que rege esta direção.{"\n"} Representa também o
              Reino Animal, e a palavra animal abrangendo tudo o que é animado (
              4 pernas, 2 pernas, criaturas aladas, insetos, peixes…) Essa
              estação nos oferece uma oportunidade para revermos tudo aquilo que
              aprendemos em nossa vida e aprendemos com quem e como
              compartilharmos essa sabedoria.{"\n"} Ela representa os buscadores
              de conhecimentos que nos oferecem novas visões da humanidade e
              também os sábios e anciões que serviram-nos de inspiração através
              dos tempos. Honramos nossos ancestrais.{"\n"} Incorporamos os
              conhecimentos de Fonte Superior, para entender melhor a vida na
              Terra. É a Direção em que aprendemos a respeitar o Sagrado Ponto
              de Vista dos Outros. Nós integramos nossas experiências em nossas
              palavras, pensamentos e ações.{"\n"} O Norte é o local da paz, do
              silêncio.{"\n"} O lugar que aprendemos a escutar e a compreender.
              É a Direção da Honra.{"\n"} O Corpo Celestial são as estrelas, que
              também representam os sábios de outros planetas, de outros sóis.
              {"\n"} Waboose é o lugar da Sabedoria e do conhecimento. Da beleza
              e da ressonância harmônica. Da imaginação ilimitada e do
              intelecto. Dos sábios, anciões e ancestrais. É o local de preces e
              de agradecimento. É o local da honra.{"\n"} Você poderá, por
              exemplo, sentar-se ao Sul caso esteja em época de provas ou exames
              nos estudos. E, para quaisquer questões que envolvam raciocínio,
              intelecto, memória.. Ou quando sente que sua vida precisa ser
              harmonizada, ou simplesmente para agradecer alguma graça recebida.
              {"\n"} Quando queremos nos conectar com nossos ancestrais
              xamânicos e seres extra terrestres. {"\n"}Em seu altar xamânico
              acenda um incenso representando a direção Norte. {"\n"}
              {"\n"}EVOCAÇÃO: {"\n"}” Ó Espírito da Direção Sul, local da
              Sabedoria e Agradecimento, Portal do Conhecimento e do Elemento Ar
              – Ensine-me “. {"\n"}
              {"\n"}Sun Bear poeticamente descreve Wabbose, representado pelo
              Elemento Vento (Ar).{"\n"} A estação é o inverno. A hora do dia é
              a meia-noite. O tempo de vida é tanto a velhice com a neve sobre a
              cabeça, como os recém nascidos que estão voltando a este mundo.
              {"\n"} O inverno é o tempo mais paradoxal da Roda Medicinal. É no
              inverno quando as sementes permanecem congeladas dentro da terra,
              que elas pegam para sí as energias da terra que lhes permitem
              crescer nas estações por vir.{"\n"} É no Sul que nossos corpos não
              conseguem se mover tão facilmente quanto o fizeram no passado ou
              farão no futuro, que parecemos forçados a levar para dentro de nós
              a sabedoria do Espírito que usaremos à medida que contiuamos a
              nossa jornada em torno da Roda. {"\n"}O tempo de Waboose é um
              tempo para desacelerar, de aparente restrições. É quando a
              atividade exteriormente diminui efetivamente. {"\n"}É um tempo de
              escuridão, quietude e sonhos. É uma época em que os humanos estão
              fragilizados, quando sua pele está enrugada. É um tempo em que as
              pessoas tendem a reminiscências e compartilham da sabedoria que
              adquiriram.{"\n"} É um tempo para se avaliar realizações e
              propósitos e de se preparar para a dádiva maior de morte e
              renascimento. É uma época em que muitas pessoas atingem uma
              compreensão de suas próprias vidas, uma aceitação do que elas
              alcançaram e do que não.{"\n"} Pode ser um tempo de paz, um tempo
              de poder, um tempo de perdão, de compaixão por tudo à sua volta.
              {"\n"} É época de se libertar de velhos padrões de comportamento,
              para se render às pequenas mudanças do corpo e da mente em
              preparação, para as mudanças maiores que virão. O inverno é um
              tempo para ambos, começo e fim, morte e vida, nova vida embutida
              numa morte aparente.{"\n"} No inverno a terra aparenta estar
              morta, no entanto há muita coisa acontecendo lá. O mesmo acontece
              na vida humana. Mesmo quando nos libertamos de nossos envelopes
              humanos, nosso Espírito, nossa energia vai para um lugar que nos
              prepara para um novo começo que virá. A maior lição do inverno é a
              dádiva. É a nossa maior responsabilidade compartilhar com os
              outros a dádiva do nosso conhecimento adquirido na jornada da
              Roda, a dádiva de nossos corpos à Mãe Terra, que nos alimentou
              enquanto nela estivemos, e do amor que compartilhamos com todos os
              outros seres, sabendo que quanto mais damos amor, mais recebemos.
              {"\n"} Um dos presentes do inverno é a compreensão intuitiva dessa
              dádiva. Junto com esta compreensão estão as faculdades psíquicas
              mais ativadas e uma grande perspicácia em sintonizar sonhos e
              visões, tanto nossos como de outras pessoas.{"\n"}O Búfalo Branco
              é um animal que doou tudo de sí aos humanos : carne, pele, ossos e
              espírito. {"\n"}Foi a Mulher Búfalo Branco que deu o cachimbo aos
              humanos. É uma época para se contemplar a vida e seus paradoxos.
              {"\n"} É uma boa época para se pensar a respeito das questões da
              vida e da morte e examinar atitudes em relação à isso. É tempo de
              aprender a ter paciência.
              {"\n"} Época em que suas habilidades psíquicas e místicas estarão
              bem acima da média.{"\n"} É tempo de ver como se sente a respeito
              dos presentes que a vida lhe deu. É época de se praticar pequenas
              doações que o preparam para as maiores.{"\n"} Durante as épocas de
              Waboose, você precisará centrar-se, lembrar que é tanto um ser da
              Terra, como do Céu.{"\n"} O poder de Waboose é o da aceitação da
              morte e a necessidade de compartilhar tudo o que foi dado. Segundo
              Kenneth Meadows, é associado à mente e ao poder que algumas vezes
              é descrito como: ” O poder de sustentar o que o conhecimento pode
              trazer”. {"\n"}A mente não é o cérebro. O cérebro é meramente uma
              ferramenta da mente. O cérebro é físico, material, um
              bio-computador confinado dentro da proteção da concha do crânio.{" "}
              {"\n"}A mente, entretanto, não é física, não é material, mas
              invisível e livre. O cérebro nos mantém vivo, mas a mente dirige
              nossa vida. O cérebro emite uma energia que pode ser medida.{" "}
              {"\n"}A mente tem uma energia que não pode ser mensurada, somente
              experimentada como consciência.
              {"\n"} A energia da mente vai onde a consciência vai. O Sul é a
              direção da mente, do conhecimento e da sabedoria. Meadows, explica
              que conhecimento não é um tipo de informação inútil, como alguns
              que adquirimos na televisão, mas o conhecimento que pode ser
              transformado em sabedoria no jogo da vida.{"\n"} E o que é
              sabedoria? Para o índio vermelho é a aplicação do conhecimento. O
              conhecimento aplicado com amor.{"\n"} O conhecimento é aquele que
              provê respostas para as questões: que, quem, onde e como; e a
              sabedoria responde o porquê.{"\n"} Não é suficiente buscar
              conhecimento na ordem para parecer um sábio e alimentar a vaidade.
              {"\n"} Não é suficiente buscar conhecimento meramente para se
              estimular a mente. Conhecimento só tem valor para o “Eu Interno”
              quando é transformado em sabedoria por amor, com o sentido de
              equilibrar a polaridade com o Norte.{"\n"} Achar esse equilíbrio e
              harmonia é parte do propósito da vida. Nós equilibramos e
              harmonizamos nossa própria dinâmica individual interior, no modo
              de expressarmos essas energias na coreografia da vida que vivemos.
              {"\n"} O Poder se expressa através da mente e a reação humana é o
              modo que nós mentalmente abordamos as mudanças e crenças que
              formam a filosofia de vida. {"\n"}A mente é a grande fonte
              criativa. É o poder que traz as experiências de vida que serão
              purificadas e renovadas na mente e nas questões humanas.{"\n"}{" "}
              Desde que o frio nos força a ficar mais dentro de casa, sua
              influência traz atenção para questões internas mais do que
              externas e a fazer o uso do tempo como preparação efetiva para um
              período de rápido crescimento e desenvolvimento que virá adiante.
              {"\n"} Em algumas culturas, os Ventos frios são personificados
              pelos “Deuses do Gelo”, que tem o poder para transformar água em
              gelo e imprimir nas pedras cristais com a temperatura de seu
              sopro. {"\n"}É também quem nos faz buscar o calor de nossos
              corações e a compaixão. {"\n"}
              {"\n"}
            </Text>
            <View style={[styles.imageView, {height: 430}]}>
              <Image
                style={[styles.image]}
                source={require("@/assets/images/stagioni/winter2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"}
              ESTUDO DO INVERNO - PARTE 2{"\n"}
              {"\n"}
              Aqui você pode procurar ideias que podem transformar sua vida.
              {"\n"} É o lugar da purificação, da renovação para a preparação de
              novos começos. {"\n"}Os componentes desta direção segundo Kenneth
              Meadows (The Medicine Way) são:{"\n"} 1. Qualidade: Conhecimento e
              sabedoria
              {"\n"}
              Conhecimento é aquilo que nós conhecemos. Isto é processo de
              conhecimento.{"\n"} Conhecer é ter um entendimento através da
              experiência pessoal do que é conhecido. Conhecimento está acima da
              crença. Crença é confiar na palavra ou opinião de outro. A opinião
              é não saber. Quando o que está sendo acreditado já é sabido, não é
              nenhuma opinião, mas conhecimento.{"\n"} Para os ancestrais, o
              conhecimento abraçava a filosofia, a religião e a ciência. Não
              eram disciplinas separadas, e integrou-os no um conhecimento.
              {"\n"} Entretanto, a aquisição do conhecimento sozinho não se
              considerou suficiente. O conhecimento teve que ser mantido na
              sabedoria.{"\n"} O conhecimento responde a perguntas como: que?
              Como? Quando? Onde? Quem?{"\n"} O conhecimento transforma-se em
              sabedoria quando dá respostas à pergunta: Por quê?{"\n"} A
              sabedoria é também conhecimento aplicado. A sabedoria verdadeira é
              conhecimento aplicado com amor. A sabedoria manifesta-se quando o
              conhecimento que abraça a filosofia, a religião e a ciência são
              aplicados com amor.{"\n"} Aquela é a lição que a qualidade do Sul
              tem que nos ensinar. {"\n"}
              {"\n"}Totem: Búfalo{"\n"} O búfalo era o animal o mais importante
              para o índio norte- americano porque forneceu tudo que era
              necessário para sustentar a vida. Sua carne era alimento, sua pele
              e material fornecido para a roupa e para a cabana. O búfalo era
              assim um animal que dava na sua totalidade, a fim de que o homem
              pudesse viver.{"\n"} O búfalo simbolizava o espírito que dá
              totalmente de sua essência no processo da vida. Era também um
              símbolo da dependência do homem com natureza para sua garantir sua
              vida. {"\n"}
              {"\n"}Elemento: Ar{"\n"} A característica do elemento ar é
              movimento, locomoção, mudança, frequentemente repentinas,
              constantes e às vezes inesperadas. {"\n"}É suavidade, frescor,
              liberdade e exalação. O ar traz ‘ a respiração da vida ‘ e está
              transformando-a.É a qualidade que nós percebemos quando nós
              falamos de algo que incorpora nossas vidas ‘ como uma respiração
              no ar fresco ‘, transformando a atmosfera inteira.{"\n"} O ar tem
              a característica de ser um portador. Nossos pensamentos, sonhos e
              aspirações viajam como se fosses carregados pelo ar. Os
              pensamentos parecem vir fora do ar. Assim o ar representa as
              características da mente que tem a habilidade de se mover
              livremente e rapidamente.
              {"\n"} Aprenda escutar o vento, ele escova a alma de todas as
              coisas vivas e continua seus cursos uma partícula de tudo que
              toque. Quando você aprender a viajar com o vento, você não estará
              mais preso ao veiculo da carne, mas livre para cantar e voar como
              um pássaro.
              {"\n"}
              Então sente que, os pássaros, os animais e as árvores somos todos
              nós, respirando no grande vento e sendo respirados por ele.{
                "\n"
              }{" "}
              Você não pode ver o vento, mas ele está lá, e se você parar e se
              aquietar por um momento sentirá sua presença e a do Grande
              Espírito. {"\n"}O vento dobra árvores poderosas e balança-as com
              um sussurro, contudo você não pode vê-lo – somente estar ciente de
              sua presença e de seu poder. {"\n"}Vem e vai, mas sempre está lá.
              Do mesmo modo, você não pode ver o Grande Espírito, exceto na
              majestade de cada alvorecer e no ritmo e fluxo da natureza em
              torno de você. Basta você sair na mata e olhar. Se você escutar
              você ouvirá sua voz no vento e na canção das flores acima de sua
              cabeça, no reconhecimento. Se você escutar você ouvirá sua poesia
              nas árvores, nos montes e nos vales.{"\n"} Você ouvirá se escutar
              e verá se olhar.{"\n"}
              {"\n"} Cor: Branco {"\n"}O branco é a cor da pureza, do
              equilíbrio, e da vida que renova-se. O branco é a soma de todas as
              cores do arco-íris e representa assim a perfeição ou a conclusão.
              Simboliza as aspirações mais elevadas. O branco indica o pureza da
              intenção. {"\n"}
              {"\n"}Reino: Animal{"\n"} A humanidade civilizada, vivendo em
              cidades grandes, acostumadas com controle remotos e a apertar
              botões, perdeu o toque com natureza e confunde completamente sua
              relação com o Reino Animal.{"\n"} Numa das mãos o amor é
              expressado aos animais domésticos, mas frequentemente de uma
              maneira desequilibrada, querendo que cães, gatos, pássaros, peixes
              e répteis, vivam como seres humanos, ganham até pompom na cabeça,
              fazem tratamento de benza, etc.{"\n"} Na outra mão os animais são
              tratados como objetos sem sentimento e só tem valor na extensão do
              que podem ser úteis para satisfazer as exigências dos humanos.
              {"\n"} Uma das causas dessa negligência do valor intrínseco da
              vida animal é a opinião que os animais não têm alma e estão
              meramente aqui na terra a servir os homens. Em tempos modernos já
              tiveram uma opinião quase idêntica sobre as mulheres.{"\n"} Alguns
              teólogos já discutiram, no passado, se as mulheres tinham alma.
              Assim o índio não considera animais como criaturas inferiores, mas
              como expressões do Grande Espírito, que vive de uma maneira
              diferente.{"\n"} Apenas porque um animal não pode falar uma língua
              humana, não temos o direito de supor que não há uma inteligência,
              emoção, sensibilidade. {"\n"}
              {"\n"}Corpo Celestial: As Estrelas{"\n"}
              Estima-se por astrônomos que há aproximadamente 5.000 estrelas que
              são visíveis ao olho nú e mais de 200.000 que podem ser vistos
              através de binóculos com uma lente de 50mm. {"\n"}Estima-se que a
              galáxia contém, ao menos, cem milhões de estrelas. No pensamento
              nativo as estrelas são o símbolo da universalidade e da proteção
              divina. As estrelas figuraram nas preces ao sol e para todas as
              estrelas que são sóis para outros planetas.{"\n"} Apesar de todos
              os avanços científicos do século a século, a humanidade tem ainda
              pouco conhecimento das realidades do cosmos. É possível que os
              ancestrais tiveram um conhecimento maior do cosmos do que o homem
              moderno e que este conhecimento esteve perdido ou destruído? Há
              umas lendas entre o Cherokees que seus antepassados suportam as
              névoas do tempo e eram ‘ as crianças dos povos das estrelas ‘.
              {"\n"} Os índios maias reivindicaram ser ‘ as crianças das
              Plêiades. Não é sem significado que o símbolo da estrela é um
              símbolo que inspire a humanidade para a perfeição.{"\n"}
              {"\n"} Aspecto Humano: A Mente. {"\n"}O cérebro é a matéria
              cinzenta dentro do crânio. É físico, material, confinado dentro do
              escudo protetor grosso do crânio.{"\n"} O cérebro mantém-nos
              vivos. A mente não é física e material. É invisível e
              inconfinável. Pode ir em qualquer lugar e dirige nossa vida. O
              cérebro tem a energia que pode ser medida com o
              eletroencéfalograma.{"\n"} O cérebro tem uns 18 bilhões de
              neurônios ou os centros do nervo que ativam a força,a energia,
              todas as vezes nós pensamos, por mais aleatório que um pensamento
              pôde ser.{"\n"} A mente tem uma energia que não pode ser medida,
              somente parcialmente o experimentada como o consciência.
              {"\n"} A energia da mente vai a aonde a consciência vai. Esta
              energia da mente é a fonte do poder que vai além do espaço que a
              ciência física possa medir. {"\n"}O cérebro é a ferramenta da
              mente e de sua consciência. Nós temos estabelecido que você não é
              seu corpo.{"\n"} Seu corpo é apenas um veículo necessário para
              explorar e experimentar a dimensão física, material.{"\n"} Você é
              sua consciência. Esse entendimento permite sentir a essência da
              existência nas palavras por estar tão próximas de nós. A partir do
              momento em que aceitar que você é sua consciência, poderá
              constatar que ela não pode ser destruída, mas pode mudar recebendo
              um outros corpo.{"\n"}
              {"\n"} Período De Tempo: O Futuro{"\n"} A mente não é material, é
              parte da alma. Nosso destino é criado por nós, nossa própria
              decisão e ações individuais e coletivas.{"\n"} Portanto a maior
              parte do futuro está em nossas mãos.{"\n"}O futuro não está fora
              da nossa realidade atual, mas é parte dela e é também parte do
              nosso passado. O ensinamento aqui é que o futuro está contido
              dentro do nosso presente. Portanto, se quer um futuro melhor, olhe
              suas ações no presente.{"\n"} As sementes do seu futuro estão
              contidas no seus pensamentos de agora. Melhore a qualidade de seus
              pensamentos agora e seu futuro será melhor do que o seu presente.
              {"\n"}
              {"\n"} Estação: Inverno{"\n"} A característica do inverno é a
              renovação. O inverno é o tempo em que a terra está parada e
              aparentemente adormecida. Mas esse parada é somente fora, no
              período do descanso aparente, as energias mais profundas da terra
              estão entrando na preparação para o crescimento rápido que deve
              logo vir. É paradoxal. O crescimento rápido dentro do descanso,
              apenas porque a vida é escondida na morte.{"\n"} O crescimento
              interior para suportar o crescimento exterior.{"\n"} Outra lição
              aqui, as coisas nem sempre são o que aparecem.{"\n"}
              {"\n"} Número: Quatro e quatorze. {"\n"}Quatro são 2 x 2. É
              dualidade e o equilibrio. É o poder do equilíbrio, do alinhamento
              e da harmonia. Quatro é um estado de permanencia. Um número
              sagrado entre índios. Há quatro grandes poderes, quatro elementos,
              quatro sentidos, quatro ventos, quatro estações, quatro raças
              (branco, vermelho, amarelo e preto), quatro idades do
              desenvolvimento humano (infância, juventude, adulta e maturidade),
              quatro lições a serem aprendidas (autoconhecimento,
              autocompreensão, autocontrole e autorrealização). {"\n"}Quatro no
              inverno é considerado como o poder da resistência e da
              persistência. Quatorze dá o acesso nos planos internos, ao
              espírito dos animais e ao aspecto masculino da terra. {"\n"}
              {"\n"}Inimigo: Certeza {"\n"}A certeza pode ser definida como um
              estado da mente que faz você pensar que já sabe tudo o que deve
              saber sobre um assunto, ou quando você responde já saber por ter
              lido em algum lugar, etc… você está no perigo de ser superado pela
              certeza.{"\n"} A certeza pode tentar obstruir a realização de uma
              nova verdade. O professor verdadeiro dá o conhecimento com
              humildade. A certeza é a inimiga da claridade da mente e da
              finalidade.{"\n"}
              {"\n"} Manifestação: Filosofia, religião e ciência.{"\n"} Os povos
              antigos não separavam a filosofia da religião e da ciência. Eram
              considerados aspectos de uma mesma coisa.
              {"\n"}
              </Text>
            <View style={[styles.imageView, {height: 370}]}>
              <Image
                style={[styles.image]}
                source={require("@/assets/images/stagioni/winter3.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"} ESTUDO DO INVERNO - PARTE 3{"\n"}
              {"\n"} A luz desaparece na escuridão do invisível e não pode ser
              vista ou sentida. {"\n"}É como a escuridão da noite da Lua Nova,
              quando as duas luminárias, o Sol e a Lua, não são muito visíveis,
              mas nós sabemos que estão lá, não como fé, mas através do
              conhecimento verdadeiro. {"\n"}Esta fase reconhece a importância
              de dividir e influencia o valor da obrigação e da
              responsabilidade. Ela celebra a alegria de pertencer, o valor do
              vínculo familiar e relacionamentos fechados, e a boa vontade para
              com toda a humanidade.{"\n"} Marca um tempo para fazer ajustes, e
              de purificação da intenção, na preparação da chegada da primavera
              e a transição para um novo ciclo de atividades da roda do Ano.
              {"\n"} Traz a primeira luz da iluminação. Sua ênfase é a
              purificação, não tão moralista, mas sim da concentração e
              focalização das intenções. É um excelente tempo para meditação e
              contemplação.{"\n"} É o tempo em que as coisas parecem
              adormecidas. No inverno as sementes permanecem congeladas e
              absorvem a energia da Terra, que lhes permite crescer nas estações
              por vir.{"\n"} Para desacelerar, sonhar, entrar na quietude,
              reavaliar realizações. Para se preparar para a dádiva maior de
              morte e renascimento, e aprender a ter paciência.{"\n"} É o poder
              da renovação, purificação. Enquanto a Terra dorme na superfície,
              ela está passando sua mais profunda energia para todas as suas
              crianças. Durante esse período de descanso ela está se preparando
              para um período rápido de crescimento a seguir.{"\n"} É tempo de
              conservar energias e os recursos e não desperdiçar a energia ativa
              para o exterior. Período para olhar mais para o nosso interior a
              fim de encontrarmos uma nova fonte de luz e regeneração. {"\n"}
              Marca o inicio de um novo ciclo, onde a Terra se regenera. É um
              momento do ano em que nossas mente estarão mais no lar. Gastamos
              mais o tempo com a família, na casa com amigos, contando
              histórias, onde praticamos o sentido de compartilhar.{"\n"} O
              momento dos ritos de dar e receber (o Natal por exemplo).
              Aprendemos a olhar a Teia Cósmica como os seus pontos ligados
              entre a morte, renovação e renascimento. Percebemos o inverno,
              como que deixados na obscuridade.{"\n"} Poucas flores, poucos
              pássaros e insetos, poucas folhas (em alguns lugares só neve). A
              terra está fria. Mas nós sabemos que a luz e o calor estão
              adiante, porque ela sempre voltou.{"\n"} Os homens nos primórdios
              não tinham essa certeza. Então oravam, faziam oferendas ao Criador
              para o Sol voltar. Nesta forma de energia, essa realidade criada
              pelos nossos ancestrais é que nos conectamos em essência. O
              Solstício de inverno representou a morte do ano solar velho e do
              nascimento do novo.{"\n"} Assim fazemos com o calendário do
              hemisfério Norte no mais pleno verão. Portanto o Nosso Natal e
              cerimônia de dar e receber poderia ser feita no mês de junho, que
              estaria de acordo com o Calendário da Terra. O rito de montar um
              pinheiro de Natal, é que esta árvore é a única que mantém seus
              ramos verdes na neve. A árvore do Inverno.{"\n"} Os rituais de
              inverno devem refletir a purificação pessoal e o renascimento. O
              entulho velho é queimado e utilizado para fertilizar o solo para o
              plantio de primavera. O frio vento do Sul, no inverno purifica e
              limpa a Terra e força as pessoas a ficarem mais para dentro, para
              manter calor, renovar e refrescar a sí mesmo. {"\n"}Segundo a roda
              medicinal, Wabbose, o Espírito Guardião do Norte (do Sul para o
              Hemisferio Sul) é representado pelo Elemento Vento (Ar). A estação
              é o inverno.{"\n"} A hora do dia é a meia-noite. O tempo de vida é
              tanto a velhice com a neve sobre a cabeça, como os recém nascidos
              que estão voltando a este mundo.{"\n"} É o tempo em que as coisas
              parecem estar adormecidas. Contudo, com a aparente dormência, um
              dos maiores crescimentos está ocorrendo. É no inverno quando as
              sementes permanecem congeladas dentro da terra, que elas pegam
              para sí as energias da terra que lhes permitem crescer nas
              estações por vir.
              {"\n"}
              Aqui no Sul nossos corpos não conseguem se mover tão facilmente
              quanto o fizeram no passado ou farão no futuro, que parecemos
              forçados a levar para dentro de nós a sabedoria do Espírito que
              usaremos.{"\n"} O tempo de Waboose é um tempo para desacelerar, de
              aparente restrições. É quando a atividade exteriormente diminui
              efetivamente. É um tempo de escuridão, quietude e sonhos. É uma
              época em que os humanos estão fragilizados, quando sua pele está
              enrugada. É um tempo em que as pessoas tendem a reminiscências e
              compartilham da sabedoria que adquiriram.{"\n"} É um tempo para se
              avaliar realizações e propósitos e de se preparar para a dádiva
              maior de morte e renascimento. É uma época em que muitas pessoas
              atingem uma compreensão de suas próprias vidas, uma aceitação do
              que elas alcançaram e do que não.{"\n"} Pode ser um tempo de paz,
              um tempo de poder, um tempo de perdão, de compaixão por tudo à sua
              volta.{"\n"} É época de se libertar de velhos padrões de
              comportamento, para se render às pequenas mudanças do corpo e da
              mente em preparação, para as mudanças maiores que virão diga que
              continuamos a nossa jornada em torno da Roda.{"\n"} O mesmo
              acontece na vida humana. Mesmo quando nos libertamos de nossos
              envelopes humanos, nosso Espírito, nossa energia vai para um lugar
              que nos prepara para um novo começo que virá. A maior lição de
              Waboose é a dádiva. É a nossa maior responsabilidade compartilhar
              com os outros a dádiva do nosso conhecimento adquirido na jornada
              da Roda, a dádiva de nossos corpos à Mãe Terra, que nos alimentou
              enquanto nela estivemos, e do amor que compartilhamos com todos os
              outros seres, sabendo que quanto mais damos amor, mais recebemos.{" "}
              {"\n"}Um dos presentes de Waboose é a compreensão intuitiva dessa
              dádiva.{"\n"} Junto com esta compreensão estão as faculdades
              psíquicas mais ativadas e uma grande perspicácia em sintonizar
              sonhos e visões, tanto nossos como de outras pessoas.
            </Text>
          </>
        )}
        {language === "eng" && (
          <>
          <Text style={styles.testo}>
            It is the time when things seem to be asleep.{"\n"} However, with
            the apparent dormancy, one of the greatest growths is occurring. It
            is in winter, when the seeds remain frozen inside the earth, that
            they take in the energies of the earth that allow them to grow in
            the seasons to come.{"\n"} It is in the South that our bodies cannot
            move as easily as they did in the past or will in the future, that
            we seem forced to take within us the wisdom of the Spirit that we
            will use as we continue our journey around the Wheel.{"\n"} The
            power of the Spirit of Winter is Renewal, Wisdom, Knowledge.{"\n"}{" "}
            Of beauty and harmonic resonance. Of unlimited imagination and
            intellect. Of the wise, elders, and ancestors, of prayers and
            thanks. It is the portal of honor. The period when things seem to be
            asleep.{"\n"}It is a time of darkness, stillness, and dreams. It is
            a time to assess achievements and purposes and to prepare for the
            greatest gift of death and rebirth.{"\n"}It is a time when many
            people reach an understanding of their own lives, accepting what
            they have or have not achieved. It can be a time of peace, a time of
            power, a time of forgiveness, of compassion for everything around
            you.{"\n"} It is a time to free oneself from old patterns of
            behavior, to surrender to the small changes of the body and mind in
            preparation for the greater changes to come.{"\n"}
            {"\n"} {"\n"} STUDY OF WINTER - PART 1{"\n"}
            {"\n"}The South Direction (for the Southern Hemisphere, North for
            the Northern Hemisphere) is the portal of Wisdom, Knowledge, and
            Intellect.{"\n"} It represents the Mental Body, remembering that the
            mind here is not the brain. The brain is an instrument of the mind.
            The brain is physical, material.{"\n"}The mind is invisible; it can
            go anywhere. Knowledge is what can be transformed into wisdom.{"\n"}
            The South is associated with winter when the Earth is being renewed,
            when the Earth is purifying itself. It is where we transform the
            events of our lives into life experiences.{"\n"} Winter forces us to
            spend more time inside our homes, inside our minds, and to prepare
            for a period of growth and development.{"\n"} It is the place of
            harmonic resonance. In the Medicine Wheel, the Winter Spirit
            Guardian is also known as Waboose. The animal totem is the White
            Buffalo.{"\n"} In the winter period, the White Buffalo releases a
            great amount of white smoke, symbolizing the smoke of the Sacred
            Pipe, an instrument for prayers and thanksgiving.{"\n"} It is
            through the smoke of the pipe that our prayers reach Wakan Tanka.
            The air, or rather, the Wind (air in motion), is the element that
            governs this direction.{"\n"} It also represents the Animal Kingdom,
            and the word animal encompasses everything that is animated (4 legs,
            2 legs, winged creatures, insects, fish…). This season offers us an
            opportunity to review everything we have learned in our life and to
            learn from who and how we share this wisdom.{"\n"} It represents the
            seekers of knowledge who offer us new views of humanity and also the
            wise and elders who have inspired us throughout time. We honor our
            ancestors.{"\n"} We incorporate the knowledge of the Higher Source,
            to better understand life on Earth. It is the Direction in which we
            learn to respect the Sacred Point of View of Others. We integrate
            our experiences into our words, thoughts, and actions.{"\n"} The
            North is the place of peace, of silence.{"\n"} It is the place where
            we learn to listen and understand. It is the Direction of Honor.
            {"\n"} The Celestial Body is the stars, which also represent the
            wise of other planets, of other suns.{"\n"} Waboose is the place of
            Wisdom and Knowledge. Of beauty and harmonic resonance. Of unlimited
            imagination and intellect. Of the wise, elders, and ancestors. It is
            the place of prayers and thanksgiving. It is the place of honor.
            {"\n"} You may, for example, sit in the South if you are in a time
            of tests or exams in your studies. And for any issues involving
            reasoning, intellect, memory... Or when you feel your life needs to
            be harmonized, or simply to give thanks for any grace received.
            {"\n"} When you want to connect with your shamanic ancestors and
            extraterrestrial beings.{"\n"}On your shamanic altar, light an
            incense representing the North direction.{"\n"}
            {"\n"}EVOCATION:{"\n"} “Oh Spirit of the South Direction, place of
            Wisdom and Gratitude, Portal of Knowledge and the Air Element –
            Teach me.”{"\n"}
            {"\n"}Sun Bear poetically describes Wabbose, represented by the
            Element Wind (Air).{"\n"} The season is winter. The time of day is
            midnight. The time of life is both old age with snow upon the head
            and the newborns returning to this world.{"\n"} Winter is the most
            paradoxical time of the Medicine Wheel. It is in winter, when the
            seeds remain frozen within the earth, that they absorb the energies
            of the earth that allow them to grow in the coming seasons.{"\n"} It
            is in the South that our bodies cannot move as easily as they did in
            the past or will in the future, and we seem forced to take within
            ourselves the wisdom of the Spirit that we will use as we continue
            our journey around the Wheel.{"\n"} Waboose’s time is a time to slow
            down, of apparent restrictions. It is when outward activity
            effectively diminishes.{"\n"}It is a time of darkness, stillness,
            and dreams. It is a time when humans are weakened, when their skin
            is wrinkled. It is a time when people tend to reminisce and share
            the wisdom they have acquired.{"\n"} It is a time to evaluate
            accomplishments and purposes and prepare for the greatest gift of
            death and rebirth. It is a time when many people reach an
            understanding of their own lives, an acceptance of what they have
            achieved and what they have not.{"\n"} It can be a time of peace, a
            time of power, a time of forgiveness, of compassion for all around
            you.{"\n"} It is a time to free oneself from old patterns of
            behavior, to surrender to the small changes of the body and mind in
            preparation for the greater changes to come. Winter is a time for
            both beginning and end, death and life, new life embedded in
            apparent death.{"\n"} In winter, the earth appears dead, yet much is
            happening there. The same happens in human life. Even when we free
            ourselves from our human envelopes, our Spirit, our energy goes to a
            place that prepares us for a new beginning that will come. The
            greatest lesson of winter is the gift. It is our greatest
            responsibility to share with others the gift of our knowledge gained
            on the journey of the Wheel, the gift of our bodies to Mother Earth,
            which fed us while we were in it, and the love we share with all
            other beings, knowing that the more love we give, the more we
            receive.{"\n"} One of winter's gifts is the intuitive understanding
            of this gift. Along with this understanding come the more activated
            psychic faculties and a great insight into tuning into dreams and
            visions, both our own and others’.{"\n"}The White Buffalo is an
            animal that gave everything of itself to humans: meat, skin, bones,
            and spirit.{"\n"} It was the White Buffalo Woman who gave the pipe
            to humans. It is a time to contemplate life and its paradoxes.{"\n"}{" "}
            It is a good time to think about the issues of life and death and
            examine attitudes toward them. It is time to learn to have patience.
            {"\n"} It is a time when your psychic and mystical abilities will be
            well above average.{"\n"} It is a time to see how you feel about the
            gifts that life has given you. It is a time to practice small
            donations that prepare you for the larger ones.{"\n"} During the
            times of Waboose, you will need to center yourself, remembering that
            you are both a being of the Earth and of the Sky.{"\n"} The power of
            Waboose is the acceptance of death and the need to share all that
            has been given. According to Kenneth Meadows, it is associated with
            the mind and power that is sometimes described as: "The power to
            sustain what knowledge may bring."{"\n"} The mind is not the brain.
            The brain is merely a tool of the mind. The brain is physical,
            material, a bio-computer confined within the protection of the
            skull’s shell.{"\n"} The mind, however, is not physical, is not
            material, but invisible and free. The brain keeps us alive, but the
            mind directs our life. The brain emits an energy that can be
            measured.{"\n"} The mind has an energy that cannot be measured, only
            experienced as consciousness.{"\n"} The energy of the mind goes
            where consciousness goes. The South is the direction of the mind, of
            knowledge, and of wisdom. Meadows explains that knowledge is not a
            type of useless information, like some that we acquire from
            television, but the knowledge that can be transformed into wisdom in
            the game of life.{"\n"} And what is wisdom? For the red man, it is
            the application of knowledge. Knowledge applied with love.{"\n"}{" "}
            Knowledge is that which provides answers to the questions: who,
            what, where, and how; and wisdom answers why.{"\n"} It is not enough
            to seek knowledge in order to appear wise and feed vanity.{"\n"} It
            is not enough to seek knowledge merely to stimulate the mind.
            Knowledge only has value to the “Inner Self” when it is transformed
            into wisdom through love, with the sense of balancing polarity with
            the North.{"\n"} Finding that balance and harmony is part of life’s
            purpose. We balance and harmonize our own individual inner dynamics,
            in the way we express these energies in the choreography of the life
            we live.{"\n"} Power is expressed through the mind, and the human
            reaction is how we mentally approach the changes and beliefs that
            form our life philosophy.{"\n"} The mind is the great creative
            source. It is the power that brings life experiences that will be
            purified and renewed in the mind and in human matters.{"\n"} Since
            the cold forces us to stay more indoors, its influence brings
            attention to inner issues more than outward ones and makes use of
            time as effective preparation for a period of rapid growth and
            development that will come ahead.{"\n"} In some cultures, the cold
            Winds are personified by the "Ice Gods," who have the power to
            transform water into ice and imprint crystal patterns on stones with
            the temperature of their breath.{"\n"} It is also what makes us seek
            the warmth of our hearts and compassion.{"\n"}
            {"\n"}
            </Text>
            <View style={[styles.imageView, {height: 430}]}>
              <Image
                style={[styles.image]}
                source={require("@/assets/images/stagioni/winter2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
            {"\n"}
            WINTER STUDY - PART 2{"\n"}
            {"\n"}
            Here you can search for ideas that can transform your life.{"\n"} It
            is the place of purification, renewal, and preparation for new
            beginnings.{"\n"} The components of this direction, according to
            Kenneth Meadows (The Medicine Way), are:{"\n"} 1. Quality: Knowledge
            and Wisdom{"\n"}
            Knowledge is what we know. This is the process of knowing.{"\n"} To
            know is to have an understanding through personal experience of what
            is known. Knowledge is above belief. Belief is trusting the word or
            opinion of another. Opinion is not knowing. When what is believed is
            already known, it is no longer an opinion, but knowledge.{"\n"} For
            the ancestors, knowledge embraced philosophy, religion, and science.
            They were not separate disciplines and integrated them into one
            knowledge.{"\n"} However, acquiring knowledge alone was not
            considered enough. Knowledge had to be kept in wisdom.{"\n"}{" "}
            Knowledge answers questions like: what? How? When? Where? Who?{"\n"}{" "}
            Knowledge becomes wisdom when it answers the question: Why?{"\n"}{" "}
            Wisdom is also applied knowledge. True wisdom is knowledge applied
            with love. Wisdom manifests when knowledge that embraces philosophy,
            religion, and science is applied with love.{"\n"} That is the lesson
            that the quality of the South has to teach us.{"\n"}
            {"\n"} Totem: Buffalo{"\n"} The buffalo was the most important
            animal for the Native American because it provided everything needed
            to sustain life. Its meat was food, its skin and material provided
            clothing and shelter. The buffalo was thus an animal that gave of
            itself in totality, so that man could live.{"\n"} The buffalo
            symbolized the spirit that gives of its essence completely in the
            process of life. It was also a symbol of man’s dependence on nature
            to ensure his life.{"\n"}
            {"\n"} Element: Air{"\n"} The characteristic of the air element is
            movement, locomotion, change, often sudden, constant, and sometimes
            unexpected.{"\n"} It is softness, freshness, freedom, and
            exhalation. The air brings 'the breath of life' and is transforming
            it. It is the quality we perceive when we speak of something that
            embodies our lives ‘like a breath in fresh air’, transforming the
            entire atmosphere.{"\n"} The air has the characteristic of being a
            bearer. Our thoughts, dreams, and aspirations travel as if carried
            by the air. Thoughts seem to come from out of the air. Thus, air
            represents the characteristics of the mind, which has the ability to
            move freely and quickly.{"\n"} Learn to listen to the wind, it
            brushes the soul of all living things and continues its course as a
            particle of everything it touches. When you learn to travel with the
            wind, you will no longer be confined to the vehicle of the flesh,
            but free to sing and fly like a bird.{"\n"}
            Then feel that the birds, the animals, and the trees are all of us,
            breathing in the great wind and being breathed by it.{"\n"} You
            cannot see the wind, but it is there, and if you stop and quiet
            yourself for a moment, you will feel its presence and that of the
            Great Spirit.{"\n"} The wind bends powerful trees and sways them
            with a whisper, yet you cannot see it – only be aware of its
            presence and its power.{"\n"} It comes and goes, but is always
            there. In the same way, you cannot see the Great Spirit, except in
            the majesty of each dawn and in the rhythm and flow of nature around
            you. Just go out into the forest and look. If you listen, you will
            hear its voice in the wind and in the song of the flowers above your
            head, in recognition. If you listen, you will hear its poetry in the
            trees, on the hills, and in the valleys.{"\n"} You will hear if you
            listen and see if you look.{"\n"}
            {"\n"} Color: White{"\n"} White is the color of purity, balance, and
            life that renews itself. White is the sum of all the colors of the
            rainbow and thus represents perfection or completion. It symbolizes
            the highest aspirations. White indicates the purity of intention.
            {"\n"}
            {"\n"} Kingdom: Animal{"\n"} Civilized humanity, living in large
            cities, accustomed to remote controls and pressing buttons, has lost
            touch with nature and completely confuses its relationship with the
            Animal Kingdom.{"\n"} In one hand, love is expressed toward domestic
            animals, but often in an unbalanced way, wanting dogs, cats, birds,
            fish, and reptiles to live like humans, even getting pom-poms on
            their heads, receiving blessing treatments, etc.{"\n"} In the other
            hand, animals are treated as soulless objects and only have value to
            the extent that they can be useful in satisfying human demands.
            {"\n"} One of the causes of this neglect of the intrinsic value of
            animal life is the opinion that animals do not have souls and are
            merely here on earth to serve humans. In modern times, there was
            almost an identical opinion about women.{"\n"} Some theologians have
            discussed, in the past, whether women had souls. Thus, the Native
            American does not consider animals as inferior creatures, but as
            expressions of the Great Spirit, living in a different way.{"\n"}{" "}
            Just because an animal cannot speak a human language, we do not have
            the right to assume that there is no intelligence, emotion, or
            sensitivity.{"\n"}
            Celestial Body: The Stars{"\n"}
            Astronomers estimate that there are approximately 5,000 stars
            visible to the naked eye and more than 200,000 that can be seen
            through binoculars with a 50mm lens. {"\n"}It is estimated that the
            galaxy contains at least one hundred million stars. In Native
            thought, the stars are symbols of universality and divine
            protection. The stars were featured in prayers to the sun and to all
            the stars that are suns for other planets.{"\n"} Despite all the
            scientific advancements from century to century, humanity still has
            little knowledge of the realities of the cosmos. Is it possible that
            the ancestors had a greater knowledge of the cosmos than modern man,
            and that this knowledge was lost or destroyed? There are legends
            among the Cherokees that their ancestors endured the mists of time
            and were 'the children of the star peoples.'{"\n"} The Mayan Indians
            claimed to be 'the children of the Pleiades.' It is not without
            meaning that the symbol of the star is a symbol that inspires
            humanity toward perfection.{"\n"}
            {"\n"} Human Aspect: The Mind. {"\n"}The brain is the gray matter
            inside the skull. It is physical, material, confined within the
            thick protective shield of the skull.{"\n"} The brain keeps us
            alive. The mind is not physical and material. It is invisible and
            unconfined. It can go anywhere and directs our life. The brain has
            energy that can be measured with the electroencephalogram.{"\n"} The
            brain has about 18 billion neurons, or nerve centers that activate
            the force, the energy, every time we think, no matter how random a
            thought may be.{"\n"} The mind has an energy that cannot be
            measured, only partially experienced as consciousness.{"\n"} The
            energy of the mind goes where consciousness goes. This energy of the
            mind is the source of power that goes beyond the space that physical
            science can measure. {"\n"}The brain is the tool of the mind and its
            consciousness. We have established that you are not your body.{"\n"}{" "}
            Your body is just a necessary vehicle to explore and experience the
            physical, material dimension.{"\n"} You are your consciousness. This
            understanding allows you to feel the essence of existence in the
            words, as they are so close to us. From the moment you accept that
            you are your consciousness, you will realize that it cannot be
            destroyed, but can change by receiving another body.{"\n"}
            {"\n"} Time Period: The Future{"\n"} The mind is not material; it is
            part of the soul. Our destiny is created by us, our own decisions
            and individual and collective actions.{"\n"} Therefore, most of the
            future is in our hands.{"\n"}The future is not outside of our
            current reality, but is part of it, and it is also part of our past.
            The teaching here is that the future is contained within our
            present. Therefore, if you want a better future, look at your
            actions in the present.{"\n"} The seeds of your future are contained
            in your thoughts right now. Improve the quality of your thoughts
            now, and your future will be better than your present.{"\n"}
            {"\n"} Season: Winter{"\n"} The characteristic of winter is renewal.
            Winter is the time when the earth is still and seemingly asleep. But
            this stillness is only on the outside; during the period of apparent
            rest, the deepest energies of the earth are entering into
            preparation for the rapid growth that is soon to come. It is
            paradoxical. Rapid growth within rest, simply because life is hidden
            in death.{"\n"} The inner growth to support the outer growth.{"\n"}{" "}
            Another lesson here is that things are not always what they appear.
            {"\n"}
            {"\n"} Number: Four and Fourteen. {"\n"}Four is 2 x 2. It is duality
            and balance. It is the power of balance, alignment, and harmony.
            Four is a state of permanence. A sacred number among the Indians.
            There are four great powers, four elements, four senses, four winds,
            four seasons, four races (white, red, yellow, and black), four
            stages of human development (childhood, youth, adulthood, and
            maturity), four lessons to be learned (self-knowledge,
            self-understanding, self-control, and self-realization).{"\n"} Four
            in winter is considered the power of resistance and persistence.
            Fourteen gives access to the inner planes, to the spirit of animals,
            and to the masculine aspect of the earth.{"\n"}
            {"\n"}Enemy: Certainty {"\n"}Certainty can be defined as a state of
            mind that makes you think you already know everything you need to
            know about a subject, or when you respond as if you already know
            because you've read it somewhere, etc... you are in danger of being
            overcome by certainty. {"\n"} Certainty can try to obstruct the
            realization of a new truth. A true teacher gives knowledge with
            humility. Certainty is the enemy of mental clarity and purpose.
            {"\n"}
            {"\n"} Manifestation: Philosophy, Religion, and Science.{"\n"}{" "}
            Ancient peoples did not separate philosophy from religion and
            science. They were considered aspects of the same thing.{"\n"}
            </Text>
            <View style={[styles.imageView, {height: 370}]}>
              <Image
                style={[styles.image]}
                source={require("@/assets/images/stagioni/winter3.jpg")}
              />
            </View>
            <Text style={styles.testo}>
            {"\n"} WINTER STUDY - PART 3{"\n"}
            {"\n"} Light disappears into the darkness of the invisible and
            cannot be seen or felt. {"\n"}It is like the darkness of the New
            Moon night, when the two luminaries, the Sun and the Moon, are not
            very visible, but we know they are there, not as faith, but through
            true knowledge. {"\n"}This phase recognizes the importance of
            division and influences the value of obligation and responsibility.
            It celebrates the joy of belonging, the value of family bonds and
            close relationships, and goodwill toward all of humanity.{"\n"} It
            marks a time for making adjustments and purifying intention, in
            preparation for the arrival of spring and the transition to a new
            cycle of the Wheel of the Year.{"\n"} It brings the first light of
            enlightenment. Its emphasis is on purification, not so much
            moralistically, but through the concentration and focus of
            intentions. It is an excellent time for meditation and
            contemplation.{"\n"} It is a time when things seem dormant. In
            winter, seeds remain frozen and absorb the energy of the Earth,
            which allows them to grow in the seasons to come.{"\n"} To slow
            down, dream, enter quietness, and re-evaluate achievements. To
            prepare for the greatest gift of death and rebirth, and learn to
            have patience.{"\n"} It is the power of renewal, purification. While
            the Earth sleeps on the surface, it is passing its deepest energy to
            all its children. During this period of rest, it is preparing for a
            period of rapid growth to follow.{"\n"} It is time to conserve
            energy and resources and not waste active energy outward. It is a
            period to look inward in order to find a new source of light and
            regeneration. {"\n"}It marks the beginning of a new cycle, where the
            Earth regenerates. It is a time of year when our minds are more at
            home. We spend more time with family, in the house with friends,
            telling stories, where we practice the sense of sharing.{"\n"} The
            moment of rites of giving and receiving (Christmas, for example). We
            learn to see the Cosmic Web as its points are linked between death,
            renewal, and rebirth. We perceive winter as being left in obscurity.
            {"\n"} Few flowers, few birds and insects, few leaves (in some
            places, only snow). The earth is cold. But we know that light and
            warmth are ahead, because it always returns.{"\n"} In ancient times,
            men did not have this certainty. So they prayed, made offerings to
            the Creator for the Sun to return. In this form of energy, this
            reality created by our ancestors is where we connect in essence. The
            Winter Solstice represented the death of the old solar year and the
            birth of the new.{"\n"} Thus, we do the same with the Northern
            Hemisphere calendar in the height of summer. Therefore, our
            Christmas and ceremony of giving and receiving could be held in
            June, which would align with the Earth's Calendar. The ritual of
            setting up a Christmas tree is because this tree is the only one
            that keeps its branches green in the snow. The tree of Winter.{"\n"}{" "}
            Winter rituals should reflect personal purification and rebirth. The
            old debris is burned and used to fertilize the soil for the spring
            planting. The cold wind from the South, in winter, purifies and
            cleanses the Earth and forces people to stay inside to keep warm,
            renew, and refresh themselves. {"\n"}According to the medicine
            wheel, Wabbose, the Spirit Guardian of the North (from the South for
            the Southern Hemisphere) is represented by the Element Wind (Air).
            The season is winter.{"\n"} The time of day is midnight. The life
            time is both old age with snow on the head, and newborns returning
            to this world.{"\n"} It is a time when things seem dormant. However,
            with the apparent dormancy, one of the greatest growths is
            occurring. It is in winter when seeds remain frozen in the earth
            that they take in the energies of the earth that allow them to grow
            in the seasons to come.{"\n"} Here in the South, our bodies cannot
            move as easily as they did in the past or will in the future, which
            seems to force us to bring into ourselves the wisdom of the Spirit
            that we will use.{"\n"} Waboose's time is a time to slow down, with
            apparent restrictions. It is when outward activity effectively
            decreases. It is a time of darkness, quietness, and dreams. It is a
            time when humans are weakened, when their skin is wrinkled. It is a
            time when people tend to reminisce and share the wisdom they have
            acquired.{"\n"} It is a time to evaluate achievements and purposes
            and to prepare for the greatest gift of death and rebirth. It is a
            time when many people reach an understanding of their own lives, an
            acceptance of what they have achieved and what they have not.{"\n"}{" "}
            It can be a time of peace, a time of power, a time of forgiveness,
            and compassion for all around you.{"\n"} It is a time to free
            oneself from old patterns of behavior, to surrender to the small
            changes in the body and mind in preparation for the larger changes
            to come as we continue our journey around the Wheel.{"\n"} The same
            happens in human life. Even when we free ourselves from our human
            envelopes, our Spirit, our energy, goes to a place that prepares us
            for a new beginning to come. The greatest lesson of Waboose is the
            gift. It is our greatest responsibility to share with others the
            gift of our acquired knowledge on the journey of the Wheel, the gift
            of our bodies to Mother Earth, which nourished us while we were in
            it, and the love we share with all other beings, knowing that the
            more love we give, the more we receive. {"\n"}One of Waboose's gifts
            is the intuitive understanding of this gift.{"\n"} Along with this
            understanding are the most activated psychic faculties and great
            insight in tuning into dreams and visions, both our own and others'.
          </Text>
          </>
        )}
        {language === "ita" && (
          <>
          <Text style={styles.testo}>
            È il momento in cui le cose sembrano essere addormentate.{"\n"}{" "}
            Tuttavia, con la dormienza apparente, uno dei più grandi crescimenti
            sta avvenendo. È in inverno, quando i semi rimangono congelati
            dentro la terra, che assorbono le energie della terra che permettono
            loro di crescere nelle stagioni a venire.{"\n"} È nel Sud che i
            nostri corpi non riescono a muoversi così facilmente come facevano
            in passato o faranno in futuro, che sembriamo essere costretti a
            prendere dentro di noi la saggezza dello Spirito che useremo man
            mano che continuiamo il nostro viaggio intorno alla Ruota.{"\n"} Il
            potere dello Spirito dell'Inverno è il Rinnovamento, la Saggezza, la
            Conoscenza.{"\n"} Della bellezza e della risonanza armonica. Della
            fantasia illimitata e dell'intelletto. Dei saggi, degli anziani e
            degli antenati, delle preghiere e dei ringraziamenti. È il portale
            dell'onore. Il periodo in cui le cose sembrano essere addormentate.
            {"\n"}È un tempo di oscurità, quiete e sogni. È un momento per
            valutare i successi e gli scopi e per prepararsi al dono più grande
            della morte e della rinascita.{"\n"}È il momento in cui molte
            persone raggiungono una comprensione delle proprie vite, accettando
            ciò che hanno o non hanno raggiunto. Può essere un tempo di pace, un
            tempo di potere, un tempo di perdono, di compassione per tutto ciò
            che ti circonda.{"\n"} È il tempo di liberarsi dai vecchi schemi di
            comportamento, di arrendersi ai piccoli cambiamenti del corpo e
            della mente in preparazione per i cambiamenti più grandi che
            verranno.{"\n"}
            {"\n"} {"\n"} STUDIO DELL'INVERNO - PARTE 1{"\n"}
            {"\n"}La Direzione Sud (per l'Emisfero Sud, Nord per l'Emisfero
            Nord) è il portale della Saggezza, della Conoscenza e
            dell'Intelletto.{"\n"} Rappresenta il Corpo Mentale, ricordando che
            la mente qui non è il cervello. Il cervello è uno strumento della
            mente. Il cervello è fisico, materiale.{"\n"}La mente è invisibile;
            può andare ovunque. La conoscenza è quella che può essere
            trasformata in saggezza.{"\n"}Il Sud è associato all'inverno quando
            la Terra viene rinnovata, quando la Terra si sta purificando. È dove
            trasformiamo gli eventi delle nostre vite in esperienze di vita.
            {"\n"} L'inverno ci costringe a trascorrere più tempo dentro le
            nostre case, dentro le nostre menti, e a prepararci per un periodo
            di crescita e sviluppo.{"\n"} È il luogo della risonanza armonica.
            Nella Ruota Medicinale, lo Spirito Guardiano dell'Inverno è anche
            conosciuto come Waboose. Il totem animale è il Bisonte Bianco.{"\n"}{" "}
            Nel periodo dell'Inverno, il Bisonte Bianco rilascia una grande
            quantità di fumo bianco, simboleggiando il fumo della Pipa Sacra,
            uno strumento di preghiere e ringraziamenti.{"\n"} È attraverso il
            fumo della pipa che le nostre preghiere raggiungono Wakan Tanka.
            L'aria, o meglio, il Vento (aria in movimento), è l'elemento che
            governa questa direzione.{"\n"} Rappresenta anche il Regno Animale,
            e la parola animale comprende tutto ciò che è animato (4 zampe, 2
            zampe, creature alate, insetti, pesci…). Questa stagione ci offre
            un'opportunità per rivedere tutto ciò che abbiamo imparato nella
            nostra vita e imparare con chi e come condividere questa saggezza.
            {"\n"} Rappresenta i cercatori di conoscenza che ci offrono nuove
            visioni dell'umanità e anche i saggi e gli anziani che ci hanno
            ispirato nel corso del tempo. Onoriamo i nostri antenati.{"\n"}{" "}
            Incorporiamo le conoscenze della Fonte Superiore, per comprendere
            meglio la vita sulla Terra. È la Direzione in cui impariamo a
            rispettare il Sacro Punto di Vista degli Altri. Integrare le nostre
            esperienze nelle nostre parole, pensieri e azioni.{"\n"} Il Nord è
            il luogo della pace, del silenzio.{"\n"} È il luogo in cui impariamo
            ad ascoltare e a comprendere. È la Direzione dell'Onore.{"\n"} Il
            Corpo Celeste sono le stelle, che rappresentano anche i saggi di
            altri pianeti, di altri soli.{"\n"} Waboose è il luogo della
            Saggezza e della Conoscenza. Della bellezza e della risonanza
            armonica. Della fantasia illimitata e dell'intelletto. Dei saggi,
            degli anziani e degli antenati. È il luogo delle preghiere e dei
            ringraziamenti. È il luogo dell'onore.{"\n"} Puoi, per esempio,
            sederti a Sud se sei in un periodo di prove o esami negli studi. E
            per qualsiasi questione che riguardi il ragionamento, l'intelletto,
            la memoria... O quando senti che la tua vita ha bisogno di essere
            armonizzata, o semplicemente per ringraziare per una grazia
            ricevuta.{"\n"} Quando vuoi connetterti con i tuoi antenati
            sciamanici e con esseri extraterrestri.{"\n"}Sul tuo altare
            sciamanico, accendi un incenso rappresentante la direzione Nord.
            {"\n"}
            {"\n"}EVOCAZIONE:{"\n"} “Oh Spirito della Direzione Sud, luogo della
            Saggezza e del Ringraziamento, Portale della Conoscenza e
            dell'Elemento Aria – Insegnami.”{"\n"}
            {"\n"}Sun Bear poetizza descrivendo Wabbose, rappresentato
            dall'Elemento Vento (Aria).{"\n"} La stagione è l'inverno. L'ora del
            giorno è mezzanotte. Il tempo di vita è sia la vecchiaia con la neve
            sulla testa, sia i neonati che tornano in questo mondo.{"\n"}{" "}
            L'inverno è il periodo più paradossale della Ruota Medicinale. È in
            inverno, quando i semi rimangono congelati nella terra, che
            assorbono le energie della terra che permettono loro di crescere
            nelle stagioni a venire.{"\n"} È nel Sud che i nostri corpi non
            riescono a muoversi tanto facilmente come facevano in passato o
            faranno in futuro, e sembriamo forzati a prendere dentro di noi la
            saggezza dello Spirito che useremo mentre continuiamo il nostro
            viaggio attorno alla Ruota.{"\n"} Il tempo di Waboose è un tempo per
            rallentare, di apparenti restrizioni. È quando l'attività esterna
            diminuisce effettivamente.{"\n"}È un tempo di oscurità, tranquillità
            e sogni. È un tempo in cui gli esseri umani sono indeboliti, quando
            la loro pelle è rugosa. È un tempo in cui le persone tendono a
            rimembrare e condividere la saggezza che hanno acquisito.{"\n"} È un
            tempo per valutare realizzazioni e scopi e prepararsi per il più
            grande dono della morte e della rinascita. È un periodo in cui molte
            persone raggiungono una comprensione delle proprie vite,
            un'accettazione di ciò che hanno raggiunto e di ciò che non hanno.
            {"\n"} Può essere un tempo di pace, un tempo di potere, un tempo di
            perdono, di compassione per tutto ciò che ci circonda.{"\n"} È un
            tempo per liberarsi dai vecchi modelli di comportamento, per
            arrendersi ai piccoli cambiamenti del corpo e della mente in
            preparazione per i cambiamenti maggiori che verranno. L'inverno è un
            tempo per entrambi, inizio e fine, morte e vita, nuova vita
            incorporata in una morte apparente.{"\n"} In inverno la terra appare
            morta, eppure lì dentro succede molto. Lo stesso accade nella vita
            umana. Anche quando ci liberiamo dei nostri involucri umani, il
            nostro Spirito, la nostra energia va in un luogo che ci prepara per
            un nuovo inizio che verrà. La lezione più grande dell'inverno è il
            dono. È la nostra maggiore responsabilità condividere con gli altri
            il dono della nostra conoscenza acquisita nel viaggio della Ruota,
            il dono dei nostri corpi alla Madre Terra, che ci ha nutriti mentre
            eravamo in essa, e dell'amore che condividiamo con tutti gli altri
            esseri, sapendo che più amore diamo, più riceviamo.{"\n"} Uno dei
            doni dell'inverno è la comprensione intuitiva di questo dono.
            Insieme a questa comprensione arrivano le facoltà psichiche più
            attivate e una grande intuizione nel sintonizzarsi con sogni e
            visioni, sia nostre che degli altri.{"\n"}Il Bisonte Bianco è un
            animale che ha dato tutto di sé agli esseri umani: carne, pelle,
            ossa e spirito.{"\n"} Fu la Donna Bisonte Bianco che diede il
            pipistrello agli esseri umani. È un tempo per contemplare la vita e
            i suoi paradossi.{"\n"} È un buon momento per riflettere sulle
            questioni della vita e della morte e esaminare gli atteggiamenti al
            riguardo. È tempo di imparare ad avere pazienza.{"\n"} È un tempo in
            cui le tue abilità psichiche e mistiche saranno ben al di sopra
            della media.{"\n"} È un tempo per vedere come ti senti riguardo ai
            doni che la vita ti ha dato. È un tempo per praticare piccole
            donazioni che ti preparano per quelle più grandi.{"\n"} Durante i
            periodi di Waboose, dovrai centrare te stesso, ricordando che sei
            sia un essere della Terra che del Cielo.{"\n"} Il potere di Waboose
            è l'accettazione della morte e la necessità di condividere tutto ciò
            che è stato dato. Secondo Kenneth Meadows, è associato alla mente e
            al potere che a volte è descritto come: "Il potere di sostenere ciò
            che la conoscenza può portare".{"\n"} La mente non è il cervello. Il
            cervello è semplicemente uno strumento della mente. Il cervello è
            fisico, materiale, un bio-computer racchiuso nella protezione della
            conchiglia del cranio.{"\n"} La mente, invece, non è fisica, non è
            materiale, ma invisibile e libera. Il cervello ci mantiene vivi, ma
            la mente dirige la nostra vita. Il cervello emette un'energia che
            può essere misurata.{"\n"} La mente ha un'energia che non può essere
            misurata, solo sperimentata come consapevolezza.{"\n"} L'energia
            della mente va dove va la consapevolezza. Il Sud è la direzione
            della mente, della conoscenza e della saggezza. Meadows spiega che
            la conoscenza non è un tipo di informazione inutile, come quella che
            acquisciamo dalla televisione, ma la conoscenza che può essere
            trasformata in saggezza nel gioco della vita.{"\n"} E cos'è la
            saggezza? Per l'uomo rosso è l'applicazione della conoscenza.
            Conoscenza applicata con amore.{"\n"} La conoscenza è quella che
            fornisce risposte alle domande: chi, cosa, dove e come; e la
            saggezza risponde al perché.{"\n"} Non basta cercare la conoscenza
            per sembrare saggi e nutrire la vanità.{"\n"} Non basta cercare
            conoscenza solo per stimolare la mente. La conoscenza ha valore solo
            per l'“Io Interiore” quando viene trasformata in saggezza con amore,
            con il senso di bilanciare la polarità con il Nord.{"\n"} Trovare
            quell'equilibrio e quella armonia è parte dello scopo della vita.
            Noi bilanciamo e armonizziamo la nostra dinamica individuale
            interiore, nel modo in cui esprimiamo queste energie nella
            coreografia della vita che viviamo.{"\n"} Il Potere si esprime
            attraverso la mente e la reazione umana è il modo in cui affrontiamo
            mentalmente i cambiamenti e le credenze che formano la filosofia
            della vita.{"\n"} La mente è la grande fonte creativa. È il potere
            che porta le esperienze di vita che saranno purificate e rinnovate
            nella mente e nelle questioni umane.{"\n"} Poiché il freddo ci
            costringe a rimanere più in casa, la sua influenza porta attenzione
            a questioni interne più che esterne e ci fa usare il tempo come
            preparazione efficace per un periodo di rapido crescita e sviluppo
            che verrà.{"\n"} In alcune culture, i Venti freddi sono
            personificati dagli "Dei del Ghiaccio", che hanno il potere di
            trasformare l'acqua in ghiaccio e imprimere nei cristalli delle
            pietre con la temperatura del loro respiro.{"\n"} È anche ciò che ci
            fa cercare il calore dei nostri cuori e la compassione.{"\n"}
            {"\n"}
            </Text>
            <View style={[styles.imageView, {height: 430}]}>
              <Image
                style={[styles.image]}
                source={require("@/assets/images/stagioni/winter2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
            {"\n"}
            STUDIO DELL'INVERNO - PARTE 2{"\n"}
            {"\n"}
            Qui puoi cercare idee che possono trasformare la tua vita.{"\n"} È
            il luogo della purificazione, del rinnovamento e della preparazione
            per nuovi inizi.{"\n"} I componenti di questa direzione, secondo
            Kenneth Meadows (The Medicine Way), sono:{"\n"} 1. Qualità:
            Conoscenza e Saggezza{"\n"}
            La conoscenza è ciò che conosciamo. Questo è il processo di
            conoscere.{"\n"} Conoscere significa avere una comprensione
            attraverso l'esperienza personale di ciò che è conosciuto. La
            conoscenza è al di sopra della credenza. La credenza è fidarsi della
            parola o dell'opinione di un altro. L'opinione non è sapere. Quando
            ciò che si crede è già noto, non è più un'opinione, ma conoscenza.
            {"\n"} Per gli antenati, la conoscenza abbracciava filosofia,
            religione e scienza. Non erano discipline separate e le integravano
            in un'unica conoscenza.{"\n"} Tuttavia, acquisire conoscenza da solo
            non era considerato sufficiente. La conoscenza doveva essere
            mantenuta nella saggezza.{"\n"} La conoscenza risponde a domande
            come: cosa? Come? Quando? Dove? Chi?{"\n"} La conoscenza diventa
            saggezza quando risponde alla domanda: Perché?{"\n"} La saggezza è
            anche conoscenza applicata. La vera saggezza è conoscenza applicata
            con amore. La saggezza si manifesta quando la conoscenza che
            abbraccia filosofia, religione e scienza viene applicata con amore.
            {"\n"} Questa è la lezione che la qualità del Sud ha da insegnarci.
            {"\n"}
            {"\n"} Totem: Bisonte{"\n"} Il bisonte era l'animale più importante
            per il nativo americano perché forniva tutto ciò che era necessario
            per sostenere la vita. La sua carne era cibo, la sua pelle e il
            materiale fornivano abiti e rifugio. Il bisonte era quindi un
            animale che dava totalmente di sé, affinché l'uomo potesse vivere.
            {"\n"} Il bisonte simboleggiava lo spirito che dà completamente
            della sua essenza nel processo della vita. Era anche un simbolo
            della dipendenza dell'uomo dalla natura per garantire la sua vita.
            {"\n"}
            {"\n"} Elemento: Aria{"\n"} La caratteristica dell'elemento aria è
            il movimento, la locomozione, il cambiamento, spesso improvvisi,
            costanti e a volte inaspettati.{"\n"} È morbidezza, freschezza,
            libertà e esalazione. L'aria porta 'il respiro della vita' e lo sta
            trasformando. È la qualità che percepiamo quando parliamo di
            qualcosa che incarna le nostre vite ‘come un respiro nell'aria
            fresca’, trasformando l'intera atmosfera.{"\n"} L'aria ha la
            caratteristica di essere un portatore. I nostri pensieri, sogni e
            aspirazioni viaggiano come se fossero trasportati dall'aria. I
            pensieri sembrano venire da fuori, dall'aria. Così, l'aria
            rappresenta le caratteristiche della mente che ha la capacità di
            muoversi liberamente e rapidamente.{"\n"} Impara ad ascoltare il
            vento, egli spazza l'anima di tutte le cose viventi e continua il
            suo corso come una particella di tutto ciò che tocca. Quando
            imparerai a viaggiare con il vento, non sarai più prigioniero del
            veicolo della carne, ma sarai libero di cantare e volare come un
            uccello.{"\n"}
            Allora senti che, gli uccelli, gli animali e gli alberi siamo tutti
            noi, respirando nel grande vento e respirati da lui.{"\n"} Non puoi
            vedere il vento, ma lui è lì, e se ti fermi e ti quieti per un
            momento sentirai la sua presenza e quella del Grande Spirito.{"\n"}{" "}
            Il vento piega potenti alberi e li fa oscillare con un sussurro,
            tuttavia non lo puoi vedere – solo essere consapevole della sua
            presenza e del suo potere.{"\n"} Viene e va, ma è sempre lì. Allo
            stesso modo, non puoi vedere il Grande Spirito, se non nella
            maestosità di ogni alba e nel ritmo e nel flusso della natura
            intorno a te. Basta che esci nel bosco e guardi. Se ascolti,
            sentirai la sua voce nel vento e nel canto dei fiori sopra la tua
            testa, nel riconoscimento. Se ascolti, sentirai la sua poesia negli
            alberi, nelle colline e nelle valli.{"\n"} Sentirai se ascolti e
            vedrai se guardi.{"\n"}
            {"\n"} Colore: Bianco{"\n"} Il bianco è il colore della purezza,
            dell'equilibrio e della vita che si rinnova. Il bianco è la somma di
            tutti i colori dell'arcobaleno e rappresenta così la perfezione o il
            completamento. Simboleggia le aspirazioni più elevate. Il bianco
            indica la purezza dell'intenzione.{"\n"}
            {"\n"} Regno: Animale{"\n"} L'umanità civilizzata, che vive in
            grandi città, abituata a controlli remoti e a premere bottoni, ha
            perso il contatto con la natura e confonde completamente il suo
            rapporto con il Regno Animale.{"\n"} In una mano, l'amore si esprime
            verso gli animali domestici, ma spesso in modo sbilanciato, volendo
            che cani, gatti, uccelli, pesci e rettili vivano come esseri umani,
            mettendo loro anche pompon sulla testa, facendo trattamenti di
            benedizione, ecc.{"\n"} Nell'altra mano, gli animali sono trattati
            come oggetti senza anima e hanno valore solo nella misura in cui
            possono essere utili per soddisfare le esigenze umane.{"\n"} Una
            delle cause di questa negligenza del valore intrinseco della vita
            animale è l'opinione che gli animali non abbiano anima e siano
            semplicemente qui sulla terra per servire gli esseri umani. Nei
            tempi moderni, ci fu quasi un'opinione identica sulle donne.{"\n"}{" "}
            Alcuni teologi hanno discusso, nel passato, se le donne avessero
            un'anima. Così, il nativo americano non considera gli animali come
            creature inferiori, ma come espressioni del Grande Spirito, che vive
            in un modo diverso.{"\n"} Solo perché un animale non può parlare una
            lingua umana, non abbiamo il diritto di supporre che non ci sia
            intelligenza, emozione o sensibilità.{"\n"}
            Corpo Celeste: Le Stelle{"\n"}
            Gli astronomi stimano che ci siano circa 5.000 stelle visibili ad
            occhio nudo e più di 200.000 che possono essere viste attraverso dei
            binocoli con una lente da 50mm. {"\n"}Si stima che la galassia
            contenga almeno cento milioni di stelle. Nel pensiero nativo, le
            stelle sono simbolo di universalità e protezione divina. Le stelle
            apparivano nelle preghiere al sole e per tutte le stelle che sono
            soli per altri pianeti.{"\n"} Nonostante tutti i progressi
            scientifici di secolo in secolo, l'umanità ha ancora poca conoscenza
            delle realtà del cosmo. È possibile che gli antenati avessero una
            conoscenza maggiore del cosmo rispetto all'uomo moderno, e che
            questa conoscenza sia stata persa o distrutta? Ci sono leggende tra
            i Cherokee che i loro antenati sopportavano le nebbie del tempo e
            erano 'i bambini dei popoli delle stelle.'{"\n"} Gli indiani Maya
            affermavano di essere 'i bambini delle Pleiadi.' Non è senza
            significato che il simbolo della stella sia un simbolo che ispira
            l'umanità verso la perfezione.{"\n"}
            {"\n"} Aspetto Umano: La Mente. {"\n"}Il cervello è la materia
            grigia all'interno del cranio. È fisico, materiale, confinato
            all'interno dello spesso scudo protettivo del cranio.{"\n"} Il
            cervello ci mantiene in vita. La mente non è fisica e materiale. È
            invisibile e inconfinabile. Può andare ovunque e dirige la nostra
            vita. Il cervello ha un'energia che può essere misurata con
            l'elettroencefalogramma.{"\n"} Il cervello ha circa 18 miliardi di
            neuroni, o centri nervosi che attivano la forza, l'energia, ogni
            volta che pensiamo, per quanto casuale possa essere un pensiero.
            {"\n"} La mente ha un'energia che non può essere misurata, solo
            parzialmente sperimentata come consapevolezza.{"\n"} L'energia della
            mente va dove va la consapevolezza. Questa energia della mente è la
            fonte del potere che va oltre lo spazio che la scienza fisica può
            misurare. {"\n"}Il cervello è lo strumento della mente e della sua
            consapevolezza. Abbiamo stabilito che non sei il tuo corpo.{"\n"} Il
            tuo corpo è solo un veicolo necessario per esplorare e sperimentare
            la dimensione fisica, materiale.{"\n"} Tu sei la tua consapevolezza.
            Questa comprensione ti permette di sentire l'essenza dell'esistenza
            nelle parole, poiché sono così vicine a noi. Dal momento in cui
            accetti che sei la tua consapevolezza, realizzerai che non può
            essere distrutta, ma può cambiare ricevendo un altro corpo.{"\n"}
            {"\n"} Periodo Di Tempo: Il Futuro{"\n"} La mente non è materiale; è
            parte dell'anima. Il nostro destino è creato da noi, dalle nostre
            decisioni e azioni individuali e collettive.{"\n"} Pertanto, gran
            parte del futuro è nelle nostre mani.{"\n"}Il futuro non è fuori
            dalla nostra realtà attuale, ma ne è parte, ed è anche parte del
            nostro passato. L'insegnamento qui è che il futuro è contenuto nel
            nostro presente. Pertanto, se desideri un futuro migliore, guarda le
            tue azioni nel presente.{"\n"} I semi del tuo futuro sono contenuti
            nei tuoi pensieri di ora. Migliora la qualità dei tuoi pensieri ora
            e il tuo futuro sarà migliore del tuo presente.{"\n"}
            {"\n"} Stagione: Inverno{"\n"} La caratteristica dell'inverno è il
            rinnovamento. L'inverno è il momento in cui la terra è ferma e
            apparentemente addormentata. Ma questa quiete è solo all'esterno;
            durante il periodo di riposo apparente, le energie più profonde
            della terra si stanno preparando per la rapida crescita che presto
            arriverà. È paradossale. Una rapida crescita all'interno del riposo,
            semplicemente perché la vita è nascosta nella morte.{"\n"} La
            crescita interiore per supportare la crescita esteriore.{"\n"}{" "}
            Un'altra lezione qui è che le cose non sono sempre come appaiono.
            {"\n"}
            {"\n"} Numero: Quattro e Quattordici. {"\n"}Quattro è 2 x 2. È
            dualità e equilibrio. È il potere dell'equilibrio, dell'allineamento
            e dell'armonia. Quattro è uno stato di permanenza. Un numero sacro
            tra gli indiani. Ci sono quattro grandi poteri, quattro elementi,
            quattro sensi, quattro venti, quattro stagioni, quattro razze
            (bianco, rosso, giallo e nero), quattro età dello sviluppo umano
            (infanzia, giovinezza, età adulta e maturità), quattro lezioni da
            imparare (auto-conoscenza, auto-comprensione, auto-controllo e
            auto-realizzazione).{"\n"} Quattro in inverno è considerato come il
            potere della resistenza e della persistenza. Quattordici dà accesso
            ai piani interni, allo spirito degli animali e all'aspetto maschile
            della terra.{"\n"}
            {"\n"}Nemico: Certezza {"\n"}La certezza può essere definita come
            uno stato mentale che ti fa pensare di sapere già tutto ciò che devi
            sapere su un argomento, o quando rispondi come se sapessi già perché
            l'hai letto da qualche parte, ecc... sei in pericolo di essere
            sopraffatto dalla certezza. {"\n"} La certezza può cercare di
            ostacolare la realizzazione di una nuova verità. Un vero insegnante
            dà la conoscenza con umiltà. La certezza è il nemico della chiarezza
            mentale e dello scopo.{"\n"}
            {"\n"} Manifestazione: Filosofia, Religione e Scienza.{"\n"} I
            popoli antichi non separavano la filosofia dalla religione e dalla
            scienza. Erano considerati aspetti della stessa cosa.{"\n"}
            </Text>
            <View style={[styles.imageView, {height: 370}]}>
              <Image
                style={[styles.image]}
                source={require("@/assets/images/stagioni/winter3.jpg")}
              />
            </View>
            <Text style={styles.testo}>
            {"\n"} STUDIO DELL'INVERNO - PARTE 3{"\n"}
            {"\n"} La luce scompare nell'oscurità dell'invisibile e non può
            essere vista né sentita. {"\n"}È come l'oscurità della notte di Luna
            Nuova, quando i due corpi celesti, il Sole e la Luna, non sono molto
            visibili, ma sappiamo che sono lì, non come fede, ma attraverso la
            vera conoscenza. {"\n"}Questa fase riconosce l'importanza della
            divisione e influisce sul valore dell'obbligo e della
            responsabilità. Celebra la gioia di appartenere, il valore dei
            legami familiari e delle relazioni strette, e la buona volontà verso
            tutta l'umanità.{"\n"} Segna un momento per fare aggiustamenti e
            purificare le intenzioni, in preparazione all'arrivo della primavera
            e alla transizione verso un nuovo ciclo della Ruota dell'Anno.{"\n"}{" "}
            Porta la prima luce dell'illuminazione. La sua enfasi è sulla
            purificazione, non tanto in senso moralista, ma attraverso la
            concentrazione e focalizzazione delle intenzioni. È un momento
            eccellente per meditazione e contemplazione.{"\n"} È il tempo in cui
            le cose sembrano addormentate. In inverno, i semi rimangono
            congelati e assorbono l'energia della Terra, che permette loro di
            crescere nelle stagioni future.{"\n"} Per rallentare, sognare,
            entrare nella quiete e rivalutare i risultati. Per prepararsi al
            dono più grande della morte e della rinascita, e imparare ad avere
            pazienza.{"\n"} È il potere del rinnovamento, della purificazione.
            Mentre la Terra dorme sulla superficie, sta passando la sua energia
            più profonda a tutti i suoi figli. Durante questo periodo di riposo,
            si sta preparando per un periodo di rapida crescita a venire.{"\n"}{" "}
            È tempo di conservare energia e risorse e non sprecare energia
            attiva verso l'esterno. È un periodo per guardare più dentro di noi
            per trovare una nuova fonte di luce e rigenerazione. {"\n"}Segna
            l'inizio di un nuovo ciclo, in cui la Terra si rigenera. È un
            momento dell'anno in cui le nostre menti sono più a casa.
            Trascorriamo più tempo con la famiglia, a casa con gli amici,
            raccontando storie, dove pratichiamo il senso della condivisione.
            {"\n"} Il momento dei riti di dare e ricevere (il Natale, per
            esempio). Impariamo a vedere la Rete Cosmica come i suoi punti
            legati tra morte, rinnovamento e rinascita. Percepiamo l'inverno
            come se fossimo lasciati nell'oscurità.{"\n"} Poche fiori, pochi
            uccelli e insetti, poche foglie (in alcuni luoghi solo neve). La
            terra è fredda. Ma sappiamo che la luce e il calore sono avanti,
            perché tornano sempre.{"\n"} Gli uomini nei tempi antichi non
            avevano questa certezza. Così pregavano, facevano offerte al
            Creatore affinché il Sole tornasse. In questa forma di energia,
            questa realtà creata dai nostri antenati è dove ci connettiamo in
            essenza. Il Solstizio d'Inverno rappresentava la morte dell'antico
            anno solare e la nascita del nuovo.{"\n"} Così facciamo anche con il
            calendario dell'emisfero nord nel pieno dell'estate. Pertanto, il
            nostro Natale e la cerimonia di dare e ricevere potrebbero essere
            fatti nel mese di giugno, che sarebbe in accordo con il Calendario
            della Terra. Il rito di montare un albero di Natale è che questo
            albero è l'unico che mantiene i suoi rami verdi nella neve. L'albero
            dell'Inverno.{"\n"} I rituali invernali dovrebbero riflettere la
            purificazione personale e la rinascita. I vecchi detriti vengono
            bruciati e usati per fertilizzare il terreno per la semina
            primaverile. Il freddo vento del Sud, in inverno, purifica e pulisce
            la Terra e costringe le persone a stare più dentro, per mantenere il
            calore, rinnovarsi e rinfrescarsi. {"\n"}Secondo la ruota
            medicinale, Wabbose, lo Spirito Guardiano del Nord (dal Sud per
            l'emisfero Sud) è rappresentato dall'Elemento Vento (Aria). La
            stagione è l'inverno.{"\n"} L'ora del giorno è mezzanotte. Il tempo
            di vita è sia la vecchiaia con la neve sulla testa, che i neonati
            che stanno tornando in questo mondo.{"\n"} È il tempo in cui le cose
            sembrano addormentate. Tuttavia, con l'apparente dormienza, uno dei
            più grandi crescimenti sta accadendo. È in inverno, quando i semi
            rimangono congelati dentro la terra, che assorbono le energie della
            terra che permettono loro di crescere nelle stagioni a venire.{"\n"}{" "}
            Qui nel Sud, i nostri corpi non riescono a muoversi così facilmente
            come facevano nel passato o faranno nel futuro, tanto che sembriamo
            costretti a portare dentro di noi la saggezza dello Spirito che
            useremo.{"\n"} Il tempo di Waboose è un tempo per rallentare, con
            apparenti restrizioni. È quando l'attività esterna diminuisce
            effettivamente. È un tempo di oscurità, quiete e sogni. È un tempo
            in cui gli esseri umani sono indeboliti, quando la loro pelle è
            rugosa. È un tempo in cui le persone tendono a reminiscenze e
            condividono la saggezza che hanno acquisito.{"\n"} È un tempo per
            valutare i risultati e gli scopi e prepararsi per il più grande dono
            della morte e della rinascita. È un tempo in cui molte persone
            raggiungono una comprensione delle proprie vite, un'accettazione di
            ciò che hanno realizzato e di ciò che non hanno.{"\n"} Può essere un
            tempo di pace, un tempo di potere, un tempo di perdono, di
            compassione per tutto ciò che ci circonda.{"\n"} È il momento di
            liberarsi dai vecchi schemi di comportamento, per arrendersi ai
            piccoli cambiamenti del corpo e della mente in preparazione, per i
            cambiamenti maggiori che verranno mentre continuiamo il nostro
            viaggio intorno alla Ruota.{"\n"} Lo stesso accade nella vita umana.
            Anche quando ci liberiamo dai nostri involucri umani, il nostro
            Spirito, la nostra energia, va in un posto che ci prepara per un
            nuovo inizio che arriverà. La più grande lezione di Waboose è il
            dono. È la nostra più grande responsabilità condividere con gli
            altri il dono della nostra conoscenza acquisita nel viaggio della
            Ruota, il dono dei nostri corpi alla Madre Terra, che ci ha nutriti
            mentre eravamo in essa, e dell'amore che condividiamo con tutti gli
            altri esseri, sapendo che più amore diamo, più riceviamo. {"\n"}Uno
            dei doni di Waboose è la comprensione intuitiva di questo dono.
            {"\n"} Insieme a questa comprensione ci sono le facoltà psichiche
            più attivate e una grande perspicacia nel sintonizzarsi su sogni e
            visioni, sia nostri che di altre persone.
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
