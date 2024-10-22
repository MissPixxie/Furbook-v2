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
  Alert,
} from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
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

  const isFocused = useSharedValue(false);
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
      isFocused.value = true;
    })
    .onUpdate((event) => {
      const maxTranslateX = width / 2 - 100;
      if (event.translationX < 0) {
        translationX.value = clamp(
          prevTranslationX.value + event.translationX,
          -maxTranslateX,
          0
        );
      }
    })
    .onEnd(() => {
      withSpring(translationX.value);
    })
    .runOnJS(true);

  return (
    <View style={styles.taskContainer}>
      <View style={styles.iconContainer}>
        <Feather
          name="trash-2"
          size={24}
          color="white"
          style={{ alignSelf: "flex-end", right: "25%" }}
          onPress={() => {
            Alert.alert("", "Are you sure you want to delete this message?", [
              {
                text: "Delete",
                onPress: () => console.log("Delete Pressed"),
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
            ]);
          }}
        />
      </View>
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
    marginVertical: 5,
  },
  task: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "90%",
    height: 70,
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
    height: 70,
    width: 150,
    position: "absolute",
    borderRadius: 5,
    right: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e60202",
  },
  textStyle: {
    fontSize: 16,
  },
});

export default MessageItem;
