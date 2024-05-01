import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

interface Props {
  children: React.ReactNode;
  title?: string;
  onPress?: () => void;
  bgColor?: any;
  color?: string;
  fontSize?: FontSize;
  icon?: any;
  flex?: number;
  flexDirection?: flexDirection;
  width?: number;
  height?: number;
}

type FontSize = 18 | 20 | 22 | 26 | 28 | 32;
type flexDirection = "row" | "column";

export const CustomCard = ({
  children,
  title,
  onPress,
  bgColor,
  color,
  fontSize = 22,
  icon,
  flex,
  flexDirection,
  width,
  height,
}: Props) => {
  const styles = StyleSheet.create({
    linearGradient: {
      padding: 20,
      color: color,
      flex: flex,
      width: width,
      height: height,
      borderRadius: 10,
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
    },
    cardContainer: {
      backgroundColor: "transparent",
    },
  });

  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={["#404040", "#333333", "#262626"]}
        style={styles.linearGradient}
      >
        {children}
      </LinearGradient>
    </View>
  );
};
