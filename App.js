import react from "react";
import { NativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './screens/ HomeScreen'
import DetailScreen from 'screens/DetailScreen'

const Stack = createStackNavigator();

export default function App(){
  return(
    <NativeContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailScreen}/>
      </Stack.Navigator>
    </NativeContainer>
  )
}