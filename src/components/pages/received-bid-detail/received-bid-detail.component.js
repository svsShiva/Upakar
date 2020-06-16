import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Modal,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Rating } from 'react-native-ratings';

import {
  placedbidDetailStrings,
  receivedbidDetailStrings,
} from '../../../constants/strings';
import { styles } from './received-bid-detail.styles';
import CustomHeader from '../../controls/custom-header';
import { colorDefs, appColors } from '../../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import StatusComponent from '../../controls/status';
import imgChat from '../../../assets/images/imageChat.png';
import imgProfilePic from '../../../assets/images/profile_pic.png';
// import {showHideAcceptBid} from './received-bid-detail.actions';
import { profileData } from '../../../data/profile';


const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function ReceivedbidsDetails(props) {
  const showPlaceBidsModal = () => {
    props.showHideAcceptBid();
  };

  const onPressProfile = () => {
    props.showProfile(profileData[1]);
    props.navigation.navigate('Profile');
  };

  const acceptBid = data => {
    props.acceptBid(data);
  };

  return (
    <View style={styles.container} behavior="position">
      <CustomHeader
        navigation={props.navigation}
        showBackButton={true}
        title={receivedbidDetailStrings.WELCOME_MESSAGE}
      />
      <ScrollView>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <StatusComponent
            status={props.state.receivedBidDetailReducer.data.status}
          />
          <OtpModal
            {...props}
            showAcceptBid={props.state.receivedBidDetailReducer.showAcceptBid}
            hideAcceptBid={props.showHideAcceptBid}
            acceptBid={acceptBid}
            data={props.state.receivedBidDetailReducer.data}
          />
          <View style={styles.bidContainer}>
            <Text style={styles.heading}>Biddder Details</Text>
            <TouchableOpacity
              style={styles.userDetailContainer}
              onPress={onPressProfile}>
              <Image source={imgProfilePic} style={styles.userProfilePic} />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>
                  {props.state.receivedBidDetailReducer.data.bidder}
                </Text>
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
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Bidded Credits :</Text>
              <Text style={styles.lblText}>
                {props.state.receivedBidDetailReducer.data.credits}
              </Text>
            </View>
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Help Duration :</Text>
              <Text style={styles.lblText}>
                {props.state.receivedBidDetailReducer.data.help_duration}
              </Text>
            </View>
            <Text style={styles.lblTitle}>Commments :</Text>
            <Text style={styles.lblDesc}>
              test comments test comments testing comments tested comments
            </Text>
          </View>
          <View style={styles.bidContainer}>
            <Text style={styles.heading}>Help Details</Text>
            <Text style={styles.title}>
              {props.state.receivedBidDetailReducer.data.upakar_name}
            </Text>
            <Text style={styles.lblDesc}>
              Need someone who can help picking me up @Uppal bus stand at 8 AM,
              20th June
            </Text>
            <View style={styles.rowConatiner}>
              <Text style={styles.lables}>Help Duration :</Text>
              <Text style={styles.lblText}>
                {props.state.receivedBidDetailReducer.data.help_duration}
              </Text>
            </View>
          </View>

          {props.state.receivedBidDetailReducer.data.status === 'PENDING' ? (
            <TouchableOpacity
              style={styles.submit}
              onPress={showPlaceBidsModal}>
              <Text style={styles.lblSubmit}>
                {receivedbidDetailStrings.ACCEPT_BID}
              </Text>
            </TouchableOpacity>
          ) : (
              <View style={styles.bidContainer}>
                <View style={styles.rowConatiner}>
                  <Text style={styles.lables}>{'End OTP:'}</Text>
                  <Text style={styles.lblOtp}>{'1234'}</Text>
                </View>
              </View>
            )}
        </KeyboardAvoidingView>
      </ScrollView>

      {/* <TouchableOpacity style={styles.floatingButton}>
        <Image source={imgChat} style={styles.chatbtn} />
      </TouchableOpacity> */}
    </View>
  );
}


function OtpModal(props) {
  const [otpValue, setOtp] = useState('');

  const onOtpChange = value => {
    setOtp(value);
  };

  const hidePlaceBidModal = () => {
    props.hideAcceptBid();
  };

  const acceptBid = async () => {
    props.showLoader();
    props.data.status = 'ACCEPTED';
    props.acceptBid(props.data);
    await sleep(500);
    props.hideLoader();
    Alert.alert(
      'Start Help',
      'Yay! Help has been started',
      [
        { text: 'OK', onPress: () => props.hideAcceptBid() }
      ],
      { cancelable: false }
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showAcceptBid}
      onRequestClose={hidePlaceBidModal}>
      <ScrollView style={styles.modalScrollView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.heading}>Enter Otp</Text>
            <TextInput
              placeholder="Enter Start Otp"
              onChangeText={onOtpChange}
              value={otpValue}
              style={styles.textInput}
              keyboardType="number-pad"
            />
            <Text style={styles.getOtptext}>
              {'*please get the start otp from the bidder'}
            </Text>
            <View style={styles.modalBtnsContainer}>
              <TouchableOpacity
                style={styles.modalCancelBtn}
                onPress={hidePlaceBidModal}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalSaveBtn} onPress={acceptBid}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
