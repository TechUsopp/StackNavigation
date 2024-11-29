import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color, size}) => (<Icon name="home" color={color} size={size}/>)}}/>
        <Tab.Screen name="Details" component={DetailsScreen} options={{tabBarIcon: ({color, size}) => (<Icon name="grid" color={color} size={size}/>)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
