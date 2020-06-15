import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colorDefs } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorDefs.WHITE,
    },
    header: {
        height: 180
    },
    profileContainer: {
        fontSize: 14,
        color: colorDefs.WHITE,
        paddingVertical: 15,
        paddingLeft: 25,
        paddingTop: getStatusBarHeight() + 15
    },
    profileImage: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        alignItems: 'flex-start',
        borderRadius:40,
    },
    username: {
        color: colorDefs.WHITE,
        fontSize: 18,
        marginTop: 15,
        fontWeight: 'bold'
    },
    drawer: {
        flex: 3
    }
});
