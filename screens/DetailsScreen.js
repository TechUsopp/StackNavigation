import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DetailsScreen({navigation}){
    return(
        <View style={{
            flex: 1, 
            AlignItens: 'center',
            justifyContent: 'center'
        }}>
            <Text>Details Screen</Text>
            <Button
                styles = {styles.botao}
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    )

// const styles = StyleSheet.create{
//     .botao
// }



}


