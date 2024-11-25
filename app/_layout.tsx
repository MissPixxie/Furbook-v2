import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import React from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeContext, ThemeProvider } from "@/constants/ThemeContext";
import { Slot } from "expo-router";
import { SessionProvider } from "../constants/authenticationContext";
import SignIn from "./sign-in";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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

export default function AppWrapper() {
	return <RootLayout />;
}

function RootLayout() {
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

	return (
		<SessionProvider>
			<ThemeProvider>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<Slot />
				</GestureHandlerRootView>
			</ThemeProvider>
		</SessionProvider>
	);
}
