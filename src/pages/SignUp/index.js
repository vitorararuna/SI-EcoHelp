import React from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import logo from '../../assets/logo3.png'

export default function SignUp({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image source={logo} />
            </View>

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Email" autoCorrect={false} onChangeText={() => { }} />
                <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={() => { }} />
                <TextInput style={styles.input} placeholder="Confirmar Senha" autoCorrect={false} onChangeText={() => { }} />

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.btnSubmitText}>Criar Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.btnRegisterText} onPress={() => navigation.navigate('SignIn')}>Já tenho uma conta</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff5"
    },
    containerLogo: {
        flex: 1,
        justifyContent: "center",
        fontSize: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: '90%',
        paddingBottom: 90
    },
    input: {
        backgroundColor: "#fff",
        borderColor: "#6bb42d",
        borderWidth: 1.3,
        width: '90%',
        marginBottom: 15,
        color: "#222",
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    btnSubmit: {
        backgroundColor: "#6bb42d",
        width: "90%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7
    },
    btnSubmitText: {
        color: "#fff",
        fontSize: 18
    },
    btnRegister: {
        marginTop: 10
    },
    btnRegisterText: {
        color: "#6bb42d"
    }
});