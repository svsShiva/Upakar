import { StyleSheet } from 'react-native';

import { appColors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.BG,
        flex: 1,
    },
    pickerContainer:{
        marginLeft: 10,
        marginBottom: 0,
        marginTop: 13,
    },
    pickerView: {
        flex:1,
        padding: 10,
        backgroundColor: appColors.TEXT_WHITE,
        borderRadius: 10,
        marginHorizontal: 8,
        paddingLeft: 16,
        fontSize: 16,
    },
    label: {
        color: appColors.TEXT_DARK,
        fontSize: 18,
        marginBottom: 2,
        marginLeft: 10,
    },
    sliderContainer:{
        margin: 10,
        marginBottom: 0,
        marginTop: 13,
    },
    submitButtonView:{
        flex:1,
        margin: 20,
        padding:10,
        // borderLeftRadius:0.3,
        backgroundColor: appColors.GRADIENT_LEFT,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 20
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize: 18
    }
    
});