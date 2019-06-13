/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, StatusBar,View,TextInput,Image,RefreshControl} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const star = <Icon name="star" size={20} color="#f12711"/>;
const unstar = <Icon name="star-o" size={20} color="#000" />;

// homeData = [
//     {
//         doctor:'Dr Ramu Lamsal',
//         people:'Manoj Phuyal',
//         Date:'Friday, May 2019',
//         feedback:'you need to recompile your project after adding new fonts, also ensure that they also appear under Copy Bundle Resources in Build Phases.'
//     },
    
//     {
//         doctor:'Dr Ramu Lamsal',
//         people:'Sandip Paudel',
//         Date:'Friday, May 2019',
//         feedback:'you need to recompile your project after adding new fonts, also ensure that they also appear under Copy Bundle Resources in Build Phases.'
//     },
//     {
//         doctor:'Dr Ramu Lamsal',
//         people:'Sagar Khanal',
//         Date:'Friday, May 2019',
//         feedback:'you need to recompile your project after adding new fonts, also ensure that they also appear under Copy Bundle Resources in Build Phases.'
//     },
//     {
//         doctor:'Dr Ramu Lamsal',
//         people:'Bishal Lamsal',
//         Date:'Friday, May 2019',
//         feedback:'you need to recompile your project after adding new fonts, also ensure that they also appear under Copy Bundle Resources in Build Phases.'
//     },
// ]

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

    constructor(props){
      super(props);
      this.state = {
        doctorDetailList:'',
        refreshing: false,
        startArray : []
      }
    }
      
    //calling the search function 
    
    componentDidMount(){
      this.makeRemoteRequest();
   }
    
    //fetch the api 
    makeRemoteRequest = () => {
      fetch("http://manojphuyal259-001-site1.gtempurl.com/api/GetDoctorComment")
          .then((response) => response.json())
          .then((responseJson) => {
          
          this.setState({
              doctorDetailList:responseJson,
              refreshing:false,
          })
          })
          .catch((error) => {
          this.setState({
              isLoading:true
          })
          
          ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
          });          
    }

    _onRefresh() {
      this.setState({refreshing: true,},
        this.makeRemoteRequest())
    
    }
    
   

    //flatlist function for the renderView
    _renderItem = ({item}) => (
      <View style={styles.renderContainer}>
            {/* review for doctor for people in list */}
            <View style={styles.reviewStyle}>
                <Text style={styles.reviewText}>Review for</Text>

                {/* doctor name image view */}
                <View style={styles.doctorDetailView}>
                    <View>
                        <Text style={styles.doctorName}>{item.Doctor_Name}</Text>
                        <View style={styles.startPosotion}>
                         
                         
                         {item.Doctor_Star == 5?
                         <View style={{flexDirection:"row"}}>
                          <Text style={styles.starIcon}>{star}</Text>
                          <Text style={styles.starIcon}>{star}</Text>
                          <Text style={styles.starIcon}>{star}</Text>
                          <Text style={styles.starIcon}>{star}</Text>
                          <Text style={styles.starIcon}>{star}</Text>
                          </View>
                        :null }


                        {item.Doctor_Star == 4?
                          <View style={{flexDirection:"row"}}>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                          </View>
                        :null }

                        {item.Doctor_Star == 3?
                          <View style={{flexDirection:"row"}}>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                          </View>
                        :null
                       }

                        {item.Doctor_Star == 2?
                          <View style={{flexDirection:"row"}}>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                          </View>
                        :null }

                        {item.Doctor_Star == 1?
                          <View style={{flexDirection:"row"}}>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                          </View>
                        :null  }

                        {item.Doctor_Star == 0?
                         <View style={{flexDirection:"row"}}>
                          <Text style={styles.starIcon}>{unstar}</Text>
                          <Text style={styles.starIcon}>{unstar}</Text>
                          <Text style={styles.starIcon}>{unstar}</Text>
                          <Text style={styles.starIcon}>{unstar}</Text>
                          <Text style={styles.starIcon}>{unstar}</Text>
                          </View>
                          :null }
                         
                           
                        </View>
                    </View>
                    <View>
                        <Image
                          style={{width: 70, height: 70}}
                          source={{uri:item.Doctor_Image_URL}}
                          />
                    </View>   
                </View>
                {/* close the doctor name image */}
               
                {/* style for the review */}
                <Text  style={styles.peopleReview}>{item.Doctor_Comment}</Text>
                {/* close for the review  */}
                
                {/* peopleDetail view  */}
                <View style={styles.peopleDetail}>
                    <Text  style={styles.peopleName}>{item.User_Email}</Text>
                    <Text >{item.Doctor_Comment_Date}</Text>
                </View>
                {/* close for the peopleDetail View */}
               
            </View>
            {/* close the review list */}
      </View>
    );
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navigationHeader}>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>Doctor Recommendation</Text>
                </View>
                {/* using the flatlist */}
                <FlatList
                    data={this.state.doctorDetailList}
                    renderItem={this._renderItem}
                    // refreshing={this.state.refreshing}
                    // onRefresh={this._onRefresh}
                    refreshControl ={
                      <RefreshControl
                      refreshing = {this.state.refreshing}
                      onRefresh={()=>this._onRefresh()}/>
                    }
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

  //navigation header 
  navigationHeader: {
    padding:15,
    backgroundColor:'#fff',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
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
