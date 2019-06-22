import React from "react";
import {StyleSheet, View} from "react-native";

import Basic from "./components/Basic";

export default function App() {
  return (
    <View style={styles.container}>
      <Basic/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
