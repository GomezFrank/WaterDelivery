import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LottieView
        source={require('../res/animations/animation.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default HomeScreen;
