import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useLocalSearchParams, router, Stack, useRouter } from "expo-router";
import { ThemeContext } from "@/constants/ThemeContext";
import { Header } from "@/app/(drawer)/_header";
import { Image } from "expo-image";
import { DogImage } from "@/components/DogImage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dog } from "@/components/types";
import { FlatList } from "react-native-gesture-handler";

export default function DogIdPage() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const [doggyData, setDoggyData] = useState<Dog | undefined>();

  const getDogData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("dog");
      setDoggyData(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = getDogData();
  }, []);

  const styles = StyleSheet.create({
    imgAvatar: {
      width: "50%",
      height: "auto",
    },
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShown: true,
          headerTintColor: colors.text,
        }}
      />
      <View>
        {/* <FlatList data={doggyData} keyExtractor={()} */}
        <Text>{doggyData?.name}</Text>
      </View>
    </>
  );
}
