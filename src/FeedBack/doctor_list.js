import React, {Component} from 'react';
import { StyleSheet, Text, StatusBar,View,TextInput,Image,FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const star = <Icon name="star" size={20} color="#f12711"/>;

feedbackdate = [
    {
        doctor:'Dr Rabin Lamsal',
        hospital:'Teaching Hospital',
        
    },
    
    {
        doctor:'Dr Sagar Lamsal',
        hospital:'Green city',
       
    },
    {
        doctor:'Dr Bishal Lamsal',
        hospital:'Graendy Hospital',
      
    },
    {
        doctor:'Dr parbin Lamsal',
        hospital:'Norvic Hospital',
       
    },
]

export default class DoctorList extends Component {
      
    constructor(props){
        super(props);
        this.state = {
            search:''
        }
    }

    searchBox(text,type){

    }

    _renderItem = (item) =>(
        <View>
            {console.log(item)}
            <Text>               
                {item.doctor}
            </Text>
        </View>
    );
    
    render() {
        return (
            <View style={styles.container}>
                {/* search box */}
                <View style={styles.navigationHeader}>
                    <TextInput 
                        style={styles.inputBox}  
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        onChangeText={(text) => this.searchBox(text,'search')} 
                        placeholder="search ..." 
                        placeholderTextColor='#000000'
                        returnKeyType = {"next"}
                        autoFocus = {true}
                        onSubmitEditing={() => { this.firstTextInput.focus(); }}
                    />
                </View>
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

  navigationHeader: {
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
 

  
 
});
