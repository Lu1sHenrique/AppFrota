import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useNavigation } from '@react-navigation/native'
import RelFrota from '../RelatoriosFrota/RelFrota'
import InvFrota from '../IventarioFrota/InvFrota'
import FormFrota from '../FormFrota/FormFrota'
import Icon from 'react-native-vector-icons/Feather';
const Bottom = createBottomTabNavigator();

export default function RoutesFrota({ navigation: { goBack } }) {

  const navigation = useNavigation();
  

  return (
      <Bottom.Navigator
      >
      <Bottom.Screen 
        name="Formulário Frota"
        component={FormFrota}
        options={{
          headerShown:false
          }}
        />

        <Bottom.Screen 
        name="Relatórios Frota"
        component={RelFrota}
        options={{
          headerShown:false
          }}
        />

        <Bottom.Screen 
        name="Inventário Frota"
        component={InvFrota}
        options={{
          headerShown:false
          }}
        />    
      </Bottom.Navigator>
  );
};



