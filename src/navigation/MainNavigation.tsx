import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import {darkTheme} from '../utils/theme/colors';

const MainNavigation = () => {
  return (
    <NavigationContainer theme={darkTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
