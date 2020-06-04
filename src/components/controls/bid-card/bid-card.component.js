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
import {styles} from './bid-card.styles';

export default function BidCard(props) {
  var onBidClick = data => {
    console.log(props.nav);
    props.navigation.navigate(props.nav);
    // console.log('Bid clicked');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onBidClick}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{props.data.upakar_name}</Text>
        <View style={styles.box}>
          <View style={styles.lblContainer}>
            <Text style={styles.lblCredit}>{props.data.credits}</Text>
            <Text>credit</Text>
          </View>
          <View style={styles.lblContainer_2}>
            <Text style={styles.lblduration}>{props.data.help_duration}</Text>
            <Text>duration</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
