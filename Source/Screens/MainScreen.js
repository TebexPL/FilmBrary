import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchScreen from './SearchScreen';
import TabItem from './Components/TabItem';

const Tab = createBottomTabNavigator();

const MainScreen = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          return <TabItem
                  route={route}
                  focused={focused}
                  color={color}
                  size={size} />
        }})}>
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
  )
}

export default MainScreen;
