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
        catch(err) {
            console.warn(err)
        }
        
    }
    
    return (
        <TouchableOpacity style={styles.container} onPress={onHelpClick}>
            <View style={styles.wrapper}>
                <Text>{props.data.title}</Text>
                <Text>{props.data.category}</Text>
                <Text>{props.data.help_duration}</Text>
            </View>
        </TouchableOpacity>
    );
}