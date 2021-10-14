import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import { Content, Title, Descricao, Publicar, Infos, Name, Type, End, Desc, Link, InputName, InputType, InputEnd, InputDesc, InputLink } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator();

export default function NovoLocal1({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Novo Local0')}>
                <Icon name="ios-chevron-back-circle-sharp" size={50} style={styles.icon} color="#2EAE01" />
            </TouchableOpacity>
            <Infos>Informações sobre o local</Infos>
            <Content>
                <Title>BÁSICO</Title>
                {/* <InputTitle /> */}
                <Name>Nome do Local</Name>
                <InputName />
                <Type>Tipo de serviço ou produto ofertado</Type>
                <InputType />
                <End>Endereço</End>
                <InputEnd />
                <Descricao>DESCRIÇÃO</Descricao>
                <Desc>Descreva o local</Desc>
                <InputDesc />
                <Link>Link para encontrar o local</Link>
                <InputLink />
                <Publicar><Text style={styles.text}>PUBLICAR</Text></Publicar>
            </Content>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        alignSelf: "center",
        fontSize: 20,
        alignContent: "center",
        textAlignVertical: "center",
        textAlign: "center",
    },
    icon: {
        marginLeft: 15,
        marginTop: 20,
    }
});