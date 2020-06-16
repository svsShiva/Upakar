import { StyleSheet } from 'react-native';

import { appColors, colorDefs } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.SEMI_TRANSPARENT
    },
    loader: {
        width: 100,
        height: 100,
    }
})