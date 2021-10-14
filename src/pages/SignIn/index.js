import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { ScrollView, TextInput } from "react-native-gesture-handler";
import fundo from '../../assets/fundo.jpeg'
import { Eco, EcoHelp, Help, SignContent, SignSpan, SignText, Userinput, Passinput, JoinText, SignUpText } from './styles'

export default function SignIn({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "android" ? "padding" : null}
    >
      <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
        <EcoHelp>
          <Eco>ECO</Eco>
          <Help>HELP</Help>

        </EcoHelp>

        <SignContent>
          <SignText>Login</SignText>
          <SignSpan>Entre com suas credenciais abaixo</SignSpan>
          <Userinput />
          <Passinput />
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <JoinText>ENTRAR</JoinText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <SignUpText>Criar Conta Gratuita</SignUpText>
          </TouchableOpacity>
        </SignContent>

      </ImageBackground>
    </KeyboardAvoidingView >
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