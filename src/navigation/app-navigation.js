import * as React from 'react';
import Dashboard from '../components/pages/dashboard'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  return (
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Dashboard2" component={Dashboard} />
      </Drawer.Navigator>
  );
}