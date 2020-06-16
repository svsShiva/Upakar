import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  Modal,
  Alert,
} from 'react-native';

import { placedbidDetailStrings } from '../../../constants/strings';
import { styles } from './placed-bid-detail.styles';
import CustomHeader from '../../controls/custom-header';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import StatusComponent from '../../controls/status';
import imgChat from '../../../assets/images/imageChat.png';


const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function PlacedbidsDetails(props) {
  const [helpDuration, sethelpDuration] = useState('');
  const [editable, setEditable] = useState(false);
  const [otp, setOtp] = useState('');

  var state = {
    helpDuration: '',
    editable: false,
  };

  var handleHelpDuration = text => {
    state.helpDuration = text;
    sethelpDuration(text);
  };

  var handleOTP = text => {
    setOtp(text);
  };

  var onEditPress = () => {
    setEditable(true);
  };

  var onCancel = () => {
    setEditable(false);
  };

  var onSave = () => {
    setEditable(false);
  };

  const showHideEndHelp = () => {
    props.showHideEndHelp();
  };

  const endHelp = data => {
    props.endHelp(data);
  };

  return (
    <View style={styles.outerContainer}>
      <CustomHeader
        navigation={props.navigation}
        showBackButton={true}
        title={placedbidDetailStrings.WELCOME_MESSAGE}
      />
      <StatusComponent
        status={props.state.placedBidDetailReducer.data.status}
      />
      <ScrollView>
        <OtpModal
          {...props}
          showEndHelp={props.state.placedBidDetailReducer.showEndHelp}
          hidePlaceBidModal={props.showHideEndHelp}
          data={props.state.placedBidDetailReducer.data}
          endHelp={endHelp}
        />
        <View style={styles.help}>
          <Text style={styles.heading}>Bid Details</Text>
          <View style={styles.rowConatiner}>
            <Text style={styles.title}>Credits:</Text>
            <Text style={styles.textFields}>
              {props.state.placedBidDetailReducer.data.credits}
            </Text>
          </View>

          <View style={styles.helpDetails}>
            <View style={styles.bidsCountWrapper}>
              <Text style={styles.lblHelpDuration}>{'Help Duration'}</Text>
              <TextInput
                style={styles.helpDuration}
                onChangeText={handleHelpDuration}
                defaultValue={
                  props.state.placedBidDetailReducer.data.help_duration
                }
                text={helpDuration}
                editable={editable}
              />
            </View>
            <View style={styles.baseValueWrapper}>
              <Text style={styles.lables} onPress={onEditPress}>
                {'Edit'}
              </Text>
            </View>
          </View>
          <Text style={styles.lables}>Comments</Text>
          <Text style={styles.lblDesc}>
            Need someone who can help picking me up @Uppal bus stand at 8 AM,
            20th June
          </Text>
          {editable ? (
            <View style={styles.helpDetails}>
              <View style={styles.baseValueWrapper}>
                <TouchableOpacity
                  onPress={onCancel}
                  disabled={!editable}
                  style={
                    editable
                      ? styles.submitButtons
                      : styles.submitButtonDisabled
                  }>
                  <Text style={styles.submitBtnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bidsCountWrapper}>
                <TouchableOpacity
                  onPress={onSave}
                  disabled={!editable}
                  style={
                    editable
                      ? styles.submitButtons
                      : styles.submitButtonDisabled
                  }>
                  <Text style={styles.submitBtnText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
              <View />
            )}
        </View>
        <View style={styles.help}>
          <Text style={styles.heading}>Help Details</Text>
          <Text style={styles.title}>
            {props.state.placedBidDetailReducer.data.upakar_name}
          </Text>
          <Text style={styles.lblDesc}>
            Need someone who can help picking me up @Uppal bus stand at 8 AM,
            20th June
          </Text>
          <View style={styles.rowConatiner}>
            <Text style={styles.lables}>Help Duration:</Text>
            <Text style={styles.textFields}>
              {props.state.placedBidDetailReducer.data.help_duration}
            </Text>
          </View>
        </View>

        <View style={styles.help}>
          <View style={styles.rowConatiner}>
            <Text style={styles.lables}>{'Start OTP:'}</Text>
            <Text style={styles.lblOtp}>{'1234'}</Text>
          </View>
        </View>
      </ScrollView>
      {/* <TouchableOpacity style={styles.floatingButton}>
        <Image source={imgChat} style={styles.chatbtn} />
      </TouchableOpacity> */}
      {props.state.placedBidDetailReducer.data.status === 'ACCEPTED' ? (
        <TouchableOpacity style={styles.endHelp} onPress={showHideEndHelp}>
          <Text style={styles.lblendHelp}>End the Help</Text>
        </TouchableOpacity>
      ) : (
          <View />
        )}
    </View>
  );
}

function OtpModal(props) {
  const [otpValue, setOtp] = useState('');

  const onOtpChange = value => {
    setOtp(value);
  };

  const hidePlaceBidModal = () => {
    props.hidePlaceBidModal();
  };

  const endHelp = async () => {
    props.showLoader();
    props.data.status = 'SUCCESS';
    props.endHelp(props.data);
    await sleep(500);
    props.hideLoader();
    Alert.alert(
      'End Help',
      'Hey! Upakar thanks you for helping',
      [
        { text: 'OK', onPress: () => props.hidePlaceBidModal() }
      ],
      { cancelable: false }
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showEndHelp}
      onRequestClose={hidePlaceBidModal}>
      <ScrollView style={styles.modalScrollView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.heading}>Enter Otp</Text>
            <TextInput
              placeholder="Enter End Otp"
              onChangeText={onOtpChange}
              value={otpValue}
              style={styles.textInput}
              keyboardType="number-pad"
            />
            <Text style={styles.getOtptext}>
              {'*please get the end otp from the help seeker'}
            </Text>
            <View style={styles.modalBtnsContainer}>
              <TouchableOpacity
                style={styles.modalCancelBtn}
                onPress={hidePlaceBidModal}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalSaveBtn} onPress={endHelp}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
