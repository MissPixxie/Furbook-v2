import { Stack, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function MyDogsScreen() {
  const router = useRouter();

  return (
    <View accessible={true} style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>My Dogs</Text>
        <Button onPress={() => router.push("/mydogs/1")} title="Dog Details" />
        <Button onPress={() => router.back()} title="Go back" />
      </View>
    </View>
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
