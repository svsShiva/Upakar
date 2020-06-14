import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';

import { colorDefs, appColors } from '../../../constants/colors';
import { gradientDimensions } from '../../../constants/styles';
import { styles } from './custom-drawer.styles';
import imgProfilePic from '../../../assets/images/profile_pic.png'
import AsyncStorage from '@react-native-community/async-storage';

function CustomDrawer(props) {
    const onSignOut = () => {
        AsyncStorage.removeItem("isLoggedIn");
        props.navigation.navigate("Auth")
    }
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
                <View style={styles.profileContainer}>
                    <TouchableOpacity>
                        <Image
                            source={imgProfilePic}
                            style={styles.profileImage}
                        />
                        <Text style={styles.username}>Shiva Siripurapu</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <DrawerContentScrollView {...props} style={styles.drawer}>
                <DrawerItemList {...props} />
                <TouchableOpacity onPress={onSignOut} style={{marginHorizontal: 10, marginLeft: 18, paddingVertical: 10,}}>
                    <Text style={{fontSize: 13,color: appColors.TEXT_SEMI }}>Sign out</Text>
                </TouchableOpacity>
            </DrawerContentScrollView>
        </View>
    );
}

export default CustomDrawer;