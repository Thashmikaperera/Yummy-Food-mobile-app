import { View,Image,StyleSheet, SafeAreaView } from "react-native";
import * as React from 'react';

export default function fav(){
  const [text, setText] = React.useState("");
    return(
      <SafeAreaView>
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
        
      </View>
      </SafeAreaView>
      
    );
}

const styles=StyleSheet.create({
    img:{
      width:130,
      height:70,
      left:150,
      bottom:10
    }
});