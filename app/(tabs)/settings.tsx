import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import DropDown from "@/components/DropDown";
import DropDownPicker from "react-native-dropdown-picker";
import { useSettings } from "../SettingsContext";
import { mobile, android, ios } from "../SettingsContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = () => {
  const { hemisphere, language, setHemisphere, setLanguage, theme, bgDark, bgLight } = useSettings();

  const [openEmi, setOpenEmi] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [valueEmi, setValueEmi] = useState(hemisphere);
  const [valueLang, setValueLang] = useState(language);

  const [lingua, setLingua] = useState([
    { label: "Portugues", value: "prt" },
    { label: "English", value: "eng" },
    { label: "Italiano", value: "ita" },
  ]);

  

  
  const handleChangeValueEMI = async (
    selectedValue: "north" | "south" | null
  ) => {
    //console.log("handleChangeValueEMI called with:", selectedValue);
    const valueToStore = selectedValue ?? "south";
    setHemisphere(valueToStore);
    await AsyncStorage.setItem("hemisphere", valueToStore);
  };

  const handleChangeValueLANG = async (
    selectedValueLANG: "prt" | "eng" | "ita" | null
  ) => {
    if (selectedValueLANG !== null) {
      setLanguage(selectedValueLANG);
      await AsyncStorage.setItem("language", selectedValueLANG);
    } else {
      setLanguage("prt");
    }
  };

  return (
    <ImageBackground
      source={theme === "dark" ? bgDark : bgLight}
      style={styles.background}
    >
      <View style={styles.container}>
        {language === "prt" && <Text style={styles.title}>Impostaçoes</Text>}
        {language === "eng" && <Text style={styles.title}>Settings</Text>}
        {language === "ita" && <Text style={styles.title}>Impostazioni</Text>}

        <View style={styles.language}>
          {language === "prt" && <Text style={styles.setting}>Idioma</Text>}
          {language === "eng" && <Text style={styles.setting}>Language</Text>}
          {language === "ita" && <Text style={styles.setting}>Lingua</Text>}
          <DropDownPicker
            open={openLang}
            value={valueLang}
            items={[
              { label: "Portugues", value: "prt" },
              { label: "English", value: "eng" },
              { label: "Italiano", value: "ita" },
            ]}
            setOpen={setOpenLang}
            setValue={setValueLang}
            onChangeValue={handleChangeValueLANG}
            placeholder="Portugues"
            style={{ borderColor: "white", borderBlockEndColor: "white" }}
            textStyle={{ fontFamily: "Cocchin", fontSize: 16 }}
            dropDownContainerStyle={{ borderColor: "white" }}
          />
        </View>

        <View style={styles.hemisphere}>
          {language === "prt" && <Text style={styles.setting}>Emisferio</Text>}
          {language === "eng" && <Text style={styles.setting}>Hemisphere</Text>}
          {language === "ita" && <Text style={styles.setting}>Emisfero</Text>}
          <DropDownPicker
            open={openEmi}
            value={valueEmi}
            items={
              language === "prt"
                ? [
                    { label: "Emisferio Norte", value: "north" },
                    { label: "Emisferio Sul", value: "south" },
                  ]
                : language === "eng"
                ? [
                    { label: "Northern Hemisphere", value: "north" },
                    { label: "Southern Hemisphere", value: "south" },
                  ]
                : [
                    { label: "Emisfero Boreale", value: "north" },
                    { label: "Emisfero Australe", value: "south" },
                  ]
            }
            setOpen={setOpenEmi}
            setValue={setValueEmi}
            onChangeValue={handleChangeValueEMI}
            placeholder="Emisferio"
            containerStyle={{ borderColor: "white" }}
            textStyle={{ fontFamily: "Cocchin", fontSize: 16 }}
            style={{ borderColor: "white" }}
            dropDownContainerStyle={{ borderColor: "white" }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  hemisphere: {
    alignItems: "center",
    bottom: "10%",
  },

  language: {
    alignItems: "center",
    bottom: "15%",
  },

  title: {
    fontSize: android ? 35 : 40,
    bottom: "10%",
    color: "rgb(30, 80, 130)",
    fontFamily: "CocchinBold",
  },
  setting: {
    fontSize: android ? 17 : 20,
    color: "rgb(30, 80, 130)",
    margin: 20,
    fontFamily: "CocchinBold",
    top: 15,
  },
  container: {
    display: "flex",
    height: "70%",
    borderRadius: 30,
    width: "90%",
    marginTop: mobile ? "20%" : "5%",
    margin: "auto",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    gap: 10,
  },
});
