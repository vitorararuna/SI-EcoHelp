import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import { Content, Title, Descricao, Publicar, Infos, Name, Type, End, Desc, Link, InputName, InputType, InputEnd, InputDesc, InputLink } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

export default function NovoLocal1({ navigation }) {

    const tipoLocal = useSelector(state => state.user.tipo_local);
    const [nome_local, setNome_local] = useState("")
    const [endereco, setEndereco] = useState("")
    const [descri, setDescri] = useState("")
    const [link, setLink] = useState("")

    function publicar() {
        console.log(tipoLocal, nome_local, endereco, descri, link)
    }

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
                <InputName value={nome_local} onChangeText={setNome_local} />
                {/* <Type>Tipo de serviço ou produto ofertado</Type>
                <InputType /> */}
                <End>Endereço</End>
                <InputEnd value={endereco} onChangeText={setEndereco} />
                <Descricao>DESCRIÇÃO</Descricao>
                <Desc>Descreva o local</Desc>
                <InputDesc value={descri} onChangeText={setDescri} />
                <Link>Link para encontrar o local</Link>
                <InputLink value={link} onChangeText={setLink} />
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