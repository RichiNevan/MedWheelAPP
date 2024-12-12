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
    });
  }, [navigation]);


  return (
    <ImageBackground source={require("@/assets/images/background.jpg")}>
      <ScrollView style={styles.scrollView}>
        {language === "prt" && (
          <Text style={styles.title}>Lua do Crescimento</Text>
        )}
        {language === "eng" && <Text style={styles.title}>Moon of Growth</Text>}
        {language === "ita" && (
          <Text style={styles.title}>Luna della Crescita</Text>
        )}

        <View style={styles.imageView}></View>

        {language === "prt" && (
          <Text style={styles.testo}>
            Segundo Sun Bear é a Lua do Retorno dos Sapos, Tempo de Crescimento.{" "}
            {"\n"}Para Kenneth Meadows e na Roda de Estudos Voo da Águia
            chamaremos de Lua do Crescimento.{"\n"}
            As pessoas nascidas sobre esta lua tem o Castor, como totem animal,
            A açucena azul no vegetal e a crisocola no mineral. Pertencem ao
            elemento Terra.{"\n"}É a segunda Lua de Wabun, sua cor é azul, e sua
            influência é o Clã da Tartaruga. {"\n"}
            Da Crisocola, as pessoas nesta posição, aprendem a equilibrar a
            terra e o céu dentro delas mesmas; da Açucena Azul a se sustentar e
            aos outros também; do Castor, de tornar os ambientes o mais
            agradável possível.{"\n"}
            Esta é uma das posições a ser explorada, quando desejamos aprender
            sobre estabilidade, o valor do trabalho árduo, sorte e nossa
            habilidade de criar e manter um ambiente ordeiro e bonito. {"\n"}
            Esta Lua nos ensina sobre perseverança, paciência, estabilidade e
            praticidade. {"\n"}
            Pessoas nesta posição devem evitar a teimosia, a indulgência e de
            conter todos os seus sentimentos. Os nascidos nessa lua aparentam
            serem sortudos. {"\n"}
            Apesar de que sua sorte aparente é fruto de trabalho duro, e de
            estar no lugar certo e na hora certa. {"\n"}
            Eles geralmente tem corpo forte, e pode ter especial prazer na
            saúde, especialmente se usar a crisocola. {"\n"}
            Devem controlar sua tendência a ganância. {"\n"}
            Eles tendem a levar uma vida estável, a não ser que ocorra algo
            drástico que promova mudanças. {"\n"}
            Na sua estabilidade eles se sentem muito confortáveis em situações
            conhecidas.{"\n"}
            Quando mudam de ambientes, gostam de faze-lo de forma mais
            sistemática possível. {"\n"}
            Eles se sentem confortáveis tendo coisas familiares ao seu redor.
            {"\n"}
            Esta parte estável de sua natureza, faz essas pessoas terem bons
            amigos. {"\n"}
            Uma vez que eles se decidam ser amigos, eles não mudaram de idéias
            facilmente, eles são associados leais a terem e os que podem trazer
            estabilidade as pessoas ou projetos de uma natureza mercuriana.
            {"\n"}
            Tem habilidade para trazer sensação de pureza as coisas e as pessoas
            que mantém contato. {"\n"}
            Isso vem de sua lealdade e estabilidade e sua boa vontade em tratar
            amizades e outros relacionamentos de uma maneira que pareça claro e
            cristalino pelos padrões atuais que lhes dá a sensação de vir de um
            tempo e lugar mais puro. {"\n"}
            Possuem também, a habilidade de sustentar aqueles com quem está
            associado, porque suas raízes vão profundamente na Terra eles são
            capazes de dar um pé firme para as pessoas ou projetos com os quais
            estão associados.{"\n"}
            Podem sustentar e adoçar as coisas que estão envolvidos com sua
            estabilidade, pois ela é adoçada pelo contentamento que são capazes
            de sentir e transmitir quando estão em equilíbrio com as energias
            vindas através deles. {"\n"}
            Quando suas energias não fluem adequadamente, podem cristalizar a
            sua estabilidade de forma a sufocar a vida fora deles, e quaisquer
            coisas que venha a ter contato.{"\n"}
            Quando não está contente transmite desarmonia tão grandemente,
            quanto transmite harmonia.{"\n"}
            Eles devem estar alegremente aterrados na matéria antes que eles
            possam descobrir as aspirações espirituais que estão com eles
            também. {"\n"}
            Recebem desta lua encorajamento para irem adiante do plano material
            e para buscar qualquer iluminação espiritual que possam encontrar.
            {"\n"}O elemento terra aumenta a estabilidade e o enraizamento e
            muitos de a suas outras características. {"\n"}
            Eles devem evitar de não serem bitolados ou teimosos nos seus
            pensamentos, sentimentos ou ações, senão poderão bloquear o fluxo da
            energia vital que o sustenta.{"\n"}
            Eles são capazes de alterar drasticamente seus ambientes em ordem de
            promover a sua própria paz, segurança e contentamento. Tendem a
            fazer alterações em qualquer nível, mental ou emocional. {"\n"}
            Eles fazem essas alterações de forma lenta, deliberada mas
            constante, e com retornos. {"\n"}
            Com seu ambiente em ordem, fazem reparos quando o necessário para
            ter certeza que se mantenha desta maneira. {"\n"}
            Uma maneira ordenada e segura é realmente necessário para ele
            trabalhar e crescer. Deve ser ordenado em todos os níveis. {"\n"}
            Não é que ele não possa mudar. É que ele tende a crescer mais
            facilmente quando tendo estabilidade que lhes dá a sensação de
            segurança e contentamento.{"\n"}
            Eles em sua maioria, tem alguma atração pela água. {"\n"}A água
            parece permitir-lhe de ver as coisa mais claramente por sua vida e
            maiores perspectivas. {"\n"}
            Eles são espertos e de rápido raciocínio. São rápidos em aprender
            qualquer coisa que julgam importantes para eles.{"\n"}
            Não são de muitas conversas, principalmente quando não estão bem
            certos quanto ambientes ou pessoas. {"\n"}
            Quando em ambientes conhecidos expressam seus pensamentos
            prontamente. Seus sentimentos são outra coisa. Eles podem segurar
            suas emoções, tal qual uma represa segura a água.{"\n"}
            Devem aprender a controlar seus sentimentos, externando-os aos
            poucos, para não serem afogados numa enchente de emoção. É um
            desafio para eles fazerem isso.{"\n"}
            São auto-suficientes e geralmente sentem que não deve amolar os
            outros com seus problemas. {"\n"}
            Se não aprende a expressar melhor seus sentimentos, e aceitar as
            mudanças da vida, podem tornar-se teimosos e infelizes e nessa
            condição, comumente abusam de comida, bebida, e qualquer outra coisa
            que preencha a sensação de descontentamento. {"\n"}
            Se ficam muito tempo nesse estado, bloqueando-se mais do que
            necessitam podem desenvolver bloqueios no pescoço ou garganta, ou
            prejudicar seu rim e fígado por excessos.{"\n"}
            Essa lua ensina como assentar suas próprias casas em ordem no plano
            terrestre, assim qualquer coisa que busquem, possam buscar de um
            lugar tranqüilo e com contentamento. {"\n"}
            Ensina o valor da estabilidade, da paciência e da perseverança, e
            como, se enraizarem na nossa Mãe-Terra.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            According to Sun Bear, it is the Moon of the Return of the Frogs, a
            Time of Growth. {"\n"}For Kenneth Meadows and in the Eagle Flight
            Study Wheel, we will call it the Moon of Growth.{"\n"}
            People born under this moon have the Beaver as their animal totem,
            the blue lily in the plant, and chrysocolla in the mineral. They
            belong to the Earth element.{"\n"}It is the second Moon of Wabun,
            its color is blue, and its influence is the Turtle Clan. {"\n"}
            From Chrysocolla, people in this position learn to balance the earth
            and sky within themselves; from the Blue Lily, they learn to sustain
            themselves and others as well; from the Beaver, they learn to make
            environments as pleasant as possible.{"\n"}
            This is one of the positions to explore when we wish to learn about
            stability, the value of hard work, luck, and our ability to create
            and maintain an orderly and beautiful environment. {"\n"}
            This Moon teaches us about perseverance, patience, stability, and
            practicality. {"\n"}
            People in this position should avoid stubbornness, indulgence, and
            holding all their feelings inside. Those born under this moon seem
            to be lucky.{"\n"}
            Although their apparent luck is the result of hard work, and being
            in the right place at the right time.{"\n"}
            They usually have a strong body and may take special pleasure in
            good health, especially if they use chrysocolla.{"\n"}
            They must control their tendency toward greed.{"\n"}
            They tend to lead a stable life, unless something drastic occurs to
            promote changes.{"\n"}
            In their stability, they feel very comfortable in familiar
            situations.{"\n"}
            When they change environments, they like to do so in the most
            systematic way possible.{"\n"}
            They feel comfortable having familiar things around them.{"\n"}
            This stable part of their nature makes them have good friends.{"\n"}
            Once they decide to be friends, they do not change their minds
            easily, they are loyal associates and can bring stability to people
            or projects of a mercurial nature.{"\n"}
            They have the ability to bring a sense of purity to the things and
            people they interact with.{"\n"}
            This comes from their loyalty and stability and their goodwill in
            treating friendships and other relationships in a way that seems
            clear and crystal clear by current standards, giving them a sense of
            coming from a purer time and place.{"\n"}
            They also have the ability to support those they are associated
            with, because their roots go deeply into the Earth, and they are
            able to give a firm foundation to the people or projects they are
            involved with.{"\n"}
            They can sustain and sweeten the things they are involved with due
            to their stability, as it is sweetened by the contentment they can
            feel and transmit when they are in balance with the energies flowing
            through them.{"\n"}
            When their energies do not flow properly, they may crystallize their
            stability in a way that suffocates the life out of them, and
            anything they come into contact with.{"\n"}
            When they are not content, they transmit disharmony as greatly as
            they transmit harmony.{"\n"}
            They must be happily grounded in the material before they can
            discover the spiritual aspirations they also have.{"\n"}
            They receive encouragement from this moon to move beyond the
            material plan and seek any spiritual enlightenment they can find.
            {"\n"}
            The Earth element enhances stability and rooting and many of their
            other characteristics.{"\n"}
            They must avoid being narrow-minded or stubborn in their thoughts,
            feelings, or actions, or they may block the flow of vital energy
            that sustains them.{"\n"}
            They are capable of drastically altering their environments in order
            to promote their own peace, security, and contentment. They tend to
            make changes on any level, mental or emotional.{"\n"}
            They make these changes slowly, deliberately but steadily, and with
            returns.{"\n"}
            With their environment in order, they make repairs when necessary to
            ensure it stays that way.{"\n"}
            An orderly and secure environment is really necessary for them to
            work and grow. They must be ordered at all levels.{"\n"}
            It’s not that they cannot change. It’s just that they tend to grow
            more easily when having stability, which gives them a sense of
            security and contentment.{"\n"}
            They mostly have some attraction to water.{"\n"}Water seems to allow
            them to see things more clearly through their life and greater
            perspectives.{"\n"}
            They are smart and quick-witted. They are quick to learn anything
            they deem important to them.{"\n"}
            They are not big talkers, especially when they are not sure about
            environments or people.{"\n"}
            When in familiar environments, they express their thoughts readily.
            Their feelings are another matter. They can hold their emotions,
            just like a dam holds water.{"\n"}
            They must learn to control their feelings, expressing them little by
            little, so they are not overwhelmed by a flood of emotion. It is a
            challenge for them to do this.{"\n"}
            They are self-sufficient and generally feel they should not burden
            others with their problems.{"\n"}
            If they do not learn to express their feelings better and accept
            life’s changes, they can become stubborn and unhappy, and in this
            condition, they often abuse food, drink, or anything else that fills
            the feeling of discontent.{"\n"}
            If they stay in this state too long, blocking themselves more than
            necessary, they may develop blockages in the neck or throat, or
            damage their kidneys and liver due to excess.{"\n"}
            This moon teaches how to settle your own house in order on the
            earthly plane, so anything they seek, they can seek from a peaceful
            and contented place.{"\n"}
            It teaches the value of stability, patience, and perseverance, and
            how to root ourselves in our Mother Earth.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Secondo Sun Bear è la Luna del Ritorno delle Rane, Tempo di
            Crescita. {"\n"}Per Kenneth Meadows e nella Ruota di Studio del Volo
            dell'Aquila, la chiameremo Luna della Crescita.{"\n"}
            Le persone nate sotto questa luna hanno il Castoro come totem
            animale, il giglio blu nella pianta e la crisocolla nel minerale.
            Appartengono all'elemento Terra.{"\n"}È la seconda Luna di Wabun, il
            suo colore è blu, e la sua influenza è il Clan della Tartaruga.{" "}
            {"\n"}
            Dalla Crisocolla, le persone in questa posizione imparano a
            bilanciare la terra e il cielo dentro di loro; dal Giglio Blu
            imparano a sostenere se stessi e gli altri; dal Castoro imparano a
            rendere l'ambiente il più piacevole possibile.{"\n"}
            Questa è una delle posizioni da esplorare quando desideriamo
            imparare sulla stabilità, il valore del lavoro duro, la fortuna e la
            nostra capacità di creare e mantenere un ambiente ordinato e bello.{" "}
            {"\n"}
            Questa Luna ci insegna la perseveranza, la pazienza, la stabilità e
            la praticità. {"\n"}
            Le persone in questa posizione dovrebbero evitare la testardaggine,
            l'indulgenza e trattenere tutti i loro sentimenti. Le persone nate
            sotto questa luna sembrano essere fortunate.{"\n"}
            Anche se la loro apparente fortuna è il frutto di un lavoro duro, ed
            essere nel posto giusto al momento giusto.{"\n"}
            Di solito hanno un corpo forte e possono provare un piacere speciale
            nella salute, specialmente se usano la crisocolla.{"\n"}
            Devono controllare la loro tendenza alla cupidigia.{"\n"}
            Tendono a condurre una vita stabile, a meno che non accada qualcosa
            di drammatico che promuova cambiamenti.{"\n"}
            Nella loro stabilità si sentono molto a loro agio in situazioni
            familiari.{"\n"}
            Quando cambiano ambiente, amano farlo nel modo più sistematico
            possibile.{"\n"}
            Si sentono a loro agio ad avere cose familiari intorno a loro.{"\n"}
            Questa parte stabile della loro natura li fa avere buoni amici.
            {"\n"}
            Una volta che decidono di essere amici, non cambiano facilmente
            idea, sono associati leali e possono portare stabilità alle persone
            o ai progetti di natura mercuriana.{"\n"}
            Hanno la capacità di portare un senso di purezza alle cose e alle
            persone con cui entrano in contatto.{"\n"}
            Questo viene dalla loro lealtà e stabilità e dalla loro buona
            volontà nel trattare amicizie e altri rapporti in modo che sembri
            chiaro e cristallino secondo gli standard attuali, dando loro la
            sensazione di venire da un tempo e luogo più puri.{"\n"}
            Hanno anche la capacità di sostenere quelli con cui sono associati,
            perché le loro radici vanno profondamente nella Terra e sono in
            grado di dare una base solida alle persone o ai progetti con cui
            sono coinvolti.{"\n"}
            Possono sostenere e addolcire le cose con cui sono coinvolti grazie
            alla loro stabilità, poiché essa viene addolcita dal contento che
            sono in grado di provare e trasmettere quando sono in equilibrio con
            le energie che fluiscono attraverso di loro.{"\n"}
            Quando le loro energie non fluiscono correttamente, possono
            cristallizzare la loro stabilità in modo da soffocare la vita fuori
            da loro e qualsiasi cosa entri in contatto.{"\n"}
            Quando non sono contenti, trasmettono disarmonia tanto quanto
            trasmettono armonia.{"\n"}
            Devono essere felicemente radicati nella materia prima di poter
            scoprire le aspirazioni spirituali che hanno anche loro.{"\n"}
            Ricevono da questa luna incoraggiamento per andare oltre il piano
            materiale e cercare qualsiasi illuminazione spirituale possano
            trovare.{"\n"}
            L'elemento Terra aumenta la stabilità e l'impianto delle radici e
            molte delle loro altre caratteristiche.{"\n"}
            Devono evitare di non essere chiusi o testardi nei loro pensieri,
            sentimenti o azioni, altrimenti potrebbero bloccare il flusso di
            energia vitale che li sostiene.{"\n"}
            Sono in grado di alterare drasticamente i loro ambienti per
            promuovere la loro pace, sicurezza e contentezza. Tendono a fare
            cambiamenti a qualsiasi livello, mentale o emotivo.{"\n"}
            Fanno questi cambiamenti lentamente, deliberatamente ma
            costantemente, e con ritorni.{"\n"}
            Con il loro ambiente in ordine, fanno riparazioni quando necessario
            per assicurarsi che rimanga in questo modo.{"\n"}
            Un ambiente ordinato e sicuro è davvero necessario per loro per
            lavorare e crescere. Deve essere ordinato a tutti i livelli.{"\n"}
            Non è che non possano cambiare. È solo che tendono a crescere più
            facilmente quando hanno stabilità che dà loro la sensazione di
            sicurezza e contentezza.{"\n"}
            Nella maggior parte dei casi, hanno una certa attrazione per
            l'acqua.{"\n"}L'acqua sembra permettere loro di vedere le cose più
            chiaramente attraverso la loro vita e prospettive più ampie.{"\n"}
            Sono intelligenti e di rapido pensiero. Sono veloci nell'imparare
            qualsiasi cosa ritengano importante per loro.{"\n"}
            Non sono chiacchieroni, soprattutto quando non sono molto certi
            riguardo a persone o ambienti.{"\n"}
            Quando sono in ambienti familiari, esprimono prontamente i loro
            pensieri. I loro sentimenti sono un'altra cosa. Possono trattenere
            le loro emozioni, proprio come una diga trattiene l'acqua.{"\n"}
            Devono imparare a controllare i loro sentimenti, esprimendoli poco a
            poco, per non essere sommersi da un'inondazione di emozioni. È una
            sfida per loro farlo.{"\n"}
            Sono autosufficienti e generalmente sentono di non dover infastidire
            gli altri con i loro problemi.{"\n"}
            Se non imparano a esprimere meglio i loro sentimenti e ad accettare
            i cambiamenti della vita, possono diventare testardi e infelici, e
            in questa condizione, abusano comunemente di cibo, bevande e
            qualsiasi altra cosa che riempia il senso di insoddisfazione.{"\n"}
            Se rimangono troppo a lungo in questo stato, bloccandosi più di
            quanto sia necessario, potrebbero sviluppare blocchi nel collo o
            nella gola, o danneggiare i loro reni e fegato per gli eccessi.
            {"\n"}
            Questa luna insegna come sistemare la propria casa in ordine nel
            piano terrestre, in modo che qualsiasi cosa cerchino, possano
            cercarla da un posto tranquillo e con contentezza.{"\n"}
            Insegna il valore della stabilità, della pazienza e della
            perseveranza, e come radicarsi nella nostra Madre Terra.
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