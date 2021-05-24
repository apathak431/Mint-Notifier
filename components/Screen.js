import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../config/colors";

function Screen(props) {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      {props.children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Screen;
