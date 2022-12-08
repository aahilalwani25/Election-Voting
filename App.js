import React from "react";
import { View, TextInput, Button, TouchableOpacity, Text} from "react-native";
import ErrorGenerator from "./MVC/View/ErrrorGenerator";
import NavigationDrawer from "./MVC/View/NavigationDrawer";

//export-> access modifier (public)
export default class App extends React.Component{
  

  //div  ->  View  <div style=""/>
  //input  ->  TextInput
  //button  ->  Button/TouchableOpacity
  //img   ->  ImageView
  render(){
    return(
      <View style={{backgroundColor:'white',height:'100%'}}>
        <NavigationDrawer/>
      </View>
    );
  }

}