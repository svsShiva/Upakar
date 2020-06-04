import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PlacedBids from '../components/pages/placedbids';
import ReceivedBids from '../components/pages/receivedbids';
import {createStackNavigator} from '@react-navigation/stack';
import BidDetail from '../components/pages/bids-detail';

const Tab = createBottomTabNavigator();
const stackPlacedBids = createStackNavigator();
const stackrecievedBids = createStackNavigator();

function placedbids() {
  return (
    <stackPlacedBids.Navigator initialRouteName="Placed Bids Home" headerMode="none">
      <stackPlacedBids.Screen name="Placed Bids Home" component={PlacedBids} />
      <stackPlacedBids.Screen name="BidDeatil" component={BidDetail} />
    </stackPlacedBids.Navigator>
  );
}
function receivedbids(){
  return(
    <stackrecievedBids.Navigator initialRouteName="Recieved Bids Home" headerMode="none"> 
      <stackrecievedBids.Screen name="Recieved Bids Home" component={ReceivedBids} />
      <stackrecievedBids.Screen name="BidDetail" component={BidDetail} />
    </stackrecievedBids.Navigator>
  );
}
function BidsNavigations() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Placed Bids" component={placedbids} />
      <Tab.Screen name="Received Bids" component={receivedbids} />
    </Tab.Navigator>
  );
}

export default BidsNavigations;
