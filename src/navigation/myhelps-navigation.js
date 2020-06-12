import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyHelps from '../components/pages/myhelps';
import MyHelpsDetail from '../components/pages/myhelps-detail';
import ReceivedBidDetail from '../components/pages/received-bid-detail';
import CustomHeader from '../components/controls/custom-header'

const Stack = createStackNavigator();

function MyHelpsNavigation() {
  return (
      <Stack.Navigator initialRouteName="MyHelps" headerMode="none">
            <Stack.Screen name="MyHelps" component={MyHelps} />
            <Stack.Screen name="MyHelpsDetail" component={MyHelpsDetail} />
            <Stack.Screen name="BidDetail" component={ReceivedBidDetail} />
      </Stack.Navigator>
  );
}

export default MyHelpsNavigation;