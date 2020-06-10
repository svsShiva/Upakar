import { StyleSheet } from 'react-native';

import { appColors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.BG,
        flex: 1,
    },
    profilePic: {
        resizeMode: "contain",
        height: 80,
        width: 80,
    },
    profilePicContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
        marginTop: 15,
        marginBottom: 0,
    },
    editIcon: {
        height: 35,
        width: 35,
    },
    editContainer: {
        position: "relative",
        left: 25,
        bottom: 25

    },
    skillsContainer: {
        margin: 20,
    },
    skillTitleText: {
        fontSize: 18,
    },
    skillContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: appColors.TEXT_WHITE,
        padding: 10,
    },
    skillTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        alignItems: "center"
    },
    addButton: {
        borderColor: appColors.GRADIENT_LEFT,
        backgroundColor: appColors.GRADIENT_LEFT,
        padding: 10,
        borderRadius: 10,
        // alignSelf:"flex-start"
    },
    addText: {
        color: "white",
        fontSize: 14,
    },
    skillsSubCatView: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    skillCardContainer: {
        backgroundColor: "white",
        padding: 10,
        borderColor: appColors.borderColor,
        borderWidth: 0.5,
        marginBottom: 5,
        borderRadius: 10,
    },
    skillButton: {
        borderRadius: 10,
        marginRight: 5,
        marginTop: 5,
        padding: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    skillRatingText: {
        padding: 4,
        paddingHorizontal: 4,
        marginRight: 5,
        fontWeight: "bold",
        backgroundColor: "white",
        borderRadius: 10
    },
    modalView: {
        height: '58%',
        backgroundColor: appColors.BG,
        width: '95%',
        padding: 20,
        paddingBottom: 0,
        margin: 20,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: appColors.MODAL_BACKGROUND,
        justifyContent: "center",
        alignItems: "center",

    },
    deleteButton: {
        backgroundColor: "#ff4545",
        padding: 10,
        borderRadius: 10,
        // alignSelf:"flex-start"
    },
    deleteText: {
        color: "white",
        fontSize: 14,
    },
    editSkillTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        alignItems: "center",
    },
    editSkillTitleText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    pickerContainer: {
        marginBottom: 5,
        marginTop: 5,
    },
    pickerView: {
        backgroundColor: appColors.TEXT_WHITE,
        borderRadius: 10,
        borderColor: appColors.BORDER_COLOR,
        borderWidth: 0.5
    },
    pickerText:{
        fontSize: 16,
        // padding: 0,
    },
    label: {
        color: appColors.TEXT_DARK,
        fontSize: 16,
        marginBottom: 2,
    },
    modalFooterContainer:{
        flexDirection:"row",
        marginHorizontal:5,
        justifyContent:"space-between",
        alignItems:"center",
        marginTop: 20
    },
    cancelButton:{
        padding:10,
        borderRadius: 20,
        width:"30%",
        alignItems:"center",
        borderColor: appColors.BORDER_COLOR,
        borderWidth:2,
    },
    cancelButtonText:{
        color: appColors.GRADIENT_LEFT,
        fontSize: 17,
    },
    saveButtonText:{
        color: appColors.TEXT_WHITE,
        fontSize: 17,
    },
    saveButton:{
        padding:10,
        backgroundColor:appColors.GRADIENT_LEFT,
        borderRadius: 20,
        width:"30%",
        alignItems:"center"
    }
});