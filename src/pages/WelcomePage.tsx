import { ParamListBase, useNavigation } from "@react-navigation/native";
import { View,Text,Image,StyleSheet,Button } from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function WelcomePage () {
    const navigate = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
      <View style={styles.container}>
        <Image style={{
            width: '100%',height: '100%',
            position: 'absolute'
        }} source={
            require('../assets/img/loading.jpg')
        }resizeMode='cover'/>
        <Text style={{
            fontSize: 41,
            color:'white',
            marginTop: 540,
            fontWeight: '800'
        }}>Get Your Food</Text>
        <Text style={{
            fontSize: 41,
            color: "white",
            fontWeight: '800'
        }}>in fast as</Text>
        <View style={{
            marginTop:85,
            width:250,
            height: 45,
            backgroundColor: '#FB6107',
            justifyContent:'center',
            borderRadius:10,
            borderColor: 'red'
        }}>
        <Button 
            title="Get Started"
            color={"white"}
            onPress={() => navigate.navigate('login')}
        />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
});
  