import { FlatList, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Button } from "@rneui/themed";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { CustomCard } from "@/components/CustomCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "@/constants/ThemeContext";
import { useContext, useState } from "react";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useFetchPlaces } from "@/apiFetch/useFetchPlaces";

import {
  useFonts,
  Manrope_800ExtraBold,
  Manrope_600SemiBold,
  Manrope_300Light,
  Manrope_200ExtraLight,
} from "@expo-google-fonts/manrope";
import { Tabs } from "expo-router";
import { Header } from "@/app/(drawer)/_header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Place } from "@/constants/types";
import { PlaceItem } from "@/components/SmallPlaceItem";

export default function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [data, setData] = useState();
  const { colors } = theme;
  let [fontsLoaded, fontError] = useFonts({
    Manrope_800ExtraBold,
    Manrope_600SemiBold,
    Manrope_300Light,
    Manrope_200ExtraLight,
  });

  const speak = () => {
    const thingToSay = "Morocco";
    Speech.speak(thingToSay);
  };

  const { placesData, error } = useFetchPlaces();

  const getUser = async () => {
    // const response = await fetch("http://localhost:8081/api/users/");
    // console.log(response);
    // const data = await response.json();
    // console.log(data);
    // setData(data);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      rowGap: 15,
      backgroundColor: colors.background,
      paddingHorizontal: 15,
    },
    title: {
      fontSize: 20,
      color: colors.text,
    },
    text: {
      fontSize: 16,
      color: colors.text,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
      alignSelf: "center",
    },
  });

  const itemFromList = ({ item }: { item: Place }) => {
    return <PlaceItem item={item} />;
  };

  console.log(placesData);
  // if (placesData !== null) {
  //   const filteredData = placesData.slice(0, 2);
  // }

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: colors.background, paddingTop: 10 }}
    >
      <Text style={{ fontSize: 20, color: colors.text }}>Places</Text>
      <View
        style={{
          margin: "auto",
          width: "100%",
          rowGap: 10,
          columnGap: 15,
          backgroundColor: "transparent",
        }}
      >
        <FlatList
          data={placesData}
          renderItem={itemFromList}
          keyExtractor={(item) => item._id}
        />
        <RNBounceable
          style={{
            backgroundColor: "#bced95",
            borderRadius: 5,
            padding: 3,
            width: "100%",
          }}
          onPress={() => {}}
        >
          <Text style={{ color: colors.text, fontWeight: "600" }}>
            New places
          </Text>
        </RNBounceable>
      </View>
      {/* <Button title="test" onPress={speak} /> */}
      <View
        style={styles.separator}
        lightColor="green"
        darkColor="rgba(255,255,255,0.1)"
      />
      <CustomCard gradientColors={colors.gradientCard}>
        <View
          style={{
            margin: "auto",
            width: "80%",
            flexDirection: "row",
            flexWrap: "wrap",
            rowGap: 15,
            columnGap: 15,
            backgroundColor: "transparent",
          }}
        >
          <RNBounceable
            style={{
              backgroundColor: "#bced95",
              borderRadius: 5,
              padding: 3,
              width: 100,
              height: 100,
            }}
            onPress={() => {}}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Events</Text>
          </RNBounceable>
          <RNBounceable
            style={{
              backgroundColor: "#bced95",
              borderRadius: 5,
              padding: 3,
              width: 100,
              height: 100,
            }}
            onPress={() => {}}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Events</Text>
          </RNBounceable>
          <RNBounceable
            style={{
              backgroundColor: "#bced95",
              borderRadius: 5,
              padding: 3,
              width: 100,
              height: 100,
            }}
            onPress={() => {}}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Events</Text>
          </RNBounceable>
          <RNBounceable
            style={{
              backgroundColor: "#bced95",
              borderRadius: 5,
              padding: 3,
              width: 100,
              height: 100,
            }}
            onPress={() => {}}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Events</Text>
          </RNBounceable>
        </View>
      </CustomCard>
    </KeyboardAwareScrollView>
  );
}
