import { StyleSheet, Dimensions } from 'react-native';

import { colorDefs, appColors } from '../../../constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: colorDefs.WHITE
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colorDefs.SMOKE_WHITE
    },
    flatlistWrapper: {
        flex: 1
    },
    flatlist: {
        flex: 1
    },
    help: {
        backgroundColor: colorDefs.WHITE,
        padding: 15,
        borderRadius: 10,
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowOpacity: 0.5,
        shadowColor: colorDefs.LIGHT_GREY,
        shadowRadius: 2,
        marginVertical: 4,
        elevation: 1
    },
    userDetailContainer: {
        flex: 2,
        flexDirection:'row'
    },
    userDetails: { 
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center',  
        alignItems: 'flex-start', 
        padding: 10,
        marginHorizontal: 10
    },
    userName: { 
        flex: 1, 
        fontSize: 16 
    },
    userProfilePic: {
        width: 65,
        height: 65,
        resizeMode: 'contain',
        alignItems: 'flex-start',
    },
    bids: {
        backgroundColor: colorDefs.WHITE,
        padding: 15,
        borderRadius: 10,
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowOpacity: 0.5,
        shadowColor: colorDefs.LIGHT_GREY,
        shadowRadius: 2,
        marginVertical: 4,
        elevation: 1,
        flexDirection: 'row'
    },
    lables: {
        fontSize: 18,
        color: colorDefs.LIGHT_GREEN,
        fontWeight: 'bold'
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 0,
        flex:1,
        width: "100%"
    },
    button: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: colorDefs.WHITE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    inActiveButton: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorDefs.LIGHT_GREY
    },
    inActiveButtonText: {
        color: colorDefs.WHITE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    helpTitle: {
        fontSize: 18,
        color: colorDefs.LIGHT_GREEN,
        fontWeight: 'bold',
        marginVertical: 5
    },
    helpDescription: {
        fontSize: 16,
        color: appColors.TEXT_DARK,
        fontStyle: 'italic',
        marginVertical: 5
    },
    textFields: {
        fontSize: 16,
        paddingVertical: 10
    },
    helpDetails: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    bidsCountWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        // backgroundColor: 'red'
    },
    baseValueWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        // backgroundColor: 'black'
    },
    profilePic: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        alignItems: 'flex-start',
    },
    bidsWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center'
        // backgroundColor: 'red',
    },
    bidsTextFields: {
        fontSize: 16,
    },
    bidsDetails: {
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row'
    },
    bidsCreditDetails: {
        fontSize: 16,
        flex: 1,
        alignItems: 'flex-start',
    },
    bidsDurationDetails: {
        fontSize: 16,
        flex: 1,
        alignSelf: 'center'
    },

    //Modal styles
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appColors.SEMI_TRANSPARENT
    },
    modalScrollView: {
        flex: 1
    },
    modalView: {
        margin: 20,
        backgroundColor: colorDefs.SMOKE_WHITE,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "90%",
        height: "60%",
    },
    modalFieldsContainer: {
        // backgroundColor: 'blue',
        width: "100%",
        marginVertical: 10,
        height: "55%"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    textInput: {
        margin: 5,  
        backgroundColor:appColors.TEXT_WHITE,
        borderRadius: 10,
        fontSize: 16,
        textAlignVertical: "top",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    modalBtnsContainer: {
        flexDirection: 'row',
        width: "100%",
        height: 75,
        padding: "5%",
        // backgroundColor: 'red',
    },
    modalSaveBtn: {
        flex: 1, 
        backgroundColor: colorDefs.DARK_GREEN,
        borderRadius: 20,
        elevation: 2,
        justifyContent: 'center',
        marginHorizontal: 5
    },
    modalCancelBtn: {
        flex: 1,
        backgroundColor: colorDefs.DARK_GREY,
        borderRadius: 20,
        elevation: 2,
        justifyContent: 'center',
        marginHorizontal: 5
    }
});