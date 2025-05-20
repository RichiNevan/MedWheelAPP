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


const Sud = () => {
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
        {language === "prt" && <Text style={styles.title}>CRESCIMENTO</Text>}
        {language === "eng" && <Text style={styles.title}>GROWTH</Text>}
        {language === "ita" && <Text style={styles.title}>CRESCITA</Text>}

        {/* <View style={styles.imageView}></View> */}

        {language === "prt" && (
          <Text style={styles.testo}>
            O poder do Espírito do Verão é o Crescimento, Inocência, Fé e
            Confiança.{"\n"} Onde podemos recapturar a maravilha de estarmos
            vivos e podermos ser como crianças. É o Portal das Emoções e do
            Elemento Água.{"\n"} No pensamento nativo, assim como não podemos
            bloquear as águas de um rio, também não bloqueamos as nossas
            emoções. Ou seja, deixar fluir. {"\n"}Representa também o Reino
            Vegetal. A Direção Norte (para o Hemisfério Sul, direçao Sul para o
            Hemisferio Norte) tem as dádivas da energia, adaptabilidade,
            maturidade, diversão e humor.{"\n"} A hora é de estudar
            relacionamentos, quando tudo em nosso mundo torna-se verdadeiramente
            possível, quando buscar por amor é definitivamente uma de nossas
            forças guias e onde somos capazes de dar e receber amor em muitos
            sentidos.{"\n"}O poder da Direção Verão é misterioso, um poder de
            mudança, do crescimento. É para explorar o amor, os
            relacionamentos,o mundo a sua volta, explorar quem você é.{"\n"} A
            Direção Norte (Hem. Sul) é o local do coração, das emoções.{"\n"} É
            lá que chegamos, quando necessitamos curar nosso coração, quando
            necessitamos aprender como amar, quando precisamos aprender a deixar
            de lado tudo o que não é amor ( ódio, medo, inveja, ciúme, raiva…)
            Ensina também sobre sexualidade e sensualidade.{"\n"}Todos os
            desejos podem ser realizados pois a força vital está no auge. {"\n"}
            A oportunidade para, no ano que se inicia, rever os ensinamentos do
            ano que passou. Para estabelecer um compromisso, consigo mesmo, para
            seu crescimento, em mais um ciclo de sua missão terrestre.{"\n"} A
            Direção Norte da Roda Medicinal no Hemisfério Sul (No H. Norte é
            Sul)é o lugar para retornar à inocência e adquirir fé, confiança.
            {"\n"} O lugar onde nossa fé é testada e provada, e o lugar onde
            podemos recapturar a maravilha de estarmos vivos, e que podemos ser
            como crianças.{"\n"} É o Portal das Emoções e do Elemento Água. Os
            Ventos do Norte no verão nos convidam a passar mais tempo fora, para
            gozar o sol quente do verão, quando tudo no mundo natural floresce e
            exala fragrância.. Então, o norte é relacionado ao rápido
            crescimento, florescimento e desenvolvimento.{"\n"} Grande parte da
            busca está na compreensão de: Quem eu sou ? Qual é a minha missão ?
            Como minha missão pode ajudar o mundo a ser melhor? O que me torna
            feliz? O que preciso aprender para me tornar o que eu “quero ”? Como
            obtenho os recursos materiais necessários para colocar a minha vida
            em ordem, fazendo o que gosto de fazer, no pleno exercício dos meus
            talentos, das minhas habilidades? Como me expressar com excelência?
            {"\n"} O Norte é o Caminho da Confiança e da Inocência e é por vezes
            referido como o Caminho da Criança, portanto, para caminharmos,
            precisamos despertar a ‘criança’ dentro de nós – aquela parte de nós
            que pode estabelecer relacionamentos através do exercício da fé.
            {"\n"} Confiança e inocência que tivemos quando criança, quando
            olhamos para a vida com admiração e para o futuro com antecipação
            excitada.{"\n"} O Norte é a direção para ajudar a ver as coisas com
            detalhes claros e começar a perceber sua própria natureza.{"\n"}A
            antiga admoestação “Homem, Conhece a ti mesmo” foi muito além de
            defender um curso de análise psicológica. {"\n"}Significava conhecer
            o Ser pelo que realmente é – pois o Ser é a coisa mais sagrada e
            preciosa que qualquer um de nós tem.{"\n"}
            Isso foi totalmente compreendido pelos Mestres da Sabedoria, cuja
            admoestação de que amar os outros a quem você deve primeiro aprender
            a amar o seu Eu, implicou a descoberta do aspecto mais elevado de
            seu próprio ser.{"\n"}A Jornada do Norte é onde o processo de
            encontrar o seu verdadeiro eu começa.{"\n"} No Sul, você vai se
            livrar dos obstáculos que obscurecem o seu Eu Verdadeiro e impede
            que você veja seu próprio Ser em sua verdadeira luz. {"\n"} Os doze
            componentes do Sul que vamos considerar são:{"\n"}
            {"\n"}
            {"\n"} Qualidade: Confiança e Inocência{"\n"}
            {"\n"} O ameríndio às vezes se referia ao sul como “o caminho da
            criança porque estava associado à criança que crescia no corpo e
            mente em direção à maturidade, mas ainda mantinha uma atitude de
            confiança e inocência, imaculada pelo cinismo, arrogância e
            insensibilidade do mundo do adulto.{"\n"} Você pode se alinhar com a
            qualidade especial do Sul, recusando-se a se deixar contaminar pelo
            cinismo ou arrogância que se origina da crença de que você já
            “conhece”, e recusando-se a ser manchado de culpa e constrangimento.
            {"\n"} O Espírito do Norte ajuda você a adquirir coisas de valor
            espiritual e duradouro e, como uma criança, a crescer rapidamente em
            direção à maturidade.{"\n"} Mas essa maturidade espiritual só pode
            vir através da adoção de uma atitude de confiança e inocência.
            Então, seguirá uma compreensão da verdadeira identidade de alguém e
            uma aceitação, como um ‘adulto’ espiritual, de controle sobre o
            próprio destino.{"\n"} A qualidade da confiança e da inocência
            requeridas não é a confiança e inocência perdidas da ingenuidade e
            da imaturidade, mas o tipo que torna o aprendizado uma aventura,
            encontra excitação na descoberta e alegria na consciência que o novo
            conhecimento traz.{"\n"} Significa não permitir que os medos
            ilusórios, os valores falsos, os padrões duplos e os complexos de
            culpa da vida adulta estraguem e danifiquem seu progresso. Significa
            confiar em seus próprios instintos e não se deixar influenciar pelo
            que os outros possam pensar ou dizer.{"\n"}
            Observe o modo como a criança jovem e inocente desfruta da pura
            experiência de viver, e com que rapidez aprende a partir de cada
            nova aventura, e você começará a apreciar o significado da qualidade
            do Norte.{"\n"} Você precisa recuperar algumas das maravilhas e
            excitações que teve quando criança e aplicá-lo ao processo de viver.
            {"\n"} Então você terá adquirido um gosto pela vida que vem de estar
            ciente de que a vida se destina a ser uma experiência maravilhosa a
            ser saboreada e desfrutada, não apenas tolerada ou sofrida. {"\n"}
            Tire um tempo agora para absorver-se na qualidade do Norte.{"\n"}
            {"\n"}
            {"\n"} Animal do Norte: Coiote {"\n"}
            {"\n"}Por Sun Bear: O animal associado a Shawnodese é o coiote.{" "}
            {"\n"}Para os nativos, o coiote não é o trapaceiro e sim o
            malicioso, aquele que pode forçar as pessoas a aprenderem mesmo
            quando não querem. Por seus truques, o coiote força suas relações a
            crescer.{"\n"} Sendo enganadas e aprendendo lições necessárias, as
            crianças da Terra aprendem a confiar na vida e nas lições que ela
            traz.{"\n"} Sendo tão teimoso quanto a maioria das crianças da
            terra, os truques são frequentemente necessários para o crescimento.
            As pessoas se sentem confortáveis como estão e não querem sentir a
            dor que o crescimento rápido às vezes traz.{"\n"} Existe todo um
            bloco da mitologia nativa que lida com o Coiote, o velho trapaceiro
            que, às vezes, é Criador e outras vezes, o “Palhaço Sagrado”.{"\n"}{" "}
            O Coiote é um dos mais sagrados e mais profanos dos animais.{"\n"}{" "}
            Tal como o pato Loon (totem da Vovó Lua) e o Sapo (Clã dos Sapos),
            ele é um cantor poderoso, cuja canção pode levar os humanos à
            liberdade ou ao medo.{"\n"}
            Coiote traz crescimento a qualquer um, mas para aqueles que amam a
            vida, ele dá o presente da “confiança “. {"\n"}É a confiança na vida
            que nos ensina a verdadeira sobrevivência e tolerância.{"\n"} O
            coiote pode ser encontrado em muitas áreas rurais da América do
            Norte.{"\n"} Menor do que um lobo, o coiote se provou adaptável à
            invasão da civilização. Os mais distintos atributos do coiote são
            sua ligeireza, sentidos aguçados, traços de cachorro e sua canção.
            {"\n"} Em muitas noites no campo, os ganidos e uivos do coiote varam
            a noite calma, lembrando a todos os Duas Pernas que podem ouvi-los,
            que embora agora, predominem na terra, não são a única espécie
            existente.{"\n"} Aprendemos muito sobre as pessoas de acordo com a
            forma como elas reagem ao Coiote.{"\n"} Aqueles que amam a vida e a
            terra, são inspirados pela canção do Coiote e sua habilidades em
            driblar a civilização, que tem tentado destruí-lo.{"\n"} Aqueles que
            temem tudo o que é natural, também temem o coiote e tentam
            destruí-lo atirando nele, pondo veneno ou armadilhas.{"\n"} Os
            medrosos descrevem o coiote como um ladrão, aquele que come as
            criações domésticas, como a galinha.{"\n"} O coiote prefere alimento
            natural, animal roedores como ratos ou coelhos, mas ele se
            alimentará, ocasionalmente, de uma galinha ou outro pequeno animal
            doméstico em áreas onde a civilização exterminou todas as suas
            presas naturais.{"\n"} Quando ele trabalha com Shawnodese, a pele do
            Coiote tem a cor mosqueada do Sol do meio dia brilhando na Terra.
            {"\n"}
            Algumas vezes, quando a serviço de Shawnodese, a pele do Coiote é
            tão mosqueada que parece desaparecer.{"\n"} É aí que ele faz o seu
            mais poderoso trabalho. Nesses momentos, o poder de Shawnodese e do
            coiote é necessário para ajudar as pessoas a crescer e continuar
            aprendendo as lições que foram colocadas na Terra para aprender.
            {"\n"} O coiote de Shawnodese tem um casaco amarelo, a cor do sol do
            meio-dia, manchado com o marrom da terra de verão. As cores dos
            Shawnodese são o verde das plantas que crescem rapidamente e o
            amarelo do sol de verão lhes dá o calor e a luz para que possam
            crescer.{"\n"} O verde é a cor do crescimento, da confiança, da cura
            e da restauração da energia, e o amarelo é a cor da inteligência, da
            receptividade mental e da sabedoria natural.{"\n"} Aqueles nascidos
            sob as luas de Shawnodese – a Lua Forte do Sol, a Lua das Bagas
            Maduras ea Lua da Colheita – e aqueles que estão passando pelos
            estágios dessas luas em sua viagem ao redor do volante,
            experimentarão crescimento rápido e todas as lições que isso trará
            para eles.{"\n"} As pessoas das luas de Shawnodese são aquelas com
            capacidade de crescimento rápido, em todos os níveis, uma vez que
            tenham firmemente colocado suas fundações na terra.{"\n"}
            {"\n"}
            {"\n"} Elemento: Água{"\n"}
            {"\n"} Podemos aprender mais sobre o Espírito do Sul e a maneira
            como sua essência é expressa através do Elemento com o qual está
            associado na cosmologia do Índio Americano – a Água. {"\n"}Como
            descobrimos anteriormente, um elemento não é a substância física que
            leva seu nome, mas sim a essência ou espírito que caracteriza essa
            substância física.{"\n"} A água física é fluida e a fluidez é uma
            característica da Água Elementar.{"\n"} A água flui para baixo de um
            nível para o outro e, se colocada em um recipiente, assumirá
            imediatamente a forma de seu molde.{"\n"} A Água Elementar é assim,
            assumindo imediatamente a “forma” da Forma do Pensamento, que
            fornece a matriz do que se torna uma manifestação física. A água é o
            grande “intermediário” – o meio entre a solidez e a luminosidade –
            pois a água física pode ser solidificada em gelo ou transformada
            através do fogo em vapor e depois em energia radiante.{"\n"}A Água
            Elementar também está entre o esplendor do Fogo e a mobilidade do
            Ar, por um lado, e a inércia da Terra, por outro.{"\n"} Sem o
            movimento fluido e penetrante da água, a Terra secaria e se tornaria
            estéril, e nada cresceria.{"\n"} Sem o fluxo de emoções, os seres
            humanos também se tornam “secos”, frágeis e estéreis.{"\n"} Nossas
            emoções e sentimentos são uma expressão da Água Elementar.{"\n"} A
            emoção é a energia que pode ser sentida, que toca o coração – o
            Espírito – e é por isso que freqüentemente é confundida com amor.
            {"\n"} A associação da água com a emoção é refletida em ditos como
            “inundações de emoção” e “águas de compaixão”.{"\n"} O amor deve
            poder fluir também. Não deve ser engarrafado ou vai estagnar e até
            ficar azedo. Então seu amor deve fluir.{"\n"} Deixe-o mover-se
            suavemente na direção daqueles que você gosta. Não tente contê-lo.{" "}
            {"\n"}Deixe seus verdadeiros sentimentos encontrarem expressão.
            Procure maneiras de deixar seus entes queridos saberem que você se
            importa com eles.{"\n"} Não confunda amor com gosto. O amor é
            essencialmente uma força espiritual, não uma atividade mental e
            física.{"\n"} Ao contrário da crença popular, você não precisa
            ‘gostar’ de alguém para expressar preocupação amorosa por eles. O
            amor deseja apenas o que é do melhor interesse daquele ou daqueles a
            quem está sendo expresso.{"\n"} Deseja apenas o bem deles. Isso é o
            que Jesus quis dizer com sua admoestação para amar uns aos outros.
            {"\n"} Pois amor é um bálsamo de cura que acalma e conforta,
            harmoniza e liga. É um dos grandes poderes do cosmos. Gostar, por
            outro lado, tem a ver com a mente.{"\n"} Implica estar satisfeito
            com o objeto do gosto de alguém. É encontrar algo ou alguém
            agradável, compatível, compatível. Escolhemos as coisas de que
            gostamos e com quem gostamos, que é uma atividade da mente.{"\n"} O
            amor é do coração, então você não precisa ‘gostar’ de alguém para
            mostrar amor por eles.{"\n"} O amor é essencialmente uma atividade
            do espírito. Aplicada às emoções, a água sugere profundidade de
            sentimento, mas sua polaridade negativa seria ineficaz.{"\n"} As
            pessoas que exibem aspectos negativos da água em suas ações são às
            vezes chamadas de “mero”, sugerindo uma falta de forma que não tem
            direcionamento ou poder de canalização.{"\n"} As pessoas que são
            “molengas” estão refletindo uma qualidade negativa da Água em um
            estado estagnado, pois permitiram a si mesmas serem absorvidas e
            saturadas por sua própria energia emocional e estão projetando
            aquela experiência pegajosa para fora.{"\n"}
            Os aspectos negativos da água podem ser destrutivos, erosivos e
            divisivos, pois podem diluir, dissolver e quebrar o que quer que
            penetre. Em seu aspecto positivo, a água é vivificante, nutritiva,
            refrescante, calmante e protetora. Essas qualidades positivas e
            negativas também podem ser aplicadas à “água das emoções”, pois os
            efeitos emocionais podem ser curativos e restauradores,
            reconfortantes e calmantes, e podem ser perturbadores e
            perturbadores, violentos e destrutivos.{"\n"} Os antigos
            consideravam a água como um aspecto feminino da Fonte da vida e a
            associavam à fertilidade. {"\n"}Para eles, uma nascente era a fonte
            do riacho e o riacho deu origem ao lago; assim, a água era entendida
            como uma expressão do processo yin.{"\n"} A água é usada por um xamã
            como um ótimo agente de cura.{"\n"} Ele se dissolve e leva as
            impurezas para onde elas não podem causar dano – geralmente sendo
            devolvidas à Terra para transmutar os elementos originais de onde
            vieram.{"\n"}
            {"\n"}
            {"\n"}
            Cor: VERMELHO{"\n"}
            {"\n"} A cor é uma maneira de fazer conexões em todos os níveis de
            experiencia.{"\n"}A cor tem uma influência poderosa e pode nos
            afetar positiva ou negativamente, fisicamente, emocionalmente,
            mentalmente e espiritualmente.{"\n"} Mudar as cores da decoração em
            nossa casa ou no trabalho pode trazer uma mudança marcante na
            maneira como nos sentimos nesses lugares.{"\n"} Podemos gostar de
            fazer certas tarefas em uma sala específica, em vez de outra, e isso
            pode ser devido à atmosfera criada por sua decoração, bem como a
            direção do quarto.{"\n"}
            Algumas cores ou tons de cores são tranquilos e relaxantes, outras
            são estimulantes para o nosso sistema de energia.{"\n"} O vermelho é
            a cor geralmente associada ao sul da roda da medicina, porque é a
            cor do sangue oxigenado e, portanto, representa a vida, a
            vitalidade, a saúde e o vigor.{"\n"} Em seu aspecto positivo,
            vermelho é a cor relacionada à força, coragem, energia física e
            potência sexual.{"\n"}O vermelho é a cor das paixões, por isso pode
            ser volátil e, no seu modo negativo, está associado à luxúria, raiva
            e malícia.{"\n"} O vermelho é quente, a cor do sul, onde o sol está
            no auge ao meio-dia no Hemisfério Norte.{"\n"} As pessoas de pele
            vermelha refletem algo das qualidades do Norte, pois elas também são
            calorosas e têm uma aparente simplicidade infantil e uma natureza
            confiante.{"\n"} Índios americanos indicam isso da maneira que
            aprendem melhor – através de brincadeiras e cantando, dançando e
            cantando.{"\n"} De fato, cantar, cantar e dançar são formas de
            sintonizar com os poderes do sul.{"\n"} O vermelho é a cor das
            emoções e de nossas águas principais: o sangue.{"\n"}
            {"\n"}
            {"\n"}
            Reino do Sul: Reino Vegetal{"\n"}
            {"\n"} Se você consultar a roda da alquimia básica (pelo Hemisfério
            Sul), você verá que o Norte é o reino do dar.{"\n"} É o Lugar dos
            Doutores e as Plantas são os grandes doadores de energia. Plantas e
            árvores se entregam ao planeta.{"\n"} Eles se dão como alimento e
            abrigo para as criaturas dos reinos Animal e Humano. Eles dão
            beleza, harmonia e equilíbrio ao solo em que estão enraizados e a
            todo o ambiente em que vivem.{"\n"} As plantas podem fazer quase
            tudo que um animal pode fazer, porém mais devagar.{"\n"} De acordo
            com o professor Malcolm Wilkins, do departamento de botânica da
            Universidade de Glasgow, as plantas podem contar, contar as horas,
            pedir água e responder ao som.{"\n"} Além disso, elas têm memória,
            sistema nervoso, visão de cores e senso de gosto. Você pode aprender
            muito sobre o Espírito e a Alma do reino vegetal.{"\n"} As plantas
            “reconhecem” seus pais verdadeiros como o Sol e a Terra e confiam
            neles, com a confiança de uma criança inocente. Cada planta começa a
            vida como uma semente da planta que vive antes dela.{"\n"} Ela é
            nutrida na escuridão do útero da Terra até que o Sol ative as
            substâncias nutritivas internas para que possa brotar e penetrar a
            superfície da Terra para absorver a luz solar, crescer, desenvolver
            e atingir a maturidade para se semear e assegurar a continuidade da
            vida, vivendo na confiança de que o Sol e a Terra cuidarão disso.{" "}
            {"\n"}O Norte é a direção para aprender sobre o reino das plantas,
            não apenas pelo aprendizado de livros, embora isso possa ajudá-lo a
            identificar diferentes plantas, árvores, arbustos e flores, mas ao
            conhecer o reino vegetal, ser um aventureiro espiritual.{"\n"} Você
            precisa reconhecer que as plantas e as árvores são seres vivos e,
            uma vez que você venha a desenvolver uma afinidade com as plantas,
            descobrirá que elas responderão a você.{"\n"} Você pode até
            descobrir que adquiriu ‘dedos verdes’.{"\n"} Observe como as plantas
            prosperam em uma atmosfera feliz e harmoniosa, mas parecem secar e
            morrer em um ambiente negativo ou turbulento ou onde há dor e
            sofrimento.{"\n"} A condição das plantas da casa em qualquer casa
            pode dizer muito sobre as pessoas que vivem lá. O mesmo acontece com
            os jardins dianteiros e traseiros.{"\n"} É para o reino vegetal que
            nos voltamos para descobrir os Grandes Curandeiros, pois plantas e
            árvores são os restauradores da harmonia e do equilíbrio para o
            reino mineral que está “abaixo” deles na evolução e que eles
            controlam, vivem, transmutam e expressam em um nível mais alto de
            vibração.{"\n"} Devido à sua capacidade de se comunicar com a
            natureza e sua observação atenta do ambiente natural, os índios
            americanos tinham um conhecimento extenso do que é referido hoje
            como “medicina popular”.{"\n"} De fato, a medicina popular que
            constitui uma parte importante do que ficou conhecido como “Medicina
            Alternativa”, particularmente nos Estados Unidos, abrange muitos dos
            remédios naturais de cura dos índios.{"\n"} Lamentavelmente, como
            com outras coisas, pouco crédito foi dado aos índios. Foram séculos
            antes de ser dada uma atenção séria às habilidades curativas dos
            nativos americanos e então, de acordo com V. J. Vogei em seu livro
            North American Indian Medicine, “descobriu-se que um número
            surpreendente de drogas indigenas era de enorme valor”. {"\n"}O Dr.
            Frederick Banting, o descobridor da insulina, creditou aos
            curandeiros indígenas o “trabalho farmacêutico” que levou a ele.
            {"\n"} Em 1787, um médico alemão, Dr. Johann David Schopt, publicou
            uma lista de mais de 300 remédios de vegetais em uso no leste dos
            Estados Unidos, muitos dos quais foram supostamente aprendidos com
            os nativos americanos.{"\n"} Além disso, mais de 200 drogas
            indígenas em uso por uma ou mais das principais tribos foram
            listadas na Farmacopéia dos Estados Unidos da América desde sua
            primeira aparição, em 1820, e no Formulário Nacional, desde que
            começou em 1888.{"\n"} O fato é que os índios americanos tinham um
            profundo conhecimento de sua flora nativa, embora grande parte dela
            tenha sido obscurecida por aqueles que rotularam esses remédios de
            cura como “irracionais”.{"\n"} Uma atitude semelhante foi tomada
            pela ortodoxia em relação à “medicina alternativa”.{"\n"} Deixe-me
            dar um exemplo. Como a análise química dos remédios de flores
            desenvolvidos pelo falecido Dr. Edward Bach, renomado médico e
            bacteriologista de Londres, não conseguiu identificar uma substância
            física nos remédios além da água e de um líquido preservante, eles
            foram amplamente ignorados pelos ortodoxos.{"\n"} O agente de cura
            em cada remédio, no entanto, não é uma substância física, mas o
            força de vida invisível da própria planta.{"\n"}
            Os remédios são produzidos homeopaticamente, confiando em energias
            cuja potência aumenta à medida que aumenta o diluidor.{"\n"}{" "}
            Novamente, aqueles que usam a abordagem materialista caíram na
            armadilha: acreditar que, se uma coisa não pode ser vista ou medida,
            ela não pode existir. Mas o índio compreendia o poder da força vital
            em todos os seres vivos, em particular com o reino vegetal, e
            trabalhava com ele. {"\n"}
            {"\n"}
            {"\n"}
            Corpo Celestial: A Lua{"\n"}
            {"\n"} O corpo celeste associado ao sul é a lua. A Lua está
            intimamente ligada à Água porque os ciclos da Lua têm um efeito tão
            poderoso na água, e mais de 70% da superfície da Terra é água. A
            água está presente em tudo. Mesmo no deserto mais seco há alguns.
            Não há vida sem isso.{"\n"} Como a influência magnética das luas
            sobre a Terra causa a ascensão e a queda de vastos oceanos, essa
            atração gravitacional afeta os seres vivos, inclusive nós mesmos,
            pois o corpo humano também é composto de mais de 70% de água.{"\n"}{" "}
            Até o cérebro é uma massa de polpa semilíquida e é afetado pelas
            marés da Lua. Vivemos nossas vidas dentro de uma vasta matriz
            invisível de força de padrões de energia que afetam ou influenciam
            nosso crescimento e desenvolvimento.{"\n"}
            Alguns desses padrões de energia são harmoniosos e, portanto, úteis,
            mas outros são desarmônicos e até mesmo destrutivos.{"\n"} Alguns
            influenciam o crescimento e o desenvolvimento, outros têm um efeito
            contrário e estão envolvidos na quebra e na dissolução. A Lua tem um
            tremendo efeito na Terra, em nós mesmos e em todos os seres vivos
            durante sua órbita de aproximadamente 29 dias ao redor da Terra.
            {"\n"}
            Este ciclo é uma medida do Tempo – um mês, uma única revolução da
            Lua ao redor da Terra.{"\n"} O poder gravitacional da Lua, combinado
            com o movimento da Terra, causa a ascensão e a queda de grandes
            extensões de água nos oceanos e a flutuação das marés.{"\n"} Ela
            influencia o fluxo de seiva em árvores e plantas. Ela afeta os
            fluidos corporais do ser humano, incluindo o ritmo do sangue, o
            ciclo menstrual feminino e a gestação. Isso afeta os fluidos do
            cérebro. O efeito gravitacional varia de acordo com a distância da
            Lua da Terra.{"\n"} A Lua segue uma órbita elíptica, de modo que
            parece maior quando está mais perto da Terra, quando seu poder é
            mais de 25% mais forte do que quando aparece em seu menor tamanho.
            {"\n"} Há também uma variação em sua altura no céu porque a órbita
            da Lua não é paralela ao equador da Terra, por isso parece
            “oscilante” e ser mais alto no céu em algumas vezes do que em
            outras.{"\n"} Ao tomar consciência do pulso do campo de força
            vibratória e atração gravitacional da Lua e da força de luz
            eletromagnética refletida para a Terra através das fases da Lua,
            podemos sincronizar nossas próprias atividades com o fluxo e refluxo
            destas forças de energia invisíveis e visíveis e, assim, tornar-se
            sintonizado e trabalhar com o poder lunar.{"\n"}
            {"\n"}
            {"\n"}
            Aspecto Humano: As Emoções{"\n"}
            {"\n"} Por causa de sua fluidez, as emoções humanas são comparadas à
            água, e tanto a Água quanto as Emoções são componentes do Sul(Para o
            Hemisferio Norte, e Norte para o Hemisferio Sul). {"\n"}Uma
            definição de dicionário da palavra emoção é “agitação ou perturbação
            da mente”. De acordo com essa definição, emoção é energia mental em
            movimento – a energia da mente absorvendo ou transmitindo impressões
            através do sentimento.{"\n"} Ou, em outras palavras, uma emoção é
            energia mental que pode ser sentida. É a energia mental que toca o
            Espírito – o coração – e estamos conscientes disso através dos
            sentimentos.{"\n"} Emoção é, portanto, uma força motriz poderosa e é
            também um desejo de expressão. Como a água, ela pode ser agitada e
            ficar turva e fora de controle. Quando nesta condição ela pode ser
            debilitante, até mesmo destrutiva, e a mente não pode mais ver
            claramente através da tela de distorções e confusões.{"\n"} Como a
            água, ela pode rugir e se afastar afetando tudo em seu caminho, a
            menos que possa ser controlada. Nós controlamos nossas emoções e as
            dirigimos ou elas nos controlam.{"\n"} As emoções estão ligadas ao
            Passado, que é outro componente do Norte, e aos apegos às pessoas
            aos objetos e às condições.{"\n"} Emoções têm uma afinidade com a
            cor Vermelha – a cor da energia forte expressa no plano físico.
            {"\n"} Para evitarmos ser jogados para lá e para cá num mar de
            emoções, precisamos nos libertar de apegos passados que nos limitam
            e nos inibem que nos causam dor emocional no Presente e prometem
            mais sofrimento no Futuro.{"\n"} Esse será o propósito da Tarefa do
            Aventureiro no final desta Unidade.{"\n"}
            {"\n"}
            {"\n"}Período de Tempo: O PASSADO{"\n"}
            {"\n"} A Direção Norte enfatiza a atividade passada.{"\n"} Tenha em
            mente que você está no Caminho da Medicina a fim de obter
            conhecimento e encontrar experiências que lhe ensinem o autodomínio
            e o leve à iluminação que você procura. Assim, no Caminho do Norte,
            você precisa rever o seu passado próximo de colocá-lo sob escrutínio
            rigoroso para que possa ver o quanto está acorrentado por
            condicionamentos passados, o que pode estar prendendo você em uma
            rotina da qual aparece não ser uma escapatória, e descobrir como
            você pode se libertar deles.{"\n"} A maioria dos traumas emocionais
            que sofremos tem suas origens nas experiências do passado.{"\n"} Ao
            nos apegarmos ao passado, asseguramos que eles sejam repetidos
            continuamente.{"\n"} A solução pode ser encontrada em um
            reconhecimento do sempre presente Agora! O passado é o que já foi, o
            presente é o que se tornou e o futuro é o que está se tornando.{" "}
            {"\n"}Ao eliminar o lixo do passado, podemos mudar a direção do
            Agora e a essência do futuro.{"\n"}
            {"\n"}
            {"\n"}
            Estação: Verão{"\n"}
            {"\n"} A estação atribuída a esta direção é o verão, porque é a
            estação do crescimento rápido e, portanto, pode ser comparada à
            infância e juventude.{"\n"} O aprendizado é mais rápido na infância
            do que em qualquer outra fase da vida. Se você for persistente e
            determinado em seus esforços para progredir ao longo do Caminho da
            Medicina, será perceptível como você “cresceu” e quanto novos
            conhecimentos que você adquiriu em um período relativamente curto de
            tempo, apenas completando o Caminho do Norte por aqui.{"\n"}
            {"\n"}
            {"\n"}
            Número: Três{"\n"}
            {"\n"} Cada direção na roda da medicina é alocada números na
            contagem de vinte.{"\n"} Os números de um a dez estão relacionados
            com as manifestações “externas” e onze a vinte com realidades
            internas. No simbolismo do índio americano, o número três era
            considerado o resultado da união do masculino e do conceitual “um”
            com os “dois” femininos e receptivos.{"\n"} “Três” era o “filho” da
            união de “um” e “dois”, de modo que tinha uma qualidade juvenil: a
            natureza pouco sofisticada de uma criança em crescimento, a
            característica de uma maravilha infantil que tem sido tão enfatizada
            no Caminho. do sul.{"\n"} Três tem o frescor e a espontaneidade que
            se pode associar à juventude – e o quanto desejamos manter a
            juventude à medida que envelhecemos! Três também é considerado como
            o número de relações familiares – pai, mãe e filho.{"\n"} Está
            relacionado com a relação da pessoa com a divindade – isto é, como
            uma ‘criança’ para um Deus Pai e uma Deusa Mãe. {"\n"}Uma tríade de
            uma divindade é encontrada na maioria das culturas – Sskwahuan,
            Wahkwaahuan e Wakan-Tanka, de índios norte-americanos; Osiris, Ísis
            e Hórus dos antigos egípcios; Pai, Filho e Espírito Santo dos
            cristãos; Vishnu, Siva e Kali dos hindus, e assim por diante.{"\n"}{" "}
            Treze tem a qualidade de agir como um “abridor interior” – isto é,
            disponibilizar o conhecimento a partir do “interior” em vez de
            fontes externas.{"\n"} Treze está intimamente relacionado à morte e
            ao renascimento e a mudar através da transição de um nível de
            existência para outro.{"\n"} Devido às suas qualidades místicas e ao
            seu valor como chave para os mistérios, foi deliberadamente difamado
            na Europa medieval e associado à má sorte e ao infortúnio daqueles
            que queriam manter as pessoas na ignorância e na superstição. Treze
            ajuda o desenvolvimento do Eu Espiritual, ou Eu Superior, é
            associado com a energia espiritual de todas as plantas e a
            receptivo-criativa Yin, a força feminina da vida, e é por isso que
            treze também se relaciona com a Mãe Terra.{"\n"}
            {"\n"}
            {"\n"} Inimigo: o Medo{"\n"}
            {"\n"} Cada passo no aprendizado é uma jornada em território
            desconhecido e às vezes tememos o desconhecido simplesmente porque é
            o desconhecido. No caminho da medicina, você está no terreno e
            possivelmente não está familiarizado com você. {"\n"}Então, no Sul,
            ao entrar no desconhecido, você está enfrentando seu primeiro
            inimigo principal – MEDO. Existem dois tipos de medo – o medo da
            realidade e o medo ilusório. O medo da realidade é o medo do real.
            {"\n"} É um tipo positivo de medo porque qualquer coisa que seja uma
            possível ameaça à sua sobrevivência é um medo real.{"\n"} Medo
            ilusório é o tipo de medo que sofremos na maior parte do tempo.
            Considerando que o medo da realidade é sobre o presente – a ameaça
            imediata, o perigo imediato - O medo ilusório é sobre o que pode
            acontecer no futuro, SE …! {"\n"}O medo de o que pode acontecer se
            você não puder encontrar o dinheiro para pagar uma conta. O medo do
            que pode acontecer se você não atingir sua cota de vendas ou
            concluir todos os trabalhos esperados de você no trabalho; o que
            pode acontecer se você se tornar redundante.{"\n"} O medo de perder
            uma namorada ou namorado. O medo de falhar um teste de condução ou
            um exame. O medo de não receber um aumento salarial ou uma promoção.
            {"\n"}O medo ilusório é um medo do tipo “o que acontecerá se”.{"\n"}{" "}
            É o medo de algo que ainda não começou a acontecer e, com toda a
            probabilidade, pode nunca acontecer. É o medo do desconhecido. Não é
            medo da coisa ou condição, mas de um possível resultado desconhecido
            dessa condição.{"\n"} É ilusório porque é o medo de algo que não
            está realmente presente. É o medo ilusório que precisa ser superado.
            {"\n"} Esse é o medo que você tem que derrotar. Mas como? Por não
            fugir disso. Enfrentando isso com clareza mental. Aplicando clareza
            de espírito a cada um dos exemplos que dei e muito mais a eles, o
            próprio medo desapareceria rapidamente, porque o conhecimento de
            como lidar com a situação logo chegaria a você.{"\n"}
            {"\n"}
            {"\n"} Manifestação: MÚSICA {"\n"}
            {"\n"}Cada Poder direcional encontra expressão para sua qualidade
            essencial em uma atividade humana específica ou grupo de atividades.
            {"\n"} De acordo com os ensinamentos da Medicina, a natureza
            essencial do Sul manifesta-se na música, canto e dança – atividades
            que podem ser realizadas com exuberância juvenil, livres de
            inibições e problemas psicológicos.{"\n"} Os índios americanos
            encontraram muita alegria em tais atividades e os consideravam como
            alimento para a alma e combustível para o espírito.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The power of the Spirit of Summer is Growth, Innocence, Faith, and
            Trust.{"\n"} Where we can recapture the wonder of being alive and be
            like children. It is the Portal of Emotions and the Element of
            Water.{"\n"} In native thought, just as we cannot block the waters
            of a river, we cannot block our emotions. In other words, let it
            flow.{"\n"} It also represents the Plant Kingdom. The North
            Direction (for the Southern Hemisphere, the South Direction for the
            Northern Hemisphere) carries the gifts of energy, adaptability,
            maturity, fun, and humor.{"\n"} This is the time to study
            relationships, when everything in our world becomes truly possible,
            when seeking love is definitively one of our guiding strengths, and
            where we are capable of giving and receiving love in many ways.
            {"\n"} The power of the Summer Direction is mysterious, a power of
            change and growth. It is for exploring love, relationships, the
            world around you, and discovering who you are.{"\n"} The North
            Direction (Southern Hemisphere) is the place of the heart, of
            emotions.{"\n"} It is there we go when we need to heal our heart,
            when we need to learn how to love, when we need to learn to let go
            of everything that is not love (hatred, fear, envy, jealousy,
            anger…). It also teaches about sexuality and sensuality.{"\n"} All
            desires can be fulfilled because vital energy is at its peak.{"\n"}{" "}
            It is an opportunity, at the beginning of the year, to review the
            lessons of the past year. To establish a commitment to yourself, for
            your growth, in another cycle of your earthly mission.{"\n"} The
            North Direction of the Medicine Wheel in the Southern Hemisphere (In
            the Northern Hemisphere it is South) is the place to return to
            innocence and gain faith and trust.{"\n"} It is the place where our
            faith is tested and proven, and the place where we can recapture the
            wonder of being alive and be like children.{"\n"} It is the Portal
            of Emotions and the Element of Water. The North Winds in summer
            invite us to spend more time outdoors, to enjoy the warm summer sun,
            when everything in the natural world blooms and exhales fragrance.
            {"\n"} Thus, the North is associated with rapid growth, blooming,
            and development.{"\n"} Much of the quest lies in understanding: Who
            am I? What is my mission? How can my mission help make the world a
            better place? What makes me happy? What do I need to learn to become
            what I "want" to be? How do I obtain the material resources
            necessary to put my life in order, doing what I love, fully
            exercising my talents and abilities? How can I express myself with
            excellence?{"\n"} The North is the Path of Trust and Innocence and
            is sometimes referred to as the Path of the Child. Therefore, to
            walk it, we need to awaken the 'child' within us—the part of us that
            can establish relationships through the exercise of faith.{"\n"}{" "}
            Trust and innocence we had as children, when we looked at life with
            wonder and at the future with excited anticipation.{"\n"} The North
            is the direction that helps us see things with clear details and
            begin to understand our true nature.{"\n"} The ancient admonition
            "Man, Know Thyself" went far beyond advocating a course of
            psychological analysis.{"\n"} It meant knowing the Self for what it
            truly is—for the Self is the most sacred and precious thing any of
            us has.{"\n"} This was fully understood by the Masters of Wisdom,
            whose admonition that to love others, you must first learn to love
            your Self, implied the discovery of the highest aspect of your own
            being.{"\n"} The Journey of the North is where the process of
            finding your true self begins.{"\n"} In the South, you will shed the
            obstacles that obscure your True Self and prevent you from seeing
            your own Being in its true light.{"\n"} The twelve components of the
            South that we will consider are:{"\n"}
            {"\n"}
            {"\n"} Quality: Trust and Innocence{"\n"}
            {"\n"} The Native American sometimes referred to the South as “the
            path of the child” because it was associated with the child growing
            in body and mind toward maturity, yet still maintaining an attitude
            of trust and innocence, untainted by the cynicism, arrogance, and
            insensitivity of the adult world.{"\n"} You can align yourself with
            the special quality of the South by refusing to let yourself be
            contaminated by the cynicism or arrogance that arises from the
            belief that you already “know,” and by refusing to be stained with
            guilt and embarrassment.{"\n"} The Spirit of the North helps you
            acquire things of spiritual and lasting value and, like a child, to
            grow rapidly toward maturity.{"\n"} But this spiritual maturity can
            only come through adopting an attitude of trust and innocence. Then
            will follow an understanding of one’s true identity and an
            acceptance, as a spiritual ‘adult,’ of control over one’s own
            destiny.{"\n"} The quality of trust and innocence required is not
            the lost trust and innocence of naivety and immaturity, but the kind
            that makes learning an adventure, finds excitement in discovery, and
            joy in the awareness that new knowledge brings.{"\n"} It means not
            allowing illusory fears, false values, double standards, and guilt
            complexes of adult life to spoil and damage your progress. It means
            trusting your own instincts and not letting yourself be influenced
            by what others might think or say.{"\n"}
            Observe how the young and innocent child enjoys the pure experience
            of living, and how quickly they learn from each new adventure, and
            you will begin to appreciate the meaning of the quality of the
            North.{"\n"} You need to recapture some of the wonder and excitement
            you had as a child and apply it to the process of living.{"\n"} Then
            you will have acquired a zest for life that comes from being aware
            that life is meant to be a wonderful experience to savor and enjoy,
            not just tolerate or endure.{"\n"} Take some time now to immerse
            yourself in the quality of the North.{"\n"}
            {"\n"}
            {"\n"}
            {"\n"} Animal of the North: Coyote {"\n"}
            {"\n"} By Sun Bear: The animal associated with Shawnodese is the
            coyote. {"\n"} For the natives, the coyote is not the trickster but
            rather the cunning one, who can force people to learn even when they
            do not want to. Through its tricks, the coyote pushes its relations
            to grow.{"\n"} By being deceived and learning necessary lessons, the
            children of the Earth learn to trust life and the lessons it brings.
            {"\n"} Being as stubborn as most children of the Earth, tricks are
            often necessary for growth. People feel comfortable as they are and
            do not want to endure the pain that rapid growth sometimes brings.
            {"\n"} There is an entire block of native mythology that deals with
            the Coyote, the old trickster who is sometimes the Creator and other
            times the “Sacred Clown.”{"\n"} The Coyote is one of the most sacred
            and most profane of animals.{"\n"} Like the Loon (totem of
            Grandmother Moon) and the Frog (Clan of Frogs), it is a powerful
            singer, whose song can lead humans to freedom or fear.{"\n"} The
            Coyote brings growth to anyone, but for those who love life, it
            gives the gift of “trust.” {"\n"} It is the trust in life that
            teaches us true survival and tolerance.{"\n"} The coyote can be
            found in many rural areas of North America.{"\n"} Smaller than a
            wolf, the coyote has proven adaptable to the invasion of
            civilization. The most distinctive attributes of the coyote are its
            agility, keen senses, dog-like traits, and its song.{"\n"} On many
            nights in the countryside, the yips and howls of the coyote pierce
            the still night, reminding all Two-Legs who can hear them that,
            though they now dominate the land, they are not the only species in
            existence.{"\n"} We learn much about people by how they react to the
            Coyote.{"\n"} Those who love life and the Earth are inspired by the
            Coyote’s song and its ability to outwit civilization, which has
            tried to destroy it.{"\n"} Those who fear all that is natural also
            fear the coyote and attempt to destroy it by shooting, poisoning, or
            trapping it.{"\n"} The fearful describe the coyote as a thief, one
            who eats domestic creations like chickens.{"\n"} The coyote prefers
            natural food, such as rodents like mice or rabbits, but it will
            occasionally feed on a chicken or other small domestic animal in
            areas where civilization has eradicated all its natural prey.{"\n"}{" "}
            When it works with Shawnodese, the Coyote’s coat is speckled with
            the midday Sun shining on the Earth.{"\n"} Sometimes, when in
            Shawnodese's service, the Coyote’s coat is so speckled it seems to
            disappear.{"\n"} It is at these times that it does its most powerful
            work. At these moments, the power of Shawnodese and the coyote is
            necessary to help people grow and continue learning the lessons they
            were placed on Earth to learn.{"\n"} Shawnodese’s coyote has a
            yellow coat, the color of the midday sun, speckled with the brown of
            summer earth. Shawnodese’s colors are the green of plants that grow
            quickly and the yellow of the summer sun, which provides warmth and
            light to enable growth.{"\n"} Green is the color of growth, trust,
            healing, and the restoration of energy, while yellow is the color of
            intelligence, mental receptivity, and natural wisdom.{"\n"} Those
            born under Shawnodese’s moons—the Strong Sun Moon, the Ripe Berries
            Moon, and the Harvest Moon—and those passing through the stages of
            these moons on their journey around the wheel, will experience rapid
            growth and all the lessons that this will bring to them.{"\n"} The
            people of Shawnodese’s moons are those with the capacity for rapid
            growth on all levels, once they have firmly placed their foundations
            on the Earth.{"\n"}
            {"\n"}
            {"\n"}
            {"\n"} Element: Water {"\n"}
            {"\n"} We can learn more about the Spirit of the South and how its
            essence is expressed through the Element with which it is associated
            in Native American cosmology – Water. {"\n"} As we discovered
            earlier, an element is not the physical substance that bears its
            name but rather the essence or spirit that characterizes that
            physical substance. {"\n"} Physical water is fluid, and fluidity is
            a characteristic of Elemental Water. {"\n"} Water flows downward
            from one level to another and, when placed in a container,
            immediately takes the shape of its mold. {"\n"} Elemental Water
            behaves similarly, instantly assuming the “shape” of the Thought
            Form, which provides the framework for what becomes a physical
            manifestation. {"\n"} Water is the great “intermediary” – the medium
            between solidity and luminosity – as physical water can be
            solidified into ice or transformed through fire into steam and then
            into radiant energy. {"\n"} Elemental Water also lies between the
            brilliance of Fire and the mobility of Air, on one hand, and the
            inertia of Earth, on the other. {"\n"} Without the fluid,
            penetrating motion of water, the Earth would dry up and become
            barren, and nothing would grow. {"\n"} Without the flow of emotions,
            humans also become “dry,” brittle, and barren. {"\n"} Our emotions
            and feelings are expressions of Elemental Water. {"\n"} Emotion is
            the energy that can be felt, that touches the heart – the Spirit –
            and is why it is often confused with love. {"\n"} The association of
            water with emotion is reflected in sayings like “floods of emotion”
            and “waters of compassion.” {"\n"} Love must also be able to flow.
            It should not be bottled up, or it will stagnate and even turn sour.
            So, let your love flow. {"\n"} Let it move gently toward those you
            care about. Do not try to contain it. {"\n"} Let your true feelings
            find expression. Seek ways to let your loved ones know you care
            about them. {"\n"} Do not confuse love with liking. Love is
            essentially a spiritual force, not a mental or physical activity.{" "}
            {"\n"} Contrary to popular belief, you do not need to ‘like’ someone
            to express loving concern for them. Love desires only what is in the
            best interest of the one or ones to whom it is expressed. {"\n"} It
            desires only their good. That is what Jesus meant by his admonition
            to love one another. {"\n"} For love is a healing balm that soothes
            and comforts, harmonizes and binds. It is one of the great powers of
            the cosmos. {"\n"} Liking, on the other hand, has to do with the
            mind. {"\n"} It implies being pleased with the object of one’s
            liking. It is finding something or someone pleasant, agreeable,
            compatible. We choose the things we like and the people we like,
            which is a mental activity. {"\n"} Love comes from the heart, so you
            do not need to ‘like’ someone to show love for them. {"\n"} Love is
            essentially an activity of the spirit. {"\n"} Applied to emotions,
            water suggests depth of feeling, but its negative polarity would be
            ineffectiveness. {"\n"} People who exhibit the negative aspects of
            water in their actions are sometimes called “wishy-washy,”
            suggesting a lack of form that lacks direction or the power to
            channel. {"\n"} People who are “sluggish” reflect a negative quality
            of Water in a stagnant state, as they have allowed themselves to be
            absorbed and saturated by their own emotional energy and project
            that sticky experience outward. {"\n"} The negative aspects of water
            can be destructive, erosive, and divisive, as they can dilute,
            dissolve, and break whatever they penetrate. {"\n"} In its positive
            aspect, water is life-giving, nourishing, refreshing, soothing, and
            protective. {"\n"} These positive and negative qualities can also be
            applied to the “water of emotions,” as emotional effects can be
            healing and restorative, comforting and soothing, as well as
            disruptive and unsettling, violent and destructive. {"\n"} The
            ancients considered water as a feminine aspect of the Source of life
            and associated it with fertility. {"\n"} To them, a spring was the
            source of a stream, and the stream gave rise to the lake; thus,
            water was understood as an expression of the yin process. {"\n"}{" "}
            Water is used by a shaman as a great healing agent. {"\n"} It
            dissolves and carries impurities to where they can cause no harm –
            usually being returned to the Earth to transmute the original
            elements from which they came. {"\n"} {"\n"} {"\n"}
            Color: RED{"\n"}
            {"\n"} Color is a way to make connections at all levels of
            experience.{"\n"}
            Color has a powerful influence and can affect us positively or
            negatively, physically, emotionally, mentally, and spiritually.
            {"\n"} Changing the colors of the decor in our home or at work can
            bring a significant change in how we feel in these places.{"\n"} We
            may like to perform certain tasks in one room rather than another,
            and this may be due to the atmosphere created by its decor, as well
            as the direction of the room.{"\n"} Some colors or shades of colors
            are calm and relaxing, while others are stimulating to our energy
            system.{"\n"} Red is the color generally associated with the south
            of the medicine wheel, because it is the color of oxygenated blood
            and therefore represents life, vitality, health, and vigor.{"\n"} In
            its positive aspect, red is the color related to strength, courage,
            physical energy, and sexual power.{"\n"} Red is the color of
            passions, so it can be volatile and, in its negative mode, is
            associated with lust, anger, and malice.{"\n"} Red is warm, the
            color of the south, where the sun is at its peak at noon in the
            Northern Hemisphere.{"\n"} People with red skin reflect something of
            the qualities of the North, as they are also warm and have an
            apparent childlike simplicity and a confident nature.{"\n"} Native
            Americans indicate this in the way they learn best – through play
            and singing, dancing, and singing.{"\n"} In fact, singing, dancing,
            and singing are ways to tune into the powers of the south.{"\n"} Red
            is the color of emotions and our primary waters: blood.{"\n"}
            {"\n"}
            {"\n"}
            South Kingdom: Plant Kingdom{"\n"}
            {"\n"} If you consult the basic alchemy wheel (from the Southern
            Hemisphere), you will see that the North is the kingdom of giving.
            {"\n"} It is the Place of the Healers, and Plants are the great
            givers of energy. Plants and trees give themselves to the planet.
            {"\n"} They give themselves as food and shelter for the creatures of
            the Animal and Human realms. They give beauty, harmony, and balance
            to the soil in which they are rooted and to the entire environment
            in which they live.{"\n"} Plants can do almost everything an animal
            can do, but slower.{"\n"} According to Professor Malcolm Wilkins of
            the Botany Department at the University of Glasgow, plants can
            count, tell time, ask for water, and respond to sound.{"\n"} In
            addition, they have memory, a nervous system, color vision, and a
            sense of taste. You can learn a lot about the Spirit and Soul of the
            plant kingdom.{"\n"} Plants “recognize” their true parents as the
            Sun and the Earth and trust them, with the trust of an innocent
            child. Each plant starts life as a seed from the plant that lived
            before it.{"\n"} It is nourished in the darkness of the Earth's womb
            until the Sun activates the internal nutrients so it can sprout and
            penetrate the Earth's surface to absorb sunlight, grow, develop, and
            reach maturity to seed itself and ensure the continuity of life,
            living in the trust that the Sun and Earth will take care of it.{" "}
            {"\n"} The North is the direction to learn about the plant kingdom,
            not just by book learning, although that can help you identify
            different plants, trees, shrubs, and flowers, but by getting to know
            the plant kingdom, being a spiritual adventurer.{"\n"} You need to
            recognize that plants and trees are living beings, and once you
            develop an affinity with plants, you will discover that they will
            respond to you.{"\n"} You may even discover that you have acquired
            ‘green fingers’.{"\n"} Observe how plants thrive in a happy and
            harmonious atmosphere, but seem to dry up and die in a negative or
            turbulent environment or where there is pain and suffering.{"\n"}{" "}
            The condition of houseplants in any home can say a lot about the
            people living there. The same goes for the front and back gardens.
            {"\n"} It is to the plant kingdom that we turn to discover the Great
            Healers, for plants and trees are the restorers of harmony and
            balance for the mineral kingdom below them in evolution, which they
            control, live, transmute, and express at a higher level of
            vibration.{"\n"} Due to their ability to communicate with nature and
            their keen observation of the natural environment, Native Americans
            had an extensive knowledge of what is referred to today as “folk
            medicine.”{"\n"} In fact, the folk medicine that constitutes an
            important part of what became known as “Alternative Medicine,”
            particularly in the United States, covers many of the natural
            healing remedies of the Native Americans.{"\n"} Unfortunately, as
            with other things, little credit was given to Native Americans. It
            took centuries before serious attention was given to the healing
            abilities of Native Americans, and then, according to V. J. Vogei in
            his book *North American Indian Medicine*, “it was discovered that a
            surprising number of indigenous drugs were of enormous value.”{" "}
            {"\n"} Dr. Frederick Banting, the discoverer of insulin, credited
            the Native healers for the “pharmaceutical work” that led him to it.
            {"\n"} In 1787, a German doctor, Dr. Johann David Schopt, published
            a list of over 300 plant remedies in use in the eastern United
            States, many of which were supposedly learned from Native Americans.
            {"\n"} Furthermore, more than 200 indigenous drugs in use by one or
            more of the major tribes were listed in the United States
            Pharmacopeia since its first appearance in 1820, and in the National
            Formulary, since it began in 1888.{"\n"} The fact is that Native
            Americans had a deep knowledge of their native flora, although much
            of it has been obscured by those who labeled these healing remedies
            as “irrational.”{"\n"} A similar attitude was taken by orthodoxy
            towards “alternative medicine.”{"\n"} Let me give you an example.
            Since the chemical analysis of the flower remedies developed by the
            late Dr. Edward Bach, a renowned doctor and bacteriologist from
            London, failed to identify a physical substance in the remedies
            beyond water and a preservative liquid, they were largely ignored by
            the orthodox.{"\n"} The healing agent in each remedy, however, is
            not a physical substance, but the invisible life force of the plant
            itself.{"\n"} The remedies are produced homeopathically, relying on
            energies whose potency increases as the diluent increases.{"\n"}{" "}
            Again, those using the materialistic approach fell into the trap:
            believing that if something cannot be seen or measured, it cannot
            exist. But the Native American understood the power of life force in
            all living beings, particularly with the plant kingdom, and worked
            with it. {"\n"}
            {"\n"}
            {"\n"}
            Celestial Body: The Moon{"\n"}
            {"\n"} The celestial body associated with the south is the moon. The
            Moon is closely connected to Water because the Moon's cycles have
            such a powerful effect on water, and over 70% of the Earth's surface
            is water. Water is present in everything. Even in the driest desert,
            there is some. There is no life without it.{"\n"} Just as the
            magnetic influence of the moons on Earth causes the rise and fall of
            vast oceans, this gravitational attraction affects living beings,
            including ourselves, as the human body is also made up of more than
            70% water.{"\n"} Even the brain is a mass of semi-liquid pulp and is
            affected by the Moon's tides. We live our lives within a vast
            invisible matrix of energy force patterns that affect or influence
            our growth and development.{"\n"} Some of these energy patterns are
            harmonious and therefore useful, but others are disharmonious and
            even destructive.{"\n"} Some influence growth and development, while
            others have the opposite effect and are involved in breakdown and
            dissolution. The Moon has a tremendous effect on the Earth, on
            ourselves, and on all living beings during its orbit of
            approximately 29 days around the Earth.{"\n"} This cycle is a
            measure of Time – one month, a single revolution of the Moon around
            the Earth.{"\n"} The Moon's gravitational power, combined with the
            Earth's movement, causes the rise and fall of vast stretches of
            water in the oceans and the fluctuation of the tides.{"\n"} It
            influences the flow of sap in trees and plants. It affects the
            bodily fluids of the human being, including the rhythm of the blood,
            the female menstrual cycle, and gestation. It affects the fluids of
            the brain. The gravitational effect varies according to the distance
            of the Moon from the Earth.{"\n"} The Moon follows an elliptical
            orbit, so it appears larger when it is closer to the Earth, when its
            power is more than 25% stronger than when it appears at its smallest
            size.{"\n"} There is also a variation in its height in the sky
            because the Moon's orbit is not parallel to the Earth's equator,
            which is why it seems "wobbly" and appears higher in the sky at some
            times than at others.{"\n"} By becoming aware of the pulse of the
            Moon's vibrational force field and gravitational attraction, as well
            as the electromagnetic light force reflected to the Earth through
            the Moon's phases, we can synchronize our own activities with the
            ebb and flow of these invisible and visible energy forces and, thus,
            become attuned and work with the lunar power.{"\n"}
            {"\n"}
            {"\n"}
            Human Aspect: Emotions{"\n"}
            {"\n"} Because of their fluidity, human emotions are compared to
            water, and both Water and Emotions are components of the South (For
            the Northern Hemisphere, and North for the Southern Hemisphere).{" "}
            {"\n"} A dictionary definition of the word emotion is “agitation or
            disturbance of the mind.” According to this definition, emotion is
            mental energy in motion – the energy of the mind absorbing or
            transmitting impressions through feeling.{"\n"} Or, in other words,
            an emotion is mental energy that can be felt. It is the mental
            energy that touches the Spirit – the heart – and we are aware of
            this through feelings.{"\n"} Emotion is, therefore, a powerful
            driving force and is also a desire for expression. Like water, it
            can be stirred up and become murky and out of control. When in this
            condition, it can be debilitating, even destructive, and the mind
            can no longer see clearly through the screen of distortions and
            confusions.{"\n"} Like water, it can roar and surge away, affecting
            everything in its path, unless it can be controlled. We control our
            emotions and direct them, or they control us.{"\n"} Emotions are
            linked to the Past, which is another component of the North, and to
            attachments to people, objects, and conditions.{"\n"} Emotions have
            an affinity with the color Red – the color of strong energy
            expressed in the physical plane.{"\n"} To avoid being tossed back
            and forth in a sea of emotions, we need to free ourselves from past
            attachments that limit us and inhibit us, causing us emotional pain
            in the Present and promising more suffering in the Future.{"\n"}{" "}
            This will be the purpose of the Adventurer's Task at the end of this
            Unit.{"\n"}
            {"\n"}
            {"\n"}Period of Time: The PAST{"\n"}
            {"\n"} The Northern Direction emphasizes past activity.{"\n"} Keep
            in mind that you are on the Path of Medicine to gain knowledge and
            find experiences that will teach you self-mastery and lead you to
            the enlightenment you seek. Thus, on the Path of the North, you need
            to review your recent past and place it under strict scrutiny so
            that you can see how much you are chained by past conditioning, what
            might be trapping you in a routine that seems to have no escape, and
            discover how you can free yourself from it.{"\n"} Most of the
            emotional traumas we suffer originate from past experiences.{"\n"}{" "}
            By holding on to the past, we ensure that they are continuously
            repeated.{"\n"} The solution can be found in a recognition of the
            always-present Now! The past is what has already been, the present
            is what has become, and the future is what is becoming.{"\n"} By
            clearing the waste of the past, we can change the direction of the
            Now and the essence of the future.{"\n"}
            {"\n"}
            {"\n"}Season: Summer{"\n"}
            {"\n"} The season assigned to this direction is summer, because it
            is the season of rapid growth and, therefore, can be compared to
            childhood and youth.{"\n"} Learning is faster in childhood than at
            any other stage of life. If you are persistent and determined in
            your efforts to progress along the Path of Medicine, it will be
            noticeable how much you have “grown” and how much new knowledge you
            have gained in a relatively short period of time, simply by
            completing the Path of the North here.{"\n"}
            {"\n"}
            {"\n"}
            Number: Three{"\n"}
            {"\n"} Each direction in the medicine wheel is assigned numbers in
            the twenty-count.{"\n"} Numbers one through ten are related to
            “external” manifestations, and eleven through twenty are related to
            internal realities. In Native American symbolism, the number three
            was considered the result of the union of the masculine and
            conceptual “one” with the “two” feminine and receptive.{"\n"}{" "}
            “Three” was the “child” of the union of “one” and “two,” so it had a
            youthful quality: the unsophisticated nature of a growing child, the
            characteristic of a childlike wonder that has been emphasized on the
            South Path.{"\n"} Three has the freshness and spontaneity that can
            be associated with youth – and how much we desire to maintain youth
            as we age! Three is also considered the number of family
            relationships – father, mother, and child.{"\n"} It is related to
            the relationship of the person with the divinity – that is, as a
            ‘child’ to a God Father and a Goddess Mother. {"\n"} A triad of a
            divinity is found in most cultures – Sskwahuan, Wahkwaahuan, and
            Wakan-Tanka, from Native Americans; Osiris, Isis, and Horus from the
            ancient Egyptians; Father, Son, and Holy Spirit from Christians;
            Vishnu, Shiva, and Kali from Hindus, and so on.{"\n"} Thirteen has
            the quality of acting as an “inner opener” – that is, making
            knowledge available from the “inside” rather than from external
            sources.{"\n"} Thirteen is closely related to death and rebirth and
            to change through the transition from one level of existence to
            another.{"\n"} Due to its mystical qualities and value as a key to
            mysteries, it was deliberately defamed in medieval Europe and
            associated with bad luck and misfortune by those who wanted to keep
            people in ignorance and superstition. Thirteen helps the development
            of the Spiritual Self, or Higher Self, and is associated with the
            spiritual energy of all plants and the receptive-creative Yin, the
            feminine force of life, which is why thirteen is also related to
            Mother Earth.{"\n"}
            {"\n"}
            {"\n"}Enemy: Fear{"\n"}
            {"\n"} Every step in learning is a journey into unknown territory,
            and sometimes we fear the unknown simply because it is unknown. On
            the medicine path, you are on the ground and possibly unfamiliar
            with yourself. {"\n"} So, in the South, when entering the unknown,
            you are facing your first main enemy – FEAR. There are two types of
            fear – the fear of reality and the illusory fear. The fear of
            reality is the fear of the real.{"\n"} It is a positive type of fear
            because anything that poses a possible threat to your survival is a
            real fear.{"\n"} Illusory fear is the type of fear that we
            experience most of the time. Whereas the fear of reality is about
            the present – the immediate threat, the immediate danger – Illusory
            fear is about what may happen in the future, IF …! {"\n"} The fear
            of what may happen if you can't find the money to pay a bill. The
            fear of what may happen if you don’t meet your sales quota or finish
            all the work expected of you at your job; what may happen if you
            become redundant.{"\n"} The fear of losing a boyfriend or
            girlfriend. The fear of failing a driving test or an exam. The fear
            of not getting a raise or a promotion.{"\n"} Illusory fear is a fear
            of the type “what will happen if.”{"\n"} It is the fear of something
            that hasn’t started happening yet and, most likely, may never
            happen. It is the fear of the unknown. It is not the fear of the
            thing or condition, but of a possible unknown outcome of that
            condition.{"\n"} It is illusory because it is the fear of something
            that is not truly present. It is the illusory fear that needs to be
            overcome.{"\n"} This is the fear that you must defeat. But how? By
            not running from it. Facing it with mental clarity. Applying clarity
            of spirit to each of the examples I gave, and many more, the fear
            itself would quickly disappear because the knowledge of how to
            handle the situation would soon come to you.{"\n"}
            {"\n"}
            {"\n"}Manifestation: MUSIC{"\n"}
            {"\n"} Each directional Power finds expression for its essential
            quality in a specific human activity or group of activities.{"\n"}{" "}
            According to the teachings of Medicine, the essential nature of the
            South is manifested in music, singing, and dancing – activities that
            can be performed with youthful exuberance, free of inhibitions and
            psychological problems.{"\n"} Native Americans found great joy in
            such activities and considered them to be food for the soul and fuel
            for the spirit.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il potere dello Spirito dell’Estate è Crescita, Innocenza, Fede e
            Fiducia.{"\n"} Dove possiamo ritrovare la meraviglia di essere vivi
            e possiamo essere come bambini. È il Portale delle Emozioni e
            dell’Elemento Acqua.{"\n"} Nel pensiero nativo, così come non
            possiamo bloccare le acque di un fiume, non possiamo nemmeno
            bloccare le nostre emozioni. In altre parole, lasciare fluire.{"\n"}{" "}
            Rappresenta anche il Regno Vegetale. La Direzione Nord (per
            l’Emisfero Sud, la Direzione Sud per l’Emisfero Nord) porta i doni
            di energia, adattabilità, maturità, divertimento e umorismo.{"\n"}{" "}
            Questo è il momento di studiare le relazioni, quando tutto nel
            nostro mondo diventa veramente possibile, quando cercare l’amore è
            decisamente una delle nostre forze guida e quando siamo capaci di
            dare e ricevere amore in molti modi.{"\n"} Il potere della Direzione
            Estiva è misterioso, un potere di cambiamento e crescita. È per
            esplorare l’amore, le relazioni, il mondo intorno a te e scoprire
            chi sei.{"\n"} La Direzione Nord (Emisfero Sud) è il luogo del
            cuore, delle emozioni.{"\n"} È lì che andiamo quando abbiamo bisogno
            di curare il nostro cuore, quando dobbiamo imparare ad amare, quando
            dobbiamo imparare a lasciar andare tutto ciò che non è amore (odio,
            paura, invidia, gelosia, rabbia…). Insegna anche sulla sessualità e
            sulla sensualità.{"\n"} Tutti i desideri possono essere realizzati
            perché l’energia vitale è al suo apice.{"\n"} È un’opportunità,
            all’inizio dell’anno, per rivedere gli insegnamenti dell’anno
            passato. Per stabilire un impegno con te stesso, per la tua
            crescita, in un altro ciclo della tua missione terrestre.{"\n"} La
            Direzione Nord della Ruota di Medicina nell’Emisfero Sud
            (Nell’Emisfero Nord è Sud) è il luogo per ritornare all’innocenza e
            acquisire fede e fiducia.{"\n"} È il luogo dove la nostra fede viene
            messa alla prova e confermata, e il luogo dove possiamo ritrovare la
            meraviglia di essere vivi e possiamo essere come bambini.{"\n"} È il
            Portale delle Emozioni e dell’Elemento Acqua. I Venti del Nord in
            estate ci invitano a trascorrere più tempo all’aperto, a godere del
            caldo sole estivo, quando tutto nel mondo naturale fiorisce ed emana
            fragranza.{"\n"} Quindi, il Nord è associato alla crescita rapida,
            alla fioritura e allo sviluppo.{"\n"} Gran parte della ricerca sta
            nella comprensione di: Chi sono? Qual è la mia missione? Come può la
            mia missione aiutare a rendere il mondo un posto migliore? Cosa mi
            rende felice? Cosa devo imparare per diventare ciò che “voglio”?
            Come posso ottenere le risorse materiali necessarie per mettere in
            ordine la mia vita, facendo ciò che amo, esercitando appieno i miei
            talenti e le mie abilità? Come posso esprimermi con eccellenza?
            {"\n"} Il Nord è il Cammino della Fiducia e dell’Innocenza e a volte
            è chiamato il Cammino del Bambino. Perciò, per percorrerlo, dobbiamo
            risvegliare il ‘bambino’ dentro di noi—quella parte di noi che può
            stabilire relazioni attraverso l’esercizio della fede.{"\n"} Fiducia
            e innocenza che avevamo da bambini, quando guardavamo la vita con
            meraviglia e il futuro con eccitazione anticipata.{"\n"} Il Nord è
            la direzione che ci aiuta a vedere le cose con dettagli chiari e a
            iniziare a percepire la nostra vera natura.{"\n"} L’antico
            ammonimento “Uomo, conosci te stesso” andava ben oltre il sostenere
            un corso di analisi psicologica.{"\n"} Significava conoscere il Sé
            per ciò che realmente è—perché il Sé è la cosa più sacra e preziosa
            che ognuno di noi possiede.{"\n"} Questo era pienamente compreso dai
            Maestri della Saggezza, il cui ammonimento che per amare gli altri
            devi prima imparare ad amare il tuo Sé, implicava la scoperta
            dell’aspetto più elevato del proprio essere.{"\n"} Il Viaggio del
            Nord è dove inizia il processo di trovare il tuo vero sé.{"\n"} Nel
            Sud, ti libererai degli ostacoli che oscurano il tuo Vero Sé e ti
            impediscono di vedere il tuo Essere nella sua vera luce.{"\n"} I
            dodici componenti del Sud che considereremo sono:{"\n"}
            {"\n"}
            {"\n"} Qualità: Fiducia e Innocenza{"\n"}
            {"\n"} Gli amerindi talvolta si riferivano al Sud come “il sentiero
            del bambino” perché era associato al bambino che cresceva nel corpo
            e nella mente verso la maturità, ma manteneva un atteggiamento di
            fiducia e innocenza, non contaminato dal cinismo, dall’arroganza e
            dall’insensibilità del mondo adulto.{"\n"} Puoi allinearti con la
            qualità speciale del Sud rifiutandoti di lasciarti contaminare dal
            cinismo o dall’arroganza che derivano dalla convinzione di “sapere
            già,” e rifiutandoti di essere macchiato da colpa e imbarazzo.{"\n"}{" "}
            Lo Spirito del Nord ti aiuta ad acquisire cose di valore spirituale
            e duraturo e, come un bambino, a crescere rapidamente verso la
            maturità.{"\n"} Ma questa maturità spirituale può venire solo
            adottando un atteggiamento di fiducia e innocenza. Seguiranno quindi
            una comprensione della vera identità di sé stessi e un’accettazione,
            come “adulti” spirituali, del controllo sul proprio destino.{"\n"}{" "}
            La qualità della fiducia e dell’innocenza richiesta non è quella
            perduta della ingenuità e dell’immaturità, ma quella che rende
            l’apprendimento un’avventura, trova entusiasmo nella scoperta e
            gioia nella consapevolezza che porta la nuova conoscenza.{"\n"}{" "}
            Significa non permettere che paure illusorie, valori falsi, doppi
            standard e complessi di colpa della vita adulta rovinino e
            danneggino il tuo progresso. Significa fidarsi dei propri istinti e
            non lasciarsi influenzare da ciò che gli altri potrebbero pensare o
            dire.{"\n"}
            Osserva come il bambino giovane e innocente si gode la pura
            esperienza del vivere, e con quanta rapidità apprende da ogni nuova
            avventura, e comincerai ad apprezzare il significato della qualità
            del Nord.{"\n"} Hai bisogno di recuperare un po’ dello stupore e
            dell’entusiasmo che avevi da bambino e applicarlo al processo di
            vivere.{"\n"} Allora avrai acquisito un gusto per la vita che deriva
            dalla consapevolezza che la vita è pensata per essere un’esperienza
            meravigliosa da assaporare e godere, non solo da tollerare o
            sopportare.{"\n"} Prenditi un po’ di tempo ora per immergerti nella
            qualità del Nord.{"\n"}
            {"\n"}
            {"\n"}
            {"\n"} Animale del Nord: Coyote {"\n"}
            {"\n"} Di Sun Bear: L'animale associato a Shawnodese è il coyote.{" "}
            {"\n"} Per i nativi, il coyote non è un imbroglione, ma piuttosto un
            astuto, colui che può costringere le persone a imparare anche quando
            non vogliono. Con i suoi trucchi, il coyote spinge i suoi rapporti a
            crescere.{"\n"} Essendo ingannati e imparando lezioni necessarie, i
            figli della Terra imparano a fidarsi della vita e delle lezioni che
            essa porta.{"\n"} Essendo ostinati come la maggior parte dei figli
            della Terra, i trucchi sono spesso necessari per crescere. Le
            persone si sentono a proprio agio come sono e non vogliono
            affrontare il dolore che la crescita rapida a volte porta.{"\n"}{" "}
            Esiste un intero blocco della mitologia nativa che tratta del
            Coyote, il vecchio ingannatore che talvolta è il Creatore e altre
            volte il “Clown Sacro.”{"\n"} Il Coyote è uno degli animali più
            sacri e più profani.{"\n"} Come lo Svasso (totem della Nonna Luna) e
            la Rana (Clan delle Rane), è un potente cantante, il cui canto può
            condurre gli esseri umani alla libertà o alla paura.{"\n"} Il Coyote
            porta crescita a chiunque, ma per coloro che amano la vita, dona il
            regalo della “fiducia.” {"\n"} È la fiducia nella vita che ci
            insegna la vera sopravvivenza e la tolleranza.{"\n"} Il coyote può
            essere trovato in molte aree rurali del Nord America.{"\n"} Più
            piccolo di un lupo, il coyote si è dimostrato adattabile
            all'invasione della civiltà. Gli attributi più distintivi del coyote
            sono la sua agilità, i sensi acuti, i tratti simili a un cane e il
            suo canto.{"\n"} In molte notti in campagna, i guaiti e gli ululati
            del coyote rompono il silenzio della notte, ricordando a tutti i Due
            Gambe che possono sentirli che, sebbene ora dominino la terra, non
            sono l'unica specie esistente.{"\n"} Impariamo molto sulle persone
            dal modo in cui reagiscono al Coyote.{"\n"} Coloro che amano la vita
            e la Terra sono ispirati dal canto del Coyote e dalla sua capacità
            di aggirare la civiltà, che ha cercato di distruggerlo.{"\n"} Coloro
            che temono tutto ciò che è naturale temono anche il coyote e cercano
            di distruggerlo sparandogli, avvelenandolo o intrappolandolo.{"\n"}{" "}
            I timorosi descrivono il coyote come un ladro, colui che mangia le
            creazioni domestiche come le galline.{"\n"} Il coyote preferisce
            cibo naturale, come roditori, topi o conigli, ma occasionalmente si
            nutre di una gallina o di un altro piccolo animale domestico in aree
            in cui la civiltà ha sterminato tutte le sue prede naturali.{"\n"}{" "}
            Quando lavora con Shawnodese, il manto del Coyote è chiazzato con il
            Sole di mezzogiorno che splende sulla Terra.{"\n"} A volte, quando è
            al servizio di Shawnodese, il manto del Coyote è così chiazzato da
            sembrare scomparire.{"\n"} È in questi momenti che compie il suo
            lavoro più potente. In questi momenti, il potere di Shawnodese e del
            coyote è necessario per aiutare le persone a crescere e continuare a
            imparare le lezioni che sono state messe sulla Terra per essere
            apprese.{"\n"} Il coyote di Shawnodese ha un mantello giallo, il
            colore del sole di mezzogiorno, macchiato con il marrone della terra
            d'estate. I colori di Shawnodese sono il verde delle piante che
            crescono rapidamente e il giallo del sole estivo, che fornisce
            calore e luce per consentire la crescita.{"\n"} Il verde è il colore
            della crescita, della fiducia, della guarigione e del ripristino
            dell'energia, mentre il giallo è il colore dell'intelligenza, della
            ricettività mentale e della saggezza naturale.{"\n"} Coloro che
            nascono sotto le lune di Shawnodese – la Luna Forte del Sole, la
            Luna delle Bacche Mature e la Luna del Raccolto – e coloro che
            attraversano le fasi di queste lune durante il loro viaggio intorno
            alla ruota, sperimenteranno una crescita rapida e tutte le lezioni
            che ciò porterà loro.{"\n"} Le persone delle lune di Shawnodese sono
            quelle con la capacità di una crescita rapida, a tutti i livelli,
            una volta che hanno stabilito saldamente le loro fondamenta sulla
            Terra.{"\n"}
            {"\n"}
            {"\n"}
            {"\n"} Elemento: Acqua {"\n"}
            {"\n"} Possiamo imparare di più sullo Spirito del Sud e sul modo in
            cui la sua essenza si esprime attraverso l’Elemento a cui è
            associato nella cosmologia dei Nativi Americani: l’Acqua. {"\n"}{" "}
            Come abbiamo scoperto in precedenza, un elemento non è la sostanza
            fisica che porta il suo nome, ma piuttosto l’essenza o lo spirito
            che caratterizza quella sostanza fisica. {"\n"} L’acqua fisica è
            fluida e la fluidità è una caratteristica dell’Acqua Elementare.{" "}
            {"\n"} L’acqua scorre verso il basso da un livello all’altro e, se
            posta in un contenitore, assume immediatamente la forma del suo
            stampo. {"\n"} L’Acqua Elementare si comporta in modo simile,
            assumendo immediatamente la “forma” della Forma-Pensiero, che
            fornisce la matrice di ciò che diventerà una manifestazione fisica.{" "}
            {"\n"} L’acqua è il grande “intermediario” – il mezzo tra solidità e
            luminosità – poiché l’acqua fisica può essere solidificata in
            ghiaccio o trasformata attraverso il fuoco in vapore e poi in
            energia radiante. {"\n"} L’Acqua Elementare si colloca anche tra lo
            splendore del Fuoco e la mobilità dell’Aria, da un lato, e l’inerzia
            della Terra, dall’altro. {"\n"} Senza il movimento fluido e
            penetrante dell’acqua, la Terra si seccherebbe e diventerebbe
            sterile, e nulla crescerebbe. {"\n"} Senza il flusso delle emozioni,
            anche gli esseri umani diventano “aridi,” fragili e sterili. {"\n"}{" "}
            Le nostre emozioni e i nostri sentimenti sono un’espressione
            dell’Acqua Elementare. {"\n"} L’emozione è l’energia che può essere
            percepita, che tocca il cuore – lo Spirito – ed è per questo che
            spesso viene confusa con l’amore. {"\n"} L’associazione dell’acqua
            con l’emozione è riflessa in detti come “inondazioni di emozioni” e
            “acque di compassione.” {"\n"} Anche l’amore deve poter fluire. Non
            deve essere imbottigliato, o ristagnerà e persino si inacidirà.
            Quindi, lascia che il tuo amore fluisca. {"\n"} Lascialo muoversi
            dolcemente verso coloro a cui tieni. Non cercare di contenerlo.{" "}
            {"\n"} Lascia che i tuoi veri sentimenti trovino espressione. Cerca
            modi per far sapere ai tuoi cari che tieni a loro. {"\n"} Non
            confondere l’amore con il piacere. L’amore è essenzialmente una
            forza spirituale, non un’attività mentale o fisica. {"\n"}{" "}
            Contrariamente alla credenza popolare, non è necessario ‘provare
            piacere’ per qualcuno per esprimere affetto amorevole nei suoi
            confronti. L’amore desidera solo ciò che è nel miglior interesse di
            chi o di coloro a cui viene espresso. {"\n"} Desidera solo il loro
            bene. Questo è ciò che Gesù intendeva con la sua esortazione ad
            amarci gli uni gli altri. {"\n"} Perché l’amore è un balsamo
            curativo che calma e conforta, armonizza e unisce. È uno dei grandi
            poteri del cosmo. {"\n"} Il piacere, invece, ha a che fare con la
            mente. {"\n"} Implica essere soddisfatti dell’oggetto del proprio
            piacere. È trovare qualcosa o qualcuno piacevole, gradevole,
            compatibile. Scegliamo le cose che ci piacciono e le persone che ci
            piacciono, ed è un’attività della mente. {"\n"} L’amore viene dal
            cuore, quindi non è necessario ‘provare piacere’ per qualcuno per
            mostrare amore per lui. {"\n"} L’amore è essenzialmente un’attività
            dello spirito. {"\n"} Applicata alle emozioni, l’acqua suggerisce
            profondità di sentimento, ma la sua polarità negativa sarebbe
            l’inefficacia. {"\n"} Le persone che manifestano gli aspetti
            negativi dell’acqua nelle loro azioni sono talvolta definite
            “inconsistenti,” suggerendo una mancanza di forma che manca di
            direzione o del potere di canalizzare. {"\n"} Le persone che sono
            “indolenti” riflettono una qualità negativa dell’Acqua in uno stato
            stagnante, poiché si sono lasciate assorbire e saturare dalla
            propria energia emotiva e proiettano quell’esperienza appiccicosa
            verso l’esterno. {"\n"} Gli aspetti negativi dell’acqua possono
            essere distruttivi, erosivi e divisivi, poiché possono diluire,
            dissolvere e rompere qualsiasi cosa penetrino. {"\n"} Nel suo
            aspetto positivo, l’acqua è vivificante, nutriente, rinfrescante,
            calmante e protettiva. {"\n"} Queste qualità positive e negative
            possono essere applicate anche all’“acqua delle emozioni,” poiché
            gli effetti emotivi possono essere curativi e restaurativi,
            confortanti e calmanti, così come sconvolgenti e turbativi, violenti
            e distruttivi. {"\n"} Gli antichi consideravano l’acqua come un
            aspetto femminile della Fonte della vita e la associavano alla
            fertilità. {"\n"} Per loro, una sorgente era la fonte di un
            torrente, e il torrente dava origine al lago; così, l’acqua era
            intesa come un’espressione del processo yin. {"\n"} L’acqua è usata
            da uno sciamano come un grande agente di guarigione. {"\n"} Dissolve
            e porta le impurità dove non possono causare danni – di solito
            restituendole alla Terra per trasmutare gli elementi originali da
            cui provenivano. {"\n"} {"\n"} {"\n"}
            Colore: ROSSO{"\n"}
            {"\n"} Il colore è un modo per fare connessioni a tutti i livelli di
            esperienza.{"\n"}
            Il colore ha un'influenza potente e può influenzarci positivamente o
            negativamente, fisicamente, emotivamente, mentalmente e
            spiritualmente.{"\n"} Cambiare i colori della decorazione nella
            nostra casa o al lavoro può portare a un cambiamento significativo
            nel modo in cui ci sentiamo in questi luoghi.{"\n"} Potremmo
            preferire fare certe attività in una stanza piuttosto che in
            un'altra, e questo può dipendere dall'atmosfera creata dalla sua
            decorazione, così come dalla direzione della stanza.{"\n"} Alcuni
            colori o sfumature di colori sono tranquilli e rilassanti, mentre
            altri stimolano il nostro sistema energetico.{"\n"} Il rosso è il
            colore generalmente associato al sud della ruota della medicina,
            perché è il colore del sangue ossigenato e quindi rappresenta la
            vita, la vitalità, la salute e il vigore.{"\n"} Nel suo aspetto
            positivo, il rosso è il colore legato alla forza, al coraggio,
            all'energia fisica e alla potenza sessuale.{"\n"} Il rosso è il
            colore delle passioni, quindi può essere volatile e, nel suo lato
            negativo, è associato alla lussuria, alla rabbia e alla malizia.
            {"\n"} Il rosso è caldo, il colore del sud, dove il sole è al suo
            culmine a mezzogiorno nell'emisfero settentrionale.{"\n"} Le persone
            con pelle rossa riflettono alcune delle qualità del Nord, poiché
            sono anche calde e hanno una semplicità infantile apparente e una
            natura fiduciosa.{"\n"} Gli indiani d'America indicano questo nel
            modo in cui imparano meglio – attraverso il gioco, il canto, la
            danza e il canto.{"\n"} Infatti, cantare, danzare e cantare sono
            modi per sintonizzarsi con i poteri del sud.{"\n"} Il rosso è il
            colore delle emozioni e delle nostre acque primarie: il sangue.
            {"\n"}
            {"\n"}
            {"\n"}
            Regno del Sud: Regno Vegetale{"\n"}
            {"\n"} Se consulti la ruota dell'alchimia di base (dall'emisfero
            sud), vedrai che il Nord è il regno del dare.{"\n"} È il Luogo dei
            Guaritori e le Piante sono i grandi donatori di energia. Le piante e
            gli alberi si donano al pianeta.{"\n"} Si offrono come cibo e
            rifugio per le creature dei regni Animale e Umano.{"\n"} Offrono
            bellezza, armonia ed equilibrio al suolo in cui sono radicate e a
            tutto l'ambiente in cui vivono.{"\n"} Le piante possono fare quasi
            tutto ciò che può fare un animale, ma più lentamente.{"\n"} Secondo
            il professor Malcolm Wilkins del dipartimento di botanica
            dell'Università di Glasgow, le piante possono contare, dire l'ora,
            chiedere acqua e rispondere al suono.{"\n"} Inoltre, hanno memoria,
            sistema nervoso, visione dei colori e senso del gusto. Puoi imparare
            molto dallo Spirito e dall'Anima del regno vegetale.{"\n"} Le piante
            “riconoscono” i loro veri genitori come il Sole e la Terra e si
            fidano di loro, con la fiducia di un bambino innocente. Ogni pianta
            inizia la vita come un seme della pianta che ha vissuto prima di
            essa.{"\n"} Viene nutrita nell'oscurità del grembo della Terra
            finché il Sole non attiva i nutrienti interni per farla germogliare
            e penetrare nella superficie della Terra per assorbire la luce
            solare, crescere, svilupparsi e raggiungere la maturità per
            seminarsi e garantire la continuità della vita, vivendo nella
            fiducia che il Sole e la Terra se ne prenderanno cura. {"\n"} Il
            Nord è la direzione per imparare sul regno delle piante, non solo
            attraverso l'apprendimento da libri, sebbene questo possa aiutarti a
            identificare diverse piante, alberi, arbusti e fiori, ma conoscendo
            il regno vegetale, essendo un avventuriero spirituale.{"\n"} Devi
            riconoscere che le piante e gli alberi sono esseri viventi e, una
            volta che sviluppi un'affinità con le piante, scoprirai che
            risponderanno a te.{"\n"} Potresti anche scoprire di aver acquisito
            “dita verdi”.{"\n"} Osserva come le piante prosperano in
            un'atmosfera felice e armoniosa, ma sembrano appassire e morire in
            un ambiente negativo o turbolento o dove c'è dolore e sofferenza.
            {"\n"} La condizione delle piante in casa in qualsiasi casa può dire
            molto sulle persone che ci vivono. Lo stesso vale per i giardini
            frontali e posteriori.{"\n"} È al regno vegetale che ci rivolgiamo
            per scoprire i Grandi Guaritori, poiché piante e alberi sono i
            restauratori dell'armonia e dell'equilibrio per il regno minerale
            che si trova "sotto" di loro nell'evoluzione e che controllano,
            vivono, trasmutano ed esprimono a un livello superiore di
            vibrazione.{"\n"} Grazie alla loro capacità di comunicare con la
            natura e alla loro attenta osservazione dell'ambiente naturale, gli
            indiani d'America avevano una conoscenza approfondita di ciò che
            oggi viene definito "medicina popolare".{"\n"} Infatti, la medicina
            popolare che costituisce una parte importante di ciò che è diventato
            noto come “Medicina Alternativa”, particolarmente negli Stati Uniti,
            copre molti dei rimedi naturali di guarigione degli indiani
            d'America.{"\n"} Purtroppo, come con altre cose, poco credito è
            stato dato agli indiani. Ci sono voluti secoli prima che venisse
            data seria attenzione alle capacità curative degli indiani d'America
            e poi, secondo V. J. Vogei nel suo libro *North American Indian
            Medicine*, “si scoprì che un numero sorprendente di farmaci indigeni
            era di enorme valore.” {"\n"} Il dottor Frederick Banting, il
            scopritore dell'insulina, ha accreditato ai guaritori indigeni il
            “lavoro farmaceutico” che lo ha portato alla scoperta.{"\n"} Nel
            1787, un medico tedesco, il dottor Johann David Schopt, pubblicò un
            elenco di oltre 300 rimedi vegetali in uso nel lato orientale degli
            Stati Uniti, molti dei quali furono presumibilmente appresi dagli
            indiani d'America.{"\n"} Inoltre, più di 200 farmaci indigeni in uso
            da una o più delle principali tribù furono elencati nella Farmacopea
            degli Stati Uniti d'America dalla sua prima apparizione nel 1820 e
            nel Formulario Nazionale da quando è iniziato nel 1888.{"\n"} Il
            fatto è che gli indiani d'America avevano una profonda conoscenza
            della loro flora nativa, sebbene gran parte di essa sia stata
            oscurata da coloro che etichettarono questi rimedi di guarigione
            come “irrazionali”.{"\n"} Un atteggiamento simile è stato preso
            dall'ortodossia nei confronti della "medicina alternativa".{"\n"}{" "}
            Lasciami fare un esempio. Poiché l'analisi chimica dei rimedi
            floreali sviluppati dal defunto Dr. Edward Bach, un rinomato medico
            e batteriologo di Londra, non riuscì a identificare una sostanza
            fisica nei rimedi oltre l'acqua e un liquido conservante, furono
            largamente ignorati dagli ortodossi.{"\n"} L'agente curativo in ogni
            rimedio, tuttavia, non è una sostanza fisica, ma la forza vitale
            invisibile della pianta stessa.{"\n"} I rimedi sono prodotti
            omeopaticamente, facendo affidamento su energie la cui potenza
            aumenta man mano che aumenta il diluente.{"\n"} Ancora una volta,
            coloro che usano l'approccio materialista sono caduti nella
            trappola: credere che, se qualcosa non può essere visto o misurato,
            non può esistere. Ma l'indiano comprendeva il potere della forza
            vitale in tutti gli esseri viventi, in particolare con il regno
            vegetale, e ci lavorava. {"\n"}
            {"\n"}
            {"\n"}
            Corpo Celeste: La Luna{"\n"}
            {"\n"} Il corpo celeste associato al sud è la luna. La Luna è
            strettamente legata all'Acqua perché i cicli della Luna hanno un
            effetto così potente sull'acqua, e oltre il 70% della superficie
            della Terra è acqua. L'acqua è presente in tutto. Anche nel deserto
            più secco ce n'è una certa quantità. Non c'è vita senza di essa.
            {"\n"} Proprio come l'influenza magnetica delle lune sulla Terra
            causa l'innalzamento e l'abbassamento di vasti oceani, questa
            attrazione gravitazionale influisce sugli esseri viventi, compresi
            noi stessi, poiché il corpo umano è composto anche da più del 70% di
            acqua.{"\n"} Anche il cervello è una massa di polpa semiliquida ed è
            influenzato dalle maree della Luna. Viviamo le nostre vite
            all'interno di una vasta matrice invisibile di forze energetiche che
            influenzano o determinano la nostra crescita e sviluppo.{"\n"}{" "}
            Alcuni di questi modelli energetici sono armoniosi e quindi utili,
            ma altri sono disarmonici e addirittura distruttivi.{"\n"} Alcuni
            influenzano la crescita e lo sviluppo, altri hanno l'effetto opposto
            e sono coinvolti nella rottura e dissoluzione. La Luna ha un enorme
            effetto sulla Terra, su noi stessi e su tutti gli esseri viventi
            durante la sua orbita di circa 29 giorni attorno alla Terra.{"\n"}{" "}
            Questo ciclo è una misura del Tempo – un mese, una singola
            rivoluzione della Luna attorno alla Terra.{"\n"} Il potere
            gravitazionale della Luna, combinato con il movimento della Terra,
            causa l'innalzamento e l'abbassamento di vaste distese d'acqua negli
            oceani e la fluttuazione delle maree.{"\n"} Influenza il flusso
            della linfa negli alberi e nelle piante. Influenza i fluidi corporei
            dell'essere umano, incluso il ritmo del sangue, il ciclo mestruale
            femminile e la gestazione. Influisce sui fluidi del cervello.
            L'effetto gravitazionale varia in base alla distanza della Luna
            dalla Terra.{"\n"} La Luna segue un'orbita ellittica, quindi sembra
            più grande quando è più vicina alla Terra, quando il suo potere è
            superiore del 25% rispetto a quando appare nella sua dimensione più
            piccola.{"\n"} C'è anche una variazione nella sua altezza nel cielo,
            perché l'orbita della Luna non è parallela all'equatore della Terra,
            perciò sembra "oscillante" e appare più alta nel cielo in alcuni
            periodi rispetto ad altri.{"\n"} Prendendo coscienza del battito del
            campo di forza vibratorio e dell'attrazione gravitazionale della
            Luna e della forza della luce elettromagnetica riflessa sulla Terra
            attraverso le fasi della Luna, possiamo sincronizzare le nostre
            attività con il flusso e riflusso di queste forze invisibili e
            visibili, e quindi diventare sintonizzati e lavorare con il potere
            lunare.{"\n"}
            {"\n"}
            {"\n"}
            Aspetto Umano: Le Emozioni{"\n"}
            {"\n"} A causa della loro fluidità, le emozioni umane sono
            paragonate all'acqua, e sia l'Acqua che le Emozioni sono componenti
            del Sud (Per l'Emisfero Settentrionale, e Nord per l'Emisfero
            Meridionale). {"\n"} Una definizione del dizionario della parola
            emozione è “agitazione o turbamento della mente.” Secondo questa
            definizione, l'emozione è energia mentale in movimento – l'energia
            della mente che assorbe o trasmette impressioni attraverso il
            sentimento.{"\n"} O, in altre parole, un'emozione è energia mentale
            che può essere sentita. È l'energia mentale che tocca lo Spirito –
            il cuore – e ne siamo consapevoli attraverso i sentimenti.{"\n"}{" "}
            L'emozione è, quindi, una potente forza motrice ed è anche un
            desiderio di espressione. Come l'acqua, può essere agitata e
            diventare torbida e fuori controllo. Quando in questa condizione,
            può essere debilitante, addirittura distruttiva, e la mente non può
            più vedere chiaramente attraverso lo schermo di distorsioni e
            confusioni.{"\n"} Come l'acqua, può ruggire e scorrere via,
            influenzando tutto ciò che incontra sul suo cammino, a meno che non
            possa essere controllata. Noi controlliamo le nostre emozioni e le
            dirigiamo, o sono loro a controllarci.{"\n"} Le emozioni sono legate
            al Passato, che è un altro componente del Nord, e agli attaccamenti
            alle persone, agli oggetti e alle condizioni.{"\n"} Le emozioni
            hanno un'affinità con il colore Rosso – il colore dell'energia forte
            espressa nel piano fisico.{"\n"} Per evitare di essere sbattuti da
            una parte all'altra in un mare di emozioni, dobbiamo liberarci dagli
            attaccamenti passati che ci limitano e ci inibiscono, causandoci
            dolore emotivo nel Presente e promettendo ulteriore sofferenza nel
            Futuro.{"\n"} Questo sarà lo scopo del Compito dell'Aventuriero alla
            fine di questa Unità.{"\n"}
            {"\n"}
            {"\n"}Periodo di Tempo: Il PASSATO{"\n"}
            {"\n"} La Direzione del Nord enfatizza l'attività passata.{"\n"}{" "}
            Tieni presente che sei sul Cammino della Medicina per acquisire
            conoscenza e trovare esperienze che ti insegnino l'autodominio e ti
            conducano all'illuminazione che cerchi. Così, nel Cammino del Nord,
            devi esaminare il tuo passato recente e metterlo sotto rigoroso
            scrutinio per vedere quanto sei legato da condizionamenti passati,
            cosa potrebbe tenerti intrappolato in una routine dalla quale sembra
            non esserci via di uscita, e scoprire come puoi liberarti da essi.
            {"\n"} La maggior parte dei traumi emotivi che soffriamo hanno le
            loro origini nelle esperienze passate.{"\n"} Aggrappandoci al
            passato, garantiamo che vengano ripetuti continuamente.{"\n"} La
            soluzione può essere trovata nel riconoscimento dell'ora sempre
            presente! Il passato è ciò che è già stato, il presente è ciò che è
            diventato, e il futuro è ciò che sta diventando.{"\n"} Liberandoci
            della spazzatura del passato, possiamo cambiare la direzione
            dell'Ora e l'essenza del futuro.{"\n"}
            {"\n"}
            {"\n"}Stagione: Estate{"\n"}
            {"\n"} La stagione assegnata a questa direzione è l'estate, perché è
            la stagione della crescita rapida e, quindi, può essere paragonata
            all'infanzia e alla giovinezza.{"\n"} L'apprendimento è più veloce
            nell'infanzia che in qualsiasi altra fase della vita. Se sei
            persistente e determinato nei tuoi sforzi per progredire lungo il
            Cammino della Medicina, sarà evidente quanto sei “cresciuto” e
            quanto nuovo sapere hai acquisito in un periodo relativamente breve
            di tempo, semplicemente completando il Cammino del Nord qui.{"\n"}
            {"\n"}
            {"\n"}
            Numero: Tre{"\n"}
            {"\n"} Ogni direzione nella ruota della medicina è assegnata a
            numeri nel conteggio di venti.{"\n"} I numeri da uno a dieci sono
            legati alle manifestazioni “esterne” e da undici a venti alle realtà
            interne. Nel simbolismo dei nativi americani, il numero tre era
            considerato il risultato dell’unione del maschile e concettuale
            “uno” con i “due” femminili e ricettivi.{"\n"} “Tre” era il “figlio”
            dell’unione di “uno” e “due”, quindi aveva una qualità giovanile: la
            natura poco sofisticata di un bambino che cresce, la caratteristica
            di una meraviglia infantile che è stata tanto enfatizzata nel
            Cammino del Sud.{"\n"} Tre ha la freschezza e la spontaneità che si
            possono associare alla giovinezza – e quanto desideriamo mantenere
            la giovinezza mentre invecchiamo! Tre è anche considerato il numero
            delle relazioni familiari – padre, madre e figlio.{"\n"} È legato
            alla relazione della persona con la divinità – cioè, come una
            ‘bambino’ per un Dio Padre e una Dea Madre. {"\n"} Una triade di una
            divinità si trova in molte culture – Sskwahuan, Wahkwaahuan e
            Wakan-Tanka, tra i nativi americani; Osiride, Iside e Horus degli
            antichi egizi; Padre, Figlio e Spirito Santo dei cristiani; Vishnu,
            Shiva e Kali degli indù, e così via.{"\n"} Tredici ha la qualità di
            agire come un “apritore interiore” – cioè, rendere il sapere
            disponibile dall’“interno” piuttosto che da fonti esterne.{"\n"}{" "}
            Tredici è strettamente legato alla morte e alla rinascita e al
            cambiamento attraverso la transizione da un livello di esistenza a
            un altro.{"\n"} A causa delle sue qualità mistiche e del suo valore
            come chiave per i misteri, è stato deliberatamente diffamato
            nell’Europa medievale e associato alla sfortuna e al malessere di
            coloro che volevano tenere le persone nell’ignoranza e nella
            superstizione. Tredici aiuta lo sviluppo del Sé Spirituale, o del Sé
            Superiore, ed è associato con l’energia spirituale di tutte le
            piante e lo Yin ricettivo-creativo, la forza femminile della vita,
            ed è per questo che tredici è anche legato alla Madre Terra.{"\n"}
            {"\n"}
            {"\n"}Nemico: Paura{"\n"}
            {"\n"} Ogni passo nell'apprendimento è un viaggio in territorio
            sconosciuto e a volte temiamo l'ignoto semplicemente perché è
            l'ignoto. Nel cammino della medicina, sei sul terreno e
            probabilmente non sei familiare con te stesso. {"\n"} Quindi, nel
            Sud, entrando nell'ignoto, stai affrontando il tuo primo grande
            nemico – LA PAURA. Esistono due tipi di paura – la paura della
            realtà e la paura illusoria. La paura della realtà è la paura del
            reale.{"\n"} È un tipo positivo di paura perché qualsiasi cosa che
            rappresenti una minaccia possibile per la tua sopravvivenza è una
            paura reale.{"\n"} La paura illusoria è il tipo di paura che
            sperimentiamo nella maggior parte del tempo. Mentre la paura della
            realtà riguarda il presente – la minaccia immediata, il pericolo
            immediato – la paura illusoria riguarda ciò che può succedere nel
            futuro, SE …! {"\n"} La paura di ciò che potrebbe succedere se non
            riuscissi a trovare i soldi per pagare una bolletta. La paura di ciò
            che potrebbe succedere se non raggiungi il tuo obiettivo di vendite
            o se non completi tutto il lavoro che ti è stato richiesto; ciò che
            potrebbe succedere se diventassi ridondante.{"\n"} La paura di
            perdere una fidanzata o un fidanzato. La paura di non superare un
            esame di guida o un esame. La paura di non ricevere un aumento di
            stipendio o una promozione.{"\n"} La paura illusoria è una paura del
            tipo “cosa succederà se.”{"\n"} È la paura di qualcosa che non è
            ancora iniziato a succedere e, con tutta probabilità, potrebbe mai
            succedere. È la paura dell'ignoto. Non è la paura della cosa o della
            condizione, ma di un possibile risultato sconosciuto di quella
            condizione.{"\n"} È illusoria perché è la paura di qualcosa che non
            è realmente presente. È la paura illusoria che deve essere superata.
            {"\n"} Questa è la paura che devi sconfiggere. Ma come? Non fuggendo
            da essa. Affrontandola con chiarezza mentale. Applicando chiarezza
            di spirito a ciascuno degli esempi che ho dato, e molti altri, la
            paura stessa scomparirebbe rapidamente perché la conoscenza su come
            affrontare la situazione arriverebbe presto a te.{"\n"}
            {"\n"}
            {"\n"}Manifestazione: MUSICA{"\n"}
            {"\n"} Ogni Potere direzionale trova espressione per la sua qualità
            essenziale in una specifica attività umana o gruppo di attività.
            {"\n"} Secondo gli insegnamenti della Medicina, la natura essenziale
            del Sud si manifesta nella musica, nel canto e nella danza –
            attività che possono essere svolte con esuberanza giovanile, libere
            da inibizioni e problemi psicologici.{"\n"} I nativi americani
            trovarono molta gioia in tali attività e le consideravano come cibo
            per l'anima e carburante per lo spirito.
          </Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Sud;

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
