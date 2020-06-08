import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colorDefs, appColors } from '../../../constants/colors';
import { styles } from './help-card.styles';

export default function HelpCard(props) {
    var onHelpClick = async () => {
        try {
            props.selectHelp(props.data)
            props.navigation.navigate('DashboardDetail')
        }
        catch (err) {
            console.warn(err)
        }

    }

    return (
        <TouchableOpacity style={styles.container} onPress={onHelpClick}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{props.data.title}</Text>
                <View style={styles.box}>
                    <View style={styles.creditContainer}>
                        <Text style={styles.lblCredit}>{props.data.bid_credits}</Text>
                        <Text style={styles.lable}>{"Base Credits"}</Text>
                    </View>
                    <View style={styles.expiryContainer}>
                        <Text style={styles.lblExpiration}>
                            {new Date().toDateString()}
                        </Text>
                        <Text style={styles.lable}>{"Ends by"}</Text>
                    </View>
                    <View style={styles.durationContainer}>
                        <Text style={styles.lblduration}>{props.data.help_duration}</Text>
                        <Text style={styles.lable}>{"Duration"}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}