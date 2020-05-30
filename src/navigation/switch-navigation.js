import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './auth-navigation'
import AppNavigation from './app-navigation'

const Stack = createStackNavigator();

function SwitchNavigation() {
    var isLoggedIn = true;
    return (
        <>
            {isLoggedIn ? (
                <AppNavigation />
            ) : (
                    <AuthNavigation />
                )}
        </>
    );
}

export default SwitchNavigation;