import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      FlatList,
      ActivityIndicator,
      ScrollView,
      Dimensions
  } from 'react-native';
import DoctorSearch from './doctorSearch';
import HospitalSearch from './hospitalSearch';

const {width,height} = Dimensions.get('window');

export default class Trending extends Component {
  
  render() {

        return (
         <ScrollView
         horizontal={true}
         showsHorizontalScrollIndicator={true}
         >
             <View style={{width:width,height:height}}>
                <DoctorSearch navigation={this.props.navigation}/>
             </View>

             <View style={{width:width,height:height}}>
                  <HospitalSearch navigation={this.props.navigation}/>
             </View>

         </ScrollView>
      )

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop:0,
  },

 
 
});