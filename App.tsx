import React from 'react';
import {SafeAreaView, StatusBar, LogBox} from 'react-native';
import MyNavigation from './Src/Utils/Naviagtion/MyNavigation';

function App(): JSX.Element {
  LogBox.ignoreLogs([
    'Deprecation warning: value provided is not in a recognized',
    'ViewPropTypes will be removed from React Native',
  ]);
  return (
    <>
      <SafeAreaView />
      <StatusBar />
      <MyNavigation />
    </>
  );
}

export default App;
