import { StyleSheet } from 'react-native';

import { colorDefs, appColors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.BG,
        flex: 1,
    },
    pickerContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
        marginTop: 12,
    },
    pickerView: {
        flex: 1,
        padding: 10,
        backgroundColor: appColors.TEXT_WHITE,
        borderRadius: 10,
        marginHorizontal: 10,
        fontSize: 16,
    },
    label: {
        color: appColors.TEXT_DARK,
        fontSize: 18,
        marginBottom: 5,
        marginHorizontal: 10
    },
    helpDurationContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    durationPickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    durationPicker: {
        height: 40,
        width: 130,
        marginVertical: 10,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colorDefs.LIGHT_GREEN,
        borderRadius: 25
    },
    durationTypeText: {
        fontSize: 16,
        alignSelf: 'center',
        color: colorDefs.SMOKE_WHITE
    },
    durationTypeHours: {
        flex: 1,
    },
    durationTypeDays: {
        flex: 1
    },
    durationGradientLeft: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        borderColor: colorDefs.DARK_GREEN,
    },
    durationGradientRight: {
        flex: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        borderColor: colorDefs.DARK_GREEN
    },
    durationTextContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    durationText: {
        color: appColors.TEXT_DARK,
        fontSize: 18,
        padding: 10
    },
    submitButtonView: {
        flex: 1,
        margin: 20,
        padding: 10,
        // borderLeftRadius:0.3,
        backgroundColor: appColors.GRADIENT_LEFT,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    }

});