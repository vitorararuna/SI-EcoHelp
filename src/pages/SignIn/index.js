import React from "react";
import { KeyboardAvoidingView, View, ImageBackground, Image, TouchableOpacity, Text, StyleSheet, } from "react-native";
// import { ScrollView, TextInput } from "react-native-gesture-handler";
import fundo from '../../assets/fundo.jpeg'
import { Eco, EcoHelp, Help, SignContent, SignSpan, SignText, Userinput, Passinput, JoinText, SignUpText } from './styles'

export default function SignIn({ navigation }) {
  return (
    <KeyboardAvoidingView>
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
          <JoinText>ENTRAR</JoinText>
          <TouchableOpacity>
            <SignUpText onPress={() => navigation.navigate('SignUp')}>Criar Conta Gratuita</SignUpText>
          </TouchableOpacity>
        </SignContent>



        {/* <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" autoCorrect={false} onChangeText={() => { }} />
        <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={() => { }} />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnRegisterText} onPress={() => navigation.navigate('SignUp')}>Criar Conta Gratuita</Text>
        </TouchableOpacity>

      </View> */}
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