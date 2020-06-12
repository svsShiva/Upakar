import React, {useState} from 'react';
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

import {
  placedbidDetailStrings,
  receivedbidDetailStrings,
} from '../../../constants/strings';
import {styles} from './received-bid-detail.styles';
import CustomHeader from '../../controls/custom-header';
import {colorDefs} from '../../../constants/colors';
import {ScrollView} from 'react-native-gesture-handler';
import StatusComponent from '../../controls/status';
import imgChat from '../../../assets/images/imageChat.png';
// import {showHideAcceptBid} from './received-bid-detail.actions';

export default function ReceivedbidsDetails(props) {
  const showPlaceBidsModal = () => {
    props.showHideAcceptBid();
  };
  return (
    <View style={styles.container} behavior="position">
      <CustomHeader
        navigation={props.navigation}
        showBackButton={true}
        title={receivedbidDetailStrings.WELCOME_MESSAGE}
      />
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <StatusComponent
            status={props.state.receivedBidDetailReducer.data.status}
          />
          <OtpModal
            showAcceptBid={
              props.state.receivedBidDetailReducer.showAcceptBid
            }
            hideAcceptBid={props.showHideAcceptBid}
          />
          <View style={styles.bidContainer}>
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Bidder :</Text>
              <Text style={styles.lblDesc}>
                {props.state.receivedBidDetailReducer.data.bidder}
              </Text>
            </View>
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Credits :</Text>
              <Text style={styles.lblDesc}>
                {props.state.receivedBidDetailReducer.data.credits}
              </Text>
            </View>
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Help Duration :</Text>
              <Text style={styles.lblDesc}>
                {props.state.receivedBidDetailReducer.data.help_duration}
              </Text>
            </View>
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Ratings :</Text>
              <Text style={styles.lblDesc}>3.5</Text>
            </View>
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Commments :</Text>
              <Text style={styles.lblDesc}>Testing comments</Text>
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
            <View style={styles.help}>
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
  var onOtpChange = value => {
    setOtp(value);
  };
  const hidePlaceBidModal = () => {
    props.hideAcceptBid();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showAcceptBid}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.heading}>Enter Otp</Text>
          <TextInput
            placeholder="Enter Start Otp"
            onChangeText={onOtpChange}
            value={otpValue}
            style={styles.textInput}
          />
          <Text style={styles.getOtptext}>
            {'*please get the start otp from the respective bidder'}
          </Text>
          <View style={styles.modalBtnsContainer}>
            <TouchableOpacity
              style={styles.modalCancelBtn}
              onPress={hidePlaceBidModal}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalSaveBtn}
              onPress={hidePlaceBidModal}>
              <Text style={styles.textStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
