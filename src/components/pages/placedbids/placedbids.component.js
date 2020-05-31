import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { placedBidsStrings } from '../../../constants/strings';
import { styles } from './placedbids.styles';

export default function PlacedBids(props) {
    return (
        <View style={styles.container} >
            <Text>{placedBidsStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

