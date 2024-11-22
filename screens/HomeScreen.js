import react from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({navigation}){
    return(
        <View style={{
            flex: 1, 
            AlignItens: 'center',
            justifyContent: 'center'
        }}>
            <Text>Home Screen</Text>
            <Button
                title="Ir para Detalhes"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}