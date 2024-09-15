import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useEffect } from "react";
import { useWindowDimensions } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.view1}>
          <Text style={styles.text1}>1</Text>
          <Text style={styles.text2}>2</Text>
          <Text style={styles.text3}>3</Text>
        </View>
        <Text style={styles.text4}>4</Text>
        <Text style={styles.text5}>5</Text>
        <View style={styles.view67}>
          <Text style={styles.text6}>6</Text>
          <Text style={styles.text7}>7</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  view1: {
    flex: 1,
    flexDirection: "row",
  },
  text1: {
    flex: 1,
    backgroundColor: "cyan",
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    textAlignVertical: "center",
  },
  text2: {
    flex: 2,
    backgroundColor: "magenta",
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    textAlignVertical: "center",
  },
  text3: {
    flex: 3,
    backgroundColor: "yellow",
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    textAlignVertical: "center",
  },
  text4: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    textAlignVertical: "center",
  },
  text5: {
    flex: 1,
    backgroundColor: "green",
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    textAlignVertical: "center",
  },
  view67: {
    flex: 6,
    flexDirection: "row",
  },
  text6: {
    flex: 1,
    backgroundColor: "white",
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    textAlignVertical: "center",
  },
  text7: {
    flex: 1,
    backgroundColor: "blue",
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
