import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../components/pages/dashboard';
import DashboardDetail from '../components/pages/dashboard-detail';

const Stack = createStackNavigator();

function DashboardNavigation() {
  return (
      <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="DashboardDetail" component={DashboardDetail} />
      </Stack.Navigator>
  );
}

export default DashboardNavigation;