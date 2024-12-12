import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSettings } from "@/app/SettingsContext";
import { useRouter } from "expo-router";

interface DirProps {
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

const Directions: React.FC<DirProps> = ({ onSelect }) => {
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

  function Chooser() {
    if (
      today >= new Date(today.getFullYear(), 11, 21) ||
      today < new Date(today.getFullYear(), 0, 31)
    ) {
      return (
        <>
          {hemisphere === "north" && (
            <CustomLink
              prt="Norte"
              eng="North"
              ita="Nord"
              link="../pagine/direzioni/dir1Nord"
            />
          )}
          {hemisphere === "south" && (
            <CustomLink
              prt="Sul"
              eng="South"
              ita="Sud"
              link="../pagine/direzioni/dir5Sud"
            />
          )}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 1, 1) &&
      today < new Date(today.getFullYear(), 2, 20)
    ) {
      return (
        <>
          {hemisphere === "north" && (
            <CustomLink
              prt="Nord-Este"
              eng="North-East"
              ita="Nord-Est"
              link="../pagine/direzioni/dir2NordEst"
            />
          )}
          {hemisphere === "south" && (
            <CustomLink
              prt="Sul-Oeste"
              eng="South-West"
              ita="Sud-Ovest"
              link="../pagine/direzioni/dir6SudOvest"
            />
          )}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 2, 21) &&
      today < new Date(today.getFullYear(), 3, 30)
    ) {
      return (
        <>
        {hemisphere === "north" && (
          <CustomLink
            prt="Leste"
            eng="East"
            ita="Est"
            link="../pagine/direzioni/dir3Est"
          />
        )}
        {hemisphere === "south" && (
          <CustomLink
            prt="Oeste"
            eng="West"
            ita="Ovest"
            link="../pagine/direzioni/dir7Ovest"
          />
        )}
      </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 4, 1) &&
      today < new Date(today.getFullYear(), 5, 20)
    ) {
      return (
        <>
          {hemisphere === "north" && (
            <CustomLink
              prt="Sul-Este"
              eng="South-East"
              ita="Sud-Est"
              link="../pagine/direzioni/dir4SudEst"
            />
          )}
          {hemisphere === "south" && (
            <CustomLink
              prt="Nord-Oeste"
              eng="North-West"
              ita="Nord-Ovest"
              link="../pagine/direzioni/dir8NordOvest"
            />
          )}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 5, 21) &&
      today < new Date(today.getFullYear(), 6, 31)
    ) {
      return (
        <>
          {hemisphere === "north" && (
            <CustomLink
              prt="Sul"
              eng="South"
              ita="Sud"
              link="../pagine/direzioni/dir5Sud"
            />
          )}
          {hemisphere === "south" && (
            <CustomLink
              prt="Norte"
              eng="North"
              ita="Nord"
              link="../pagine/direzioni/dir1Nord"
            />
          )}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 7, 1) &&
      today < new Date(today.getFullYear(), 8, 20)
    ) {
      return (
        <>
        {hemisphere === "north" && (
          <CustomLink
            prt="Sul-Oeste"
            eng="South-West"
            ita="Sud-Ovest"
            link="../pagine/direzioni/dir6SudOvest"
          />
        )}
        {hemisphere === "south" && (
          <CustomLink
            prt="Nord-Este"
            eng="North-East"
            ita="Nord-Est"
            link="../pagine/direzioni/dir2NordEst"
          />
        )}
      </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 8, 21) &&
      today < new Date(today.getFullYear(), 9, 30)
    ) {
      return (
        <>
          {hemisphere === "north" && (
            <CustomLink
              prt="Oeste"
              eng="West"
              ita="Ovest"
              link="../pagine/direzioni/dir7Ovest"
            />
          )}
          {hemisphere === "south" && (
            <CustomLink
              prt="Leste"
              eng="East"
              ita="Est"
              link="../pagine/direzioni/dir3Est"
            />
          )}
        </>
      );
    }
    if (
      today >= new Date(today.getFullYear(), 9, 31) &&
      today < new Date(today.getFullYear(), 11, 20)
    ) {
      return (
        <>
          {hemisphere === "north" && (
            <CustomLink
              prt="Norte-Oeste"
              eng="North-West"
              ita="Nord-Ovest"
              link="../pagine/direzioni/dir8NordOvest"
            />
          )}
          {hemisphere === "south" && (
            <CustomLink
              prt="Sul-Este"
              eng="South-East"
              ita="Sud-Est"
              link="../pagine/direzioni/dir4SudEst"
            />
          )}
        </>
      );
    }
  }

  return (
    <View style={styles.container}>
      {language === "prt" && <Text style={styles.title}>Direçao</Text>}
      {language === "eng" && <Text style={styles.title}>Direction</Text>}
      {language === "ita" && <Text style={styles.title}>Direzione</Text>}
      {Chooser()}
    </View>
  );
};

export default Directions;

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
