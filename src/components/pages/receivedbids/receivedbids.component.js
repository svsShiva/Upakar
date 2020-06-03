import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { receivedBidsStrings } from '../../../constants/strings';
import { styles } from './receivedbids.styles';
import CustomHeader from '../../controls/custom-header';

export default function ReceivedBids(props) {
    return (
        <View style={styles.container} >
            <CustomHeader navigation={props.navigation}></CustomHeader>
            <Text>{receivedBidsStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

