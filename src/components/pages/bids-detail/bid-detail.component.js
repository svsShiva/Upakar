import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { bidDetailStrings } from '../../../constants/strings';
import { styles } from './bid-detail.styles';
import CustomHeader from '../../controls/custom-header';

export default function BidsDetails(props) {
    return (
        <View style={styles.container} >
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Bid Detail"}></CustomHeader>
            <Text>{bidDetailStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

