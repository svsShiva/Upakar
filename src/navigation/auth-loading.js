import * as React from 'react';

import AsyncStorage from '@react-native-community/async-storage';

function AuthLoading(props) {
    let isLoggedIn;
    getLoginStatus().then((res) => {
        isLoggedIn = res;
        isLoggedIn != null || isLoggedIn != undefined ?
            props.navigation.navigate("App") :
            props.navigation.navigate("Auth")
    });
    return (
        <>
        </>
    )
}

export default AuthLoading;

getLoginStatus = async () => {
    let isLoggedIn;
    isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    return isLoggedIn
}