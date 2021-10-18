import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { Content, Name, Title, Spam, UserContent, Tipo, UserInfos, IconsContent, PostContent, IconContent } from './styles'
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/SimpleLineIcons"
import Icon3 from "react-native-vector-icons/Fontisto"
import Icon_ from 'react-native-vector-icons/FontAwesome'


export default function Locais_({ name, type, endereco }) {
    return (
        <KeyboardAvoidingView>
            <Content>
                <UserContent>
                    <IconContent>
                        {/* fazer verificação do type para alterar icone */}
                        <Icon_ name="recycle" size={25} style={styles.icon} />
                    </IconContent>
                    <UserInfos>
                        <Name>{name}</Name>
                        <Tipo>{type}</Tipo>
                    </UserInfos>
                    <IconsContent>
                        <Icon name="tago" size={23} />
                        <Icon2 name="options-vertical" size={22} />
                    </IconsContent>
                </UserContent>
                <PostContent>
                    <Title>Endereço:</Title>
                    <Spam>{endereco}</Spam>
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

