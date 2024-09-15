import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  text: {
    fontSize: 20,
    margin: 10,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "justify",
  },

  button: {
    marginTop: 10,
  },
});

export default Home;
