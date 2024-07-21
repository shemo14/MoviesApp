import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {Toast} from './src/common';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <MainNavigation />
        <Toast />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
