import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashboardNavigation from './dashboard-navigation';
import MyHelpNavigation from './myhelps-navigation';
import BidsNavigation from './bids-navigation';
import CreateHelp from '../components/pages/createhelp';
import CustomDrawer from '../components/controls/custom-drawer'
import { colorDefs, appColors } from '../constants/colors';

const Drawer = createDrawerNavigator();

function AppNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerContentOptions={{
        activeTintColor: colorDefs.DARK_GREEN,
      }} >
      <Drawer.Screen name="Dashboard" component={DashboardNavigation} />
      <Drawer.Screen name="My Helps" component={MyHelpNavigation} />
      <Drawer.Screen name="Bids" component={BidsNavigation} />
      <Drawer.Screen name="Ask Help" component={CreateHelp} />
    </Drawer.Navigator>
  );
}

export default AppNavigation;