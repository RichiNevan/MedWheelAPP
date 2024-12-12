import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSettings } from "@/app/SettingsContext";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

interface SeasonProps {
  onSelect: () => void;
}

type CustomLinkProps = {
  prt: string;
  eng: string;
  ita: string;
  link: string;
};

type closeModalProps = {
  link: string
}



export const Seasons: React.FC<SeasonProps> = ({ onSelect }) => {
  const { language } = useSettings();
  const { hemisphere } = useSettings();
  const today = new Date();

  const router = useRouter();

  const closeModal = ({link}: closeModalProps) => {
    router.push({pathname: link as any});
    onSelect();
  };


  function CustomLink({prt, eng, ita, link}: CustomLinkProps) {
    return (
    <TouchableOpacity onPress={() => closeModal({link})}>
      {language === "prt" && <Text style={styles.link}>{prt}</Text>}
      {language === "eng" && <Text style={styles.link}>{eng}</Text>}
      {language === "ita" && <Text style={styles.link}>{ita}</Text>}
    </TouchableOpacity>
  );}


  function Chooser() {
    if (today >= new Date(today.getFullYear(), 9, 22) && today < new Date(today.getFullYear(), 11, 21) ) {
      return (
        <>
        {hemisphere === 'north' && <CustomLink prt="Outono" eng="Autumn" ita="Autunno" link="../pagine/stagioni/outono" />}
        {hemisphere === 'south' && <CustomLink prt="Primavera" eng="Spring" ita="Primavera" link="../pagine/stagioni/primavera" />}
        </>
      );
    }
    if (today >= new Date(today.getFullYear(), 11, 21) || today < new Date(today.getFullYear(), 2, 20) ) {
      return (
        <>
        {hemisphere === 'north' && <CustomLink prt="Inverno" eng="Winter" ita="Inverno" link="../pagine/stagioni/inverno" />}
        {hemisphere === 'south' && <CustomLink prt="Verao" eng="Summera" ita="Estete" link="../pagine/stagioni/estate" />}
        </>
      );
    }
    if (today >= new Date(today.getFullYear(), 2, 20) && today < new Date(today.getFullYear(), 5, 21) ) {
      return (
        <>
        {hemisphere === 'north' && <CustomLink prt="Primavera" eng="Spring" ita="Primavera" link="../pagine/stagioni/primavera" />}
        {hemisphere === 'south' && <CustomLink prt="Outono" eng="Autumn" ita="Autunno" link="../pagine/stagioni/Autunno" />}
        </>
      );
    }
    if (today >= new Date(today.getFullYear(), 5, 21) && today < new Date(today.getFullYear(), 9, 22) ) {
      return (
        <>
        {hemisphere === 'north' && <CustomLink prt="Verao" eng="Summer" ita="Estate" link="../pagine/stagioni/estate" />}
        {hemisphere === 'south' && <CustomLink prt="Inverno" eng="Winter" ita="Inverno" link="../pagine/stagioni/inverno" />}
        </>
      );
    }
  }

  return (
    <View style={styles.container}>
      {language === "prt" && <Text style={styles.title}>Estaçao</Text>}
      {language === "eng" && <Text style={styles.title}>Season</Text>}
      {language === "ita" && <Text style={styles.title}>Stagione</Text>}
      {Chooser()}
      
    </View>
  );
};

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
});
