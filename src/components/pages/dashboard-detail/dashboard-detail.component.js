import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { dashboardDetailStrings } from '../../../constants/strings';
import { styles } from './dashboard-detail.styles';
import CustomHeader from '../../controls/custom-header';

export default function DashboardDetail(props) {
    return (
        <View style={styles.container} >
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Help Detail"}></CustomHeader>
            <Text>{dashboardDetailStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

