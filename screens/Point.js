import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

function Point() {
  const [gwei, setgwei] = useState(0);
  const [transaction, settransaction] = useState("Fast");
  return (
    <SafeAreaView>
      <Text>Point</Text>
      <Text>Notify Me!</Text>
      <Text>Let us know when to ping you</Text>
      <Text>What should be gas fee?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setgwei(parseInt(text))}
        value={gwei.toString()}
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
    </SafeAreaView>
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
