import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TitleScreen from './Screens/TitleScreen';
import MainScreen from './Screens/MainScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="TitleScreen" component={TitleScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
