import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { dashboardDetailStrings } from '../../../constants/strings';
import { styles } from './dashboard-detail.styles';
import CustomHeader from '../../controls/custom-header';
import { gradientDimensions } from '../../../constants/styles';
import { colorDefs, appColors } from '../../../constants/colors';

export default function DashboardDetail(props) {
    return (
        <View style={styles.outerContainer}>
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Help Detail"}></CustomHeader>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.sessionName}>
                        <Text>{props.state.dashboardReducer.selectedHelp.title}</Text>
                    </Text>
                    <Text style={styles.lables}>
                        {"Category"}
                    </Text>
                    <Text style={styles.texFields}>
                        {props.state.dashboardReducer.selectedHelp.category}
                    </Text>
                    <Text style={styles.lables}>
                        {"Duration"}
                    </Text>
                    <Text style={styles.texFields}>
                        {props.state.dashboardReducer.selectedHelp.help_duration}
                    </Text>
                    <TouchableOpacity style={styles.buttonWrapper}>
                        <LinearGradient
                            start={gradientDimensions.start} end={gradientDimensions.end}
                            colors={[appColors.GRADIENT_LEFT, appColors.GRADIENT_RIGHT]}
                            style={styles.button}>
                            <Text
                                style={styles.buttonText}
                            >{"Raise a Bid"}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <SafeAreaView />
            </ScrollView>
        </View>
    );
}

