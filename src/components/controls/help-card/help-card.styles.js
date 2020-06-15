import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colorDefs } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colorDefs.WHITE,
        padding: 10,
        borderRadius: 10,
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowOpacity: 0.2,
        shadowColor: colorDefs.LIGHT_GREY,
        shadowRadius: 2,
        marginVertical: 5,
        elevation: 2,
        marginHorizontal: 5
    }
})
