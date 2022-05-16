import React from 'react';
import{StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './Routes';
import AuthProvider from './Contexts/Auth';

export default function App(){
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar 
        backgroundColor="#f77b77"
        barStyle="light-content"
        />
          <Routes/>
      </AuthProvider>
    </NavigationContainer>
      
  );
}
