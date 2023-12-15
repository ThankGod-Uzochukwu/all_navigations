// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './home';
import Profile from './profile';
import Settings from './settings/index'
import Drawers from '../components/Drawers';




const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={(props) => <Drawers {...props} />}>
      <Drawer.Screen name="HomeTabs" component={HomeTabs} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
