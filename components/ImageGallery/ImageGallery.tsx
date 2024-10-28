import React, { Children, createContext, useContext, useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  useWindowDimensions,
  KeyboardAvoidingView,
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
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ImageModal } from "../Dogs/ImageModal";
import { ImageItem } from "@/constants/types";

const images: Array<ImageItem> = [
  { id: 1, url: require("@/assets/images/galleryimage1.jpg"), date: "" },
  { id: 2, url: require("@/assets/images/galleryimage2.jpg"), date: "" },
  { id: 3, url: require("@/assets/images/galleryimage3.jpg"), date: "" },
  { id: 4, url: require("@/assets/images/galleryimage4.jpg"), date: "" },
];

export default function ImageGallery() {
  const [currentImage, setCurrentImage] = useState<ImageItem | null>(null);
  const [imageModalVisible, setImageModalVisible] = useState(false);

  const toggleModal = () => {
    setImageModalVisible(!imageModalVisible);
  };
  // Hämtar värdet på skärmen och delar det med 2 för att skapa 2 columner
  // tar bort 5 på grund av att columngap ska finnas med i beräkningen
  const { width } = useWindowDimensions();
  const widthOfImageView = width / 2 - 8;

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      rowGap: 5,
      columnGap: 5,
      maxWidth: width,
    },
  });

  return (
    <View style={styles.container}>
      {images.map((image) => (
        <TouchableOpacity
          key={image.id}
          style={{ maxWidth: widthOfImageView, maxHeight: 200 }}
          onPress={() => {
            setCurrentImage(image);
            setImageModalVisible(true);
          }}
        >
          <ImageElement
            key={image.id}
            id={image.id}
            url={image.url}
            date={image.date}
          />
        </TouchableOpacity>
      ))}
      <KeyboardAvoidingView behavior="padding">
        {imageModalVisible && (
          <ImageModal closeImageModal={toggleModal} image={currentImage} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
