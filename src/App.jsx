import React from "react";
import { SafeAreaView, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UserList from "./Views/UserList";
import UserForm from "./Views/UserForm";
import Map from "./Views/Map";

export default props => {

    const Stack = createNativeStackNavigator()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Map">
                    <Stack.Screen name="Home" component={UserList} options={{
                        headerTitle: (props) => (   
                            <Image
                                style={{ width: 210, height: 110 }}
                                source={require('./images/McLaren_Title.png')}
                                resizeMode='contain'
                            />
                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center' },
                        headerStyle:{backgroundColor: "#000000", }
                    }} />
                    <Stack.Screen name="UserForm" component={UserForm} options={{
                        headerTitle: (user) => ( // App Logo
                            <Image
                                style={{ width: 210, height: 110}}
                                source={require('./images/McLaren_Title.png')}
                                resizeMode='contain'
                            />
                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center' },
                        headerStyle:{backgroundColor: "#000000", }
                    }} />
                    <Stack.Screen name="Map" component={Map} options={{
                        headerTitle: (user) => ( // App Logo
                            <Image
                                style={{ width: 210, height: 110}}
                                source={require('./images/McLaren_Title.png')}
                                resizeMode='contain'
                            />
                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center' },
                        headerStyle:{backgroundColor: "#000000", }
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}