import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText2 from "./AppText2";

export default function AppButton(props) {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <AppText2>{props.title}</AppText2>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
    width: "100%",
    borderRadius: 25,
    marginBottom: 10,
  },
});
