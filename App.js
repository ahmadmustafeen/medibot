/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/navigator';
import { navigationRef } from './NavigationService';



const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Navigator ref={navigationRef} />
    </View>
  )
};

export default App;
