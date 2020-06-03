import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../components/pages/dashboard';
import DashboardDetail from '../components/pages/dashboard-detail';
import CustomHeader from '../components/controls/custom-header'

const Stack = createStackNavigator();

function DashboardNavigation() {
  return (
    <Stack.Navigator initialRouteName="Dashboard" headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
                ? options.title
                : scene.route.name;

          return (
            <CustomHeader
              title={"Welcome"}
              // leftButton={ 
              //   previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
              // }
              navigation={navigation}
              style={options.headerStyle}
            />
          );
        },
        headerStyle: {
          height: 80, // Specify the height of your custom header
        },
        headerTitleAlign: "center"
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DashboardDetail" component={DashboardDetail} />
    </Stack.Navigator >
  );
}

export default DashboardNavigation;