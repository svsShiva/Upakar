import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { loginStrings } from '../../../constants/strings';
import { loginStyles } from './login.styles';

export default function Login(props) {
    return (
        <View style={loginStyles.container} >
            <Text>{loginStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

