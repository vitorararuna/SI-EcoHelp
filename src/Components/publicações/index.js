import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { Content, Name, Title, Spam, Photo, UserContent, User, UserInfos, IconsContent, PostContent, InfosPostContent, Text_, Filter_ } from './styles'
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/SimpleLineIcons"
import Icon3 from "react-native-vector-icons/Fontisto"


export default function Publicacoes({ navigation }) {
    return (
        <KeyboardAvoidingView>
            <Content>
                <UserContent>
                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/49912005?v=4' }} />
                    <UserInfos>
                        <Name>Vitor Araruna</Name>
                        <User>@vitorararuna</User>
                    </UserInfos>
                    <IconsContent>
                        <Icon name="tago" size={23} />
                        <Icon2 name="options-vertical" size={22} />
                    </IconsContent>
                </UserContent>
                <PostContent>
                    <Title>O que vocês fizeram com seus livros didáticos da época de escola ?</Title>
                    <Spam>To cheia de livro didático do ensino fundamental/médio e não tenho ideia do que fazer. Pensei em doar mas já estão desatualizados, não sei se aceitariam. Tentei procurar centros de reciclagem aqui na minha cidade mas todos são de produtos plásticos, etc.</Spam>
                </PostContent>
                <InfosPostContent>
                    <Text_><Icon name="like2" size={23} /> 2</Text_>
                    <Text_><Icon3 name="comment" size={23} /> 3</Text_>
                    <Text_><Icon name="sharealt" size={23} /></Text_>
                    <Filter_><Text>pergunta</Text></Filter_>
                </InfosPostContent>
            </Content>
        </KeyboardAvoidingView>
    )
}

