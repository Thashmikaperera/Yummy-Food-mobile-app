import { Tabs } from 'expo-router';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Icon } from 'react-native-paper';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: "#FA6440"}}>
      <Tabs.Screen options={{title: "Home",
                tabBarIcon:({color}) => <FontAwesome6 size={20} name="house" color={color}/>}} name="(home)" />
      <Tabs.Screen options={{title: "Favorite",
                tabBarIcon:({color}) => <FontAwesome6 size={20} name="heart" color={color}/>}} name="(fav)" />
      <Tabs.Screen options={{title: "Food",
                tabBarIcon:({color}) => <Icon size={20} source="food" color={color}/>}} name="(select)" />
      <Tabs.Screen options={{title: "Cart",
                tabBarIcon:({color}) => <Icon size={20} source="cart" color={color}/>}} name="(cart)" />
            <Tabs.Screen options={{title: "Profile",
                tabBarIcon:({color}) => <FontAwesome6 size={20} name="user" color={color}/>}} name="(profile)" /> 
    </Tabs>
  );
}

