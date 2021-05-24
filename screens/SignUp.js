import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { signUpFunc } from "../api/firebaseMethods";
import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

function SignUp({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const emptyState = () => {
    setemail("");
    setpassword("");
    setconfirmPassword("");
  };

  const handleSignUp = () => {
    if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      signUpFunc(email, password, "");
      navigation.navigate("Welcome");
      emptyState();
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppHeading style={styles.heading}>Create your account</AppHeading>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setemail(text)}
          autoCapitalize="none"
          placeholder="Email Address"
          value={email}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setpassword(text)}
          placeholder="Password"
          value={password}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setconfirmPassword(text)}
          placeholder="Confirm Password"
          value={confirmPassword}
        />
        <AppButton
          style={styles.button}
          title="Sign Up"
          onPress={handleSignUp}
        />
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
  heading: {
    marginBottom: 40,
  },
  input: {
    padding: 24,
    marginBottom: 20,
    fontSize: 18,
    width: "100%",
    borderRadius: 25,
    borderBottomWidth: 1,
    color: color.black,
    backgroundColor: colors.white,
  },
  button: {
    marginTop: 30,
  },
});

export default SignUp;
