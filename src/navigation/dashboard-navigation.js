import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../components/pages/dashboard';
import CreateHelp from '../components/pages/createhelp';
import DashboardDetail from '../components/pages/dashboard-detail';
import CustomHeader from '../components/controls/custom-header'

const Stack = createStackNavigator();

function DashboardNavigation() {
  return (
    <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
      {/* <Stack.Screen name="Dashboard" component={CreateHelp} /> */}
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DashboardDetail" component={DashboardDetail} />
    </Stack.Navigator >
  );
}

export default DashboardNavigation;