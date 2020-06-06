import { StyleSheet } from 'react-native';

import { colorDefs } from '../../../constants/colors';

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
        marginTop: 20
    },
    button: {
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center'
    },
    buttonText: {
        color: colorDefs.WHITE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        color: colorDefs.LIGHT_GREEN,
        fontWeight: 'bold',
    },
    textFields: {
        fontSize: 16,
        paddingVertical: 10
    },
    helpDetails: {
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});