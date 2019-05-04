/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomePage from './src/Home/home';
import BottomNavigation from './src/BottomNaviagation/bottomNavigation';


const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      
    },
    BottomNavigation : {
      screen:BottomNavigation,
    } 
  },{
    initialRouteName: 'BottomNavigation',
  });

const App = createAppContainer(MainNavigator);

export default App;


