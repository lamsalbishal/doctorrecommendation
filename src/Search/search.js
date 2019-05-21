import React, {Component} from 'react';
import { StyleSheet, Text, StatusBar,View,TextInput,Image,TouchableOpacity,FlatList,Modal} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { CheckBox } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const cross = <Entypo name="circle-with-cross" size={30} color="#f12711"/>
const star = <Icon name="star" size={20} color="#f12711"/>;

searchdata = [
    {
        doctor:'Dr Rabin Lamsal',
        age:'35',
        specialist:'Eye'
        
    },
    
    {
        doctor:'Dr Sagar Lamsal',
        age:'40',
        specialist:'Eye'
       
    },
    {
        doctor:'Dr Bishal Lamsal',
        age:'42',
        specialist:'Eye'
      
    },
    {
        doctor:'Dr parbin Lamsal',
        age:'45',
        specialist:'Eye',
       
    },

    {
        doctor:'Dr Sagar Lamsal',
        age:'40',
        specialist:'Eye'
       
    },
    {
        doctor:'Dr Bishal Lamsal',
        age:'42',
        specialist:'Eye'
      
    },
    {
        doctor:'Dr parbin Lamsal',
        age:'45',
        specialist:'Eye',
       
    },
]

export default class Search extends Component {
      
    constructor(props){
        super(props);
        this.state = {
            search:'',
            modalVisible: false,
            oneCheck:false,
            twoCheck:false,
            threeCheck:false,
            fourCheck:false,
            doctorDetailList:''
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount(props){
       super(props);
       this.makeRemoteRequest()
    }
    
    oneCheckFun = () => {
        if(this.state.oneCheck == false) {
           this.setState({
               oneCheck:true,
               twoCheck:false,
               threeCheck:false,
               fourCheck:false
           })

        }else {
           this.setState({
               twoCheck:false,
               threeCheck:false,
               fourCheck:false
           })
        }
    }

    twoCheckFun = () => {
        if(this.state.twoCheck == false){
           this.setState({
                twoCheck:true,
                oneCheck:false,
                threeCheck:false,
                fourCheck:false
               
           })
        }else{
            this.setState({
                oneCheck:false,
                threeCheck:false,
                fourCheck:false
            })
        }
    }

    threeCheckFun = () => {
        if(this.state.threeCheck == false){
          this.setState({
              threeCheck:true,
              oneCheck:false,
              twoCheck:false,
              fourCheck:false
          })
        }else {
           this.setState({
              oneCheck:false,
              twoCheck:false,
              fourCheck:false
           })
        }
    }

    fourCheckFun = () => {
        if(this.state.fourCheck == false){
            this.setState({
                fourCheck:true,
                threeCheck:false,
                oneCheck:false,
                twoCheck:false,
              
        })
        }else {
            this.setState({
            oneCheck:false,
            twoCheck:false,
            threeCheck:false,
            })
        } 
    }


    //fetch the api 
    makeRemoteRequest = () => {
        fetch("http://manojphuyal259-001-site1.gtempurl.com/api/GetDoctor")
            .then((response) => response.json())
            .then((responseJson) => {
            
            this.setState({
                doctorDetailList:responseJson
            })
            console.log('get fetch data', responseJson)
            
            })
            .catch((error) => {
            this.setState({
                isLoading:true
            })
            
            ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
            });
                
    }
    

    ShowModal = () => {
        this.setModalVisible(!this.state.modalVisible);
    }
    searchBox(text){
     console.log(text)
    }

    _renderItem = ({item}) =>(
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchDetail')}>

           
            <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:2,borderBottomColor:'#846602',padding:10,backgroundColor:'#dbd9d2'}}>

                <View>
                    <Image
                        style={{width:70, height:80}}
                        source={require('../assets/doctoricon.png')}
                    />
                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{color:'blue',fontSize:20,fontWeight:'bold'}}>               
                        {item.Doctor_Name}
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>Age {item.Doctor_Age}</Text>
                        <Text> | </Text>
                        <Text>{item.Doctor_Specialty}</Text>
                    </View>
                    <View>
                        <Text>1 Review</Text>
                    </View>

                    <View style={styles.startPosotion}>
                        <Text style={styles.starIcon}>{star}</Text>
                        <Text style={styles.starIcon}>{star}</Text>
                        <Text style={styles.starIcon}>{star}</Text>
                        <Text style={styles.starIcon}>{star}</Text>
                        <Text style={styles.starIcon}>{star}</Text>
                    </View>
                    
                </View>

               

            </View>
            </TouchableOpacity>
           
        </View>
    );
    
    render() {
        return (
            <View style={styles.container}>
                {/* search box */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <View style={{backgroundColor:'#fff',width:'90%',borderRadius:8,padding:10}}>

                            <TouchableOpacity
                                onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={{textAlign:'right'}}>{cross}</Text>
                            </TouchableOpacity>

                            <Text style={{padding:6}}>AVALIABILITY</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                                <CheckBox  
                                    textStyle={{fontSize:12,color:'gray'}}
                                    title='Location'                          
                                    checked={this.state.oneCheck}
                                    onPress={this.oneCheckFun}
                                />

                                <CheckBox
                                    textStyle={{fontSize:12,color:'gray'}}
                                    title='Avaliable'
                                    checked={this.state.twoCheck}
                                    onPress={this.twoCheckFun}
                                />

                            </View>
                           

                            <Text style={{padding:6}}>GENDER</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <CheckBox 
                                textStyle={{fontSize:12,color:'gray'}}
                                title='Male'
                                checked={this.state.threeCheck}
                                onPress={this.threeCheckFun}
                            />

                            <CheckBox 
                                textStyle={{fontSize:12,color:'gray'}}
                                title='Female'
                                checked={this.state.fourCheck}
                                onPress={this.fourCheckFun}
                            />
                             
                            </View>
                            <View style={{width:'100%',alignItems:'center'}}>
                                <View style={{flexDirection:'row',padding:10}}>
                                    <TouchableOpacity>
                                        <Text style={{backgroundColor:'#0c1289',color:'#fff',fontSize:14,padding:10,borderRadius:10,marginRight:10}}>Submit</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity>
                                        <Text style={{borderRadius:10,borderWidth:1,borderColor:'gray',padding:10}}>Cancel</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                           

                        
                        </View>
                    </View>
                </Modal>

                <Toolbar
                    leftElement="menu"
                    centerElement="Doctor Searchable ..."
                    searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onChangeText: text => this.searchBox(text)
                    }}
                    onLeftElementPress={this.ShowModal}
                    onRightElementPress={ (label) => { console.log(label) }}
                />
              
                {/* using the flatlist */}
                <FlatList
                    navigation = {this.props.navigation}
                    extraData= {this.state}
                    data={this.state.doctorDetailList}
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
 
   startPosotion:{
    flexDirection:'row',
  },

  
 
});
