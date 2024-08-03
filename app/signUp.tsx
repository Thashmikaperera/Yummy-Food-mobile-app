import { Text,Image,StyleSheet,TouchableOpacity,TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { Link,router } from "expo-router";

export default function SignUp(){
    const [text, onChangeText] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SafeAreaView style={{flex:1}}>
            <Image style={styles.img}
                source={
                    require('../assets/images/logo.png')
            }/>

            <Text style={styles.welcome}>Welcome our Store</Text>   

            <Text style={styles.good}>Good to see you </Text>  

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Your Email" placeholderTextColor='black'
            />

            <TextInput
                style={styles.input1}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                placeholderTextColor='black'
            />

            <TextInput
                style={styles.input2}
                value={password}
                placeholder="contact"
                placeholderTextColor='black'
            />

            <TouchableOpacity style={styles.button} onPress={()=>{router.push('/(tabs)/(home)/')}}>
                <Text style={styles.buttonText} >Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.continue}>or Continue with</Text>

            <TouchableOpacity style={styles.btn1} >
                <Text style={styles.apple} >Continue with apple</Text>
                <Image style={styles.applelogo}
                    source={
                        require('../assets/images/apple logo.png')
                }/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} >
                <Text style={styles.google} >Continue with google</Text>

                <Image style={styles.googlelogo}
                    source={
                        require('../assets/images/google.png')
                }/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn3} >
                <Text style={styles.facebook} >Continue with facebook</Text>

                <Image style={styles.facebooklogo}
                    source={
                        require('../assets/images/facebook.png')
                }/>
            </TouchableOpacity>

            <Text style={styles.acc}>already have an account ? <Link href={'/loging'} style={{color: "#FB6107"}}>Sign in</Link></Text>
            .
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img:{
        width:135,
        height:70,
        left:270,
        bottom:10
    },

    welcome:{
        fontSize:26,
        fontWeight:"bold",
        left:20,
        bottom:50
    },

    good:{
        fontSize:18,
        left:20,
        bottom:55
    },

    input: {
        width: 320,
        height: 50,
        margin: 12,
        borderWidth: 2,
        borderColor:"#FB6107",
        padding: 10,
        left:20,
        borderRadius:15
      },

    input1:{
        width: 320,
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        left:20,
        bottom:10,
        borderRadius:15
    }  ,

    input2: {
        width: 320,
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        left:20,
        bottom:20,
        borderRadius:15
      },


    pass:{
        color:'#FB6107',
        left: 228,
        bottom:15
    },
    
    button: {
        backgroundColor: '#FB6107',
        top: 25,
        width:201,
        height: 45,
        borderRadius:13,
        left: 98,
        justifyContent: "center",
        alignItems: "center",
      },

      buttonText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold'
      },

      continue:{
        fontSize:17,
        left:135,
        top:70
      },

      btn1:{
        backgroundColor: '#D9D9D9',
        width: 285,
        height: 56,
        borderRadius:13,
        alignItems: "center",
        justifyContent: "center",
        left:50,
        top: 100
      },

      apple:{
        fontSize:20,
        left:18,
        top:18,
      },

      applelogo:{
        width:47,
        height:38,
        right:100,
        bottom:15
      },

      btn2:{
        backgroundColor: '#D9D9D9',
        width: 285,
        height: 56,
        borderRadius:13,
        alignItems: "center",
        justifyContent: "center",
        left:50,
        top: 110
      },

      google:{
        fontSize:20,
        left:18,
        top:15,
      },

      googlelogo:{
        width:33,
        height:33,
        right:100,
        bottom:13
      },

      btn3:{
        backgroundColor: '#D9D9D9',
        width: 285,
        height: 56,
        borderRadius:13,
        alignItems: "center",
        justifyContent: "center",
        left:50,
        top: 120
      },

      facebook:{
        fontSize:20,
        left:26,
        top:15,
      },

      facebooklogo:{
        width:33,
        height:33,
        right:100,
        bottom:13
      },

      acc:{
        top: 170,
        left:90
      }

});