import React, { useContext } from "react";
import { Text, useWindowDimensions, View, StyleSheet } from "react-native";
import { ThemeContext } from "@/constants/ThemeContext";
import BouncyBox from "./BouncyBox";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Create() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { width } = useWindowDimensions();
  const calculatedWidth = width - 150;

  const styles = StyleSheet.create({
    text: {
      fontSize: 14,
    },
  });

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
      <BouncyBox>
        <LinearGradient
          locations={[0.1, 0.9]}
          colors={["#a4c6fc", "#c9deff"]}
          start={{ x: 0.1, y: 0.6 }}
          style={{ flex: 1, borderRadius: 5, justifyContent: "center" }}
        >
          <MaterialIcons
            name="event"
            size={52}
            color="#d7e5fc"
            style={{
              alignSelf: "center",
              opacity: 0.7,
            }}
          />
        </LinearGradient>
      </BouncyBox>
      <BouncyBox>
        <LinearGradient
          locations={[0.1, 0.9]}
          colors={["#e4acfa", "#f1cfff"]}
          start={{ x: 0.1, y: 0.6 }}
          style={{
            flex: 1,
            borderRadius: 5,
            justifyContent: "center",
          }}
        >
          <Entypo
            name="location"
            size={52}
            color="#f6e0ff"
            style={{
              alignSelf: "center",
              opacity: 0.7,
            }}
          />
        </LinearGradient>
      </BouncyBox>
      <BouncyBox>
        <LinearGradient
          locations={[0.1, 0.9]}
          colors={["#fff8c7", "#fffad9"]}
          start={{ x: 0.1, y: 0.6 }}
          style={{
            flex: 1,
            borderRadius: 5,
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="paw"
            size={52}
            color="#fffdeb"
            style={{
              alignSelf: "center",
              transform: [{ rotate: "25deg" }],
            }}
          />
        </LinearGradient>
      </BouncyBox>
      <BouncyBox>
        <LinearGradient
          locations={[0.1, 0.9]}
          colors={["#c9ffea", "#defff2"]}
          start={{ x: 0.1, y: 0.6 }}
          style={{ flex: 1, borderRadius: 5, justifyContent: "center" }}
        >
          <FontAwesome6
            name="route"
            size={52}
            color="#ebfff7"
            style={{
              alignSelf: "center",
              opacity: 0.9,
            }}
          />
        </LinearGradient>
      </BouncyBox>
    </View>
  );
}
