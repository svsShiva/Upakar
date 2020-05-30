import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView,
    RefreshControl
} from 'react-native';

import { dashboardStrings } from '../../../constants/strings';
import { dashbord } from './dashboard.styles';

export default function Dashboard(props) {
    return (
        <View style={dashbord.container} >
            <Text>{dashboardStrings.WELCOME_MESSAGE}</Text>
            <Text>{props.state.globalReducer.testField}</Text>
            <Text>{props.state.dashboardReducer.isWorking}</Text>

            <TouchableOpacity onPress={()=>props.testAction()}>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    );
}

