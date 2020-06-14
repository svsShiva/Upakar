import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../components/pages/login';
import Register from '../components/pages/register';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
      <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
  );
}

export default AuthNavigation;