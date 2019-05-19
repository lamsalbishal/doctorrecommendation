
import React, { Component } from 'react';
//import react in our code.
 
import { StyleSheet, View, Image, TouchableOpacity, Alert,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const star = <Icon name="star" size={20} color="#f12711"/>;
//import all the components we are going to use.
 
export default class DoctorDetail extends Component {
  clickHandler = () => {
    //function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };
   
  static navigationOptions = {
    title: 'Doctor name',
  };
  

  //top header for doctor detail
  header(){
    return(
      <View>
        <View style={{flexDirection:'row',}}>
          <View style={{width:150,borderWidth:1,borderColor:'gray'}}>
            <Image  source={require('../assets/doctoricon.png')} style={{width:'100%',height:150,resizeMode:'cover'}} />
          </View>
          <View style={{paddingLeft:20}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'blue'}}>Doctor Name</Text>
            <View style={{flexDirection:'row',paddingTop:5}}>
              <Text>Male</Text>
              <Text style={{paddingLeft:3,paddingRight:3}}>|</Text>
              <Text>Age:30</Text>
            </View>
           
            <Text style={{paddingTop:5}}>1 Review</Text>
            
            <View style={styles.startPosotion}>
              <Text style={styles.starIcon}>{star}</Text>
              <Text style={styles.starIcon}>{star}</Text>
              <Text style={styles.starIcon}>{star}</Text>
              <Text style={styles.starIcon}>{star}</Text>
              <Text style={styles.starIcon}>{star}</Text>
            </View>
            
            
          </View>
        </View>
      </View>
    )
  }

  middle(){
    return(
      <View style={{paddingTop:10,}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>Specialist</Text>

          <Text style={{fontSize:16,fontWeight:'bold',fontWeight:'bold',paddingLeft:5,color:'blue'}}>Eye</Text>
        </View>
       
        <Text style={{paddingTop:5,paddingLeft:5}}>Dr. Vincent Miccio Jr, MD is a rehabilitation specialist in Brooklyn, NY and has been practicing for 2 years.</Text>
      </View>
    )
  }

  biography(){
    return(
       <View style={{paddingTop:10}}>
         <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>Biography</Text>
         <Text style={{paddingTop:5,paddingLeft:5}}>Dr. John Chuback is a Board Certified Cardiovascular Surgeon serving the Paramus area for more than 15 years. Dr. Chuback is experienced in Vascular Surgery, Varicose Vein Treatment and Laser Sclerotherapy. </Text>
       </View>
    )
  }


  //float button fucntion
  floatButton(){
    return(
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.clickHandler}
            style={styles.TouchableOpacityStyle}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
              source={{
              uri:'https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.MainContainer}>
       {this.header()}
       {this.middle()}
       {this.biography()}

       {this.floatButton()}
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding:10
  },
 
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },

  startPosotion:{
    flexDirection:'row',
    paddingTop:5
  },
  starIcon:{
     paddingLeft:2
  },
});





// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import { StyleSheet, Text, StatusBar,View,TextInput,Image} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const star = <Icon name="star" size={20} color="#f12711"/>;


// export default class SearchDetail extends Component {
 
//     static navigationOptions = {
//         title: 'Doctor Name',
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           fontSize:18
//         },
//       };

      
//       header(){
//         return(
//           <view style={}>
//             <View>
//               <Image source={require('../assets/doctoricon.png')} style={{widthL:'100%',height:200}} />
//             </View>
//             <View>
//               <Text>Doctor name</Text>
//               <Text>1 Review</Text>
//             </View>
//         </view>
     
//         )
//       }
   
    
//     render() {
//         return (
//             <View style={styles.container}>
//                {this.header()}
            
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E8EAEE',
//     padding:10
//   },

 
// });