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
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl } from "react-native-gesture-handler";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Dog } from "./types";
import Colors from "@/constants/Colors";
import { ThemeContext } from "@/constants/ThemeContext";
import { Route } from "expo-router";
import { RouteNode } from "expo-router/build/Route";

interface ItemProps {
  item: Dog;
}

export const DogItem = ({ item }: ItemProps) => {
  const [isVisable, setIsVisable] = useState(false);
  const [isActive, setActive] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { colors } = theme;

  console.log(item);

  const toggleSavedItems = () => {
    setActive((prevState) => !prevState);
  };

  const styles = StyleSheet.create({
    postContainer: {
      width: "100%",
      marginVertical: 10,
      flexDirection: "row",
      backgroundColor: colors.card,
      padding: 15,
      borderRadius: 10,
      shadowColor: "#080808",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    },
    imgAvatar: {
      width: 100,
      height: 100,
      borderRadius: 400 / 2,
    },
  });

  return (
    <Animated.View accessible={true} style={styles.postContainer}>
      <Image
        style={styles.imgAvatar}
        source={require("../assets/images/OGBUB40.jpg")}
      />
      <View
        accessible={true}
        style={{ marginLeft: 15, alignSelf: "flex-start" }}
      >
        <Text style={{ fontSize: 26, color: colors.text }}>{item.name}</Text>
        <Text style={{ fontSize: 18, color: colors.text }}>{item.sex}</Text>
        <Text style={{ fontSize: 18, color: colors.text }}>{item.breed}</Text>
        <Text style={{ fontSize: 18, color: colors.text }}>
          {item.neutered}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          color: colors.text,
          flexGrow: 2,
          textAlign: "right",
          marginRight: 10,
        }}
      >
        {item.age}
      </Text>
    </Animated.View>
  );
};
