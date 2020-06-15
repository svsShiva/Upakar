import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    StatusBar,
    Image
} from 'react-native';

import { loginStrings } from '../../../constants/strings';
import { styles } from './login.styles';
import { appColors, colorDefs } from '../../../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imgLogo from "../../../assets/images/upakar_logo.png"
import AsyncStorage from '@react-native-community/async-storage';

export default function Login(props) {
    const onRegisterClick = () => {
        props.navigation.navigate("Register")
    }
    const onLogin = () => {
        AsyncStorage.setItem("isLoggedIn","true");
    props.navigation.navigate("App")
    }
    return (
        <>
            <StatusBar
                backgroundColor={colorDefs.TRANSPARENT}
                barStyle='light-content'
                translucent={true}
            />
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}>
                <View style={styles.container} >
                    <View style={{ flex: 3.2, backgroundColor: appColors.GRADIENT_LEFT, justifyContent: "center", alignItems: "center" }}>
                        <Image source={imgLogo} style={{ resizeMode: "contain", height: 180, width: 180, marginTop:20, }} />
                    </View>
                    <View style={{ flex: 6.8, backgroundColor: "white", paddingTop: 20 }}>
                        <View style={styles.textInputView}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                placeholder="Enter your email"
                                style={styles.textInput}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                placeholder="Enter your password"
                                style={styles.textInput} />
                        </View>
                        <TouchableOpacity onPress={onLogin} style={{ marginHorizontal: 20, marginVertical: 5, alignItems: "center", borderRadius: 20, backgroundColor: appColors.GRADIENT_LEFT, marginTop: 25 }}>
                            <Text style={{ padding: 10, color: "white", fontSize: 18 }}>LOGIN</Text>
                        </TouchableOpacity>
                        <View style={{ marginVertical: 10, flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
                            <Text style={{ color: "black", fontSize: 16, }}>Dont have an acoount? </Text>
                            <TouchableOpacity onPress={onRegisterClick}>
                                <Text style={{ fontSize: 16, color: appColors.GRADIENT_LEFT }}>Register Here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </>
    );
}

