import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import { SearchContent, Search } from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import Publish from "../Publish_";
import Locs_ from "../../pages/Locs_";

const Tab = createMaterialTopTabNavigator();

export default function Locais({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
                <SearchContent>
                    <Icon name="search1" size={31} color="white" style={styles.icon2} />
                    <Search />
                    <Icon2 name="options" size={31} color="white" style={styles.icon} />
                </SearchContent>
            </ImageBackground>
            <Locs_ />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        justifyContent: "center",
        width: 450,
        height: 100,
        opacity: 30,
    },
    icon: {
        marginLeft: 35,
    },
    icon2: {
        marginRight: 35,
    }

});