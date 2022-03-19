import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setCustomText} from 'react-native-global-props';

import MainScreen from './Screens/MainScreen';
import ActorScreen from './Screens/ActorScreen';
import SeasonScreen from './Screens/SeasonScreen';
import DetailsScreen from './Screens/DetailsScreen';
import WelcomeScreen  from './Screens/WelcomeScreen';
import CategoryScreen  from './Screens/CategoryScreen';

const globalTextProps = {
  style: {
    fontFamily: 'Montserrat-Regular'
  }
};

setCustomText(globalTextProps);

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
    <StatusBar
        animated={true}
        backgroundColor='#262625'
        />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation:'slide_from_bottom'}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="ActorScreen" component={ActorScreen} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="SeasonScreen" component={SeasonScreen} />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App;
