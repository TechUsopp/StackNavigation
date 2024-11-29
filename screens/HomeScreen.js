import React from "react";
import { View, Text, Button } from "react-native";
import { Avatar } from "react-native-paper";

export default function HomeScreen({navigation}){
    return(
        <View style={{
            flex: 1, 
            AlignItens: 'center',
            justifyContent: 'center'
        }}>
            <Text>Home Screen</Text>
            <Avatar.Icon size={45} icon="folder" />
            <Button
                title="Ir para Detalhes"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}