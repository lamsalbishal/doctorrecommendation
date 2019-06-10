import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from '../Home/home';
import Search from '../Search/serchpage';
import FeedBack from '../FeedBack/feedback';
import Login from '../Login/login';




class HomePage extends React.Component {
  
  
 render() {
     return <Home  />;
 }
}

class SearchPage extends React.Component {
   

   render() {
       return <Search navigation={this.props.navigation} />;
   }
}

class FeedBackPage extends React.Component {
  
   render() {
       return <FeedBack    navigation={this.props.navigation} />;
   }
}

class ProfilePage extends React.Component {
   render() {
       return <Login id="profile"  navigation={this.props.navigation}/>;
   }
}

const TabNavigator = createBottomTabNavigator({
  Home:
  {screen: HomePage,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        
        <Entypo name="home" size={20} color={tintColor}/>
      )
  })},
 
  Search:{screen: SearchPage,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="search" size={20} color={tintColor}/>
      )
  })
  },
  FeedBack:{
    screen: FeedBackPage,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Entypo name="plus" size={20} color={tintColor}/>
      )
  })
  },

  Profile:{
    screen: ProfilePage,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Ionicons name="ios-person" size={20} color={tintColor}/>
      )
  })
  }

});

export default createAppContainer(TabNavigator);