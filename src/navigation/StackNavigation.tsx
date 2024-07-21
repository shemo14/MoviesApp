import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {MovieDetails, SearchResult} from '../screens';
import {screens} from './ScreensEnum.ts';
import {
  useTheme,
  getFocusedRouteNameFromRoute,
  Route,
} from '@react-navigation/native';
import {RouteParams} from '../features/movies/interfaces.ts';

const Stack = createNativeStackNavigator<RouteParams>();

const StackNavigation = () => {
  const {colors} = useTheme();

  const getHeaderTitle = (route: Partial<Route<string>>) =>
    getFocusedRouteNameFromRoute(route) ?? 'Home';

  return (
    <Stack.Navigator screenOptions={{headerTintColor: colors.primary}}>
      <Stack.Screen
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
        name={'TabNavigation'}
        component={TabNavigation}
      />
      <Stack.Screen
        options={({route}) => ({title: route?.params?.movie.title})}
        name={screens.MovieDetails}
        component={MovieDetails}
      />
      <Stack.Screen
        options={{title: 'Search Result'}}
        name={screens.SearchResult}
        component={SearchResult}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
