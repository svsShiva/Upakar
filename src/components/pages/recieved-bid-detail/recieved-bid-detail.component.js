import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image
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
import imgChat from '../../../assets/images/imageChat.png';


export default function RecievedbidsDetails(props) {
  
  return (
    <View style={styles.container} behavior="position">
      <CustomHeader
        navigation={props.navigation}
        showBackButton={true}
        title={recievedbidDetailStrings.WELCOME_MESSAGE}
      />
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <StatusComponent
            status={props.state.receivedBidDetailReducer.data.status}
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
            <TouchableOpacity style={styles.submit}>
              <Text style={styles.lblSubmit}>
                {recievedbidDetailStrings.ACCEPT_BID}
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

      <TouchableOpacity style={styles.floatingButton}>
        {/* <Text style={styles.lblChat}>Chat</Text> */}
        <Image source={imgChat} style={styles.chatbtn} />
      </TouchableOpacity>
    </View>
  );
}
