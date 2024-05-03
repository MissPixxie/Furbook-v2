import { Link, Stack, Tabs, router } from "expo-router";
import { Button } from "react-native";

// För att ta bort nested navigering i tabsen
export default function _layout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
