import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { dashboardStrings } from '../../../constants/strings';
import { styles } from './dashboard.styles';

export default function Dashboard(props) {
    return (
        <View style={styles.container} >
            <Text>{dashboardStrings.WELCOME_MESSAGE}</Text>

            <TouchableOpacity onPress={()=>props.navigation.toggleDrawer()}>
                <Text>Click</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.navigation.navigate('DashboardDetail')}>
                <Text>go to detail page</Text>
            </TouchableOpacity>
        </View>
    );
}

