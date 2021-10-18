import React, { useState } from "react";
import { Button, KeyboardAvoidingView, TouchableOpacity, Text, StyleSheet, View, SafeAreaView, Alert } from "react-native";
import { Content, Name, Title, Spam, Photo, UserContent, User, UserInfos, IconsContent, PostContent, InfosPostContent, Text_, Filter_, List_coments, IputComent, Coment, NewComent } from './styles'
import Modal from "react-native-modal";
import api from "../../services/api";
import Coments from "../Coments";
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/SimpleLineIcons"
import Icon3 from "react-native-vector-icons/Fontisto"
import vitin from '../../assets/vitin.jpeg'
import { useSelector } from "react-redux";


export default function Publicacoes({ id, photo, name, user, title, spam, likes, coments, type }) {

    const _user_ = useSelector(state => state.user);
    const [isModalVisible, setModalVisible] = useState(false);
    const [coment, setComent] = useState("")

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    async function publicar() {
        console.log(_user_.user_id, coment, id)
        await api.post('comment/', {
            user: _user_.user_id,
            body: coment,
            publication: id
        })
            .then((response) => {
                // navigation.navigate('Comunidade')
                console.log(response.data)
            })
            .catch((error) => {
                Alert.alert('Erro', "Comentário Inválido");
            });
    }

    return (
        <KeyboardAvoidingView>
            <Content>
                <UserContent>
                    <Photo source={photo} />
                    <UserInfos>
                        <Name>{name}</Name>
                        <User>{user}</User>
                    </UserInfos>
                    <IconsContent>
                        <Icon name="tago" size={23} />
                        <Icon2 name="options-vertical" size={22} />
                    </IconsContent>
                </UserContent>
                <PostContent>
                    <Title>{title}</Title>
                    <Spam>{spam}</Spam>
                </PostContent>
                <InfosPostContent>
                    <TouchableOpacity onPress={() => console.log(coments)}>
                        <Text_><Icon name="like2" size={23} />{likes.length}</Text_>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text_><Icon3 name="comment" size={23} />{coments.length}</Text_>
                    </TouchableOpacity>
                    {type == "hint" && <Filter_ style={styles.dica}><Text>dica</Text></Filter_>}
                    {type == "discussion" && <Filter_ style={styles.discussao}><Text>discussão</Text></Filter_>}
                    {type == "notícia" && <Filter_ style={styles.noticia}><Text>notícia</Text></Filter_>}
                    {type == "question" && <Filter_ style={styles.pergunta}><Text>pergunta</Text></Filter_>}

                </InfosPostContent>
            </Content>
            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <List_coments
                            data={coments}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({ item }) => (
                                <Coments name={item.user.first_name} photo={vitin} coment={item.body} />
                            )}
                        />
                        <NewComent>
                            <Coment>Deixe aqui seu comentário</Coment>
                            <IputComent value={coment} onChangeText={setComent} />
                            <TouchableOpacity style={styles.coment} onPress={() => publicar()}>
                                <Text style={styles.text} >PUBLICAR</Text>
                            </TouchableOpacity>
                        </NewComent>
                    </SafeAreaView>
                    <Button title="voltar" onPress={toggleModal} />
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    text: {
        alignSelf: "center",
        fontSize: 15,
        color: "#2EAE01",
        fontWeight: "bold"
    },
    dica: {
        borderWidth: 3,
        borderColor: "#E7FEE1",
        backgroundColor: "#E7FEE1",
        fontWeight: "bold"
    },
    discussao: {
        borderWidth: 3,
        borderColor: "#F6E1FE",
        backgroundColor: "#F6E1FE",
        fontWeight: "bold"
    },
    noticia: {
        borderWidth: 3,
        borderColor: "#E1ECFE",
        backgroundColor: "#E1ECFE",
        fontWeight: "bold"
    },
    pergunta: {
        borderWidth: 3,
        borderColor: "#FFF2E2",
        backgroundColor: "#FFF2E2",
        fontWeight: "bold"
    }
});


