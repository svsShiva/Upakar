import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Slider,
    Image,
    Modal
} from 'react-native';

import { styles } from './register.styles';
import CustomHeader from '../../controls/custom-header';
import CustomTextInput from '../../controls/custom-text-input';
import { appColors } from '../../../constants/colors';
import imgProfilePic from '../../../assets/images/profile_pic.png'
import imgEditIcon from '../../../assets/images/edit.png';
import { Picker } from '@react-native-community/picker';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function Register(props) {
    onChangeText = (index, value) => {
        let updatedFields = [...fields]
        updatedFields[index].value = value;
        setFields(updatedFields);
    }
    initialFields = [
        {
            name: "First Name",
            placeholder: "Enter your first name",
            value: ""
        },
        {
            name: "Last Name",
            placeholder: "Enter your last name",
            value: ""
        },
        {
            name: "Email",
            placeholder: "Enter your Email ID",
            value: "",
            type: "email"
        },
        {
            name: "Address",
            placeholder: "Enter your address",
            value: "",
        },
        {
            name: "Mobile Number",
            placeholder: "Enter your mobile number",
            value: "",
            type: "number"
        },
    ]
    const [fields, setFields] = useState(initialFields);
    skills = [
        {
            category: "Delivery",
            subCategories: [
                {
                    name: "Food",
                    rating: 4,
                },
                {
                    name: "Groceries",
                    rating: 3,
                },
                {
                    name: "Medicines",
                    rating: 5,
                }
            ],
        },
        {
            category: "Education",
            subCategories: [
                {
                    name: "Primary",
                    rating: 1.5,
                },
                {
                    name: "Secondary",
                    rating: 2.5,
                },
                {
                    name: "Intermediate",
                    rating: 0.5,
                },
                {
                    name: "B-Tech",
                    rating: 5,
                }
            ],
        },
    ]
    let initialModalData = {
        category: "",
        name: "",
        rating: 0
    }
    const [skillData, setSkillData] = useState(skills);
    const [showSkillModal, setshowSkillModal] = useState(false);
    const [modalData, setModalData] = useState(initialModalData);

    const showModal = (data) => {
        setModalData(data);
        setshowSkillModal(true);
    }
    const closeModal = () => {
        setshowSkillModal(false);
    }
    return (
        <View style={styles.container} >
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Register"}></CustomHeader>
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps='handled'>
                <View style={styles.profilePicContainer}>
                    <Image
                        source={imgProfilePic}
                        style={styles.profilePic}
                    />
                    <TouchableOpacity style={styles.editContainer}>
                        <Image
                            source={imgEditIcon}
                            style={styles.editIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <CustomTextInput item={fields[0]} index={0} onChangeText={this.onChangeText} multiLine={false} />
                    <CustomTextInput item={fields[1]} index={1} onChangeText={this.onChangeText} multiLine={false} />
                    <CustomTextInput item={fields[2]} index={2} onChangeText={this.onChangeText} multiLine={false} />
                    <CustomTextInput item={fields[3]} index={3} onChangeText={this.onChangeText} multiLine={true} />
                    <CustomTextInput item={fields[4]} index={4} onChangeText={this.onChangeText} multiLine={false} />
                    <View style={styles.skillsContainer}>
                        <View style={styles.skillTitleContainer}>
                            <Text style={styles.skillTitleText}>Skills</Text>
                            <TouchableOpacity style={styles.addButton} onPress={() => showModal(undefined)}>
                                <Text style={styles.addText}>+ ADD</Text>
                            </TouchableOpacity>
                        </View>
                        {true &&
                            skillData.map((element, index) =>
                                <SkillCard data={element} key={index} showModal={showModal} />
                            )
                        }
                    </View>
                </View>
                {
                    showSkillModal && <SkillModal data={modalData} closeModal={closeModal}/>
                }
            </ScrollView>

        </View>
    );
}

function SkillModal(props) {
    if (props.data == undefined) {
        isEnable = true;
        title = "Add Skill";
        showDelete = false;
    } else {
        isEnable = false;
        title = "Edit Skill";
        showDelete = true;
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <View style={styles.editSkillTitleContainer}>
                        <Text style={styles.editSkillTitleText}>{title}</Text>
                        {showDelete &&
                            <TouchableOpacity style={styles.deleteButton}>
                                <Text style={styles.deleteText}>Delete</Text>
                            </TouchableOpacity>}
                    </View>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Category</Text>
                        <View style={styles.pickerView}>
                            <Picker
                                selectedValue={props.data==undefined ? "select" : props.data.category}
                                style={styles.pickerText}
                                // onValueChange={(itemValue, itemIndex) =>
                                // setCategoryPickerState(itemValue)
                                // }
                                enabled={isEnable}
                            >
                                <Picker.Item label="Select a category" value="select" />
                                <Picker.Item label="Driving" value="Driving" />
                                <Picker.Item label="Delivery" value="Delivery" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Sub Category</Text>
                        <View style={styles.pickerView}>
                            <Picker
                                selectedValue={props.data==undefined ? "select" : props.data.name}
                                style={styles.pickerText}
                                // onValueChange={(itemValue, itemIndex) =>
                                // setCategoryPickerState(itemValue)
                                // }
                                enabled={isEnable}
                            >
                                <Picker.Item label="Select a category" value="select" />
                                <Picker.Item label="Products" value="Products" />
                                <Picker.Item label="Groceries" value="Groceries" />
                                <Picker.Item label="Food" value="Food" />
                                <Picker.Item label="Medicines" value="Medicines" />
                            </Picker>
                        </View>
                        <Rating
                            ratingCount={5}
                            imageSize={30}
                            showRating
                            startingValue={props.data==undefined ? 0 : props.data.rating}
                            type="custom"
                            ratingColor={appColors.GRADIENT_LEFT}
                            fractions={1}
                            ratingTextColor="black"
                            style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 5, fontSize: 16 }}
                        // onFinishRating={this.ratingCompleted}
                        />
                        <View style={styles.modalFooterContainer}>
                            <TouchableOpacity style={styles.cancelButton} onPress={props.closeModal}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

function SkillCard(props) {
    const onSkillClick = (element) => {
        let dataObj = {
            category: props.data.category,
            name: element.name,
            rating: element.rating
        }
        props.showModal(dataObj);
    }
    return (
        <View style={styles.skillCardContainer}>
            <Text style={{ fontSize: 16, paddingBottom: 5, }}>{props.data.category}</Text>
            <View style={styles.skillsSubCatView}>
                {
                    props.data.subCategories.map(element => {
                        if (element.rating <= 1) {
                            color = "#ff4545"
                        } else if (element.rating <= 2) {
                            color = "#ffa534"
                        } else if (element.rating <= 3) {
                            color = "#ffe234"
                        } else if (element.rating <= 4) {
                            color = "#b7dd29"
                        } else if (element.rating <= 5) {
                            color = "#57e32c"
                        }
                        return (
                            <TouchableOpacity style={[{ backgroundColor: color }, styles.skillButton]} onPress={() => onSkillClick(element)}>
                                <Text style={[{ color: color }, styles.skillRatingText]}>{element.rating}</Text>
                                <Text style={{ color: "white" }} >{element.name}</Text>
                            </TouchableOpacity>
                        )
                    })

                }
            </View>

        </View>
    )
}