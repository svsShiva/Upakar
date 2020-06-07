import { appColors } from '../../../constants/colors';
import { StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 0,
        marginTop: 13,
    },
    textInput: {
        padding: 10,
        backgroundColor: appColors.TEXT_WHITE,
        borderRadius: 10,
        marginHorizontal: 8,
        paddingLeft: 16,
        fontSize: 16,
        textAlignVertical: "top"
    },
    label: {
        color: appColors.TEXT_DARK,
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 2,
    }
})