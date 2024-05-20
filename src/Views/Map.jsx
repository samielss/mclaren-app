import { Button } from "@rneui/themed";
import React, { useState } from "react";
import { Text, View } from "react-native";

export default props => {


    const [cars, setCars] = useState(["P1", "Senna"])

    return (
        <View>
            <Text>Teste</Text>
            <Button title="Teste" onPress=
                {cars.map(name => {
                    return (
                        <Text key={name}>{name}</Text>
                    )
                }
                )
                }
            />
        </View>
    )
}