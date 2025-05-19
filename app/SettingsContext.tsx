import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { View, Platform } from "react-native";
import * as Font from 'expo-font'
import { ActivityIndicator } from "react-native";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const mobile = ["ios", "android"].includes(Platform.OS);
export const android = Platform.OS === "android";
export const ios = Platform.OS === "ios";


interface SettingsContextType {
    hemisphere: 'north' | 'south';
    language: 'prt' | 'eng' | 'ita';
    setHemisphere: (hemisphere: 'north' | 'south') => void;
    setLanguage: (language: 'prt' | 'eng' | 'ita') => void;
    fontsLoaded: boolean
    theme: 'dark' | 'light';
    bgDark: any;
    bgLight: any;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({children}: {children: ReactNode}) => {
    const [hemisphere, setHemisphere] = useState<'north' | 'south'>('north');
    const [language, setLanguage] = useState<'prt' | 'eng' | 'ita'>('prt');
    const [fontsLoaded, setFontsLoaded] = useState(false)
    const theme = useColorScheme();
    const bgDark = require("@/assets/images/background-dark.jpg");
    const bgLight = require("@/assets/images/background.jpg");
    
    useEffect(() => {
      console.log("SettingsScreen mounted");
      const fetchSavedChoice = async () => {
        console.log("fetchSavedChoice called");
        const hemisphereSaved = await AsyncStorage.getItem("hemisphere");
        console.log("hemisphereSaved", hemisphereSaved);
        if (hemisphereSaved) setHemisphere(hemisphereSaved);
        console.log("languageSaved", languageSaved);
        const languageSaved = await AsyncStorage.getItem("language");
        if (languageSaved) setLanguage(languageSaved);
      };
      fetchSavedChoice();
    }, []);

   // console.log('theme', theme)

useEffect(() => {
    (async () => {
        await Font.loadAsync({
            Cocchin: require('../assets/fonts/CochinRegular.otf'),
            CocchinBold: require('../assets/fonts/CochinBold.otf')

        })
        setFontsLoaded(true)
    })()
}, [])

if (!fontsLoaded) {
    return (
        <View style={{  flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' />
        </View>
    )
}

    return(
        <SettingsContext.Provider value={{fontsLoaded, hemisphere, language, setHemisphere, setLanguage, bgDark, bgLight, theme}}>
        {children}
        </SettingsContext.Provider>
    )
}

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context
}

export default SettingsProvider;