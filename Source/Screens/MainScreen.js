import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CategoriesScreen from './CategoriesScreen';
import SearchScreen from './SearchScreen';
import Best250Movies from './Best250Movies';
import Best250Series from './Best250Series';
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
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Best 250 Movies" component={Best250Movies} />
        <Tab.Screen name="Best 250 TV Series" component={Best250Series} />
      </Tab.Navigator>
  )
}

export default MainScreen;
