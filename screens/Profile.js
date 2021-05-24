import React, { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AuthContext from "../auth/context";

function Profile() {
  const { user, setuser } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button title="Logout" onPress={() => setuser(null)} />
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({});
