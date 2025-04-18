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
              A Roda que trabalhamos deriva de milhares de rodas medicinais
              existentes no mundo.{"\n"}É composta por 36 posições,
              representadas por pedras alinhadas de forma circular: {"\n"}
            </Text>

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
              36. Caminho Espiritual da Força{"\n"}
              {"\n"}
            </Text>

            <Text style={styles.testo}>
              {"\n"}A primeira pedra, bem no centro (de onde emana toda a vida),
              representa o Criador.{"\n"} Pode ser uma pedra ou algum objeto que
              emane poder, justamente por ter um sentido especial para a pessoa
              (anel, medalha), ou pode ser um espaço vazio, pois o Criador é
              tudo ou nada a um só tempo.{"\n"} A pedra do Criador ensina sobre
              a nossa habilidade para criar, sobre a nossa fé, nosso sentido de
              sagrado e aptidões, para nos desenvolvermos e sermos completos.{" "}
              {"\n"}
              {"\n"}Em torno do Criador forma-se o círculo central constituído
              por sete pedras, simbolizando a fundação dos blocos de toda a
              vida. Sempre no sentido anti-horário no Hemisfério Sul e horário
              para o Hemisfério Norte.{"\n"}
              {"\n"} Na direção do quadrante inferior, do lado esquerdo, a pedra
              da Mãe Terra, que nos dá nosso lar com nossas vidas.{"\n"}{" "}
              Representa o amor e os novos começos para a Mãe Terra, e nos
              ensina a nutrição da energia feminina em nós e sobre a Terra. Você
              pode procurar esta pedra quando precisar de soluções para os
              problemas ecológicos, para enfrentar questões de infertilidade, se
              estiver em vias de tonar-se pai/mãe ou para ser mais amoroso com
              seus filhos.{"\n"}
              {"\n"} Ao lado, à direita da Mãe Terra está a terceira pedra: Pai
              Sol.{"\n"} Associada ao crescimento e a claridade. E onde nós
              podemos obter mais energia para expandir nossa vida. Ela nos dá o
              conhecimento sobre a energia masculina, nos ensina sobre a
              discriminação e a habilidade curativa.{"\n"} Sobre a realização
              dos nossos pensamentos e a aquisição de coragem.{"\n"}
              {"\n"} A quarta pedra é a da Avó Lua, guia dos nossos sonhos e
              visões. Ela nos ajuda a incrementar a nossa intuição e capacidades
              psíquicas, nos ensina sobre a nossa sensualidade e sexualidade,
              sobre o nosso lado emocional, levando-nos a entender as nossas
              emoções profundas, a face sombria do nosso ser.{"\n"}
              {"\n"} As quatro pedras restantes do círculo central da roda
              medicinal correspondem aos quatro elementos (terra, água, fogo e
              ar) e compõem os clãs elementais, que nos permitem receber poderes
              dos espíritos e colocá-los à disposição da comunidade (povo).
              {"\n"}
              {"\n"} A pedra do Clã da Tartaruga equivale ao elemento terra. É o
              clã mais denso, estável e lento, caracterizando pessoas práticas,
              realistas, perseverantes, com discernimento em suas opiniões.
              {"\n"} Esta pedra é ideal para as pessoas que se sentem fora do
              chão.{"\n"}
              {"\n"} A pedra do Clã do Sapo responde pelo elemento água, tem
              poderes de limpeza e transformação, indica mudanças lentas, porém
              firmes. Nesta posição, você pode aprender sobre sua própria
              fluidez, sobre sua capacidade de mudar constantemente e deixar seu
              coração comandar sua cabeça.{"\n"} Também lhe ensina a limpar
              certos resíduos (mágoas, ressentimentos, culpas) acumulados no seu
              ser, bem como a dar importância à limpeza da Terra.{"\n"} Pessoas
              do Clã do Sapo tocam com desenvoltura as emoções dos outros. Esta
              pedra ajuda no trato e na cura das próprias emoções,
              principalmente bloqueios, e traz a consciência sobre nossas
              habilidades psíquicas e intuitivas.{"\n"}
              {"\n"} A sexta pedra é do Clã do Pássaro Trovão regido pelo fogo.{" "}
              {"\n"}Vitalidade e transformação são suas idéias-chave. O Pássaro
              Trovão traz dádivas como o magnetismo, carisma, coragem, o
              otimismo. Seus poderes relacionam-se com a inovação, a paixão, a
              transmutação.{"\n"}
              Entretanto, pessoas deste clã devem aprender a temperar a sua
              intensidade para evitar possíveis doenças.{"\n"} De fato, o fogo
              tanto pode trazer calor à vida como a destruição. {"\n"}
              {"\n"}Este primeiro círculo fecha-se com a oitava pedra do Clã da
              Borboleta. Associada ao elemento ar, este clã reúne pessoas ágeis,
              rápidas, energéticas, espalhafatosas, exóticas, idealistas e
              visionárias.{"\n"} O senso de discriminação é uma das principais
              lições da Borboleta, cuja posição pode lhe ensinar sobre suas
              reais necessidades e capacidades de mudança. É a pedra de quem
              está precisando tornar-se mais articulado, mais criativo, etérico
              ou inovador, de quem quer aprender mais sobre o próprio intelecto
              ou deseja atrair transformações para sua vida.{"\n"} Pode
              mostrar-lhe a maneira de sintetizar os seus conhecimentos
              adquiridos.{"\n"}
              {"\n"} Acompanhando a sequência das pedras, o próximo passo é
              colocar as quatro pedras âncora do círculo externo da roda
              medicinal, que se alinham com os pontos cardeais e seus
              respectivos espíritos guardiões, representados por animais.{"\n"}
              {"\n"} No topo da roda está a Direção Sul (no Hemisfério Sul, e
              Norte no Hemisferio Norte), a morada do Búfalo: tem relações com o
              inverno, a cor branca e o elemento ar. Suas propriedades são:
              beleza, alinhamento, ressonância harmônica, conhecimento,
              sabedoria, imaginação ilimitada. Lugar do intelecto, dos seres
              animais, dos sábios e dos anciãos. {"\n"}A mensagem da Direção Sul
              avisa que “algum tipo de sabedoria chegará para quem está
              consultando”. A sabedoria é um caminho em que podemos experimentar
              a ordem natural do universo e aplicá-la a nossa vida.{"\n"} O
              conhecimento é a verdade sendo experimentada em nossa vida. Nesta
              direção, temos de aprender a lição e descobrir a origem do senso
              de si mesmo. O total sucesso dessa lição deve ser acompanhado de
              orações de agradecimento ou contentamento.{"\n"} Lembre-se de que
              o presente da sabedoria está no coração e permanece vivo tanto
              quanto é honrado e abençoado.{"\n"}
              {"\n"} A pedra da direção Leste é guardada pelo espírito guardião
              da Águia Dourada e está relacionada com a primavera, a cor amarela
              e o elemento fogo. {"\n"}Suas propriedades são: local de
              iluminação e do nascer do Sol, luz espiritual, masculino elevado,
              inspiração, criatividade, visão, consciência elevada.{"\n"} A
              mensagem do Leste fala da “necessidade de claridade em alguma
              parte da nossa vida. Em caso de confusão, este é o momento de
              colocar a vida cm ordem. Também podemos estar sendo convocados a
              ajudar outros a encontrar a claridade. Ser criativo e ousado é a
              ordem para trilharmos o nosso conceito de quem realmente somos
              aventurando-nos em novos entendimentos.{"\n"} O Leste assinala um
              tempo de nova liberdade. Por isso devemos observar os pensamentos
              que nos cegam, limpar a nossa cegueira e enxergar com olhos de
              águia”.{"\n"}
              {"\n"}A pedra da direção Norte (para o Hemisferio Sul, e Sul para
              o Hemisferio Norte) é onde se senta o Coiote, associa-se com o
              verão, a cor vermelha e o elemento água.{"\n"} São suas
              propriedades a confiança, a inocência, a fé, a humildade; é o
              lugar das emoções, das crianças e das plantas, de permanecer
              dentro, da essência e de deixar fluir, de não se apropriar das
              emoções.{"\n"} A mensagem do Norte “marca um tempo de retomo à
              infância, a necessidade de livrar-se do ego”. É preciso eliminar o
              nervosismo antes de se iluminar.{"\n"}
              Exercícios físicos acalmam os músculos e recuperam a confiança. A
              direção nos mostra alguma forma de conduzir a situação. Note “que
              quanto mais sério é o jogador, menores são suas chances de
              vencer”.{"\n"} O equilíbrio da Sagrada irreverência.{"\n"}
              {"\n"} Por fim, a pedra da direção Oeste está representada pela
              Ursa Parda e corresponde ao outono, a cor preta e ao elemento
              terra.{"\n"} Suas propriedades são: introspecção, intuição, útero
              da mãe, mundo subterrâneo, corpo da Mãe Terra, escuridão, feminino
              profundo, morte.{"\n"} A mensagem do Oeste “fala dos talentos que
              possuímos para chegar às nossas metas. É o conhecimento de nossas
              próprias forças e o poder para achar e descobrir nossas próprias
              respostas.{"\n"} Se nos esquecemos de ficar cm silêncio, (caverna
              da Ursa) as opiniões alheias misturam-se com nossas dúvidas e
              criam limitações”.{"\n"}
              {"\n"} As 12 pedras vistas ate aqui geram todas as 24 posições
              restantes da roda. Ainda no circulo externo, encontraremos as
              pedras correspondentes às 12 Luas, que dividem o ano a maneira das
              12 constelações do zodíaco.{"\n"} Essas Luas nos ensinam sobre as
              estações, sobre cada hora do dia e da vida, sobre cada mineral,
              planta, animal, elementais, espíritos guardiões e nos informam
              inclusive sobre os tipos humanos nascidos nos seus períodos de
              influência.{"\n"} Vejamos uma síntese do seu funcionamento.{"\n"}{" "}
              Começando no lado esquerdo do ponto Sul (para o Hemisfério Sul)
              sentido anti-horário: {"\n"}
              {"\n"}Começamos com a Lua da Renovação, a primeira lua do Inverno.
              {"\n"} Seu animal é o Ganso Polar. Ela lhe ensina a ser claro,
              adaptável, fluente, prudente e sábio.{"\n"}
              {"\n"} A Lua da Purificação, tem por animal a Lontra.{"\n"}
              Ajuda a desenvolver habilidades físicas, a descobrir talentos, a
              ter coragem, a ser humanitário e a cultivar a sua face suave e
              gentil.{"\n"}
              {"\n"} A Lua dos Ventos Fortes tem por animal o Puma.{"\n"} Ensina
              sobre a sua sensitividade, seu anseio por espiritualidade, sua
              hesitação em expressar sentimentos, sua necessidade de pisar na
              Terra.{"\n"}
              {"\n"} A Lua dos Novos Começos tem por animal o Falcão Vermelho.{" "}
              {"\n"}Ensina sobre a energia, a intensidade, a catalisação de
              mudanças, a audácia e o otimismo.{"\n"}
              {"\n"} A Lua da Crescimento Interior tem por animal o Castor.
              {"\n"} Ensina sobre a perseverança, a paciência e a
              praticabilidade.{"\n"}
              {"\n"} A Lua da Floração tem por animal o Cervo.{"\n"} Ensina
              sobre a própria beleza, a beleza dos outros e do meio ambiente,
              sobre suas próprias habilidades curativas. A Lua dos Dias Longos
              tem por animal o Pica-Pau.{"\n"}
              Ensina sobre a lei dos relacionamentos, sobre a família maternal e
              a nutrição, sobre a importância das emoções.{"\n"}
              {"\n"} A Lua do Amadurecimento tem por animal o Esturjão.{"\n"}{" "}
              Ensina a trabalhar com o centro do coração, a demonstrar afeição,
              a encarar temores, a desenvolver a capacidade de liderança.{"\n"}
              {"\n"} A Lua Abundância tem por animal o Urso Marrom. {"\n"}Ensina
              imparcialidade, decisões justas, bom senso, perseverança,
              confiança e habilidade para analisar.{"\n"}
              {"\n"} A Lua do Cair das Folhas tem por animal o Corvo. {"\n"}
              Ensina como mostrar afeição física e como ser confortável na Terra
              e no Céu. Dá entendimento dos seus relacionamentos com grupos.
              {"\n"}
              {"\n"} A Lua da Decomposição tem por animal a Cobra.{"\n"} Ensina
              sobre a extensão da sua própria energia, sobre sua habilidade para
              criar mudanças, sobre a curiosidade e desejo de verdade.{"\n"}
              {"\n"} A Lua das Noites Longas tem por animal o Alce. {"\n"}Ensina
              a força mental, os relacionamentos, os ensinamentos, a
              comunicação.{"\n"}
              {"\n"}
              {"\n"} Agora só faltam os quatro caminhos espirituais de cada
              quadrante para completar toda a Roda Medicinal.{"\n"} São os
              caminhos formados por cada carreira de três pedras que partem dos
              quatro pontos cardeais, dos espíritos guardiões, em direção ao
              centro do círculo. São as qualidades/virtudes que devemos
              desenvolver para retomarmos ao Centro da Vida, ao Criador.{"\n"}
              {"\n"} São elas: {"\n"}Caminho Espiritual do Sul (Hemisferio Sul ,
              Norte para Hemisferio Norte ):{"\n"}
              Limpeza, Renovação e Sabedoria{"\n"}
              {"\n"} Caminho Espiritual do Leste: Clareza, Iluminação e Pureza.
              {"\n"}
              {"\n"} Caminho Espiritual do Norte: Crescimento, Confiança/Fé e
              Amor.{"\n"}
              {"\n"} Caminho Espiritual do Oeste: Experiência. Introspecção e
              Força.{"\n"}
              {"\n"}
              {"\n"} Agora você já pode ir pensando em vivenciar a roda
              medicinal e experimentar por si mesmo essas energias altamente
              vivas, palpitantes no inconsciente coletivo.{"\n"}
              Observe sempre de não ficar por tempo demais numa única posição,
              pois não se deve interromper a dinâmica dos ciclos que são as
              lições da vida.{"\n"} A Roda não pode parar na sua existência
              terrena. Do contrário, se pega o negativo da posição, a sombra.
              {"\n"} Comece estudando cada uma das pedras, sentindo como estas
              forças o afetam.{"\n"} Com base na roda abaixo, faça sua própria
              roda obedecendo a sequência numerada das pedras direcionando os
              marcos dos pontos cardeais com o auxílio de uma bússola, se
              quiser, use pequenas pontas de cristal de quartzo. {"\n"}No
              centro, local do Criador, coloque um objeto muito significativo ou
              deixe vazio.
            </Text>
          </>
        )}
        {language === "eng" && (
          <>
            <Text style={styles.testo}>
              The Wheel we work with derives from thousands of other medicine
              wheels.{"\n"}
              It is made of 36 positions, represented by stones aligned in a
              circular manner: {"\n"}
            </Text>

            <WheelStructure />

            <Text style={styles.subTitle}>
              1. The Creator {"\n"}
              2. Earth {"\n"}
              3. Sun {"\n"}
              4. Moon {"\n"}
              5. Earth Element (Turtle Clan) {"\n"}
              6. Water Element (Frog Clan) {"\n"}
              7. Fire Element (Thunder Bird Clan) {"\n"}
              8. Air Element (Butterfly Clan) {"\n"}
              9. North Direction {"\n"}
              10. East Direction {"\n"}
              11. South Direction {"\n"}
              12. West Direction {"\n"}
              13. Moon of Renovation {"\n"}
              14. Moon of Cleansing {"\n"}
              15. Moon of Strong Winds{"\n"}
              16. Moon of New Beginnings{"\n"}
              17. Moon of Internal Growth{"\n"}
              18. Moon of Florishing {"\n"}
              19. Moon of Long Days {"\n"}
              20. Moon of Ripening{"\n"}
              21. Moon of Abundance{"\n"}
              22. Moon of Falling Leaves{"\n"}
              23. Moon of Decomposition {"\n"}
              24. Moon of Long Nights{"\n"}
              25. Spiritual Path of Cleansing {"\n"}
              26. Spiritual Path of Renovation {"\n"}
              27. Spiritual Path of Wisdom {"\n"}
              28. Spiritual Path of Clarity {"\n"}
              29. Spiritual Path of Enlightenment {"\n"}
              30. Spiritual Path of Purity {"\n"}
              31. Spiritual Path of Growth {"\n"}
              32. Spiritual Path of Faith {"\n"}
              33. Spiritual Path of Love {"\n"}
              34. Spiritual Path of Experience {"\n"}
              35. Spiritual Path of Introspection {"\n"}
              36. Spiritual Path of Force {"\n"}
              {"\n"}
            </Text>
            <Text style={styles.testo}>
              The first stone, right in the center (from where all life
              emanates), represents the Creator.{"\n"} It can be a stone or some
              object that emanates power, precisely because it has a special
              meaning for the person (a ring, a medal), or it can be an empty
              space, since the Creator is everything and nothing at the same
              time.{"\n"} The Creator's stone teaches us about our ability to
              create, about our faith, our sense of the sacred and our talents,
              so we can grow and be complete.{"\n"}
              {"\n"}Around the Creator, the central circle is formed by seven
              stones, symbolizing the foundational blocks of all life. Always
              counterclockwise in the Southern Hemisphere and clockwise in the
              Northern Hemisphere.{"\n"}
              {"\n"} In the direction of the lower quadrant, on the left side,
              is the stone of Mother Earth, who gives us our home along with our
              lives.{"\n"} It represents love and new beginnings for Mother
              Earth, and teaches us to nurture feminine energy within us and on
              Earth. You can turn to this stone when in need of solutions for
              ecological problems, to face fertility issues, if you're about to
              become a parent, or to be more loving with your children.{"\n"}
              {"\n"}Next to it, to the right of Mother Earth, is the third
              stone: Father Sun.{"\n"} Associated with growth and clarity. And
              where we can obtain more energy to expand our life. It gives us
              knowledge about masculine energy, teaches us about discernment and
              healing ability.{"\n"} About the manifestation of our thoughts and
              the acquisition of courage.{"\n"}
              {"\n"} The fourth stone is that of Grandmother Moon, guide of our
              dreams and visions. She helps us enhance our intuition and psychic
              abilities, teaches us about our sensuality and sexuality, about
              our emotional side, leading us to understand our deep emotions,
              the shadowy face of our being.{"\n"}
              {"\n"} The four remaining stones of the central circle of the
              medicine wheel correspond to the four elements (earth, water,
              fire, and air) and form the elemental clans, which allow us to
              receive powers from the spirits and offer them to the community
              (the people).{"\n"}
              {"\n"} The stone of the Turtle Clan corresponds to the earth
              element. It is the densest, most stable and slowest clan,
              characterizing practical, realistic, persevering people with
              discernment in their opinions.{"\n"} This stone is ideal for those
              who feel ungrounded.{"\n"}
              {"\n"} The stone of the Frog Clan corresponds to the water
              element, has cleansing and transformative powers, indicates slow
              but steady change. In this position, you can learn about your own
              fluidity, your ability to change constantly and let your heart
              lead your mind.
              {"\n"} It also teaches you to cleanse certain residues (grief,
              resentment, guilt) accumulated within you, as well as to give
              importance to cleansing the Earth.{"\n"} People of the Frog Clan
              skillfully touch others’ emotions. This stone helps with
              processing and healing your own emotions, especially emotional
              blocks, and brings awareness to our psychic and intuitive
              abilities.{"\n"}
              {"\n"} The sixth stone belongs to the Thunderbird Clan, governed
              by fire.{"\n"} Vitality and transformation are its key concepts.
              The Thunderbird brings gifts like magnetism, charisma, courage,
              and optimism. Its powers are related to innovation, passion, and
              transmutation.{"\n"} However, people of this clan must learn to
              temper their intensity to avoid potential illness.{"\n"} In fact,
              fire can bring warmth to life or destruction.{"\n"}
              {"\n"}This first circle is completed with the eighth stone of the
              Butterfly Clan. Associated with the air element, this clan
              includes agile, fast, energetic, flamboyant, exotic, idealistic,
              and visionary people.{"\n"} The sense of discernment is one of
              Butterfly’s main teachings, and its position can help you
              understand your true needs and capacity for change. It is the
              stone for those who need to become more articulate, more creative,
              ethereal or innovative, for those who want to learn more about
              their own intellect or want to attract transformations to their
              life.{"\n"} It can show you how to synthesize your acquired
              knowledge.{"\n"}
              {"\n"} Following the sequence of stones, the next step is to place
              the four anchor stones of the outer circle of the medicine wheel,
              which align with the cardinal directions and their respective
              guardian spirits, represented by animals.{"\n"}
              {"\n"} At the top of the wheel is the South Direction (in the
              Southern Hemisphere, and North in the Northern Hemisphere), the
              home of the Buffalo: it relates to winter, the color white and the
              element air. Its properties are: beauty, alignment, harmonic
              resonance, knowledge, wisdom, and limitless imagination. A place
              of intellect, of animal beings, of sages and elders.{"\n"} The
              message of the South Direction says that “some kind of wisdom will
              come to whoever is consulting.” Wisdom is a path where we can
              experience the natural order of the universe and apply it to our
              life.{"\n"} Knowledge is truth being experienced in our life. In
              this direction, we must learn the lesson and discover the origin
              of the sense of self. The complete success of this lesson must be
              accompanied by prayers of gratitude or contentment.{"\n"} Remember
              that the gift of wisdom lies in the heart and remains alive as
              long as it is honored and blessed.{"\n"} {"\n"} The stone of the
              East direction is guarded by the spirit of the Golden Eagle and is
              associated with spring, the color yellow, and the fire element.
              {"\n"} Its properties are: place of enlightenment and sunrise,
              spiritual light, elevated masculine, inspiration, creativity,
              vision, heightened awareness.{"\n"} The message of the East speaks
              of “the need for clarity in some part of our life. In times of
              confusion, this is the moment to put life in order. We may also be
              called to help others find clarity. Being creative and bold is the
              key to walking our understanding of who we truly are, venturing
              into new insights.”{"\n"} The East marks a time of new freedom.
              That’s why we must observe the thoughts that blind us, clear our
              blindness, and see with the eyes of the eagle.”{"\n"} {"\n"}The
              stone of the North direction (for the Southern Hemisphere, and
              South for the Northern Hemisphere) is where the Coyote sits,
              associated with summer, the color red, and the water element.
              {"\n"} Its properties are trust, innocence, faith, humility; it is
              the place of emotions, of children and plants, of staying within,
              of essence and letting things flow, of not appropriating emotions.
              {"\n"} The message of the North “marks a time of returning to
              childhood, the need to rid oneself of ego.” Nervousness must be
              eliminated before enlightenment.{"\n"} Physical exercises calm the
              muscles and restore confidence. The direction shows us a way to
              handle the situation. Note that “the more serious the player, the
              lower their chances of winning.”{"\n"} The balance of Sacred
              irreverence.{"\n"} {"\n"} Finally, the stone of the West direction
              is represented by the Brown Bear and corresponds to autumn, the
              color black, and the earth element.{"\n"} Its properties are:
              introspection, intuition, mother’s womb, underworld, body of
              Mother Earth, darkness, deep feminine, death.{"\n"} The message of
              the West “speaks of the talents we possess to reach our goals. It
              is the knowledge of our own strengths and the power to find and
              discover our own answers.{"\n"} If we forget to remain in silence
              (the Bear’s cave), others’ opinions mix with our doubts and create
              limitations.”
              {"\n"} {"\n"} The 12 stones seen so far generate all the remaining
              24 positions of the wheel. Still on the outer circle, we will find
              the stones corresponding to the 12 Moons, which divide the year
              like the 12 constellations of the zodiac.{"\n"} These Moons teach
              us about the seasons, each hour of the day and life, each mineral,
              plant, animal, elemental, guardian spirit, and even inform us
              about the human types born in their periods of influence.{"\n"}{" "}
              Let’s take a look at a summary of how they work.{"\n"} Starting on
              the left side of the South point (for the Southern Hemisphere),
              counterclockwise: {"\n"} {"\n"}We begin with the Moon of Renewal,
              the first moon of Winter.{"\n"} Its animal is the Polar Goose. It
              teaches you to be clear, adaptable, fluent, prudent, and wise.
              {"\n"} {"\n"} The Moon of Purification has the Otter as its
              animal.{"\n"} It helps develop physical abilities, discover
              talents, have courage, be humanitarian, and cultivate your soft
              and gentle side.{"\n"} {"\n"} The Moon of Strong Winds has the
              Puma as its animal.{"\n"} It teaches about your sensitivity, your
              longing for spirituality, your hesitation in expressing feelings,
              and your need to ground yourself.
              {"\n"} {"\n"} The Moon of New Beginnings has the Red Hawk as its
              animal. {"\n"}It teaches about energy, intensity, catalyzing
              change, boldness, and optimism.{"\n"} {"\n"} The Moon of Inner
              Growth has the Beaver as its animal.{"\n"} It teaches about
              perseverance, patience, and practicality.{"\n"} {"\n"} The Moon of
              Blossoming has the Deer as its animal.{"\n"} It teaches about your
              own beauty, the beauty of others and the environment, and your
              healing abilities. The Moon of Long Days has the Woodpecker as its
              animal.{"\n"} It teaches about the law of relationships, the
              maternal family, nurturing, and the importance of emotions.{"\n"}{" "}
              {"\n"} The Moon of Maturity has the Sturgeon as its animal.{"\n"}{" "}
              It teaches to work with the heart center, show affection, face
              fears, and develop leadership skills.{"\n"} {"\n"} The Moon of
              Abundance has the Brown Bear as its animal. {"\n"}It teaches
              impartiality, fair decisions, good sense, perseverance,
              confidence, and analytical skills.{"\n"} {"\n"} The Moon of
              Falling Leaves has the Raven as its animal. {"\n"} It teaches how
              to show physical affection and how to be comfortable on Earth and
              in the Sky. It brings understanding of your relationships with
              groups.{"\n"} {"\n"} The Moon of Decomposition has the Snake as
              its animal.{"\n"} It teaches about the extent of your own energy,
              your ability to create change, curiosity, and desire for truth.
              {"\n"} {"\n"} The Moon of Long Nights has the Moose as its animal.{" "}
              {"\n"}It teaches mental strength, relationships, teachings,
              communication.{"\n"} {"\n"} {"\n"} Now all that’s missing are the
              four spiritual paths of each quadrant to complete the entire
              Medicine Wheel.{"\n"} These are the paths formed by each row of
              three stones starting from the four cardinal points, from the
              guardian spirits, heading toward the center of the circle. They
              are the qualities/virtues we must develop to return to the Center
              of Life, to the Creator.{"\n"} {"\n"} They are: {"\n"}Spiritual
              Path of the South (Southern Hemisphere, North for Northern
              Hemisphere):
              {"\n"} Cleansing, Renewal, and Wisdom{"\n"} {"\n"} Spiritual Path
              of the East: Clarity, Enlightenment, and Purity.{"\n"} {"\n"}{" "}
              Spiritual Path of the North: Growth, Trust/Faith, and Love.{"\n"}{" "}
              {"\n"} Spiritual Path of the West: Experience, Introspection, and
              Strength.
              {"\n"} {"\n"} {"\n"} Now you can begin to consider experiencing
              the medicine wheel and feel for yourself these highly alive
              energies, pulsing in the collective unconscious.{"\n"} Always be
              careful not to stay too long in one position, as the dynamic of
              the cycles—which are life’s lessons—must not be interrupted.{"\n"}{" "}
              The Wheel cannot stop in your earthly existence. Otherwise, you
              take on the negative of the position, the shadow.{"\n"} Start by
              studying each of the stones, feeling how these forces affect you.
              {"\n"} Based on the wheel below, create your own wheel following
              the numbered sequence of the stones, aligning the cardinal points
              with the help of a compass. If you wish, use small quartz crystal
              points. {"\n"}At the center, the Creator’s place, place a very
              significant object—or leave it empty.{"\n"}
            </Text>
          </>
        )}
        {language === "ita" && (
          <>
            <Text style={styles.testo}>
              La Ruota con cui lavoriamo deriva da migliaia di altre ruote
              medicinali, appartenenti ad altre epoche e tradizioni.{"\n"}
              E' composta da 36 posizioni, rappresentate da pietre allineate in
              modo circolare: {"\n"}
            </Text>

            <WheelStructure />

            <Text style={styles.subTitle}>
              1. Il Creatore {"\n"}
              2. Terra {"\n"}
              3. Sole {"\n"}
              4. Luna {"\n"}
              5. Elemento Terra (Clan della Tartaruga) {"\n"}
              6. Elemento Acqua (Clan della Rana) {"\n"}
              7. Elemento Fuoco (Clan dell'Uccello del Tuono) {"\n"}
              8. Elemento Aria (Clan della Farfalla) {"\n"}
              9. Direzione Nord {"\n"}
              10. Direzione Est {"\n"}
              11. Direzione Sud {"\n"}
              12. Direzione Ovest {"\n"}
              13. Luna del Rinnovamento {"\n"}
              14. Luna della Purificazione {"\n"}
              15. Luna dei Venti Forti{"\n"}
              16. Luna dei Nuovi Inizi{"\n"}
              17. Luna della Crescita Interiore{"\n"}
              18. Luna della Fioritura {"\n"}
              19. Luna dei Giorni Lunghi {"\n"}
              20. Luna della Maturazione{"\n"}
              21. Luna dell’Abbondanza{"\n"}
              22. Luna delle Foglie Cadenti{"\n"}
              23. Luna della Decomposizione {"\n"}
              24. Luna delle Notti Lunghe{"\n"}
              25. Cammino Spirituale della Purificazione {"\n"}
              26. Cammino Spirituale del Rinnovamento {"\n"}
              27. Cammino Spirituale della Saggezza {"\n"}
              28. Cammino Spirituale della Chiarezza {"\n"}
              29. Cammino Spirituale dell’Illuminazione {"\n"}
              30. Cammino Spirituale della Purezza {"\n"}
              31. Cammino Spirituale della Crescita {"\n"}
              32. Cammino Spirituale della Fede {"\n"}
              33. Cammino Spirituale dell’Amore {"\n"}
              34. Cammino Spirituale dell’Esperienza {"\n"}
              35. Cammino Spirituale dell’Introspezione {"\n"}
              36. Cammino Spirituale della Forza {"\n"}
              {"\n"}
            </Text>
            <Text style={styles.testo}>
              La prima pietra, proprio al centro (da dove emana tutta la vita),
              rappresenta il Creatore.{"\n"} Può essere una pietra o un oggetto
              che emana potere, proprio perché ha un significato speciale per la
              persona (anello, medaglia), oppure può essere uno spazio vuoto,
              poiché il Creatore è tutto o nulla allo stesso tempo.{"\n"} La
              pietra del Creatore insegna la nostra capacità di creare, la
              nostra fede, il nostro senso del sacro e le attitudini per
              svilupparci ed essere completi.{"\n"}
              {"\n"} Intorno al Creatore si forma il cerchio centrale composto
              da sette pietre, che simboleggiano i blocchi fondamentali della
              vita. Sempre in senso antiorario nell’emisfero sud e orario
              nell’emisfero nord.{"\n"}
              {"\n"} Nella direzione del quadrante inferiore, sul lato sinistro,
              c’è la pietra della Madre Terra, che ci dà la nostra casa con le
              nostre vite.{"\n"} Rappresenta l’amore e i nuovi inizi per la
              Madre Terra, e ci insegna a nutrire l’energia femminile in noi e
              sulla Terra. Si può cercare questa pietra quando si ha bisogno di
              soluzioni ai problemi ecologici, per affrontare questioni di
              infertilità, se si è in procinto di diventare genitori o per
              essere più amorevoli con i propri figli.{"\n"}
              {"\n"} Accanto, alla destra della Madre Terra, si trova la terza
              pietra: Padre Sole.{"\n"} Associata alla crescita e alla
              chiarezza. È dove possiamo ottenere più energia per espandere la
              nostra vita. Ci dona conoscenza sull’energia maschile, ci insegna
              la discriminazione e le capacità curative.{"\n"} Riguarda la
              realizzazione dei nostri pensieri e l’acquisizione del coraggio.
              {"\n"}
              {"\n"} La quarta pietra è quella della Nonna Luna, guida dei
              nostri sogni e visioni. Ci aiuta a sviluppare l’intuizione e le
              capacità psichiche, ci insegna la nostra sensualità e sessualità,
              il nostro lato emotivo, portandoci a comprendere le nostre
              emozioni profonde, il lato ombra del nostro essere.{"\n"}
              {"\n"} Le restanti quattro pietre del cerchio centrale della ruota
              medicinale corrispondono ai quattro elementi (terra, acqua, fuoco
              e aria) e formano i clan elementali, che ci permettono di ricevere
              poteri dagli spiriti e metterli a disposizione della comunità
              (popolo).{"\n"}
              {"\n"} La pietra del Clan della Tartaruga equivale all’elemento
              terra. È il clan più denso, stabile e lento, e caratterizza
              persone pratiche, realiste, perseveranti, con discernimento nelle
              proprie opinioni.{"\n"} Questa pietra è ideale per chi si sente
              senza radici.{"\n"}
              {"\n"} La pietra del Clan della Rana rappresenta l’elemento acqua,
              ha poteri di purificazione e trasformazione, indica cambiamenti
              lenti ma costanti. In questa posizione si può imparare sulla
              propria fluidità, sulla capacità di cambiare costantemente e
              lasciar guidare il cuore sulla mente.{"\n"} Insegna anche a
              liberarsi da certi residui (dolori, risentimenti, sensi di colpa)
              accumulati nel proprio essere, nonché a dare importanza alla
              pulizia della Terra.
              {"\n"} Le persone del Clan della Rana toccano con naturalezza le
              emozioni altrui. Questa pietra aiuta a trattare e curare le
              proprie emozioni, soprattutto i blocchi, e porta consapevolezza
              sulle nostre capacità psichiche e intuitive.{"\n"}
              {"\n"} La sesta pietra è del Clan dell’Uccello Tuono, governato
              dal fuoco.{"\n"} Vitalità e trasformazione sono le sue idee
              chiave. L’Uccello Tuono porta doni come il magnetismo, il carisma,
              il coraggio, l’ottimismo. I suoi poteri sono legati
              all’innovazione, alla passione, alla trasmutazione.{"\n"}{" "}
              Tuttavia, le persone di questo clan devono imparare a moderare la
              loro intensità per evitare possibili malattie.{"\n"} In effetti,
              il fuoco può tanto dare calore alla vita quanto causare
              distruzione.{"\n"}
              {"\n"} Questo primo cerchio si chiude con l’ottava pietra del Clan
              della Farfalla. Associato all’elemento aria, questo clan comprende
              persone agili, veloci, energiche, eccentriche, esotiche, idealiste
              e visionarie.{"\n"} Il senso di discernimento è una delle
              principali lezioni della Farfalla, la cui posizione può insegnarti
              le tue reali necessità e capacità di cambiamento. È la pietra di
              chi ha bisogno di diventare più comunicativo, creativo, etereo o
              innovativo, di chi vuole imparare di più sul proprio intelletto o
              desidera attrarre trasformazioni nella propria vita.{"\n"} Può
              mostrarti come sintetizzare le conoscenze acquisite.{"\n"}
              {"\n"} Seguendo la sequenza delle pietre, il passo successivo è
              posizionare le quattro pietre di ancoraggio del cerchio esterno
              della ruota medicinale, che si allineano con i punti cardinali e i
              rispettivi spiriti guardiani, rappresentati da animali.{"\n"}
              {"\n"} In cima alla ruota si trova la Direzione Sud (nell’Emisfero
              Sud, e Nord nell’Emisfero Nord), la dimora del Bisonte: ha
              relazioni con l’inverno, il colore bianco e l’elemento aria. Le
              sue proprietà sono: bellezza, allineamento, risonanza armonica,
              conoscenza, saggezza, immaginazione illimitata. È il luogo
              dell’intelletto, degli esseri animali, dei saggi e degli anziani.
              {"\n"} Il messaggio della Direzione Sud avvisa che “un certo tipo
              di saggezza arriverà a chi sta consultando”. La saggezza è un
              cammino in cui possiamo sperimentare l’ordine naturale
              dell’universo e applicarlo alla nostra vita.{"\n"} La conoscenza è
              la verità vissuta nella nostra vita. In questa direzione, dobbiamo
              imparare la lezione e scoprire l’origine del senso di sé. Il
              completo successo di questa lezione dovrebbe essere accompagnato
              da preghiere di ringraziamento o contentezza.{"\n"} Ricorda che il
              dono della saggezza è nel cuore e rimane vivo tanto quanto viene
              onorato e benedetto.{"\n"}
              {"\n"} La pietra della direzione Est è custodita dallo spirito
              guardiano dell’Aquila Dorata ed è associata alla primavera, al
              colore giallo e all’elemento fuoco. {"\n"}Le sue proprietà sono:
              luogo dell’illuminazione e della nascita del Sole, luce
              spirituale, maschile elevato, ispirazione, creatività, visione,
              consapevolezza elevata.{"\n"} Il messaggio dell’Est parla della
              “necessità di chiarezza in qualche parte della nostra vita. In
              caso di confusione, questo è il momento di mettere ordine nella
              vita. Potremmo anche essere chiamati ad aiutare altri a trovare
              chiarezza. Essere creativi e audaci è l’ordine per percorrere il
              nostro concetto di chi siamo veramente, avventurandoci in nuove
              comprensioni.{"\n"} L’Est segna un tempo di nuova libertà. Per
              questo dobbiamo osservare i pensieri che ci accecano, pulire la
              nostra cecità e vedere con occhi d’aquila”.{"\n"}
              {"\n"}La pietra della direzione Nord (per l’Emisfero Sud, e Sud
              per l’Emisfero Nord) è dove siede il Coyote, è associata
              all’estate, al colore rosso e all’elemento acqua.{"\n"} Le sue
              proprietà sono fiducia, innocenza, fede, umiltà; è il luogo delle
              emozioni, dei bambini e delle piante, dell’essere interiori,
              dell’essenza e del lasciar fluire, del non appropriarsi delle
              emozioni.{"\n"} Il messaggio del Nord “segna un tempo di ritorno
              all’infanzia, la necessità di liberarsi dell’ego”. È necessario
              eliminare il nervosismo prima di illuminarsi.{"\n"} Gli esercizi
              fisici calmano i muscoli e recuperano la fiducia. La direzione ci
              mostra una forma per affrontare la situazione. Nota “che quanto
              più serio è il giocatore, minori sono le sue possibilità di
              vincere”.{"\n"} L’equilibrio della Sacra Irriverenza.{"\n"}
              {"\n"} Infine, la pietra della direzione Ovest è rappresentata
              dall’Orsa Bruna e corrisponde all’autunno, al colore nero e
              all’elemento terra.{"\n"} Le sue proprietà sono: introspezione,
              intuizione, utero della madre, mondo sotterraneo, corpo della
              Madre Terra, oscurità, femminile profondo, morte.{"\n"} Il
              messaggio dell’Ovest “parla dei talenti che possediamo per
              raggiungere i nostri obiettivi. È la conoscenza delle nostre forze
              interiori e il potere di trovare e scoprire le nostre risposte.
              {"\n"} Se dimentichiamo di stare in silenzio, (la caverna
              dell’Orsa) le opinioni altrui si mescolano ai nostri dubbi e
              creano limitazioni”.
              {"\n"}
              {"\n"} Le 12 pietre viste finora generano tutte le restanti 24
              posizioni della ruota. Ancora nel cerchio esterno, troveremo le
              pietre corrispondenti alle 12 Lune, che dividono l’anno come le 12
              costellazioni dello zodiaco.{"\n"} Queste Lune ci insegnano sulle
              stagioni, su ogni ora del giorno e della vita, su ogni minerale,
              pianta, animale, elementale, spiriti guardiani e ci informano
              anche sui tipi umani nati nei loro periodi di influenza.{"\n"}{" "}
              Vediamo una sintesi del loro funzionamento.{"\n"} Iniziando dal
              lato sinistro del punto Sud (per l’Emisfero Sud) in senso
              antiorario: {"\n"}
              {"\n"}Iniziamo con la Luna del Rinnovamento, la prima luna
              dell’inverno.{"\n"} Il suo animale è l’Oca Polare. Essa insegna ad
              essere chiari, adattabili, fluidi, prudenti e saggi.{"\n"}
              {"\n"} La Luna della Purificazione ha come animale la Lontra.
              {"\n"} Aiuta a sviluppare abilità fisiche, a scoprire talenti, ad
              avere coraggio, ad essere umanitari e a coltivare il proprio lato
              dolce e gentile.{"\n"}
              {"\n"} La Luna dei Venti Forti ha come animale il Puma.{"\n"}{" "}
              Insegna sulla tua sensibilità, sul tuo desiderio di spiritualità,
              sulla tua esitazione nell’esprimere sentimenti, sulla necessità di
              avere i piedi per terra.{"\n"}
              {"\n"} La Luna dei Nuovi Inizi ha come animale il Falco Rosso.{" "}
              {"\n"}Insegna sull’energia, l’intensità, la catalizzazione dei
              cambiamenti, l’audacia e l’ottimismo.{"\n"}
              {"\n"} La Luna della Crescita Interiore ha come animale il
              Castoro.
              {"\n"} Insegna sulla perseveranza, la pazienza e la praticità.
              {"\n"}
              {"\n"} La Luna della Fioritura ha come animale il Cervo.{"\n"}{" "}
              Insegna sulla propria bellezza, sulla bellezza degli altri e
              dell’ambiente, sulle proprie abilità curative. La Luna dei Giorni
              Lunghi ha come animale il Picchio.{"\n"} Insegna sulla legge delle
              relazioni, sulla famiglia materna e la nutrizione, sull’importanza
              delle emozioni.{"\n"}
              {"\n"} La Luna della Maturazione ha come animale lo Storione.
              {"\n"} Insegna a lavorare con il centro del cuore, a mostrare
              affetto, ad affrontare le paure, a sviluppare la capacità di
              leadership.{"\n"}
              {"\n"} La Luna dell’Abbondanza ha come animale l’Orso Bruno.{" "}
              {"\n"}
              Insegna imparzialità, decisioni giuste, buon senso, perseveranza,
              fiducia e capacità di analisi.{"\n"}
              {"\n"} La Luna della Caduta delle Foglie ha come animale il Corvo.{" "}
              {"\n"} Insegna come mostrare affetto fisico e come sentirsi a
              proprio agio sulla Terra e nel Cielo. Dà comprensione delle tue
              relazioni con i gruppi.{"\n"}
              {"\n"} La Luna della Decomposizione ha come animale il Serpente.
              {"\n"} Insegna sull’estensione della propria energia, sulla
              capacità di creare cambiamenti, sulla curiosità e il desiderio di
              verità.
              {"\n"}
              {"\n"} La Luna delle Notti Lunghe ha come animale l’Alce. {"\n"}
              Insegna la forza mentale, le relazioni, gli insegnamenti, la
              comunicazione.{"\n"}
              {"\n"}
              {"\n"} Ora mancano solo i quattro cammini spirituali di ogni
              quadrante per completare l’intera Ruota di Medicina.{"\n"} Sono i
              cammini formati da ogni fila di tre pietre che partono dai quattro
              punti cardinali, dagli spiriti guardiani, in direzione del centro
              del cerchio. Sono le qualità/virtù che dobbiamo sviluppare per
              ritornare al Centro della Vita, al Creatore.{"\n"}
              {"\n"} Essi sono: {"\n"}Cammino Spirituale del Sud (Emisfero Sud,
              Nord per l’Emisfero Nord):{"\n"} Pulizia, Rinnovamento e Saggezza
              {"\n"}
              {"\n"} Cammino Spirituale dell’ Est: Chiarezza, Illuminazione e
              Purezza.{"\n"}
              {"\n"} Cammino Spirituale del Nord: Crescita, Fiducia/Fede e
              Amore.
              {"\n"}
              {"\n"} Cammino Spirituale dell’ Ovest: Esperienza, Introspezione e
              Forza.{"\n"}
              {"\n"}
              {"\n"} Ora puoi iniziare a pensare di vivere la ruota di medicina
              e sperimentare in prima persona queste energie altamente vive,
              pulsanti nell’ inconscio collettivo.{"\n"} Ricorda sempre di non
              rimanere troppo a lungo in una sola posizione, poiché non si deve
              interrompere la dinamica dei cicli che sono le lezioni della vita.
              {"\n"} La Ruota non può fermarsi nella tua esistenza terrena.
              Altrimenti, si assorbe il lato negativo della posizione, l’ ombra.
              {"\n"} Inizia studiando ciascuna delle pietre, sentendo come
              queste forze ti influenzano.{"\n"} In base alla ruota qui sotto,
              crea la tua ruota personale seguendo la sequenza numerata delle
              pietre, orientando i punti cardinali con l' aiuto di una bussola,
              se vuoi, usa piccole punte di quarzo. {"\n"}Al centro, luogo del
              Creatore, metti un oggetto molto significativo o lascia vuoto.
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
  subTitle: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 12,
  },
  sub: {
    margin: "auto",
    left: 30,
    width: 200,
    backgroundColor: "white",
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
