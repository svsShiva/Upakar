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
    TextInput,
    Slider
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
import { profiles } from '../../../data/profiles';
import imgCoin from '../../../assets/images/bitcoin.png';
import imgDuration from '../../../assets/images/timer.png';
import imgCategory from '../../../assets/images/list.png';
import imgCreatedAt from '../../../assets/images/calendar.png';
import imgUserProfile from '../../../assets/images/user_profile.png';
import { getFormattedDateString } from '../../../services/date-services';
import { getProfileByUserId, getUserById } from '../../../services/data-services';


const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function DashboardDetail(props) {

    const getRenderItem = ({ item, index }) => {
        return <BidCard {...props}
            data={item}
            Key={index} />
    }

    const getKeyExtractor = (item, index) => item.id;

    const getHeaderComponent = () => {
        return <View style={{ height: 5 }} />
    }

    const getFooterComponent = () => {
        return <View style={{ height: 60 }} />
    }

    const showPlaceBidsModal = () => {
        props.showHidePlaceBidsModal();
    }

    const onBidPlaced = (bid) => {
        props.placeBid(bid)
    }

    let requester = getUserById(props.state.dashboardReducer.selectedHelp.requester.user_id);
    let requesterProfile = getProfileByUserId(props.state.dashboardReducer.selectedHelp.requester.user_id);

    const onProfilePress = async () => {
        props.showLoader();
        props.showProfile({
            ...requester,
            ...requesterProfile
        })
        await sleep(500);
        props.hideLoader();
        props.navigation.navigate('Profile')
    }
    return (
        <View style={styles.outerContainer}>
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Help Detail"}></CustomHeader>
            <ScrollView>
                <PlaceBidModal {...props} showPlaceBidsModal={props.state.dashboardDetailReducer.showPlaceBidsModal}
                    hidePlaceBidModal={props.showHidePlaceBidsModal} placeBid={onBidPlaced} />

                <View style={styles.container}>
                    <View style={styles.help}>
                        <TouchableOpacity style={styles.userDetailContainer} onPress={onProfilePress}>
                            <Image
                                source={imgUserProfile}
                                style={styles.userProfilePic}
                            />
                            <View style={styles.userDetails}>
                                <Text style={styles.userName}> {requester.name} </Text>
                                <Rating
                                    type="custom"
                                    ratingCount={5}
                                    imageSize={20}
                                    showRating={false}
                                    startingValue={requesterProfile.ratings}
                                    readonly={true}
                                    ratingColor={appColors.GRADIENT_LEFT}
                                    style={{ flex: 1 }}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>{props.state.dashboardReducer.selectedHelp.title}</Text>
                        <Text style={{ fontSize: 16, fontStyle: 'italic', marginHorizontal: 10, marginVertical: 5 }}>{props.state.dashboardReducer.selectedHelp.description}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
                            <View style={{}} >
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={imgCreatedAt}
                                        style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                                    <Text style={{ fontSize: 16, margin: 5 }}>
                                        {getFormattedDateString(props.state.dashboardReducer.selectedHelp.created_at)}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={imgCategory}
                                        style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                                    <Text style={{ fontSize: 16, margin: 5 }}>{props.state.dashboardReducer.selectedHelp.category}</Text>
                                </View>
                            </View>
                            <View style={{}}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={imgCoin}
                                        style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                                    <Text style={{ fontSize: 16, margin: 5 }}>{props.state.dashboardReducer.selectedHelp.bid_credits + " Credits"}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={imgDuration}
                                        style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                                    <Text style={{ fontSize: 16, margin: 5 }}>{props.state.dashboardReducer.selectedHelp.help_duration}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {
                        props.state.dashboardDetailReducer.loggedUserBid ?
                            <BidCard {...props}
                                data={props.state.dashboardDetailReducer.loggedUserBid}
                                isLoggedUserBid /> :
                            <></>
                    }
                    <View style={styles.flatlistWrapper}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={props.state.dashboardReducer.selectedHelp.bids}
                            renderItem={getRenderItem}
                            keyExtractor={getKeyExtractor}
                            style={styles.flatlist}
                            ListHeaderComponent={getHeaderComponent}
                            ListFooterComponent={getFooterComponent}
                            extraData={props.state.dashboardReducer.refreshFlatlist}
                        />
                    </View>
                </View>
            </ScrollView>
            {
                props.state.dashboardDetailReducer.loggedUserBid ?
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
    let bids = props.isLoggedUserBid ?
        [styles.bids, { borderLeftColor: appColors.GRADIENT_LEFT, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderLeftWidth: 10, }] :
        styles.bids;

    let bidder = getUserById(props.data.bidder);
    let bidderProfile = getProfileByUserId(props.data.bidder)
    return (
        <View style={bids}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 10 }}>
                <View style={{ justifyContent: 'center' }} >
                    <Image
                        source={imgProfilePic}
                        style={styles.bidderProfilePic}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, margin: 5 }} >{bidder.name}</Text>
                    <Rating
                        type="custom"
                        ratingCount={5}
                        imageSize={18}
                        showRating={false}
                        startingValue={bidderProfile.ratings}
                        readonly={true}
                        ratingColor={appColors.GRADIENT_LEFT}
                        style={{}}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={imgCoin}
                            style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                        <Text style={{ fontSize: 16, margin: 5 }}>{props.data.credits + " Credits"}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={imgDuration}
                            style={{ width: 25, height: 25, resizeMode: 'contain', margin: 5 }} />
                        <Text style={{ fontSize: 16, margin: 5 }}>{props.data.help_duration}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

function PlaceBidModal(props) {
    const initialFields = [
        {
            name: "Bid Amount",
            placeholder: "Bid Amount",
            value: ""
        },
        {
            name: "Comments",
            placeholder: "Comments",
            value: ""
        }
    ]
    const [fields, setFields] = useState(initialFields);
    const [helpDuration, setHelpDuration] = useState(0);
    const [durationType, setDurationType] = useState("Hours")


    const onBidsChanged = (value) => {
        let updatedFields = { ...fields };
        let updatedField = updatedFields[0];
        updatedField.value = value;
        setFields(updatedFields);
    }

    const onCommentsChanged = (value) => {
        let updatedFields = { ...fields };
        let updatedField = updatedFields[1];
        updatedField.value = value;
        setFields(updatedFields);
    }

    const onDurationHoursPressed = () => {
        setDurationType("Hours")
    }

    const onDurationDaysPressed = () => {
        setDurationType("Days")
    }

    const hidePlaceBidModal = () => {
        props.hidePlaceBidModal();
    }

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

    const onBidSaved = async () => {
        props.showLoader();
        let bid = {
            bidder: props.state.globalReducer.loggedUser._id,
            credits: fields[0].value,
            help_duration: helpDuration + " " + durationType,
            status: 'PENDING',
            upakar_id: props.state.dashboardReducer.selectedHelp._id,
            upakar_name: props.state.dashboardReducer.selectedHelp.upakar_title,
            is_active: 'YES ',
            comments: fields[1].value,
            otp: "2344",
            isAccepted: false
        }
        props.placeBid(bid);
        await sleep(500);
        props.hideLoader();
        Alert.alert(
            'Bid Placed',
            'You bid has been placed successfully',
            [
                { text: 'OK', onPress: () => props.hidePlaceBidModal() }
            ],
            { cancelable: false }
        );
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.showPlaceBidsModal}
            onRequestClose={hidePlaceBidModal}
        >
            <ScrollView style={styles.modalScrollView}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Place Bid</Text>
                        {/* <ScrollView style={styles.modalFieldsContainer}> */}
                        <View style={styles.modalFieldsContainer}>
                            <TextInput
                                placeholder={fields[0].placeholder}
                                onChangeText={onBidsChanged}
                                value={fields[0].value}
                                style={styles.textInput}
                                numberOfLines={1}
                            />
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
                            <TextInput
                                placeholder={fields[1].placeholder}
                                onChangeText={onCommentsChanged}
                                value={fields[1].value}
                                style={[styles.textInput, { flexWrap: 'wrap' }]}
                                numberOfLines={4}
                            />
                        </View>
                        {/* </ScrollView> */}
                        <View style={styles.modalBtnsContainer}>
                            <TouchableOpacity
                                style={styles.modalCancelBtn}
                                onPress={hidePlaceBidModal}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalSaveBtn}
                                onPress={onBidSaved}
                            >
                                <Text style={styles.textStyle}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
}

