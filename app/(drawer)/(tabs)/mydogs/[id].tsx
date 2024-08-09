import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { useLocalSearchParams, router, Stack, useRouter } from "expo-router";
import { ThemeContext } from "@/constants/ThemeContext";
import { Header } from "@/app/(drawer)/_header";
import { Image } from "expo-image";
import { DogImage } from "@/components/DogImage";

export default function DogIdPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  console.log(id);

  // pass dog object not just id

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
        }}
      />
      <View accessible={true}>
        <DogImage width={"50%"} height={"auto"} />
        <Button onPress={() => router.back()} title="Go back" />
      </View>
    </>
  );
}
