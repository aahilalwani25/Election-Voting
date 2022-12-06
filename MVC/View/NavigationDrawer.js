import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";


const Drawer= createDrawerNavigator();
export default function NavigationDrawer(){
    
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}