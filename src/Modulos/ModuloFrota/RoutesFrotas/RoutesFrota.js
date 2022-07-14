import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RelFrota from '../RelatoriosFrota/RelFrota'
import InvFrota from '../IventarioFrota/InvFrota'
import FormFrota from '../FormFrota/FormFrota'
import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const Bottom = createBottomTabNavigator();

export default function RoutesFrota(){

  return (
      <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          borderTopColor: 'transparent',
          right: 10,
          backgroundColor: "#d21e2b",
          borderWidth: 1,
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          height: 80,
          paddingTop: 10
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle:{
          fontSize: 15,
          paddingBottom: 10
        }
      }}
      >
      <Bottom.Screen 
        name="Formulário"
        component={FormFrota}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="file-text" color={color} size={30} />
            ),
            tabBarAccessibilityLabel:"Formulário Frota",
          }}
        />

        <Bottom.Screen 
        name="Relatórios"
        component={RelFrota}
        options={{
          tabBarIcon: ({ color }) => (
          <IconAntDesign name="linechart" color={color} size={30} />
          ),
          tabBarAccessibilityLabel:"Relatório Frota",
        }}
        />

        <Bottom.Screen 
        name="Inventário"
        component={InvFrota}
        options={{
          tabBarIcon: ({ color }) => (
          <Icon name="clipboard" color={color} size={30} />
          ),
          tabBarAccessibilityLabel:"Inventário Frota",
          }}
        />    
      </Bottom.Navigator>
  )
};



