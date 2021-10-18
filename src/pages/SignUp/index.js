import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, View, ImageBackground, StyleSheet, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signin } from "../../store/user/user.actions";
import api from "../../services/api";
import { Alert } from 'react-native';
import fundo from '../../assets/fundo.jpeg'
import { Eco, EcoHelp, Help, SignContent, SignSpan, SignText, Userinput, Nameinput, Passinput, JoinText, SignUpText } from './styles'
import { useDispatch, useSelector } from "react-redux";


export default function SignUp({ navigation }) {

    const signed = useSelector(state => state.user.signed);
    dispatch = useDispatch()

    const [name, setName] = useState("")
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    async function handleSubmit() {
        await api.post('user/', {
            first_name: name,
            username: user,
            password: pass
        })
            .then((response) => {
                console.log(response.data.first_name)
                console.log(response.data.username)
                dispatch(signin(response.data.first_name, response.data.username, response.data.id))
                navigation.navigate('Dashboard')
            })
            .catch((error) => {
                console.log(error)
                Alert.alert('Erro', "Usuário já cadastrado ou Dados Incorretos");
            });

        // console.log(`response: ${response}`)
        // if (response.data.length > 1 && response.data[0].username) {
        //     name_ = response.data[0].first_name
        //     username_ = response.data[0].username
        //     id_ = response.data[0].id
        //     dispatch(signin(name_, username_, id_))
        //     navigation.navigate('Dashboard')
        // }
        // else {
        //     console.log(`signed here ${signed}`)
        //     Alert.alert('Erro ao efetuar login', "Usuário Já Cadastrado");
        // }
    }


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
                    <Nameinput value={name} onChangeText={setName} />
                    <Userinput value={user} onChangeText={setUser} />
                    <Passinput value={pass} onChangeText={setPass} />
                    <TouchableOpacity onPress={() => handleSubmit()}>
                        <JoinText>ENTRAR</JoinText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn')}

                    >
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