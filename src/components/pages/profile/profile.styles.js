import { StyleSheet } from 'react-native';

import { appColors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.BG,
        flex: 1,
    },
    profilePicContainer:{
        flexDirection:"row",
        alignItems:"center",
        margin: 10,
        padding: 5,
        backgroundColor: appColors.TEXT_WHITE
    },
    profilePic:{
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    nameContainer:{
        flex:1,
        margin: 10,
        alignSelf:"flex-start",
    },
    nameText:{
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    },
    bioText:{
        fontSize: 12,
        fontStyle:"italic"
    },
    detailsContainer:{
        justifyContent:"space-between",
        flexDirection:"row",
        margin: 10,
        padding: 5,
        marginVertical: 5,
        backgroundColor: appColors.TEXT_WHITE,
        alignItems:"center"
    },
    helpDetailsContainer:{
        flexDirection:"row",
        paddingHorizontal:10
    },
    walletContainer:{
        marginVertical:5,
    },
    myHelpsContainer:{
        marginHorizontal:10,
        alignItems:"center"
    },
    walletText:{
        fontSize: 18,
        fontWeight:"bold"
    },
    myHelpNumberText:{
        fontSize:16,
    },
    myHelpTitleText:{
        fontSize:14,
        fontStyle:"italic"
    },
    aboutContainer:{
        // flex:1,
        backgroundColor: appColors.TEXT_WHITE,
        margin: 10,
        padding: 5,
        marginVertical: 5,
    },
    aboutTitleText:{
        fontSize: 18,
        fontWeight:"bold",
        marginVertical: 5
    },
    aboutDetailContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor:appColors.TEXT_INPUT_BORDER,
        borderWidth:0.5,
        marginBottom:5,
        borderRadius: 10,
    },
    aboutDetailTitleText:{
        fontSize: 16,
        fontWeight:"500"
    },
    aboutDetailDescriptionText:{
        fontSize: 14,
        marginHorizontal: 10,
    },
    skillContainer:{
        flex:1,
        backgroundColor: appColors.TEXT_WHITE,
        margin: 10,
        padding: 5,
        marginVertical: 5,
    },
    skillTitleText:{
        fontSize: 18,
        fontWeight:"bold",
        marginVertical: 5
    },
    skillsDetailContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor:appColors.TEXT_INPUT_BORDER,
        borderWidth:0.5,
        marginBottom:5,
        borderRadius: 10,
    },
    skillDetailTitleText:{
        fontSize: 16,
        fontWeight:"500"
    },
    nameTextContainer:{
        flex:1,
    },
    editButtonContainer:{
        alignSelf:"flex-start"
    },
    editButton:{
        backgroundColor: appColors.GRADIENT_LEFT,
        borderColor: appColors.GRADIENT_LEFT,
        borderWidth:2,
        padding:5,
        borderRadius: 10,
    },
    editButtonText:{
        color: appColors.TEXT_WHITE,
        fontSize: 16,
        fontWeight:"bold"
    }
});