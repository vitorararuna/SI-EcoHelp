import React, { useState, useEffect } from "react";
import { View, ImageBackground, StyleSheet, Text, } from "react-native";
import fundo from '../../assets/fundo.jpeg'
import { Photo, UserLogin, UserName } from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Publish from "../Publish_";
import api from '../../services/api';
import user_image from '../../assets/user_image.jpeg';
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from "react-native-gesture-handler";
import { signout } from "../../store/user/user.actions";
import { useDispatch, useSelector } from "react-redux";


const Tab = createMaterialTopTabNavigator();

// const user_infos = {
//     nome: 'Vitor Araruna',
//     user: '@vitorararuna',
//     foto: vitin
// }

export default function User({ navigation }) {

    const _user_ = useSelector(state => state.user);
    const dispatch = useDispatch()
    const [userInfos, setUserIfos] = useState({})
    const [userPublishes, setUserPublishes] = ([]);

    async function loadUserInfos() {
        _user_infos_ = {
            nome: _user_.name,
            username: _user_.username,
            foto: user_image
        }
        await setUserIfos(_user_infos_)
    }

    async function _signout_() {
        dispatch(signout())
        navigation.navigate('SignIn')
    }

    useEffect(() => {
        loadUserInfos()
        // loadPublishesUser()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
                <Photo source={userInfos.foto} />
                <UserName>{userInfos.nome} </UserName>
                <UserLogin>{`@${userInfos.username}`}</UserLogin>
                <TouchableOpacity onPress={() => _signout_()}>
                    <Icon name="logout" size={30} style={styles.icon} />
                </TouchableOpacity>
            </ImageBackground>
            <Tab.Navigator
                initialRouteName="Feed"
                style={styles.tab}
                screenOptions={{
                    tabBarActiveTintColor: '#000',
                    tabBarLabelStyle: { fontSize: 17 },
                    tabBarStyle: { backgroundColor: '#fff0' },
                }}
            >
                <Tab.Screen
                    name="Publicacoes"
                    component={Publish}
                    options={{ tabBarLabel: 'Publicacoes' }}
                />
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        width: 450,
        height: 100,
    },
    tab: {
        // position: "relative",
        flex: 3,
    },
    icon: {
        // flex: 1,
        color: "#fff",
        left: 390,
        marginBottom: 25,
    }

});