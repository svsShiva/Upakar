import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PlacedBids from '../components/pages/placedbids';
import ReceivedBids from '../components/pages/receivedbids';
import {createStackNavigator} from '@react-navigation/stack';
import PlacedbidDetail from '../components/pages/placed-bid-detail';
import RecievedbiDetail from '../components/pages/recieved-bid-detail';

const Tab = createBottomTabNavigator();
const stackPlacedBids = createStackNavigator();
const stackrecievedBids = createStackNavigator();

function placedbids() {
  return (
    <stackPlacedBids.Navigator initialRouteName="Placed Bids Home" headerMode="none">
      <stackPlacedBids.Screen name="Placed Bids Home" component={PlacedBids} />
      <stackPlacedBids.Screen name="PlacedBidDetail" component={PlacedbidDetail} />
    </stackPlacedBids.Navigator>
  );
}
function receivedbids(){
  return(
    <stackrecievedBids.Navigator initialRouteName="Recieved Bids Home" headerMode="none"> 
      <stackrecievedBids.Screen name="Recieved Bids Home" component={ReceivedBids} />
      <stackrecievedBids.Screen name="RecievedBidDetail" component={RecievedbiDetail} />
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
