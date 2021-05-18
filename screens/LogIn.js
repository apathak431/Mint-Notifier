import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

function LogIn({ navigation }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Create your account</Text>
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setusername(text)}
        value={username}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => setpassword(text)}
        value={password}
      />
      <Button
        title="Log In"
        onPress={() => navigation.navigate("HomeNavigator")}
      />
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

export default LogIn;
