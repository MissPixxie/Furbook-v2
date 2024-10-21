import React, { useContext } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { ThemeContext } from "@/constants/ThemeContext";

export default function Create() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { width } = useWindowDimensions();
  const calculatedWidth = width - 150;

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        rowGap: 10,
        maxWidth: calculatedWidth,
      }}
    >
      <RNBounceable
        style={{
          backgroundColor: "#a4c6fc",
          borderRadius: 5,
          padding: 3,
          width: 100,
          height: 100,
        }}
        onPress={() => {}}
      >
        <Text style={{ color: colors.text, fontWeight: "600" }}>New Event</Text>
      </RNBounceable>
      <RNBounceable
        style={{
          backgroundColor: "#e4acfa",
          borderRadius: 5,
          padding: 3,
          width: 100,
          height: 100,
        }}
        onPress={() => {}}
      >
        <Text style={{ color: colors.text, fontWeight: "600" }}>New Place</Text>
      </RNBounceable>
      <RNBounceable
        style={{
          backgroundColor: "#fff8c7",
          borderRadius: 5,
          padding: 3,
          width: 100,
          height: 100,
        }}
        onPress={() => {}}
      >
        <Text style={{ color: colors.text, fontWeight: "600" }}>New Dog</Text>
      </RNBounceable>
      <RNBounceable
        style={{
          backgroundColor: "#c9ffea",
          borderRadius: 5,
          padding: 3,
          width: 100,
          height: 100,
        }}
        onPress={() => {}}
      >
        <Text style={{ color: colors.text, fontWeight: "600" }}>New Route</Text>
      </RNBounceable>
    </View>
  );
}
