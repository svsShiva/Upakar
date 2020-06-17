import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { placedBidsStrings, receivedBidsStrings } from '../../../constants/strings';
import { styles } from './receivedbids.styles';
import CustomHeader from '../../controls/custom-header';
import BidCard from '../../controls/bid-card';
import { getHelpsByUserId } from '../../../services/data-services'
import { cos } from 'react-native-reanimated';
import { helpDetails } from '../../../data/dashboard-detail';

export default function ReceivedBids(props) {

  const getRenderItem = ({ item, index }) => {
    return (
      <BidCard {...props} data={item} key={index} nav="RecievedBidDetail" otptext="End OTP" />
    );
  };

  const getKeyExtractor = (item, index) => item.id;

  const getFooterComponent = () => {
    return <View style={{ height: 20 }} />;
  };

  const myHelps = getHelpsByUserId(props.state.globalReducer.loggedUser._id);
  let bids = [];


  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={props.navigation}
        title={receivedBidsStrings.WELCOME_MESSAGE}
      />
      {myHelps[0].bids.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={myHelps[0].bids}
          renderItem={getRenderItem}
          keyExtractor={getKeyExtractor}
          ListFooterComponent={getFooterComponent}
          style={styles.flatlist}
        />
      ) : (
          <Text>Hello</Text>
        )}
    </View>
  );
}
