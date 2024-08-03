import { TextInput,View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';

export default function Home() {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={{flex:1}}>
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
        width:135,
        height:70,
        left:270,
        bottom:60
    },

    input: {
        width: 280,
        height: 50,
        margin: 10,
        borderWidth: 2,
        bottom:50,
        padding: 10,
        left:20,
        borderRadius:15
      },

      searchlogo:{
        width:25,
        height:22,
        left:265,
        bottom:94
      },

      notification:{
        width:40,
        height:31,
        left:322,
        bottom:122
      },

      category:{
        fontSize:25,
        fontWeight:'bold',
        left:30,
        bottom:48
      },

      breakfast:{
        width:80,
        height:80,
        left:28,
        borderRadius:7,
        bottom:40
      },

      lunch:{
        width:80,
        height:80,
        left:114,
        borderRadius:7,
        bottom:150
      },

      dinner:{
        width:80,
        height:80,
        left:199,
        borderRadius:7,
        bottom:260
      },

      sweets:{
        width:80,
        height:80,
        left:284,
        borderRadius:7,
        bottom:370
      },

      bre:{
        backgroundColor:'#D9D9D9',
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        bottom:80,
        left:28
      },

      lun:{
        backgroundColor:'#D9D9D9',
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        bottom:190,
        left:114
      },

      Din:{
        backgroundColor:'#D9D9D9',
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        bottom:300,
        left:199
      },
      swt:{
        backgroundColor:'#D9D9D9',
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        bottom:410,
        left:284
      },

      main:{
        backgroundColor: '#FB6107',
        height: 142,
        width: 344,
        left:25,
        bottom:350,
        borderRadius:15
      },

      num:{
        fontSize:45,
        fontWeight: 'bold',
        color: 'white',
        left: 40,
        top:5
      },

      percentage:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'white',
        left: 95,
        bottom:43
      },

      off:{
        fontSize:13,
        fontWeight: 'bold',
        color: 'white',
        left: 95,
        bottom:45
      },

      date:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'white',
        left: 40,
        bottom:40
      },

      offer:{
        fontSize:26,
        fontWeight: 'bold',
        color: 'white',
        left: 55,
        bottom:42
      },

      time:{
        fontSize:10,
        fontWeight: 'bold',
        color: 'white',
        left: 60,
        bottom:45
      },

      foodimg:{
        height: 142,
        width: 179,
        left:165,
        bottom:160
      },

      pop:{
        fontSize:25,
        fontWeight: 'bold',
        color: 'black',
        left: 10,
        bottom:110
      },

      pizzaimg:{
        width:130,
        height:130,
        left:28,
        borderRadius:7,
        bottom:82
      },

      pizzaTxt:{
        backgroundColor:'#D9D9D9',
        width:130,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        bottom:130,
        left:28
      },

      burgerimg:{
        width:130,
        height:130,
        left:180,
        borderRadius:7,
        bottom:232
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