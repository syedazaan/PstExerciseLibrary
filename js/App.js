import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
// import { AppContainer } from './js/App';
import  TitleComponent  from "./components/TitleComponent";
import Content from "./components/Content";

import { styles } from "./styles/styles";
import Colors from "./styles/Colors";


import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Iconm from 'react-native-vector-icons/MaterialIcons';
import Iconen from 'react-native-vector-icons/Entypo';
import Icono from 'react-native-vector-icons/Octicons';
// import Iconmci from 'react-native-vector-icons/MaterialICommunityIcons';

const myIcon = <Icon name="search" size={20} color="black" />;
const myIcon6 = <Iconm name="facebook" size={20} color="rgb(36,107,253)" />;
const myIcon1 = <Icona name="delete" size={25} color="gray" />;
const myIcon2 = <Icona name="left" size={25} color="gray" />;
const myIcon3 = <Iconfa name="scroll" size={22} color="gray" />;
const myIcon4 = <Iconi name="chatbubble-ellipses-outline" size={25} color="gray" />;
const myIcon5 = <Icona name="plussquare" size={45} color="#55C7C8" />;
// const myIcon7 = <Iconfb name="facebook" size={25} color="grey" />;
const myIcon8 = <Iconen name="chevron-left" size={25} color="black" />;
const myIcon12 = <Icono name = "primitive-dot" size = {15}  color="rgb(121,132,211)" />;
const myIcon13 = <Icono name = "primitive-dot" size = {12}  color="#EFB222" />;
const myIcon14 = <Icono name = "primitive-dot" size = {12}  color="lightgray" />;
const myIcon9 =   <Iconen name = "dots-three-horizontal" size = {25}  color="grey" />;
const myIcon10 =   <Iconen name = "dots-three-vertical" size = {25}  color="grey" />;
const myIcon15 = <Icono name = "primitive-dot" size = {10}  color="#EFB222" />;
const myIcon16 = <Icono name = "primitive-dot" size = {10}  color="lightgray" />;


export default class App extends React.Component {
            // constructor(props) {
            //         constructor(props){
            //          super(props);   
            //         }
            // }  
    render() {
        return (
                <View style={[styles.flexOne, styles.bgGreyLight, styles.border]} >
                        
                        {/* Header_Block */}
                        <View  style={[styles.flexQuarterToOne,  styles.row, styles.Margin20, styles.border]}>
                                <View style = {[styles.flexOne, styles.Margin10,]}>
                                        <View style = {[styles.flexOne, styles.radius10, styles.bgGreyIcon, styles.allCenter, styles.marginTop4, styles.marginBottom4, styles.border]}>
                                                {myIcon8}
                                        </View>
                                </View>
                                <View style = {[styles.flexFive, styles.allCenter, styles.border]}>
                                        <Text style = {[styles.fontSize15, styles.fontWeightBold ]}>NEW WORKOUT</Text>
                                </View>
                                <View style = {[styles.flexOne, styles.Margin10,   ]}>
                                           <View style = {[styles.flexOne, styles.allCenter, styles.radius10, styles.bgColorYellow, styles.marginTop4, styles.marginBottom4,  styles.border]}>{myIcon}</View>
                                </View>
                        </View>
                        
                        {/* Middle_Content_Block */}
                        <View style={[styles.flexFive, styles.bgContentGrey,  styles.borderTopRadius60,  styles.border]}>

                                <View style = {[styles.flexOneAndQuarter, styles.marginLeft16, styles.marginRight16, styles.row, styles.border]}>
                                        <View style = {[styles.flexFive, styles.justifyContentCenter, styles.border]}>
                                                <Text style = {[styles.fontSize23,  styles.fontWeightBold, ]}>Exercices Library</Text>
                                        </View>
                                        <View style = {[styles.flexOne, styles.allCenter, styles.border]}>{myIcon9}</View>
                                </View>

                                <ScrollView horizontal style={[  styles.height5, styles.marginLeft16,  styles.border]}>
                                        <TitleComponent name= "ABS"/>
                                        <TitleComponent  name = "BICEPS"/>
                                        <TitleComponent  name = "CHEST" />
                                        <TitleComponent  name = "FOREARM"/>
                                        <TitleComponent  name = "PUSHUPS"/>
                                </ScrollView>



                                <View style={[styles.flexFive,  styles.marginLeft16, styles.marginRight16, styles.border]}>
                                         
                                         {/* 1_Row */}
                                        <View style= {[styles.flexOne,  styles.marginBottom8, styles.row, styles.border]}>
                                                
                                                 {/* Image */}
                                                 <View style ={[styles.flexOneAndHalf, styles.allCenter, styles.border, ]}>
                                                        <Image         
                                                                style={{width:120, height:65,  borderRadius:15 }}
                                                                source={require("../assets/images/workout.jpg")}
                                                        />
                                                 </View>
                                    
                                                 {/* Title */}
                                                <View style = {[styles.flexOneAndHalf, styles.border ]}>
                                                        <View style = {[styles. flexOne, styles.justifyContentCenter, styles.border]}>
                                                                <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.paddingLeft10]}>Bent Raise</Text>
                                                        </View>
                                                        <View style = {[styles. flexOne,  styles.justifyContentCenter, styles.border]}>
                                                                <Text style = {[styles.fontSize15, styles.fontWeightBold, styles.greyDark, styles.paddingLeft10]}>LEVEL  {myIcon13} {myIcon13} {myIcon14}</Text>
                                                        </View>
                                                </View>
                                    
                                                {/* Icon */}
                                                 <View style = {[styles.flexQuarterToOne, styles.allCenter, styles.border ]}>{myIcon5}</View>
                                       
                                        </View>

                                        {/* 2_Row */}
                                        <View style= {[styles.flexOne, styles.row, styles.marginTop10, styles.marginBottom10, styles.border]}>
                                                
                                                 {/* Image */}
                                                 <View style ={[styles.flexOneAndHalf, styles.allCenter, styles.border, ]}>
                                                        <Image         
                                                                style={{width:120, height:65,  borderRadius:15 }}
                                                                source={require("../assets/images/workout.jpg")}
                                                        />
                                                 </View>
                                    
                                                 {/* Title */}
                                                <View style = {[styles.flexOneAndHalf,  styles.border ]}>
                                                        <View style = {[styles. flexOne, styles.border]}>
                                                                <View style = {[styles. flexOne, styles.justifyContentCenter, styles.border]}>
                                                                        <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.paddingLeft10]}>Deltoid Raise</Text>
                                                                </View>
                                                                
                                                                <View style = {[styles. flexOne,  styles.justifyContentCenter, styles.border]}>
                                                                        <Text style = {[styles.fontSize15, styles.fontWeightBold, styles.greyDark, styles.paddingLeft10]}>LEVEL  {myIcon13} {myIcon13} {myIcon14}</Text>
                                                                </View> 
                                                        </View>
                                                </View>
                                    
                                                {/* Icon */}
                                                 <View style = {[styles.flexQuarterToOne, styles.allCenter, styles.border ]}>{myIcon5}</View>
                                       
                                        </View>

                                        {/* 3_Row */}
                                        <View style= {[styles.flexOne, styles.marginTop10, styles.marginBottom16, styles.row, styles.border]}>
                                                
                                                {/* Image */}
                                                <View style ={[styles.flexOneAndHalf, styles.allCenter, styles.border, ]}>
                                                        <Image         
                                                                style={{width:120, height:65,  borderRadius:15 }}
                                                                source={require("../assets/images/workout.jpg")}
                                                        />
                                                </View>
                                   
                                                {/* Title */}
                                               <View style = {[styles.flexOneAndHalf, styles.border ]}>
                                                        <View style = {[styles. flexOne, styles.justifyContentCenter, styles.border]}>
                                                                <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.paddingLeft10]}>Shoulder Raise</Text>
                                                        </View>
                                                        <View style = {[styles. flexOne,  styles.justifyContentCenter, styles.border]}>
                                                                <Text style = {[styles.fontSize15, styles.fontWeightBold, styles.greyDark, styles.paddingLeft10]}>LEVEL  {myIcon13} {myIcon13} {myIcon14}</Text>
                                                        </View>
                                               </View>
                                   
                                               {/* Icon */}
                                                <View style = {[styles.flexQuarterToOne, styles.allCenter, styles.border ]}>{myIcon5}</View>
                                      
                                       </View>


                                </View>
                        
                        </View>
                        
                        {/* Footer_Block */}
                        <View  style={[styles.flexTwo, styles.borderTopRadius60, styles.bgBlack, styles.border]}>
                                <View style = {[styles.flexHalf, styles.row, styles.marginLeft16, styles.marginRight16, styles.border]}>
                                        <View style = {[styles.flexThree, styles.border]}></View>
                                        <View style = {[styles.flexQuarterToOne, styles.Margin10, styles.radius10, styles.bgBarGrey, styles.border]}></View>
                                        <View style = {[styles.flexThree, styles.border]}></View>
                                </View>
                                <View style = {[styles.flexOne, styles.row, styles.marginLeft16, styles.marginRight16, styles.border]}>
                                        <View style = {[styles.flexFive, styles.justifyContentCenter, styles.border]}>
                                                <Text style = {[styles.fontSize23, styles.fontWeightBold, styles.white]}>Fat Burner Workout</Text>
                                        </View>
                                        <View style = {[styles.flexTwo, styles.radius10, styles.allCenter, styles.bgSmallGrey, styles.marginTop8, styles.marginBottom8, styles.marginleft20, styles.border]}>
                                                <Text style = {[styles.fontSize15, styles.fontWeightBold, styles.white  ]}>1 Exercise</Text>
                                        </View>
                                </View>
                              
                                <View style = {[styles.flexOneAndHalf, styles.row, styles.marginLeft16, styles.marginRight16, styles.marginBottom8, styles.border]}>
                                       <View style = {[styles.flexHalf, styles.allCenter, styles.marginRight12, styles.row, styles.border]}>
                                                <View>{myIcon10}</View>
                                        </View>
                                       <View style = {[styles.flexTwoAndHalf, styles.allCenter, styles.border]}>
                                                        <Image         
                                                                style={{width:80, height:50,  borderRadius:15 }}
                                                                source={require("../assets/images/workout.jpg")}
                                                        />
                                       </View>
                                       <View style = {[styles.flexFive,  styles.border]}>
                                               <View style = {[styles.flexOne, styles.justifyContentCenter, styles.border]}>
                                                       <Text style={[styles.fontSize13, styles.marginTop8,  styles.white, styles.marginLeft16, styles.fontWeightBold]}>Flutter Kicks</Text>
                                               </View>
                                               <View style = {[styles.flexQuarterToOne, styles.justifyContentCenter, styles.border]}>
                                                       <Text style={[styles.fontSize13, styles.marginBottom16, styles.greyDark, styles.marginLeft16, styles.fontWeightBold]}>LEVEL  {myIcon15} {myIcon15} {myIcon15}</Text>
                                               </View>
                                       </View>
                                       <View style = {[styles.flexOne, styles.allCenter, styles.border]}>
                                               <Text style= {[]}>{myIcon1}</Text>
                                       </View> 
                                </View>
                        
                        </View>
                    
                </View>
        );
    }
}

// const styles = StyleSheet.create({
//         container: {
//                 flex:1,

//         },
// });