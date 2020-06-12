import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    FlatList,
    Image,
    Alert,
    Modal,
    TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Rating } from 'react-native-ratings';

import { dashboardDetailStrings } from '../../../constants/strings';
import { styles } from './dashboard-detail.styles';
import CustomHeader from '../../controls/custom-header';
import { gradientDimensions } from '../../../constants/styles';
import { colorDefs, appColors } from '../../../constants/colors';
import { bidsData } from '../../../data/bids';
import imgProfilePic from '../../../assets/images/profile_pic.png';
import CustomTextInput from '../../controls/custom-text-input';
import { profileData } from '../../../data/profile';

export default function DashboardDetail(props) {

    const getRenderItem = ({ item, index }) => {
        return <BidCard {...props}
            data={item}
            Key={index} />
    }

    const getKeyExtractor = (item, index) => item.id;

    const getFooterComponent = () => {
        return <View style={{ height: 60 }} />
    }

    const showPlaceBidsModal = () => {
        props.showHidePlaceBidsModal();
    }

    const onProfilePress = () => {
        props.showProfile(profileData[1])
        props.navigation.navigate('Profile')
    }

    return (
        <View style={styles.outerContainer}>
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Help Detail"}></CustomHeader>
            <ScrollView>
                <PlaceBidModal showPlaceBidsModal={props.state.dashboardDetailReducer.showPlaceBidsModal}
                    hidePlaceBidModal={props.showHidePlaceBidsModal} />

                <View style={styles.container}>
                    <View style={styles.help}>
                        <TouchableOpacity style={styles.userDetailContainer} onPress={onProfilePress}>
                            <Image
                                source={imgProfilePic}
                                style={styles.userProfilePic}
                            />
                            <View style={styles.userDetails}>
                                <Text style={styles.userName}>Shiva Siripurapu</Text>
                                <Rating
                                    type="custom"
                                    ratingCount={5}
                                    imageSize={20}
                                    showRating={false}
                                    startingValue={4}
                                    readonly={true}
                                    ratingColor={appColors.GRADIENT_LEFT}
                                    style={{ flex: 1 }}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.helpTitle}>{props.state.dashboardReducer.selectedHelp.title}</Text>
                        <Text style={styles.helpDescription}>{props.state.dashboardReducer.selectedHelp.description}</Text>
                        <View style={styles.helpDetails}>
                            <View style={styles.bidsCountWrapper}>
                                <Text style={styles.lables}>{"Ends by"}</Text>
                                <Text style={styles.textFields}>{"20th June, 2020"}</Text>
                            </View>
                            <View style={styles.baseValueWrapper}>
                                <Text style={styles.lables}>{"Base Value"}</Text>
                                <Text style={styles.textFields}>{"50 Credits"}</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.flatlistWrapper}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={bidsData}
                            renderItem={getRenderItem}
                            keyExtractor={getKeyExtractor}
                            style={styles.flatlist}
                            ListFooterComponent={getFooterComponent}
                            extraData={props.state.dashboardReducer.refreshFlatlist}
                        />
                    </View>
                </View>
            </ScrollView>
            {
                props.state.dashboardDetailReducer.isBidPlaced ?
                    <View style={styles.buttonWrapper}>
                        <View style={styles.inActiveButton}>
                            <Text
                                style={styles.inActiveButtonText}
                            >{"Bid Already Placed"}</Text>
                        </View>
                    </View> :
                    <TouchableOpacity style={styles.buttonWrapper} onPress={showPlaceBidsModal}>
                        <LinearGradient
                            start={gradientDimensions.start} end={gradientDimensions.end}
                            colors={[appColors.GRADIENT_LEFT, appColors.GRADIENT_RIGHT]}
                            style={styles.button}>
                            <Text
                                style={styles.buttonText}
                            >{"PLACE BID"}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            }
        </View>
    );
}

function BidCard(props) {

    return (
        <View style={styles.bids}>
            <Image
                source={imgProfilePic}
                style={styles.profilePic}
            />
            <View style={styles.bidsWrapper}>
                <Text style={styles.bidsTextFields}>{"Some bidder" + props.data.bidder}</Text>
                <Text style={styles.bidsTextFields}>{"Ratings: 4.5"}</Text>
                <View style={styles.bidsDetails}>
                    <Text style={styles.bidsCreditDetails}>{"Credits  " + props.data.credits}</Text>
                    <Text style={styles.bidsDurationDetails}>{" Duration " + props.data.help_duration}</Text>
                </View>
            </View>
        </View>
    )
}

function PlaceBidModal(props) {
    initialFields = [
        {
            name: "Bid Amount",
            placeholder: "Bid Amount",
            value: ""
        },
        {
            name: "Help Duration",
            placeholder: "Help Duration",
            value: ""
        },
        {
            name: "Comments",
            placeholder: "Comments",
            value: ""
        }
    ]
    const [fields, setFields] = useState(initialFields);

    const onBidsChanged = (value) => {
        let updatedFields = { ...fields };
        let updatedField = updatedFields[0];
        updatedField.value = value;
        setFields(updatedFields);
    }

    const onHelpDurationChanged = (value) => {
        let updatedFields = { ...fields };
        let updatedField = updatedFields[1];
        updatedField.value = value;
        setFields(updatedFields);
    }

    const onCommentsChanged = (value) => {
        let updatedFields = { ...fields };
        let updatedField = updatedFields[2];
        updatedField.value = value;
        setFields(updatedFields);
    }


    const hidePlaceBidModal = () => {
        props.hidePlaceBidModal();
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.showPlaceBidsModal}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Place Bid</Text>
                    <ScrollView style={styles.modalFieldsContainer}>
                        {/* <View style={styles.modalFieldsContainer}> */}
                        <TextInput
                            placeholder={fields[0].placeholder}
                            onChangeText={onBidsChanged}
                            value={fields[0].value}
                            style={styles.textInput}
                            numberOfLines={1}
                        />
                        <TextInput
                            placeholder={fields[1].placeholder}
                            onChangeText={onHelpDurationChanged}
                            value={fields[1].value}
                            style={styles.textInput}
                            numberOfLines={1}
                        />
                        <TextInput
                            placeholder={fields[2].placeholder}
                            onChangeText={onCommentsChanged}
                            value={fields[2].value}
                            style={styles.textInput}
                            numberOfLines={4}
                        />
                        {/* </View> */}
                    </ScrollView>
                    <View style={styles.modalBtnsContainer}>
                        <TouchableOpacity
                            style={styles.modalCancelBtn}
                            onPress={hidePlaceBidModal}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalSaveBtn}
                            onPress={hidePlaceBidModal}
                        >
                            <Text style={styles.textStyle}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

