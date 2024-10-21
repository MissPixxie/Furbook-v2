import React, { useContext } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { ThemeContext } from "@/constants/ThemeContext";
import BouncyBox from "./BouncyBox";

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
      <BouncyBox backgroundColor="#a4c6fc">
        <Text style={{ color: colors.text }}>New Event</Text>
      </BouncyBox>
      <BouncyBox backgroundColor="#e4acfa">
        <Text style={{ color: colors.text }}>New Place</Text>
      </BouncyBox>
      <BouncyBox backgroundColor="#fff8c7">
        <Text style={{ color: colors.text }}>New Dog</Text>
      </BouncyBox>
      <BouncyBox backgroundColor="#c9ffea">
        <Text style={{ color: colors.text }}>New Route</Text>
      </BouncyBox>
    </View>
  );
}
