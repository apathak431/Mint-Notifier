import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import AppText2 from "../components/AppText2";
import Screen from "../components/Screen";
import colors from "../config/colors";

function Welcome({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppHeading style={styles.heading}>We are what we do</AppHeading>
        <AppText style={styles.subHeading}>
          Thousand of people are using gas notifier for correct gas price
        </AppText>
        <AppButton
          title="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
        <Text style={styles.signInContainer}>
          <AppText2>Already have an Account? </AppText2>
          <AppText2
            style={styles.signInLink}
            onPress={() => navigation.navigate("SignIn")}
          >
            SignIn
          </AppText2>
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
  heading: {
    marginBottom: 10,
    textAlign: "center",
  },
  signInContainer: {
    marginTop: 20,
    marginBottom: 80,
  },
  signInLink: {
    color: colors.primary,
  },
  subHeading: {
    marginBottom: 40,
    textAlign: "center",
  },
});

export default Welcome;
