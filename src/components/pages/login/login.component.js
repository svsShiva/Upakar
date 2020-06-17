import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    StatusBar,
    Image,
    Alert
} from 'react-native';

import { loginStrings } from '../../../constants/strings';
import { styles } from './login.styles';
import { appColors, colorDefs } from '../../../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imgLogo from "../../../assets/images/upakar_logo.png"
import AsyncStorage from '@react-native-community/async-storage';
import { getProfileByUserId, getUserById, getUserByEmail } from '../../../services/data-services'
import { profiles } from '../../../data/profiles';

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Login(props) {
    const onRegisterClick = () => {
        props.navigation.navigate("Register")
    }

    const onLogin = async () => {
        props.showLoader();
        await sleep(500);
        let user = getUserByEmail(email);
        if (user) {
            userProfile = getProfileByUserId(user._id);
            props.updateLoggedUser(user);
            props.updateLoggedUserProfile(userProfile);
            AsyncStorage.setItem("isLoggedIn", "true");
            props.hideLoader();
            props.navigation.navigate("App")
        }
        else {
            props.hideLoader();
            Alert.alert(
                'Invalid Credentials',
                'Email or Password is incorrect',
                [
                    { text: 'OK', onPress: () => { } }
                ],
                { cancelable: false }
            );
        }
        props.hideLoader();
    }

    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);

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
                        <Image source={imgLogo} style={{ resizeMode: "contain", height: 180, width: 180, marginTop: 20, }} />
                    </View>
                    <View style={{ flex: 6.8, backgroundColor: "white", paddingTop: 20 }}>
                        <View style={styles.textInputView}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                placeholder="Enter your email"
                                style={styles.textInput}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                placeholder="Enter your password"
                                style={styles.textInput}
                                secureTextEntry={true}
                                onChangeText={setPassword}
                            />
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

