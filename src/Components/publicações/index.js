import React, { useState } from "react";
import { Button, KeyboardAvoidingView, TouchableOpacity, Text, StyleSheet, View, SafeAreaView } from "react-native";
import { Content, Name, Title, Spam, Photo, UserContent, User, UserInfos, IconsContent, PostContent, InfosPostContent, Text_, Filter_, List_coments, IputComent, Coment, NewComent } from './styles'
import Modal from "react-native-modal";
import Coments from "../Coments";
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/SimpleLineIcons"
import Icon3 from "react-native-vector-icons/Fontisto"
import vitin from '../../assets/vitin.jpeg'

const DATA = [
    {
        id: '1',
        nome: "@vitorararuna",
        photo: vitin,
        coment: "COmentário para esse post é que alsobasovubasouvhb  alsejcyasuy cesuybcaeuyc caieyiasuyev caiseuyvaieycvayt caeuyvciaysetcviyaset iasucvieystcvesiy aso ebaso uyec aosebouaycbas aseyc osauycv asuycvaseuycv oasuycvasoeuyc oasueycaoeucv",
    },
    {
        id: '2',
        nome: "@vitorararuna",
        photo: vitin,
        coment: "COmentário para esse post é que alsobasovubasouvhb  alsejcyasuy cesuybcaeuyc caieyiasuyev caiseuyvaieycvayt caeuyvciaysetcviyaset iasucvieystcvesiy aso ebaso uyec aosebouaycbas aseyc osauycv asuycvaseuycv oasuycvasoeuyc oasueycaoeucv",
    },
    {
        id: '3',
        nome: "@vitorararuna",
        photo: vitin,
        coment: "COmentário para esse post é que alsobasovubasouvhb  alsejcyasuy cesuybcaeuyc caieyiasuyev caiseuyvaieycvayt caeuyvciaysetcviyaset iasucvieystcvesiy aso ebaso uyec aosebouaycbas aseyc osauycv asuycvaseuycv oasuycvasoeuyc oasueycaoeucv",
    },
    {
        id: '4',
        nome: "@vitorararuna",
        photo: vitin,
        coment: "COmentário para esse post é que alsobasovubasouvhb  alsejcyasuy cesuybcaeuyc caieyiasuyev caiseuyvaieycvayt caeuyvciaysetcviyaset iasucvieystcvesiy aso ebaso uyec aosebouaycbas aseyc osauycv asuycvaseuycv oasuycvasoeuyc oasueycaoeucv",
    },
    {
        id: '5',
        nome: "@vitorararuna",
        photo: vitin,
        coment: "COmentário para esse post é que alsobasovubasouvhb  alsejcyasuy cesuybcaeuyc caieyiasuyev caiseuyvaieycvayt caeuyvciaysetcviyaset iasucvieystcvesiy aso ebaso uyec aosebouaycbas aseyc osauycv asuycvaseuycv oasuycvasoeuyc oasueycaoeucv",
    },
    {
        id: '6',
        nome: "@vitorararuna",
        photo: vitin,
        coment: "COmentário para esse post é que alsobasovubasouvhb  alsejcyasuy cesuybcaeuyc caieyiasuyev caiseuyvaieycvayt caeuyvciaysetcviyaset iasucvieystcvesiy aso ebaso uyec aosebouaycbas aseyc osauycv asuycvaseuycv oasuycvasoeuyc oasueycaoeucv",
    },
];

export default function Publicacoes({ photo, name, user, title, spam, likes, coments }) {

    const [isModalVisible, setModalVisible] = useState(false);
    const [coment, setComent] = useState("")

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    function publicar() {
        console.log(coment)
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
                    <TouchableOpacity>
                        <Text_><Icon name="like2" size={23} />{likes}</Text_>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text_><Icon3 name="comment" size={23} />{coments}</Text_>
                    </TouchableOpacity>
                    <Text_><Icon name="sharealt" size={23} /></Text_>
                    <Filter_><Text>pergunta</Text></Filter_>
                </InfosPostContent>
            </Content>
            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <List_coments
                            data={DATA}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({ item }) => (
                                <Coments name={item.nome} photo={item.photo} coment={item.coment} />
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
    coment: {
        // marginBottom: 15,
    }
});


