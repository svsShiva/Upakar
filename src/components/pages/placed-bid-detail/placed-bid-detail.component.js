import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button, Image} from 'react-native';

import {
  placedbidDetailStrings,
  placedBidsStrings,
} from '../../../constants/strings';
import {styles} from './placed-bid-detail.styles';
import CustomHeader from '../../controls/custom-header';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import StatusComponent from '../../controls/status';
import imgChat from '../../../assets/images/imageChat.png';
export default function PlacedbidsDetails(props) {
  const [helpDuration, sethelpDuration] = useState('');
  const [editable, setEditable] = useState(false);
  const [otp, setOtp] = useState('');
  console.log('Plced Bid Details ', props.state.placedBidsReducer.selectedBid);
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
    console.log('On edit press');
    setEditable(true);
  };
  var onCancel = () => {
    setEditable(false);
  };
  var onSave = () => {
    console.log(helpDuration);
    // props.state.placedBidsReducer.selectedBid.help_duration = helpDuration;
    setEditable(false);
  };
  return (
    <View style={styles.outerContainer}>
      <CustomHeader
        navigation={props.navigation}
        showBackButton={true}
        title={placedbidDetailStrings.WELCOME_MESSAGE}
      />
      <StatusComponent
        status={props.state.placedBidsReducer.selectedBid.status}
      />
      <ScrollView>
        <View style={styles.help}>
          <Text style={styles.heading}>Bid Details</Text>
          <View style={styles.rowConatiner}>
            <Text style={styles.title}>Credits:</Text>
            <Text style={styles.textFields}>
              {props.state.placedBidsReducer.selectedBid.credits}
            </Text>
          </View>

          <View style={styles.helpDetails}>
            <View style={styles.bidsCountWrapper}>
              <Text style={styles.lblHelpDuration}>{'Help Duration'}</Text>
              <TextInput
                style={styles.helpDuration}
                onChangeText={handleHelpDuration}
                defaultValue={
                  props.state.placedBidsReducer.selectedBid.help_duration
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
          {/* <Text style={styles.title}>Title</Text> */}
          <Text style={styles.title}>
            {props.state.placedBidsReducer.selectedBid.upakar_name}
          </Text>
          {/* <Text style={styles.lables}>Description</Text> */}
          <Text style={styles.lblDesc}>
            Need someone who can help picking me up @Uppal bus stand at 8 AM,
            20th June
          </Text>
          {/* <View style={styles.helpDetails}>
            <View style={styles.bidsCountWrapper}>
              <Text style={styles.lables}>{'Category'}</Text>
              <Text style={styles.textFields}>{'Category 1'}</Text>
            </View>
            <View style={styles.baseValueWrapper}>
              <Text style={styles.lables}>{'Sub Category '}</Text>
              <Text style={styles.textFields}>{'Sub Category'}</Text>
            </View>
          </View> */}
          <View style={styles.rowConatiner}>
            <Text style={styles.lables}>Help Duration:</Text>
            <Text style={styles.textFields}>
              {props.state.placedBidsReducer.selectedBid.help_duration}
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
      <TouchableOpacity style={styles.floatingButton}>
        {/* <Text style={styles.lblChat}>Chat</Text> */}
        <Image source={imgChat} style={styles.chatbtn} />
      </TouchableOpacity>
      {props.state.placedBidsReducer.selectedBid.status === 'ACCEPTED' ? (
        <TouchableOpacity style={styles.endHelp}>
          <Text style={styles.lblendHelp}>End the Help</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}
