import { Text,Image,StyleSheet,TouchableOpacity,TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { Link,router } from "expo-router";

export default function Loging(){
    const [text, onChangeText] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SafeAreaView style={{flex:1}}>
            <Image style={styles.img}
                source={
                    require('../assets/images/logo.png')
                }/>

            <Text style={styles.welcome}>Welcome back</Text>   

            <Text style={styles.good}>Good to see you  again</Text>  

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

            <Text style={styles.pass}>Forgot Password ?</Text> 

            <TouchableOpacity style={styles.button} onPress={()=>{router.push('/home')}}>
                <Text style={styles.buttonText} >Login</Text>
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

            <Text style={styles.acc}>Don’t have an account ? <Link href={'/signUp'} style={{color: "#FB6107"}}>Sign up</Link></Text>
            
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
        fontSize:32,
        fontWeight:"bold",
        left:20,
        bottom:50
    },

    good:{
        fontSize:17,
        left:20,
        bottom:54
    },

    input: {
        width: 320,
        height: 50,
        margin: 12,
        borderWidth: 2,
        
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

    pass:{
        color:'#FB6107',
        left: 228,
        bottom:15
    },
    
    button: {
        backgroundColor: '#FB6107',
        top: 37,
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
        top:90
      },

      btn1:{
        backgroundColor: '#D9D9D9',
        width: 285,
        height: 56,
        borderRadius:13,
        alignItems: "center",
        justifyContent: "center",
        left:50,
        top: 120
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
        top: 130
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
        top: 140
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
        top: 220,
        left:90
      }
});