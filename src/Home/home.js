/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, StatusBar,View,TextInput,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const star = <Icon name="star" size={20} color="#f12711"/>;

feedbackdate = [
    {
        doctor:'Dr Ramu Lamsal',
        people:'Manoj Phuyal',
        Date:"Friday, May 2019",
        feedback:'you need to recompile your project after adding new fonts, also ensure that they also appear under Copy Bundle Resources in Build Phases.'
    },
    
    {
        doctor:'Dr Ramu Lamsal',
        people:'Sandip Paudel',
        Date:"Friday, May 2019",
        feedback:'you need to recompile your project after adding new fonts, also ensure that they also appear under Copy Bundle Resources in Build Phases.'
    },
    {
        doctor:'Dr Ramu Lamsal',
        people:'Sagar Khanal',
        Date:"Friday, May 2019",
        feedback:'you need to recompile your project after adding new fonts, also ensure that they also appear under Copy Bundle Resources in Build Phases.'
    },
    {
        doctor:'Dr Ramu Lamsal',
        people:'Bishal Lamsal',
        Date:"Friday, May 2019",
        feedback:'you need to recompile your project after adding new fonts, also ensure that they also appear under Copy Bundle Resources in Build Phases.'
    },
]

export default class Home extends Component {
 
    static navigationOptions = {
        title: 'Doctor Recommendation',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:18
        },
      };

      
    //calling the search function 
    searchBox = () =>{
      console.log('search box area');
    }
    

    //flatlist function for the renderView
    _renderItem = ({item}) => (
      <View style={styles.renderContainer}>
            <StatusBar hidden/>
            {/* review for doctor for people in list */}
            <View style={styles.reviewStyle}>
                <Text style={styles.reviewText}>Review for</Text>

                {/* doctor name image view */}
                <View style={styles.doctorDetailView}>
                    <View>
                        <Text style={styles.doctorName}>{item.doctor}</Text>
                        <View style={styles.startPosotion}>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                        </View>
                    </View>
                    <View>
                        <Image
                          style={{width: 50, height: 60}}
                          source={require('../assets/doctoricon.png')}
                          />
                    </View>   
                </View>
                {/* close the doctor name image */}
               
                {/* style for the review */}
                <Text style={styles.peopleReview}>{item.feedback}</Text>
                {/* close for the review  */}
                
                {/* peopleDetail view  */}
                <View style={styles.peopleDetail}>
                    <Text style={styles.peopleName}>{item.people}</Text>
                    <Text>{item.Date}</Text>
                </View>
                {/* close for the peopleDetail View */}
               
            </View>
            {/* close the review list */}
      </View>
    );
    
    render() {
        return (
            <View style={styles.container}>
    
                {/* using the flatlist */}
                <FlatList
                    data={feedbackdate}
                    renderItem={this._renderItem}
                />
                {/* close the flatlist */}

            
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAEE',
  },

 

  //Start for Review
  renderContainer: {
   padding:5
  },
  reviewStyle : {
    borderWidth:1,
    borderColor:'gray',
    padding:10,
  },
  reviewText: {
    color:'#000',
    fontSize:16,
  },
  doctorDetailView: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10
  },
  doctorName: {
    fontSize:20,
    color:'#000'
  },
  startPosotion:{
    flexDirection:'row',
  },
  starIcon:{
     paddingLeft:2
  },
  peopleReview: {
    marginTop:10,
    color:'#000',
    fontSize:14,
  },
  peopleDetail: {
      paddingTop:10,
      
  },
  peopleName: {
      fontSize:18,
      color:'#000',
      
  }

  //Close for Review
  
 
});
