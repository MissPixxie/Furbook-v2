import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { useLocalSearchParams, router, Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "@rneui/themed";
import {
  useFonts,
  Manrope_800ExtraBold,
  Manrope_600SemiBold,
  Manrope_300Light,
  Manrope_200ExtraLight,
} from "@expo-google-fonts/manrope";
import { ThemeContext } from "@/constants/ThemeContext";
import { Feather } from "@expo/vector-icons";

export default function MessageIdPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [text, onChangeText] = useState("");
  const [date, setDate] = useState("24 April");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { colors } = theme;

  let [fontsLoaded, fontError] = useFonts({
    Manrope_800ExtraBold,
    Manrope_600SemiBold,
    Manrope_300Light,
    Manrope_200ExtraLight,
  });

  console.log(id);

  return (
    <>
      <Stack.Screen options={{ headerTitle: "", headerShown: true }} />
      <SafeAreaView accessible={true} style={styles.container}>
        <View>
          <View style={styles.dateAndDivider}>
            <Divider style={{ width: "35%", backgroundColor: colors.text }} />
            <Text style={{ marginHorizontal: 15 }}>{date}</Text>
            <Divider style={{ width: "35%", backgroundColor: colors.text }} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Olle</Text>
            <Text style={styles.title}>12.00</Text>
          </View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consectetur purus id eros accumsan commodo. Integer nibh erat,
            vulputate sit amet pulvinar gravida, viverra vel justo. Nulla
            facilisi. Ut vel porta magna. Suspendisse efficitur, lacus eu mattis
            auctor, leo nisi gravida dolor, vitae rhoncus tortor augue varius
            ex. Aliquam non nunc nibh.
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Skriv meddelande"
          />
          <Feather
            name="send"
            color={colors.text}
            size={24}
            onPress={() => {}}
            style={{ alignSelf: "center", margin: 8 }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
    paddingHorizontal: 15,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  dateAndDivider: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "Manrope_300Light",
  },
  text: {
    fontSize: 16,
    fontFamily: "Manrope_300Light",
  },
  input: {
    fontFamily: "Manrope_300Light",
    flexGrow: 2,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
  },
});
