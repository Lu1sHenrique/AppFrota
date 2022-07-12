import React from 'react';
import{StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './Routes/RoutesDrawer';
import AuthProvider from './Contexts/Auth';

export default function App(){
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
        hidden={true}
        />
          <Routes/>
      </AuthProvider>
    </NavigationContainer>
      
  );
}
