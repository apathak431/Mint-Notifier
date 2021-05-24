import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import colors from "../config/colors";
import { Picker } from "@react-native-picker/picker";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppHeading from "../components/AppHeading";
import RNPickerSelect from "react-native-picker-select";
import AppButton from "../components/AppButton";

function Point() {
  const [gwei, setgwei] = useState("");
  const [transaction, settransaction] = useState("Fast");
  return (
    <Screen>
      <View style={styles.container}>
        <AppHeading style={styles.heading}>Notify Me!</AppHeading>
        <AppText style={styles.subHeading}>
          Let us know when to ping you
        </AppText>
        <AppText style={styles.label}>What should be gas fee?</AppText>
        <TextInput
          style={styles.input}
          numeric
          keyboardType={"numeric"}
          placeholder="Gas Fee"
          onChangeText={(text) => setgwei(text)}
          value={gwei}
        />
        <AppText style={styles.label}>Select Transaction Type:</AppText>
        <View style={styles.input}>
          <RNPickerSelect
            style={{ fontSize: 18, color: colors.black }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Rapid", value: "Rapid" },
              { label: "Fast", value: "Fast" },
              { label: "Slow", value: "Slow" },
              { label: "Standard", value: "Standard" },
            ]}
          />
        </View>
        <AppButton
          title="submit"
          onPress={() => Alert.alert("Notification Placed")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  inputAndroid: { color: "black" },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  label: {
    textAlign: "left",
    alignSelf: "baseline",
    marginBottom: 10,
    color: colors.primary,
    fontWeight: "700",
  },
  input: {
    padding: 24,
    marginBottom: 20,
    fontSize: 18,
    width: "100%",
    borderRadius: 25,
    color: colors.black,
    backgroundColor: colors.white,
  },
  heading: {
    marginBottom: 10,
  },
  subHeading: {
    marginBottom: 30,
  },
});

export default Point;
