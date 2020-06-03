import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyHelps from '../components/pages/myhelps';
import MyHelpsDetail from '../components/pages/myhelps-detail';
import CustomHeader from '../components/controls/custom-header'

const Stack = createStackNavigator();

function MyHelpsNavigation() {
  return (
      <Stack.Navigator initialRouteName="MyHelps" headerMode="screen"
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
            <Stack.Screen name="MyHelps" component={MyHelps} />
            <Stack.Screen name="MyHelpsDetail" component={MyHelpsDetail} />
      </Stack.Navigator>
  );
}

export default MyHelpsNavigation;