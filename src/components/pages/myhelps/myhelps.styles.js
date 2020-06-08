import { StyleSheet } from 'react-native';

import { colorDefs, appColors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colorDefs.WHITE,
        flex: 1
    },
    flatlist: {
        flex: 1
    },
    loadingComponent: {
        flex: 1
    },
    viewsIcon: {
        padding: 5,
        flexDirection: "row",
        alignItems: 'center',
    },
    imageIcon: {
        resizeMode: 'contain',
    },
    searchView: { 
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#dcf5e3",
        marginHorizontal: 5
    },
    imgSearchStyle: {
        resizeMode:"contain",
        marginHorizontal: 10
    },
    footerView: {
        alignSelf:"flex-end",
        flexDirection:"row",
        backgroundColor:appColors.GRADIENT_LEFT
    }, 
    footerTileView :{
        flex:1,
        justifyContent: "center",
        paddingVertical:10,
        flexDirection:"row",
        alignContent:"center",
        borderColor:"white",
        borderWidth: 2,
        borderRightWidth:1
    },
    footerTileImage: {
        resizeMode:"contain",
        width:20,
        height: 20,
        marginRight:5
    },
    footerTileText: {
        color:"white",
        fontWeight: "500"
    }

});