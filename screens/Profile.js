import React, { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AuthContext from "../auth/context";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppHeading from "../components/AppHeading";

function Profile() {
  const { user, setuser } = useContext(AuthContext);
  console.log();
  return (
    <Screen>
      <View style={styles.container}>
        <AppHeading>User Profile</AppHeading>
        <AppText style={styles.heading}>{user._W.email}</AppText>
        <AppButton title="Logout" onPress={() => setuser(null)} />
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
});

export default Profile;
