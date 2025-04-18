import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useSettings } from "../SettingsContext";
import { useNavigation } from "expo-router";
import WebView from "react-native-webview";
import { android } from "../SettingsContext";


const Support = () => {
  const { language } = useSettings();
  const navigation = useNavigation();
  const [webviewVisible, setWebviewVisible] = useState(false);

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
        {language === "prt" && <Text style={styles.title}>SUPORTE-NOS!</Text>}
        {language === "eng" && <Text style={styles.title}>SUPPORT US!</Text>}
        {language === "ita" && <Text style={styles.title}>SUPPORTACI!</Text>}

        {language === "prt" && (
          <Text style={styles.testo}>
            Ainda há muito material que poderia ser adicionado à Roda, e as
            traduções poderiam ser melhoradas. Com o seu apoio, mais tempo e
            esforço serão dedicados a este projeto!
          </Text>
        )}
        {language === "eng" && (
          <Text style={styles.testo}>
            There is still a lot of material that could be added to The Wheel,
            and the translations could use some improvement. With your support,
            more time and effort will be dedicated to this project!
          </Text>
        )}
        {language === "ita" && (
          <Text style={styles.testo}>
            C'è ancora molto materiale che potrebbe essere aggiunto alla Ruota,
            e le traduzioni potrebbero essere migliorate. Con il tuo supporto,
            più tempo ed energie saranno dedicati a questo progetto!
          </Text>
        )}
        <TouchableOpacity
          style={styles.donateBut}
          onPress={() => setWebviewVisible(true)}
        >
          <Image
            source={require("@/assets/images/paypalGold.png")}
            style={{ width: 170, height: 55, borderRadius: 5 }}
          />
          {/* <Ionicons name="logo-paypal" size={24} color="black" />
          <Text>Donate with PayPal</Text> */}
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={webviewVisible}
          onRequestClose={() => {
            setWebviewVisible(!webviewVisible);
          }}
        >
          <View style={styles.modalBg} />
          <View style={styles.container}>
            <Pressable
              style={styles.closeBut}
              onPress={() => setWebviewVisible(false)}
            >
              <Ionicons name="close" color={"darkred"} size={30} />
            </Pressable>
            <WebView
              source={{
                uri: "https://www.paypal.com/donate/?hosted_button_id=GDFA8778TZHUS",
              }}
              style={{ flex: 1, backgroundColor: "white", height: 400, width: 350 }}
              onLoadStart={() => console.log("WebView loading...")}
              onLoadEnd={() => console.log("WebView loaded.")}
              onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.warn("WebView error: ", nativeEvent);
              }}
            />
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

export default Support;

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
    fontFamily: "Cocchin",
  },
  scrollView: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  title: {
    textAlign: "center",
    fontSize: android ? 30 : 40,
    fontFamily: "Cocchin",
    color: "darkred",
    margin: 20
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
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: '90%',
    position: "absolute",
    top: 30,
    width: "95%",
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "darkred",
    alignSelf: "center",
    marginBottom: 20,
    zIndex: 6,
  },
  donateBut: {
    borderRadius: 5,
    margin: 20,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    alignSelf: "center",
  },
  closeBut: {
    position: "absolute",
    right: 5,
    top: 5,
    width: 30,
    height: 30,
    zIndex: 6,
  },
  modalBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 5,
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  }
});
