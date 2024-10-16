import React, { Children, createContext, useContext, useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Button,
  Image,
  ImageSourcePropType,
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
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Dog } from "../constants/types";
import Colors from "@/constants/Colors";
import { ThemeContext } from "@/constants/ThemeContext";

export default function ImageGallery() {
  const images = [
    { id: 1, url: require("../assets/images/galleryimage1.jpg"), date: "" },
    { id: 2, url: require("../assets/images/galleryimage2.jpg"), date: "" },
    { id: 3, url: require("../assets/images/galleryimage3.jpg"), date: "" },
    { id: 4, url: require("../assets/images/galleryimage4.jpg"), date: "" },
  ];

  interface Image {
    id: number;
    url: ImageSourcePropType | undefined;
    date: string;
  }

  const imageItem = ({ item }: { item: Image }) => {
    console.log(item.url);
    return <Image style={{}} source={item.url} />;
  };
  return (
    <View>
      <FlatList
        data={images}
        renderItem={imageItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
