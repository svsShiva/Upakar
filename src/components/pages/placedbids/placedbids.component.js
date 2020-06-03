import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { placedBidsStrings } from '../../../constants/strings';
import { styles } from './placedbids.styles';
import CustomHeader from '../../controls/custom-header';

export default function PlacedBids(props) {
    return (
        <View style={styles.container} >
            <CustomHeader navigation={props.navigation}></CustomHeader>
            <Text>{placedBidsStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

