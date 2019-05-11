import React, {Component} from 'react';
import { StyleSheet, Text, StatusBar,View,TextInput,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const search = <Icon name="search" size={20} color="#000"/>
const share = <Icon name="share" size={20} color="#000"/>
const star = <Icon name="star" size={20} color="#000"/>

export default class Feedback extends Component {
      
    constructor(props){
        super(props);
        this.state = {
            search:''
        }
    }

    static navigationOptions={
        header:null
    }
 

    
    render() {
        return (
            <View style={styles.container}>
                {/* search box */}
                
                <View style={styles.navigationHeader}>
                 <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Search') }>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:10}}>
                            <Text>{search}</Text>
                            <Text style={{paddingLeft:10}}>Doctor Search ..</Text>
                        </View>
                 </TouchableOpacity>
                  
                  
                </View>
               
               <View style={{justifyContent:'center',alignItems:'center',width:'100%',paddingTop:30}}>
                <View style={styles.reviewCount}>
                        <Text style={{fontSize:20,textAlign:'center',color:'#fff'}}>8000</Text>
                        <Text style={{textAlign:'center',color:'#fff'}}>Doctor Review on Doctor Recommendation</Text>
                    </View>
               </View>

               <View style={{padding:10,backgroundColor:'#fff',marginTop:30}}>
                   <Text style={{textAlign:'center',fontSize:20,color:'#000'}} >Everyone's Journery is difficult</Text>
                   <Text style={{textAlign:'justify',paddingTop:10}}>
                      Help others with their journey by reviewing your experience and sharing your doctor with friends and family.
                   </Text>
                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10,padding:10}}> 
                       <View style={{alignItems:'center'}}>
                            <Text>{search}</Text>
                            <Text>Find Your </Text>
                            <Text>Doctor</Text>
                       </View>
                       <View style={{alignItems:'center'}}>
                            <Text >{star}</Text>
                            <Text>Review your</Text>
                            <Text> Doctor</Text>
                       </View>
                       <View style={{alignItems:'center'}}>
                            <Text>{share}</Text>
                            <Text>Share your</Text> 
                            <Text>Doctor</Text>
                       </View>
                   </View>
               </View>
               

               

            
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAEE',
  },

  navigationHeader: {
    flexDirection:'row',
    padding:10,
    backgroundColor:'#fff',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
   },

   reviewCount: {
    padding:10,
    backgroundColor:'#9DC7CD',
    width:'80%',
   }
 

  
 
});
