import React, { useState } from "react";
import { KeyboardAvoidingView, View, ImageBackground, TouchableOpacity, StyleSheet, } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import { Eco, EcoHelp, Help, SignContent, SignSpan, SignText, Userinput, Passinput, JoinText, SignUpText } from './styles'
import { Alert } from 'react-native';
import api from '../../services/api';
import { signin } from '../../store/user/user.actions'
import { useDispatch, useSelector } from "react-redux";

export default function SignIn({ navigation }) {

  const dispatch = useDispatch()
  const signed = useSelector(state => state.user.signed);

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  async function handleSubmit() {
    const response = await api.get('user/', {
      params: {
        username: user,
        password: pass
      }
    });
    if (response.data.length > 0 && response.data[0].username) {
      name_ = response.data[0].first_name
      username_ = response.data[0].username
      dispatch(signin(name_, username_))
      navigation.navigate('Dashboard')
    }
    else {
      console.log(`signed here ${signed}`)
      Alert.alert('Erro ao efetuar login', "Verifique suas credenciais");
    }
  }


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
          <Userinput value={user} onChangeText={setUser} />
          <Passinput value={pass} onChangeText={setPass} />
          <TouchableOpacity onPress={() => handleSubmit()}>
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