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
import imgLeftArrow from '../../../assets/images/left-arrow.png';
import { styles } from './custom-header.styles';

export default function CustomHeader(props) {

    var onHamPress = () => {
        props.navigation.openDrawer();
    }

    var onGoBack = () => {
        props.navigation.goBack();
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
                    {
                        props.showBackButton ?
                            <TouchableOpacity
                                style={styles.headerLeftWrapper}
                                onPress={onGoBack}
                            >
                                <Image
                                    source={imgLeftArrow}
                                    style={styles.headerLeft}
                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                style={styles.headerLeftWrapper}
                                onPress={onHamPress}
                            >
                                <Image
                                    source={imgHamBurger}
                                    style={styles.headerLeft}
                                />
                            </TouchableOpacity>
                    }


                    <View style={styles.titleWrapper}>
                        <Text
                            style={styles.title}
                            ellipsizeMode='tail'
                            numberOfLines={1}
                        >
                            {props.title}
                        </Text>
                    </View>

                    <View style={styles.headerRightWrapper}></View>
                </View>
            </LinearGradient>
        </View>
    );
}