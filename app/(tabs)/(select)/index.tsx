import { StyleSheet, View,Image, Text } from "react-native";
import { Appbar,Button  } from "react-native-paper";
import { router } from "expo-router";

export default function Select(){
    return(
        <View style={{ flex: 1,backgroundColor: "#F2F2F2",}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={router.back} color="#000" />
                <Appbar.Content 
                title="Beef Burger" 
                titleStyle={{ color: "#000",alignItems:'center',fontWeight:'bold',fontSize:23 }} 
          />
            <Image style={styles.logo}
                    source={
                        require('@/assets/images/logo.png')
            }/>

        </Appbar.Header>

        <View style={styles.view}>
        <Image style={styles.img}
                source={
                    require('@/assets/images/burger.png')
        }/>
    
        <Text style={styles.burger}>Beef Burger</Text>

        <Image style={styles.star}
                source={
                    require('@/assets/images/Star.png')
        }/>
    
        </View>

        <Text style={styles.review}>4.9  see reveiws</Text>

        <Image style={styles.clock}
                source={
                    require('@/assets/images/clock.png')
        }/>

        <Text style={styles.time}>25-30 mints</Text>

        <Text style={styles.price}>Price $250</Text>

        <View>
            <Text style={styles.desc}>Description</Text>

            <Text style={styles.des}>Beef Burger in a bustling kitchen, aromas intertwine, 
                dancing with the promise of delight. Each ingredient, a character in the culinary
                 tale, harmonizing. In a bustling kitchen, aromas intertwine, dancing with the promise of delight.
                  Each ingredient.</Text>

                  <Button style={styles.btn} icon="cart" mode="contained" onPress={()=>{router.push('/(tabs)/(cart)/')}}>
                    Add to Cart
                    </Button>
        </View>
        </View>

        
    );
}

const styles=StyleSheet.create({
    logo:{
        width:100,
        height:70,
        left:10,
        top:1
      },
    view:{
        width:297,
        height:242,
        backgroundColor:'#fff',
        alignItems:'center',
        top:50,
        borderRadius:20,
        left:45
    },

    img:{
        width:100,
        height:100,
        top:15
    },

    burger:{
        fontSize:25,
        fontWeight:'bold',
        top:15
    },

    star:{
        top:25,
        right:100
    },

    review:{
        fontSize:12,
        left:110,
        bottom:37
    },

    clock:{
        width:20,
        height:20,
        left:220,
        bottom:52
    },

    time:{
        fontSize:12,
        bottom:70,
        left:250
    },

    price:{
        fontSize:18,
        fontWeight:'bold',
        bottom:40,
        left:70
    },

    desc:{
        fontSize:28,
        fontWeight:'bold',
        paddingLeft:"12%",
        paddingTop:"5%"
    },

    des:{
        fontSize:18,
        fontWeight: "700",
        paddingLeft:"12%",
        paddingTop:"5%"
    },

    btn:{
        width:277,
        marginTop:"10%",
        marginLeft:"15%",
        borderRadius:6,
        backgroundColor:'#FB6107'
    }
});