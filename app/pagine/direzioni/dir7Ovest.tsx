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
          <Text style={styles.title}>Morte - Introspecção</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Death - Introspection</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Morte - Introspezione</Text>
        )}

        <View style={styles.imageView}></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            O poder que vem do Oeste é o do desenvolvimento da força interior,
            da autossuficiência, que nos permite enfrentar os desafios do
            dia-a-dia, as dificuldades da vida.{"\n"}É o reconhecimento dessa
            força que está dentro de todos nós.{"\n"} É um momento de acumular
            energias, de repensar o projeto de vida, os conhecimentos e deixar
            de lado o que é inútil, assim como as arvores deixam cair as suas
            folhas secas.{"\n"} O oeste tem o sentido de “olhar para dentro”, da
            introspecção. Momento de avaliar o aprendizado das ações e adquirir
            experiência para tomar decisões mais sábias. De avaliar as nossas
            verdadeiras intenções e digeri-las como o Urso em sua caverna.{"\n"}{" "}
            O Poder do Oeste simboliza a escuridão da caverna do urso, e também
            simboliza o útero, o elemento Terra, a Raça Negra, o Reino Mineral e
            suas riquezas, o corpo físico, os ossos.{"\n"} A função principal da
            Direção Oeste da Roda Medicinal (em ambos os hemisférios; olhando
            para o Polo Sul, fica na sua mão direita) é segurar, prender.{"\n"}{" "}
            O reino Mineral tem as rochas, pedras, gemas, substâncias minerais
            como suportes e condutores de grande energia.{"\n"}
            No pensamento nativo as rochas e pedras já estavam no planeta antes
            da vegetação, animais e humanos, sendo, portanto, a mais antiga
            forma de vida entre os quatro reinos.{"\n"} Eles veem as pedras e
            rochas como os “ossos da Mãe-Terra”, relacionam gemas a partes do
            corpo físico humano.{"\n"} Quando seguramos um quartzo, ou qualquer
            pedra na mão, estamos tocando em algo que esteve no planeta antes do
            homem aparecer.{"\n"} Nosso corpo físico é o que nos prende aqui
            como parte da terra. Nele nós podemos explorar e experimentar o
            reino da matéria. A função do Oeste é segurar, prender, o que não
            significa estagnar, congelar algo para manter do jeito que é.{"\n"}{" "}
            Os ancestrais consideram segurar como uma pausa reflexiva antes da
            mudança. Meadows trata como um intervalo entre dar e receber ou de
            receber e dar.{"\n"} Uma aceitação do que é concebido com nossos
            próprios esforços e a consideração de dar de si ao sustento da roda
            para que ela gire.{"\n"} O oeste é relacionado na cosmologia nativa
            norte-americana com o olhar para dentro, introspecção.{"\n"} Fazemos
            a viagem de volta para o oeste para examinar nosso eu interno e
            avaliarmos o que necessitamos mudar para poder crescer no novo ciclo
            que se aproxima.{"\n"} A ênfase é na mudança e na transição. É
            Também onde nós temos que enfrentar a realidade da morte. A morte
            como transição para o novo começo. {"\n"}O Oeste é também o lugar
            dos sonhos e das visões sobre o futuro. Os índios americanos falam
            em dançar um sonho acordado, o giro dos sonhos em realidades físicas
            sendo práticos e realísticos.{"\n"} O Oeste pode ser comparado ao
            outono que é a estação da consolidação quando o crescimento para e a
            preparação para a renovação começa. O oeste pode também ser
            comparado ao crepúsculo e ao sombrio.{"\n"} Meadows classifica bem
            os componentes do Oeste:{"\n"}
            {"\n"}
            {"\n"}
            Qualidade: Mudança e transição.{"\n"}
            {"\n"} A vida está envolta na na incerteza e no inesperado.. A
            mudança é inevitável, e uma coisa está determinada é que à partir do
            seu nascimento você caminha para a morte.{"\n"} Imagine que nossa
            caverna do urso inicial é no útero de nossa mãe, onde somos
            nutridos, antes de sermos concebidos, daí morremos nesse mundo e
            nascemos neste plano.{"\n"} Assim é morte, morremos nesta dimensão e
            nascemos em outra, onde passamos por ciclo, nos desfazemos de nossa
            personalidade e morremos naquela dimensão e voltamos para um novo
            útero, uma nova personalidade que se cria, onde embarcamos para uma
            aventura material, um ciclo sem fim.{"\n"} O xamã sabe da lei
            sagrada e natural de que a vida conduz à morte, assim como sabe que
            a morte conduz à vida.{"\n"} A realidade mostra a morte como parte
            da vida e como parte do processo de renascimento.{"\n"} Como um
            acordar e despertar contínuo.{"\n"} A morte é como um sono, que ao
            despertarmos ficamos renovados.{"\n"} Segundo Meadows: Há um
            pensamento de que ao morrer há uma sensação de entrar num túnel, de
            ouvir sons incomuns, mas agradáveis, de viajar para cima num ponto
            distante de luz.{"\n"} O processo de nascimento é similar, mas mais
            traumático. Há uma sensação, de um som contínuo ao longo de um
            túnel, que é o útero da mãe e o portal do nascimento. Com nascimento
            há uma sensação de confinamento, de sentir uma pressão que carrega
            para baixo, visto que com morte há uma sensação da liberação da
            pressão para cima.{"\n"} Se, consequentemente, você sobrevive depois
            que o corpo morre, você também existiu antes que o corpo esteve
            carregado com sua alma – apenas porque é o mesmo ‘ você ‘ nessas
            vigílias após o sono.{"\n"} A morte é assim uma parte da vida e está
            neste contexto inteiro da continuidade da vida que uma outra lei
            cósmica: a lei do karma opera.{"\n"} Muitos autores descrevem o
            karma como lei de causa e efeito ou como uma dívida que deva ser
            paga por ações de vidas passadas.{"\n"} Segundo Meadows, o
            pensamento nativo tem uma compreensão diferente, eles o consideram
            um professor que ensina aspectos que estão fora do equilíbrio e que
            necessitam ser corrigidos.{"\n"} São as situações repetitivas da
            vida, os discos rachados, os velhos problemas que retornam
            repetitivas vezes, em circunstancias diferentes.{"\n"} Ele
            compreende lições de nossa vida que são parte de nosso destino.
            Lições que devemos aprender para crescermos espiritualmente,
            evoluirmos, e assim cumprirmos a missão de nossa existência. O xamã
            sabia de uma Lei Sagrada que também era uma lei natural porque ele
            observava sua ação ao redor dele. A vida leva à morte. Mas ele
            também sabia o lado oposto dessa lei: A morte leva à vida. {"\n"}Ele
            sabia e entendia, porque Vida e Morte são apenas voltas do Círculo.
            {"\n"} Todo mundo tem medo da morte. Mas a morte é a experiência
            mais traumática que você provavelmente enfrentará?{"\n"}
            Considere isto: a morte pode ser mais traumática do que a sua vinda
            à vida? Isso foi uma viagem. A Essência de Você deveria estar
            contida dentro de um veículo de carne e osso, osso e tendões, que
            seriam unidos e montados dentro da abdômen de uma mulher.{"\n"}{" "}
            Então, no devido tempo, você seria empurrado através de um minúsculo
            túnel sufocante para a luz. Essa seria uma experiência
            claustrofóbica. E quando você passasse por aquele túnel estreito e
            confinado, seu sistema de suporte vital seria cortado.{"\n"} Você
            ficará completamente desamparado por muitos meses, à mercê de algum
            ser humano inexperiente que alegou ser sua mãe. Mesmo quando você
            foi capaz de assumir o controle total do veículo que você foi
            fornecido, você seria confrontado com todos os traumas, dramas,
            perigos e incertezas de vida. Ainda pior. … Pior? Certamente não
            pode haver algo pior?{"\n"}
            Pior – você perderia toda a memória de quem você é, o que você é, de
            onde você é e por que você fez a viagem no primeiro lugar.{"\n"} Se
            isso é Vida, certamente a Morte não pode ser tão ruim assim?
            Naturalmente, o conceito com o qual sofremos lavagem cerebral é que
            a morte é o fim da vida.{"\n"} Mas a realidade, como a natureza
            tenta nos mostrar, é que a morte é uma parte da vida.{"\n"} A morte
            faz parte do processo de renascimento. E você tem um exemplo para
            provar isso a você todos os dias. Você não tem medo de ir dormir
            para dormir.{"\n"} No final do dia o seu corpo está cansado e a sua
            mente também procura refresco. Na verdade, você está ansioso para
            ter uma boa noite de sono e acorda no dia seguinte revigorado,
            revitalizado e recarregado com uma energia “nova”, pronta para
            começar outro novo dia. {"\n"}Você acorda na manhã seguinte sendo
            precisamente o mesmo indivíduo consciente que você era na noite
            anterior. {"\n"}A morte, como o sono, também não é um fim, mas parte
            de um processo criativo no qual a alma é retomada para um lugar de
            descanso, renovação.{"\n"} Se, portanto, você sobrevive depois que o
            corpo morre, então você também existiu antes do corpo nascer – assim
            como é o mesmo ‘você’ que acorda após o sono.{"\n"} A morte é,
            portanto, uma parte da vida e é em todo este contexto da
            continuidade da vida que uma outra lei cósmica – a Lei do Karma –
            opera.{"\n"} Existem muitas teorias sobre o karma.{"\n"} Uma é que é
            simplesmente causa e efeito – o que é semeado é finalmente colhido.
            {"\n"}
            Circunstâncias adversas, provações e tribulações, deficiências e
            fardos, são consideradas por essa escola de pensamento como cargas
            kármicas para compensar algumas contravenções do passado, mesmo de
            uma vida passada.{"\n"} O xamã indiano entendeu de forma diferente e
            de uma forma mais positiva. Karma é um professor que indica onde os
            aspectos da vida estão desequilibrados e precisam ser corrigidos.
            {"\n"}
            Experiências kármicas são padrões repetitivos na vida – o mesmo
            problema antigo ou problemas recorrentes de novo e de novo, talvez
            sob diferentes disfarces e sob diferentes condições.{"\n"} Em outras
            palavras, o carma compreende as lições de vida que fazem parte do
            destino de alguém.{"\n"} São experiências pré-determinadas de
            aprendizado a serem encontradas para nos ajudar a crescer,
            desenvolver e evoluir espiritualmente para que possamos cumprir o
            verdadeiro propósito de nossa vida que é a educação e o
            desenvolvimento da Alma e do Espírito.{"\n"}
            {"\n"}
            {"\n"}
            Totem Animal do Oeste: Urso Cinzento{"\n"}
            {"\n"} O urso é conhecido pela sua grande força. Podemos comparar
            essa força não tanto ao poder físico, mas ao poder interior – como o
            que vem para a Terra no outono, que é a estação do Ocidente. O índio
            observou que o Urso parecia introspectivo em relação à tomada de
            decisões, e essa qualidade serviu como exemplo de que o ser humano
            também deveria ser voltado para dentro, antes de tomar decisões
            importantes.{"\n"} Nós também devemos olhar dentro de nós mesmos
            para determinar nossas próprias forças e fraquezas e devemos olhar
            dentro do nosso próprio coração para examinar nossas verdadeiras
            intenções, se quisermos aprender as lições que devemos, e tomar
            decisões sábias.{"\n"} O Urso conhecia a Terra tão bem que estava
            ciente do que era necessário para ajudar na cura de doenças ou
            ferimentos. {"\n"}Podemos aprender com o Urso, transformando nossa
            atenção aos alimentos mais naturais para sustentar o corpo, em vez
            de alimentos manufaturados e processados, e aos remédios naturais
            para manter a saúde física – aqueles que não têm efeitos colaterais
            prejudiciais.{"\n"} Assim como o Urso se prepara para o tempo de
            renovação da hibernação por vir, fortalecendo seu corpo, devemos
            primeiro cuidar do físico e do mundano e colocar nossos assuntos
            cotidianos em ordem antes que a renovação espiritual possa ser
            efetuada.{"\n"}
            {"\n"}
            {"\n"} Elemento do Oeste: Terra{"\n"}
            {"\n"} As características da Terra Elementar são solidez, inércia e
            estabilidade. É movimento em repouso. A Terra Elemental é a
            “substância” elementar que entra em forma e forma e se torna
            tangível e reconhecível – vindo “para a terra”. A matéria é aquela
            que parece ser. {"\n"}É importante ter em mente que a matéria é uma
            aparência, e é isso que torna a Terra Elementar talvez a menos
            compreendida das substâncias elementares.{"\n"} Em um nível prático,
            passamos muito do nosso tempo preocupados com a aquisição de coisas
            físicas e tangíveis, mas ao mesmo tempo não gostamos das restrições
            e limitações que o material nos impõe.{"\n"} O Ocidente é o lugar do
            material, das aparências, do mundo da forma, da manifestação física
            e do aprendizado para enfrentá-lo.{"\n"} Você não pode desenvolver
            sua consciência espiritual rejeitando o material ou dando as costas
            para ele. O físico e o material fazem parte da Criação, não uma
            secreção a ser eliminada em alguma busca equivocada de
            “espiritualidade”, e não algo a ser descartado como algo que não é
            bom “. Não se deixe enganar por um senso de falsa espiritualidade.
            Você está aqui no mundo material da forma. Você vive no mundo
            material da forma, e parte da razão de estar aqui é aprender a
            controlar o material através do uso de leis naturais e de forças e
            princípios cósmicos.{"\n"} O trabalho espiritual é de pouco valor, a
            menos que possa ser aterrado ”. Você não acha que deu prazer à
            Inteligência Cósmica trazer o mundo físico da forma à manifestação?
            {"\n"}
            Saia para o campo ou para um parque ou bosque e olhe à sua volta a
            beleza da Terra natural. Embora o homem tenha moldado a maior parte
            dela cultivando, não lhe dá uma emoção de prazer absorver sua
            magnificência?{"\n"} Não pretendemos rejeitar o material de
            preferência por alguma alternativa espiritual nebulosa, mas apreciar
            o físico e, ao mesmo tempo, procurar a realidade por trás dele.
            {"\n"} Ambos em parceria igual. Os objetos físicos só parecem e se
            sentem sólidos porque seus átomos estão girando em velocidades
            fantásticas.{"\n"} Como em um filme, pessoas e veículos parecem se
            mover, mas o que estamos vendo é uma sucessão de imagens estáticas
            sendo projetadas em tal velocidade que parece haver movimento, mas a
            aparência é, de fato, uma ilusão. Um átomo é principalmente espaço.
            Toda a matéria é tão espaçosa quanto o universo parece ser, e as
            partículas do átomo são como as estrelas e planetas movendo-se em um
            padrão contínuo.{"\n"} Se pudéssemos viajar longe o suficiente no
            espaço exterior e olhar para o universo, ele também pareceria
            sólido.{"\n"} A terra é frequentemente representada pela sua forma
            mais durável – uma pedra. Uma pedra sugere não apenas solidez, mas
            resiliência e segurança – qualidades de pessoas fortemente
            influenciadas pela Terra Elemental.{"\n"} A terra é yin – passiva,
            receptiva, estimulante.{"\n"}
            {"\n"}
            {"\n"}
            Cor do Oeste: Preto{"\n"}
            {"\n"} A luz sai das trevas e o preto é a cor da ausência de forma
            da qual tudo vem.{"\n"}O preto absorve, armazena e protege. É a cor
            do mistério, das profundezas ocultas e dos anseios secretos.{"\n"} O
            preto está preocupado com o inconsciente e com a germinação. Sem a
            escuridão não poderia haver luz, pois a escuridão é o oposto da luz
            e contrasta suas qualidades específicas.{"\n"} O preto absorve todas
            as cores dentro de si e é a polaridade receptiva do espectro de
            cores. É a cor da introspecção e da retirada. Está preocupado com a
            dispersão e com a transformação.{"\n"} O preto está relacionado com
            o aspecto feminino da nossa natureza – seja masculino ou feminino –
            com receptividade e sensibilidade e com sentimentos mais profundos.
            {"\n"}
            {"\n"}
            {"\n"}
            Reino do Oeste: Reino Mineral{"\n"}
            {"\n"} Quando a própria Terra estava em seu estágio embrionário, as
            rochas primitivas se desenvolveram como o esqueleto humano e podem
            ser consideradas como os “ossos” da Terra, enquanto a superfície
            terrestre pode ser comparada à pele, as árvores e a vegetação aos
            cabelos e assim por diante. Os indianos consideravam cristais de
            quartzo, por exemplo, como as células cerebrais da avó Terra.{"\n"}{" "}
            Os xamãs sabiam que, embora rochas e pedras não tenham olhos como
            animais e animais, elas têm uma sensação de “visão” e, embora não
            tenham ouvidos, há pedras que “ouvem”. Para o xamã havia um conexão
            entre os órgãos dos sentidos do ser humano e certas pedras que
            tinham poderes de cura para o órgão particular com o qual estava
            relacionado.{"\n"} Beryl e água-marinha estavam relacionados com a
            visão, ônix para ouvir, cornalina para tocar, topázio a gosto,
            jaspar para cheirar, rubi para a intuição e opala para o intelecto.
            {"\n"}O Reino Mineral é visto como detentor e controlador de
            energia, e é o mais antigo dos reinos para as rochas e pedras que
            existiam aqui na Terra antes que houvesse plantas, animais ou
            humanos.{"\n"} O cristal de quartzo era particularmente altamente
            considerado. Tem propriedades muito especiais, não apenas como
            armazenador e transformador de energia, mas porque possui a mesma
            composição química (Sj02) que a sílica, que é um mineral natural
            dentro do corpo, E hoje é usado por todos em calculadoras, relógios,
            computadores, etc.{"\n"} O corpo humano é dependente de minerais
            inorgânicos essenciais.{"\n"} De fato, os distúrbios do corpo humano
            podem frequentemente ser atribuídos a deficiências em um ou mais
            desses minerais inorgânicos que, como armazenadores de energia,
            precisam ser renovados ou substituídos. Uma deficiência de cálcio,
            por exemplo, pode causar problemas nos ossos, especialmente nas
            articulações, e a falta de sódio pode causar problemas digestivos e
            até mesmo reumatismo.{"\n"}
            {"\n"}
            {"\n"}
            Elemento: Terra{"\n"}
            {"\n"} O Elemento do Oeste é a Terra, representada pelo seu filho
            mais durável e forte, a pedra.{"\n"} A pedra não sugere apenas a
            solidificação mas a resiliência ( resistir a pressão e ser flexível
            perante aos desafios) e segurança.{"\n"} A terra é o yin, o passivo,
            o receptivo, a nutrição. As características da Terra Elementar são
            solidez, inércia e estabilidade.{"\n"} É movimento em repouso. A
            Terra Elemental é a “substância” elementar que entra em forma e se
            torna tangível e reconhecível – vindo “para a terra”.{"\n"} Corpo
            Celestial: Mãe Terra O pensamento nativo trata a terra como ser vivo
            e verdadeiramente sua ‘ mãe ‘. Ela quem forneceu seu corpo físico,
            cuja a substância é sua substância e é nela onde as entidades do
            espírito podem encarnar e experimentar o reino físico.{"\n"} Deve-se
            dar amor e cuidados com a Mãe-Terra, com o mesmo sentimento e emoção
            que deve-se ter para com os humanos. É a Mãe que tudo nos dá,
            morada, água, alimento e beleza. Nos recebe à cada vida e acolhe
            carinhosamente nossa carne na morte.{"\n"} O Oeste, então, é um
            lugar apropriado para nos perguntarmos: ‘Não deveríamos amar a
            Mãe-Terra como os índios amavam a Terra e todas as coisas da Terra?’
            Pois se nos falta verdadeiro respeito pela Terra e por qualquer
            criatura viva, não nos arriscamos a perder o respeito pela
            sacralidade da própria vida?{"\n"} A história, infelizmente, indica
            que nós fazemos. É somente aproximando-se da Mãe Terra quando uma
            criança procura estar perto de sua mãe, que podemos nos tornar
            sensíveis aos poderes da Terra.{"\n"}
            {"\n"}
            {"\n"} Aspecto Humano: Corpo físico.{"\n"}
            {"\n"} O corpo físico é um veículo ou traje para a habitação do
            Espírito e da Alma. Quando as forças que operam no corpo físico
            estão em harmonia e equilíbrio, o corpo está em boa saúde.{"\n"} Se
            há desarmonia ou desequilíbrio, elas se materializam como doença ou
            enfermidade.{"\n"} A manutenção da boa saúde é uma questão de manter
            as forças dentro do corpo em harmonia adequada. A restauração da boa
            saúde é conseguida através do equilíbrio dessas forças.{"\n"} O lado
            positivo dos elementos que operam dentro do corpo executa os
            processos de construção, sustentação e reparação, enquanto os
            aspectos negativos estão relacionados com a dissolução e a quebra.{" "}
            {"\n"}O “ponto de equilíbrio” neutro diz respeito à preservação.
            {"\n"} Nosso corpo físico é um equipamento complexo e sofisticado, o
            veículo mais maravilhoso que já foi inventado. No entanto, apesar do
            progresso da ciência médica e da pesquisa, o homem ainda é ignorante
            sobre por que algumas partes do corpo funcionam como o fazem e o que
            realmente faz com que elas funcionem.{"\n"} A ciência médica moderna
            ainda persiste no tratamento do sintoma e não da pessoa.{"\n"} Em
            outras palavras, ainda há muito sobre o corpo humano que os médicos
            mais instruídos ainda são incertos ou ignorantes.{"\n"} Os antigos
            estavam cientes dos recursos internos do corpo humano, dos órgãos
            dos sentidos e dos sistemas de energia que a ciência médica moderna
            ainda precisa descobrir.{"\n"}
            {"\n"}
            {"\n"}
            Período de Tempo do Oeste: O Presente{"\n"}
            {"\n"} O passado foi embora.{"\n"} Você não pode mudar o passado,
            apenas aprender com ele. O presente está acontecendo agora.{"\n"} O
            futuro ainda não existe, mas pode ser influenciado pelo nosso
            pensamento atual. É por isso que o Presente é tão importante, pois é
            somente no Presente que podemos trabalhar em Mudança.{"\n"} Você
            cria muito do seu futuro de acordo com suas crenças. Se você quer um
            Futuro melhor que o Passado, você precisa mudar seu sistema de
            crenças – seu padrão de crença.{"\n"} As crenças, valores, padrões,
            padrões de ideais que foram “programados” em você por seus pais,
            professores, líderes religiosos, costumes sociais e a sociedade na
            qual você viveu – condicionaram e moldaram o Presente.{"\n"}
            Você foi programado para o tipo de vida que você está vivendo agora.
            Se você está insatisfeito com qualquer aspecto de sua vida como é
            agora, você tem que mudar o programa.{"\n"} Sua felicidade futura
            está em grande parte em suas mãos. Mude as crenças e atitudes e você
            muda o programa. Mude o programa e mude o futuro.{"\n"} Esse foi um
            dos segredos dos antigos. {"\n"}
            {"\n"}
            {"\n"}Estação do Oeste: Outono{"\n"}
            {"\n"} Assim como o outono é uma das épocas mais bonitas do ano,
            quando a folhagem é uma profusão de cores suaves e suaves, na
            direção oeste podemos passar por algumas de nossas mais belas
            experiências espirituais.{"\n"} O outono é o tempo da natureza de
            virar para dentro.{"\n"} É a época em que a essência da vida começa
            a se retirar para a semente.{"\n"} Retirando-nos por algum tempo da
            ocupação das atividades externas, podemos olhar para dentro e
            descobrir verdades sobre nós mesmos que podem, em última análise,
            florescer em uma novidade de vida. {"\n"}
            {"\n"}
            {"\n"}Número do Oeste: DOIS e DOZE{"\n"}
            {"\n"} Dois é o número atribuído ao Ocidente nos Vinte Conde. {"\n"}
            Dois tem qualidades suaves e receptivas – as do princípio feminino e
            da introspecção. É o número da dualidade.{"\n"} Toda a criação
            material, que está sendo enfatizada no Ocidente, é uma expressão
            desse dualismo. A dualidade é a coisa mais evidente da existência.
            {"\n"} É noite e dia, verão e inverno, inalação e exalação, quente e
            frio, sol e lua.{"\n"} Até mesmo a própria Verdade é dual na
            natureza, pois é exotérica e esotérica – há a verdade do que parece
            ser e a verdade do que é.{"\n"} Os ensinamentos do Caminho da
            Medicina também têm uma dualidade de significado. Dois sugerem a
            união e a geração de força sendo estimulada em forma.{"\n"} Nos
            planos internos, doze é o número de estabilidade organizacional em
            um nível espiritual.{"\n"} Também se preocupa com o espírito dos
            planetas.{"\n"}
            {"\n"}
            {"\n"}
            Inimigo do Oeste: Impotência{"\n"}
            {"\n"} O inimigo do Ocidente é a impotência. Precisamos de poder
            para alcançar. {"\n"}De fato, quando nos purificamos e procuramos
            trocar o lixo do passado por sabedoria, chegamos ao Presente e
            despertamos nosso poder.{"\n"} Precisamos do poder como amigo e
            aliado. A falta de poder é, portanto, um inimigo.{"\n"} Olhe em
            volta e observe como as pessoas estão usando o poder que possuem.
            Muitas vezes, o poder está sendo usado para controlar a vida dos
            outros, para usar outros para propósitos inteiramente egoístas e
            para satisfazer a luxúria e a cobiça. {"\n"}Isso ocorre porque as
            vítimas sofrem de impotência. O poder pode ser usado para o bem ou
            para o mal – assim como a eletricidade ou a energia nuclear.{"\n"} O
            abuso de poder é muito comum e é por isso que a antiga sabedoria foi
            guardada e os segredos dos ensinamentos da Roda da Medicina
            escondidos dentro das tradições orais dos xamãs.{"\n"} Quando o
            poder é abusado ou mal usado, ele é autodestrutivo – pode voltar
            para aquele que o abusou ou aplicou mal. Quando o poder é usado
            construtivamente e para o bem de todos, então é nosso amigo.{"\n"}{" "}
            Desenvolva autoconfiança otimista. Seja positivo. Se o que você
            deseja fazer não machuca ninguém, inclusive você, faça isso.
            Exercite seu poder. Não seja impotente. Resista ao abuso de poder e
            opressão.{"\n"}
            {"\n"}
            {"\n"} Manifestação do Ocidente: Magia{"\n"}
            {"\n"} Magia é um componente do Oeste, é o poder de mudar as coisas.
            {"\n"}
            Magia não é truque de entretenimento, nem é o truque sobrenatural
            supostamente por alguns religiosos e projetado por filmes de culto.
            A verdadeira Magia é uma grafia deliberada para indicar a diferença
            entre a magia de trazer mudanças desejadas, a magia da ilusão e da
            trapaça e superstição, e a magia do ocultista cerimonial, a arte de
            trazer as mudanças desejadas.{"\n"} O Ocidente também é sobre o
            físico, como temos descoberto, e antes que você possa executar o
            Magik, primeiro você deve aprender a controlar o físico.{"\n"} Magia
            é a tecelagem e moldagem de forças e energias invisíveis na forma.
            {"\n"} Então Magik pode ser descrito como o ofício de moldar as
            coisas da maneira que queremos que elas sejam.{"\n"} O xamã, com a
            sabedoria e conhecimento para moldar Magia, era, portanto, um ‘sábio
            distribuidor’. Magia é a arte de trazer para a sua vida, ou a vida
            daqueles que buscam sua ajuda, as mudanças que são desejadas, seja
            na forma de objetos físicos ou em condições e circunstâncias.{"\n"}{" "}
            É a direção voluntária das energias para trazer essas mudanças à
            existência.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            The power that comes from the West is that of developing inner
            strength and self-sufficiency, which allows us to face the
            challenges of daily life and life's difficulties. {"\n"}
            It is the recognition of this strength that lies within all of us.{" "}
            {"\n"} It is a time to gather energy, to rethink life projects and
            knowledge, and to let go of what is useless, just as trees shed
            their dry leaves. {"\n"}
            The West represents “looking inward,” introspection. A time to
            evaluate the lessons of actions and gain experience to make wiser
            decisions. To assess our true intentions and digest them like the
            Bear in its cave. {"\n"}
            The Power of the West symbolizes the darkness of the bear's cave,
            and also the womb, the element Earth, the Black Race, the Mineral
            Kingdom, and its riches, the physical body, and the bones. {"\n"}
            The main function of the West Direction in the Medicine Wheel (in
            both hemispheres; looking at the South Pole, it is on your
            right-hand side) is to hold, to retain. {"\n"} The Mineral Kingdom
            holds rocks, stones, gems, and mineral substances as supports and
            conductors of great energy. {"\n"}
            In native thought, rocks and stones existed on the planet before
            vegetation, animals, and humans, being therefore the oldest form of
            life among the four kingdoms. {"\n"} They see stones and rocks as
            the “bones of Mother Earth,” and associate gems with parts of the
            human physical body. {"\n"} When we hold quartz, or any stone in our
            hand, we are touching something that was on the planet before humans
            appeared. {"\n"}
            Our physical body is what binds us here as part of the earth.
            Through it, we can explore and experience the material realm. The
            function of the West is to hold, to retain, but this does not mean
            stagnation or freezing something to keep it as it is. {"\n"}{" "}
            Ancestors considered holding as a reflective pause before change.
            Meadows describes it as an interval between giving and receiving or
            between receiving and giving. {"\n"}
            An acceptance of what is conceived through our own efforts and the
            consideration of giving oneself to sustain the wheel so that it may
            turn. {"\n"}
            The West is related, in Native American cosmology, to looking
            inward, introspection. {"\n"}
            We journey back to the West to examine our inner self and evaluate
            what we need to change to grow in the new cycle that is approaching.{" "}
            {"\n"}
            The emphasis is on change and transition. It is also where we have
            to face the reality of death. Death as a transition to a new
            beginning. {"\n"} The West is also the place of dreams and visions
            of the future. The Native Americans speak of dancing a waking dream,
            turning dreams into physical realities, being practical and
            realistic. {"\n"} The West can be compared to autumn, which is the
            season of consolidation when growth stops and preparation for
            renewal begins. The West can also be compared to twilight and the
            somber. {"\n"} Meadows classifies the components of the West very
            well: {"\n"}
            {"\n"}
            {"\n"}
            Quality: Change and Transition
            {"\n"}
            {"\n"}
            Life is surrounded by uncertainty and the unexpected. Change is
            inevitable, and one thing is certain: from the moment of your birth,
            you are walking toward death.{"\n"}
            Imagine that our initial bear’s cave is the womb of our mother,
            where we are nurtured before we are conceived. Then we die in that
            world and are born into this plane.{"\n"}
            So it is with death: we die in this dimension and are born into
            another, where we go through cycles, shed our personality, and die
            in that dimension, only to return to a new womb, a new personality
            created for us. We embark on a material adventure—a cycle without
            end.{"\n"}
            The shaman understands the sacred and natural law that life leads to
            death, just as death leads to life.{"\n"}
            Reality reveals death as part of life and as part of the process of
            rebirth.{"\n"}
            It is like a continuous awakening.{"\n"} Death is like sleep, after
            which we awaken renewed.{"\n"}
            According to Meadows: there is a thought that in death, there is a
            sensation of entering a tunnel, hearing unusual yet pleasant sounds,
            and traveling upward to a distant point of light.{"\n"}
            The process of birth is similar but more traumatic. There is a
            sensation of continuous sound through a tunnel, which is the
            mother’s womb and the portal of birth. With birth, there is a sense
            of confinement, a downward pressure. In contrast, with death, there
            is a sense of release and upward pressure.{"\n"}
            If, consequently, you survive after the body dies, then you also
            existed before the body carried your soul – simply because it is the
            same “you” in these awakenings after sleep.{"\n"}
            Death is thus a part of life and, in this entire context of life’s
            continuity, another cosmic law operates: the law of karma.{"\n"}
            Many authors describe karma as the law of cause and effect or as a
            debt to be paid for actions from past lives.{"\n"}
            According to Meadows, native thought has a different understanding;
            they consider it a teacher that shows aspects of life that are out
            of balance and need correction.{"\n"}
            These are the repetitive situations in life—the broken records, the
            old problems that return repeatedly under different circumstances.
            {"\n"}
            It comprises lessons of our life that are part of our destiny.
            Lessons we must learn to grow spiritually, evolve, and thus fulfill
            the mission of our existence. The shaman knew of a Sacred Law that
            was also a natural law because he observed its action all around
            him: life leads to death. But he also knew the opposite of this law:
            death leads to life.{"\n"}
            He knew and understood because Life and Death are merely turns of
            the Circle.{"\n"}
            Everyone fears death. But is death the most traumatic experience
            you’re likely to face?{"\n"}
            Consider this: Could death be more traumatic than your coming into
            life? That was quite a journey.{"\n"}
            The Essence of You had to be contained within a vehicle of flesh and
            bone, bound and assembled within the abdomen of a woman.{"\n"}
            Then, in due time, you would be pushed through a tiny, suffocating
            tunnel into the light. That would be a claustrophobic experience.
            {"\n"}
            And when you passed through that narrow, confined tunnel, your
            life-support system would be cut.{"\n"}
            You would be utterly helpless for many months, at the mercy of some
            inexperienced human who claimed to be your mother.{"\n"}
            Even when you were able to take full control of the vehicle you had
            been provided, you would face all the traumas, dramas, dangers, and
            uncertainties of life.{"\n"}
            Even worse. ... Worse? Surely it couldn’t be worse?{"\n"}
            Worse – you would lose all memory of who you are, what you are,
            where you are from, and why you made the journey in the first place.
            {"\n"}
            If that is Life, surely Death cannot be that bad?{"\n"}
            Naturally, the concept with which we are brainwashed is that death
            is the end of life.{"\n"}
            But reality, as nature tries to show us, is that death is a part of
            life.{"\n"}
            Death is part of the process of rebirth. And you have an example to
            prove this to you every day.{"\n"}
            You do not fear going to sleep at night.{"\n"}
            At the end of the day, your body is tired, and your mind seeks
            refreshment.{"\n"}
            In fact, you look forward to a good night’s sleep and waking up the
            next day feeling rejuvenated, revitalized, and recharged with “new”
            energy, ready to start another new day.{"\n"}
            You wake up the next morning as precisely the same conscious
            individual you were the night before.{"\n"}
            Death, like sleep, is also not an end but part of a creative process
            in which the soul is taken to a place of rest and renewal.{"\n"}
            If, therefore, you survive after the body dies, then you also
            existed before the body was born – just as it is the same “you” that
            wakes after sleep.{"\n"}
            Death is, therefore, a part of life, and it is within this entire
            context of life’s continuity that another cosmic law – the Law of
            Karma – operates.{"\n"}
            There are many theories about karma.{"\n"}
            One is that it is simply cause and effect – what is sown is
            eventually reaped.{"\n"}
            Adverse circumstances, trials, and tribulations, deficiencies, and
            burdens are considered by this school of thought as karmic loads to
            compensate for some past transgressions, even from a previous life.
            {"\n"}
            The Indian shaman understood it differently and more positively.
            Karma is a teacher that indicates where aspects of life are out of
            balance and need correction.{"\n"}
            Karmic experiences are repetitive patterns in life – the same old
            issue or recurring problems over and over, perhaps under different
            guises and conditions.{"\n"}
            In other words, karma comprises the life lessons that are part of
            one’s destiny.{"\n"}
            These are pre-determined learning experiences encountered to help us
            grow, develop, and evolve spiritually so that we can fulfill the
            true purpose of our life, which is the education and development of
            the Soul and Spirit.{"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            Totem Animal of the West: Grizzly Bear {"\n"}
            {"\n"}
            The bear is known for its great strength. We can compare this
            strength not so much to physical power but to inner power – like
            that which comes to the Earth in the fall, which is the season of
            the West. The Native American observed that the Bear seemed
            introspective when making decisions, and this quality served as an
            example that humans should also look inward before making important
            decisions. {"\n"}
            We too must look within ourselves to determine our own strengths and
            weaknesses and must look into our hearts to examine our true
            intentions if we wish to learn the lessons we need and make wise
            decisions. {"\n"}
            The Bear knew the Earth so well that it was aware of what was
            necessary to help heal illnesses or injuries. {"\n"}
            We can learn from the Bear by focusing our attention on more natural
            foods to sustain the body, instead of manufactured and processed
            foods, and on natural remedies to maintain physical health – those
            that do not have harmful side effects. {"\n"}
            Just as the Bear prepares for the time of renewal during hibernation
            by strengthening its body, we must first take care of the physical
            and the mundane, putting our daily affairs in order before spiritual
            renewal can take place. {"\n"}
            {"\n"}
            {"\n"}
            Element of the West: Earth {"\n"}
            {"\n"}
            The Element of the West is Earth, represented by its most durable
            and strong child, the stone.{"\n"}
            The stone suggests not only solidification but also resilience
            (resisting pressure and being flexible in the face of challenges)
            and security.{"\n"}
            Earth is the yin, the passive, the receptive, the nourishment. It is
            movement at rest. Elemental Earth is the "substance" that takes form
            and becomes tangible and recognizable – coming "to the earth."{"\n"}
            The characteristics of the Earth Element are solidity, inertia, and
            stability. It is movement at rest. The Earth Element is the
            elemental “substance” that takes form and shape, becoming tangible
            and recognizable – “coming to ground.” Matter is what seems to be.{" "}
            {"\n"}
            It is important to remember that matter is an appearance, and this
            makes the Earth Element perhaps the least understood of the
            elemental substances. {"\n"}
            On a practical level, we spend much of our time concerned with
            acquiring physical and tangible things, but at the same time, we
            dislike the restrictions and limitations that the material imposes
            on us. {"\n"}
            The West is the place of the material, of appearances, of the world
            of form, of physical manifestation, and of learning to confront it.{" "}
            {"\n"}
            You cannot develop your spiritual consciousness by rejecting the
            material or turning your back on it. The physical and material are
            part of Creation, not something to be discarded in some misguided
            quest for “spirituality,” and not something to be dismissed as
            inherently “bad.” {"\n"}
            Do not be misled by a sense of false spirituality. You are here in
            the material world of form. You live in the material world of form,
            and part of the reason for being here is to learn to master the
            material through the use of natural laws and cosmic forces and
            principles. {"\n"}
            Spiritual work is of little value unless it can be grounded. {"\n"}
            Do you not think it gave joy to the Cosmic Intelligence to bring the
            physical world of form into manifestation? {"\n"}
            Go out to the countryside, a park, or a forest and look around at
            the beauty of the natural Earth. Even though much of it has been
            shaped by man through cultivation, does it not give you a thrill of
            pleasure to absorb its magnificence? {"\n"}
            We are not meant to reject the material in favor of some nebulous
            spiritual alternative, but to appreciate the physical while
            simultaneously seeking the reality behind it. {"\n"}
            Both should exist in equal partnership. Physical objects only appear
            and feel solid because their atoms are spinning at fantastic speeds.{" "}
            {"\n"}
            As in a film, people and vehicles appear to move, but what we are
            seeing is a succession of static images being projected at such
            speed that it seems there is movement, though the appearance is, in
            fact, an illusion. {"\n"}
            An atom is mostly space. All matter is as spacious as the universe
            seems to be, and the particles within the atom are like stars and
            planets moving in a continuous pattern. {"\n"}
            If we could travel far enough into outer space and look at the
            universe, it too would appear solid. {"\n"}
            Earth is often represented by its most enduring form – a stone. A
            stone suggests not only solidity but resilience and security –
            qualities of people strongly influenced by the Earth Element. {"\n"}
            Earth is yin – passive, receptive, and nurturing. {"\n"}
            {"\n"}
            {"\n"}
            Color of the West: Black
            {"\n"}
            {"\n"}
            Light emerges from darkness, and black is the color of formlessness
            from which everything arises.{"\n"}
            Black absorbs, stores, and protects. It is the color of mystery,
            hidden depths, and secret longings.{"\n"}
            Black is concerned with the unconscious and germination. Without
            darkness, there could be no light, as darkness is the opposite of
            light and contrasts its specific qualities.{"\n"}
            Black absorbs all colors within itself and represents the receptive
            polarity of the color spectrum. It is the color of introspection and
            withdrawal, connected to dispersal and transformation.{"\n"}
            Black relates to the feminine aspect of our nature—whether male or
            female—with receptivity, sensitivity, and deeper feelings.{"\n"}
            {"\n"}
            {"\n"}
            Realm of the West: Mineral Realm
            {"\n"}
            {"\n"}
            When the Earth itself was in its embryonic stage, primitive rocks
            developed as the human skeleton does and can be considered the
            "bones" of the Earth. Meanwhile, the Earth's surface can be compared
            to skin, the trees and vegetation to hair, and so on.{"\n"}
            The indigenous peoples considered quartz crystals, for example, as
            the brain cells of Grandmother Earth.{"\n"}
            Shamans knew that although rocks and stones do not have eyes like
            animals do, they possess a sense of "sight," and while they lack
            ears, there are stones that "hear." To the shaman, there was a
            connection between human sensory organs and certain stones that had
            healing powers for the specific organ they were associated with.
            {"\n"}
            Beryl and aquamarine were linked to vision, onyx to hearing,
            carnelian to touch, topaz to taste, jasper to smell, ruby to
            intuition, and opal to intellect.{"\n"}
            The Mineral Realm is seen as the holder and controller of energy and
            is the oldest of the realms, as rocks and stones existed on Earth
            before plants, animals, or humans.{"\n"}
            Quartz crystal was particularly revered. It has very special
            properties, not only as a storehouse and transformer of energy but
            also because it shares the same chemical composition (SiO₂) as
            silica—a natural mineral found in the human body. Today, it is used
            universally in calculators, watches, computers, and more.{"\n"}
            The human body depends on essential inorganic minerals.{"\n"}
            In fact, disorders of the human body can often be traced to
            deficiencies in one or more of these inorganic minerals, which, as
            energy storehouses, must be replenished or replaced.{"\n"}
            For instance, a calcium deficiency can lead to bone problems,
            particularly in the joints, while a lack of sodium can cause
            digestive issues and even rheumatism.{"\n"}
            {"\n"}
            {"\n"}
            Celestial Body: Mother Earth Native thought treats the earth as a
            living being and truly as its 'mother'. She is the one who provided
            your physical body, whose substance is her substance, and it is
            within her that the entities of the spirit can incarnate and
            experience the physical realm.{"\n"}
            One must give love and care to Mother Earth, with the same feeling
            and emotion that should be directed towards humans. She is the
            Mother who gives us everything – dwelling, water, food, and beauty.
            She receives us with each life and lovingly embraces our flesh in
            death.{"\n"}
            The West, then, is an appropriate place for us to ask: ‘Should we
            not love Mother Earth as the natives loved the Earth and all things
            of the Earth?’ For if we lack true respect for the Earth and any
            living creature, do we not risk losing respect for the sanctity of
            life itself?{"\n"}
            History, unfortunately, shows that we do. It is only by approaching
            Mother Earth as a child seeks to be near its mother that we can
            become sensitive to the powers of the Earth.{"\n"}
            {"\n"}
            {"\n"}
            Human Aspect: Physical Body.
            {"\n"}
            The physical body is a vehicle or garment for the habitation of the
            Spirit and Soul. When the forces operating in the physical body are
            in harmony and balance, the body is in good health.{"\n"}
            If there is disharmony or imbalance, they materialize as disease or
            illness.{"\n"}
            Maintaining good health is a matter of keeping the forces within the
            body in proper harmony. Restoring good health is achieved through
            balancing these forces.{"\n"}
            The positive side of the elements operating within the body carries
            out the processes of construction, support, and repair, while the
            negative aspects are related to dissolution and breakdown.{"\n"}
            The “neutral point of balance” concerns preservation.{"\n"}
            Our physical body is a complex and sophisticated machine, the most
            wonderful vehicle ever invented. However, despite the progress of
            medical science and research, humans are still ignorant about why
            some parts of the body function as they do and what truly makes them
            function.{"\n"}
            Modern medical science still persists in treating the symptom and
            not the person.{"\n"}
            In other words, there is still much about the human body that even
            the most educated doctors remain uncertain or ignorant about.{"\n"}
            The ancients were aware of the internal resources of the human body,
            the sensory organs, and the energy systems that modern medical
            science still needs to discover.{"\n"}
            {"\n"}
            {"\n"}
            Time Period of the West: The Present
            {"\n"}
            The past is gone.{"\n"}
            You cannot change the past, only learn from it. The present is
            happening right now.{"\n"}
            The future doesn't exist yet, but it can be influenced by our
            current thoughts. This is why the Present is so important, because
            it is only in the Present that we can work on Change.{"\n"}
            You create much of your future based on your beliefs. If you want a
            better Future than the Past, you need to change your belief system –
            your pattern of belief.{"\n"}
            The beliefs, values, patterns, and ideals that have been
            "programmed" into you by your parents, teachers, religious leaders,
            social customs, and the society you have lived in – have conditioned
            and shaped the Present.{"\n"}
            You were programmed for the type of life you are living now. If you
            are dissatisfied with any aspect of your life as it is now, you have
            to change the program.{"\n"}
            Your future happiness is largely in your hands. Change the beliefs
            and attitudes, and you change the program. Change the program, and
            you change the future.{"\n"}
            This was one of the secrets of the ancients.{"\n"}
            {"\n"}
            Season of the West: Autumn
            {"\n"}
            Just as autumn is one of the most beautiful times of the year, when
            the foliage is a profusion of soft and gentle colors, in the west we
            can go through some of our most beautiful spiritual experiences.
            {"\n"}
            Autumn is the time for nature to turn inward.{"\n"}
            It is the season when the essence of life begins to withdraw into
            the seed.{"\n"}
            By removing ourselves for some time from the occupation of external
            activities, we can look inward and discover truths about ourselves
            that can, ultimately, blossom into a newness of life.{"\n"}
            {"\n"}
            Number of the West: TWO and TWELVE
            {"\n"}
            Two is the number assigned to the West in the Twenty Count.{"\n"}
            Two has qualities that are soft and receptive – those of the
            feminine principle and introspection. It is the number of duality.
            {"\n"}
            All material creation, which is emphasized in the West, is an
            expression of this dualism. Duality is the most obvious thing in
            existence.{"\n"}
            It is night and day, summer and winter, inhalation and exhalation,
            hot and cold, sun and moon.{"\n"}
            Even Truth itself is dual in nature, as it is both exoteric and
            esoteric – there is the truth of what seems to be and the truth of
            what is.{"\n"}
            The teachings of the Medicine Path also have a duality of meaning.
            Two suggests union and the generation of strength being stimulated
            into form.{"\n"}
            On the inner planes, twelve is the number of organizational
            stability at a spiritual level.{"\n"}
            It also concerns the spirit of the planets.{"\n"}
            {"\n"}
            Enemy of the West: Powerlessness
            {"\n"}
            The enemy of the West is powerlessness. We need power to achieve.
            {"\n"}
            In fact, when we purify ourselves and seek to trade the garbage of
            the past for wisdom, we reach the Present and awaken our power.
            {"\n"}
            We need power as a friend and ally. The lack of power is, therefore,
            an enemy.{"\n"}
            Look around and observe how people are using the power they have.
            Often, power is being used to control the lives of others, to use
            others for entirely selfish purposes, and to satisfy lust and greed.
            {"\n"}
            This happens because victims suffer from powerlessness. Power can be
            used for good or for evil – just like electricity or nuclear energy.
            {"\n"}
            The abuse of power is very common, and that is why the ancient
            wisdom was kept and the secrets of the teachings of the Medicine
            Wheel hidden in the oral traditions of the shamans.{"\n"}
            When power is abused or misused, it is self-destructive – it can
            come back to the one who abused it or misapplied it. When power is
            used constructively and for the good of all, then it is our friend.
            {"\n"}
            Develop optimistic self-confidence. Be positive. If what you want to
            do doesn't hurt anyone, including yourself, do it. Exercise your
            power. Do not be powerless. Resist the abuse of power and
            oppression.{"\n"}
            {"\n"}
            Manifestation of the West: Magic
            {"\n"}
            Magic is a component of the West, it is the power to change things.
            {"\n"}
            Magic is not an entertainment trick, nor is it the supernatural
            trick supposedly by some religious figures and portrayed in cult
            films. True Magic is a deliberate spelling to indicate the
            difference between the magic of bringing desired changes, the magic
            of illusion and trickery, and superstition, and the magic of
            ceremonial occultism, the art of bringing desired changes.{"\n"}
            The West is also about the physical, as we have discovered, and
            before you can perform Magik, you must first learn to control the
            physical.{"\n"}
            Magic is the weaving and molding of invisible forces and energies
            into form.{"\n"}
            Thus, Magik can be described as the craft of shaping things the way
            we want them to be.{"\n"}
            The shaman, with the wisdom and knowledge to shape Magic, was,
            therefore, a ‘wise distributor’. Magic is the art of bringing into
            your life, or the life of those seeking your help, the changes that
            are desired, whether in the form of physical objects or in
            conditions and circumstances.{"\n"}
            It is the voluntary direction of energies to bring these changes
            into existence.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Il potere che viene dall’Ovest è quello dello sviluppo della forza
            interiore e dell’autosufficienza, che ci permette di affrontare le
            sfide quotidiane e le difficoltà della vita. {"\n"}È il
            riconoscimento di questa forza che risiede dentro ognuno di noi.{" "}
            {"\n"} È un momento per accumulare energia, ripensare ai progetti di
            vita e alle conoscenze, e lasciar andare ciò che è inutile, proprio
            come gli alberi perdono le loro foglie secche. {"\n"}
            L’Ovest rappresenta il “guardare dentro di sé”, l’introspezione. Un
            momento per valutare le lezioni delle azioni e acquisire esperienza
            per prendere decisioni più sagge. Per valutare le nostre vere
            intenzioni e digerirle come l’Orso nella sua caverna. {"\n"}
            Il Potere dell’Ovest simboleggia l’oscurità della caverna dell’orso,
            e anche il grembo, l’elemento Terra, la Razza Nera, il Regno
            Minerale e le sue ricchezze, il corpo fisico, le ossa. {"\n"}
            La funzione principale della Direzione Ovest nella Ruota di Medicina
            (in entrambi gli emisferi; guardando verso il Polo Sud, si trova
            alla tua destra) è trattenere, conservare. {"\n"} Il Regno Minerale
            comprende rocce, pietre, gemme e sostanze minerali come supporti e
            conduttori di grande energia. {"\n"}
            Nel pensiero nativo, rocce e pietre esistevano sul pianeta prima
            della vegetazione, degli animali e degli esseri umani, essendo
            quindi la forma di vita più antica tra i quattro regni. {"\n"}{" "}
            Vedono pietre e rocce come le “ossa di Madre Terra” e associano le
            gemme a parti del corpo fisico umano. {"\n"} Quando teniamo in mano
            un quarzo, o qualsiasi pietra, stiamo toccando qualcosa che era sul
            pianeta prima dell’arrivo dell’uomo. {"\n"}
            Il nostro corpo fisico è ciò che ci lega qui come parte della terra.
            Attraverso di esso, possiamo esplorare e sperimentare il regno
            materiale. La funzione dell’Ovest è trattenere, conservare, ma
            questo non significa stagnazione o congelare qualcosa per mantenerlo
            com’è. {"\n"} Gli antenati consideravano trattenere come una pausa
            riflessiva prima del cambiamento. Meadows lo descrive come un
            intervallo tra il dare e il ricevere o tra il ricevere e il dare.{" "}
            {"\n"}
            Un’accettazione di ciò che è stato concepito attraverso i nostri
            sforzi e la considerazione di dare di sé per sostenere la ruota
            affinché possa girare. {"\n"}
            L’Ovest è collegato, nella cosmologia nativa nordamericana, al
            guardare dentro di sé, all’introspezione. {"\n"}
            Torniamo verso l’Ovest per esaminare il nostro io interiore e
            valutare cosa dobbiamo cambiare per crescere nel nuovo ciclo che si
            avvicina. {"\n"}
            L’enfasi è sul cambiamento e sulla transizione. È anche il luogo in
            cui dobbiamo affrontare la realtà della morte. La morte come
            transizione verso un nuovo inizio. {"\n"}
            L’Ovest è anche il luogo dei sogni e delle visioni del futuro. Gli
            indigeni americani parlano di danzare un sogno ad occhi aperti,
            trasformando i sogni in realtà fisiche, essendo pratici e
            realistici. {"\n"} L’Ovest può essere paragonato all’autunno, che è
            la stagione della consolidazione quando la crescita si ferma e
            inizia la preparazione per il rinnovamento. L’Ovest può anche essere
            paragonato al crepuscolo e al cupo. {"\n"} Meadows classifica molto
            bene i componenti dell’Ovest: {"\n"}
            {"\n"}
            {"\n"}
            Qualità: Cambiamento e Transizione
            {"\n"}
            {"\n"}
            La vita è avvolta nell'incertezza e nell'inaspettato. Il cambiamento
            è inevitabile, e una cosa è certa: dal momento della nascita,
            cammini verso la morte.{"\n"}
            Immagina che la nostra iniziale caverna dell’orso sia il grembo di
            nostra madre, dove siamo nutriti prima di essere concepiti. Poi
            moriamo in quel mondo e nasciamo in questo piano.{"\n"}
            Così è la morte: moriamo in questa dimensione e nasciamo in
            un’altra, dove attraversiamo cicli, ci liberiamo della nostra
            personalità e moriamo in quella dimensione, solo per tornare in un
            nuovo grembo, con una nuova personalità che si forma. Partiamo per
            un'avventura materiale – un ciclo senza fine.{"\n"}
            Lo sciamano comprende la legge sacra e naturale secondo cui la vita
            conduce alla morte, proprio come la morte conduce alla vita.{"\n"}
            La realtà rivela che la morte è parte della vita e del processo di
            rinascita.{"\n"}È come un risveglio continuo.{"\n"} La morte è come
            il sonno, dopo il quale ci risvegliamo rinnovati.{"\n"}
            Secondo Meadows: c’è un pensiero secondo cui, al momento della
            morte, si ha la sensazione di entrare in un tunnel, di sentire suoni
            insoliti ma piacevoli, e di viaggiare verso un punto di luce
            distante.{"\n"}
            Il processo di nascita è simile, ma più traumatico. C’è una
            sensazione di suono continuo attraverso un tunnel, che è il grembo
            della madre e il portale della nascita. Con la nascita, c’è un senso
            di confinamento, di pressione verso il basso. Al contrario, con la
            morte, c’è un senso di rilascio e una pressione verso l’alto.{"\n"}
            Se, quindi, sopravvivi dopo che il corpo muore, allora sei esistito
            anche prima che il corpo portasse la tua anima – semplicemente
            perché sei lo stesso "te" in questi risvegli dopo il sonno.{"\n"}
            La morte è quindi una parte della vita, e in tutto questo contesto
            di continuità della vita opera un’altra legge cosmica: la legge del
            karma.{"\n"}
            Molti autori descrivono il karma come la legge di causa ed effetto o
            come un debito da pagare per azioni di vite passate.{"\n"}
            Secondo Meadows, il pensiero nativo ha una comprensione diversa; lo
            considerano un insegnante che mostra gli aspetti della vita fuori
            equilibrio e che necessitano di essere corretti.{"\n"}
            Queste sono le situazioni ripetitive della vita – i dischi rotti, i
            vecchi problemi che tornano continuamente sotto circostanze diverse.
            {"\n"}
            Comprende le lezioni della nostra vita che fanno parte del nostro
            destino. Lezioni che dobbiamo imparare per crescere spiritualmente,
            evolverci e così compiere la missione della nostra esistenza. Lo
            sciamano conosceva una Legge Sacra che era anche una legge naturale,
            perché ne osservava l’azione intorno a lui: la vita conduce alla
            morte. Ma conosceva anche il lato opposto di questa legge: la morte
            conduce alla vita.{"\n"}
            Lo sapeva e lo capiva, perché Vita e Morte sono semplicemente giri
            del Cerchio.{"\n"}
            Tutti hanno paura della morte. Ma la morte è l’esperienza più
            traumatica che probabilmente affronterai?{"\n"}
            Considera questo: la morte potrebbe essere più traumatica del tuo
            ingresso nella vita? Quello è stato un viaggio.{"\n"}
            L’Essenza di Te doveva essere contenuta in un veicolo di carne e
            ossa, assemblato e formato all’interno dell’addome di una donna.
            {"\n"}
            Poi, a tempo debito, saresti stato spinto attraverso un minuscolo
            tunnel soffocante verso la luce. Sarebbe stata un’esperienza
            claustrofobica.{"\n"}E passando attraverso quel tunnel stretto e
            confinato, il tuo sistema di supporto vitale sarebbe stato tagliato.
            {"\n"}
            Saresti stato completamente indifeso per molti mesi, alla mercé di
            un essere umano inesperto che avrebbe affermato di essere tua madre.
            {"\n"}
            Anche quando saresti stato in grado di assumere il pieno controllo
            del veicolo che ti era stato fornito, ti saresti trovato di fronte a
            tutti i traumi, i drammi, i pericoli e le incertezze della vita.
            {"\n"}
            Peggio ancora. ... Peggio? Sicuramente non potrebbe essere peggio?
            {"\n"}
            Peggio – avresti perso tutta la memoria di chi sei, di cosa sei, da
            dove vieni e perché hai fatto il viaggio in primo luogo.{"\n"}
            Se questa è la Vita, sicuramente la Morte non può essere così
            brutta?{"\n"}
            Naturalmente, il concetto con cui siamo stati indottrinati è che la
            morte è la fine della vita.{"\n"}
            Ma la realtà, come la natura cerca di mostrarci, è che la morte è
            parte della vita.{"\n"}
            La morte fa parte del processo di rinascita. E hai un esempio per
            dimostrarlo ogni giorno.{"\n"}
            Non hai paura di andare a dormire la sera.{"\n"}
            Alla fine della giornata, il tuo corpo è stanco e la tua mente cerca
            un rinfresco.{"\n"}
            In realtà, non vedi l’ora di fare una buona notte di sonno e
            svegliarti il giorno successivo sentendoti ringiovanito,
            rivitalizzato e ricaricato con una “nuova” energia, pronto per
            iniziare un altro nuovo giorno.{"\n"}
            Ti svegli la mattina successiva come esattamente lo stesso individuo
            consapevole che eri la sera precedente.{"\n"}
            La morte, come il sonno, non è nemmeno una fine, ma parte di un
            processo creativo in cui l’anima viene portata in un luogo di riposo
            e rinnovamento.{"\n"}
            Se, quindi, sopravvivi dopo che il corpo muore, allora sei esistito
            anche prima della nascita del corpo – proprio come è lo stesso "te"
            che si sveglia dopo il sonno.{"\n"}
            La morte è, quindi, una parte della vita, ed è in tutto questo
            contesto di continuità della vita che opera un’altra legge cosmica –
            la Legge del Karma.{"\n"}
            Esistono molte teorie sul karma.{"\n"}
            Una è che si tratta semplicemente di causa ed effetto – ciò che
            viene seminato viene infine raccolto.{"\n"}
            Circostanze avverse, prove e tribolazioni, mancanze e fardelli, sono
            considerate da questa scuola di pensiero come carichi karmici per
            compensare alcune trasgressioni del passato, anche di una vita
            precedente.{"\n"}
            Lo sciamano indiano lo comprendeva in modo diverso e più positivo.
            Il karma è un insegnante che indica dove gli aspetti della vita sono
            fuori equilibrio e necessitano di essere corretti.{"\n"}
            Le esperienze karmiche sono schemi ripetitivi nella vita – lo stesso
            vecchio problema o problemi ricorrenti più e più volte, forse sotto
            diverse spoglie e condizioni.{"\n"}
            In altre parole, il karma comprende le lezioni di vita che fanno
            parte del destino di una persona.{"\n"}
            Queste sono esperienze di apprendimento predeterminate, incontrate
            per aiutarci a crescere, svilupparci ed evolverci spiritualmente,
            affinché possiamo adempiere al vero scopo della nostra vita, che è
            l’educazione e lo sviluppo dell’Anima e dello Spirito.{"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            Totem Animale dell’Ovest: Orso Grizzly {"\n"}
            {"\n"}
            L’orso è noto per la sua grande forza. Possiamo paragonare questa
            forza non tanto al potere fisico, quanto al potere interiore – come
            quello che arriva sulla Terra in autunno, che è la stagione
            dell’Ovest. Gli indigeni hanno osservato che l’Orso sembrava essere
            introspettivo quando doveva prendere decisioni, e questa qualità è
            servita come esempio per l’essere umano, che dovrebbe anch’esso
            guardare dentro di sé prima di prendere decisioni importanti. {"\n"}
            Anche noi dobbiamo guardarci dentro per determinare i nostri punti
            di forza e di debolezza e dobbiamo esaminare il nostro cuore per
            valutare le nostre vere intenzioni, se vogliamo imparare le lezioni
            necessarie e prendere decisioni sagge. {"\n"}
            L’Orso conosceva così bene la Terra da sapere cosa fosse necessario
            per aiutare a curare malattie o ferite. {"\n"}
            Possiamo imparare dall’Orso concentrandoci su alimenti più naturali
            per sostenere il corpo, invece di cibi industriali e trasformati, e
            sui rimedi naturali per mantenere la salute fisica – quelli che non
            hanno effetti collaterali dannosi. {"\n"}
            Proprio come l’Orso si prepara al periodo di rinnovamento durante il
            letargo, rafforzando il suo corpo, dobbiamo prima prenderci cura del
            fisico e delle questioni quotidiane, mettendo in ordine i nostri
            affari prima che il rinnovamento spirituale possa avvenire. {"\n"}
            {"\n"}
            {"\n"}
            Elemento dell’Ovest: Terra {"\n"}
            {"\n"}
            L'Elemento dell'Ovest è la Terra, rappresentata dal suo figlio più
            durevole e forte, la pietra.{"\n"}
            La pietra non suggerisce solo la solidificazione ma anche la
            resilienza (resistere alla pressione ed essere flessibili di fronte
            alle sfide) e la sicurezza.{"\n"}
            La terra è lo yin, il passivo, il ricettivo, la nutrizione. È
            movimento in riposo. La Terra Elementale è la "sostanza" che prende
            forma e diventa tangibile e riconoscibile – venendo "sulla terra".
            {"\n"}
            Le caratteristiche dell’Elemento Terra sono solidità, inerzia e
            stabilità. È movimento a riposo. L’Elemento Terra è la “sostanza”
            elementare che assume forma e consistenza, diventando tangibile e
            riconoscibile – “arrivando alla terra”. La materia è ciò che sembra
            essere. {"\n"}È importante ricordare che la materia è un’apparenza,
            e questo rende l’Elemento Terra forse il meno compreso tra le
            sostanze elementari. {"\n"}A livello pratico, passiamo molto del
            nostro tempo preoccupandoci di acquisire cose fisiche e tangibili,
            ma allo stesso tempo non ci piacciono le restrizioni e le
            limitazioni che il materiale ci impone. {"\n"}
            L’Ovest è il luogo del materiale, delle apparenze, del mondo della
            forma, della manifestazione fisica e dell’apprendimento per
            affrontarlo. {"\n"}
            Non puoi sviluppare la tua coscienza spirituale rifiutando il
            materiale o voltandogli le spalle. Il fisico e il materiale fanno
            parte della Creazione, non qualcosa da scartare in una ricerca
            errata di “spiritualità”, né qualcosa da respingere come
            intrinsecamente “cattivo”. {"\n"}
            Non lasciarti ingannare da un senso di falsa spiritualità. Sei qui
            nel mondo materiale della forma. Vivi nel mondo materiale della
            forma, e parte del motivo per cui sei qui è imparare a padroneggiare
            il materiale attraverso l’uso delle leggi naturali e delle forze e
            dei principi cosmici. {"\n"}
            Il lavoro spirituale ha poco valore, a meno che non possa essere
            radicato. {"\n"}
            Non pensi che abbia dato gioia all’Intelligenza Cosmica portare il
            mondo fisico della forma nella manifestazione? {"\n"}
            Esci in campagna, in un parco o in un bosco e guarda la bellezza
            della Terra naturale. Anche se gran parte di essa è stata modellata
            dall’uomo attraverso la coltivazione, non ti dà forse un’emozione di
            piacere assorbirne la magnificenza? {"\n"}
            Non siamo qui per rifiutare il materiale in favore di qualche
            alternativa spirituale nebulosa, ma per apprezzare il fisico e, allo
            stesso tempo, cercare la realtà che c’è dietro. {"\n"}
            Entrambi devono coesistere in un’uguale collaborazione. Gli oggetti
            fisici appaiono e si sentono solidi solo perché i loro atomi ruotano
            a velocità fantastiche. {"\n"}
            Come in un film, persone e veicoli sembrano muoversi, ma ciò che
            vediamo è una successione di immagini statiche proiettate a una
            velocità tale da sembrare movimento, ma l’apparenza è, in realtà,
            un’illusione. {"\n"}
            Un atomo è per lo più spazio. Tutta la materia è tanto spaziosa
            quanto l’universo sembra essere, e le particelle all’interno
            dell’atomo sono come stelle e pianeti che si muovono in un modello
            continuo. {"\n"}
            Se potessimo viaggiare abbastanza lontano nello spazio esterno e
            guardare l’universo, anche esso apparirebbe solido. {"\n"}
            La Terra è spesso rappresentata dalla sua forma più durevole – una
            pietra. Una pietra suggerisce non solo solidità, ma anche resilienza
            e sicurezza – qualità delle persone fortemente influenzate
            dall’Elemento Terra. {"\n"}
            La Terra è yin – passiva, ricettiva, stimolante. {"\n"}
            {"\n"}
            {"\n"}
            Colore dell’Ovest: Nero
            {"\n"}
            {"\n"}
            La luce emerge dalle tenebre, e il nero è il colore della mancanza
            di forma da cui tutto nasce.{"\n"}
            Il nero assorbe, immagazzina e protegge. È il colore del mistero,
            delle profondità nascoste e dei desideri segreti.{"\n"}
            Il nero è legato all’inconscio e alla germinazione. Senza l’oscurità
            non potrebbe esserci luce, poiché l’oscurità è l’opposto della luce
            e ne contrasta le qualità specifiche.{"\n"}
            Il nero assorbe tutti i colori dentro di sé ed è la polarità
            ricettiva dello spettro cromatico. È il colore dell’introspezione e
            del ritiro, collegato alla dispersione e alla trasformazione.{"\n"}
            Il nero è associato all’aspetto femminile della nostra natura – sia
            maschile che femminile – con la ricettività, la sensibilità e i
            sentimenti più profondi.{"\n"}
            {"\n"}
            {"\n"}
            Regno dell’Ovest: Regno Minerale
            {"\n"}
            {"\n"}
            Quando la Terra era nel suo stadio embrionale, le rocce primitive si
            svilupparono come lo scheletro umano e possono essere considerate
            come le “ossa” della Terra. Allo stesso modo, la superficie
            terrestre può essere paragonata alla pelle, gli alberi e la
            vegetazione ai capelli, e così via.{"\n"}I popoli indigeni
            consideravano i cristalli di quarzo, ad esempio, come le cellule
            cerebrali della Nonna Terra.{"\n"}
            Gli sciamani sapevano che, sebbene rocce e pietre non abbiano occhi
            come gli animali, possiedono un senso di “vista”; e, pur non avendo
            orecchie, ci sono pietre che “sentono”. Per lo sciamano esisteva una
            connessione tra gli organi sensoriali umani e alcune pietre che
            avevano poteri curativi per l’organo specifico a cui erano
            associate.{"\n"}
            Il berillo e l’acquamarina erano collegati alla vista, l’onice
            all’udito, la corniola al tatto, il topazio al gusto, il diaspro
            all’olfatto, il rubino all’intuizione e l’opale all’intelletto.
            {"\n"}
            Il Regno Minerale è visto come il custode e controllore dell’energia
            ed è il più antico dei regni, poiché rocce e pietre esistevano sulla
            Terra prima delle piante, degli animali o degli esseri umani.{"\n"}
            Il cristallo di quarzo era particolarmente venerato. Ha proprietà
            molto speciali, non solo come magazzino e trasformatore di energia,
            ma anche perché possiede la stessa composizione chimica (SiO₂) della
            silice, un minerale naturale presente nel corpo umano. Oggi è
            universalmente utilizzato in calcolatrici, orologi, computer e molto
            altro.{"\n"}
            Il corpo umano dipende da minerali inorganici essenziali.{"\n"}
            Infatti, i disturbi del corpo umano possono spesso essere attribuiti
            a carenze di uno o più di questi minerali inorganici che, come
            depositi di energia, devono essere rinnovati o sostituiti.{"\n"}
            Ad esempio, una carenza di calcio può causare problemi alle ossa, in
            particolare alle articolazioni, mentre la mancanza di sodio può
            portare a problemi digestivi e persino al reumatismo.{"\n"}
            {"\n"}
            {"\n"}
            Corpo Celeste: Madre Terra Il pensiero nativo tratta la terra come
            un essere vivente e veramente come la sua 'madre'. È lei che ha
            fornito il tuo corpo fisico, la cui sostanza è la sua sostanza, ed è
            in lei che le entità dello spirito possono incarnarsi e sperimentare
            il regno fisico.{"\n"}
            Bisogna dare amore e cura alla Madre Terra, con lo stesso sentimento
            ed emozione che dovremmo riservare agli esseri umani. È la Madre che
            ci dà tutto – dimora, acqua, cibo e bellezza. Ci accoglie con ogni
            vita e abbraccia amorevolmente la nostra carne nella morte.{"\n"}
            L'Ovest, quindi, è un luogo appropriato per chiederci: ‘Non dovremmo
            amare la Madre Terra come i nativi amavano la Terra e tutte le cose
            della Terra?’ Perché se ci manca un vero rispetto per la Terra e per
            qualsiasi creatura vivente, non rischiamo di perdere il rispetto per
            la sacralità della vita stessa?{"\n"}
            La storia, purtroppo, indica che lo facciamo. È solo avvicinandoci
            alla Madre Terra come un bambino cerca di stare vicino alla propria
            madre che possiamo diventare sensibili ai poteri della Terra.{"\n"}
            {"\n"}
            {"\n"}
            Aspetto Umano: Corpo Fisico.
            {"\n"}
            Il corpo fisico è un veicolo o un abito per l'abitazione dello
            Spirito e dell'Anima. Quando le forze che operano nel corpo fisico
            sono in armonia ed equilibrio, il corpo è in buona salute.{"\n"}
            Se c'è disarmonia o squilibrio, queste si materializzano come
            malattia o infermità.{"\n"}
            Mantenere una buona salute è una questione di mantenere le forze
            all'interno del corpo in armonia adeguata. Ripristinare una buona
            salute si ottiene attraverso l'equilibrio di queste forze.{"\n"}
            Il lato positivo degli elementi che operano nel corpo esegue i
            processi di costruzione, sostegno e riparazione, mentre gli aspetti
            negativi sono legati alla dissoluzione e alla rottura.{"\n"}
            Il "punto di equilibrio" neutro riguarda la conservazione.{"\n"}
            Il nostro corpo fisico è una macchina complessa e sofisticata, il
            veicolo più meraviglioso mai inventato. Tuttavia, nonostante i
            progressi della scienza medica e della ricerca, gli esseri umani
            sono ancora ignoranti su perché alcune parti del corpo funzionino
            come fanno e cosa le faccia funzionare realmente.{"\n"}
            La scienza medica moderna persiste nel trattare il sintomo e non la
            persona.{"\n"}
            In altre parole, c'è ancora molto sul corpo umano che anche i medici
            più istruiti rimangono incerti o ignoranti.{"\n"}
            Gli antichi erano consapevoli delle risorse interne del corpo umano,
            degli organi di senso e dei sistemi di energia che la scienza medica
            moderna deve ancora scoprire.{"\n"}
            {"\n"}
            {"\n"}
            Periodo di Tempo dell'Ovest: Il Presente
            {"\n"}
            Il passato è andato.{"\n"}
            Non puoi cambiare il passato, solo imparare da esso. Il presente sta
            accadendo ora.{"\n"}
            Il futuro non esiste ancora, ma può essere influenzato dai nostri
            pensieri attuali. Ecco perché il Presente è così importante, perché
            è solo nel Presente che possiamo lavorare sul Cambiamento.{"\n"}
            Crei gran parte del tuo futuro in base alle tue credenze. Se vuoi un
            Futuro migliore del Passato, devi cambiare il tuo sistema di
            credenze – il tuo modello di credenza.{"\n"}
            Le credenze, i valori, i modelli, e gli ideali che sono stati
            "programmati" in te dai tuoi genitori, insegnanti, leader religiosi,
            costumi sociali e dalla società in cui hai vissuto – hanno
            condizionato e plasmato il Presente.{"\n"}
            Sei stato programmato per il tipo di vita che stai vivendo ora. Se
            sei insoddisfatto di qualsiasi aspetto della tua vita così com'è
            ora, devi cambiare il programma.{"\n"}
            La tua felicità futura è in gran parte nelle tue mani. Cambia le
            credenze e le attitudini, e cambi il programma. Cambia il programma
            e cambi il futuro.{"\n"}
            Questo era uno dei segreti degli antichi.{"\n"}
            {"\n"}
            Stagione dell'Ovest: Autunno
            {"\n"}
            Proprio come l'autunno è una delle stagioni più belle dell'anno,
            quando il fogliame è una profusione di colori morbidi e delicati,
            nell'ovest possiamo passare alcune delle nostre esperienze
            spirituali più belle.{"\n"}
            L'autunno è il tempo per la natura di volgere verso l'interno.{"\n"}
            È la stagione in cui l'essenza della vita inizia a ritirarsi nel
            seme.{"\n"}
            Ritirandoci per un po' dalle occupazioni delle attività esterne,
            possiamo guardare dentro e scoprire verità su noi stessi che alla
            fine possono fiorire in una novità di vita.{"\n"}
            {"\n"}
            Numero dell'Ovest: DUE e DODICI
            {"\n"}
            Due è il numero assegnato all'Ovest nei Venti Conti.{"\n"}
            Due ha qualità morbide e ricettive – quelle del principio femminile
            e dell'introspezione. È il numero della dualità.{"\n"}
            Tutta la creazione materiale, che è enfatizzata nell'Ovest, è
            un'espressione di questo dualismo. La dualità è la cosa più evidente
            dell'esistenza.{"\n"}È notte e giorno, estate e inverno,
            inspirazione ed espirazione, caldo e freddo, sole e luna.{"\n"}
            Anche la stessa Verità è duale per natura, poiché è esoterica ed
            esoterica – c'è la verità di ciò che sembra essere e la verità di
            ciò che è.{"\n"}
            Gli insegnamenti del Cammino della Medicina hanno anche una dualità
            di significato. Due suggerisce l'unione e la generazione di forza
            stimolata nella forma.{"\n"}
            Nei piani interiori, dodici è il numero della stabilità
            organizzativa a livello spirituale.{"\n"}
            Si preoccupa anche dello spirito dei pianeti.{"\n"}
            {"\n"}
            Nemico dell'Ovest: Impotenza
            {"\n"}
            Il nemico dell'Ovest è l'impotenza. Abbiamo bisogno di potere per
            raggiungere.{"\n"}
            Infatti, quando ci purifichiamo e cerchiamo di scambiare la
            spazzatura del passato con saggezza, arriviamo al Presente e
            risvegliamo il nostro potere.{"\n"}
            Abbiamo bisogno del potere come amico e alleato. La mancanza di
            potere è, quindi, un nemico.{"\n"}
            Guarda intorno a te e osserva come le persone stanno usando il
            potere che hanno. Spesso, il potere viene utilizzato per controllare
            la vita degli altri, per usare gli altri per scopi completamente
            egoistici e per soddisfare la lussuria e l'avidità.{"\n"}
            Questo accade perché le vittime soffrono di impotenza. Il potere può
            essere usato per il bene o per il male – proprio come l'elettricità
            o l'energia nucleare.{"\n"}
            L'abuso di potere è molto comune ed è per questo che la saggezza
            antica è stata custodita e i segreti degli insegnamenti della Ruota
            della Medicina sono nascosti nelle tradizioni orali degli sciamani.
            {"\n"}
            Quando il potere viene abusato o mal utilizzato, è autodistruttivo –
            può tornare a chi lo ha abusato o mal applicato. Quando il potere
            viene usato costruttivamente e per il bene di tutti, allora è nostro
            amico.{"\n"}
            Sviluppa autostima ottimista. Sii positivo. Se ciò che desideri fare
            non ferisce nessuno, nemmeno te stesso, fallo. Esercita il tuo
            potere. Non essere impotente. Resisti all'abuso di potere e
            all'oppressione.{"\n"}
            {"\n"}
            Manifestazione dell'Ovest: Magia
            {"\n"}
            La magia è un componente dell'Ovest, è il potere di cambiare le
            cose.{"\n"}
            La magia non è un trucco di intrattenimento, né un trucco
            soprannaturale supposto da alcune figure religiose e rappresentato
            nei film cult. La vera Magia è una grafia deliberata per indicare la
            differenza tra la magia di portare i cambiamenti desiderati, la
            magia dell'illusione e dell'inganno, e la superstizione, e la magia
            dell'occultismo cerimoniale, l'arte di portare i cambiamenti
            desiderati.{"\n"}
            L'Ovest riguarda anche il fisico, come abbiamo scoperto, e prima di
            poter eseguire il Magik, prima devi imparare a controllare il
            fisico.{"\n"}
            La magia è la tessitura e la modellatura di forze ed energie
            invisibili nella forma.{"\n"}
            Pertanto, il Magik può essere descritto come l'arte di modellare le
            cose nel modo in cui vogliamo che siano.{"\n"}
            Lo sciamano, con la saggezza e la conoscenza per modellare la Magia,
            era quindi un ‘distributore saggio’. La magia è l'arte di portare
            nella tua vita, o nella vita di chi cerca il tuo aiuto, i
            cambiamenti desiderati, sia sotto forma di oggetti fisici che in
            condizioni e circostanze.{"\n"}È la direzione volontaria delle
            energie per portare questi cambiamenti all'esistenza.
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
    width: '100%',
    height: '100%',
    opacity: 0.95
  },
  header: {
    borderBlockColor: 'white',
   borderColor: 'white',
  }
});
