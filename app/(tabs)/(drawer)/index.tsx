import { StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Button } from "@rneui/themed";

export default function HomeScreen() {
  const speak = () => {
    const thingToSay = "Morocco";
    Speech.speak(thingToSay);
  };

  return (
    <View accessible={true} style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="test" onPress={speak} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
