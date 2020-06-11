import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {placedBidsStrings,receivedBidsStrings} from '../../../constants/strings';
import {styles} from './receivedbids.styles';
import CustomHeader from '../../controls/custom-header';
import {bidsData} from '../../../data/bids';
import BidCard from '../../controls/bid-card';

export default function ReceivedBids(props) {
  
  var getRenderItem = ({item, index}) => {
    return (
      <BidCard {...props} data={item} key={index} nav="RecievedBidDetail" otptext="End OTP" />
    );
  };

  var getKeyExtractor = (item, index) => item.id;

  var getFooterComponent = () => {
    return <View style={{height: 20}} />;
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={props.navigation}
        title={receivedBidsStrings.WELCOME_MESSAGE}
      />
      {bidsData.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={bidsData}
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
