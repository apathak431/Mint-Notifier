import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Point from "../screens/Point";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Point" component={Point} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default HomeNavigator;
