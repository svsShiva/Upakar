import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { receivedBidsStrings } from '../../../constants/strings';
import { styles } from './receivedbids.styles';

export default function ReceivedBids(props) {
    return (
        <View style={styles.container} >
            <Text>{receivedBidsStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

