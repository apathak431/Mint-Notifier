import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import colors from "../config/colors";
import { Picker } from "@react-native-picker/picker";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppHeading from "../components/AppHeading";

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
        <AppText>What should be gas fee?</AppText>
        <TextInput
          style={styles.input}
          numeric
          keyboardType={"numeric"}
          onChangeText={(text) => setgwei(text)}
          value={gwei}
        />
        <Text>Select Transaction Type:</Text>
        {/* <View>
        <Picker
          selectedValue={transaction}
          style={{ height: 50 }}
          onValueChange={(itemValue, itemIndex) => settransaction(itemValue)}
        >
          <Picker.Item label="Fast" value="Fast" />
          <Picker.Item label="Rapid" value="Rapid" />
        </Picker>
      </View> */}
        <Button style={{ marginTop: 50 }} title="submit" />
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
