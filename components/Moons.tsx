import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSettings } from "@/app/SettingsContext";
import { Link, useRouter } from "expo-router";

interface MoonProps {
  onSelect: () => void;
}

type CustomLinkProps = {
  prt: string;
  eng: string;
  ita: string;
  link: string;
};

type closeModalProps = {
  link: string;
};

const Moons: React.FC<MoonProps> = ({ onSelect }) => {
  const { language } = useSettings();
  const { hemisphere } = useSettings();
  const today = new Date();

  const router = useRouter();
  const closeModal = ({ link }: closeModalProps) => {
    router.push({ pathname: link as any });
    onSelect();
  };

  
  function CustomLink({ prt, eng, ita, link }: CustomLinkProps) {
    return (
      <TouchableOpacity onPress={() => closeModal({ link })}>
        {language === "prt" && <Text style={styles.link}>{prt}</Text>}
        {language === "eng" && <Text style={styles.link}>{eng}</Text>}
        {language === "ita" && <Text style={styles.link}>{ita}</Text>}
      </TouchableOpacity>
    );
  }

  function animalHeading() {
    return (
      <>
      {language === "prt" && (
        <Text style={styles.totemTitle}>Totem Animal:</Text>
      )}
      {language === "eng" && (
        <Text style={styles.totemTitle}>Animal Totem:</Text>
      )}
      {language === "ita" && (
        <Text style={styles.totemTitle}>Totem Animale:</Text>
      )}
      </>
    )
  }
  
  function vegHeading() {
    return (
      <>
      {language === "prt" && (
        <Text style={styles.totemTitle}>Totem Vegetal:</Text>
      )}
      {language === "eng" && (
        <Text style={styles.totemTitle}>Plant Totem:</Text>
      )}
      {language === "ita" && (
        <Text style={styles.totemTitle}>Totem Vegetale:</Text>
      )}
      </>
    )
  }
  function mineralHeading() {
    return (
      <>
      {language === "prt" && (
        <Text style={styles.totemTitle}>Totem Mineral:</Text>
      )}
      {language === "eng" && (
        <Text style={styles.totemTitle}>Mineral Totem:</Text>
      )}
      {language === "ita" && (
        <Text style={styles.totemTitle}>Totem Minerale:</Text>
      )}
      </>
    )
  }
  function colore() {
    return (
      <>
      {language === "prt" && (
        <Text style={styles.totemTitle}>Cor:</Text>
      )}
      {language === "eng" && (
        <Text style={styles.totemTitle}>Color:</Text>
      )}
      {language === "ita" && (
        <Text style={styles.totemTitle}>Colore:</Text>
      )}
      </>
    )
  }

  function renovacao1() {
    return (
      <>
        <CustomLink
          prt="Lua da Renovaçao"
          eng="Moon of Renewal"
          ita="Luna del Rinnovo"
          link="../pagine/lune/1renovacao"
        />
        {animalHeading()}
          <CustomLink
            prt="Ganso das Neves"
            eng="Snow Goose"
            ita="Oca delle Nevi"
            link="../pagine/lune/totAnim/1ganso"
          />
          {vegHeading()}
          <CustomLink
            prt="Betula"
            eng="Birch"
            ita="Betulla"
            link="../pagine/lune/totVeg/1betula"
          />
          {mineralHeading()}
          <CustomLink
            prt="Quartzo"
            eng="Quartz"
            ita="Quarzo"
            link="../pagine/lune/totMin/1quartzo"
          />
          {colore()}
          <CustomLink
            prt="Branco"
            eng="White"
            ita="Bianco"
            link="../pagine/lune/totCol/1branco"
          />
        </>
    )
  }

  function limpeza2() {
    return (
      <>
        <CustomLink
          prt="Lua da Limpeza"
          eng="Moon of Cleansing"
          ita="Luna della Pulizia"
          link="../pagine/lune/2limpeza"
        />
        {animalHeading()}
          <CustomLink
            prt="Lontra"
            eng="Otter"
            ita="Lontra"
            link="../pagine/lune/totAnim/2lontra"
          />
          {vegHeading()}
          <CustomLink
            prt="Alamo"
            eng="Poplar"
            ita="Alamo"
            link="../pagine/lune/totVeg/2alamo"
          />
          {mineralHeading()}
          <CustomLink
            prt="Prata"
            eng="Silver"
            ita="Argento"
            link="../pagine/lune/totMin/2prata"
          />
          {colore()}
          <CustomLink
            prt="Prata"
            eng="Silver"
            ita="Argento"
            link="../pagine/lune/totCol/2prata"
          />
        </>
    )
  }

function ventosfortes3 () {
  return (
    <>
        <CustomLink
          prt="Lua dos Ventos Fortes"
          eng="Moon of Strong Winds"
          ita="Luna dei Venti Forti"
          link="../pagine/lune/3ventosfortes"
        />
        {animalHeading()}
          <CustomLink
            prt="Puma"
            eng="Puma"
            ita="Puma"
            link="../pagine/lune/totAnim/3puma"
          />
          {vegHeading()}
          <CustomLink
            prt="Tanchagem"
            eng="Plantain"
            ita="Piantaggine"
            link="../pagine/lune/totVeg/3tanchagem"
          />
          {mineralHeading()}
          <CustomLink
            prt="Turquesa"
            eng="Turquoise"
            ita="Turchese"
            link="../pagine/lune/totMin/3turquesa"
          />
          {colore()}
          <CustomLink
            prt="Turquesa"
            eng="Turquoise"
            ita="Turchese"
            link="../pagine/lune/totCol/3turquesa"
          />
        </>
  )
}

function novosComecos4 () {
  return (
    <>
        <CustomLink
          prt="Lua dos Novos Começos"
          eng="Moon of New Beginnings"
          ita="Luna dei Nuovi Inizi"
          link="../pagine/lune/4novoscomecos"
        />
        {animalHeading()}
          <CustomLink
            prt="Falcao Vermelho"
            eng="Red Falcon"
            ita="Falco Rosso"
            link="../pagine/lune/totAnim/4falcao"
          />
          {vegHeading()}
          <CustomLink
            prt="Dente de Leao"
            eng="Dandelion"
            ita="Tarassaco"
            link="../pagine/lune/totVeg/4dentedeleao"
          />
          {mineralHeading()}
          <CustomLink
            prt="Opala de Fogo"
            eng="Fire Opal"
            ita="Opale di Fuoco"
            link="../pagine/lune/totMin/4opala"
          />
          {colore()}
          <CustomLink
            prt="Amarelo"
            eng="Yellow"
            ita="Giallo"
            link="../pagine/lune/totCol/4amarelo"
          />
        </>
  )
}

function crescimento5 () {
  return (
    <>
        <CustomLink
          prt="Lua do Crescimento"
          eng="Moon of Growth"
          ita="Luna della Crescita"
          link="../pagine/lune/5crescimento"
        />
        {animalHeading()}
          <CustomLink
            prt="Castor"
            eng="Beaver"
            ita="Castoro"
            link="../pagine/lune/totAnim/5castor"
          />
          {vegHeading()}
          <CustomLink
            prt="Açucena Azul"
            eng="Blue Azucena"
            ita="Azucena Azzurra"
            link="../pagine/lune/totVeg/5acucena"
          />
          {mineralHeading()}
          <CustomLink
            prt="Crisocola"
            eng="Chrysocolla"
            ita="Crisocolla"
            link="../pagine/lune/totMin/5crisocola"
          />
          {colore()}
          <CustomLink
            prt="Laranja"
            eng="Orange"
            ita="Arancione"
            link="../pagine/lune/totCol/5azul"
          />
        </>
  )
}

function floracao6 () {
  return (
  <>
        <CustomLink
          prt="Lua da Floraçao"
          eng="Moon of Florishing"
          ita="Luna della Fioritura"
          link="../pagine/lune/6floracao"
        />
        {animalHeading()}
          <CustomLink
            prt="Cervo"
            eng="Deer"
            ita="Cervo"
            link="../pagine/lune/totAnim/6cervo"
          />
          {vegHeading()}
          <CustomLink
            prt="Milefolio"
            eng="Yarrow"
            ita="Achillea"
            link="../pagine/lune/totVeg/6milefolio"
          />
          {mineralHeading()}
          <CustomLink
            prt="Agata Musgosa"
            eng="Moss Agate"
            ita="Agata Muschiata"
            link="../pagine/lune/totMin/6agata"
          />
          {colore()}
          <CustomLink
            prt="Branco Verde"
            eng="White Green"
            ita="Bianco Verde"
            link="../pagine/lune/totCol/6brancoverde"
          />
        </>
)}

function diasLongos7 () {
  return (
    <>
        <CustomLink
          prt="Lua dos Dias Longos"
          eng="Moon of Long Days"
          ita="Luna dei Giorni Lunghi"
          link="../pagine/lune/7diaslongos"
        />
        {animalHeading()}
          <CustomLink
            prt="Pica-Pau"
            eng="Woodpecker"
            ita="Picchio"
            link="../pagine/lune/totAnim/7picapau"
          />
          {vegHeading()}
          <CustomLink
            prt="Rosa"
            eng="Rose"
            ita="Rosa"
            link="../pagine/lune/totVeg/7rosa"
          />
          {mineralHeading()}
          <CustomLink
            prt="Agata Cornalina"
            eng="Cornalline Agate"
            ita="Corniola"
            link="../pagine/lune/totMin/7agatacornalina"
          />
          {colore()}
          <CustomLink
            prt="Rosa"
            eng="Pink"
            ita="Rosa"
            link="../pagine/lune/totCol/7rosa"
          />
        </>
  )
}

function amadurecimento8 () {
  return (
  <>
        <CustomLink
          prt="Lua do Amadurecimento"
          eng="Moon of Ripening"
          ita="Luna della Maturazione"
          link="../pagine/lune/8amadurecimento"
        />
        {animalHeading()}
          <CustomLink
            prt="Esturjao"
            eng="Sturgeon"
            ita="Storione"
            link="../pagine/lune/totAnim/8esturjao"
          />
          {vegHeading()}
          <CustomLink
            prt="Framboesa"
            eng="Raspberry"
            ita="Lampone"
            link="../pagine/lune/totVeg/8framboesa"
          />
          {mineralHeading()}
          <CustomLink
            prt="Ferro"
            eng="Iron"
            ita="Ferro"
            link="../pagine/lune/totMin/8ferro"
          />
          {colore()}
          <CustomLink
            prt="Vermelho"
            eng="Red"
            ita="Rosso"
            link="../pagine/lune/totCol/8vermelho"
          />
        </>
)}

function abundancia9 () {
  return(
    <>
        <CustomLink
          prt="Lua da Abundancia"
          eng="Moon of Abundance"
          ita="Luna dell'Abbondanza"
          link="../pagine/lune/9abundancia"
        />
        {animalHeading()}
          <CustomLink
            prt="Urso"
            eng="Bear"
            ita="Orso"
            link="../pagine/lune/totAnim/9urso"
          />
          {vegHeading()}
          <CustomLink
            prt="Violeta"
            eng="Violet"
            ita="Viola"
            link="../pagine/lune/totVeg/11cardo"
          />
          {mineralHeading()}
          <CustomLink
            prt="Ametista"
            eng="Amethyst"
            ita="Ametista"
            link="../pagine/lune/totMin/11malaquita"
          />
          {colore()}
          <CustomLink
            prt="Roxa"
            eng="Purple"
            ita="Viola"
            link="../pagine/lune/totCol/11laranja"
          />
        </>
  )
}

function cairDasFolhas10 () {
  return(
  <>
  <CustomLink
    prt="Lua do Cair das Folhas"
    eng="Moon of the Falling Leaves"
    ita="Luna del Cadere delle Foglie"
    link="../pagine/lune/10cairdasfolhas"
  />
  
  {animalHeading()}
  <CustomLink
    prt="Corvo"
    eng="Raven"
    ita="Corvo"
    link="../pagine/lune/totAnim/10corvo"
  />
  {vegHeading()}
  <CustomLink
    prt="Verbasco"
    eng="Mullein"
    ita="Verbasco"
    link="../pagine/lune/totVeg/10verbasco"
  />
  {mineralHeading()}
  <CustomLink
    prt="Jaspe"
    eng="Jasper"
    ita="Diaspro"
    link="../pagine/lune/totMin/10jaspe"
  />
  {colore()}
  <CustomLink
    prt="Marrom"
    eng="Brown"
    ita="Marrone"
    link="../pagine/lune/totCol/10marrom"
  />
</>
)}

function decomposicao11 () {
  return (
    <>
          <CustomLink
            prt="Lua da Decomposiçao"
            eng="Moon of Decomposition"
            ita="Luna della Decomposizione"
            link="../pagine/lune/11decomposicao"
          />
          {animalHeading()}
          <CustomLink
            prt="Cobra"
            eng="Snake"
            ita="Serpente"
            link="../pagine/lune/totAnim/11cobra"
          />
          {vegHeading()}
          <CustomLink
            prt="Cardo"
            eng="Thistle"
            ita="Cardo"
            link="../pagine/lune/totVeg/11cardo"
          />
          {mineralHeading()}
          <CustomLink
            prt="Malaquita"
            eng="Malaquite"
            ita="Malachite"
            link="../pagine/lune/totMin/11malaquita"
          />
          {colore()}
          <CustomLink
            prt="Laranja"
            eng="Orange"
            ita="Arancione"
            link="../pagine/lune/totCol/11laranja"
          />
        </>
  )
}

function noitesLongas12 () {
  return (
    <>
    <CustomLink
      prt="Lua das Noites Longas"
      eng="Moon of the Long Nights"
      ita="Luna delle Notti Lunghe"
      link="../pagine/lune/12noiteslongas"
    />
    {animalHeading()}
      <CustomLink
        prt="Alce"
        eng="Moose"
        ita="Alce"
        link="../pagine/lune/totAnim/12alce"
      />
      {vegHeading()}
      <CustomLink
        prt="Abeto"
        eng="Fir"
        ita="Abete"
        link="../pagine/lune/totVeg/12abeto"
      />
      {mineralHeading()}
      <CustomLink
        prt="Obsidiana"
        eng="Obsydian"
        ita="Ossidiana"
        link="../pagine/lune/totMin/12obsidiana"
      />
      {colore()}
      <CustomLink
        prt="Preta"
        eng="Black"
        ita="Nero"
        link="../pagine/lune/totCol/12preta"
      />
    </>
  )
}

  function Chooser() {
    if (
      today >= new Date(today.getFullYear(), 0, 1) &&
      today < new Date(today.getFullYear(), 0, 29)
    ) {
      return (
        <>
        {hemisphere === 'north' && renovacao1()}
        {hemisphere === 'south' && diasLongos7()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 0, 29) &&
      today < new Date(today.getFullYear(), 1, 28)
    ) {
      return (
        <>
        {hemisphere === 'north' && limpeza2()}
        {hemisphere === 'south' && amadurecimento8()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 1, 28) &&
      today < new Date(today.getFullYear(), 2, 29)
    ) {
      return (
        <>
        {hemisphere === 'north' && ventosfortes3()}
        {hemisphere === 'south' && abundancia9()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 2, 29) &&
      today < new Date(today.getFullYear(), 3, 27)
    ) {
      return (
        <>
        {hemisphere === 'north' && novosComecos4()}
        {hemisphere === 'south' && cairDasFolhas10()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 3, 27) &&
      today < new Date(today.getFullYear(), 4, 27)
    ) {
      return (
        <>
        {hemisphere === 'north' && crescimento5()}
        {hemisphere === 'south' && decomposicao11()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 4, 27) &&
      today < new Date(today.getFullYear(), 5, 25)
    ) {
      return (
        <>
        {hemisphere === 'north' && floracao6()}
        {hemisphere === 'south' && noitesLongas12()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 5, 25) &&
      today < new Date(today.getFullYear(), 6, 24)
    ) {
      return (
        <>
        {hemisphere === 'north' && diasLongos7()}
        {hemisphere === 'south' && renovacao1()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 6, 24) &&
      today < new Date(today.getFullYear(), 7, 25)
    ) {
      return (
        <>
        {hemisphere === 'north' && amadurecimento8()}
        {hemisphere === 'south' && limpeza2()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 7, 25) &&
      today < new Date(today.getFullYear(), 9, 2)
    ) {
      return (
        <>
        {hemisphere === 'north' && abundancia9()}
        {hemisphere === 'south' && ventosfortes3()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 9, 2) &&
      today < new Date(today.getFullYear(), 10, 1)
    ) {
      return (
        <>
        {hemisphere === 'north' && cairDasFolhas10()}
        {hemisphere === 'south' && novosComecos4()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 10, 1) &&
      today < new Date(today.getFullYear(), 11, 1)
    ) {
      return (
        <>
        {hemisphere === 'north' && decomposicao11()}
        {hemisphere === 'south' && crescimento5()}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 11, 1) &&
      today <= new Date(today.getFullYear(), 11, 31)
    ) {
      return (
        <>
        {hemisphere === 'north' && noitesLongas12()}
        {hemisphere === 'south' && floracao6()}
        </>
      );
    }
  }

  return (
    <View style={styles.container}>
      {language === "prt" && <Text style={styles.title}>Lua</Text>}
      {language === "eng" && <Text style={styles.title}>Moon</Text>}
      {language === "ita" && <Text style={styles.title}>Luna</Text>}
      {Chooser()}
    </View>
  );
};

export default Moons;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    fontFamily: "Cocchin",
  },

  link: {
    fontSize: 20,
    textDecorationLine: "underline",
    fontFamily: "Cocchin",
    color: "rgb(0, 110, 100)",
  },
  totemTitle: {
    fontFamily: "Cocchin",
    fontSize: 17,
  },
});
