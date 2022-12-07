import React from "react";
import { View, TextInput} from "react-native";
import ErrorGenerator from "./MVC/View/ErrrorGenerator";

export default class App extends React.Component{

  constructor({...props}) {
    super(...props);
    this.state={
      phnLen:0,
      phn:null
    }
  }
  render(){
    return (
      <View>
        <TextInput
          onChangeText={text => {
            this.setState({phn: text, phnLen: text.length});
          }}
        />

        {this.state.phnLen < 11 && <ErrorGenerator id={1} />}
      </View>
    );
  }
}