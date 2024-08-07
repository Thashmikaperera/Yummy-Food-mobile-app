import { ParamListBase } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { View,Text,Image,TouchableOpacity,StyleSheet,Pressable } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function WelcomePage () {
    
    return (
      <View style={styles.container}>
        <Image style={styles.img}
            source={
                require('../assets/images/loading.jpg')
        }/>


        <Text style={styles.txt}>
            Get Your Food</Text>
        
        <Text style={styles.txt1}>
            in fast as</Text>
            
        <TouchableOpacity style={styles.button} onPress={()=>{router.push('/loging')}}>
            <Text style={styles.buttonText} >Get Started</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },

    img: {
        width: '100%',height: '112%',
        position: 'absolute',
        marginTop: -50
    },

    txt:{
        fontSize: 42,
        color:'white',
        marginTop: 600,
        bottom:75,
        fontWeight: '900'
    },

    txt1:{
        fontSize: 45,
        color: "white",
        fontWeight: '900',
        bottom:80,
    },

    button: {
        backgroundColor: '#FB6107',
        marginTop: 10,
        width:230,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
      },

      buttonText: {
        color: '#fff',
        fontSize: 20,
      },
});
  

