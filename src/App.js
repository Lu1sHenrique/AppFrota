import React from 'react';
import{StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './Routes';
import AuthProvider from './contexts/auth';

export default function App(){
  return (
    <NavigationContainer>
      <StatusBar 
      backgroundColor="#f77b77"
      barStyle="light-content"
      />
      <AuthProvider>
        <Routes/>
      </AuthProvider>  
    </NavigationContainer>
      
  );
}
