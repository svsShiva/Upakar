import { StyleSheet } from 'react-native';

import { colorDefs  } from '../../../constants/colors';

export const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: colorDefs.WHITE
    },
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    sessionName: {
        fontSize: 18,
        color: colorDefs.TEXT_LIGHT,
        paddingVertical: 10
    },
    lables: {
        fontSize: 14,
        color: colorDefs.TEXT_LIGHT,
    },
    texFields: {
        fontSize: 14,
        color: colorDefs.TEXT_LIGHT,
        marginVertical: 5
    },
    scanType: {
        height: 44,
        width: 130,
        marginVertical: 10,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colorDefs.LIGHT_GREEN,
        borderRadius: 25
    },
    gradientLeft: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        borderColor: colorDefs.DARK_GREEN,
    },
    gradientRight: {
        flex: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        borderColor: colorDefs.LIGHT_GREEN
    },
    scanTypeIN: {
        flex: 1,
    },
    scanTypeOUT: {
        flex: 1,
    },
    scanTypeText: {
        fontSize: 16,
        alignSelf: 'center',
        color: colorDefs.LIGHT_GREEN
    },
    uploads: {
        flex: 1,
        flexDirection: 'row'
    },
    uploadsForIn: {
        flex: 1,
    },
    uploadsForOut: {
        flex: 1
    },
    buttonWrapper: {
        marginTop: 20
    },
    button: {
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center'
    },
    buttonText: {
        color: colorDefs.TEXT_WHITE,
        fontSize: 16
    },
    pendingScans: {
        marginTop: 10,
        alignItems: 'center'
    },
    pendingScansText: {
        color: colorDefs.RED_ORANGE,
        fontSize: 16,
    }
});