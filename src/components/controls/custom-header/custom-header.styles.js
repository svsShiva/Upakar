import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colorDefs  } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5,
        paddingTop: getStatusBarHeight() + 5 
    },
    linearGradient: {
    },
    headerLeftWrapper: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerLeft: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    backButton: {
        resizeMode: 'contain'
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 22,
        color: colorDefs.WHITE
    },
    hamWrapper: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    hamBurger: {
        width: 25,
        height: 15,
        resizeMode: 'contain'
    }
})
