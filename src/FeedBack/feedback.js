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

    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
         console.log("error",error.message);
        }
    };
    
 

    header(){
        return(
            <View style={{justifyContent:'center',alignItems:'center',width:'100%',paddingTop:30}}>
                <View style={styles.reviewCount}>
                    <Text style={{fontSize:20,textAlign:'center',color:'#fff'}}>8000</Text>
                    <Text style={{textAlign:'center',color:'#fff'}}>Doctor Review on Doctor Recommendation</Text>
                </View>
           </View>
        )
    }

    middle(){
        return(
            <View style={{padding:10,backgroundColor:'#fff',marginTop:30}}>
                <Text style={{textAlign:'center',fontSize:20,color:'#000'}} >Feedback your doctor</Text>
                <Text style={{paddingTop:10}}>85 percent of patients are not comfortable choosing a physician if more than 10 percent of that physician’s reviews have a one-star rating.</Text>
                <Text style={{paddingTop:10}}>About 1 out of 3 patients use either industry-specific medical review sites or more general consumer review sites as tools for finding doctors or healthcare providers.</Text>
            </View>
        )
    }

    footer(){
        return(
            <View style={{padding:10,backgroundColor:'#fff',marginTop:30}}>
                <Text style={{textAlign:'center',fontSize:20,color:'#000'}} >Everyone's Journery is difficult</Text>
                <Text style={{textAlign:'justify',paddingTop:10}}>
                    Help others with their journey by reviewing your experience and sharing your doctor with friends and family.
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10,padding:10}}> 
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                        <View style={{alignItems:'center'}}>
                                <Text>{search}</Text>
                                <Text>Find Your </Text>
                                <Text>Doctor</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('DoctorList')}>
                        <View style={{alignItems:'center'}}>
                                <Text >{star}</Text>
                                <Text>Review your</Text>
                                <Text> Doctor</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.onShare()}>
                        <View style={{alignItems:'center'}}>
                            <Text>{share}</Text>
                            <Text>Share your</Text> 
                            <Text>Doctor</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
        
    }

    
    render() {
        return (
            <View style={styles.container}>
                {/* search box */}
                
               {this.header()}
               {this.middle()}

               {this.footer()}
               

               

            
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
