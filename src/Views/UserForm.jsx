import React, {useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default ({route,navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <View>
            <Text>Nome</Text>
            <TextInput
                onChange={name => setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
            />
            <Text>E-mail</Text>
            <TextInput
            onChangeText={email => setUser({...user, email})}
            placeholder="Informe o e-mail"
            value={user.email}
            />
            <Button
                title="Salvar"
                onPress={() =>{
                    navigation.goBack()
                }}
            />
        </View>
    )
}