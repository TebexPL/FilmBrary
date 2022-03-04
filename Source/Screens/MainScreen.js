import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

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
        tabBarOptions: {showIcon : true},
        tabBarStyle:{ position:'absolute',
                      overflow:'hidden',
                      backgroundColor: '#3e3b39',
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                      },
        tabBarIcon: ({focused, color, size}) => {
          return <TabItem
                  route={route}
                  focused={focused}
                  color={color}
                  size={size} />
        }  })}>
        <Tab.Screen name="Categories" 
                    component={CategoriesScreen}
                   />
        <Tab.Screen name="Best 250 Movies" 
                    component={Best250Movies} />
        <Tab.Screen name="Best 250 TV Series" 
                    component={Best250Series} />
        <Tab.Screen name="Search" 
                    component={SearchScreen} />
      </Tab.Navigator>
  )
}

export default MainScreen;
