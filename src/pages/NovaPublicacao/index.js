import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import { Content, Title, InputTitle, Type, TypeOptions, Dica, Discussao, Noticia, Pergunta, Descricao, IputDescricao, Publicar, Voltar } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator();

export default function NovaPublicacao({ navigation }) {

    const [title, setTitle] = useState("")
    const [_type_, setType] = useState("")
    const [desc, setDesc] = useState("")

    const [dica, setDica] = useState(false)
    const [disc, setDisc] = useState(false)
    const [noticia, setNoticia] = useState(false)
    const [perg, setPerg] = useState(false)

    function setType_(type) {
        if (type == "dica") {
            setDica(!dica)
            setType("dica")
            if (disc == true) { setDisc(false) }
            if (noticia == true) { setNoticia(false) }
            if (perg == true) { setPerg(false) }
        }
        if (type == "disc") {
            setDisc(!disc)
            setType("discussao")
            if (dica == true) { setDica(false) }
            if (noticia == true) { setNoticia(false) }
            if (perg == true) { setPerg(false) }
        }
        if (type == "noticia") {
            setNoticia(!noticia)
            setType("noticia")
            if (disc == true) { setDisc(false) }
            if (dica == true) { setDica(false) }
            if (perg == true) { setPerg(false) }
        }
        if (type == "perg") {
            setPerg(!perg)
            setType("pergunta")
            if (disc == true) { setDisc(false) }
            if (noticia == true) { setNoticia(false) }
            if (dica == true) { setDica(false) }
        }
    }

    function publicar(){
        console.log(title, _type_, desc)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Nova Postagem')}>
                <Icon name="ios-chevron-back-circle-sharp" size={50} style={styles.icon} color="#2EAE01" />
            </TouchableOpacity>
            <Content>
                <Title>TÍTULO</Title>
                <InputTitle value={title} onChangeText={setTitle} />
                <Type>TIPO DE PUBLICAÇÃO</Type>
                <TypeOptions>
                    <TouchableOpacity onPress={() => setType_("dica")}>
                        <Dica set={dica}>dica</Dica>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setType_("disc")}>
                        <Discussao set={disc}>discussão</Discussao>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setType_("noticia")}>
                        <Noticia set={noticia}>notícia</Noticia>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setType_("perg")}>
                        <Pergunta set={perg}>pergunta</Pergunta>
                    </TouchableOpacity>
                </TypeOptions>
                <Descricao>DESCRIÇÃO</Descricao>
                <IputDescricao value={desc} onChangeText={setDesc} />
                <TouchableOpacity onPress={() => publicar()}>
                    <Publicar><Text style={styles.text}>PUBLICAR</Text></Publicar>
                </TouchableOpacity>
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