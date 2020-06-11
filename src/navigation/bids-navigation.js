import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import PlacedBids from '../components/pages/placedbids';
import ReceivedBids from '../components/pages/receivedbids';
import PlacedbidDetail from '../components/pages/placed-bid-detail';
import RecievedbiDetail from '../components/pages/recieved-bid-detail';
import imgplacedbid from '../assets/images/placedbid.png';
import imgrecievedbid from '../assets/images/recievedbid.png';
import {appColors} from '../constants/colors';

const Tab = createBottomTabNavigator();
const stackPlacedBids = createStackNavigator();
const stackrecievedBids = createStackNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    if (route.name === 'Placed Bids') {
      iconName = imgplacedbid;
    } else if (route.name === 'Received Bids') {
      iconName = imgrecievedbid;
    }
    return (
      <Image
        source={iconName}
        style={{width: 30, height: 30, tintColor: color}}
      />
    );
  },
});
const tabbaroptions = {
  activeTintColor: appColors.GRADIENT_RIGHT,
  inactiveTintColor: appColors.LIGHT_TRANSPARENT,
};
function placedbids() {
  return (
    <stackPlacedBids.Navigator
      initialRouteName="Placed Bids Home"
      headerMode="none">
      <stackPlacedBids.Screen name="Placed Bids Home" component={PlacedBids} />
      <stackPlacedBids.Screen
        name="PlacedBidDetail"
        component={PlacedbidDetail}
      />
    </stackPlacedBids.Navigator>
  );
}
function receivedbids() {
  return (
    <stackrecievedBids.Navigator
      initialRouteName="Recieved Bids Home"
      headerMode="none">
      <stackrecievedBids.Screen
        name="Recieved Bids Home"
        component={ReceivedBids}
      />
      <stackrecievedBids.Screen
        name="RecievedBidDetail"
        component={RecievedbiDetail}
      />
    </stackrecievedBids.Navigator>
  );
}
function BidsNavigations() {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabbaroptions}>
      <Tab.Screen name="Placed Bids" component={placedbids} />
      <Tab.Screen name="Received Bids" component={receivedbids} />
    </Tab.Navigator>
  );
}

export default BidsNavigations;
