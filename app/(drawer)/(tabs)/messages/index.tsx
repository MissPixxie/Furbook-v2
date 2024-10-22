import { MessageItem } from "@/components/Messages/MessageItem";
import { Message } from "@/constants/types";
import { ThemeContext } from "@/constants/ThemeContext";
import { Link, Stack, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Manrope_800ExtraBold,
  Manrope_600SemiBold,
  Manrope_300Light,
  Manrope_200ExtraLight,
} from "@expo-google-fonts/manrope";
import { Divider } from "@rneui/themed/dist/Divider";
import { dummyMessages } from "@/constants/dummyMessages";
import Search from "@/components/Search";
import MessagesList from "@/components/Messages/MessagesList";

export default function MessagesScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [updateFromDetailScreen, setUpdateFromDetailScreen] = useState(false);

  const { colors } = theme;

  const updateWhenMessageRemoved = (actionType: string, newState: boolean) => {
    if (actionType === "updated") {
      setUpdateFromDetailScreen(newState);
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <View accessible={true} style={{ flex: 1 }}>
      <Search searchValue="" />
      <MessagesList />
      <Divider />
    </View>
  );
}
