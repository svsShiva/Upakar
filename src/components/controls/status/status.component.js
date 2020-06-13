import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './status.styles';
import {appColors} from '../../../constants/colors';
export default function StatusComponent(props) {
  var getColor = () => {
    switch (props.status) {
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
  var getStyle = () => {
    return [styles.container, {backgroundColor: getColor()}];
  };
  return (
    <View style={getStyle()}>
      <Text style={styles.lblstatus}>{props.status}</Text>
    </View>
  );
}
