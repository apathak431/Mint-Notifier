import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from 'expo-notifications';
import * as Permissions from "expo-permissions";

import Home from "../screens/Home";
import Point from "../screens/Point";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

function HomeNavigator() {
    useEffect(() => {
        registerForPushNotification()
    }, [])
    const registerForPushNotification = async () => {
        try {
            const permission = await Notifications.getPermissionsAsync();
            if (!permission.granted) return;
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
        } catch (error) {
            console.log("Error getting permission for Push Notification", error);
        };
    }

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
