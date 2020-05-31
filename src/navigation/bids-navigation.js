import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlacedBids from '../components/pages/placedbids';
import ReceivedBids from '../components/pages/receivedbids';

const Tab = createBottomTabNavigator();

function BidsNavigations() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Placed Bids" component={PlacedBids} />
      <Tab.Screen name="Received Bids" component={ReceivedBids} />
    </Tab.Navigator>
  );
}

export default BidsNavigations;