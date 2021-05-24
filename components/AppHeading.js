import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function AppHeading(props) {
  return (
    <Text onPress={props.onPress} style={[styles.heading, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.white,
  },
});
