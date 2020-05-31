import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { myHelpsDetailStrings } from '../../../constants/strings';
import { styles } from './myhelps-detail.styles';

export default function MyHelpsDetail(props) {
    return (
        <View style={styles.container} >
            <Text>{myHelpsDetailStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

