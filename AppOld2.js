import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, RefreshControl } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const [data, setData] = useState([{ id: "1", title: "Item 1" }]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setData((prevData) => [
        ...prevData,
        {
          id: (prevData.length + 1).toString(),
          title: `Item ${prevData.length + 1}`,
        },
      ]);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["red"]}
            />
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    flex: 1,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
});
