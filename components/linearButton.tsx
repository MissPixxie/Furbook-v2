import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  DimensionValue,
} from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  bgColor?: any;
  borderColor?: string;
  color: string;
  borderWidth?: number;
  fontSize?: FontSize;
  icon?: any;
  gradientColors: Array<string>;
  width?: DimensionValue | undefined;
}

type FontSize = 16 | 18 | 20 | 22 | 26 | 28 | 32;

export const LinearButton = ({
  title,
  onPress,
  bgColor,
  borderColor,
  color,
  borderWidth,
  fontSize = 22,
  icon,
  gradientColors,
  width = "80%",
}: Props) => {
  const styles = StyleSheet.create({
    button: {
      width: width,
      backgroundColor: bgColor,
      borderWidth: borderWidth,
      borderRadius: 10,
      marginVertical: 10,
      alignSelf: "center",
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
      borderColor: borderColor,
    },
    text: {
      fontSize: fontSize,
      color: color,
      paddingHorizontal: 5,
      paddingVertical: 10,
      textAlign: "center",
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={gradientColors} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
