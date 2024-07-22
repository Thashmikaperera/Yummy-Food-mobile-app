import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="loging" options={{headerShown: false}} />
        <Stack.Screen name="signUp" options={{headerShown: false}} />
        <Stack.Screen name="home" options={{headerShown: false}} />
      </Stack>
    </SafeAreaProvider>
  );
}
