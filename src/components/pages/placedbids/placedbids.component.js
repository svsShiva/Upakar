import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { placedBidsStrings } from '../../../constants/strings';
import { styles } from './placedbids.styles';
import CustomHeader from '../../controls/custom-header';
import { bids } from '../../../data/bids';
import BidCard from '../../controls/bid-card';

export default function PlacedBids(props) {

  var getRenderItem = ({ item, index }) => {
    return <BidCard {...props} data={item} key={index} nav="PlacedBidDetail" otptext="Start OTP" />;
  };

  var getKeyExtractor = (item, index) => item.id;

  var getFooterComponent = () => {
    return <View style={{ height: 20 }} />;
  };


  const placedBids = [];

  bids.forEach(bid => {
    if(bid.bidder == props.state.globalReducer.loggedUser._id){
      placedBids.push(bid)
    }
  });

  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={props.navigation}
        title={placedBidsStrings.WELCOME_MESSAGE}
      />
      {placedBids.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={placedBids}
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
