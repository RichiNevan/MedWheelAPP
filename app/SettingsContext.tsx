import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { View } from "react-native";
import * as Font from 'expo-font'
import { ActivityIndicator } from "react-native";

interface SettingsContextType {
    hemisphere: 'north' | 'south';
    language: 'prt' | 'eng' | 'ita';
    setHemisphere: (hemisphere: 'north' | 'south') => void;
    setLanguage: (language: 'prt' | 'eng' | 'ita') => void;
    fontsLoaded: boolean
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({children}: {children: ReactNode}) => {
    const [hemisphere, setHemisphere] = useState<'north' | 'south'>('north');
    const [language, setLanguage] = useState<'prt' | 'eng' | 'ita'>('prt');
    const [fontsLoaded, setFontsLoaded] = useState(false)

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
        <SettingsContext.Provider value={{fontsLoaded, hemisphere, language, setHemisphere, setLanguage}}>
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