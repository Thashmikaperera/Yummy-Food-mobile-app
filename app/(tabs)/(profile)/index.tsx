import * as React from 'react';
import {Text, Appbar, List, Button, Menu, Icon  } from 'react-native-paper';
import { View, Image,TouchableOpacity} from 'react-native';
import { router } from "expo-router";
import { EvilIcons, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import MenuItem from 'react-native-paper/lib/typescript/components/Menu/MenuItem';

export default function ProfilePage(){
    return(
        <View style={{ flex: 1,backgroundColor: "#F2F2F2",justifyContent: "flex-start",}}>
            <Appbar.Header style={{ backgroundColor: "#FB6107" }}>
                <Appbar.BackAction onPress={router.back} color="#fff" />
                <Appbar.Content 
                title="Profile" 
                titleStyle={{ color: "#fff",justifyContent:'center'}} 
            />
            </Appbar.Header>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
                <EvilIcons size={100} name="user"color={"#000"}/>
                <Text variant="titleLarge" style={{color:'#000',marginTop:10}}>Thashi Perera</Text>
                <Text variant="bodyMedium" style={{color:'#000'}}>ThashiPerera123@gmail.com</Text> 
            </View>
            <View
                style={{
                    paddingTop: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    flex: 1,
                }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={() => console.log('Pressed')}>
                    <Icon
                        source="account-edit-outline"
                        size={25}
                        color="#000"/>
                    <Text
                        style={{
                            color: '#000',
                            marginLeft: 8,
                            fontSize: 17
                        }}>
                        Edit Profile
                    </Text>
                    <Image
                        style={{
                            width: 30,
                            height: 15,
                            opacity: 0.7,
                            marginLeft: 'auto',  // Push the arrow to the right
                        }}
                        source={require('@/assets/images/Arrow.png')}/>
                        
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',marginTop: 20
                    }}
                    onPress={() => console.log('Pressed')}>
                    <Icon
                        source="cards-heart-outline"
                        size={25}
                        color="#000"/>
                    <Text
                        style={{
                            color: '#000',
                            marginLeft: 8,
                            fontSize: 17
                        }}>
                        Favourite
                    </Text>
                    <Image
                        style={{
                            width: 30,
                            height: 15,
                            opacity: 0.7,
                            marginLeft: 'auto',  // Push the arrow to the right
                        }}
                        source={require('@/assets/images/Arrow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',marginTop: 20
                    }}
                    onPress={() => console.log('Pressed')}>
                    <Icon
                        source="history"
                        size={25}
                        color="#000"/>
                    <Text
                        style={{
                            color: '#000',
                            marginLeft: 8,
                            fontSize: 17
                        }}>
                        Order History
                    </Text>
                    <Image
                        style={{
                            width: 30,
                            height: 15,
                            opacity: 0.7,
                            marginLeft: 'auto',  // Push the arrow to the right
                        }}
                        source={require('@/assets/images/Arrow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',marginTop: 20
                    }}
                    onPress={() => console.log('Pressed')}>
                    <Icon
                        source="format-list-bulleted"
                        size={25}
                        color="#000"/>
                    <Text
                        style={{
                            color: '#000',
                            marginLeft: 8,
                            fontSize: 17
                        }}>
                        Payment Details
                    </Text>
                    <Image
                        style={{
                            width: 30,
                            height: 15,
                            opacity: 0.7,
                            marginLeft: 'auto',  // Push the arrow to the right
                        }}
                        source={require('@/assets/images/Arrow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',marginTop: 20
                    }}
                    onPress={() => console.log('Pressed')}>
                    <Ionicons
                        name="settings-outline"
                        size={25}
                        color="#000"/>
                    <Text
                        style={{
                            color: '#000',
                            marginLeft: 8,
                            fontSize: 17
                        }}>
                        Setting
                    </Text>
                    <Image
                        style={{
                            width: 30,
                            height: 15,
                            opacity: 0.7,
                            marginLeft: 'auto',  // Push the arrow to the right
                        }}
                        source={require('@/assets/images/Arrow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',marginTop: 20
                    }}
                    onPress={() => console.log('Pressed')}>
                    <Icon
                        source="help"
                        size={25}
                        color="#000"/>
                    <Text
                        style={{
                            color: '#000',
                            marginLeft: 8,
                            fontSize: 17
                        }}>
                        Help
                    </Text>
                    <Image
                        style={{
                            width: 30,
                            height: 15,
                            opacity: 0.7,
                            marginLeft: 'auto',  // Push the arrow to the right
                        }}
                        source={require('@/assets/images/Arrow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',marginTop: 20
                    }}
                    onPress={() => console.log('Pressed')}>
                    <Ionicons
                        name="information-circle-outline"
                        size={25}
                        color="#000"/>
                    <Text
                        style={{
                            color: '#000',
                            marginLeft: 8,
                            fontSize: 1700
                        }}>
                        About Us
                    </Text>
                    <Image
                        style={{
                            width: 30,
                            height: 15,
                            opacity: 0.7,
                            marginLeft: 'auto',  // Push the arrow to the right
                        }}
                        source={require('@/assets/images/Arrow.png')}/>
                </TouchableOpacity>
                <Button
                    icon="logout"
                    mode="outlined"
                    textColor="#EE3A43"
                    onPress={() => console.log('Pressed')}
                    style={{
                        marginTop: 40,
                        borderColor: '#FB6107',
                    }}>
                    LogOut
                </Button>
            </View>
        </View>
    );
}