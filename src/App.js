import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './Routes/RoutesStack';
import AuthProvider from './contexts/Auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          hidden={true}
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
