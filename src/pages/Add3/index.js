import React, { cloneElement } from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ceil } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Ionicons"

export default function Add3({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.text1}>QUAL O TIPO DO LOCAL ?</Text>

            <View style={styles.view1}>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon3 style={styles.icon} name="ios-newspaper-outline" size={31} />
                    </View>
                    <Text>Papel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="bottle-wine" size={31} />
                    </View>
                    <Text>Latinha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="bottle-soda-classic-outline" size={31} />
                    </View>
                    <Text>Pet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="food-fork-drink" size={31} />
                    </View>
                    <Text>Plástico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="mirror" size={31} />
                    </View>
                    <Text>Vidro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="tools" size={31} />
                    </View>
                    <Text>Metal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="oil" size={31} />
                    </View>
                    <Text>óleo Cozinha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="medical-bag" size={31} />
                    </View>
                    <Text>Medicamento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="battery-medium" size={31} />
                    </View>
                    <Text>Pilhas/Baterias</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="microsoft-xbox-controller-battery-empty" size={31} />
                    </View>
                    <Text>Eletrônicos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="lightbulb-outline" size={31} />
                    </View>
                    <Text>Lâmpadas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="car-sports" size={31} />
                    </View>
                    <Text>Pneus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="table-furniture" size={31} />
                    </View>
                    <Text>Móveis</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="cow" size={31} />
                    </View>
                    <Text>Tetra Pak</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="tshirt-crew-outline" size={31} />
                    </View>
                    <Text>Tecido</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="delete-alert-outline" size={31} />
                    </View>
                    <Text>Entulho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.to} activeOpacity={.7}>
                    <View style={styles.text2} >
                        <Icon2 style={styles.icon} name="delete" size={31} />
                    </View>
                    <Text>Outros</Text>
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
        // marginTop: 20
    },
    view1: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bottom: 290,
        flexWrap: "wrap"
    },
    to: {
        width: 90,
        margin: 8,
        alignItems: "center"
    },
    text2: {
        padding: 22,
        backgroundColor: "#8CD500",
        borderRadius: 70,
        fontSize: 15,
        alignItems: "center",
        fontWeight: "900",
        color: "#000",
        width:75,
        height:75   
    },
    icon: {
    }
});