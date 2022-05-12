import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RelFrota from '../RelatoriosFrota/RelFrota'
import InvFrota from '../IventarioFrota/InvFrota'
import FormFrota from '../FormFrota/FormFrota'
import Icon from 'react-native-vector-icons/Feather';
const Bottom = createBottomTabNavigator();

export default function RoutesFrota(){

  return (
      <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          borderTopColor: 'transparent',
          height: 60,
          marginHorizontal: 10,
          bottom: 10,
          right: 10,
          borderRadius: 10,
          backgroundColor: '#f77b77',
          borderWidth: 1
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
      }}
      >
      <Bottom.Screen 
        name="Formulário Frota"
        component={FormFrota}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="check-square" color={color} size={size} />
            ),
            tabBarAccessibilityLabel:"Formulário Frota",
          }}
        />

        <Bottom.Screen 
        name="Relatórios Frota"
        component={RelFrota}
        options={{
          tabBarIcon: ({ color, size }) => (
          <Icon name="book-open" color={color} size={size} />
          ),
        }}
        />

        <Bottom.Screen 
        name="Inventário Frota"
        component={InvFrota}
        options={{
          tabBarIcon: ({ color, size }) => (
          <Icon name="book" color={color} size={size} />
          ),
          }}
        />    
      </Bottom.Navigator>
  )
};



