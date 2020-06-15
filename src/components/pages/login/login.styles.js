import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { colorDefs, appColors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colorDefs.WHITE,
        height: Dimensions.get("window").height
    },
    textInput: {
        padding: 10,
        backgroundColor: appColors.TEXT_WHITE,
        borderRadius: 10,
        marginHorizontal: 15,
        paddingLeft: 16,
        fontSize: 16,
        textAlignVertical: "top",
        borderLeftColor:appColors.BORDER_COLOR,
        borderRadius:10,
        borderBottomWidth: 0.5,
    },
    label: {
        color: appColors.GRADIENT_LEFT,
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5,
        fontWeight:"bold"
    },
    textInputView:{
        margin:5,
        marginVertical: 10,
        marginBottom: 20,
    }
});