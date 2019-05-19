import React, {Component} from 'react';
import {
        StyleSheet,
        Text,
        View,
        TouchableOpacity,
        } from 'react-native';
import LoginForm from './login_form';

export default class Login extends Component {
  
  constructor(props){
    super(props)
  }

 //navigation header bar
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sign In',
    };
  };

  render() {
    return (
      <View style={styles.container}>
         
        <View style={styles.loginDialogBox}>
            <LoginForm type="Sign In" />
            <View style={styles.signUpAccount}>
                
                <Text style={styles.signupText}>Don't have any account? </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.signupButton}> Sign Up</Text>
                </TouchableOpacity>

            </View>  
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EAEE',
  },

  loginDialogBox:{
    backgroundColor:'#ffffff',
    width:350,
    height:350,
    borderRadius:20,
    paddingTop:50,
  },

  textContain: {
    color:'#FF0000',
  },

  signUpAccount:{
    alignItems:'center',
    marginBottom:10,  
  },

  signupText:{
    color:'#000000',
    fontSize:16,
    textAlign:'center',
  },

  signupButton:{
    color:'#000000',
    fontSize:18,
  }
  
});