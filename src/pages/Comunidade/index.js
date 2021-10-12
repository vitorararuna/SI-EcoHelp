import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import { SearchContent, Search } from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createMaterialTopTabNavigator();

export default function Comunidade({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={fundo} resizeMode="cover" style={styles.image} />
            <SearchContent>
                <Search>
                    <Icon name="search1" size={31} />
                </Search>
            </SearchContent>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        width: 450,
        height: 100,
        opacity: 30,
    },

});