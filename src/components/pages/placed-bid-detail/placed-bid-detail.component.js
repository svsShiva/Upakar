import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

import {
  placedbidDetailStrings,
  placedBidsStrings,
} from '../../../constants/strings';
import {styles} from './placed-bid-detail.styles';
import CustomHeader from '../../controls/custom-header';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import StatusComponent from '../../controls/status';

export default function PlacedbidsDetails(props) {
  const [helpDuration, sethelpDuration] = useState(
  ''
  );
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
  return (
    <View style={styles.outerContainer}>
      <CustomHeader
        navigation={props.navigation}
        showBackButton={true}
        title={placedbidDetailStrings.WELCOME_MESSAGE}
      />
      <StatusComponent status= {props.state.placedBidsReducer.selectedBid.status} />
      <ScrollView>
        <View style={styles.help}>
          <Text style={styles.heading}>Help Details</Text>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.textFields}>
            {props.state.placedBidsReducer.selectedBid.upakar_name}
          </Text>
          <Text style={styles.lables}>Description</Text>
          <Text style={styles.textFields}>Description</Text>
          <View style={styles.helpDetails}>
            <View style={styles.bidsCountWrapper}>
              <Text style={styles.lables}>{'Category'}</Text>
              <Text style={styles.textFields}>{'Category 1'}</Text>
            </View>
            <View style={styles.baseValueWrapper}>
              <Text style={styles.lables}>{'Sub Category '}</Text>
              <Text style={styles.textFields}>{'Sub Category'}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.lables}>Help Duration</Text>
            <Text style={styles.textFields}>
              {props.state.placedBidsReducer.selectedBid.help_duration}
            </Text>
          </View>
        </View>
        <View style={styles.help}>
          <Text style={styles.heading}>Bid Details</Text>
          <Text style={styles.title}>Credits</Text>
          <Text style={styles.textFields}>
            {props.state.placedBidsReducer.selectedBid.credits}
          </Text>
          <View style={styles.helpDetails}>
            <View style={styles.bidsCountWrapper}>
              <Text style={styles.lables}>{'Help Duration'}</Text>
              <TextInput
                style={styles.helpDuration}
                onChangeText={handleHelpDuration}
                defaultValue={props.state.placedBidsReducer.selectedBid.help_duration}
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
          <Text style={styles.textFields}>SampleComments</Text>
          {editable ? (
            <View style={styles.helpDetails}>
              <View style={styles.bidsCountWrapper}>
                <TouchableOpacity
                  disabled={!editable}
                  style={
                    editable
                      ? styles.submitButtons
                      : styles.submitButtonDisabled
                  }>
                  <Text style={styles.submitBtnText}>Save</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.baseValueWrapper}>
                <TouchableOpacity
                  disabled={!editable}
                  style={
                    editable
                      ? styles.submitButtons
                      : styles.submitButtonDisabled
                  }>
                  <Text style={styles.submitBtnText}>Clear</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View />
          )}
        </View>
        <View style={styles.help}>
          <View style={styles.bidsCountWrapper}>
            <Text style={styles.lables}>{'OTP'}</Text>
            <TextInput
              style={styles.otpInput}
              value={otp}
              onChangeText={handleOTP}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.lblChat}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}
