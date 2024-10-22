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
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
  RefreshControl,
} from "react-native-gesture-handler";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Message } from "../../constants/types";
import { ThemeContext } from "@/constants/ThemeContext";
import {
  useFonts,
  Manrope_800ExtraBold,
  Manrope_600SemiBold,
  Manrope_300Light,
  Manrope_200ExtraLight,
} from "@expo-google-fonts/manrope";
import { dummyMessages } from "@/constants/dummyMessages";
import Feather from "@expo/vector-icons/Feather";

interface ItemProps {
  item: Message;
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

const { width, height } = Dimensions.get("screen");

const MessageItem: React.FC<ItemProps> = ({ item }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  // let [fontsLoaded, fontError] = useFonts({
  //   Manrope_800ExtraBold,
  //   Manrope_600SemiBold,
  //   Manrope_300Light,
  //   Manrope_200ExtraLight,
  // });

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  const { colors } = theme;

  const translationX = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translationX.value,
      },
    ],
  }));

  const pan = Gesture.Pan()
    .onStart(() => {
      prevTranslationX.value = translationX.value;
    })
    .onUpdate((event) => {
      const maxTranslateX = width / 2 - 50;

      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX,
        maxTranslateX
      );
    })
    .onEnd(() => {
      translationX.value = 0;
    })
    .runOnJS(true);

  return (
    <View style={styles.taskContainer}>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.task, rStyle]}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
          >
            <View style={{ marginLeft: 15, alignSelf: "flex-start" }}>
              <Text style={styles.textStyle}>{item.sender}</Text>
              <Text style={styles.textStyle}>{item.message}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 15 }}>
              <Text style={styles.textStyle}>
                {item.createdAt.toDateString()}
              </Text>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    alignItems: "center",
  },
  task: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "90%",
    height: 70,
    marginVertical: 5,
    justifyContent: "center",
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  iconContainer: {
    position: "absolute",
    right: "6%",
    top: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 16,
  },
});

export default MessageItem;
