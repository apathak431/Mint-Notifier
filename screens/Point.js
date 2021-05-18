import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

function Point() {
  const [gwei, setgwei] = useState(0);
  const [transaction, settransaction] = useState("Fast");
  return (
    <View>
      <Text>Point</Text>
      <Text>Notify Me!</Text>
      <Text>Let us know when to ping you</Text>
      <Text>What should be gas fee?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setgwei(parseInt(text))}
        value={gwei}
      />
      <Text>Select Transaction Type:</Text>
      <View>
        <Picker
          selectedValue={transaction}
          style={{ height: 50 }}
          onValueChange={(itemValue, itemIndex) => settransaction(itemValue)}
        >
          <Picker.Item label="Fast" value="Fast" />
          <Picker.Item label="Rapid" value="Rapid" />
        </Picker>
      </View>
      <Button style={{ marginTop: 50 }} title="submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 30,
    height: 40,
    width: "80%",
    borderBottomWidth: 1,
  },
});

export default Point;
