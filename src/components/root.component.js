import React from 'react';

import Navigation from '../navigation/index';
import CustomLoader from '../components/controls/custom-loader';
import { View, StyleSheet } from 'react-native';

export default function Root() {
    return (
        <View style={styles.container}>
            <Navigation />
            <CustomLoader />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})