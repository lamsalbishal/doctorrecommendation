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
import FeedBack from './src/FeedBack/feedback';
import Login from './src/Login/login_form';
import SignUp from './src/Signup/signup';
import SearchDetail from './src/Search/search_detail';
import Appointment from './src/Appointment/appointment';


const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,   
    },

    BottomNavigation: {
      screen:BottomNavigation,
      navigationOptions: ({navigation}) => ({
        header:null
      }),
    },

    Review:{
      screen:FeedBack,
    },

    DoctorList:{
        screen:  DoctorList,
    },

    SearchDetail:{
      screen:SearchDetail
    },
    
    Login: {
      screen:Login
    },

    Register:{
      screen:SignUp
    },
    Appointment:{
      screen:Appointment
    }
   

  },{
    initialRouteName: 'BottomNavigation',
  });

const App = createAppContainer(MainNavigator);

export default App;


