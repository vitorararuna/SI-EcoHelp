import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, Alert } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import Modal from "react-native-modal";
import api from "../../services/api";
import { SearchContent, Search, List } from './styles';
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import Locais_ from "../../Components/locais";

const DATA = [
    {
        id: '1',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540",
        telefone: "61999696969",
        descricao: "lugar massa demais seloko"
    },
    {
        id: '2',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540",
        telefone: "61999696969",
        descricao: "lugar massa demais seloko"
    },
    {
        id: '3',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540",
        telefone: "61999696969",
        descricao: "lugar massa demais seloko"
    },
    {
        id: '4',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540",
        telefone: "61999696969",
        descricao: "lugar massa demais seloko"
    },
    {
        id: '5',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540",
        telefone: "61999696969",
        descricao: "lugar massa demais seloko"
    },
    {
        id: '6',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540",
        telefone: "61999696969",
        descricao: "lugar massa demais seloko",
        type: "commerce"
    },
];


export default function Locais({ navigation }) {

    const [isModalVisible, setModalVisible] = useState(false);
    const [filter, setFilter_] = useState([]);


    const [allLocs_, setAllLocs_] = useState([])


    async function loadPlaceInfos_() {
        const response = await api.get('place/');
        console.log(response.data)
        setAllLocs_(response.data)
    }

    async function loadPlaceFilter(filter_) {
        const response = await api.get('place/', {
            params: {
                type: filter_,
            }
        });
        console.log(response.data)
        setAllLocs_(response.data)
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    function setFilter(filter_) {
        if (filter_ == "limpar") {
            setFilter_(filter_)
            loadPlaceInfos_()
            toggleModal()
        } else {
            setFilter_(filter_)
            loadPlaceFilter(filter_)
            toggleModal()
        }

    }


    useEffect(() => {
        loadPlaceInfos_()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
                <SearchContent>
                    <TouchableOpacity onPress={toggleModal}>
                        <Icon2 name="options" size={31} color="white" style={styles.icon} />
                    </TouchableOpacity>
                </SearchContent>
            </ImageBackground>
            <List
                data={allLocs_}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Locais_ name={item.name} type={item.type} endereco={item.address} telefone={item.telephone} descricao={item.description} />
                )}
            />
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => setFilter("commerce")}>
                            <Text style={styles.dica}>COMÉRCIO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter("donations")}>
                            <Text style={styles.dsicussao}>DOAÇÕES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter("colect")}>
                            <Text style={styles.pergunta}>COLETA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter("other")}>
                            <Text style={styles.noticia}>OUTROS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter("limpar")}>
                            <Text style={styles.limpar}>LIMPAR</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                    <Button title="voltar" onPress={toggleModal} />
                </View>
            </Modal>
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
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#2EAE60",
        borderRadius: 15,
        padding: 9,
        borderColor: "#fff",
        borderWidth: 2
    },
    icon2: {
        marginRight: 35,
    },
    modal: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        alignContent: "space-around",
        textAlignVertical: "center",
        alignSelf: "center",
        padding: 50
    },
    dica: {
        backgroundColor: "#E7FEE1",
        margin: 15,
        fontSize: 16,
        fontWeight: "bold",
        padding: 10
    },
    dsicussao: {
        backgroundColor: "#F6E1FE",
        margin: 15,
        fontSize: 16,
        fontWeight: "bold",
        padding: 10
    },
    pergunta: {
        backgroundColor: "#FFF2E2",
        margin: 15,
        fontSize: 16,
        fontWeight: "bold",
        padding: 10
    },
    noticia: {
        backgroundColor: "#E1ECFE",
        margin: 15,
        fontSize: 16,
        fontWeight: "bold",
        padding: 10
    },
    limpar: {
        backgroundColor: "#EEF1",
        margin: 15,
        fontSize: 16,
        fontWeight: "bold",
        padding: 10
    },

});