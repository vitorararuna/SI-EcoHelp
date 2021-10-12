import React, { cloneElement } from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { block } from "react-native-reanimated";
import add1 from '../../assets/add1.png'

export default function Add1({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.text1}>ESCOLHA UMA OPÇÃO</Text>

            <View style={styles.containerLogo}>
                <Image source={add1} />
            </View>

            <View style={styles.view1}>
                <Text style={styles.text2} >ADICIONAR LOCAL</Text>
                <Text style={styles.text2} >FAZER NOVA PUBLICAÇÃO</Text>
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
    text1: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 20,
        color: "#6bb42d",
        marginTop: 100
    },
    view1: {
        flex: 1,
        alignItems: "center",
        marginBottom: 17,
        bottom:80
    },
    text2: {
        padding: 20,
        backgroundColor: "#6bb42d",
        marginBottom: 20,
        borderRadius: 10,
        width: 300,
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
        fontSize: 15
    },
    containerLogo: {
      justifyContent: "center",
      padding: 4,
      bottom: 150
    },
});