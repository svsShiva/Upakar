import * as React from 'react';

import AuthNavigation from './auth-navigation'
import AsyncStorage from '@react-native-community/async-storage';

import AppNavigation from './app-navigation'
import AuthLoading from './auth-loading'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SwitchNavigation() {
    return (
        <Stack.Navigator initialRouteName="AuthLoading" headerMode="none">
                <Stack.Screen name="AuthLoading" component={AuthLoading} />
                <Stack.Screen name="App" component={AppNavigation} />
                <Stack.Screen name="Auth" component={AuthNavigation} />
        </Stack.Navigator>
    );
}

export default SwitchNavigation;
