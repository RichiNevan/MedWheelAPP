import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ImageBackground } from "react-native";
import TheWheelPRT from "@/components/TheWheelPRT";
import TheWheelENG from "@/components/TheWheelENG";
import TheWheelITA from "@/components/TheWheelITA";
import MenuButton from "@/components/MenuButton";
import { useState, useEffect, useCallback } from "react";
import WheelMenu from "@/components/WheelMenu";
import { useSettings } from "../SettingsContext";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // Keep native splash on until ready

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function Index() {
  const [appIsReady, setAppIsReady] = useState(true);
  //const [showAnimatedSplash, setShowAnimatedSplash] = useState(true);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const { language, bgDark, bgLight, theme } = useSettings();

  // useEffect(() => {
  //       setAppIsReady(true);
  // }, []);

  useEffect(() => {
    async function prepare() {
      // Do your loading stuff
      await SplashScreen.hideAsync(); // This is necessary
    }
    prepare();
  }, []);
  
  // useEffect(() => {
    //   const prepare = async () => {
      //     try {
        //       // Simulate loading (assets, auth, etc.)
        //       await new Promise((resolve) => setTimeout(resolve, 1500));
        //     } catch (err) {
          //       console.warn(err);
          //     } finally {
            //       setIsAppReady(true);
            //     }
            //   };
            //   prepare();
            // }, []);
            
            // const onLayoutRootView = useCallback(async () => {
              //   if (isAppReady) {
                //     await SplashScreen.hideAsync(); // Hide native splash
                //   }
                // }, [isAppReady]);
                
                function ToggleMenu() {
                  setMenuVisible(!menuVisible);
                }
                
                return (
                  <ImageBackground
                    source={theme === "dark" ? bgDark : bgLight}
                    style={styles.background}
                  >
                    <View style={styles.welcome}>
                      {language === "prt" && <TheWheelPRT />}
                      {language === "eng" && <TheWheelENG />}
                      {language === "ita" && <TheWheelITA />}

                      <View style={styles.bookIcon}>
                        <MenuButton onPress={ToggleMenu} />
                      </View>

                      {menuVisible && (
                        <WheelMenu
                          isVisible={menuVisible}
                          onClose={ToggleMenu}
                        />
                      )}
                    </View>
                  </ImageBackground>
                );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  bookIcon: {
    position: "absolute",
    bottom: 100,
    zIndex: 2,
    elevation: 2,
  },
});
