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
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colorDefs, appColors } from '../../../constants/colors';
import { gradientDimensions } from '../../../constants/styles';
import imgHamBurger from '../../../assets/images/hamburger.png';
import { styles } from './custom-header.styles';

export default function Header(props) {

    var onHamPress = () => {
        props.navigation.openDrawer();
    }

    return (
        <View>
            <LinearGradient
                colors={[appColors.GRADIENT_LEFT, appColors.GRADIENT_RIGHT]}
                style={styles.linearGradient}
                start={gradientDimensions.start}
                end={gradientDimensions.end}
            >
                <StatusBar
                    backgroundColor={colorDefs.TRANSPARENT}
                    barStyle='light-content'
                    translucent={true}
                />
                <SafeAreaView backgroundColor={colorDefs.TRANSPARENT} />
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.hamWrapper}
                        onPress={onHamPress}
                    >
                        <Image
                            source={imgHamBurger}
                            style={styles.hamBurger}
                        />
                    </TouchableOpacity>

                    <View style={styles.titleWrapper}>
                        <Text
                            style={styles.title}
                            ellipsizeMode='tail'
                            numberOfLines={1}
                        >
                            Upakar
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}