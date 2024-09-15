import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const handlePress = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    setNumber(count * 5);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text>{number}</Text>
      <Button title="Add" onPress={handlePress} />
      <Button title="Clear" onPress={() => setCount(0)} />
      <Text>you clicked {count} times</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
