import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

const Drawer = createDrawerNavigator();

export default function EcoHelp() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="SignIn">
            <Drawer.Screen name="SignIn" component={SignIn} />
            <Drawer.Screen name="SignUp" component={SignUp} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}