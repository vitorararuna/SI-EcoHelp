import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import { Photo, TabContainer, UserContent, UserLogin, UserName } from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Publish from "../Publish";
import Saves from "../Saves";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialTopTabNavigator();

export default function User({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
                <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/49912005?v=4' }} />
            </ImageBackground>
            <UserName>Vitor Araruna</UserName>
            <UserLogin>@vitor_araruna</UserLogin>
            <Tab.Navigator
                initialRouteName="Feed"
                style={styles.tab}
                screenOptions={{
                    tabBarActiveTintColor: '#000',
                    tabBarLabelStyle: { fontSize: 17 },
                    tabBarStyle: { backgroundColor: '#fff0' },
                }}
            >
                <Tab.Screen
                    name="Publicacoes"
                    component={Publish}
                    options={{ tabBarLabel: 'Publicacoes' }}
                />
                <Tab.Screen
                    name="Salvos"
                    component={Saves}
                    options={{ tabBarLabel: 'Salvos' }}
                />
            </Tab.Navigator>
            {/* <Publicacoes /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        width: 450,
        height: 100,
    },
    tab: {
        bottom: 176,
        color: "#fff0"
    }

});