import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyHelps from '../components/pages/myhelps';
import MyHelpsDetail from '../components/pages/myhelps-detail';

const Stack = createStackNavigator();

function MyHelpsNavigation() {
  return (
      <Stack.Navigator initialRouteName="MyHelps">
            <Stack.Screen name="MyHelps" component={MyHelps} />
            <Stack.Screen name="MyHelpsDetail" component={MyHelpsDetail} />
      </Stack.Navigator>
  );
}

export default MyHelpsNavigation;