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
        {language === "prt" && <Text style={styles.title}>VERÃO</Text>}
        {language === "eng" && <Text style={styles.title}>SUMMER</Text>}
        {language === "ita" && <Text style={styles.title}>ESTATE</Text>}

        <View style={[styles.imageView, { height: 439, width: 340 }]}>
          <Image
            style={[styles.image, { width: 345, bottom: 50 }]}
            source={require("@/assets/images/stagioni/summer.jpg")}
          />
        </View>

        {language === "prt" && (
          <>
            <Text style={styles.testo}>
              O verão é a estação da expansão, do crescimento e do progresso
              rápido. {"\n"}O máximo da força, a força de atração molecular e o
              Tempo de Crescimento, quando a auto-expressão criativa chega ao
              clímax. A Fase de Crescimento traz para nós pausa para celebrar a
              individualidade, receber conhecimento de nossas atitudes pessoais
              e nos aproxima da vida. {"\n"}
              Nós podemos dar melhor foco e consolidar nossos esforços e fazer
              uso total de nossas potencialidades. É a hora do pico, quando a
              Terra é mais abundante e dá generosamente sua substância. {"\n"}É
              o tempo apropriado para nós experimentarmos o jogo de dar e a
              gratidão que chega ao recebermos. A ênfase então é a generosidade
              e a benevolência.{"\n"}É também o tempo de reunir os frutos dos
              esforços passados e a experiência de divertimento.{"\n"}
              Os benefícios não são somente materialistas, pois há muito para
              ser aprendido dessas lições e esforços do passado. {"\n"}A energia
              vital fica exuberante como o Sol do meio dia, irradiando calor em
              todas as direções. A semente que virou planta na primavera, solta
              agora seus botões, flores e frutos. {"\n"}
              Nós também desabrochamos e nos mostramos ao mundo usando poucas
              roupas, fazendo encontros sociais, falando, ouvindo, aproveitando
              o calor, sem pressa. {"\n"}
              Também temos um sol em nós, representado pelo coração, que irradia
              calor humano através dos sentimentos e produz energia.{"\n"}
              {"\n"}
              {"\n"}
              Elemento: Água{"\n"}
              {"\n"}
              Cor: Vermelho{"\n"}
              {"\n"}
              Reino: Vegetal{"\n"}
              {"\n"}
              Corpo: Emocional{"\n"}
              {"\n"}
              Corpo Celestial: Lua{"\n"}
              {"\n"}
              Totem Animal: Coiote{"\n"}
              {"\n"}
              Periodo de Tempo: o Passado{"\n"}
              {"\n"}
              Direção: {"\n"}Sul (Emisferio Norte){"\n"} Norte (Emisferio Sul)
              {"\n"}
              {"\n"}
              {"\n"}
              Marca um momento de transformação, o momento culminante da luz do
              Sol, e também o início de seu declínio.{"\n"}
              Queimando, liberando coisas velhas, criando vácuo para coisas
              novas.
              {"\n"}
              Inspira o estabelecimento de nossas metas, o crescimento de nossos
              projetos. Afasta influências antigas, nutre nossa criança
              interior, reavalia temas antigos, descarta o que não nos serve
              mais, harmoniza a vida familiar, nos prepara para mais um ano.{" "}
              {"\n"}A Direção Norte da Roda Medicinal é o lugar para retornar à
              inocência e adquirir fé e confiança. {"\n"}É o lugar onde nossa fé
              é testada e provada, onde podemos recapturar a maravilha de
              estarmos vivos, e que podemos ser como crianças. {"\n"}É o Portal
              das Emoções e do Elemento Água. No pensamento nativo, assim como
              não podemos bloquear as águas de um rio, também não podemos
              bloquear as nossas emoções. Ou seja, deixar fluir.{"\n"}{" "}
              Representa também o Reino Vegetal. {"\n"}O Espírito guardião da
              Direção Sul, conhecido também como Shawnodese, é o Coiote.{"\n"}O
              coiote significa muitas coisas para o nativo. Há quem diga que ele
              é traiçoeiro e que ele assombra nossos sonhos quando decidimos ser
              sérios demais, adultos demais, e sufocamos a nossa criança
              emocional. {"\n"}
              Há quem diga que ele é o embusteiro, uma espécie de palhaço
              sagrado, ou malicioso. {"\n"}
              Ele também é o símbolo da liberdade e do mistério. A Direção Norte
              tem as dádivas da energia, adaptabilidade, maturidade, diversão e
              humor. {"\n"}A hora da direção Norte é de estudar relacionamentos,
              é a hora quando tudo em nosso mundo torna-se verdadeiramente
              possível, quando buscar por amor é definitivamente uma de nossas
              forças guias e onde somos capazes de dar e receber amor em muitos
              sentidos.{"\n"}O poder da Direção Norte é misterioso, um poder de
              mudança, do crescimento. É a direção para explorar o amor,
              explorar os relacionamentos e explorar o mundo a sua volta, para
              explorar quem você é. {"\n"}
              Para simbolizar a direção Norte no seu altar coloque um copo com
              água.{"\n"}A Direção Norte é o local do coração, das emoções. É lá
              que chegamos, quando necessitamos curar nosso coração, quando
              necessitamos aprender como amar, quando precisamos aprender a
              deixar de lado tudo o que não é amor (ódio, medo, inveja, ciúme,
              raiva).
              {"\n"}
              Ele ensina também sobre sexualidade e sensualidade.{"\n"}O corpo
              celestial da direção Norte é a Lua, que rege nosso corpo
              emocional, é a direção da fé. Quando não estamos equilibrados
              emocionalmente, quando sofremos por nossos sentimentos, quando
              duvidamos da nossa capacidade de dar e receber amor, quando falta
              fé no Criador e no Mundo a nossa volta, quando nos esquecemos de
              ser criança, quando não temos tempo para nos divertir, corremos
              para o Guardião da Direção Norte.{"\n"}
              Como o poder de Waboose, o poder de Shawnodese é paradoxal. Traz a
              época do crescimento rápido, a época de se alcançar a plenitude.
              {"\n"}A planta que apontou seu olhinho na Terra na época de Wabun,
              deve agora florescer, dar frutos e sementes e se preparar para a
              época da colheita. {"\n"}
              Os humanos não são exceção. O Sul é o lugar onde as pessoas buscam
              visões, pedindo ao Criador para apontar a direção que devem
              seguir.
              {"\n"}
              Com frequência depois que o criador tornou conhecida essa direção,
              as pessoas devem segui-la tão rapidamente, que devem aprender a
              confiar no Criador e não questionar o caminho. {"\n"}
              Para ajudar no seguimento dos novos caminhos, Shawnodese nos dá a
              dádiva da energia, adaptabilidade, maturidade, brincadeira e
              humor.
              {"\n"}
            </Text>
            <View style={[styles.imageView, { height: 404 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/summer1.jpg")}
              />
            </View>

            <Text style={styles.testo}>
              Para muitos humanos a época de shawnodese é de auto-segurança e
              aceitação. O paradoxo de Shawnodese é que enquanto tudo isso se
              abre para fora, uma atividade enérgica está assumindo, enquanto
              estamos aprendendo a confiar na vida e seguir nosso próprio
              destino, o velho embusteiro o “Coiote” está preparado para fazer o
              que é preciso para nos fazer crescer interiormente. {"\n"}
              Shawnodese é o local da fé e da confiança. Da inocência e da
              humildade. {"\n"}É a direção das emoções, dos sentimentos, da
              criança interior, das brincadeiras e jogos. Quando precisamos
              fazer fluir nossos sentimentos e emoções, podemos nos sentar ao
              Norte.
              {"\n"}
              Quando não somos equilibrados emocionalmente, quando sofremos por
              nossos sentimentos, quando duvidamos da nossa capacidade de dar e
              receber amor, quando falta fé no Criador e no Mundo à nossa volta,
              quando nos esquecemos de ser criança, quando não temos tempo para
              nos divertir, corremos para o Guardião da Direção Norte. {"\n"}
              {"\n"}
              Meadows discorre sobre o especial relacionamento que Shawnodese
              tem com o Reino Vegetal, formas de vida que incluem árvores e
              plantas, ervas e flores, e vegetações de todos os tipos. {"\n"}
              Árvores, especialmente, são partes vitais e essenciais para a
              Terra, e florestas são como o pulmão do planeta, respirando gazes
              de monóxido de carbono que a vida humana e animal expele e
              exalando o oxigênio que as vidas humana e animal necessitam
              inalar.{"\n"}
              Plantas e árvores provêm os reinos animal e humano de nutrição.
              Flores, ervas e plantas possuem propriedades medicinais que
              suavizam, curam e restauram o corpo para um equilíbrio e para que
              possa funcionar efetivamente.{"\n"}
              Descobrimos no Leste que a principal função é determinar. No Norte
              a função é “dar”, é o Reino Vegetal, contém os grandes doadores da
              Terra, dando inteiramente de si para prover os outros.{"\n"}
              As formas de vida que compreendem o Reino Vegetal são então,
              auxiliares e professores também. Essencialmente, eles se esforçam
              para nos ensinar a necessidade de dar. {"\n"}
              Não coisas compradas ou valores, mas, preferivelmente, dar de nós
              mesmos, coisas de valor real. {"\n"}
              Sem a experiência de dar nós não crescemos. {"\n"}Desenvolvemos
              nossa espiritualidade mas, debilitamos. O índio sabe disso.{"\n"}{" "}
              O homem científico, educado, sofisticado, fechou-se para a
              Natureza e perdeu esse conhecimento. A Direção Norte pode nos
              ajudar, individualmente, a resgatar esse conhecimento.{"\n"}
              As pessoas influenciadas pela Direção Norte tem afinidade com
              plantas. {"\n"}
              Elas gostam de ter plantas em suas casas e gostam de mexer em
              jardins. Elas podem sentir atração por árvores e terrenos
              arborizados. Encontram harmonia interior andando por bosques e
              florestas.{"\n"}
              Pessoas do Norte são da mesma forma inclinados para usar remédios
              herbais para problemas físicos, e remédios florais em horas
              estressantes e quando sofrem pressões psicológicas.{"\n"}
              De todas as pessoas, aqueles mais influenciados pelo Norte, são
              comumente beneficiados por esses remédios.{"\n"}
              No mundo humano, o Sul influencia as emoções e sentimentos.
              Aplicando os princípios aprendemos que harmonia interna pode ser
              conquistada por “dar com as emoções”. {"\n"}
              Muitos de nós usamos o medo para expressar nossas emoções porque
              tememos a vulnerabilidade, então deixamos de expressar nossos
              verdadeiros sentimentos. {"\n"}
              Amor, afeto, estima, são muitas vezes expressados quando damos
              algum objeto físico. Não existe nada de errado nisso, e nem
              devemos nos dispensar de dar esses presentes, mas não é esse o
              sentido. {"\n"}
              Nós também precisamos dar de nós mesmos, e falhamos quando
              seguramos nossas emoções. Quando negociamos com outros, buscamos
              segurar as nossas emoções e dar com nossas mentes, quando
              deveríamos dar com nossas emoções e segurar com nossas mentes.
              {"\n"}
              Amor é muito mais do que uma expressão física, pensando na nossa
              complexa sociedade de consumo, amor é uma qualidade espiritual e
              expressa a alma – ele despe-se de tudo que o torne meramente uma
              expressão física. {"\n"}
              Mas o amor é muitas vezes medido como uma mera performance sexual.{" "}
              {"\n"}Amar é dar de si próprio. Emoção expressa amor porque emoção
              è a "energia de amor em ação". Olhando acima de nossas emoções
              abrimos nossos corações e experimentamos suas consequências.{"\n"}
              O poder do Norte expressa-se através de sentimentos que o
              indivíduo tem do self, e a resposta é a construção de mitos sobre
              si mesmo e seus sentimentos. {"\n"}
            </Text>
            <View style={[styles.imageView, { height: 329 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/summer2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              Também se expressa através de sentir a necessidade de ação mais
              rápida.{"\n"}O Coiote representa várias coisas para os povos
              nativos. Para alguns uma forma do Criador, para outros é o
              palhaço, um bobo que se engana mais do que engana os outros. Para
              uns ele é um estorvo, um ladrão, um vagabundo. Para outros ele é o
              símbolo da liberdade e do mistério.{"\n"}O truque favorito do
              Coiote é fazer você se apaixonar, mais frequentemente por uma
              pessoa muito diferente de você e de como você idealizou seu
              parceiro.{"\n"}A atração é a cola que atrai as pessoas para
              aprender as lições da vida. O amor é o cimento que liga, enquanto
              quiserem aprender um com o outro.{"\n"}
              Shawnodese é uma época para explorar o amor, os relacionamentos,
              de explorar o mundo à sua volta. Para aprender quem você é e como
              isso se compara com o que você acha que deveria ser. De se dar os
              primeiros passos enérgicos em direção à própria maturidade.{"\n"}
              Devemos aprender a nos proteger, pois esta é uma lição necessária
              para se tornar uma pessoa madura. {"\n"}
              Devemos aprender que há um tempo para se abrir e outro para conter
              nossa energia e nossos sentimentos para nós mesmos. {"\n"}
              Shawnodese é o lugar do coração, o lugar das emoções. É aqui que
              chegamos quando precisamos de cura para o coração, quando
              precisamos aprender como amar, quando precisamos aprender a
              abandonar tudo o que não é amor: ódio, medo, inveja, ciúme, raiva,
              ira e rancor. {"\n"}
              Shawnodese é aquele que se procura para se curar de um velho amor
              ou quando estamos querendo um novo amor. É aqui que você aprenderá
              porque se sente atraído por uma pessoa e o que pode fazer para
              ajudar o relacionamento a crescer. {"\n"}
              Nesta posição você aprenderá sobre o charme, nutrição, confiança,
              credulidade, humor e manipulação, sensualidade e sexualidade. Como
              elas se diferem e são as mesmas. {"\n"}O poder de Shawnodese é o
              poder do amor, do coração aberto trabalhando em conjunto com a
              mente discriminadora. {"\n"}O poder de Shawnodese é o poder do
              Crescimento.{"\n"}É um momento de contar histórias de verões
              passados, de tornar consciente o momento, da fé total que temos no
              levantar do sol, nos ciclos da lua, no movimento das estrelas.
              {"\n"}É um momento de reconhecer e fazer conexões com nosso lugar
              no universo que é uma parte criativa e produto das forças
              universais da natureza, do Divino, e nossa viagem dentro dele.
              {"\n"}A Terra é banhada com calor e vida, toda a natureza vibra
              com essa energia. O Sol impetuoso, em seu poder onipotente, como
              uma divindade na altura de seu resplendor, vai encerrando e
              começando mais um ano, fazendo a Roda da Vida girar, marcando o
              começo da colheita, ligando o cérebro ao Céu, mostrando os ciclos
              celestiais que ordenam o mundo e nos mostrando como organizar
              nossas vidas. {"\n"}
              As estações sagradas marcam começos e finais, cada um
              representando o fim do velho e abrem um capítulo novo no continuum
              maior de nossa experiência evolucionária individual e coletiva.{" "}
              {"\n"}
              Vendo o ciclo natural de nascimento (primavera), crescimento
              (verão), maturidade (outono), e passagem (inverno), pode-se ver
              uma distância muito curta entre conceito e a aplicação. {"\n"}
              Todas as iniciações reais são precedidas pela instrução, pelo
              treinamento, pela disciplina, e pela purificação.
            </Text>
          </>
        )}

        {language === "eng" && (
          <>
            <Text style={styles.testo}>
              Summer is the season of expansion, growth, and rapid progress.
              {"\n"}
              The peak of strength, the force of molecular attraction, and the
              Time of Growth, when creative self-expression reaches its climax.
              The Growth Phase brings us a pause to celebrate individuality,
              receive knowledge of our personal attitudes, and draws us closer
              to life.{"\n"}
              We can give better focus, consolidate our efforts, and make full
              use of our potential. It is the time of the peak, when the Earth
              is most abundant and generously gives its substance.{"\n"}
              It is the appropriate time for us to experience the game of giving
              and the gratitude that comes with receiving. The emphasis is on
              generosity and benevolence.{"\n"}
              It is also the time to gather the fruits of past efforts and the
              experience of enjoyment.{"\n"}
              The benefits are not only materialistic, as there is much to be
              learned from these lessons and efforts of the past.{"\n"}
              The vital energy is exuberant, like the midday Sun, radiating
              warmth in all directions. The seed that turned into a plant in the
              spring now releases its buds, flowers, and fruits.{"\n"}
              We also blossom and present ourselves to the world wearing fewer
              clothes, socializing, speaking, listening, enjoying the warmth,
              without hurry.{"\n"}
              We also have a sun within us, represented by the heart, which
              radiates human warmth through emotions and generates energy.{"\n"}
              {"\n"}
              {"\n"}
              Element: Water{"\n"}
              {"\n"}
              Color: Red{"\n"}
              {"\n"}
              Kingdom: Plant{"\n"}
              {"\n"}
              Body: Emotional{"\n"}
              {"\n"}
              Celestial Body: Moon{"\n"}
              {"\n"}
              Animal Totem: Coyote{"\n"}
              {"\n"}
              Time Period: the Past{"\n"}
              {"\n"}
              Direction: {"\n"}South (Northern Hemisphere){"\n"} North (Southern
              Hemisphere){"\n"}
              {"\n"}
              {"\n"}
              Marks a moment of transformation, the culminating moment of the
              Sun's light, and also the beginning of its decline.{"\n"} Burning,
              releasing old things, creating a vacuum for new things. {"\n"} It
              inspires the establishment of our goals, the growth of our
              projects. {"\n"} It wards off old influences, nurtures our inner
              child, reevaluates old themes, discards what no longer serves us,
              harmonizes family life, and prepares us for another year. {"\n"}{" "}
              The North Direction of the Medicine Wheel is the place to return
              to innocence and acquire faith and trust.{"\n"} It is the place
              where our faith is tested and proven, where we can recapture the
              wonder of being alive and realize that we can be like children.{" "}
              {"\n"} It is the Portal of Emotions and the Element of Water.{" "}
              {"\n"} In native thought, just as we cannot block the waters of a
              river, we also cannot block our emotions. {"\n"}That is, let them
              flow.{"\n"} It also represents the Plant Kingdom.{"\n"} The Spirit
              Guardian of the South Direction, also known as Shawnodese, is the
              Coyote.{"\n"} The coyote signifies many things to the native.
              {"\n"} Some say it is deceitful and haunts our dreams when we
              become too serious, too adult, and stifle our emotional child.{" "}
              {"\n"} Some say it is the trickster, a kind of sacred clown, or
              mischievous being.{"\n"} It is also the symbol of freedom and
              mystery.{"\n"} The North Direction carries the gifts of energy,
              adaptability, maturity, fun, and humor. {"\n"} The time of the
              North direction is to study relationships. It is the time when
              everything in our world becomes truly possible, {"\n"} when the
              search for love becomes one of our guiding strengths, and where we
              are capable of giving and receiving love in many ways. {"\n"} The
              power of the North Direction is mysterious, a power of change, of
              growth. {"\n"} It is the direction to explore love, relationships,
              the world around you, and who you are. {"\n"} To symbolize the
              North Direction on your altar, place a glass of water.{"\n"} The
              North Direction is the place of the heart, of emotions. {"\n"} It
              is there we arrive when we need to heal our heart, learn how to
              love, {"\n"} and let go of all that is not love (hate, fear, envy,
              jealousy, anger). {"\n"} It also teaches about sexuality and
              sensuality.{"\n"} The celestial body of the North direction is the
              Moon, which governs our emotional body. It is the direction of
              faith. {"\n"} When we are emotionally unbalanced, when we suffer
              because of our feelings, {"\n"} when we doubt our capacity to give
              and receive love, when we lack faith in the Creator and the world
              around us, {"\n"} when we forget to be children, when we have no
              time for fun, {"\n"} we turn to the Guardian of the North
              Direction. {"\n"}
              {"\n"}
              As with the power of Waboose, the power of Shawnodese is
              paradoxical. {"\n"} It brings the time of rapid growth, the time
              to reach fullness. {"\n"} The plant that peeked through the earth
              during Wabun's time must now bloom, bear fruit and seeds, and
              prepare for the harvest. {"\n"} Humans are no exception. {"\n"}{" "}
              The South is the place where people seek visions, asking the
              Creator to point them in the direction they should follow.{"\n"}{" "}
              Often, once the Creator makes this direction known, people must
              follow it so quickly {"\n"} that they must learn to trust the
              Creator and not question the path. {"\n"} To assist in following
              these new paths, Shawnodese gives us the gifts of energy, {"\n"}{" "}
              adaptability, maturity, playfulness, and humor.{"\n"}
            </Text>
            <View style={[styles.imageView, { height: 404 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/summer1.jpg")}
              />
            </View>

            <Text style={styles.testo}>
              {"\n"}For many humans, the time of Shawnodese is one of
              self-security and acceptance. {"\n"} The paradox of Shawnodese is
              that while all this opens outward, an energetic activity takes
              over, {"\n"} and while we are learning to trust life and follow
              our destiny, {"\n"} the old trickster, the “Coyote,” is ready to
              do whatever is necessary to make us grow inwardly. {"\n"}{" "}
              Shawnodese is the place of faith and trust, of innocence and
              humility. {"\n"} It is the direction of emotions, feelings, the
              inner child, playfulness, and games. {"\n"} When we need to let
              our feelings and emotions flow, we can sit in the North.
              {"\n"} When we are emotionally unbalanced, when we suffer because
              of our feelings, {"\n"} when we doubt our capacity to give and
              receive love, when faith in the Creator and the world around us is
              lacking, {"\n"} when we forget to be children, when we have no
              time for fun, {"\n"} we turn to the Guardian of the North
              Direction. {"\n"}
              {"\n"}
              Meadows discusses the special relationship Shawnodese has with the
              Plant Kingdom, {"\n"} forms of life that include trees and plants,
              herbs and flowers, and vegetation of all kinds. {"\n"} Trees,
              especially, are vital and essential parts of the Earth, and
              forests act like the lungs of the planet, {"\n"} breathing in the
              carbon monoxide gases exhaled by human and animal life and
              releasing the oxygen that human and animal life needs to inhale.{" "}
              {"\n"} Plants and trees provide nutrition for the animal and human
              kingdoms. {"\n"} Flowers, herbs, and plants possess medicinal
              properties that soothe, {"\n"} heal, and restore the body to
              balance so it can function effectively. {"\n"} We discovered in
              the East that the primary function is determination. {"\n"} In the
              North, the function is "to give." It is the Plant Kingdom, {"\n"}{" "}
              containing the great givers of the Earth, giving wholly of
              themselves to provide for others. {"\n"} The forms of life that
              make up the Plant Kingdom are, therefore, helpers and teachers as
              well. {"\n"} Essentially, they strive to teach us the need to
              give. {"\n"} Not purchased things or values but, preferably, to
              give of ourselves, things of real value. {"\n"} Without the
              experience of giving, we do not grow. {"\n"}We develop our
              spirituality but become weakened. {"\n"} The native knows this.
              {"\n"} The scientific, educated, sophisticated man has closed
              himself off from Nature and lost this knowledge. {"\n"} The North
              Direction can help us, individually, reclaim this knowledge.{" "}
              {"\n"} People influenced by the North Direction have an affinity
              for plants. {"\n"} They like to have plants in their homes and
              enjoy gardening. {"\n"} They may feel drawn to trees and wooded
              areas. {"\n"} They find inner harmony by walking through groves
              and forests. {"\n"} People of the North are likewise inclined to
              use herbal remedies for physical problems {"\n"} and floral
              remedies in times of stress and psychological pressure. {"\n"} Of
              all people, those most influenced by the North are commonly
              benefited by these remedies. {"\n"} In the human world, the South
              influences emotions and feelings. {"\n"} Applying the principles,
              we learn that internal harmony can be achieved by "giving with
              emotions." {"\n"} Many of us use fear to express our emotions
              because we fear vulnerability, {"\n"} so we fail to express our
              true feelings. {"\n"} Love, affection, and esteem are often
              expressed when we give some physical object. {"\n"} There is
              nothing wrong with this, nor should we stop giving these gifts,
              but that is not the point. {"\n"} We also need to give of
              ourselves, and we fail when we withhold our emotions. {"\n"} When
              negotiating with others, we seek to withhold our emotions and give
              with our minds, {"\n"} when we should give with our emotions and
              hold with our minds. {"\n"} Love is much more than a physical
              expression. In our complex consumer society, {"\n"} love is a
              spiritual quality that expresses the soul—it strips away all that
              makes it merely a physical expression. {"\n"} But love is often
              measured as a mere sexual performance. {"\n"}To love is to give of
              oneself. {"\n"} Emotion expresses love because emotion is the
              "energy of love in action." {"\n"} By looking above our emotions,
              we open our hearts and experience their consequences. {"\n"} The
              power of the North is expressed through the feelings the
              individual has about the self, {"\n"} and the response is the
              construction of myths about oneself and one's feelings. {"\n"}
            </Text>
            <View style={[styles.imageView, { height: 329 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/summer2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"} It also expresses the need for faster action. {"\n"} The
              Coyote represents various things to native peoples. {"\n"} For
              some, it is a form of the Creator; for others, it is the clown, a
              fool who deceives itself more than it deceives others. {"\n"} For
              some, it is a nuisance, a thief, a vagabond. For others, it is the
              symbol of freedom and mystery. {"\n"} The Coyote's favorite trick
              is to make you fall in love, {"\n"} often with someone very
              different from yourself and how you idealized your partner. {"\n"}{" "}
              Attraction is the glue that draws people to learn life's lessons.{" "}
              {"\n"} Love is the cement that binds them, as long as they are
              willing to learn from one another. {"\n"} Shawnodese is a time to
              explore love, relationships, and the world around you. {"\n"} To
              learn who you are and how this compares with who you think you
              should be. {"\n"} To take the first energetic steps toward your
              maturity. {"\n"} We must learn to protect ourselves, as this is a
              necessary lesson to becoming a mature person. {"\n"} We must learn
              that there is a time to open up and a time to hold our energy and
              feelings to ourselves. {"\n"} Shawnodese is the place of the
              heart, the place of emotions. {"\n"} It is here that we arrive
              when we need healing for the heart, when we need to learn how to
              love, {"\n"} when we need to learn to let go of all that is not
              love: hatred, fear, envy, jealousy, anger, wrath, and resentment.{" "}
              {"\n"} Shawnodese is where we turn to heal from an old love or
              when we desire a new love. {"\n"} It is here that you will learn
              why you are attracted to a person and what you can do to help the
              relationship grow. {"\n"} In this position, you will learn about
              charm, nurturing, trust, credulity, humor and manipulation,
              sensuality, and sexuality—{"\n"} how they differ and how they are
              the same. {"\n"} The power of Shawnodese is the power of love, of
              the open heart working together with the discerning mind. {"\n"}{" "}
              The power of Shawnodese is the power of Growth. {"\n"} It is a
              time to tell stories of past summers, to become conscious of the
              moment, {"\n"} of the total faith we have in the sunrise, in the
              cycles of the moon, in the movement of the stars. {"\n"} It is a
              time to recognize and make connections with our place in the
              universe, {"\n"} a part of creation and the product of the
              universal forces of nature, the Divine, and our journey within it.{" "}
              {"\n"} The Earth is bathed in warmth and life, and all nature
              vibrates with this energy. {"\n"} The impetuous Sun, in its
              omnipotent power, as a deity at the height of its splendor, {"\n"}{" "}
              closes and begins another year, making the Wheel of Life turn,
              marking the beginning of the harvest, {"\n"} connecting the brain
              to the Sky, showing the celestial cycles that order the world and
              teaching us how to organize our lives. {"\n"} The sacred seasons
              mark beginnings and endings, each representing the end of the old
              and opening a new chapter {"\n"} in the larger continuum of our
              individual and collective evolutionary experience. {"\n"} By
              seeing the natural cycle of birth (spring), growth (summer),
              maturity (autumn), and passage (winter), {"\n"} one can see a very
              short distance between concept and application. {"\n"} All real
              initiations are preceded by instruction, training, discipline, and
              preparation. {"\n"}Each cycle is complete unto itself. {"\n"}
              {"\n"}
            </Text>
          </>
        )}

        {language === "ita" && (
          <>
            <Text style={styles.testo}>
              L'estate è la stagione dell'espansione, della crescita e del
              progresso rapido. {"\n"}
              Il massimo della forza, la forza di attrazione molecolare e il
              Tempo di Crescita, quando l'auto-espressione creativa raggiunge il
              culmine. La Fase di Crescita porta a noi una pausa per celebrare
              l'individualità, ricevere conoscenza delle nostre attitudini
              personali e ci avvicina alla vita. {"\n"}
              Possiamo dare una maggiore concentrazione e consolidare i nostri
              sforzi e fare pieno uso delle nostre potenzialità. È il momento
              del picco, quando la Terra è più abbondante e dà generosamente la
              sua sostanza. {"\n"}È il tempo appropriato per noi di sperimentare
              il gioco del dare e la gratitudine che arriva nel ricevere.
              L'enfasi quindi è sulla generosità e sulla benevolenza.{"\n"}È
              anche il momento di raccogliere i frutti degli sforzi passati e di
              godere dell'esperienza del divertimento.{"\n"}I benefici non sono
              solo materialisti, poiché c'è molto da imparare da queste lezioni
              e sforzi del passato. {"\n"}
              L'energia vitale diventa rigogliosa come il Sole di mezzogiorno,
              irradiando calore in tutte le direzioni. Il seme che è diventato
              pianta in primavera, ora rilascia i suoi boccioli, fiori e frutti.{" "}
              {"\n"}
              Anche noi sbocciamo e ci mostriamo al mondo indossando pochi
              vestiti, facendo incontri sociali, parlando, ascoltando, godendo
              del calore, senza fretta. {"\n"}
              Abbiamo anche un sole dentro di noi, rappresentato dal cuore, che
              irradia calore umano attraverso i sentimenti e produce energia.
              {"\n"}
              {"\n"}
              {"\n"}
              Elemento: Acqua{"\n"}
              {"\n"}
              Colore: Rosso{"\n"}
              {"\n"}
              Regno: Vegetale{"\n"}
              {"\n"}
              Corpo: Emotivo{"\n"}
              {"\n"}
              Corpo Celeste: Luna{"\n"}
              {"\n"}
              Totem Animale: Coyote{"\n"}
              {"\n"}
              Periodo di Tempo: il Passato{"\n"}
              {"\n"}
              Direzione: {"\n"}Sud (Emisfero Nord){"\n"} Nord (Emisfero Sud)
              {"\n"}
              {"\n"}
              {"\n"}
              Segna un momento di trasformazione, il culmine della luce del
              Sole, e anche l'inizio del suo declino.{"\n"}
              Bruciando, liberando cose vecchie, creando vuoto per cose nuove.
              {"\n"}
              Ispira l'istituzione dei nostri obiettivi, la crescita dei nostri
              progetti. Allontana le influenze passate, nutre il nostro bambino
              interiore, rivaluta temi vecchi, scarta ciò che non ci serve più,
              armonizza la vita familiare, ci prepara per un altro anno.{"\n"}
              La Direzione Nord della Ruota Medicinale è il luogo per ritornare
              all'innocenza e acquisire fede e fiducia.{"\n"}È il luogo dove la
              nostra fede viene testata e provata, dove possiamo recuperare la
              meraviglia di essere vivi, e dove possiamo essere come bambini.
              {"\n"}È il Portale delle Emozioni e dell'Elemento Acqua. Nel
              pensiero nativo, così come non possiamo bloccare le acque di un
              fiume, non possiamo bloccare le nostre emozioni. Ovvero, lasciarle
              fluire.{"\n"}
              Rappresenta anche il Regno Vegetale.{"\n"}
              Lo Spirito guardiano della Direzione Sud, noto anche come
              Shawnodese, è il Coyote.{"\n"}
              Il coyote significa molte cose per il nativo. C'è chi dice che sia
              traditore e che assilli i nostri sogni quando decidiamo di essere
              troppo seri, troppo adulti, e soffochiamo il nostro bambino
              emotivo.
              {"\n"}
              C'è chi dice che sia l'ingannatore, una sorta di giullare sacro, o
              malizioso.{"\n"}È anche il simbolo della libertà e del mistero. La
              Direzione Nord ha i doni dell'energia, dell'adattabilità, della
              maturità, del divertimento e dell'umorismo.{"\n"}
              Il momento della direzione Nord è per studiare le relazioni, è il
              momento in cui tutto nel nostro mondo diventa veramente possibile,
              quando cercare l'amore diventa definitivamente una delle nostre
              forze guida e dove siamo in grado di dare e ricevere amore in
              molti modi.{"\n"}
              Il potere della Direzione Nord è misterioso, un potere di
              cambiamento, di crescita. È la direzione per esplorare l'amore,
              esplorare le relazioni ed esplorare il mondo che ti circonda, per
              esplorare chi sei.{"\n"}
              Per simboleggiare la direzione Nord sul tuo altare, metti un
              bicchiere d'acqua.{"\n"}
              La Direzione Nord è il luogo del cuore, delle emozioni. È lì che
              arriviamo quando abbiamo bisogno di guarire il nostro cuore,
              quando dobbiamo imparare come amare, quando dobbiamo imparare a
              lasciar andare tutto ciò che non è amore (odio, paura, invidia,
              gelosia, rabbia).{"\n"}
              Insegna anche sulla sessualità e sensualità.{"\n"}
              Il corpo celeste della direzione Nord è la Luna, che governa il
              nostro corpo emotivo, è la direzione della fede. Quando non siamo
              equilibrati emotivamente, quando soffriamo per i nostri
              sentimenti, quando dubitiamo della nostra capacità di dare e
              ricevere amore, quando manca la fede nel Creatore e nel Mondo
              intorno a noi, quando ci dimentichiamo di essere bambini, quando
              non abbiamo tempo per divertirci, corriamo verso il Guardiano
              della Direzione Nord.{"\n"}
              Come il potere di Waboose, anche il potere di Shawnodese è
              paradossale. Porta il periodo di crescita rapida, il periodo di
              raggiungere la pienezza.{"\n"}
              La pianta che ha spuntato il suo germoglio nella Terra durante il
              periodo di Wabun, ora deve fiorire, dare frutti e semi e
              prepararsi per il periodo del raccolto.{"\n"}
              Gli esseri umani non fanno eccezione. Il Sud è il luogo dove le
              persone cercano visioni, chiedendo al Creatore di indicare la
              direzione che devono seguire.{"\n"}
              Spesso, dopo che il Creatore ha reso nota questa direzione, le
              persone devono seguirla così rapidamente che devono imparare a
              fidarsi del Creatore e non mettere in discussione il cammino.
              {"\n"}
              Per aiutare nel seguire i nuovi cammini, Shawnodese ci dà il dono
              dell'energia, dell'adattabilità, della maturità, del gioco e
              dell'umorismo.{"\n"}
            </Text>
            <View style={[styles.imageView, { height: 404 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/summer1.jpg")}
              />
            </View>

            <Text style={styles.testo}>
              {"\n"}Per molti esseri umani, il periodo di Shawnodese è di
              auto-sicurezza e accettazione. Il paradosso di Shawnodese è che
              mentre tutto questo si apre verso l'esterno, un'attività
              energetica sta prendendo piede, mentre stiamo imparando a fidarci
              della vita e a seguire il nostro destino. Il vecchio ingannatore,
              il "Coyote", è pronto a fare ciò che è necessario per farci
              crescere interiormente. {"\n"}
              Shawnodese è il luogo della fede e della fiducia. Dell'innocenza e
              dell'umiltà. {"\n"}È la direzione delle emozioni, dei sentimenti,
              della nostra bambina interiore, dei giochi e delle giostre. Quando
              abbiamo bisogno di far fluire i nostri sentimenti ed emozioni,
              possiamo sederci al Nord. {"\n"}
              Quando non siamo equilibrati emotivamente, quando soffriamo per i
              nostri sentimenti, quando dubitiamo della nostra capacità di dare
              e ricevere amore, quando manca la fede nel Creatore e nel Mondo
              che ci circonda, quando ci dimentichiamo di essere bambini, quando
              non abbiamo tempo per divertirci, corriamo verso il Guardiano
              della Direzione Nord. {"\n"}
              {"\n"}
              Meadows discute del rapporto speciale che Shawnodese ha con il
              Regno Vegetale, forme di vita che comprendono alberi e piante,
              erbe e fiori, e vegetazione di ogni tipo. {"\n"}
              Gli alberi, in particolare, sono parti vitali e essenziali per la
              Terra, e le foreste sono come i polmoni del pianeta, respirando i
              gas di monossido di carbonio che la vita umana e animale espelle e
              rilasciando l'ossigeno che le vite umane e animali devono inalare.
              {"\n"}
              Le piante e gli alberi forniscono ai regni animale e umano
              nutrimento. I fiori, le erbe e le piante possiedono proprietà
              medicinali che leniscono, guariscono e ripristinano il corpo per
              riportarlo in equilibrio e per farlo funzionare efficacemente.
              {"\n"}
              Abbiamo scoperto ad Est che la funzione principale è determinare.
              Al Nord, la funzione è "dare", è il Regno Vegetale, che contiene i
              grandi donatori della Terra, dando completamente se stessi per
              provvedere agli altri.{"\n"}
              Le forme di vita che compongono il Regno Vegetale sono quindi
              anche ausiliari e insegnanti. Essenzialmente, si sforzano di
              insegnarci la necessità di dare. {"\n"}
              Non cose acquistate o valori, ma, preferibilmente, dare di noi
              stessi, cose di valore reale. {"\n"}
              Senza l'esperienza di dare, non cresciamo. {"\n"}
              Sviluppiamo la nostra spiritualità, ma ci indeboliamo. Il nativo
              lo sa. {"\n"}
              L'uomo scientifico, istruito, sofisticato, si è chiuso alla Natura
              e ha perso questa conoscenza. La Direzione Nord può aiutarci,
              individualmente, a recuperare questa conoscenza.{"\n"}
              Le persone influenzate dalla Direzione Nord hanno un'affinità per
              le piante. {"\n"}
              Amano avere piante nelle loro case e amano lavorare nei giardini.
              Possono sentire attrazione per gli alberi e per terreni boscosi.
              Trovano armonia interiore camminando per boschi e foreste.{"\n"}
              Le persone del Nord sono altrettanto inclini ad usare rimedi
              erboristici per problemi fisici, e rimedi floreali nei momenti di
              stress e quando soffrono pressioni psicologiche.{"\n"}
              Di tutte le persone, quelle più influenzate dal Nord sono
              comunemente beneficiate da questi rimedi.{"\n"}
              Nel mondo umano, il Sud influenza le emozioni e i sentimenti.
              Applicando i principi, abbiamo imparato che l'armonia interna può
              essere conquistata "dando con le emozioni". {"\n"}
              Molti di noi usano la paura per esprimere le nostre emozioni
              perché temiamo la vulnerabilità, quindi smettiamo di esprimere i
              nostri veri sentimenti. {"\n"}
              Amore, affetto, stima, sono spesso espressi quando diamo un
              oggetto fisico. Non c'è nulla di sbagliato in questo, e nemmeno
              dovremmo esimerci dal dare questi regali, ma non è questo il
              senso. {"\n"}
              Anche noi dobbiamo dare noi stessi, e falliamo quando tratteniamo
              le nostre emozioni. Quando negoziamo con gli altri, cerchiamo di
              trattenere le nostre emozioni e dare con le nostre menti, quando
              dovremmo dare con le nostre emozioni e trattenere con le nostre
              menti.{"\n"}
              L'amore è molto più di una semplice espressione fisica, pensando
              alla nostra complessa società di consumo, l'amore è una qualità
              spirituale ed esprime l'anima – si spoglia di tutto ciò che lo
              renderebbe semplicemente una manifestazione fisica. {"\n"}
              Ma l'amore è spesso misurato come una mera performance sessuale.
              \n Amare è dare di sé. L'emozione esprime amore perché l'emozione
              è "l'energia dell'amore in azione". Guardando oltre le nostre
              emozioni, apriamo i nostri cuori e sperimentiamo le loro
              conseguenze.{"\n"}
              Il potere del Nord si esprime attraverso i sentimenti che
              l'individuo ha di sé, e la risposta è la costruzione di miti su se
              stessi e sui propri sentimenti. {"\n"}
            </Text>
            <View style={[styles.imageView, { height: 329 }]}>
              <Image
                style={styles.image}
                source={require("@/assets/images/stagioni/summer2.jpg")}
              />
            </View>
            <Text style={styles.testo}>
              {"\n"}Si esprime anche attraverso il sentire il bisogno di
              un'azione più rapida.{"\n"}
              Il Coiote rappresenta molte cose per i popoli nativi. Per alcuni è
              una forma del Creatore, per altri è il clown, uno sciocco che
              inganna più se stesso che gli altri. Per alcuni è un fastidio, un
              ladro, un vagabondo. Per altri è il simbolo della libertà e del
              mistero.{"\n"}
              Il trucco preferito del Coiote è farti innamorare, più
              frequentemente di una persona molto diversa da te e da come avevi
              idealizzato il tuo partner.{"\n"}
              L'attrazione è la colla che attrae le persone per imparare le
              lezioni della vita. L'amore è il cemento che unisce, finché
              vogliono imparare l'uno dall'altro.{"\n"}
              Shawnodese è un periodo per esplorare l'amore, le relazioni, per
              esplorare il mondo intorno a te. Per imparare chi sei e come
              questo si confronta con quello che pensi dovresti essere. Per fare
              i primi passi energici verso la propria maturità.{"\n"}
              Dobbiamo imparare a proteggerci, poiché questa è una lezione
              necessaria per diventare una persona matura. {"\n"}
              Dobbiamo imparare che c'è un momento per aprirsi e un altro per
              contenere la nostra energia e i nostri sentimenti per noi stessi.{" "}
              {"\n"}
              Shawnodese è il luogo del cuore, il luogo delle emozioni. È qui
              che arriviamo quando abbiamo bisogno di guarigione per il cuore,
              quando dobbiamo imparare come amare, quando dobbiamo imparare ad
              abbandonare tutto ciò che non è amore: odio, paura, invidia,
              gelosia, rabbia, collera e rancore. \n Shawnodese è quello che si
              cerca per guarire da un vecchio amore o quando stiamo cercando un
              nuovo amore. È qui che imparerai perché ti senti attratto da una
              persona e cosa puoi fare per aiutare la relazione a crescere.{" "}
              {"\n"}
              In questa posizione imparerai su fascino, nutrimento, fiducia,
              credulità, umorismo e manipolazione, sensualità e sessualità. Come
              si differenziano e sono le stesse. {"\n"}
              Il potere di Shawnodese è il potere dell'amore, del cuore aperto
              che lavora insieme alla mente discriminante. {"\n"}
              Il potere di Shawnodese è il potere della Crescita.{"\n"}È un
              momento di raccontare storie di estati passate, di rendere
              consapevole il momento, della fede totale che abbiamo nell'alzarsi
              del sole, nei cicli della luna, nel movimento delle stelle.{"\n"}È
              un momento di riconoscere e fare connessioni con il nostro posto
              nell'universo che è una parte creativa e prodotto delle forze
              universali della natura, del Divino, e del nostro viaggio dentro
              di esso.{"\n"}
              La Terra è bagnata dal calore e dalla vita, tutta la natura vibra
              con questa energia. Il Sole impetuoso, nel suo potere onnipotente,
              come una divinità nel culmine del suo splendore, conclude e inizia
              un altro anno, facendo girare la Ruota della Vita, segnando
              l'inizio del raccolto, collegando il cervello al Cielo, mostrando
              i cicli celesti che ordinano il mondo e mostrandoci come
              organizzare le nostre vite. {"\n"}
              Le stagioni sacre segnano inizio e fine, ciascuna rappresenta la
              fine del vecchio e apre un nuovo capitolo nel continuum maggiore
              della nostra esperienza evolutiva individuale e collettiva. {"\n"}
              Vedendo il ciclo naturale di nascita (primavera), crescita
              (estate), maturità (autunno), e passaggio (inverno), si può vedere
              una distanza molto breve tra concetto e applicazione. {"\n"}
              Tutte le vere iniziazioni sono precedute dall'istruzione, dalla
              formazione, dalla disciplina e dalla purificazione.
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
