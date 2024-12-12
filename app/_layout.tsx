import { Stack } from "expo-router";
import { ImageBackground, StyleSheet } from "react-native";
import { SettingsProvider } from "./SettingsContext";
import PageStack from "./stack/PageStack";

export default function RootLayout() {
  return (
    <SettingsProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
    </SettingsProvider>
  );
}
