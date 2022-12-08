import React from "react";
import { StyleSheet, Text } from "react-native";

export default class ErrorGenerator extends React.Component{

    render(){
        if(this.props.id==1){
            return(
                <Text style={[style.errorStyle]}>You wrote only 10 digits</Text>
            );
        }else{
        return (
              <Text style={[style.correctStyle]}>10 digits written</Text>
            );
        }
    }
}

const style = StyleSheet.create({
  errorStyle: {
    color: 'red',
    fontSize: 10,
  },
  correctStyle: {
    color: 'green',
    fontSize: 10,
  },
});


// import React from "react";
// import { View, TextInput} from "react-native";
// import ErrorGenerator from "./MVC/View/ErrrorGenerator";

// export default class App extends React.Component{

//   constructor() {
//     super();
//     this.state={
//       phnLen:0,
//       phn:null
//     }
//   }
//   render(){
//     return (
//       <View>
//         <TextInput
//           onChangeText={text => {
//             this.setState({phn: text, phnLen: text.length});
//           }}
//         />
//         {this.state.phnLen < 11 && <ErrorGenerator id={1} />}
//         {this.state.phnLen>=11 && <ErrorGenerator/>}
//       </View>
//     );
//   }
// }