import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { signInFunc } from "../api/firebaseMethods";
import AuthContext from "../auth/context";
import colors from "../config/colors";

import AppHeading from "../components/AppHeading";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

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
    <Screen>
      <View style={styles.container}>
        <AppHeading style={styles.heading}>Welcome Back</AppHeading>
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
        <AppButton
          style={styles.button}
          title="Sign In"
          onPress={handleSignIn}
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
    color: colors.black,
    backgroundColor: colors.white,
  },
  button: {
    marginTop: 30,
  },
});

export default SignIn;
