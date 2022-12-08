import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";


const Drawer= createDrawerNavigator();
export default function NavigationDrawer(){
    
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="">
          <Drawer.Screen name="Cast Vote" options={{
            drawerIcon:(focus,size)=>{
              
            }
          }}/>
          <Drawer.Screen name="Change Password" />
          <Drawer.Screen name="View Results" />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}