import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { myHelpsStrings } from '../../../constants/strings';
import { styles } from './myhelps.styles';

export default function MyHelps(props) {
    return (
        <View style={styles.container} >
            <Text>{myHelpsStrings.WELCOME_MESSAGE}</Text>

            <TouchableOpacity onPress={()=>props.navigation.navigate('MyHelpsDetail')}>
                <Text>go to detail page</Text>
            </TouchableOpacity>
        </View>
    );
}

