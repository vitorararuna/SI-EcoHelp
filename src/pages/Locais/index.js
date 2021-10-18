import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, } from "react-native";
import fundo from '../../assets/fundo.jpeg'
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
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540"
    },
    {
        id: '2',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540"
    },
    {
        id: '3',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540"
    },
    {
        id: '4',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540"
    },
    {
        id: '5',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540"
    },
    {
        id: '6',
        nome: "Inspira Verde",
        tipo: "produtos sustentáveis",
        endereco: "BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540"
    },
];


export default function Locais({ navigation }) {

    const [allLocs, setAllLocs] = useState({})

    async function loadUserInfos() {
        // const response = await api.get('user');
        // setUserIfos(response.data);
        setAllLocs(DATA)
    }

    useEffect(() => {
        loadUserInfos()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
                <SearchContent>
                    <Icon name="search1" size={31} color="white" style={styles.icon2} />
                    <Search />
                    <Icon2 name="options" size={31} color="white" style={styles.icon} />
                </SearchContent>
            </ImageBackground>
            <List
                data={allLocs}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Locais_ name={item.nome} type={item.tipo} endereco={item.endereco}/>
                )}
            />
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