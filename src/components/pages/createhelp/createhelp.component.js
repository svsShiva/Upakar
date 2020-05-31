import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { createHelpStrings } from '../../../constants/strings';
import { styles } from './createhelp.styles';

export default function CreateHelp(props) {
    return (
        <View style={styles.container} >
            <Text>{createHelpStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

