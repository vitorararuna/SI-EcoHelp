import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import fundo from '../../assets/fundo.jpeg'
import Publicacoes from "../../Components/publicações";
import { List } from './styles';

const DATA = [
    {
        id: '1',
    },
    {
        id: '2',
    },
    {
        id: '3',
    },
    {
        id: '4',
    },
    {
        id: '5',
    },
    {
        id: '6',
    },
];

export default function Saves({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <List
                data={DATA}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Publicacoes />
                )}
            />
        </SafeAreaView>
    )
}
