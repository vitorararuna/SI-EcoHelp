import React, { cloneElement } from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ceil } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";

export default function Add2({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.text1}>QUAL O TIPO DO LOCAL ?</Text>

            <View style={styles.view1}>
                <TouchableOpacity activeOpacity={.7}>
                    <Text style={[styles.text2, { backgroundColor: "#6bb42d" }]} >
                        <Icon style={styles.icon} name="recycle" size={25} />  PONTO DE COLETA
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7}>
                    <Text style={[styles.text2, { backgroundColor: "#63DBC0" }]} >
                        <Icon style={styles.icon} name="handshake-o" size={25} />  DOAÇÕES
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7}> 
                    <Text style={[styles.text2, { backgroundColor: "#E3F84D" }]} >
                        <Icon2 style={styles.icon} name="store" size={30} />  COMÉRCIO
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7}>
                    <Text style={[styles.text2, { backgroundColor: "#FD9E2E" }]} >
                        <Icon style={styles.icon} name="square" size={25} />  OUTROS
                    </Text>
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
    text1: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 20,
        color: "#6bb42d",
        marginTop: 50
    },
    view1: {
        flex: 1,
        alignItems: "center",
        marginBottom: 17,
        bottom: 150
    },
    text2: {
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        width: 300,
        height: 80,
        textAlign: "left",
        textAlignVertical: "center",
        fontWeight: "900",
        color: "#000",
        fontSize: 15
    },
    containerLogo: {
        justifyContent: "center",
        padding: 4,
        bottom: 150
    },
    icon: {
    }
});