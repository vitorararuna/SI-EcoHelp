import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, Text, StyleSheet, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { ScrollView, TextInput } from "react-native-gesture-handler";
import fundo from '../../assets/fundo.jpeg'
import { Eco, EcoHelp, Help, SignContent, SignSpan, SignText, Userinput, Passinput, JoinText, SignUpText, Confirminput } from './styles'

export default function SignUp({ navigation }) {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
        >
            <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
                <EcoHelp>
                    <Eco>ECO</Eco>
                    <Help>HELP</Help>

                </EcoHelp>

                <SignContent>
                    <SignText>SignUp</SignText>
                    <SignSpan>Escolha suas credenciais abaixo</SignSpan>
                    <Userinput />
                    <Passinput />
                    <Confirminput />
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                        <JoinText>ENTRAR</JoinText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <SignUpText >Já tenho uma conta</SignUpText>
                    </TouchableOpacity>
                </SignContent>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        width: 450,
        height: 812,
    },
});