import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './status.styles';
export default function StatusComponent(props) {
  var Accepted = () => {
    return (
      <View style={styles.acceptConatiner}>
        <Text style={styles.lblstatus}>{props.status}</Text>
      </View>
    );
  };
  var Pending = () => {
    return (
      <View style={styles.pendingContainer}>
        <Text style={styles.lblstatus}>{props.status}</Text>
      </View>
    );
  };
  var Status = () => {
    switch (props.status) {
      case 'ACCEPTED':
        return Accepted();
      case 'PENDING':
        return Pending();
      default:
        return <View />;
    }
  };
  return <Status />;
}
