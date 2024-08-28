import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeContext, ThemeProvider } from "@/constants/ThemeContext";
import { Slot } from "expo-router";
import { SessionProvider } from "../constants/authenticationContext";
import { Realm, RealmProvider, useRealm, useQuery } from "@realm/react";
import { ObjectSchema } from "realm";
//import { AppWrapper } from "@/constants/appWrapper";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

//export const unstable_settings = {
// Ensure that reloading on `/modal` keeps a back button present.
//  initialRouteName: "(tabs)",
//};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
    console.log(error);
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // class Task extends Realm.Object {
  //   _id!: Realm.BSON.ObjectId;
  //   description!: string;
  //   isComplete!: boolean;
  //   createdAt!: Date;

  //   static generate(description: string) {
  //     return {
  //       _id: new Realm.BSON.ObjectId(),
  //       description,
  //       createdAt: new Date(),
  //     };
  //   }

  //   static schema: ObjectSchema = {
  //     name: "Task",
  //     primaryKey: "_id",
  //     properties: {
  //       _id: "objectId",
  //       description: "string",
  //       isComplete: { type: "bool", default: false },
  //       createdAt: "date",
  //     },
  //   };
  // }

  // return <RootLayoutNav />;
  return (
    <RealmProvider>
      <SessionProvider>
        <ThemeProvider>
          <Slot />
        </ThemeProvider>
      </SessionProvider>
    </RealmProvider>
  );
}

// function RootLayoutNav() {
//   const colorScheme = useColorScheme();
// }
