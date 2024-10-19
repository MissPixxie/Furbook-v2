import React, { Children, createContext, useContext, useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ImageSourcePropType,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  SlideInUp,
  withDelay,
  withSequence,
  StretchInX,
  FlipInEasyX,
  Easing,
} from "react-native-reanimated";
import Colors from "@/constants/Colors";
import { ThemeContext } from "@/constants/ThemeContext";
import ImageElement from "./ImageElement";
import { ScrollView } from "react-native-gesture-handler";

const images: Array<ImageItem> = [
  { id: 1, url: require("@/assets/images/galleryimage1.jpg"), date: "" },
  { id: 2, url: require("@/assets/images/galleryimage2.jpg"), date: "" },
  { id: 3, url: require("@/assets/images/galleryimage3.jpg"), date: "" },
  { id: 4, url: require("@/assets/images/galleryimage4.jpg"), date: "" },
];

type ImageItem = {
  id: number;
  url: ImageSourcePropType | undefined;
  date: string;
};

export default function ImageGallery() {
  // Hämtar värdet på skärmen och delar det med 2 för att skapa 2 columner
  // tar bort 5 på grund av att columngap ska finnas med i beräkningen
  const { width } = useWindowDimensions();
  const widthOfImageView = width / 2 - 8;

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 5,
        columnGap: 5,
        maxWidth: width,
        backgroundColor: "blue",
      }}
    >
      {images.map((image) => (
        <View
          style={{
            maxWidth: widthOfImageView,
          }}
        >
          <ImageElement
            key={image.id}
            id={image.id}
            url={image.url}
            date={image.date}
          />
        </View>
      ))}
    </View>
    // <FlatList
    //   data={images}
    //   renderItem={imageItem}
    //   keyExtractor={(item) => item.id.toString()}
    //   numColumns={2}
    //   centerContent={true}
    // />
  );
}
