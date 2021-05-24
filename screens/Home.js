import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button, Platfrom, StyleSheet } from "react-native";
import axios from "axios";

import Screen from '../components/Screen'
import AppText2 from "../components/AppText2";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppHeading from "../components/AppHeading";

import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Gas Fee Low",
            body: "Hurry, do your transaction now",
            data: { data: "" },
        },
        trigger: { seconds: 1 },
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            alert("Failed to get push token for push notification!");
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
        });
    }
    return token;
}


function Home() {
    const [data, setdata] = useState();
    const [expoPushToken, setExpoPushToken] = useState("");
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) =>
            setExpoPushToken(token)
        );

        notificationListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                setNotification(notification);
            });

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener((response) => {
                console.log(response);
            });

        return () => {
            Notifications.removeNotificationSubscription(
                notificationListener.current
            );
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            axios
                .get(`https://www.gasnow.org/api/v3/gas/price`)
                .then((res) => {
                    if (res.status === 200) {
                        setdata(res.data.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            if (data && Math.trunc(data.rapid / 10e8) > 40) {
                console.log(data.rapid)
                schedulePushNotification();
            }
        }, 8000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Screen>
            <View style={styles.container}>
                <AppHeading style={styles.heading}>Good Morning, Artist</AppHeading>
                <AppText style={styles.subHeading}>We Wish you have a good day</AppText>
                {data ? (
                    <View style={styles.verContainer}>
                        <View style={styles.horContainer}>
                            <View style={styles.card}>
                                <AppText style={styles.cardHeading}>Rapid</AppText>
                                <AppText style={styles.cardNum}>{Math.trunc(data.rapid / 10e8)}</AppText>
                            </View>
                            <View style={styles.card}>
                                <AppText style={styles.cardHeading}>Fast</AppText>
                                <AppText style={styles.cardNum}>{Math.trunc(data.fast / 10e8)}</AppText>
                            </View>
                        </View>
                        <View style={styles.horContainer}>
                            <View style={styles.card}>
                                <AppText style={styles.cardHeading}>Standard</AppText>
                                <AppText style={styles.cardNum}>{Math.trunc(data.standard / 10e8)}</AppText>
                            </View>
                            <View style={styles.card}>
                                <AppText style={styles.cardHeading}>slow</AppText>
                                <AppText style={styles.cardNum}>{Math.trunc(data.slow / 10e8)}</AppText>
                            </View>
                        </View>
                    </View>
                ) : (
                    <View>
                        <AppText2>Loading Data</AppText2>
                    </View>
                )
                }
                {/* <Button
                    title="Press to schedule a notification"
                    onPress={async () => {
                        await schedulePushNotification();
                    }}
                /> */}
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    verContainer: {
        display: "flex",
        flexDirection: "column",
    },
    horContainer: {
        width: '100%',
        flexDirection: "row",
    },
    heading: {
        marginBottom: 10,
    },
    subHeading: {
        marginBottom: 30,
    },
    card: {
        flex: 1,
        margin: 10,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 25,
    },
    cardHeading: {
        color: colors.white,
        fontSize: 20,
    },
    cardNum: {
        fontSize: 60,
        color: colors.white,
        fontWeight: "700",
    }
})

export default Home;
