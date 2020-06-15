import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal, ScrollView, FlatList, StatusBar
} from 'react-native';
import { appColors } from '../../constants/colors';
import { appFontFamilies } from '../../constants/styles';
export default class SortModel extends React.Component {
    constructor(props) {
        super(props);
    }
    getKeyExtractor = (item, index) => index;
    render() {
        let styleObj = { color: appColors.TEXT_DARK }
        return (
            <Modal
                animationType="fade"
                transparent={true}
            >
                <StatusBar translucent={true} backgroundColor={appColors.MODAL_BACKGROUND} />
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headingText}>SORT BY</Text>
                            <TouchableOpacity onPress={this.props.onCancel}>
                                <Text style={styles.headingText}>CANCEL</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity  style={styles.sortItem}>
                            <Text style={[styles.sortItemText, styleObj,{color:appColors.GRADIENT_LEFT}]}>First Name (A - Z)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.sortItem}>
                            <Text style={[styles.sortItemText, styleObj]}>First Name (Z - A)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.sortItem}>
                            <Text style={[styles.sortItemText, styleObj]}>DateTime ( Latest First )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.sortItem}>
                            <Text style={[styles.sortItemText, styleObj]}>Created DateTime ( Oldest First )</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    modalView: {
        position: "absolute",
        bottom: 0,
        height: '30%',
        backgroundColor: appColors.TEXT_WHITE,
        width: '100%',
        padding: 20,
        paddingBottom: 0
    },
    container: {
        flex: 1,
        backgroundColor: appColors.MODAL_BACKGROUND
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: appColors.BORDER_COLOR,
        borderBottomWidth: 0.5,
        paddingBottom: 10
    },
    sortItem: {
        padding: 10,
        paddingLeft: 0,
        paddingBottom: 5
    },
    sortItemText: {
        color: appColors.TEXT_DARK,
        // fontFamily:appFontFamilies.MULI,
        fontSize: 13,
    },
    headingText: {
        color: appColors.TEXT_DARK,
        fontSize: 14,
        // fontFamily:appFontFamilies.MULI_SEMI_BOLD
    }
})