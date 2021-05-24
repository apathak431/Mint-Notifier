import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppText = (props) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.secondary,
  },
});
export default AppText;
