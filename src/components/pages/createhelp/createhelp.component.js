import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Slider,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { createHelpStrings } from '../../../constants/strings';
import { styles } from './createhelp.styles';
import CustomHeader from '../../controls/custom-header';
import CustomTextInput from '../../controls/custom-text-input';
import { Picker } from '@react-native-community/picker';
import { colorDefs, appColors } from '../../../constants/colors';
import { gradientDimensions } from '../../../constants/styles';


const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function CreateHelp(props) {
    const initialFields = [
        {
            name: "Title",
            placeholder: "Enter name of the help",
            value: ""
        },
        {
            name: "Description",
            placeholder: "Describe help in few words",
            value: ""
        }
    ]
    const [fields, setFields] = useState(initialFields);
    const [helpDuration, setHelpDuration] = useState(0);
    const [categoryPickerState, setCategoryPickerState] = useState("select");
    const [subCategoryPickerState, setSubCategoryPickerState] = useState("select");
    const [durationType, setDurationType] = useState("Hours");

    let durationTypeHoursGradientColors = durationType == "Hours" ?
        [appColors.GRADIENT_LEFT, appColors.GRADIENT_RIGHT] :
        [colorDefs.SMOKE_WHITE, colorDefs.SMOKE_WHITE];
    let durationTypeHoursTextColor = durationType == "Hours" ?
        [styles.durationTypeText, { color: colorDefs.WHITE }] :
        [styles.durationTypeText, { color: appColors.GRADIENT_LEFT }];

    let durationTypeDaysGradientColors = durationType == "Days" ?
        [appColors.GRADIENT_LEFT, appColors.GRADIENT_RIGHT] :
        [colorDefs.SMOKE_WHITE, colorDefs.SMOKE_WHITE];
    let durationTypeDaysTextColors = durationType == "Days" ?
        [styles.durationTypeText, { color: colorDefs.WHITE }] :
        [styles.durationTypeText, { color: appColors.GRADIENT_LEFT }];

    const onChangeText = (index, value) => {
        let updatedFields = { ...fields };
        let updatedField = updatedFields[index];
        updatedField.value = value;
        setFields(updatedFields);
    }

    const onDurationHoursPressed = () => {
        setDurationType("Hours")
    }

    const onDurationDaysPressed = () => {
        setDurationType("Days")
    }

    const onSubmitPresses = async () => {
        props.showLoader();
        await sleep(500);
        props.hideLoader();
        Alert.alert(
            'Create Help',
            'Yay! Help has been created',
            [
                { text: 'OK', onPress: () => { } }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container} >
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Seek Help"}></CustomHeader>
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps='handled'>
                <CustomTextInput item={fields[0]} index={0} onChangeText={onChangeText} multiLine={false} />
                <CustomTextInput item={fields[1]} index={1} onChangeText={onChangeText} multiLine={true} />
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Category</Text>
                    <Picker
                        selectedValue={categoryPickerState}
                        style={styles.pickerView}
                        onValueChange={(itemValue, itemIndex) =>
                            setCategoryPickerState(itemValue)
                        }>
                        <Picker.Item label="Select a category" value="select" />
                        <Picker.Item label="Driving" value="driving" />
                        <Picker.Item label="Delivery" value="delivery" />
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Sub Category</Text>
                    <Picker
                        selectedValue={subCategoryPickerState}
                        style={styles.pickerView}
                        onValueChange={(itemValue, itemIndex) =>
                            setSubCategoryPickerState(itemValue)
                        }>
                        <Picker.Item label="Select a category" value="select" />
                        <Picker.Item label="Lift" value="java" />
                        <Picker.Item label="Products" value="products" />
                    </Picker>
                </View>
                <Text style={[styles.label, { marginLeft: 20, marginVertical: 10 }]}>Base Credit value: 25</Text>
                <View style={styles.helpDurationContainer}>
                    <View style={styles.durationPickerContainer}>
                        <View style={styles.durationTextContainer}>
                            <Text style={styles.durationText}>Help Duration: {helpDuration}</Text>
                        </View>
                        <View style={styles.durationPicker}>
                            <TouchableOpacity style={styles.durationTypeHours} onPress={onDurationHoursPressed}>
                                <LinearGradient
                                    start={gradientDimensions.start} end={gradientDimensions.end}
                                    colors={durationTypeHoursGradientColors}
                                    style={styles.durationGradientLeft}>
                                    <Text
                                        style={durationTypeHoursTextColor}
                                    >{"Hours"}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.durationTypeDays} onPress={onDurationDaysPressed}>
                                <LinearGradient
                                    start={gradientDimensions.start} end={gradientDimensions.end}
                                    colors={durationTypeDaysGradientColors}
                                    style={styles.durationGradientRight}>
                                    <Text
                                        style={durationTypeDaysTextColors}
                                    >{"Days"}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Slider
                        style={{ flex: 1, margin: 10, }}
                        minimumValue={0}
                        maximumValue={90}
                        minimumTrackTintColor={appColors.GRADIENT_LEFT}
                        maximumTrackTintColor="#000000"
                        onValueChange={(value) => { setHelpDuration(value) }}
                        step={1}
                    />
                </View>
                <TouchableOpacity style={styles.submitButtonView} onPress={onSubmitPresses}>
                    <Text style={styles.buttonText}>Place Request</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

