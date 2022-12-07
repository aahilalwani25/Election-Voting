import React from "react";
import { StyleSheet, Text } from "react-native";

export default class ErrorGenerator extends React.Component{


    
    render(){
        if(this.props.id==1){
            return(
                <Text style={[style.errorStyle]}>You wrote only 10 digits</Text>
            );
        }
    }
}

const style=StyleSheet.create({
    errorStyle:{
        color:'red',
        fontSize:10,
    }
})
