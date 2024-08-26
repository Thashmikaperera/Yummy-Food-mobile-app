import React from 'react';
import {
  StyleSheet,TextInput,View,SafeAreaView,ScrollView,StatusBar,Text,Image,TouchableOpacity
} from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
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

        <Text style={styles.favorites}>Favorites</Text>

      </View>
      <ScrollView style={styles.scrollView}>
          <View>
            <Image style={styles.corn}
                      source={
                          require('@/assets/images/hotCorn.jpg')
              }/>
            <View style={styles.foodMenu}>
            <Text style={styles.txt}>Hot Corn Chicken Soup</Text>
            <Text style={styles.content}>Flavorful and comforting soup made in one pot that combines
               tender chicken with juicy corn!</Text>
            </View>
            <Image style={styles.stars}
                      source={
                          require('@/assets/images/stars.png')
              }/>
          </View>

          <View style={styles.food}>
            <Image style={styles.corn}
                      source={
                          require('@/assets/images/chickenBiryani.jpg')
              }/>
            <View style={styles.foodMenu1}>
            <Text style={styles.txt}>Chicken Biriyani</Text>
            <Text style={styles.content}>Highly aromatic, mouth-watering staple dish that needs no introduction.</Text>
            </View>
            <Image style={styles.stars}
                      source={
                          require('@/assets/images/stars.png')
              }/>
          </View>

          <View style={styles.food1}>
            <Image style={styles.corn}
                      source={
                          require('@/assets/images/mixRice.jpg')
              }/>
            <View style={styles.foodMenu}>
            <Text style={styles.txt}>Mixed Fried Rice</Text>
            <Text style={styles.content}>A dish consisting of rice and other foods,
               such as meats, vegetables, or beans. </Text>
            </View>
            <Image style={styles.stars}
                      source={
                          require('@/assets/images/stars.png')
              }/>
          </View>

          <View style={styles.food2}>
            <Image style={styles.corn}
                      source={
                          require('@/assets/images/gulab.jpg')
              }/>
            <View style={styles.foodMenu1}>
            <Text style={styles.txt1}>Gulab Jamun</Text>
            <Text style={styles.content}>A sweet confectionary or dessert, originating in the Indian subcontinent 
              and a type of mithai popular in India, Pakistan ..etc </Text>
            </View>
            <Image style={styles.stars}
                      source={
                          require('@/assets/images/stars.png')
              }/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 19,
    bottom:25
  },
  img:{
    width:130,
    height:70,
    left:280,
    bottom:15
  },
  input: {
    width: 290,
    height: 44,
    borderWidth: 2,
    bottom:20,
    left:25,
    padding: 13,
    borderRadius:15
  },

  searchlogo:{
    width:25,
    height:22,
    left:260,
    bottom:54
  },

  notification:{
    width:40,
    height:31,
    left:328,
    bottom:80
  },

  favorites:{
    fontSize:26,
    fontWeight:'bold',
    left:255,
    bottom:50
  },

  corn:{
    width:90,
    height:100,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    margin:10

  },

  food:{
    bottom:100
  },

  food1:{
    bottom:200
  },

  food2:{
    bottom:300
  },

  foodMenu:{
    backgroundColor: '#F7A97D',
    height: 90,
    width: 248,
    bottom:100,
    left:100,
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },

  foodMenu1:{
    backgroundColor: '#FB6107',
    height: 90,
    width: 248,
    bottom:100,
    left:100,
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },
  txt:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    margin:5
  },
  txt1:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    marginLeft:5,
    marginTop:3
  },
  content:{
    width:240,
    fontSize:12,
    marginLeft:5
  },

  
  stars:{
    bottom:122,
    left:260
  },
  
});

export default App;