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
import { Message } from "./types";
import { ThemeContext } from "@/constants/ThemeContext";

interface ItemProps {
  item: Message;
}

export const MessageItem = ({ item }: ItemProps) => {
  const [isVisable, setIsVisable] = useState(false);
  const [isActive, setActive] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { colors } = theme;

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
    <Animated.View style={styles.postContainer}>
      <Image
        style={styles.imgAvatar}
        source={require("../assets/images/beach.jpg")}
      />
      <View style={{ marginLeft: 15, alignSelf: "flex-start" }}>
        <Text style={{ fontSize: 26, color: colors.text }}>{item._id}</Text>
      </View>
    </Animated.View>
  );
};
