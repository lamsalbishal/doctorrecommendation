import React, {Component} from 'react';
import { StyleSheet, Text, StatusBar,View,TextInput,Image,TouchableOpacity,FlatList,Modal} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { CheckBox } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const cross = <Entypo name="circle-with-cross" size={30} color="#f12711"/>

const star = <Icon name="star" size={20} color="#f12711"/>;
const unstar = <Icon name="star-o" size={20} color="#000" />;


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
            doctorDetailList:'',
            apiData:'',
            doctorFilterData:'',
            gender:''
            
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount(props){
     
       this.makeRemoteRequest()
    }
    
    oneCheckFun = () => {
        if(this.state.oneCheck == false) {
           this.setState({
               oneCheck:true,         
           })

        }else {
           this.setState({
              oneCheck:false
           })
        }
    }

    twoCheckFun = () => {
        if(this.state.twoCheck == false){
           this.setState({
                twoCheck:true,    
               
           })
        }else{
            this.setState({
               twoCheck:false
            })
        }
    }

    threeCheckFun = () => {
        if(this.state.threeCheck == false){
          this.setState({
              threeCheck:true,
              fourCheck:false
          })
        }else {
           this.setState({
              fourCheck:false
           })
        }
    }

    fourCheckFun = () => {
        if(this.state.fourCheck == false){
            this.setState({
                fourCheck:true,
                threeCheck:false,
               
              
        })
        }else {
            this.setState({
            
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
                doctorDetailList:responseJson,
                apiData:responseJson
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

    filterData  =() =>{
        
        this.state.doctorDetailList = this.state.apiData;
       
        if(this.state.oneCheck){  
            this.setState({
                doctorDetailList :  this.state.doctorDetailList.filter((item) => item.Doctor_Address === "New Road" )  
            })
        }
         
        if(this.state.threeCheck){
            this.state.gender = "Male"
            this.setState({
              
            doctorDetailList:  this.state.doctorDetailList.filter((item) => item.Doctor_Sex === "Male" )  
            })   
        }
 
         if(this.state.fourCheck){
             this.state.gender = "Female";
             this.setState({
                
                 doctorDetailList:this.state.doctorDetailList.filter((item) => item.Doctor_Sex === "Female" )  
             })
        }
         
       

        if(this.state.oneCheck && this.state.threeCheck || this.state.fourCheck){
         
            this.setState({
                doctorDetailList:  this.state.doctorDetailList.filter((item) => item.Doctor_Address === "New Road" && item.Doctor_Sex == this.state.gender )  
                }) 
        }     
       
        this.setState({
            
            modalVisible:false
        })
    }

    _renderItem = ({item}) =>(
       
      
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchDetail',{
                Name:item.Doctor_Name,
                Age:item.Doctor_Age,
                Sex:item.Doctor_Sex,
                Review:item.Doctor_Review,
                Star:item.Doctor_Total_Star,
                Speciality:item.Doctor_Specialty,
                Education:item.Doctor_Education,
                Email:item.Doctor_Email,
                Biography:item.Doctor_Bio,
                Hospital:item.Hospital_Name,
                ImageUrl:item.Doctor_Image_URL
              
                

            })}>

           
            <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:2,borderBottomColor:'#846602',padding:10,backgroundColor:'#F2F2F2'}}>

                <View>
                    <Image
                        style={{width:70, height:80}}
                        source={{uri:item.Doctor_Image_URL}}
                    />
                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{color:'#000',fontSize:16,fontWeight:'bold'}}>               
                        {item.Doctor_Name}
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>Age {item.Doctor_Age}</Text>
                        <Text> | </Text>
                        <Text>{item.Doctor_Specialty}</Text>
                       
                    </View>
                    <View>
                       
                        <Text>{item.Doctor_Review} Review</Text>

                    </View>

                    <View style={styles.startPosotion}>
                         
                        {Math.round(item.Doctor_Total_Star/item.Doctor_Review) == 5?
                         <View style={{flexDirection:"row"}}>
                          <Text style={styles.starIcon}>{star}</Text>
                          <Text style={styles.starIcon}>{star}</Text>
                          <Text style={styles.starIcon}>{star}</Text>
                          <Text style={styles.starIcon}>{star}</Text>
                          <Text style={styles.starIcon}>{star}</Text>
                          </View>
                        :null }


                        {Math.round(item.Doctor_Total_Star/item.Doctor_Review) == 4?
                          <View style={{flexDirection:"row"}}>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                          </View>
                        :null }

                        {Math.round(item.Doctor_Total_Star/item.Doctor_Review) == 3?
                          <View style={{flexDirection:"row"}}>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                          </View>
                        :null
                       }

                        {Math.round(item.Doctor_Total_Star/item.Doctor_Review) == 2?
                          <View style={{flexDirection:"row"}}>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                          </View>
                        :null }

                        {Math.round(item.Doctor_Total_Star/item.Doctor_Review) == 1?
                          <View style={{flexDirection:"row"}}>
                            <Text style={styles.starIcon}>{star}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                            <Text style={styles.starIcon}>{unstar}</Text>
                          </View>
                        :null  }

                        {Math.round(item.Doctor_Total_Star/item.Doctor_Review) == 0?
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
                                    <TouchableOpacity onPress={() => this.filterData()}>
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
