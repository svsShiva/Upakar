import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { loginStrings } from '../../../constants/strings';
import { styles } from './login.styles';

export default function Login(props) {
    return (
        <View style={styles.container} >
            <Text>{loginStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

