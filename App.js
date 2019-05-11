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

import Home from './src/Home/home';
import BottomNavigation from './src/BottomNaviagation/bottomNavigation';
import DoctorList from './src/FeedBack/doctor_list';
import FeedBack from './src/FeedBack/feedback'


const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,   
    },

    BottomNavigation : {
      screen:BottomNavigation,
      navigationOptions: ({navigation}) => ({
        header:null
      }),
    },

    Review:{
      screen:FeedBack,
    },

    Search:DoctorList,

  },{
    initialRouteName: 'BottomNavigation',
  });

const App = createAppContainer(MainNavigator);

export default App;


