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
          <Text style={styles.title}>Lua do Amadurecimento</Text>
        )}
        {language === "eng" && (
          <Text style={styles.title}>Moon of Ripening</Text>
        )}
        {language === "ita" && (
          <Text style={styles.title}>Luna della Maturazione</Text>
        )}

        {/* <View style={styles.imageView}></View> */}

        {language === "prt" && (
          <Text style={styles.testo}>
            Segundo Sun Bear é a Lua dos Frutos Maduras, Tempo do
            Amadurecimento. {"\n"}Para Kenneth Meadows e na Roda de Estudos Voo
            da Águia chamaremos de Lua do Amadurecimento.{"\n"}A Lua do
            Amadurecimento é a segunda lua de Shawnodese, sua cor é o vermelho e
            recebe influências do Clã do Pássaro Trovão. {"\n"}O Ferro ensina às
            pessoas nesta posição sobre sua força e a Granada mostra-lhes que o
            coração é a fonte desta força. {"\n"}
            Da Framboesa elas aprendem sobre a sua doçura e os espinhos que eles
            projetam para se proteger esta sua parte das outras pessoas. {"\n"}O
            Esturjão mostra-lhes sua profundidade e necessidade de ensinar.{" "}
            {"\n"}
            Esta lua nos ensina como trabalhar com o centro do coração, como
            demonstrar afeição, como encarar medos, e como desenvolver as
            habilidades de liderança. {"\n"}
            Esta lua ajuda a desenvolver a coragem e o poder. {"\n"}
            As pessoas vivenciando a energia do Esturjão, devem se precaver
            contra a impulsividade, arrogância e a tendência a dominar qualquer
            cenário.{"\n"}
            Como a granada, o povo esturjão é frequentemente identificado pelo
            seu coração, que tende a ser grande, afetuoso e magnânimo. {"\n"}O
            melhor dos sentimentos eles tem em seu coração, e usualmente são
            simpáticos e benevolentes com todas as pessoas. {"\n"}
            Porque trabalham com o centro do seu coração, tendem a ser
            intuitivos e perceptivos, pessoas normalmente com talento para
            clarividência, ativa ou latente. {"\n"}
            Este talento frequentemente faz o esturjão perceber o perigo que
            pode existir e proteger-se, assim como a granada o faz. Como a
            granada, tem usualmente comportamento e atitudes de realeza. {"\n"}
            Ficam fora de ambientes muito cheios. {"\n"}
            São usualmente associados a energia sexual, por causa do seu encanto
            e afeto, que frequentemente provocam sentimentos sexuais em si
            mesmos e em todas as pessoas a sua volta. {"\n"}
            Com a granada eles precisam aprender a equilibrar e controlar essa
            energia para que não sejam consumidos por ela.{"\n"}
            Por causa dessa percepção e sensibilidade, eles tem habilidade para
            fazer e dizer coisas que podem penetrar profundamente no coração de
            seus amigos e inimigos. Fazem poderosos amigos e inimigos. {"\n"}
            Se sentirem que você os atraiçoou ou atraiçoou alguém que eles amam,
            podem direcionar toda força da energia de seu coração para você, de
            forma negativa, e realmente prejudica-lo. {"\n"}
            Quando estão sem equilíbrio, guardam seu poder, e como tornam-se
            impulsivos e irregulares, ficam furiosos, o que pode causar efeitos
            em seu coração e sua circulação. {"\n"}
            Quando isso acontece, podem ter uma variedade de moléstias que mais
            fomentam suas atitudes irregulares. Pessoas dessa lua, seguem
            caminhos variados. {"\n"}
            São garças que, literalmente vão aonde os anjos temem pisar. {"\n"}
            Se você tem uma tarefa difícil, um trabalho impossível, uma
            responsabilidade que ninguém quer assumir, procure dentro de você um
            esturjão. {"\n"}
            Eles são corajosos e sempre dispostos a provar que tem este traço.{" "}
            {"\n"}
            Eles são versáteis e se adaptam a qualquer tipo de trabalho, cultura
            ou filosofia. {"\n"}
            Apenas tenha certeza que ele acredita no que está fazendo e pode ter
            certeza que será um trabalho bem feito. Do ferro, essas pessoas tem
            a certeza e habilidade para temperar suas experiências na vida.{" "}
            {"\n"}
            Sua associação com esse mineral acentuam sua conexão com o coração e
            o sangue. {"\n"}
            Este também é o motivo das mudanças radicais que estas pessoas podem
            trazer para outras pessoas ou projetos aos quais estejam associadas.
            {"\n"}
            {"\n"}A planta das pessoas nascidas neste período é a framboesa
            vermelha, que é uma popular fruta silvestre. {"\n"}
            Na sua planta, os esturjões podem procurar a validação de seu
            status, pois ambos fazem parte da elite e são populares em suas
            famílias. {"\n"}
            Como a framboesa, eles podem frequentemente se encontrar fora dos
            divertimentos que eles mesmos elaboram, sempre que eles não estejam
            em primeiro lugar. {"\n"}O povo do esturjão, como a framboesa, podem
            frequentemente aparentar estar em um caminho, quando, na verdade,
            estão pensando em alguma coisa diferente. {"\n"}
            Eles normalmente trabalham em um dos dois caminhos. {"\n"}
            Alguns esturjões aparentam ser agressivos quando você os encontra
            pela primeira vez. {"\n"}É uma forma de se protegerem das
            emboscadas. Outros aparentam ser amorosos e afetuosos mas, de outro
            lado, você pode encontrar alguns espinhos. {"\n"}
            Este paradoxo é outra característica do povo deste totem.{"\n"}
            Enquanto são normalmente afetuosos, eles tem a tendência marcante de
            evitar mostrar seus sentimentos. {"\n"}
            Esta é a razão porque eles tem espinhos em algumas situações. {"\n"}
            Esta é a sua maneira de se proteger de pessoas que querem
            desvaloriza-los e tira-los do caminho que eles realmente gostam.{" "}
            {"\n"}
            Por trás das aparências, o povo se esturjão é bastante sensível.{" "}
            {"\n"}
            Por causa de sua percepção, eles podem perceber facilmente o que os
            outros estão sentindo, e isto os afeta. {"\n"}
            Eles se magoam facilmente, mas não gostam de mostrar isso, porque
            isso interfere na imagem de independência e poder que eles projetam.{" "}
            {"\n"}
            Eles podem esconder seu sofrimento ou aborrecimento embaixo de sua
            amabilidade, mas eles realmente nunca esquecem o sofrimento que
            alguém causou a eles, e, em períodos em que estão em desequilíbrio,
            eles poderão elaborar vinganças.{"\n"}
            Como a framboesa, os esturjões tem um efeito limpo e adstringente em
            tudo à volta deles. {"\n"}
            Dentro de sua amabilidade, eles frequentemente “zombam” das noções
            que as pessoas têm delas mesmas e do mundo, promovendo uma limpeza
            emocional. {"\n"}
            Ajudando as pessoas a se desfazerem de suas falsas noções, eles
            ajudam a curar problemas emocionais.{"\n"}É excelente Ter esturjões
            à volta em situações de emergência, sejam físicas ou emocionais,
            porque sua coragem é contagiosa e eles ajudam a resolver sérios
            problemas. {"\n"}
            Nisso eles são como sua planta, que pode ajudar a parar o
            “sangramento”. {"\n"}O clã do pássaro trovão fornece ao esturjão o
            calor e a estabilidade que eles mostram ao mundo. {"\n"}
            Os membros deste clã dirigem sua energia e habilidade para, com
            sucesso, fazer diversas coisas ao mesmo tempo. {"\n"}
            Reforça também a necessidade deste povo ser cuidadoso para que sua
            energia não deteriore.{"\n"}
            São pessoas que tem uma tendência a ter problemas de nervos que
            podem se transformar em sérios problemas para o corpo se elas não
            tiverem tempo para ter períodos de tranquilidade, quando estão
            evolvidas com coisas além de sua atividades normais. {"\n"}
            Os esturjões precisam ter algum tempo tranquilo, sentados, meditando
            ou lendo, todos os dias, para manter seu corpo saudável. {"\n"}
            Porém, permanecer tranquilo não é natural para eles, então eles
            precisam aprender a cultivar isso.
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            According to Sun Bear, it is the Moon of Ripe Fruits, Time of
            Ripening. {"\n"}For Kenneth Meadows and in the Eagle Flight Study
            Wheel, we will call it the Moon of Ripening.{"\n"}The Moon of
            Ripening is the second moon of Shawnodese, its color is red and it
            receives influences from the Thunderbird Clan. {"\n"}Iron teaches
            people in this position about their strength, and the Pomegranate
            shows them that the heart is the source of this strength. {"\n"}
            From the Raspberry, they learn about its sweetness and the thorns
            they project to protect this part of themselves from others. {"\n"}
            The Sturgeon shows them its depth and need to teach. {"\n"}
            This moon teaches us how to work with the center of the heart, how
            to show affection, how to face fears, and how to develop leadership
            skills. {"\n"}
            This moon helps develop courage and power. {"\n"}
            People experiencing the energy of the Sturgeon should be cautious of
            impulsiveness, arrogance, and the tendency to dominate any scenario.
            {"\n"}
            Like the pomegranate, the sturgeon people are often identified by
            their hearts, which tend to be large, affectionate, and magnanimous.{" "}
            {"\n"}The best of feelings they have in their heart, and they are
            usually friendly and benevolent toward all people. {"\n"}
            Because they work with the center of their heart, they tend to be
            intuitive and perceptive, usually talented in clairvoyance, either
            active or latent. {"\n"}
            This talent often makes the sturgeon aware of any potential danger
            and protect themselves, just like the pomegranate does. Like the
            pomegranate, they usually have royal behavior and attitudes. {"\n"}
            They stay away from overly crowded environments. {"\n"}
            They are usually associated with sexual energy because of their
            charm and affection, which often provoke sexual feelings in
            themselves and in all the people around them. {"\n"}
            With the pomegranate, they need to learn how to balance and control
            this energy so they are not consumed by it.{"\n"}
            Because of this perception and sensitivity, they have the ability to
            do and say things that can deeply penetrate the hearts of their
            friends and enemies. They make powerful friends and enemies. {"\n"}
            If they feel that you have betrayed them or betrayed someone they
            love, they can direct all the power of their heart's energy toward
            you negatively, and really harm you. {"\n"}
            When they are out of balance, they hold their power, and as they
            become impulsive and irregular, they get angry, which can cause
            effects on their heart and circulation. {"\n"}
            When this happens, they may experience a variety of illnesses that
            further fuel their irregular behaviors. People of this moon follow
            varied paths. {"\n"}
            They are herons who literally go where angels fear to tread. {"\n"}
            If you have a difficult task, an impossible job, or a responsibility
            that no one wants to take on, look within yourself for a sturgeon.{" "}
            {"\n"}
            They are courageous and always willing to prove they have this
            trait. {"\n"}
            They are versatile and adapt to any type of work, culture, or
            philosophy. {"\n"}
            Just make sure they believe in what they are doing, and you can be
            sure it will be a job well done. From iron, these people have the
            certainty and skill to temper their life experiences. {"\n"}
            Their association with this mineral accentuates their connection to
            the heart and blood. {"\n"}
            This is also the reason for the radical changes these people can
            bring to others or projects they are associated with.{"\n"}
            {"\n"}The plant of people born during this period is the red
            raspberry, which is a popular wild fruit. {"\n"}
            In their plant, sturgeons may seek validation of their status, as
            both are part of the elite and are popular in their families. {"\n"}
            Like the raspberry, they may often find themselves outside the
            entertainments they create, whenever they are not in first place.{" "}
            {"\n"}The sturgeon people, like the raspberry, may often appear to
            be on one path, when in fact, they are thinking about something
            different. {"\n"}
            They usually work on one of two paths. {"\n"}
            Some sturgeons appear aggressive when you meet them for the first
            time. {"\n"}It is a way to protect themselves from ambushes. Others
            appear loving and affectionate but, on the other hand, you may find
            some thorns. {"\n"}
            This paradox is another characteristic of the people of this totem.
            {"\n"}
            While they are usually affectionate, they have the marked tendency
            to avoid showing their feelings. {"\n"}
            This is why they have thorns in some situations. {"\n"}
            This is their way of protecting themselves from people who want to
            devalue them and take them off the path they really enjoy. {"\n"}
            Behind the appearances, the sturgeon people are quite sensitive.{" "}
            {"\n"}
            Because of their perception, they can easily sense what others are
            feeling, and this affects them. {"\n"}
            They get hurt easily, but they don’t like to show it because it
            interferes with the image of independence and power they project.{" "}
            {"\n"}
            They can hide their suffering or upset under their kindness, but
            they never truly forget the suffering someone has caused them, and
            during periods of imbalance, they may devise revenge.{"\n"}
            Like the raspberry, sturgeons have a clean and astringent effect on
            everything around them. {"\n"}
            Within their kindness, they often "mock" the notions people have of
            themselves and the world, promoting emotional cleansing. {"\n"}
            By helping people discard their false notions, they help heal
            emotional problems.{"\n"}It is excellent to have sturgeons around in
            emergency situations, whether physical or emotional, because their
            courage is contagious, and they help resolve serious problems.{" "}
            {"\n"}
            In this, they are like their plant, which can help stop "bleeding."{" "}
            {"\n"}The Thunderbird clan provides the sturgeon with the warmth and
            stability they show to the world. {"\n"}
            The members of this clan direct their energy and ability to
            successfully do many things at once. {"\n"}
            It also reinforces the need for these people to be careful so their
            energy does not deteriorate.{"\n"}
            They are people who tend to have nerve problems that can turn into
            serious issues for the body if they don’t have time for periods of
            tranquility when they are involved with things beyond their normal
            activities. {"\n"}
            Sturgeons need to have some quiet time, sitting, meditating, or
            reading every day to keep their bodies healthy. {"\n"}
            However, staying quiet is not natural for them, so they need to
            learn to cultivate it.
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            Secondo Sun Bear, è la Luna dei Frutti Maturi, Tempo del
            Maturamento. {"\n"}Per Kenneth Meadows e nella Ruota di Studio del
            Volo dell'Aquila la chiameremo Luna del Maturamento.{"\n"}La Luna
            del Maturamento è la seconda luna di Shawnodese, il suo colore è il
            rosso e riceve influenze dal Clan dell'Uccello Tuono. {"\n"}Il Ferro
            insegna alle persone in questa posizione sulla loro forza e la
            Melagrana mostra loro che il cuore è la fonte di questa forza.{" "}
            {"\n"} Dalla Lampone imparano sulla sua dolcezza e i pungiglioni che
            proiettano per proteggere questa parte di loro stessi dagli altri.{" "}
            {"\n"}Lo Storione mostra loro la sua profondità e la necessità di
            insegnare. {"\n"} Questa luna ci insegna come lavorare con il centro
            del cuore, come dimostrare affetto, come affrontare le paure, e come
            sviluppare le abilità di leadership. {"\n"} Questa luna aiuta a
            sviluppare il coraggio e il potere. {"\n"} Le persone che vivono
            l'energia dello Storione devono fare attenzione all'impulsività,
            all'arroganza e alla tendenza a dominare qualsiasi scenario.{"\n"}{" "}
            Come la melagrana, il popolo dello storione è spesso identificato
            dal loro cuore, che tende ad essere grande, affettuoso e magnanimo.{" "}
            {"\n"}I migliori sentimenti li hanno nel loro cuore, e solitamente
            sono simpatici e benevoli con tutte le persone. {"\n"} Poiché
            lavorano con il centro del loro cuore, tendono ad essere intuitivi e
            percettivi, persone solitamente dotate di talento per la
            chiaroveggenza, attiva o latente. {"\n"} Questo talento spesso fa sì
            che lo storione percepisca il pericolo che potrebbe esserci e si
            protegga, proprio come la melagrana fa. Come la melagrana, di solito
            ha comportamenti e atteggiamenti da royalty. {"\n"} Stanno lontani
            da ambienti troppo affollati. {"\n"} Sono solitamente associati
            all'energia sessuale, a causa del loro fascino e affetto, che
            frequentemente provocano sentimenti sessuali in se stessi e in tutte
            le persone intorno a loro. {"\n"} Con la melagrana devono imparare a
            bilanciare e controllare questa energia per non esserne consumati.
            {"\n"} A causa di questa percezione e sensibilità, hanno la capacità
            di fare e dire cose che possono penetrare profondamente nel cuore
            dei loro amici e nemici. Fanno potenti amici e nemici. {"\n"} Se
            sentono che li hai traditi o hai tradito qualcuno che amano, possono
            indirizzare tutta la forza dell'energia del loro cuore verso di te,
            negativamente, e davvero danneggiarti. {"\n"} Quando sono fuori
            equilibrio, trattengono il loro potere, e come diventano impulsivi e
            irregolari, si arrabbiano, il che può causare effetti sul loro cuore
            e sulla circolazione. {"\n"} Quando ciò accade, possono avere una
            varietà di malattie che aumentano ulteriormente le loro attitudini
            irregolari. Le persone di questa luna seguono cammini vari. {"\n"}{" "}
            Sono garzette che, letteralmente, vanno dove gli angeli temono di
            camminare. {"\n"} Se hai un compito difficile, un lavoro
            impossibile, una responsabilità che nessuno vuole assumersi, cerca
            dentro di te un storione. {"\n"} Sono coraggiosi e sempre disposti a
            dimostrare che hanno questa dote. {"\n"} Sono versatili e si
            adattano a qualsiasi tipo di lavoro, cultura o filosofia. {"\n"}{" "}
            Assicurati solo che credano in ciò che stanno facendo e puoi essere
            sicuro che sarà un lavoro ben fatto. Dal ferro, queste persone hanno
            la certezza e l'abilità di temperare le loro esperienze nella vita.{" "}
            {"\n"} La loro associazione con questo minerale accentua la loro
            connessione con il cuore e il sangue. {"\n"} Questo è anche il
            motivo delle radicali trasformazioni che queste persone possono
            portare ad altre persone o progetti a cui sono associate.{"\n"}{" "}
            {"\n"}La pianta delle persone nate in questo periodo è la lampone
            rosso, che è un frutto selvatico molto popolare. {"\n"} Nella loro
            pianta, gli storioni possono cercare la validazione del loro status,
            poiché entrambi fanno parte dell'élite e sono popolari nelle loro
            famiglie. {"\n"} Come la lampone, possono spesso trovarsi fuori dai
            divertimenti che stessi elaborano, ogni volta che non sono al primo
            posto. {"\n"}Il popolo dello storione, come la lampone, può spesso
            sembrare essere su un cammino, quando, in realtà, stanno pensando a
            qualcosa di diverso. {"\n"} Lavorano normalmente su uno dei due
            cammini. {"\n"} Alcuni storioni sembrano aggressivi quando li
            incontri per la prima volta. {"\n"}È un modo per proteggersi dalle
            imboscate. Altri sembrano amorevoli e affettuosi, ma dall'altro
            lato, puoi trovare alcuni pungiglioni. {"\n"} Questo paradosso è
            un'altra caratteristica del popolo di questo totem.{"\n"} Sebbene
            siano normalmente affettuosi, hanno la marcata tendenza di evitare
            di mostrare i loro sentimenti. {"\n"} Questo è il motivo per cui
            hanno pungiglioni in alcune situazioni. {"\n"} Questo è il loro modo
            di proteggersi da persone che vogliono svalutarli e toglierli dal
            cammino che veramente amano. {"\n"} Dietro le apparenze, il popolo
            dello storione è abbastanza sensibile. {"\n"} A causa della loro
            percezione, possono facilmente percepire cosa gli altri stanno
            provando, e questo li influenza. {"\n"} Si feriscono facilmente, ma
            non amano mostrarlo, perché interferisce con l'immagine di
            indipendenza e potere che proiettano. {"\n"} Possono nascondere la
            loro sofferenza o frustrazione sotto la loro gentilezza, ma non
            dimenticano mai la sofferenza che qualcuno ha causato loro, e, nei
            periodi di squilibrio, possono progettare vendette.{"\n"} Come la
            lampone, gli storioni hanno un effetto pulito e astringente su tutto
            intorno a loro. {"\n"} Dentro la loro gentilezza, spesso "deridono"
            le nozioni che le persone hanno di loro stesse e del mondo,
            promuovendo una pulizia emotiva. {"\n"} Aiutando le persone a
            liberarsi delle loro false nozioni, aiutano a guarire i problemi
            emotivi.{"\n"}È eccellente avere storioni intorno in situazioni di
            emergenza, siano esse fisiche o emotive, perché il loro coraggio è
            contagioso e aiutano a risolvere seri problemi. {"\n"} In questo,
            sono come la loro pianta, che può aiutare a fermare il
            "sanguinamento". {"\n"}Il clan dell'Uccello Tuono fornisce allo
            storione il calore e la stabilità che mostrano al mondo. {"\n"} I
            membri di questo clan dirigono la loro energia e abilità per, con
            successo, fare diverse cose contemporaneamente. {"\n"} Rafforza
            anche la necessità di questa gente di fare attenzione affinché la
            loro energia non deteriori.{"\n"} Sono persone che tendono ad avere
            problemi nervosi che possono trasformarsi in seri problemi per il
            corpo se non hanno il tempo per avere periodi di tranquillità,
            quando sono coinvolti in cose oltre le loro attività normali. {"\n"}{" "}
            Gli storioni devono avere del tempo tranquillo, seduti, meditando o
            leggendo, ogni giorno, per mantenere il loro corpo sano. {"\n"}{" "}
            Tuttavia, restare tranquilli non è naturale per loro, quindi devono
            imparare a coltivarlo.
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