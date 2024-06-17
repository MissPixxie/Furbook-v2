import { Link, Stack, Tabs, router } from "expo-router";
import { Button } from "react-native";
import { ThemeContext } from "@/constants/ThemeContext";
import { useContext } from "react";

// För att ta bort nested navigering i tabsen
export default function _layout() {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Messages",
        headerTitleAlign: "center",
      }}
    />
  );
}
