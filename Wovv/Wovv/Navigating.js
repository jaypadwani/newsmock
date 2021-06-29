import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
;


const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{ title: 'Calculator' }}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
