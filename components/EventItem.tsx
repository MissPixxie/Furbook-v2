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
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Event } from "../constants/types";
import { ThemeContext } from "@/constants/ThemeContext";
import {
  useFonts,
  Manrope_800ExtraBold,
  Manrope_600SemiBold,
  Manrope_300Light,
  Manrope_200ExtraLight,
} from "@expo-google-fonts/manrope";

interface ItemProps {
  item: Event;
}

export const EventItem = ({ item }: ItemProps) => {
  const [isVisable, setIsVisable] = useState(false);
  const [isActive, setActive] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  let [fontsLoaded, fontError] = useFonts({
    Manrope_800ExtraBold,
    Manrope_600SemiBold,
    Manrope_300Light,
    Manrope_200ExtraLight,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const { colors } = theme;

  const toggleSavedItems = () => {
    setActive((prevState) => !prevState);
  };

  const styles = StyleSheet.create({
    postContainer: {
      width: "100%",
      marginVertical: 10,
      flexDirection: "column",
      backgroundColor: colors.card,
      borderRadius: 10,
      shadowColor: "#080808",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    },
    imgAvatar: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 20,
    },
    textTitle: {
      color: colors.text,
      fontSize: 20,
    },
    textStyle: {
      color: colors.text,
      fontSize: 16,
    },
  });

  // Fix styling, cards big image

  return (
    <Animated.View accessible={true} style={styles.postContainer}>
      <Image
        style={styles.imgAvatar}
        source={require("../assets/images/beach.jpg")}
      />
      <View
        accessible={true}
        style={{
          flex: 1,
          flexDirection: "row",
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}
      >
        <View style={{ marginLeft: 15, alignSelf: "flex-start" }}>
          <Text
            accessible={true}
            accessibilityLabel={item.title}
            style={styles.textTitle}
          >
            {item.title}
          </Text>
          <Text style={styles.textStyle}>{item.description}</Text>
          <Text style={styles.textStyle}>{item.place}</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 15 }}>
          <Text
            style={{
              fontFamily: "Manrope_300Light",
              fontSize: 18,
              color: colors.text,
              flexGrow: 2,
              textAlign: "right",
              marginRight: 10,
              alignItems: "flex-start",
            }}
          >
            12.00 24/4
          </Text>
          {isActive ? (
            <Entypo
              name="heart"
              size={24}
              color="black"
              style={{ alignSelf: "flex-end" }}
              onPress={toggleSavedItems}
            />
          ) : (
            <Entypo
              name="heart-outlined"
              size={24}
              color="black"
              style={{ alignSelf: "flex-end" }}
              onPress={toggleSavedItems}
            />
          )}
        </View>
      </View>
    </Animated.View>
  );
};
