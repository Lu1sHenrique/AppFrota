import React from 'react';
import {
  TouchableOpacity,
  Alert
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RelFrota from '../RelatoriosFrota/RelFrota'
import ChecklistFotoVeiculo from '../ChecklistFotoVeiculo/ChecklistFotoVeiculo'
import FormFrotaEletrica from '../FormFrotaEletrica/FormFrotaEletrica'
import FormFrota from '../FormFrota/FormFrota'
import RelDash from '../RelDash/RelDash'
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../Utils/colors';
const Bottom = createBottomTabNavigator();

export default function RoutesFrota(){

  const showAlert = () =>
  Alert.alert(
    "Opção disponível em breve!"
  );

  return (
      <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          borderTopColor: 'transparent',
          right: 10,
          backgroundColor: colors.red,
          borderWidth: 1,
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          height: 80,
          paddingTop: 10
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.black,
        tabBarLabelStyle:{
          fontSize: 18,
          fontFamily: 'BebasNeue-Regular',
          paddingBottom: 10
        }
      }}
      >
      <Bottom.Screen 
        name="Combustão"
        component={FormFrota}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="file-text" color={color} size={30} />
            ),
            tabBarAccessibilityLabel:"Formulário Frota",
          }}
        />

      <Bottom.Screen 
        name="Elétrica"
        component={FormFrotaEletrica}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="file-text" color={color} size={30} />
            ),
            tabBarAccessibilityLabel:"Formulário Elétrica",
          }}
        />

        <Bottom.Screen 
        name="Consultar"
        component={RelFrota}
        options={{
          tabBarIcon: ({ color }) => (
          <IconAntDesign name="search1" color={color} size={30} />
          ),
          tabBarAccessibilityLabel:"Relatório Frota",
          
        }}
        />

        <Bottom.Screen 
        name="Dashboard"
        component={RelDash}
        options={{
          tabBarIcon: ({ color }) => (
          <Icon name="pie-chart" color={color} size={30} />
          ),
          tabBarAccessibilityLabel:"Relatório Frota",
          
        }}
        />

        <Bottom.Screen 
        name="Checklist"
        component={ChecklistFotoVeiculo}
        options={{
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clipboard-arrow-up-outline" color={color} size={35} />
          ),
          tabBarAccessibilityLabel:"Inventário Frota",
          }}
        />    
      </Bottom.Navigator>
  )
};



