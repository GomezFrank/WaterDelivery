import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './navigation/app-navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
