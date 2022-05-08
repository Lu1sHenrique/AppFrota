import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';

import Login from '../Login/Login'
import BemVindo from '../BemVindo/BemVindo'
import HomeModulos from '../HomeModulos/HomeModulos'
import HomeConfig from '../HomeConfig/HomeConfig'
import RoutesFrota from '../Modulos/ModuloFrota/RoutesFrotas/RoutesFrota'

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
      name="RoutesFrota"
      component={RoutesFrota}
      options={{
        headerShown:false
        }}
      /> 
    </Stack.Navigator>
  )
}
