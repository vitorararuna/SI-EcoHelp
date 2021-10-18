import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text, Button } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import api from "../../services/api";
import { SearchContent, Search, List } from './styles'
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import vitin from '../../assets/vitin.jpeg';
import Publicacoes from "../../Components/publicações";

export default function Comunidade({ navigation }) {

    const [isModalVisible, setModalVisible] = useState(false);
    const [filter, setFilter_] = useState([]);

    const [allPublishes_, setAllPublishes_] = useState([]);

    async function loadPublishes() {
        const response = await api.get('publication/');
        console.log(response.data)
        setAllPublishes_(response.data)
        // const response = await api.get('user');
        // setUserIfos(response.data);
    }

    async function loadPublishesFilter(filter_) {
        const response = await api.get('publication/', {
            params: {
                type: filter_,
            }
        });
        console.log(response.data)
        setAllPublishes_(response.data)
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    function setFilter(filter_) {
        if (filter_ == "limpar") {
            setFilter_(filter_)
            loadPublishes()
            toggleModal()
        } else {
            setFilter_(filter_)
            loadPublishesFilter(filter_)
            toggleModal()
        }

    }

    useEffect(() => {
        loadPublishes()
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
            {
                <List
                    data={allPublishes_}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Publicacoes
                            photo={vitin}
                            name={item.user__first_name}
                            user={item.user__username}
                            title={item.title}
                            spam={item.body}
                            likes={item.upvotes}
                            coments={item.comments}
                            type={item.type}
                            id={item.id}
                        />
                    )}
                />
            }
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => setFilter("hint")}>
                            <Text style={styles.dica}>DICA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter("discussion")}>
                            <Text style={styles.dsicussao}>DISCUSSÃO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter("question")}>
                            <Text style={styles.pergunta}>PERGUNTA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter("notícia")}>
                            <Text style={styles.noticia}>NOTÍCIA</Text>
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