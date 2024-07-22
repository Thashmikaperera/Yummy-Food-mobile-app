import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomePage from "./Welcome";

export default function Index() {
  return (
    <SafeAreaView style={{flex:1}}>
       <WelcomePage />
    </SafeAreaView>
  );
}
