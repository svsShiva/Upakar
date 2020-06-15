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
import { getFormattedDateString } from '../../../services/date-services';
import imgCoin from '../../../assets/images/bitcoin.png';
import imgDuration from '../../../assets/images/timer.png';
import imgCategory from '../../../assets/images/list.png';
import imgCreatedAt from '../../../assets/images/calendar.png';


export default function HelpCard(props) {
    const onHelpClick = async () => {
        try {
            props.navigation.navigate(props.onBackNavigateScreen)
            props.selectHelp(props.data)
        }
        catch (err) {
            console.warn(err)
        }

    }

    return (
        <TouchableOpacity style={styles.container} onPress={onHelpClick}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.data.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10}}>
                <View style={{}} >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={imgCreatedAt}
                            style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                        <Text style={{ fontSize: 16, margin: 5 }}>
                            {getFormattedDateString(props.data.created_at)}
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={imgCategory}
                            style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                        <Text style={{ fontSize: 16, margin: 5 }}>{props.data.category}</Text>
                    </View>
                </View>
                <View style={{}}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={imgCoin}
                            style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                        <Text style={{ fontSize: 16, margin: 5}}>{props.data.bid_credits + " Credits"}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={imgDuration}
                            style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                        <Text style={{ fontSize: 16, margin: 5 }}>{props.data.help_duration}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}