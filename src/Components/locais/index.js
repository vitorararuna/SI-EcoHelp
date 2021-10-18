import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { Content, Name, Title, Spam, UserContent, Tipo, UserInfos, IconsContent, PostContent, IconContent } from './styles'
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/SimpleLineIcons"
import Icon3 from "react-native-vector-icons/MaterialIcons"
import Icon_ from 'react-native-vector-icons/FontAwesome'


export default function Locais_({ name, type, endereco, telefone, descricao }) {
    return (
        <KeyboardAvoidingView>
            <Content>
                <UserContent>
                    <IconContent>
                        {/* fazer verificação do type para alterar icone */}
                        {type == 'colect' && <Icon_ name="recycle" size={25} style={styles.icon} />}
                        {type == 'commerce' && <Icon3 name="store" size={25} style={styles.icon} />}
                        {type == 'donations' && <Icon_ name="handshake-o" size={25} style={styles.icon} />}
                        {type == 'other' && <Icon_ name="square" size={25} style={styles.icon} />}
                    </IconContent>
                    <UserInfos>
                        <Name>{name}</Name>
                        {type == 'colect' && <Tipo>coleta</Tipo>}
                        {type == 'commerce' && <Tipo>comércio</Tipo>}
                        {type == 'donations' && <Tipo>doações</Tipo>}
                        {type == 'other' && <Tipo>outros</Tipo>}
                    </UserInfos>
                    <IconsContent>
                        <Icon name="tago" size={23} />
                        <Icon2 name="options-vertical" size={22} />
                    </IconsContent>
                </UserContent>
                <PostContent>
                    <Title>Endereço:</Title>
                    <Spam>{endereco}</Spam>
                    <Title>Telefone:</Title>
                    <Spam>{telefone}</Spam>
                    <Title>Descrição:</Title>
                    <Spam>{descricao}</Spam>

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

