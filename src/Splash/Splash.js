import React from 'react';
import {
  View,
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native';

export default function BemVindo() {

  const navigation = useNavigation();
  

  return (
      <View style={{flex: 1, justifyContent: "center", alignItems:'center'}}>
        <Lottie 
          source={require('../assets/splash.json')} 
          autoPlay 
          loop={false}
          onAnimationFinish={() => navigation.navigate("Login")}
          resizeMode="cover"
          speed={1.5}
        />
      </View>
  );
};



