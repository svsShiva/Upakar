import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/pages/login'

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
      <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
}

export default AuthNavigation;