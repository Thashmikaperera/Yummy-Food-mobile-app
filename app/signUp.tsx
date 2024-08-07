import { Text,Image,StyleSheet,TouchableOpacity,TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { Link,router } from "expo-router";

export default function SignUp(){
    const [text, onChangeText] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SafeAreaView style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:'#F2F2F2'
        }}>
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
            
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img:{
      width:140,
      height:80,
      left:145,
      bottom:105
    },

    welcome:{
        fontSize:26,
        fontWeight:"bold",
        right:55,
        bottom:125
    },

    good:{
        fontSize:18,
        right:101,
        bottom:125
    },

    input: {
        width: 320,
        height: 50,
        margin: 12,
        borderWidth: 2,
        borderColor:"#FB6107",
        padding: 10,
        bottom:90,
        borderRadius:15
      },

    input1:{
        width: 320,
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        bottom:100,
        borderRadius:15
    }  ,

    input2: {
        width: 320,
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        bottom:110,
        borderRadius:15
    },

    button: {
        backgroundColor: '#FB6107',
        bottom:60,
        width:201,
        height: 45,
        borderRadius:13,
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
        bottom:20
      },

      btn1:{
        backgroundColor: '#D9D9D9',
        width: 285,
        height: 56,
        borderRadius:13,
        alignItems: "center",
        justifyContent: "center",
        top:10
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
        top: 20
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
        top: 30
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
        top:80
      }

});