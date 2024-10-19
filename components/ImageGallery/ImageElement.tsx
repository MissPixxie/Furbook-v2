import { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";
import { ImageItem } from "@/constants/types";

export default function ImageElement({ url }: ImageItem) {
  const { width } = useWindowDimensions();
  const widthOfImage = width / 2 - 8;

  const styles = StyleSheet.create({
    imageStyle: {
      maxWidth: widthOfImage,
      maxHeight: 200,
    },
  });

  return <Image source={url} style={styles.imageStyle} />;
}
