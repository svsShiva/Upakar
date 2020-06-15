import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal, ScrollView, FlatList, StatusBar
} from 'react-native';
import { appColors } from '../../constants/colors';
import { appFontFamilies } from '../../constants/styles';
import CheckBox from '@react-native-community/checkbox';

export default function FilterModal(props) {
    let categories = [
        {
            name: "Education",
            sub_cat: [
                "abc",
                "xyz",
                "xyz",
                "fsda"
            ]
        },
        {
            name: "Educatifsdafon",
            sub_cat: [
                "ewr",
                "xyz",
                "xyz",
                "xyz",
                "fsda"
            ]
        },
        {
            name: "Educawetion",
            sub_cat: [
                "fsd",
                "fsd",
                "fsd",
                "fsd",
                "fdswe",
                "fdsafa"
            ]
        },
        {
            name: "adsa",
            sub_cat: [
                "zx z",
                "zx z",
                "zx z",
                "zx z",
                "zx z",
                "qwfgg",
                "juydg"
            ]
        }

    ]
    let cat = categories.map(ele => ele.name);
    let [selectedCat, setSelectedCat] = useState("Education");
    const changeCat = (category) => {
        setSelectedCat(category);
        let subcat = categories.find(item => item.name == category).sub_cat;
        setSubCat(subcat);
    }
    const getRenderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => changeCat(item)} index={index} style={styles.sortItem}>
                <Text style={[styles.sortItemText,]}>{item}</Text>
            </TouchableOpacity>
        )
    }
    const getKeyExtractor = (item, index) => index;
    const getRenderItemSubCat = ({ item, index }) => {
        return (
            <View style={{ flexDirection: "row" }}>
                <CheckBox
                    disabled={false}
                    // value={toggleCheckBox}
                    // onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
                /> 
                <Text style={[styles.sortItemText,]}>{item}</Text>
            </View>
        )
    }
    const getKeyExtractorSubCat = (item, index) => index;
    const [subCat, setSubCat] = useState(categories[0].sub_cat)
    return (
        <Modal
            animationType="fade"
            transparent={true}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headingText}>Filter By</Text>
                        <TouchableOpacity onPress={props.onCancel}>
                            <Text style={styles.headingText}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "40%", backgroundColor: "green" }} >
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={cat}
                                renderItem={getRenderItem}
                                keyExtractor={getKeyExtractor}
                            />
                        </View>
                        <View style={{ width: "60%", height: 500, backgroundColor: "blue" }}>
                        <FlatList
                                showsVerticalScrollIndicator={false}
                                data={subCat}
                                renderItem={getRenderItemSubCat}
                                keyExtractor={getKeyExtractorSubCat}
                            />
                        </View>
                    </View>
                </View>
            </View>

        </Modal>
    );
}
const styles = StyleSheet.create({
    modalView: {
        position: "absolute",
        bottom: 0,
        height: '100%',
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