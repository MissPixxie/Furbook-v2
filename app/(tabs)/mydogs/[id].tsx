import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams, router, Stack, useRouter } from "expo-router";

export default function DogIdPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ headerTitle: `Dog ${id}` }} />
      <View accessible={true} style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Dog {id} details</Text>
        </View>
        <Button onPress={() => router.back()} title="Go back" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
