import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { Content, Name, Title, Spam, UserContent, Tipo, UserInfos, IconsContent, PostContent, IconContent } from './styles'
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/SimpleLineIcons"
import Icon3 from "react-native-vector-icons/Fontisto"
import Icon_ from 'react-native-vector-icons/FontAwesome'


export default function Locais_({ navigation }) {
    return (
        <KeyboardAvoidingView>
            <Content>
                <UserContent>
                    {/* <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/49912005?v=4' }} /> */}
                    <IconContent>
                        <Icon_ name="recycle" size={25} style={styles.icon} />
                    </IconContent>
                    <UserInfos>
                        <Name>Inspira Verde</Name>
                        <Tipo>produtos sustentáveis</Tipo>
                    </UserInfos>
                    <IconsContent>
                        <Icon name="tago" size={23} />
                        <Icon2 name="options-vertical" size={22} />
                    </IconsContent>
                </UserContent>
                <PostContent>
                    <Title>Endereço:</Title>
                    <Spam>BL D - loja 47 - Asa Norte, Brasília - DF, 70842-540</Spam>
                </PostContent>
            </Content>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    icon: {
        top: 3
    }

});

