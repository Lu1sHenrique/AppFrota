import React, {useEffect} from 'react';
import {
  View
} from 'react-native';

import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BemVindo(props) {

  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await AsyncStorage.getItem('@ListApp:userToken');

      props.navigation.navigate(userToken ? 'HomeModulos' : 'Login');
    }

    handleUserNextScreen();
  }, []);

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



