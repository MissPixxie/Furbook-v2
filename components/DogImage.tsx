import React from "react";
import { DimensionValue, Image } from "react-native";

interface ImageProps {
  width: string;
  height: string;
}

export const DogImage = ({ width, height }: ImageProps) => {
  return (
    <Image
      source={require("../assets/images/OGBUB40.jpg")}
      style={{
        width: width as DimensionValue,
        height: height as DimensionValue,
      }}
    />
  );
};
