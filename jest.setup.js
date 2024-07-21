import {jest} from '@jest/globals';
import 'react-native-gesture-handler/jestSetup';

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // Override the default call method with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-webview', () => {
  const {View} = require('react-native');
  const MockWebView = props => {
    return <View {...props} />;
  };
  return MockWebView;
});

jest.mock(
  'react-native/Libraries/NewAppScreen/components/logo.png',
  () => 'test-file-stub',
);
