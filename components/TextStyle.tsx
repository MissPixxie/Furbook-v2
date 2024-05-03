import React, { ReactNode } from "react";
import { Text } from "react-native";
import {
  useFonts,
  Manrope_800ExtraBold,
  Manrope_600SemiBold,
  Manrope_300Light,
  Manrope_200ExtraLight,
} from "@expo-google-fonts/manrope";

interface StyleProps {
  fontFamily: any;
  fontSize: number;
  children: ReactNode;
}

export const TextStyle = ({ fontFamily, fontSize, children }: StyleProps) => {
  let [fontsLoaded, fontError] = useFonts({
    Manrope_800ExtraBold,
    Manrope_600SemiBold,
    Manrope_300Light,
    Manrope_200ExtraLight,
  });

  return (
    <Text style={{ fontFamily: fontFamily, fontSize: fontSize }}>
      {children}
    </Text>
  );
};
