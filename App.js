import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from './src/pages/SignIn'
import SignUp from './src/pages/SignUp'
import Add1 from './src/pages/Add1';
import Add2 from './src/pages/Add2';
import Add3 from './src/pages/Add3';
import User from './src/pages/User';
import Comunidade from './src/pages/Comunidade';
import Locais from './src/pages/Locais';
import NewPublish from './src/pages/newPublish';
import NewLocal from './src/pages/NewLocal';
// import Contato from './src/pages/Contato'



const Drawer = createDrawerNavigator();

export default function EcoHelp() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="SignIn">
                <Drawer.Screen name="SignIn" component={SignIn} />
                <Drawer.Screen name="SignUp" component={SignUp} />
                <Drawer.Screen name="Add1" component={Add1} />
                <Drawer.Screen name="Add2" component={Add2} />
                <Drawer.Screen name="Add3" component={Add3} />
                <Drawer.Screen name="Meu Perfil" component={User} />
                <Drawer.Screen name="Comunidade" component={Comunidade} />
                <Drawer.Screen name="Locais" component={Locais} />
                <Drawer.Screen name="New Publish" component={NewPublish} />
                <Drawer.Screen name="New Local" component={NewLocal} />

                {/* <Drawer.Screen name="Contato" component={Contato} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}