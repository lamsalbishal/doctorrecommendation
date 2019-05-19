import React, {Component} from 'react';
import { StyleSheet, Text, StatusBar,View,TextInput,Image,FlatList,Modal,TouchableOpacity,ToastAndroid} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { CheckBox } from 'react-native-elements'


import Icon from 'react-native-vector-icons/FontAwesome';
const star = <Icon name="star" size={20} color="#f12711"/>;
const unfillstar = <Icon name="star-o" size={20} color="#f12711"/>;

feedbackdate = [
    {   
        doctor_id:'1',
        doctor:'Dr Rabin Lamsal',
        specialist:'Eye ',
        
    },
    
    {
        doctor_id:'2',
        doctor:'Dr Sagar Lamsal',
        specialist:'Ear Neck',
       
    },
    {   
        doctor_id:'3',
        doctor:'Dr Bishal Lamsal',
        specialist:'Surgery ',
      
    },
    {   
        doctor_id:'4',
        doctor:'Dr parbin Lamsal',
        specialist:'Heart specialist',
       
    },
]

export default class DoctorList extends Component {
      
    constructor(props){
        super(props);
        this.state = {
            search:'',
            modalVisible: false,
            checked:false,
            doctorname:'',
            oneStar:false,
            twoStar:false,
            threeStar:false,
            fourStar:false,
            fiveStar:false,
            count:0,
            feedbackText:'',
            doctorID:'',
            dataSet:'',
            doctorDetailList:'',
           
        }
    }

    SearchFilterFunction = (text) => {
     
    }

    componentDidMount(){
       this.makeRemoteRequest();
    }

    //fetch the api 
    makeRemoteRequest = () => {
        fetch("http://manojphuyal259-001-site1.gtempurl.com/api/Doctorapi/GetDoctor")
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

    static navigationOptions = {
        title: 'Home',
        header: (
        
          <View >
                 <Toolbar
                    leftElement="menu"
                    centerElement="Doctor Searchable ..."
                    searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    }}
                  
                    onRightElementPress={ (label) => { console.log(label) }}
                />
          </View>
       
       
        )
      };

      setModalVisible(visible,doctorName,doctorID) {
        this.setState({
            modalVisible: visible,
            doctorname:doctorName,
            doctorID:doctorID
        });
      
        
      }

      oneStarFun = () => {
          if(this.state.oneStar === false){
            this.setState({oneStar: true})
          }else{
            this.setState({
                twoStar:false,
                threeStar:false,
                fourStar:false,
                fiveStar:false
            })
          }
      
      }

      sencondStarFun = () => {
        if(this.state.twoStar === false){
            this.setState({
                oneStar: true,
                twoStar:true
            })
          }else{
            this.setState({
                
                threeStar:false,
                fourStar:false,
                fiveStar:false
            })
          }
       
      }

      thirdStarFun = () => {
        if(this.state.threeStar === false){
            this.setState({
                oneStar: true,
                twoStar:true,
                threeStar:true

            })
          }else{
            this.setState({
                
                fourStar:false,
                fiveStar:false
            })
          }
      }

      fourStarFun = () => {
        if(this.state.fourStar === false){
            this.setState({
                oneStar: true,
                twoStar:true,
                threeStar:true,
                fourStar:true

            })
          }else{
            this.setState({
                
                fiveStar:false
            })
          }
      }

      fiveStarFun = () => {
        if(this.state.fiveStar === false){
            this.setState({
                oneStar: true,
                twoStar:true,
                threeStar:true,
                fourStar:true,
                fiveStar:true

            })
          }
      }

    
    //submit the form
    feedBackForm(text,type){
        this.setState({
            feedbackText:text
        })
    
    }
            

    // feedbackSubmit(){
      
    //     let collection = {}
    //     collection.feedback = this.state.feedbackText
        
       
    //     fetch('https://classify-feed.herokuapp.com/'+this.state.feedbackText, {
    //       method: 'POST', // or 'PUT'
    //       body: JSON.stringify(collection), // data can be `string` or {object}!
    //       headers:{
    //         'Accept': 'appliaction/json',
    //         'Content-Type': 'application/json'
    //       }
    //     }).then(res => res.json())
    //     .then(
    //         response => {
    //           this.setState({
    //               dataSet:response.data
    //           })
              
    //           console.log('check dataset',this.state.dataSet[0].classification)
    //           ToastAndroid.show('Success full', ToastAndroid.SHORT);
              
    //         }
    //         // showMe=>false
    //         ).catch(error => {
             
    //          console.log('Login error',error)
              
    //         });
    // }


    feedbackSubmit(){
        let collection ={}

        collection.Doctor_Classification= "1",
        collection. Doctor_Comment = "Hahaha", 
        collection.Doctor_ID="1",
        collection. User_Email = "Sagar@Khanal.com"
        collection. Doctor_Point_No= "1",
       

        fetch('http://manojphuyal259-001-site1.gtempurl.com/api/DoctorCommentapi/PostDoctor', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(collection), // data can be `string` or {object}!
            headers:{
              'Accept': 'appliaction/json',
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(
              response => {
               
                ToastAndroid.show('Success full', ToastAndroid.SHORT);
                
              }
              // showMe=>false
              ).catch(error => {
               
               console.log('Login error',error)
                
              });
    }
   

    //close thr form

    _renderItem = ({item}) =>(
        <View>
           <TouchableOpacity  onPress={() => {
            this.setModalVisible(true,item.doctor,item.id);
            }}>

            <View style={{backgroundColor:'#FFFFFF',padding:10,marginTop:8,flexDirection:'row',alignItems:'center'}}>
                <View>
                    <Image
                        style={{width: 55, height: 55,borderRadius:55,borderWidth:0.5,borderColor:'gray'}}
                        source={require('../assets/doctoricon.png')}
                        />
                </View>
                <View style={{paddingLeft:10}}>
                    <Text>               
                        {item.doctor} 
                    </Text>
                    <Text>
                        {item.specialist}
                    </Text>
                   
                </View>  
            </View>
              
            </TouchableOpacity>
        </View>
    );


    
    render() {
        return (
            <View style={styles.container}>
                {/* using the modal  */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     
                        <View style={{backgroundColor:'#FFF',borderRadius:8}}>
                            <Text>Likelihood of recommending {this.state.doctorname}*</Text>
                            
                            <View style={styles.startPosotion}>
                                <CheckBox
                                    checkedIcon={<Text>{star}</Text>}
                                    uncheckedIcon={<Text>{unfillstar}</Text>}
                                    checked={this.state.oneStar}
                                    onPress={this.oneStarFun}
                                    />
                                <CheckBox
                                    checkedIcon={<Text>{star}</Text>}
                                    uncheckedIcon={<Text>{unfillstar}</Text>}
                                    checked={this.state.twoStar}
                                    onPress={this.sencondStarFun}
                                />
                                <CheckBox
                                    checkedIcon={<Text>{star}</Text>}
                                    uncheckedIcon={<Text>{unfillstar}</Text>}
                                    checked={this.state.threeStar}
                                    onPress={this.thirdStarFun}
                                />
                                <CheckBox
                                    checkedIcon={<Text>{star}</Text>}
                                    uncheckedIcon={<Text>{unfillstar}</Text>}
                                    checked={this.state.fourStar}
                                    onPress={this.fourStarFun}
                                />

                                <CheckBox
                                    checkedIcon={<Text>{star}</Text>}
                                    uncheckedIcon={<Text>{unfillstar}</Text>}
                                    checked={this.state.fiveStar}
                                    onPress={this.fiveStarFun}
                                />
                            </View>

                            <Text>Tell us more about your visit</Text>

                            <TextInput
                                style={{backgroundColor:'#E8EAEE',marginTop:20}}
                                onChangeText={(text) => this.feedBackForm(text,'feedbackText')} 
                                underlineColorAndroid="transparent"
                                placeholder={"Type Something in Text Area."}
                                placeholderTextColor={"#9E9E9E"}
                                numberOfLines={2}
                                multiline={true}
                            />

                            <TextInput
                                style={{height: 50,backgroundColor:'#E8EAEE',marginTop:20}}
                                onChangeText={(text) => console.log(text)}
                                placeholder="email@gmail.com"
                                value={this.state.text}
                            />
                            <View style={{paddingTop:10, width:'100%'}}>
                            
                                <CheckBox
                                    containerStyle={{borderWidth:0,backgroundColor:'#E8EAEE',marginLeft:-1}}
                                    textStyle={{fontSize:12,color:'gray'}}
                                    title='I agree Term And Condition of Company'
                                    checked={this.state.checked}
                                    onPress={() => this.setState({checked: !this.state.checked})}
                                />
                            </View>

                            <View style={{paddingTop:10}}>

                                <TouchableOpacity onPress={() => {this.feedbackSubmit()}}>
                                
                                    <Text style={{color:'#FFF',fontSize:20,backgroundColor:'red',borderRadius:10,padding:10,width:'50%',textAlign:'center'}}>Sumbit</Text>
                        
                                </TouchableOpacity>

                            </View>


                        </View>
                    </View>
                </Modal>
                
                {/* using the flatlist */}
                <View style={{paddingTop:5}}>
                    <FlatList
                        data={feedbackdate}
                        renderItem={this._renderItem}
                    />
                </View>
               
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
