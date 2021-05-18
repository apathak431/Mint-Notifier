import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpLanding from "./screens/SignUp/SignUpLanding";
import SignUp from "./screens/SignUp/SignUp";
import LogIn from "./screens/LogIn";
import HomeNavigator from "./navigators/HomeNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUpLanding" component={SignUpLanding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
