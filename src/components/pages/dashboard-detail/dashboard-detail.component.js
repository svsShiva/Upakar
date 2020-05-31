import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { dashboardDetailStrings } from '../../../constants/strings';
import { styles } from './dashboard-detail.styles';

export default function DashboardDetail(props) {
    return (
        <View style={styles.container} >
            <Text>{dashboardDetailStrings.WELCOME_MESSAGE}</Text>
        </View>
    );
}

