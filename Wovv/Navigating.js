import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PageOne" component={PageOne} />

        <Stack.Screen name="PageTwo" component={PageTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
