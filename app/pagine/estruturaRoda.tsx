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
import WheelStructure from "@/components/WheelStructure";
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
        {language === "prt" && (
          <Text style={styles.title}>A Estrutura da Roda Medicinal</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>The Structure of the Medicine Wheel</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>La struttura della Ruota Medicinale</Text>
        )}

        {language === "prt" && (
          <>
            <Text style={styles.testo}>
            A Roda que trabalhamos
            deriva de milhares de rodas medicinais existentes no mundo.{"\n"}
              É composta por 36 posições, representadas por pedras alinhadas de
              forma circular: {"\n"}</Text>
              
              <WheelStructure />
           
              <Text style={styles.subTitle}>
                1. Criador {"\n"}
                2. Terra {"\n"}
                3. Sol {"\n"}
                4. Lua {"\n"}
                5. Elemento Terra (Clã da Tartaruga) {"\n"}
                6. Elemento Agua (Clã do Sapo) {"\n"}
                7. Elemento Fogo (Clã do Passaro Trovão) {"\n"}
                8. Elemento Ar (Clã da Borboleta) {"\n"}
                9. Direçao Norte {"\n"}
                10. Direçao Leste {"\n"}
                11. Direçao Sul {"\n"}
                12. Direçao Oeste {"\n"}
                13. Lua da Renovaçao {"\n"}
                14. Lua da Limpeza {"\n"}
                15. Lua dos Ventos Fortes {"\n"}
                16. Lua dos Novos Começos {"\n"}
                17. Lua do Crescimento Interior {"\n"}
                18. Lua da Floraçao {"\n"}
                19. Lua dos Dias Longos {"\n"}
                20. Lua do Amadurecimento {"\n"}
                21. Lua da Abundancia {"\n"}
                22. Lua do Cair das Folhas {"\n"}
                23. Lua da Decomposiçao {"\n"}
                24. Lua das Noites Longas {"\n"}
                25. Caminho Espiritual da Limpeza {"\n"}
                26. Caminho Espiritual da Renovaçao {"\n"}
                27. Caminho Espiritual da Sabedoria {"\n"}
                28. Caminho Espiritual da Clareza {"\n"}
                29. Caminho Espiritual da Iluminaçao {"\n"}
                30. Caminho Espiritual da Pureza {"\n"}
                31. Caminho Espiritual do Crescimento {"\n"}
                32. Caminho Espiritual da Confiança/Fé {"\n"}
                33. Caminho Espiritual do Amor {"\n"}
                34. Caminho Espiritual da Experiencia {"\n"}
                35. Caminho Espiritual do Introspecçao {"\n"}
                36. Caminho Espiritual da Força
              </Text>
      
              
              <Text style={styles.testo}>{"\n"}A primeira pedra, bem no centro (de onde emana
              toda a vida), representa o Criador.{"\n"} Pode ser uma pedra ou algum
              objeto que emane poder, justamente por ter um sentido especial
              para a pessoa (anel, medalha), ou pode ser um espaço vazio, pois o
              Criador é tudo ou nada a um só tempo.{"\n"} A pedra do Criador ensina
              sobre a nossa habilidade para criar, sobre a nossa fé, nosso
              sentido de sagrado e aptidões, para nos desenvolvermos e sermos
              completos. {"\n"}{"\n"}Em torno do Criador forma-se o círculo central
              constituído por sete pedras, simbolizando a fundação dos blocos de
              toda a vida. Sempre no sentido anti-horário no Hemisfério Sul e
              horário para o Hemisfério Norte.{"\n"}{"\n"} Na direção do quadrante inferior,
              do lado esquerdo, a pedra da Mãe Terra, que nos dá nosso lar com
              nossas vidas.{"\n"} Representa o amor e os novos começos para a Mãe
              Terra, e nos ensina a nutrição da energia feminina em nós e sobre
              a Terra. Você pode procurar esta pedra quando precisar de soluções
              para os problemas ecológicos, para enfrentar questões de
              infertilidade, se estiver em vias de tonar-se pai/mãe ou para ser
              mais amoroso com seus filhos.{"\n"}{"\n"} Ao lado, à direita da Mãe Terra está
              a terceira pedra: Pai Sol.{"\n"} Associada ao crescimento e a claridade.
              E onde nós podemos obter mais energia para expandir nossa vida.
              Ela nos dá o conhecimento sobre a energia masculina, nos ensina
              sobre a discriminação e a habilidade curativa.{"\n"} Sobre a realização
              dos nossos pensamentos e a aquisição de coragem.{"\n"}{"\n"} A quarta pedra é
              a da Avó Lua, guia dos nossos sonhos e visões. Ela nos ajuda a
              incrementar a nossa intuição e capacidades psíquicas, nos ensina
              sobre a nossa sensualidade e sexualidade, sobre o nosso lado
              emocional, levando-nos a entender as nossas emoções profundas, a
              face sombria do nosso ser.{"\n"}{"\n"} As quatro pedras restantes do círculo
              central da roda medicinal correspondem aos quatro elementos
              (terra, água, fogo e ar) e compõem os clãs elementais, que nos
              permitem receber poderes dos espíritos e colocá-los à disposição
              da comunidade (povo).{"\n"}{"\n"} A pedra do Clã da Tartaruga equivale ao
              elemento terra. É o clã mais denso, estável e lento,
              caracterizando pessoas práticas, realistas, perseverantes, com
              discernimento em suas opiniões.{"\n"} Esta pedra é ideal para as pessoas
              que se sentem fora do chão.{"\n"}{"\n"} A pedra do Clã do Sapo responde pelo
              elemento água, tem poderes de limpeza e transformação, indica
              mudanças lentas, porém firmes. Nesta posição, você pode aprender
              sobre sua própria fluidez, sobre sua capacidade de mudar
              constantemente e deixar seu coração comandar sua cabeça.{"\n"} Também
              lhe ensina a limpar certos resíduos (mágoas, ressentimentos,
              culpas) acumulados no seu ser, bem como a dar importância à
              limpeza da Terra.{"\n"} Pessoas do Clã do Sapo tocam com desenvoltura as
              emoções dos outros. Esta pedra ajuda no trato e na cura das
              próprias emoções, principalmente bloqueios, e traz a consciência
              sobre nossas habilidades psíquicas e intuitivas.{"\n"}{"\n"} A sexta pedra é
              do Clã do Pássaro Trovão regido pelo fogo. {"\n"}Vitalidade e
              transformação são suas idéias-chave. O Pássaro Trovão traz dádivas
              como o magnetismo, carisma, coragem, o otimismo. Seus poderes
              relacionam-se com a inovação, a paixão, a transmutação.{"\n"}
              Entretanto, pessoas deste clã devem aprender a temperar a sua
              intensidade para evitar possíveis doenças.{"\n"} De fato, o fogo tanto
              pode trazer calor à vida como a destruição. {"\n"}{"\n"}Este primeiro círculo
              fecha-se com a oitava pedra do Clã da Borboleta. Associada ao
              elemento ar, este clã reúne pessoas ágeis, rápidas, energéticas,
              espalhafatosas, exóticas, idealistas e visionárias.{"\n"} O senso de
              discriminação é uma das principais lições da Borboleta, cuja
              posição pode lhe ensinar sobre suas reais necessidades e
              capacidades de mudança. É a pedra de quem está precisando
              tornar-se mais articulado, mais criativo, etérico ou inovador, de
              quem quer aprender mais sobre o próprio intelecto ou deseja atrair
              transformações para sua vida.{"\n"} Pode mostrar-lhe a maneira de
              sintetizar os seus conhecimentos adquiridos.{"\n"}{"\n"} Acompanhando a
              sequência das pedras, o próximo passo é colocar as quatro pedras
              âncora do círculo externo da roda medicinal, que se alinham com os
              pontos cardeais e seus respectivos espíritos guardiões,
              representados por animais.{"\n"}{"\n"} No topo da roda está a Direção Sul (no
              Hemisfério Sul, e Norte no Hemisferio Norte), a morada do Búfalo: tem relações com o inverno, a
              cor branca e o elemento ar. Suas propriedades são: beleza,
              alinhamento, ressonância harmônica, conhecimento, sabedoria,
              imaginação ilimitada. Lugar do intelecto, dos seres animais, dos
              sábios e dos anciãos. {"\n"}A mensagem da Direção Sul avisa que “algum
              tipo de sabedoria chegará para quem está consultando”. A sabedoria
              é um caminho em que podemos experimentar a ordem natural do
              universo e aplicá-la a nossa vida.{"\n"} O conhecimento é a verdade
              sendo experimentada em nossa vida. Nesta direção, temos de
              aprender a lição e descobrir a origem do senso de si mesmo. O
              total sucesso dessa lição deve ser acompanhado de orações de
              agradecimento ou contentamento.{"\n"} Lembre-se de que o presente da
              sabedoria está no coração e permanece vivo tanto quanto é honrado
              e abençoado.{"\n"}{"\n"} A pedra da direção Leste é guardada pelo espírito
              guardião da Águia Dourada e está relacionada com a primavera, a
              cor amarela e o elemento fogo. {"\n"}Suas propriedades são: local de
              iluminação e do nascer do Sol, luz espiritual, masculino elevado,
              inspiração, criatividade, visão, consciência elevada.{"\n"} A mensagem
              do Leste fala da “necessidade de claridade em alguma parte da
              nossa vida. Em caso de confusão, este é o momento de colocar a
              vida cm ordem. Também podemos estar sendo convocados a ajudar
              outros a encontrar a claridade. Ser criativo e ousado é a ordem
              para trilharmos o nosso conceito de quem realmente somos
              aventurando-nos em novos entendimentos.{"\n"} O Leste assinala um tempo
              de nova liberdade. Por isso devemos observar os pensamentos que
              nos cegam, limpar a nossa cegueira e enxergar com olhos de águia”.{"\n"}{"\n"}
              A pedra da direção Norte (para o Hemisferio Sul, e Sul para o Hemisferio Norte) é onde se senta o Coiote, associa-se com
              o verão, a cor vermelha e o elemento água.{"\n"} São suas propriedades a
              confiança, a inocência, a fé, a humildade; é o lugar das emoções,
              das crianças e das plantas, de permanecer dentro, da essência e de
              deixar fluir, de não se apropriar das emoções.{"\n"} A mensagem do Norte
              “marca um tempo de retomo à infância, a necessidade de livrar-se
              do ego”. É preciso eliminar o nervosismo antes de se iluminar.{"\n"}
              Exercícios físicos acalmam os músculos e recuperam a confiança. A
              direção nos mostra alguma forma de conduzir a situação. Note “que
              quanto mais sério é o jogador, menores são suas chances de
              vencer”.{"\n"} O equilíbrio da Sagrada irreverência.{"\n"}{"\n"} Por fim, a pedra da
              direção Oeste está representada pela Ursa Parda e corresponde ao
              outono, a cor preta e ao elemento terra.{"\n"} Suas propriedades são:
              introspecção, intuição, útero da mãe, mundo subterrâneo, corpo da
              Mãe Terra, escuridão, feminino profundo, morte.{"\n"} A mensagem do
              Oeste “fala dos talentos que possuímos para chegar às nossas
              metas. É o conhecimento de nossas próprias forças e o poder para
              achar e descobrir nossas próprias respostas.{"\n"} Se nos esquecemos de
              ficar cm silêncio, (caverna da Ursa) as opiniões alheias
              misturam-se com nossas dúvidas e criam limitações”.{"\n"}{"\n"} As 12 pedras
              vistas ate aqui geram todas as 24 posições restantes da roda.
              Ainda no circulo externo, encontraremos as pedras correspondentes
              às 12 Luas, que dividem o ano a maneira das 12 constelações do
              zodíaco.{"\n"} Essas Luas nos ensinam sobre as estações, sobre cada hora
              do dia e da vida, sobre cada mineral, planta, animal, elementais,
              espíritos guardiões e nos informam inclusive sobre os tipos
              humanos nascidos nos seus períodos de influência.{"\n"} Vejamos uma
              síntese do seu funcionamento.{"\n"} Começando no lado esquerdo do ponto
              Sul (para o Hemisfério Sul) sentido anti-horário: {"\n"}{"\n"}Começamos com a
              Lua da Renovação, a primeira lua do Inverno.{"\n"} Seu animal é o Ganso Polar. Ela
              lhe ensina a ser claro, adaptável, fluente, prudente e sábio.{"\n"}{"\n"} A
              Lua da Purificação, tem por animal a Lontra.{"\n"}
              Ajuda a desenvolver habilidades físicas, a descobrir talentos, a
              ter coragem, a ser humanitário e a cultivar a sua face suave e
              gentil.{"\n"}{"\n"} A Lua dos Ventos Fortes tem por animal o
              Puma.{"\n"} Ensina sobre a sua sensitividade, seu anseio por
              espiritualidade, sua hesitação em expressar sentimentos, sua
              necessidade de pisar na Terra.{"\n"}{"\n"} A Lua dos Novos Começos tem por animal o Falcão Vermelho. {"\n"}Ensina sobre a energia, a
              intensidade, a catalisação de mudanças, a audácia e o otimismo.{"\n"}{"\n"} A
              Lua da Crescimento Interior tem por animal o
              Castor.{"\n"} Ensina sobre a perseverança, a paciência e a
              praticabilidade.{"\n"}{"\n"} A Lua da Floração tem por
              animal o Cervo.{"\n"} Ensina sobre a própria beleza, a beleza dos outros
              e do meio ambiente, sobre suas próprias habilidades curativas. A
              Lua dos Dias Longos tem por animal o Pica-Pau.{"\n"}
              Ensina sobre a lei dos relacionamentos, sobre a família maternal e
              a nutrição, sobre a importância das emoções.{"\n"}{"\n"} A Lua do
              Amadurecimento tem por animal o Esturjão.{"\n"} Ensina
              a trabalhar com o centro do coração, a demonstrar afeição, a
              encarar temores, a desenvolver a capacidade de liderança.{"\n"}{"\n"} A Lua
              Abundância tem por animal o Urso Marrom. {"\n"}Ensina
              imparcialidade, decisões justas, bom senso, perseverança,
              confiança e habilidade para analisar.{"\n"}{"\n"} A Lua do Cair das Folhas tem por animal o Corvo. {"\n"}Ensina como mostrar afeição
              física e como ser confortável na Terra e no Céu. Dá entendimento
              dos seus relacionamentos com grupos.{"\n"}{"\n"} A Lua da Decomposição tem por animal a Cobra.{"\n"} Ensina sobre a extensão da
              sua própria energia, sobre sua habilidade para criar mudanças,
              sobre a curiosidade e desejo de verdade.{"\n"}{"\n"} A Lua das Noites Longas
             tem por animal o Alce. {"\n"}Ensina a força mental, os
              relacionamentos, os ensinamentos, a comunicação.{"\n"}{"\n"}{"\n"} Agora só faltam
              os quatro caminhos espirituais de cada quadrante para completar
              toda a Roda Medicinal.{"\n"} São os caminhos formados por cada carreira
              de três pedras que partem dos quatro pontos cardeais, dos
              espíritos guardiões, em direção ao centro do círculo. São as
              qualidades/virtudes que devemos desenvolver para retomarmos ao
              Centro da Vida, ao Criador.{"\n"}{"\n"} São elas: {"\n"}Caminho Espiritual do Sul (Hemisferio Sul , Norte para Hemisferio Norte ):{"\n"}
              Limpeza, Renovação e Sabedoria{"\n"}{"\n"} Caminho Espiritual do Leste:
              Clareza, Iluminação e Pureza.{"\n"}{"\n"} Caminho Espiritual do Norte:
              Crescimento, Confiança/Fé e Amor.{"\n"}{"\n"} Caminho Espiritual do Oeste:
              Experiência. Introspecção e Força.{"\n"}{"\n"}{"\n"} Agora você já pode ir pensando
              em vivenciar a roda medicinal e experimentar por si mesmo essas
              energias altamente vivas, palpitantes no inconsciente coletivo.{"\n"}
              Observe sempre de não ficar por tempo demais numa única posição,
              pois não se deve interromper a dinâmica dos ciclos que são as
              lições da vida.{"\n"} A Roda não pode parar na sua existência terrena.
              Do contrário, se pega o negativo da posição, a sombra.{"\n"} Comece
              estudando cada uma das pedras, sentindo como estas forças o
              afetam.{"\n"} Com base na roda abaixo, faça sua própria roda obedecendo
              a sequência numerada das pedras direcionando os marcos dos pontos
              cardeais com o auxílio de uma bússola, se quiser, use pequenas
              pontas de cristal de quartzo. {"\n"}No centro, local do Criador,
              coloque um objeto muito significativo ou deixe vazio.
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
  subTitle: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 12
  },
  sub: {
    margin: 'auto',
    left: 30,
    width: 200,
    backgroundColor: 'white'
  },
  scrollView: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 60
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Cocchin",
    color: "darkred",
    margin: 20
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
