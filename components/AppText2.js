import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppText2 = (props) => {
  return (
    <Text onPress={props.onPress} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: 15,
  },
});
export default AppText2;
