import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import PhotoGrid from '../Home/home';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const home = <Entypo name="home" size={20} color="#f12711"/>;
const search = <Icon name="search" size={20} color="#f12711"/>
const plus = <Entypo name="plus" size={20} color="#f12711"/>;
const ios_person = <Ionicons name="ios-person" size={20} color="#f12711"/>;

class Home extends React.Component {
    static navigationOptions = {
        tabBarIcon: home,
      };
    render() {
        return <PhotoGrid id="home" />;
    }
}

class Search extends React.Component {
    static navigationOptions = {
        tabBarIcon: search,
      };

    render() {
        return <PhotoGrid id="search" />;
    }
}

class Add extends React.Component {
    static navigationOptions = {
        tabBarIcon: plus,
    };
    render() {
        return <PhotoGrid id="add" />;
    }
}

class Profile extends React.Component {

static navigationOptions = {
    tabBarIcon: ios_person,
    };
    render() {
        return <PhotoGrid id="profile" />;
    }
}

export default createMaterialBottomTabNavigator(
  {
    Home,
    Search,
    Add,
    Profile,
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