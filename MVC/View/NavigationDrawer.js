import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import Voting from "./VotingScreen/VotingScreen";


const Drawer= createDrawerNavigator();
export default function NavigationDrawer(){
    
    return (
      
        <Drawer.Navigator >
          <Drawer.Screen name="Cast Vote" component={Voting} options={{
            drawerIcon:(size)=>{
              <Ionicons name="finger-print" />;
            }
          }}/>
          {/* <Drawer.Screen name="Change Password" options={{
            drawerIcon:()=>{
              <MaterialCommunityIcons name="form-textbox-password" />;
            }}
            }/> 
            <Drawer.Screen name="View Results" options={{
            drawerIcon:()=>{
              <Foundation name="results" />;
            }
          }} /> */}
        </Drawer.Navigator>
      
    );
}