import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

function SignUp({ navigation }) {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
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
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setemail(text)}
        value={email}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => setpassword(text)}
        value={password}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("SignUpLanding")}
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

export default SignUp;
