import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { Content, Name, Spam, UserContent, UserInfos, IconsContent, PostContent, IconContent, Photo } from './style'

export default function Coments({ photo, name, coment }) {
    return (
        <KeyboardAvoidingView>
            <Content>
                <UserContent>
                    <IconContent>
                        <Photo source={photo} />
                    </IconContent>
                    <UserInfos>
                        <Name>{name}</Name>
                    </UserInfos>
                </UserContent>
                <PostContent>
                    <Spam>{coment}</Spam>
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

