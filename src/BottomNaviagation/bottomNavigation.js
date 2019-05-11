import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from '../Home/home';
import Search from '../Search/search';
import FeedBack from '../FeedBack/feedback';


import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const home = <Entypo name="home" size={20} color="#f12711"/>;
const search = <Icon name="search" size={20} color="#f12711"/>
const plus = <Entypo name="plus" size={20} color="#f12711"/>;
const ios_person = <Ionicons name="ios-person" size={20} color="#f12711"/>;

class HomePage extends React.Component {
  
   static navigationOptions = ({
      tabBarIcon: home,
      title: 'Home',
    });
  render() {
      return <Home id="home" />;
  }
}

class SearchPage extends React.Component {
    static navigationOptions = {
        tabBarIcon: search,
      };

    render() {
        return <Search id="search" />;
    }
}

class FeedBackPage extends React.Component {
    static navigationOptions = {
        tabBarIcon: plus,
    };
    render() {
        return <FeedBack id="Feedback" />;
    }
}

class ProfilePage extends React.Component {

static navigationOptions = {
    tabBarIcon: ios_person,
    };
    render() {
        return <Home id="profile" />;
    }
}

export default createMaterialBottomTabNavigator(
    
  {
    HomePage,
    SearchPage,
    FeedBackPage,
    ProfilePage,
  },
  {
    shifting: false,
    activeColor: '#6200ee',
    inactiveColor: '#828792',
    barStyle: {
      backgroundColor: '#f8f7f9',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      borderColor: '#d0cfd0',
    },
  }
);