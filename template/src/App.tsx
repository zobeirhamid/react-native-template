import React from 'react';
import withTheme from 'library/higherOrderComponents/withTheme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from 'navigation/RootNavigation';

export default withTheme(() => (
  <GestureHandlerRootView style={{flex: 1}}>
    <RootNavigation />
  </GestureHandlerRootView>
));
