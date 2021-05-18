import React from "react";
import { Button, Text, View } from "react-native";

function SignUpLanding({ navigation }) {
  return (
    <View>
      <Text style={{ textAlign: "center", paddingTop: 20 }}>Sign Up</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Already have an Account?</Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("LogIn")}
        >
          LogIn
        </Text>
      </View>
    </View>
  );
}

export default SignUpLanding;
