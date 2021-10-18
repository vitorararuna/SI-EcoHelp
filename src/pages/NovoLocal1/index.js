import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../services/api";
import { Content, Title, Descricao, Publicar, Infos, Name, Type, End, Desc, Link, InputName, InputType, InputEnd, InputDesc, InputLink } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

export default function NovoLocal1({ navigation }) {

    const tipoLocal = useSelector(state => state.user.tipo_local);
    const _user_ = useSelector(state => state.user);
    const [nome_local, setNome_local] = useState("")
    const [endereco, setEndereco] = useState("")
    const [descri, setDescri] = useState("")
    const [telefone, setTelefone] = useState("")
    const [_type_, setType] = useState("")

    async function publicar() {
        await api.post('place/', {
            name: nome_local,
            description: descri,
            type: _type_,
            address: endereco,
            telephone: telefone
        })
            .then((response) => {
                navigation.navigate('Meu Perfil')
                // console.log(response.data)
            })
            .catch((error) => {
                Alert.alert('Erro', "Preencha todos os campos do formulário");
            });
    }

    useEffect(() => {
        if (tipoLocal == "Ponto de Coleta") { setType('colect') }
        if (tipoLocal == "Doações") { setType('commerce') }
        if (tipoLocal == "Comércio") { setType('donations') }
        if (tipoLocal == "Outros") { setType('other') }
    }, [])

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
                <Link>Telefone</Link>
                <InputLink value={telefone} onChangeText={setTelefone} />
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