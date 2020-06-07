import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  placedbidDetailStrings,
  recievedbidDetailStrings,
} from '../../../constants/strings';
import {styles} from './recieved-bid-detail.styles';
import CustomHeader from '../../controls/custom-header';
import {colorDefs} from '../../../constants/colors';
import {ScrollView} from 'react-native-gesture-handler';
import StatusComponent from '../../controls/status';

export default function RecievedbidsDetails(props) {
  console.log("Recieved Bid Details ",props.state.receivedBidsReducer.selectedBid)
  return (
    <View style={styles.container} behavior="position">
      <CustomHeader
        navigation={props.navigation}
        showBackButton={true}
        title={recievedbidDetailStrings.WELCOME_MESSAGE}
      />
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <StatusComponent status={props.state.receivedBidsReducer.selectedBid.status} />
          <View style={styles.bidContainer}>
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Bidder :</Text>
              <Text style={styles.lblDesc}>{props.state.receivedBidsReducer.selectedBid.bidder}</Text>
            </View>
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Credits :</Text>
              <Text style={styles.lblDesc}>{props.state.receivedBidsReducer.selectedBid.credits}</Text>
            </View>
            <View style={styles.bidContainerRow}>
              <Text style={styles.lblTitle}>Help Duration :</Text>
  <Text style={styles.lblDesc}>{props.state.receivedBidsReducer.selectedBid.help_duration}</Text>
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
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.lblSubmit}>
              {recievedbidDetailStrings.ACCEPT_BID}
            </Text>
          </TouchableOpacity>
          <View style={styles.otpConatiner}>
            <Text style={styles.lblTitle}>OTP:</Text>
            <Text style={styles.otpInput}>1234</Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.lblChat}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}
