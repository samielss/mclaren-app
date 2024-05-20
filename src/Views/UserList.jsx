import React from "react";
import { SafeAreaView, Text, Alert, View, FlatList, StyleSheet } from "react-native";
import users from "../data/users";
import { ListItem, Avatar, Theme, BackgroundImage } from "@rneui/base";
import { Card, ThemeProvider } from "@rneui/themed";
import { CardImage } from "@rneui/base/dist/Card/Card.Image";

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir usuário', 'Deseja exluir o usuário?',
            [{
                text: 'Sim',
                onPress() {
                    console.log('delete' + user.id)
                }
            },
            {
                text: 'Não'
            }
            ]
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ThemeProvider>
                <ListItem style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000" }} containerStyle={{ margin: 0, padding: 0 }}>
                    <Card wrapperStyle={{ width: 400, height: 200 }} containerStyle={{ backgroundColor: "#000000", margin: 0, borderColor: "#000000" }}>
                        <CardImage source={{ uri: user.avatarURL }} style={{ borderRadius: 20, width: "100%", height: "100%", padding: 20 }} resizeMode="cover" blurRadius={2} onPress={() => props.navigation.navigate('UserForm', user)}>
                            <Card.Title style={{ textAlign: "left", color: "#FFFFFF", fontSize: 30 }}>{user.name}</Card.Title>
                        </CardImage>
                    </Card>
                    {/* { <Avatar source={{ uri: user.avatarURL }} rounded />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Title>{user.email}</ListItem.Title>
                    </ListItem.Content> */}
                    {/* // <ListItem.Chevron
                    //     name="delete"
                    //     color="red"
                    //     size={25}
                    //     onPress={() => confirmUserDeletion(user)} /> } */}
                </ListItem>
            </ThemeProvider>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )

    const Style = StyleSheet.create(
        {
        }
    )
}