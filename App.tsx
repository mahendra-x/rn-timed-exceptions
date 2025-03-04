import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";
import ScreenForth from "./screens/ScreenForth";

// Ensure Stack is correctly created
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        {/* <Stack.Screen name="ScreenTwo" component={ScreenThree} /> */}
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
        <Stack.Screen name="ScreenForth" component={ScreenForth} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
