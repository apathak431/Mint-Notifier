import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";

import apiKeys from "./config/keys";
import Welcome from "./screens/Welcome";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import HomeNavigator from "./navigators/HomeNavigator";
import Home from "./screens/Home";
import AuthContext from "./auth/context";
import AuthNavigator from "./navigators/AuthNavigator";

const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  const [user, setuser] = useState();

  return (
    <AuthContext.Provider value={{ user, setuser }}>
      <NavigationContainer>
        {user ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
