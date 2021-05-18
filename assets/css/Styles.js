import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    flex: 1,
  },
  heading: {
    fontSize: 28,
    fontFamily: "manropeBold",
    color: "#000",
  },
  subHeading: {
    fontSize: 25,
    fontFamily: "manropeBold",
    color: "#000",
  },
  subTitle: {
    fontSize: 17,
    fontFamily: "manropeBold",
    color: "#B9B9B9",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 18,
    fontFamily: "manropeRegular",
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
  },
  inputTitle: {
    fontFamily: "manropeRegular",
    fontSize: 17,
    color: "#1E5D8A",
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#000",
  },
  card: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 10,
    padding: 20,
  },
  scrollViewPadding: {
    flex: 1,
  },
  hr: {
    borderBottomColor: "#B0B0B0",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
