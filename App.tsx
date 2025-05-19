import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
import { View } from 'react-native';

enableScreens();

const App = () => (
  <View style={{flex: 1, backgroundColor: '#211C2A'}}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </View>
);

export default App;
