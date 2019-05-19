import React, {Component} from 'react';
import {
        StyleSheet, 
        View,
        TextInput,
        TouchableOpacity,
        Text,
        ActivityIndicator,
        ToastAndroid,
        Alert
        } from 'react-native';


export default class SignUpForm extends Component{

    constructor(){
        super();
        this.state = {
            fullname: '',
            fullnameValidate:true,

            username : '',
            usernameValidate: true,

            password : '',
            passwordValidate:true,

            email:'',
            emailValidation:true,
            
            countryname:'',
            countrynameValidation:true,

            counrtyaddress:'',
            countryaddressValidation:true,

            phone:'',
            phoneValidation:true,
            
            showMe:false,
            validationForm:false

        }

    }

    loginValidate(text,type){
        fullVal = /^[a-zA-Z]+ [a-zA-Z]+$/
        alph = /^[a-zA-Z]+$/
        passval = /^[0-9a-zA-Z]+$/
        numericExpression = /^[0-9]+$/
        reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
            if(type == 'fullname')
             {  
                
                if(fullVal.test(text)){
                  this.setState({
                      fullnameValidate:true,
                      fullname:text,
                  })
                }else{
                  this.setState({
                      validationForm:true,
                      fullnameValidate:false
                  })
              } 
             }

            else if(type == 'username')
            {  
                if(alph.test(text)){
                  this.setState({
                      usernameValidate:true,
                      username:text,
                  })
                }else{
                  this.setState({
                      validationForm:true,
                      usernameValidate:false
                  })
              } 
            }
    
            else if(type == 'password'){
              if(passval.test(text)){
                this.setState({
                    passwordValidate:true,
                    password:text,
                })
              }else{
                this.setState({
                    validationForm:true,
                    passwordValidate:false
                })
             } 
            }
    
            else if(type == 'email'){
              if(reg.test(text)){
                this.setState({
                    email:text,
                    emailValidation:true,
                })
              }else{
                this.setState({
                    validationForm:true,
                    emailValidation:false
                })
              } 
            }

            else if(type == 'countryname'){
              if(alph.test(text)){
                this.setState({
                    countryname:text,
                    countrynameValidation:true,
                })
              }else{
                this.setState({
                    validationForm:true,
                    countrynameValidation:false
                })
            } 
            }

           else if(type == 'countryaddress'){
                if(alph.test(text)){
                  this.setState({
                      countryaddressValidation:true,
                      countryaddress:text,
                  })
                }else{
                  this.setState({
                      validationForm:true,
                      countryaddressValidation:false
                  })
              } 
            }
    
           else if(type == 'phone'){
                if(numericExpression.test(text)){
                  this.setState({
                      phone:text,
                      phoneValidation:true,
                  })
                }else{
                  this.setState({
                     validationForm:true,
                      phoneValidation:false
                  })
              } 
           }
          
      } 
    



    submit(){
          
        if(
            (this.state.username 
            && this.state.fullname 
            && this.state.password 
            && this.state.email
            && this.state.counrtryname 
            && this.state.countryaddress 
            && this.state.phone) == '') {

                Alert.alert('Soory','Please field the form !');
            } else{
                this.formSubbmit()
            }
          
    }    

    formSubbmit = () => {
          this.setState({
            showMe:true
        })
        let collection = {}
        collection.fullname = this.state.fullname,
        collection.username = this.state.username,
        collection.password = this.state.password,
        collection.email = this.state.email,
        collection.countryname = this.state.countryname,
        collection.countryaddress = this.state.countryaddress,
        collection.phone = this.state.phone,
        
        console.log('collection data',collection);
    

        fetch('https://dashani.ostapp.com', {
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
                showMe:false
                })
                ToastAndroid.show(response.message.toString(), ToastAndroid.SHORT);
            }
            // showMe=>false
        ).catch(error => {
            this.setState({
            showMe:false
            })
            ToastAndroid.show("Problem in server", ToastAndroid.SHORT);
            
        });
    }
        
    
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

                <TextInput 
                    style={[styles.inputBox, !this.state.fullnameValidate?styles.error:null]} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={(text) => this.loginValidate(text,'fullname')} 
                    placeholder="FullName" placeholderTextColor='#000000'
                    returnKeyType = {"next"}
                    autoFocus = {true}
                    onSubmitEditing={() => { this.firstTextInput.focus(); }}
                    />
                
                <TextInput 
                    style={[styles.inputBox, !this.state.usernameValidate?styles.error:null]} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    onChangeText={(text) => this.loginValidate(text,'username')}
                    placeholder="UserName"
                    placeholderTextColor='#000000'
                    returnKeyType = {"next"}
                    onSubmitEditing={() => { this.thirdTextInput.focus();}}
                    ref={(input) => { this.firstTextInput = input; }}
                    />
                
                <TextInput
                    style={[styles.inputBox, !this.state.passwordValidate?styles.error:null]}
                    secureTextEntry={true} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={(text) => this.loginValidate(text,'password')}
                    placeholder="Password"
                    placeholderTextColor='#000000'
                    returnKeyType = {"next"}
                    onSubmitEditing={() => { this.fourTextInput.focus(); }}
                    ref={(input) => { this.thirdTextInput = input; }}
                    />
                
                <TextInput 
                    style={[styles.inputBox, !this.state.emailValidation?styles.error:null]} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    onChangeText={(text) => this.loginValidate(text,'email')} 
                    placeholder="Email"
                    placeholderTextColor='#000000'
                    returnKeyType = {"next"}
                    onSubmitEditing={() => { this.fiveTextInput.focus(); }}
                    ref={(input) => { this.fourTextInput = input; }}
                    />
                
                <TextInput 
                   style={[styles.inputBox, !this.state.countrynameValidation?styles.error:null]}
                   underlineColorAndroid='rgba(0,0,0,0)' 
                   onChangeText={(text) => this.loginValidate(text,'countryname')}
                   placeholder="Country Name"
                   placeholderTextColor='#000000'
                   returnKeyType = {"next"}
                   onSubmitEditing={() => { this.sixTextInput.focus(); }}
                   ref={(input) => { this.fiveTextInput = input; }}
                   />
                

                <TextInput 
                    style={[styles.inputBox, !this.state.countryaddressValidation?styles.error:null]} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    onChangeText={(text) => this.loginValidate(text,'countryaddress')} 
                    placeholder=" Country Address" 
                    placeholderTextColor='#000000'
                    returnKeyType = {"next"}
                    onSubmitEditing={() => { this.sevenTextInput.focus(); }}
                    ref={(input) => { this.sixTextInput = input; }}
                    />
                
                <TextInput  
                    keyboardType = 'numeric' 
                    style={[styles.inputBox, !this.state.phoneValidation?styles.error:null]} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    onChangeText={(text) => this.loginValidate(text,'phone')} 
                    placeholder="Phone" 
                    placeholderTextColor='#000000'
                    ref={(input) => { this.sevenTextInput = input; }}/>
                

                <TouchableOpacity 
                    style= {styles.button} 
                    onPress={() => this.submit()}>
                        <Text style= {styles.bottomText}>
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
        backgroundColor:'#ffffff',
        width:300,
        color:'#000000',
        fontSize:16,
        paddingHorizontal:16,
        margin:5,
    },

    placeHolderColor:{
        color:"#000000"
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
        margin:5,
        borderWidth: 1,
        borderColor:"#000000",
    },

    error:{
        borderWidth:3,
        borderColor:'red',
    }

});