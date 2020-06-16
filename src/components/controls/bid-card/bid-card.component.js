import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colorDefs, appColors } from '../../../constants/colors';
import { placedBidsStrings } from '../../../constants/strings';
import { styles } from './bid-card.styles';

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function BidCard(props) {

  const onBidClick = async () => {
    props.showLoader();
    props.showData(props.data);
    await sleep(500);
    props.hideLoader();
    props.navigation.navigate(props.nav);
  };

  const getStatusColor = _status => {
    switch (_status) {
      case 'ACCEPTED':
        return appColors.BID_ACCEPTED;
      case 'PENDING':
        return appColors.BID_PENDING;
      case 'SUCCESS':
        return appColors.BID_SUCCESS;
      case 'UNSUCCESSFUL':
        return appColors.BID_UNSUCCESSFUL;
    }
  };

  const cardStyle = _status => {
    return [styles.itemContainer, { borderLeftColor: getStatusColor(_status) }];
  };

  const statusStyle = _status => {
    let _color = getStatusColor(_status);
    return [styles.lblStatus, { backgroundColor: _color, borderColor: _color }];
  };


  return (
    <TouchableOpacity style={cardStyle(props.data.status)} onPress={onBidClick}>
      <View style={styles.wrapper}>
        <View style={styles.titleStatusContainer}>
          <Text style={styles.title}>{props.data.upakar_name}</Text>
          <Text style={statusStyle(props.data.status)}>
            {props.data.status.toLowerCase()}
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.creditContainer}>
            <Text style={styles.lblCredit}>{props.data.credits}</Text>
            <Text style={styles.lable}>{placedBidsStrings.CREDTS}</Text>
          </View>
          <View style={styles.durationContainer}>
            <Text style={styles.lblDuration}>{props.data.help_duration}</Text>
            <Text style={styles.lable}>{'Duration'}</Text>
          </View>
          <View style={styles.otpContainer}>
            <Text style={styles.lblOtp}>{'1234'}</Text>
            <Text style={styles.lable}>{props.otptext}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
