import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useNavigation } from '@react-navigation/native'
import RelFrota from '../RelatoriosFrota/RelFrota'
import InvFrota from '../IventarioFrota/InvFrota'
import FormFrota from '../FormFrota/FormFrota'
const Bottom = createBottomTabNavigator();

export default function RoutesFrota({ navigation: { goBack } }) {

  const navigation = useNavigation();
  

  return (
      <Bottom.Navigator>
      <Bottom.Screen 
        name="FormFrota"
        component={FormFrota}
        options={{
          headerShown:false
          }}
        />

        <Bottom.Screen 
        name="RelFrota"
        component={RelFrota}
        options={{
          headerShown:false
          }}
        />

        <Bottom.Screen 
        name="InvFrota"
        component={InvFrota}
        options={{
          headerShown:false
          }}
        />    
      </Bottom.Navigator>
  );
};


