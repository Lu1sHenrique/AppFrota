import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

import Login from '../Login/Login'
import HomeModulos from '../HomeModulos/HomeModulos'
import HomeFrota from '../Modulos/ModuloFrota/HomeFrota/HomeFrota'
import RoutesFrota from '../Modulos/ModuloFrota/RoutesFrotas/RoutesFrota'
import FormFrotaEletrica from '../Modulos/ModuloFrota/FormFrotaEletrica/FormFrotaEletrica';
import DetalheChecklist from '../Modulos/ModuloFrota/DetalheChecklist/DetalheChecklist';
import Splash from '../Splash/Splash'
import DrawerItems from '../HomeDrawer/DrawerItems';
import ReportsErro from '../ReportsErro/ReportsErro'

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >

      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />

      <Stack.Screen
        name="DrawerItems"
        component={DrawerItems}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="HomeModulos"
        component={HomeModulos}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="HomeFrota"
        component={HomeFrota}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="RoutesFrota"
        component={RoutesFrota}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="FormFrotaEletrica"
        component={FormFrotaEletrica}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="DetalheChecklist"
        component={DetalheChecklist}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="ReportsErro"
        component={ReportsErro}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
};
