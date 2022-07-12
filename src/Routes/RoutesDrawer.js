import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react';
import Stack from './RoutesStack'
import DrawerItems from '../HomeConfig/DrawerItems'
import { Dimensions } from 'react-native'

const width = Dimensions.get("screen").width
const Drawer = createDrawerNavigator();
export default function RouteDrawer(){
  return(
    <Drawer.Navigator
    drawerContent={DrawerItems}
    >
        <Drawer.Screen 
        name='Stack'
        component={Stack}
        options={{
            headerShown:false,
            drawerStyle: {width: width}
            }}
          />
    </Drawer.Navigator>
  )
}
