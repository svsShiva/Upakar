import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    FlatList,
    Image,
    Alert,
    Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { dashboardDetailStrings } from '../../../constants/strings';
import { styles } from './dashboard-detail.styles';
import CustomHeader from '../../controls/custom-header';
import { gradientDimensions } from '../../../constants/styles';
import { colorDefs, appColors } from '../../../constants/colors';
import { bidsData } from '../../../data/bids';
import imgProfilePic from '../../../assets/images/profile_pic.png';

export default function DashboardDetail(props) {

    const getRenderItem = ({ item, index }) => {
        return <BidCard {...props}
            data={item}
            Key={index} />
    }

    const getKeyExtractor = (item, index) => item.id;

    const getFooterComponent = () => {
        return <View style={{ height: 20 }} />
    }

    const showPlaceBidsModal = () => {
        props.showHidePlaceBidsModal();
    }

    return (
        <View style={styles.outerContainer}>
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Help Detail"}></CustomHeader>

            <PlaceBidModal showPlaceBidsModal={props.state.dashboardDetailReducer.showPlaceBidsModal}
                hidePlaceBidModal={props.showHidePlaceBidsModal} />

            <View style={styles.container}>
                <View style={styles.help}>
                    <Text style={styles.title}>{props.state.dashboardReducer.selectedHelp.title}</Text>
                    <Text style={styles.textFields}>{props.state.dashboardReducer.selectedHelp.status + " - Ends by 20th June, 2020"}</Text>
                    <Text style={styles.lables}>Description</Text>
                    <Text style={styles.textFields}>{props.state.dashboardReducer.selectedHelp.description}</Text>
                    <View style={styles.helpDetails}>
                        <View style={styles.bidsCountWrapper}>
                            <Text style={styles.lables}>{"Bids"}</Text>
                            <Text style={styles.textFields}>{"20"}</Text>
                        </View>
                        <View style={styles.baseValueWrapper}>
                            <Text style={styles.lables}>{"Base Value"}</Text>
                            <Text style={styles.textFields}>{"50 Credits"}</Text>
                        </View>
                    </View>
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

                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={hidePlaceBidModal}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

