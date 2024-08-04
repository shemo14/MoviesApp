import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {Toast} from './src/common';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigation />
        <Toast />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
