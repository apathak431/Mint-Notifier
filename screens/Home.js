import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import axios from "axios";

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
        <SafeAreaView>
            { data ? (
                <View>
                    <Text>Rapid: {Math.trunc(data.rapid / 10e8)}</Text>
                    <Text>Fast: {Math.trunc(data.fast / 10e8)}</Text>
                    <Text>Standard: {Math.trunc(data.standard / 10e8)}</Text>
                    <Text>slow: {Math.trunc(data.slow / 10e8)}</Text>
                </View>
            ) : (
                <View>
                    <Text>Loading Data</Text>
                </View>
            )
            }
        </SafeAreaView>
    );
}

export default Home;
