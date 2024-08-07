import { TextInput,View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';

export default function Home() {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'#F2F2F2'
    }}>
       <Image style={styles.img}
                source={
                    require('@/assets/images/logo.png')
        }/>

        <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="What are you looking for ?" placeholderTextColor='gray'
        />

        <TouchableOpacity  >
                <Image style={styles.searchlogo}
                    source={
                        require('@/assets/images/search.png')
                }/>
        </TouchableOpacity>

        <TouchableOpacity  >
                <Image style={styles.notification}
                    source={
                        require('@/assets/images/blackNotification.png')
                }/>
        </TouchableOpacity>

        <Text style={styles.category}>Food Category</Text>

        <View>
            <Image style={styles.breakfast}
                    source={
                        require('@/assets/images/Breakfast.jpg')
            }/>

            <View style={styles.bre}>
                <Text>Breakfast</Text>
            </View>
        </View>

        <View>
          <Image style={styles.lunch}
                  source={
                      require('@/assets/images/lunch.jpg')
          }/>

            <View style={styles.lun}>
                <Text>Lunch</Text>
            </View>
        </View>

        <View>
          <Image style={styles.dinner}
                  source={
                      require('@/assets/images/pasta.jpg')
          }/>

            <View style={styles.Din}>
                <Text>Dinner</Text>
            </View>
        </View>

        <View>
          <Image style={styles.sweets}
                  source={
                      require('@/assets/images/sweets.webp')
          }/>

            <View style={styles.swt}>
                <Text>Sweets</Text>
            </View>
        </View>

        <View style={styles.main}>
            <Text style={styles.num}>50</Text>
            <Text style={styles.percentage}>%</Text>
            <Text style={styles.off}>off</Text>
            <Text style={styles.date}>Every Friday</Text>
            <Text style={styles.offer}>OFFER</Text>
            <Text style={styles.time}>11 a.m to 7 p.m</Text>
            <Image style={styles.foodimg}
                  source={
                      require('@/assets/images/offerFood.png')
            }/>
            
            <Text style={styles.pop}>Popular</Text>

            <View>
              <Image style={styles.pizzaimg}
                      source={
                          require('@/assets/images/cheesePizza.webp')
              }/>

              <View style={styles.pizzaTxt}>
                  <Text>Cheese Pizza</Text>
              </View>
            </View>

            <View>
              <Image style={styles.burgerimg}
                      source={
                          require('@/assets/images/Burger.jpg')
              }/>

              <View style={styles.burgertxt}>
                  <Text>Beef Burger</Text>
              </View>
            </View>
        </View>
        
        
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    img:{
      width:130,
      height:70,
      left:150,
      top:45
    },

    input: {
        width: 280,
        height: 44,
        margin: 10,
        borderWidth: 2,
        top:30,
        padding: 13,
        right:30,
        borderRadius:15
      },

      searchlogo:{
        width:25,
        height:22,
        left:80,
        bottom:12
      },

      notification:{
        width:40,
        height:31,
        left:140,
        bottom:40
      },

      category:{
        fontSize:25,
        fontWeight:'bold',
        right:80
      },

      breakfast:{
        width:80,
        height:80,
        borderRadius:7,
        top:30,
        right:130
      },

      lunch:{
        width:80,
        height:80,
        borderRadius:7,
        bottom:80,
        right:45
      },

      dinner:{
        width:80,
        height:80,
        borderRadius:7,
        bottom:190,
        left:40
      },

      sweets:{
        width:80,
        height:80,
        borderRadius:7,
        bottom:300,
        left:125
      },

      bre:{
        backgroundColor:'#D9D9D9',
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        bottom:10,
        right:130
      },

      lun:{
        backgroundColor:'#D9D9D9',
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        bottom:120,
        right:45
      },

      Din:{
        backgroundColor:'#D9D9D9',
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        bottom:230,
        left:40
      },
      swt:{
        backgroundColor:'#D9D9D9',
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        left:125,
        bottom:340
      },

      main:{
        backgroundColor: '#FB6107',
        height: 142,
        width: 344,
        borderRadius:15,
        bottom:290
      },

      num:{
        fontSize:45,
        fontWeight: 'bold',
        color: 'white',
        left:40,
        top:10
      },

      percentage:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'white',
        left: 97,
        bottom:36
      },

      off:{
        fontSize:13,
        fontWeight: 'bold',
        color: 'white',
        left: 97,
        bottom:38
      },

      date:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'white',
        left: 40,
        bottom:30
      },

      offer:{
        fontSize:26,
        fontWeight: 'bold',
        color: 'white',
        left: 50,
        bottom:28
      },

      time:{
        fontSize:10,
        fontWeight: 'bold',
        color: 'white',
        left: 52,
        bottom:30
      },

      foodimg:{
        height: 142,
        width: 179,
        left:165,
        bottom:142
      },

      pop:{
        fontSize:25,
        fontWeight: 'bold',
        color: 'black',
        left: 5,
        bottom:120
      },

      pizzaimg:{
        width:130,
        height:130,
        left:18,
        borderRadius:7,
        bottom:90
      },

      pizzaTxt:{
        backgroundColor:'#D9D9D9',
        width:130,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        bottom:130,
        left:18
      },

      burgerimg:{
        width:130,
        height:130,
        left:180,
        borderRadius:7,
        bottom:240
      },

      burgertxt:{
        backgroundColor:'#D9D9D9',
        width:130,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        bottom:280,
        left:180
      }
});