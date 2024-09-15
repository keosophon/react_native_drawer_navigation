import React from "react";
import { View, Text, Button, Pressable, StyleSheet } from "react-native";

const Details = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details</Text>
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
});
export default Details;
