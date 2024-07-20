import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Movies, Search} from '../screens';
import {screens} from './ScreensEnum.ts';
import {useTheme} from '@react-navigation/native';
import {Home, Filter} from '../assets/svg';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.white,
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarInactiveTintColor: colors.black,
          tabBarIcon: ({color}) => <Home width={25} height={25} fill={color} />,
        }}
        name={screens.Movies}
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: 'Search',
          tabBarInactiveTintColor: colors.black,
          tabBarIcon: ({color}) => (
            <Filter width={25} height={25} fill={color} />
          ),
        }}
        name={screens.Search}
        component={Search}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
