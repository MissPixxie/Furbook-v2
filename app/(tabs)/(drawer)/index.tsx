import { StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Button } from "@rneui/themed";
import DrawerLayout from "../_layout";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { CustomCard } from "@/components/CustomCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "@/constants/ThemeContext";
import { useContext } from "react";
import { TextStyle } from "@/components/TextStyle";

export default function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const speak = () => {
    const thingToSay = "Morocco";
    Speech.speak(thingToSay);
  };

  return (
    <SafeAreaView style={styles.container} accessible={true}>
      <CustomCard gradientColors={["green", "purple"]} rowGap={10}>
        <TextStyle fontFamily={"Manrope_600SemiBold"} fontSize={18}>
          Saved Events
        </TextStyle>
        <View style={{ backgroundColor: "transparent" }}>
          <Text>Hello</Text>
        </View>
        <View style={{ backgroundColor: "transparent" }}>
          <Text>Hello</Text>
        </View>
      </CustomCard>
      {/* <Button title="test" onPress={speak} /> */}
      <View
        style={styles.separator}
        lightColor="green"
        darkColor="rgba(255,255,255,0.1)"
      />
      <CustomCard gradientColors={["green", "purple"]}>
        <View style={{ backgroundColor: "transparent" }}>
          <Text>Hello</Text>
        </View>
        <View style={{ backgroundColor: "transparent" }}>
          <Text>Hello</Text>
        </View>
      </CustomCard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 15,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    alignSelf: "center",
  },
});

// import { Redirect, useRouter, useFocusEffect } from "expo-router";
// import { Text } from "react-native";

// export default function Page() {
//   const router = useRouter();

//   return <Redirect href={"/(drawer)/home"} />;
// }
