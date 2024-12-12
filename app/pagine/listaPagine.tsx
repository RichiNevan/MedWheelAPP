import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import React, { useEffect } from "react";
import { useSettings } from "../SettingsContext";
import { useRouter, useNavigation } from "expo-router";



type CustomLinkProps = {
  prt: string;
  eng: string;
  ita: string;
  link: string;
};

type routingProps = {
  link: string
}

const ListaPagine = () => {
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



  const router = useRouter();

  const Routing = ({ link }: routingProps) => {
    router.push({ pathname: link as any });
  };

  
  function CustomLink({ prt, eng, ita, link }: CustomLinkProps) {
    return (
      <TouchableOpacity onPress={() => Routing({ link })}>
        {language === "prt" && <Text style={styles.link}>{prt}</Text>}
        {language === "eng" && <Text style={styles.link}>{eng}</Text>}
        {language === "ita" && <Text style={styles.link}>{ita}</Text>}
      </TouchableOpacity>
    );
  }


  return (
    <ImageBackground
      style={styles.background}
      source={require("@/assets/images/background.jpg")}
    >
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps='handled'>
        {language === "prt" && <Text style={styles.title}>LISTA PAGINAS</Text>}
        {language === "eng" && <Text style={styles.title}>PAGE LIST</Text>}
        {language === "ita" && <Text style={styles.title}>LISTA PAGINE</Text>}

        {language === "prt" && <Text style={styles.testo}>~ Estaçoes ~</Text>}
        {language === "eng" && <Text style={styles.testo}>~ Seasons ~</Text>}
        {language === "ita" && <Text style={styles.testo}>~ Stagioni ~</Text>}

        <CustomLink prt='Primavera' eng='Spring' ita='Primavera' link="../pagine/stagioni/primavera" />
        <CustomLink prt='Verao' eng='Summer' ita='Estate' link="../pagine/stagioni/verao" />
        <CustomLink prt='Outono' eng='Autumn' ita='Autunno' link="../pagine/stagioni/outono" />
        <CustomLink prt='Inverno' eng='Winter' ita='Inverno' link="../pagine/stagioni/inverno" />

        {language === "prt" && <Text style={styles.testo}>~ Direçoes ~</Text>}
        {language === "eng" && <Text style={styles.testo}>~ Directions ~</Text>}
        {language === "ita" && <Text style={styles.testo}>~ Direzioni ~</Text>}

        <CustomLink prt='Leste' eng='East' ita='Est' link="../pagine/direzioni/dir3Est" />
        <CustomLink prt='Sul-Leste' eng='South-East' ita='Sud-Est' link="../pagine/direzioni/dir4SudEst" />
        <CustomLink prt='Sul' eng='South' ita='Sud' link="../pagine/direzioni/dir5Sud"  />
        <CustomLink prt='Sul-Oeste' eng='South-West' ita='Sud-Ovest' link="../pagine/direzioni/dir6SudOvest"/>
        <CustomLink prt='Oeste' eng='West' ita='Ovest' link="../pagine/direzioni/dir7Ovest"  />
        <CustomLink prt='Norte-Oeste' eng='North-West' ita='Nord-Ovest' link="../pagine/direzioni/dir8NordOvest"  />
        <CustomLink prt='Norte' eng='North' ita='Nord' link="../pagine/direzioni/dir1Nord"  />
        <CustomLink prt='Norte-Leste' eng='North-East' ita='Nord-Est' link="../pagine/direzioni/dir2NordEst"  />

        {language === "prt" && <Text style={styles.testo}>~ Luas ~</Text>}
        {language === "eng" && <Text style={styles.testo}>~ Moons ~</Text>}
        {language === "ita" && <Text style={styles.testo}>~ Lune ~</Text>}

        <CustomLink prt='Lua da Renovaçao' eng='Moon of Renewal' ita='Luna del Rinnovamento' link="../pagine/lune/1renovacao" />
        <CustomLink prt='Lua da Limpeza' eng='Moon of Cleansing' ita='Luna della Pulizia' link="../pagine/lune/2limpeza" />
        <CustomLink prt='Lua dos Ventos Fortes' eng='Moon of Strong Winds' ita='Luna dei Venti Forti' link="../pagine/lune/3ventosfortes" />
        <CustomLink prt='Lua dos Novos Começos' eng='Moon of New Beginnings' ita='Luna dei Nuovi Inizi' link="../pagine/lune/4novoscomecos" />
        <CustomLink prt='Lua do Crescimento' eng='Moon of Growth' ita='Luna della Crescita' link="../pagine/lune/5crescimento" />
        <CustomLink prt='Lua da Floraçao' eng='Moon of Florishing' ita='Luna della Fioritura' link="../pagine/lune/6floracao" />
        <CustomLink prt='Lua dos Dias Longos' eng='Moon of Long Days' ita='Luna dei Giorni Lunghi' link="../pagine/lune/7diaslongos" />
        <CustomLink prt='Lua do Amadurecimento' eng='Moon of Ripening' ita='Luna della Maturazione' link="../pagine/lune/8amadurecimento" />
        <CustomLink prt='Lua da Abundancia' eng='Moon of Abundance' ita="Luna dell' Abbondanza" link="../pagine/lune/9abundancia" />
        <CustomLink prt='Lua do Cair das Folhas' eng='Moon of Falling Leaves' ita='Luna del Cadere delle Foglie' link="../pagine/lune/10cairdasfolhas" />
        <CustomLink prt='Lua da Decomposiçao' eng='Moon of Decomposition' ita='Luna della Decomposizione' link="../pagine/lune/11decomposicao" />
        <CustomLink prt='Lua das Noites Longas' eng='Moon of Long Nights' ita='Luna delle Lunghe Notti' link="../pagine/lune/12noiteslongas" />

        {language === "prt" && <Text style={styles.testo}>~ Totems das Luas: Animais ~</Text>}
        {language === "eng" && <Text style={styles.testo}>~ Moon Totems: Animals ~</Text>}
        {language === "ita" && <Text style={styles.testo}>~ Totem Lune - Animali ~</Text>}

        <CustomLink prt='Ganso das Neves' eng='Snow Goose' ita='Oca delle Nevi' link="../pagine/lune/totAnim/1ganso" />
        <CustomLink prt='Lontra' eng='Otter' ita='Lontra' link="../pagine/lune/totAnim/2lontra" />
        <CustomLink prt='Puma' eng='Puma' ita='Puma' link="../pagine/lune/totAnim/3puma" />
        <CustomLink prt='Falcao do Rabo Vermelho' eng='Red Falcon' ita='Falco Rosso' link="../pagine/lune/totAnim/4falcao" />
        <CustomLink prt='Castor' eng='Beaver' ita='Castoro' link="../pagine/lune/totAnim/5castor" />
        <CustomLink prt='Cervo' eng='Deer' ita='Cervo' link="../pagine/lune/totAnim/6cervo" />
        <CustomLink prt='Pica-Pau' eng='Woodpecker' ita='Picchio' link="../pagine/lune/totAnim/7picapau" />
        <CustomLink prt='Esturjao' eng='Sturgeon' ita='Storione' link="../pagine/lune/totAnim/8esturjao" />
        <CustomLink prt='Urso' eng='Bear' ita="Orso" link="../pagine/lune/totAnim/9urso" />
        <CustomLink prt='Corvo' eng='Raven' ita='Corvo' link="../pagine/lune/totAnim/10corvo" />
        <CustomLink prt='Cobra' eng='Snake' ita='Serpente' link="../pagine/lune/totAnim/11cobra" />
        <CustomLink prt='Alce' eng='Moose' ita='Alce' link="../pagine/lune/totAnim/12alce" />

        {language === "prt" && <Text style={styles.testo}>~ Totems das Luas: Plantas ~</Text>}
        {language === "eng" && <Text style={styles.testo}>~ Moon Totems: Plants ~</Text>}
        {language === "ita" && <Text style={styles.testo}>~ Totem Lune - Piante ~</Text>}

        <CustomLink prt='Betula' eng='Birch' ita='Betulla' link="../pagine/lune/totVeg/1betula" />
        <CustomLink prt='Alamo' eng='Poplar' ita='Alamo' link="../pagine/lune/totVeg/2alamo" />
        <CustomLink prt='Tanchagem' eng='Plantain' ita='Piantaggine' link="../pagine/lune/totVeg/3tanchagem" />
        <CustomLink prt='Dente de Leao' eng='Dandelion' ita='Tarassaco' link="../pagine/lune/totVeg/4dentedeleao" />
        <CustomLink prt='Açucena Azul' eng='Blue Azucena' ita='Azucena Azzurra' link="../pagine/lune/totVeg/5acucena" />
        <CustomLink prt='Milefolio' eng='Yarrow' ita='Achillea' link="../pagine/lune/totVeg/6milefolio" />
        <CustomLink prt='Rosa' eng='Rose' ita='Rosa' link="../pagine/lune/totVeg/7rosa" />
        <CustomLink prt='Framboesa' eng='Raspberry' ita='Lampone' link="../pagine/lune/totVeg/8framboesa" />
        <CustomLink prt='Violeta' eng='Violet' ita="Viola" link="../pagine/lune/totVeg/9violeta" />
        <CustomLink prt='Verbasco' eng='Mullein' ita='Verbasco' link="../pagine/lune/totVeg/10verbasco" />
        <CustomLink prt='Cardo' eng='Thistle' ita='Cardo' link="../pagine/lune/totVeg/11cardo" />
        <CustomLink prt='Abeto' eng='Fir' ita='Abete' link="../pagine/lune/totVeg/12abeto" />

        {language === "prt" && <Text style={styles.testo}>~ Totems das Luas: Minerais ~</Text>}
        {language === "eng" && <Text style={styles.testo}>~ Moon Totems: Minerals ~</Text>}
        {language === "ita" && <Text style={styles.testo}>~ Totem Lune - Minerali ~</Text>}

        <CustomLink prt='Quartzo' eng='Quartz' ita='Quarzo' link="../pagine/lune/totMin/1quartzo" />
        <CustomLink prt='Prata' eng='Silver' ita='Argento' link="../pagine/lune/totMin/2prata" />
        <CustomLink prt='Turquesa' eng='Turquoise' ita='Turchese' link="../pagine/lune/totMin/3turquesa" />
        <CustomLink prt='Opala de Fogo' eng='Fire Opal' ita='Opale di Fuoco' link="../pagine/lune/totMin/4opala" />
        <CustomLink prt='Crisocola' eng='Chrysocolla' ita='Crisocolla' link="../pagine/lune/totMin/5crisocola" />
        <CustomLink prt='Agata Musgosa' eng='Moss Agate' ita='Agata Muschiata' link="../pagine/lune/totMin/6agata" />
        <CustomLink prt='Agata Cornalina' eng='Cornalline Agate' ita='Corniola' link="../pagine/lune/totMin/7agatacornalina" />
        <CustomLink prt='Ferro' eng='Iron' ita='Ferro' link="../pagine/lune/totMin/8ferro" />
        <CustomLink prt='Ametista' eng='Amethyst' ita="Ametista" link="../pagine/lune/totMin/9ametista" />
        <CustomLink prt='Jaspe' eng='Jasper' ita='Diaspro' link="../pagine/lune/totMin/10jaspe" />
        <CustomLink prt='Malaquita' eng='Malaquite' ita='Malachite' link="../pagine/lune/totMin/11malaquita" />
        <CustomLink prt='Obsidiana' eng='Obsydian' ita='Ossidiana' link="../pagine/lune/totMin/12obsidiana" />

        {language === "prt" && <Text style={styles.testo}>~ Totems das Luas: Cores ~</Text>}
        {language === "eng" && <Text style={styles.testo}>~ Moon Totems: Colors ~</Text>}
        {language === "ita" && <Text style={styles.testo}>~ Totem Lune - Colori ~</Text>}

        <CustomLink prt='Branco' eng='White' ita='Bianco' link="../pagine/lune/totCol/1branco" />
        <CustomLink prt='Prata' eng='Silver' ita='Argento' link="../pagine/lune/totCol/2prata" />
        <CustomLink prt='Turquesa' eng='Turquoise' ita='Turchese' link="../pagine/lune/totCol/3turquesa" />
        <CustomLink prt='Amarelo' eng='Yellow' ita='Giallo' link="../pagine/lune/totCol/4amarelo" />
        <CustomLink prt='Azul' eng='Blue' ita='Blu' link="../pagine/lune/totCol/5azul" />
        <CustomLink prt='Branco Verde' eng='White Green' ita='Bianco Verde' link="../pagine/lune/totCol/6brancoverde" />
        <CustomLink prt='Rosa' eng='Pink' ita='Rosa' link="../pagine/lune/totCol/7rosa" />
        <CustomLink prt='Vermelho' eng='Red' ita='Rosso' link="../pagine/lune/totCol/8vermelho" />
        <CustomLink prt='Roxa' eng='Purple' ita="Viola" link="../pagine/lune/totCol/9roxa" />
        <CustomLink prt='Marrom' eng='Brown' ita='Marrone' link="../pagine/lune/totCol/10marrom" />
        <CustomLink prt='Laranja' eng='Orange' ita='Arancione' link="../pagine/lune/totCol/11laranja" />
        <CustomLink prt='Preta' eng='Black' ita='Nero' link="../pagine/lune/totCol/12preta" />
      </ScrollView>

    </ImageBackground>
  );
};

export default ListaPagine;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  testo: {
    margin: 15,
    textAlign: "center",
    fontSize: 20,
    lineHeight: 23,
    fontFamily: 'Cocchin'
  },
  scrollView: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 65,
    padding: 10
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Cocchin",
    color: "darkred",
  },
  link: {
    fontSize: 20,
    textDecorationLine: "underline",
    fontFamily: "cochin",
    color: "rgb(0, 110, 100)",
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
