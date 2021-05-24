import React, { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AuthContext from "../auth/context";
import Screen from "../components/Screen";

function Profile() {
  const { user, setuser } = useContext(AuthContext);
  return (
    <Screen>
      <SafeAreaView>
        <Text>Profile</Text>
        <Button title="Logout" onPress={() => setuser(null)} />
      </SafeAreaView>
    </Screen>
  );
}

export default Profile;

const styles = StyleSheet.create({});
