import { SafeAreaView, Image,View, StyleSheet ,TouchableOpacity} from "react-native";
import { Text } from "react-native-paper";
import { router } from "expo-router";
import { Appbar } from "react-native-paper";

export default function profile(){
    return(
        <View style={{ flex: 1,backgroundColor: "#F2F2F2",justifyContent: "flex-start",}}>
            <Appbar.Header style={{ backgroundColor: "#FB6107" }}>
                <Appbar.BackAction onPress={router.back} color="#fff" />
                <Appbar.Content 
                title="Profile" 
                titleStyle={{ color: "#fff",alignItems:'center' }} 
          />
        </Appbar.Header>

        
        <View>
        <Image style={styles.user}
                            source={
                                require('@/assets/images/blackUser.png')
                    }/>
        </View>

        <Text style={styles.name}>Thashi Perera</Text>
        <Text style={styles.mail}>ThashiPerera123@gmail.com</Text>
        </View>
    );
}



const styles=StyleSheet.create({
    user:{
        width:90,
        height:90,
        left:150,
        top:45
    },

    name:{
        fontSize:20,
        fontWeight:'bold',
        paddingTop:"15%",
        textAlign:"center"
    },

    mail:{
        fontSize:15,
        textAlign:"center"
    }

});