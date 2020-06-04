import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {placedBidsStrings} from '../../../constants/strings';
import {styles} from './placedbids.styles';
import CustomHeader from '../../controls/custom-header';
import {bidsData} from '../../../data/bids';
import BidCard from '../../controls/bid-card';

export default function PlacedBids(props) {
  var onBidClick = () => {
    console.log(props.nav);
    props.navigation.navigate('PlacedBidDetail');
    // console.log('Bid clicked');
  };

  var getRenderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={onBidClick}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{item.upakar_name}</Text>
          <View style={styles.box}>
            <View style={styles.creditContainer}>
              <Text style={styles.lblCredit}>{item.credits}</Text>
              <Text style={styles.lable}>{placedBidsStrings.CREDTS}</Text>
            </View>
            <View style={styles.expiryContainer}>
              <Text style={styles.lblExpiration}>
                {new Date().toDateString()}
              </Text>
              <Text style={styles.lable}>{placedBidsStrings.END_TIME}</Text>
            </View>
            <View style={styles.durationContainer}>
              <Text style={styles.lblduration}>{item.help_duration}</Text>
              <Text style={styles.lable}>{placedBidsStrings.DURATION}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
        title={placedBidsStrings.WELCOME_MESSAGE}
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
