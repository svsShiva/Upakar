import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colorDefs } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorDefs.WHITE,
    },
    header: {
        height: 150
    },
    headerTitle: {
        fontSize: 14,
        color: colorDefs.WHITE,
        paddingVertical: 15,
        paddingLeft: 25,
        paddingTop: getStatusBarHeight() + 15
    },
    drawer: {
        flex: 3
    }
});
