import React, {Component} from 'react';
import {
        StyleSheet,
        View,
        TextInput,
        TouchableOpacity,
        Text,
        ActivityIndicator,
        AsyncStorage,
        ToastAndroid,
        Alert
        } from 'react-native';

export default class LoginForm extends Component{

  //constructor 
  constructor(props){
    super(props);
    this.state = {
        username : '',
        usernameValidate: true,
        password : '',
        passwordValidate:true,
        showMe:false, 
    }

  }
  
  //validation the form
  loginValidate(text,type){
    alph = /^[a-zA-Z]+$/
    passval = /^[0-9a-zA-Z]+$/
    
        if(type == 'username')
         {  

           if(alph.test(text)){
               this.setState({
                   usernameValidate:true,
                   username:text,
               })
           }else{
               this.setState({
                   usernameValidate:false
               })
           } 
        }
        

        if(type == 'password'){
          if(passval.test(text)){
            this.setState({
                passwordValidate:true,
                password:text,
            })
          }else{
            this.setState({
                passwordValidate:false
            })
         } 
        }
  } 

  //submitting the form
  login()
  {
    if(this.state.username == ''  &&  this.state.password == '' ){
        Alert.alert('Soory','Please field the form !');
    } else{
        this._login_form();
        
    }
  }
  
  //login part
  _login_form = () => {
   
    this.setState({
      showMe:true,
    })
    let collection = {}
    collection.username = this.state.username,
    collection.password = this.state.password
                 
    fetch('https://dashani.dr.com', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers:{
        'Accept': 'appliaction/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(
        response => {
          this.setState ({
            showMe:false,
          })
         
          AsyncStorage.setItem('userResult', JSON.stringify(response.success));
          ToastAndroid.show(response.message.toString(), ToastAndroid.SHORT);
          
        }
        // showMe=>false
        ).catch(error => {
          this.setState({
            showMe:false
          })
         console.log('Login error',error)
          
        });
       
  }
   
  
  //render the data 
  render() {
    
    return (
        <View style={styles.container}>
            {this.state.showMe?
              <View>
                  <ActivityIndicator size="large" />
              </View>:
              <View>
                <Text></Text>
              </View>
            }

            {/* username input field */}
            <TextInput 
                style={[styles.inputBox, !this.state.usernameValidate?styles.error:null]} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                onChangeText={(text) => this.loginValidate(text,'username')} 
                placeholder="UserName" 
                placeholderTextColor='#000000'
                returnKeyType = {"next"}
                autoFocus = {true}
                onSubmitEditing={() => { this.firstTextInput.focus(); }}/>
            
            {/* password input field */}
            <TextInput 
                style={[styles.inputBox, !this.state.passwordValidate?styles.error:null]} 
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)' 
                onChangeText={(text) => this.loginValidate(text,'password')} 
                placeholder="Password"
                placeholderTextColor='#000000'
                ref={(input) => { this.firstTextInput = input; }}/>
          
            {/* for the login button */}
            <TouchableOpacity
                style={styles.button}
                navigation={this.props.navigation} 
                onPress= {() => {this.login()}}>
                <Text
                    style={styles.bottomText}>
                    {this.props.type}
                </Text>
            </TouchableOpacity>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
    },

    inputBox: {
        backgroundColor:'#E8EAEE',
        width:300,
        color:'#000000',
        fontSize:16,
        paddingHorizontal:16,
        margin:5,
        borderRadius:50,
        paddingLeft:30,   
    },

    bottomText:{
        color:'#ffffff',
        fontSize:20,
        textAlign:'center',
        margin:5,
    },

    button:{
        backgroundColor:'#16a085',
        width:100,
        borderRadius: 50,
        marginTop:15,
        borderWidth: 1,
        borderColor:"#000000",
    },
    
    error:{
        borderWidth:3,
        borderColor:'red',
    }
});
