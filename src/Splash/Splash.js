import React, { useEffect } from 'react';
import {
  View
} from 'react-native';

import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import TouchID from 'react-native-touch-id';
import colors from '../Utils/colors';

export default function BemVindo(props) {

  const navigation = useNavigation();

  useEffect(() => {
    async function buscarTokenAsyncStorage() {
      const userToken = await AsyncStorage.getItem('@ListApp:userToken');
      userToken
        ?
        biometria()
        :
        null
    }

    setTimeout(buscarTokenAsyncStorage, 2500);
  }, []);

  function biometria() {
    const configs = {
      title: "Autenticação requerida",
      color: colors.red,
      sensorErrorDescription: 'Biometria inválida',
      sensorDescription: 'Toque no sensor',
      cancelText: 'Cancelar',
      imageErrorColor: colors.red
    };
    TouchID.authenticate("Verificação de login", configs)
      .then((success) => {
        console.log("Sucesso na autenticação")
        props.navigation.navigate('HomeModulos');
      })
      .catch((error) => {
        console.log("Falha na autenticação " + error)
        props.navigation.navigate('Login');
      })
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
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