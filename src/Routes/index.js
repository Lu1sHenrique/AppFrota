import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

import Login from '../Login/Login'
import BemVindo from '../BemVindo/BemVindo'
import HomeModulos from '../HomeModulos/HomeModulos'
import HomeConfig from '../HomeConfig/HomeConfig'
import HomeFrota from '../Modulos/ModuloFrota/HomeFrota/HomeFrota'

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Bemvindo"
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
      name="HomeModulos"
      component={HomeModulos}
      options={{
        headerShown:false
        }}
      />

      <Stack.Screen 
      name="HomeConfig"
      component={HomeConfig}
      options={{
        headerShown:false
        }}
      />

      <Stack.Screen 
      name="HomeFrota"
      component={HomeFrota}
      options={{
        headerShown:false
        }}
      />  
    </Stack.Navigator>
  )
}
