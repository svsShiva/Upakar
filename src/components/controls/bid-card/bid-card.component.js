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

import {colorDefs, appColors} from '../../../constants/colors';
import {placedBidsStrings} from '../../../constants/strings';
import {styles} from './bid-card.styles';

export default function BidCard(props) {
  var onBidClick = () => {
    console.log(props.nav);
    console.log(props);
    props.selectBid(props.data);
    props.navigation.navigate(props.nav);
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onBidClick}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{props.data.upakar_name}</Text>
        <View style={styles.box}>
          <View style={styles.creditContainer}>
            <Text style={styles.lblCredit}>{props.data.credits}</Text>
            <Text style={styles.lable}>{placedBidsStrings.CREDTS}</Text>
          </View>
          <View style={styles.expiryContainer}>
            <Text style={styles.lblExpiration}>
              {new Date().toDateString()}
            </Text>
            <Text style={styles.lable}>{placedBidsStrings.END_TIME}</Text>
          </View>
          <View style={styles.durationContainer}>
            <Text style={styles.lblduration}>{props.data.help_duration}</Text>
            <Text style={styles.lable}>{placedBidsStrings.DURATION}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
