import React, { useState, useContext } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { signInFunc } from "../api/firebaseMethods";
import AuthContext from "../auth/context";

function SignIn({ navigation }) {
  const authContext = useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignIn = () => {
    if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else {
      authContext.setuser(signInFunc(email, password));
      navigation.navigate("HomeNavigator");
    }
    setemail("");
    setpassword("");
  };

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
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setemail(text)}
        autoCapitalize="none"
        value={email}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => setpassword(text)}
        value={password}
      />
      <Button title="Sign In" onPress={handleSignIn} />
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

export default SignIn;
