import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

import Screen from '../components/Screen'
import AppText2 from "../components/AppText2";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppHeading from "../components/AppHeading";

function Home() {
    const [data, setdata] = useState();

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
