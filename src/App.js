import React from 'react';
import{StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './Routes';

export default function App(){
  return (
    <NavigationContainer>
      <StatusBar 
      backgroundColor="#f77b77"
      barStyle="light-content"
      />
        <Routes/>
    </NavigationContainer>
      
  );
}
