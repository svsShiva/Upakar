import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colorDefs  } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5,
        paddingTop: getStatusBarHeight() + 5,
        height: 70
    },
    linearGradient: {
    },
    titleWrapper: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'black'
    },
    title: {
        fontSize: 22,
        color: colorDefs.WHITE
    },
    headerLeftWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'red'
    },
    headerLeft: {
        width: 25,
        height: 15,
        resizeMode: 'contain'
    },
    headerRightWrapper: {
        flex: 1,
        // backgroundColor: 'white'
    }
})
