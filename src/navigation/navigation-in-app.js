import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import SwitchNavigation from './switch-navigation';

function NavigationInApp() {
  return (
    <NavigationContainer>
        <SwitchNavigation />
    </NavigationContainer>
  );
}

export default NavigationInApp;