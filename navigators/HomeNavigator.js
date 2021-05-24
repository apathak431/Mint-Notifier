import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from 'expo-notifications';
import * as Permissions from "expo-permissions";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Home from "../screens/Home";
import Point from "../screens/Point";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import NotificationScreen from "../screens/NotificationScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../config/colors";

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
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <MaterialCommunityIcons name="home" size={30} color={colors.primary} /> }} />
            <Tab.Screen name="Point" component={Point} options={{ tabBarIcon: () => <MaterialCommunityIcons name="av-timer" size={30} color={colors.primary} /> }} />
            {/* <Tab.Screen name="NotificationScreen" component={NotificationScreen} /> */}
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => <MaterialCommunityIcons name="account" size={30} color={colors.primary} /> }} />
        </Tab.Navigator>
    );
}

export default HomeNavigator;
