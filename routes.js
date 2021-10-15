import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from "react-navigation";


import SignIn from './src/pages/SignIn'
import SignUp from './src/pages/SignUp'
import NovoLocal0 from './src/pages/NovoLocal0'
import NovoLocal1 from './src/pages/NovoLocal1'
import NovaPublicacao from './src/pages/NovaPublicacao'
import User from './src/pages/User'
import NovaPostagem from './src/pages/NovaPostagem'
import Comunidade from './src/pages/Comunidade'
import Locais from './src/pages/Locais'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Dashboard = () => {
    return (
        <Drawer.Navigator initialRouteName="Meu Perfil">
            <Drawer.Screen name="Meu Perfil" component={User} />
            <Drawer.Screen name="Nova Postagem" component={NovaPostagem} />
            <Drawer.Screen name="Comunidade" component={Comunidade} />
            <Drawer.Screen name="Locais" component={Locais} />
        </Drawer.Navigator>
    )
}

const Initial = isSigned => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{ headerShown: false }} name="Novo Local0" component={NovoLocal0} />
                <Stack.Screen options={{ headerShown: false }} name="Novo Local1" component={NovoLocal1} />
                <Stack.Screen options={{ headerShown: false }} name="Nova Publicacao" component={NovaPublicacao} />
                <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// export default (isSigned = false) =>
//     createAppContainer(
//         {
//             Sign: Initial(isSigned),
//         },
//     );


export default Initial;