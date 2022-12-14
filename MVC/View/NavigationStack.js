import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack= createStackNavigator();

export default function NavigationStack(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}