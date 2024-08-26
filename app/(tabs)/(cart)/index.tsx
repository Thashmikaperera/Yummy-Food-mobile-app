import { View,Image,StyleSheet,Text, SafeAreaView } from "react-native";
import { Button  } from "react-native-paper";
import * as React from 'react';
import { router } from "expo-router";

export default function Cart(){
  const [text, setText] = React.useState("");
    return(
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F2F2F2'
      }}>
          
         <View>
            <Image style={styles.img}
                    source={
                        require('@/assets/images/logo.png')
            }/>
         </View>
         <View>
            <Image style={styles.cart}
                    source={
                        require('@/assets/images/orCart.png')
            }/>
         
         
      </View>
      <Text style={styles.txt}>There are no items in this cart</Text>
      <Button style={styles.btn} mode="contained" onPress={()=>{router.push('/(tabs)/(home)/')}}>
                    Continue Shopping
                    </Button>
      </View>
      
    );
}

const styles=StyleSheet.create({
    img:{
      width:130,
      height:70,
      left:150,
      bottom:220
    },

    cart:{
      justifyContent:'center',
      alignContent:'center'
    },

    txt:{
      fontSize:20,
      fontWeight:'bold',
      justifyContent: 'center',
      textAlign:'center'
    },

    btn:{
        width:277,
        justifyContent:'center',
        marginTop:20,
        borderRadius:6,
        backgroundColor:"#FB6107",
    }
});