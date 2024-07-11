import React from 'react';
import { View, Text,Image, StyleSheet,Button, TextInput } from "react-native";

export default function LoginPage() {
    return(
        <View >
            <Image style={styles.image} source={
                require('../assets/img/logo.png')
            }resizeMode='cover'/>

            <Text style={styles.wel}>Welcome Back</Text>
            <Text style={styles.again}>Good to see you  again</Text>

            <TextInput style={styles.user}
                placeholder='Enter Your Email'
            />

            <TextInput style={styles.password}
                placeholder='Password'
            />

            <Text style={styles.forgot}>Forgot Password ?</Text>

            <View style={{
                marginTop:48,
                marginLeft: 130,
                width:130,
                height: 45,
                backgroundColor: '#FB6107',
                justifyContent:'center',
                borderRadius:10,
                borderColor: 'red'
            }}>
                <Button 
                    title="Login"
                    color={"white"}
                    // onPress={() => navigate.navigate('login')}
                />
            </View>

            <Text style={styles.continue}>or Continue with</Text>

            <View style={{
                marginTop:48,
                marginLeft: 55,
                width:285,
                height: 53,
                backgroundColor: '#D9D9D9',
                justifyContent:'center',
                borderRadius:10,
                borderColor: 'red'
            }}>
                <Button 
                    title="Continue with apple"
                    color={"black"}
                    // onPress={() => navigate.navigate('login')}
                    
                />

            {/* <Image style={styles.apple} source={
                require('../assets/img/appleLogo.png')
            }resizeMode='cover'/> */}
            </View>

            <View style={{
                marginTop:10,
                marginLeft: 55,
                width:285,
                height: 53,
                backgroundColor: '#D9D9D9',
                justifyContent:'center',
                borderRadius:10,
                borderColor: 'red'
            }}>
                <Button 
                    title="Continue with google"
                    color={"black"}
                    // onPress={() => navigate.navigate('login')}
                />
            </View>
            {/* <Image style={styles.facebook} source={
                    require('../assets/img/facebook.png')
                }resizeMode='cover'/> */}

            <View style={{
                marginTop:10,
                marginLeft: 55,
                width:285,
                height: 53,
                backgroundColor: '#D9D9D9',
                justifyContent:'center',
                borderRadius:10,
                borderColor: 'red'
            }}>
                <Button 
                    title="Continue with facebook"
                    color={"black"}
                    // onPress={() => navigate.navigate('login')}
                    
                />
            </View>

            {/* <Image style={styles.google} source={
                require('../assets/img/google.png')
            }resizeMode='cover'/> */}
            
        </View>
    );
}

const styles =StyleSheet.create({
    image:{
        width: 150,
        height: 70,
        position: 'absolute',
        marginTop: 41,
        marginLeft: 260
    },

    wel:{
        fontWeight: "bold",
        fontSize: 32,
        marginTop: 70,
        marginLeft: 20
    },

    again: {
        marginLeft: 20,
        fontSize: 18
    },

    user: {
        height: 50,
        margin: 40,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        borderColor: '#FB6107'
    },

    password:{
        height: 50,
        margin: 40,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginTop: -30
    },

    forgot:{
        color: '#FB6107',
        marginLeft: 218,
        marginTop: -35,
        fontSize: 16
    },

    continue:{
        fontSize: 18,
        marginLeft: 126,
        marginTop:40,
    },

    apple:{
        width: 47,
        height: 38,
        marginLeft: 65,
        marginTop: -200
    },

    facebook:{
        width: 47,
        height: 38,
        marginLeft: 65,
        marginTop: 50
    },

    google:{
        width: 47,
        height: 38,
        marginLeft: 65,
        marginTop: -110
    },
});