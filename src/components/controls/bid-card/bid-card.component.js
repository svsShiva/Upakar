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
        <Text>{props.data.upakar_name}</Text>
        <Text>{props.data.credits}</Text>
        <Text>{props.data.help_duration}</Text>
      </View>
    </TouchableOpacity>
  );
}
