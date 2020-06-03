import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';

import { colorDefs, appColors } from '../../../constants/colors';
import { gradientDimensions } from '../../../constants/styles';
import { styles } from './custom-drawer.styles';

function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={gradientDimensions.start} end={gradientDimensions.end}
                colors={[appColors.GRADIENT_LEFT, appColors.GRADIENT_RIGHT]}
                style={styles.header}
            >
                <StatusBar
                    backgroundColor={colorDefs.TRANSPARENT}
                    barStyle='light-content'
                    translucent={true}
                />
                <Text style={styles.headerTitle}>Upakar</Text>
            </LinearGradient>
            <DrawerContentScrollView {...props} style={styles.drawer}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}

export default CustomDrawer;