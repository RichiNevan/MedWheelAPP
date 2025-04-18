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
          <Text style={styles.title}>Lua da Abundancia</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Abundance</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna dell'Abbondanza</Text>
        )}

        {/* <View style={styles.imageView}></View> */}

        {language === "prt" && (
          <Text style={styles.testo}>
            Segundo Sun Bear é a Lua da Colheita, Tempo da Colheita.{"\n"}Para
            Kenneth Meadows e na Roda de Estudos Voo da Águia chamaremos de Lua
            da Abundância.{"\n"}A Lua da Abundância é a última Lua de
            Shawnodese. {"\n"}
            Sua cor é o púrpura e sofre influência do Clã das Tartarugas. {"\n"}
            A Ametista ensina às pessoas, vivenciando esta lua, o bom julgamento
            e a justiça; a Flor Violeta ensina a habilidade de penetrar nas
            regiões secretas do coração e da alma; e o Urso Marrom ensina a
            curiosidade criativa.{"\n"}
            Esta Lua ensina sobre discriminação, decisões justas, bom senso,
            perseverança, confiança e a habilidade de analisar. {"\n"}A energia
            desta posição é de equilíbrio, racionalidade e praticidade. Este é o
            lugar da Roda que nos ajudará a realmente entender os conceitos de
            dever e trabalho. {"\n"}
            No lugar do Urso Marrom, devemos nos precaver contra sermos super
            críticos com os outros ou cínicos sobre a vida.{"\n"}
            {"\n"}
            Os nascidos dessa Lua tem a ametista como seu totem mineral, a
            violeta como sua planta totem e o urso marrom como o totem animal.{" "}
            {"\n"}
            Pertencem ao elemento terra. {"\n"}
            Possuem habilidades de serem justos e analíticos. Valorizam os
            amigos e os cooperadores, geralmente são populares entre os seus
            conhecidos. {"\n"}
            Eles tem a força de se proteger e os seus amigos, dos extremos.{" "}
            {"\n"}
            Quer seja álcool ou negatividade. Sua proteção, em grande parte, vem
            do seu próprio bom senso e o conhecimento que as pessoas fazem seu
            próprio negativismo e podem então ter controle sobre a situação se
            quiserem.{"\n"}
            Quando estão equilibrados, tem a habilidade para ajudar os outros a
            alcançar o limite espiritual para que possam equilibrar suas
            próprias energias internas e externas. {"\n"}
            Eles geralmente são poderosos oradores que podem alcançar grande
            numero de pessoas para que vejam a necessidade da harmonia em suas
            próprias vidas.{"\n"}
            Eles também são ótimos supervisores e professores. {"\n"}
            Possuem a tendência de serem frios e calculistas e precisos no seu
            pensamento e na sua apresentação.{"\n"}
            Quando diz para os outros do tipo “pode estar certo“ é porque ele
            sabe exatamente o que está falando.{"\n"}A Lua da Abundância
            representa as qualidades de crescimento e confiança. {"\n"}
            Ela ajuda os nativos no lado prático, os ajuda a não tornarem-se
            cínicos sobre o mundo à sua volta.{"\n"}
            Devem-se guardar contra o cinismo que os fará com que se tornem
            severamente críticos sobre tudo e sobre todos. Quando entram em tais
            estágios, é difícil estar ao seu redor. {"\n"}
            Nada literalmente irá satisfazê-los ou torná-los mais dóceis. Nessas
            épocas podem demonstrar uma amargura totalmente fora de proporção
            com qualquer coisa que tenha acontecido com eles. {"\n"}
            Eles podem desenterrar quaisquer fatos infelizes de sua vida para
            justificar tais sentimentos.{"\n"}
            Tem uma habilidade natural de promover o retorno de tudo aquilo que
            botam para fora, o que evita que percam o equilíbrio, pois sabem que
            tudo retorna.{"\n"}
            Eles são frios, mas isso geralmente esconde a profundidade do
            sentimento tão tenro como a violeta. {"\n"}
            Eles podem sentir as coisas fortemente, mas eles, geralmente
            preferem mostrar seus sentimentos através do trabalho, para melhorar
            a vida dos que ama, aso invés de somente falar sobre suas emoções.
            {"\n"}
            Eles tem a capacidade de penetrar nos mais profundos segredos dos
            corpos e mentes ao seu redor. Se algo está errado com você, não diga
            que não está para eles. {"\n"}
            Eles podem ver através de suas mentiras e não irão respeitá-lo se
            sente que você mente com frequência. {"\n"}
            De fato se você mente com frequência, com certeza irá sentir a força
            de sua ira, que pode ser muito forte, mas geralmente expresso de uma
            maneira tranquila, e até calculista.{"\n"}
            Eles são curiosos sobre o mundo. {"\n"}
            Eles gostam de saber o que faz tudo andar, tanto humano como outras
            coisas. Especialmente, porque isso os ajuda a consertar as coisas
            quando estão erradas.{"\n"}
            Eles gostam de consertar erros que vem ajudando tudo a estar em
            equilíbrio. {"\n"}
            Esse povo é lento e deliberado, tomando algum tempo o antes que se
            envolvam. {"\n"}
            Eles realmente gostam de curtir a vida e farão tudo o que podem para
            que suas vidas sejam confortáveis. {"\n"}
            Geralmente são lerdos no inverno. Eles gostam de manter essa estação
            lerda para que possam contemplar o ano passado e o que virá. {"\n"}
            São bem humorados e de boa natureza, gentis e confiantes, desde que
            estejam equilibrados. {"\n"}
            No entanto se sentirem-se encurralados pela circunstância de suas
            vidas e de suas idéias, ou de uma pessoa, eles podem tornarem-se
            inimigos formidáveis. {"\n"}
            Eles virão a você com precisão, ou os atingirão em qualquer ponto
            fraco com suas garras bem afiadas.{"\n"}
            Porque eles se acham tão próximos da realidade física, as pessoas as
            vezes esquecem que eles estão tão confortáveis em realidades
            espirituais e que tem a sabedoria destas, quanto as materiais.{" "}
            {"\n"}
            Essa sabedoria os permite saber onde estão as fraquezas e forças de
            outras pessoas. {"\n"}
            Eles são espertos e podem fazer qualquer coisa que as suas mentes
            queiram. {"\n"}
            Geralmente tornam-se líderes em qualquer campo que persistam, por
            causa de sua justiça, força, coragem e tenacidade. {"\n"}
            Eles persistiram suas idéias até que as mesmas aconteçam de sua
            maneira, e irão defender com bravura aqueles que estão sob seus
            cuidados. {"\n"}A não ser que ele sinta que eles precisem de uma
            lição que irá vir contra eles.{"\n"}
            Essa lua ensina sobre justiça, discriminação, habilidades de
            raciocínio e análise. {"\n"}
            Ensina a equilibrar sua próprias energias espirituais e físicas
            enquanto se mantêm aterrado.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            According to Sun Bear, it is the Harvest Moon, Time of the Harvest.
            {"\n"}For Kenneth Meadows and in the Eagle's Flight Study Wheel, we
            will call it the Moon of Abundance.{"\n"}The Moon of Abundance is
            the last Moon of Shawnodese. {"\n"}Its color is purple and it is
            influenced by the Turtle Clan. {"\n"}Amethyst teaches the people
            living through this moon good judgment and justice; the Violet
            Flower teaches the ability to penetrate the secret regions of the
            heart and soul; and the Brown Bear teaches creative curiosity.{"\n"}
            This Moon teaches about discrimination, fair decisions, common
            sense, perseverance, trust, and the ability to analyze. {"\n"}The
            energy of this position is of balance, rationality, and
            practicality. This is the place in the Wheel that will truly help us
            understand the concepts of duty and work. {"\n"}In the place of the
            Brown Bear, we should guard against being overly critical of others
            or cynical about life.{"\n"}
            {"\n"}Those born under this Moon have amethyst as their mineral
            totem, violet as their plant totem, and the brown bear as their
            animal totem.{"\n"}They belong to the earth element. {"\n"}They have
            the abilities to be fair and analytical. They value friends and
            cooperators, and are generally popular among their acquaintances.{" "}
            {"\n"}They have the strength to protect themselves and their friends
            from extremes.{"\n"}
            {"\n"}Whether it's alcohol or negativity, their protection largely
            comes from their own common sense and the knowledge that people
            create their own negativity, and they can control the situation if
            they want to.{"\n"}When balanced, they have the ability to help
            others reach their spiritual limit so they can balance their own
            internal and external energies. {"\n"}They are often powerful
            speakers who can reach a large number of people so they can see the
            need for harmony in their own lives.{"\n"}They are also great
            supervisors and teachers. {"\n"}They tend to be cold, calculating,
            and precise in their thinking and presentation.{"\n"}When they say
            to others "you may be right," it's because they know exactly what
            they are talking about.{"\n"}The Moon of Abundance represents
            qualities of growth and trust. {"\n"}It helps natives on the
            practical side, helping them not become cynical about the world
            around them.{"\n"}They should guard against cynicism, which will
            make them overly critical of everything and everyone. When they
            enter such stages, it is hard to be around them. {"\n"}Nothing
            literally will satisfy them or make them more docile. During these
            times, they may display bitterness totally out of proportion to
            anything that has happened to them. {"\n"}They may dig up any
            unhappy facts from their life to justify such feelings.{"\n"}They
            have a natural ability to promote the return of everything they put
            out, which prevents them from losing balance because they know
            everything returns.{"\n"}They are cold, but this usually hides the
            depth of feeling as tender as the violet. {"\n"}They can feel things
            deeply, but generally prefer to show their feelings through work, to
            improve the lives of those they love, instead of just talking about
            their emotions.{"\n"}They have the ability to penetrate the deepest
            secrets of the bodies and minds around them. If something is wrong
            with you, don’t say it’s not to them.{"\n"}They can see through your
            lies and won’t respect you if they feel you lie often.{"\n"}In fact,
            if you lie often, you will definitely feel the force of their anger,
            which can be very strong, but usually expressed in a calm, even
            calculating way.{"\n"}They are curious about the world. {"\n"}They
            like to know what makes everything tick, both human and other
            things. Especially because this helps them fix things when they are
            wrong.{"\n"}They like to fix mistakes that come up, helping
            everything stay in balance. {"\n"}These people are slow and
            deliberate, taking their time before they get involved. {"\n"}They
            really enjoy life and will do whatever they can to make their lives
            comfortable. {"\n"}They are usually slow in the winter. They like to
            keep this season slow so they can contemplate the past year and what
            is to come. {"\n"}They are good-humored and good-natured, gentle and
            confident, as long as they are balanced. {"\n"}However, if they feel
            cornered by the circumstances of their lives and their ideas, or by
            a person, they can become formidable enemies. {"\n"}They will come
            at you with precision, or hit you at any weak point with their sharp
            claws.{"\n"}Because they see themselves so close to physical
            reality, people sometimes forget that they are just as comfortable
            in spiritual realities and possess the wisdom of these as they do of
            the material ones.{"\n"}
            {"\n"}This wisdom allows them to know the weaknesses and strengths
            of other people. {"\n"}They are smart and can do anything their
            minds want. {"\n"}They generally become leaders in any field they
            persist in, because of their justice, strength, courage, and
            tenacity. {"\n"}They will persist with their ideas until they happen
            their way, and will bravely defend those under their care. {"\n"}
            Unless they feel they need a lesson that will come back against
            them.{"\n"}This moon teaches about justice, discrimination,
            reasoning skills, and analysis. {"\n"}It teaches to balance your own
            spiritual and physical energies while staying grounded.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Secondo Sun Bear, è la Luna del Raccolto, Tempo del Raccolto.{"\n"}
            Per Kenneth Meadows e nella Ruota di Studi Volo dell'Aquila la
            chiameremo Luna dell'Abbondanza.{"\n"}La Luna dell'Abbondanza è
            l'ultima Luna di Shawnodese. {"\n"}Il suo colore è il viola e
            subisce l'influenza del Clan delle Tartarughe. {"\n"}L'Ametista
            insegna alle persone che vivono questa luna il buon giudizio e la
            giustizia; il Fiore Violetta insegna la capacità di penetrare nelle
            regioni segrete del cuore e dell'anima; e l'Orso Bruno insegna la
            curiosità creativa.{"\n"}Questa Luna insegna la discriminazione,
            decisioni giuste, buon senso, perseveranza, fiducia e la capacità di
            analizzare. {"\n"}L'energia di questa posizione è di equilibrio,
            razionalità e praticità. Questo è il posto della Ruota che ci
            aiuterà a comprendere veramente i concetti di dovere e lavoro.{" "}
            {"\n"}Nel posto dell'Orso Bruno, dobbiamo proteggerci dall'essere
            troppo critici con gli altri o cinici riguardo alla vita.{"\n"}
            {"\n"}I nati sotto questa Luna hanno l'ametista come totem minerale,
            la violetta come pianta totem e l'orso bruno come totem animale.
            {"\n"}Appartengono all'elemento terra. {"\n"}Hanno la capacità di
            essere giusti e analitici. Valorizzano gli amici e i cooperatori, e
            di solito sono popolari tra i loro conoscenti. {"\n"}Hanno la forza
            di proteggere se stessi e i loro amici dagli estremi.{"\n"}
            {"\n"}Che si tratti di alcol o negatività, la loro protezione deriva
            principalmente dal loro buon senso e dalla consapevolezza che le
            persone creano la propria negatività, e possono controllare la
            situazione se lo desiderano.{"\n"}Quando sono equilibrati, hanno la
            capacità di aiutare gli altri a raggiungere il limite spirituale per
            bilanciare le proprie energie interne ed esterne. {"\n"}Sono spesso
            oratori potenti che possono raggiungere un gran numero di persone
            affinché vedano la necessità dell'armonia nelle loro vite.{"\n"}Sono
            anche ottimi supervisori e insegnanti. {"\n"}Hanno la tendenza a
            essere freddi, calcolatori e precisi nel loro pensiero e nella loro
            presentazione.{"\n"}Quando dicono agli altri “puoi avere ragione” è
            perché sanno esattamente di cosa stanno parlando.{"\n"}La Luna
            dell'Abbondanza rappresenta le qualità di crescita e fiducia. {"\n"}
            Aiuta i nativi sul lato pratico, impedendo loro di diventare cinici
            riguardo al mondo che li circonda.{"\n"}Devono proteggersi dal
            cinismo che li renderà eccessivamente critici verso tutto e tutti.
            Quando entrano in tali stadi, è difficile stare con loro. {"\n"}
            Nulla li soddisferà letteralmente o li renderà più docili. In questi
            periodi, possono mostrare un'amarezza completamente fuori
            proporzione con qualsiasi cosa sia successa loro. {"\n"}Possono
            riesumare qualsiasi fatto sfortunato della loro vita per
            giustificare tali sentimenti.{"\n"}Hanno una capacità naturale di
            promuovere il ritorno di tutto ciò che mettono fuori, il che
            impedisce loro di perdere l'equilibrio, perché sanno che tutto
            torna.{"\n"}Sono freddi, ma questo di solito nasconde la profondità
            di un sentimento tanto tenero quanto la violetta. {"\n"}Possono
            sentire le cose intensamente, ma generalmente preferiscono mostrare
            i loro sentimenti attraverso il lavoro, per migliorare la vita di
            chi amano, invece di parlare solo delle loro emozioni.{"\n"}Hanno la
            capacità di penetrare nei segreti più profondi dei corpi e delle
            menti che li circondano. Se c'è qualcosa che non va con te, non dire
            che non è così a loro.{"\n"}Possono vedere attraverso le tue bugie e
            non ti rispetteranno se sentono che menti frequentemente.{"\n"}In
            effetti, se menti spesso, sentirai sicuramente la forza della loro
            ira, che può essere molto forte, ma generalmente espressa in modo
            calmo e anche calcolato.{"\n"}Sono curiosi del mondo. {"\n"}Gli
            piace sapere cosa fa funzionare tutto, sia umano che altro.
            Specialmente perché questo li aiuta a sistemare le cose quando sono
            sbagliate.{"\n"}Amano correggere gli errori che vengono, aiutando
            tutto a rimanere in equilibrio. {"\n"}Queste persone sono lente e
            deliberate, prendendo tempo prima di impegnarsi. {"\n"}Gli piace
            davvero godersi la vita e faranno tutto il possibile per rendere le
            loro vite comode. {"\n"}Di solito sono lenti in inverno. Amano
            mantenere questa stagione lenta così possono contemplare l'anno
            passato e ciò che verrà. {"\n"}Sono di buon umore e di buona natura,
            gentili e fiduciosi, finché sono equilibrati. {"\n"}Tuttavia, se si
            sentono accerchiati dalle circostanze delle loro vite e delle loro
            idee, o da una persona, possono diventare nemici formidabili. {"\n"}
            Verranno da te con precisione, o ti colpiranno in qualsiasi punto
            debole con le loro unghie affilate.{"\n"}Poiché si considerano così
            vicini alla realtà fisica, a volte le persone dimenticano che sono
            altrettanto a loro agio nelle realtà spirituali e che possiedono la
            saggezza di queste, così come quelle materiali.{"\n"}
            {"\n"}Questa saggezza consente loro di conoscere le debolezze e le
            forze degli altri. {"\n"}Sono intelligenti e possono fare qualsiasi
            cosa le loro menti desiderino. {"\n"}Di solito diventano leader in
            qualsiasi campo in cui persistano, grazie alla loro giustizia,
            forza, coraggio e tenacia. {"\n"}Persistono con le loro idee finché
            non accadono a modo loro, e difenderanno coraggiosamente chi è sotto
            la loro protezione. {"\n"}A meno che non sentano che abbiano bisogno
            di una lezione che tornerà contro di loro.{"\n"}Questa luna insegna
            la giustizia, la discriminazione, le capacità di ragionamento e
            analisi. {"\n"}Insegna a bilanciare le proprie energie spirituali e
            fisiche mentre si rimane radicati.
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
    fontSize: 35,
    fontFamily: "Cocchin",
    color: "darkred",
    margin: 20,
  },
  imageView: {
    flex: 1,
    height: 360,
    width: 350,
    margin: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    marginVertical: 10,
    borderRadius: 20,
  },

  image: {
    resizeMode: "contain",
    bottom: 290,
    width: 350,
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
