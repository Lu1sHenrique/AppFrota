import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

import Login from '../Login/Login'
import BemVindo from '../BemVindo/BemVindo'
import HomeModulos from '../HomeModulos/HomeModulos'

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Bem vindo"
      component={BemVindo}
      options={{
          headerShown:false
        }}
      />

      <Stack.Screen 
      name="Login"
      component={Login}
      options={{
        headerShown:false
        }}
      />

      <Stack.Screen 
      name="Home Modulos"
      component={HomeModulos}
      options={{
        headerShown:false
        }}
      />
    </Stack.Navigator>
  )
}
