import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from './Screens/MainScreen';
import DetailsScreen from './Screens/DetailsScreen';
import CategoryScreen from './Screens/CategoryScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation:'slide_from_bottom'}}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
