import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function signUpFunc(email, password, notificationToken) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("userInfo").doc(currentUser.uid).set({
      email: currentUser.email,
      notificationToken: notificationToken,
    });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function signInFunc(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return firebase.auth().currentUser;
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
