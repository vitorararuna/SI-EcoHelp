import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import { Content, Title, InputTitle, Type, TypeOptions, Dica, Discussao, Noticia, Pergunta, Descricao, IputDescricao, Publicar, Voltar } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator();

export default function NewPublish({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Icon name="ios-chevron-back-circle-sharp" size={50} style={styles.icon} color="#2EAE01" />
            <Content>
                <Title>TÍTULO</Title>
                <InputTitle />
                <Type>TIPO DE PUBLICAÇÃO</Type>
                <TypeOptions>
                    <Dica>dica</Dica>
                    <Discussao>discussão</Discussao>
                    <Noticia>notícia</Noticia>
                    <Pergunta>pergunta</Pergunta>
                </TypeOptions>
                <Descricao>DESCRIÇÃO</Descricao>
                <IputDescricao />
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