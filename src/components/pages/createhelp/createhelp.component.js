import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Slider
} from 'react-native';

import { createHelpStrings } from '../../../constants/strings';
import { styles } from './createhelp.styles';
import CustomHeader from '../../controls/custom-header';
import CustomTextInput from '../../controls/custom-text-input';
import { Picker } from '@react-native-community/picker';
import { appColors } from '../../../constants/colors';

export default function CreateHelp(props) {
    initialFields = [
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
    const [categoryPickerState, setCategoryPickerState] = useState("select")
    const [subCategoryPickerState, setSubCategoryPickerState] = useState("select")
    onChangeText = (index, value) => {
        let updatedFields = { ...fields };
        let updatedField = updatedFields[index];
        updatedField.value = value;
        setFields(updatedFields);
    }
    return (
        <View style={styles.container} >
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Seek Help"}></CustomHeader>
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps='handled'>
                <CustomTextInput item={fields[0]} index={0} onChangeText={this.onChangeText} multiLine={false} />
                <CustomTextInput item={fields[1]} index={1} onChangeText={this.onChangeText} multiLine={true} />
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
                <Text style={[styles.label,{marginLeft: 20, marginVertical: 10}]}>Base Credit value: 25</Text>
                <View style={styles.sliderContainer}>
                    <Text style={styles.label}>Help Duration: {helpDuration} Days</Text>
                    <Slider
                        style={{ flex:1, margin: 10,  }}
                        minimumValue={0}
                        maximumValue={90}
                        minimumTrackTintColor={appColors.GRADIENT_LEFT}
                        maximumTrackTintColor="#000000"
                        onValueChange={(value) => {setHelpDuration(value)}}
                        step={1}
                    />
                </View>
                <TouchableOpacity style={styles.submitButtonView}>
                    <Text style={styles.buttonText}>Place Request</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

