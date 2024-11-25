import React, {
	useContext,
	useDeferredValue,
	useEffect,
	useState,
} from "react";
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import {
	Link,
	Tabs,
	useGlobalSearchParams,
	useLocalSearchParams,
	useNavigation,
	usePathname,
	useRouter,
	useSegments,
} from "expo-router";
import { Platform, Pressable } from "react-native";
import { Text } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeContext } from "@/constants/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@/constants/authenticationContext";
import Header from "@/app/(drawer)/_header";

const TabLayout = () => {
	// const colorScheme = useColorScheme();
	// const id = null;
	const { theme } = useContext(ThemeContext);
	const { colors } = theme;
	const navigation = useNavigation();
	const router = useRouter();
	const { session, isLoading } = useSession();

	const path = usePathname();

	return (
		<SafeAreaProvider>
			<Tabs
				screenOptions={{
					tabBarAccessibilityLabel: "Bottom tab navigation",
					headerShown: useClientOnlyValue(false, true),
					tabBarShowLabel: false,
					tabBarStyle: {
						position: "absolute",
						height: Platform.OS === "ios" ? 80 : 55,
					},
					tabBarBackground: () => (
						<LinearGradient
							colors={colors.tabBar}
							style={{
								height: 70,
							}}
						/>
					),
					tabBarInactiveTintColor: "#51951a",
					tabBarActiveTintColor: "#294d0d",
				}}
			>
				<Tabs.Screen
					name="(home)/index"
					options={{
						tabBarAccessibilityLabel: "home button",
						headerTitleStyle: { color: colors.text },
						title: "Home",
						headerShown: true,
						header: () => <Header />,
						headerStyle: { backgroundColor: colors.primary },
						headerTitleAlign: "center",
						tabBarIcon: ({ color }) => (
							<Entypo name="home" size={26} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="mydogs"
					options={{
						tabBarAccessibilityLabel: "my dogs button",
						headerTitleStyle: { color: colors.text },
						title: "My Dogs",
						headerShown: false,
						headerStyle: { backgroundColor: colors.primary },
						headerTitleAlign: "center",
						tabBarIcon: ({ color }) => (
							<Ionicons name="paw" size={26} color={color} />
						),
					}}
				/>

				<Tabs.Screen
					name="(toptabs)"
					options={{
						tabBarAccessibilityLabel: "search page button",
						title: "",
						headerShown: false,
						tabBarIcon: ({ color }) => (
							<FontAwesome
								name="search"
								size={26}
								color={color}
							/>
						),
					}}
				/>
				{/* <Tabs.Screen
          name="messages"
          options={{
            tabBarAccessibilityLabel: "messages button",
            headerTitleStyle: { color: colors.text },
            title: "Messages",
            headerShown: false,
            headerStyle: { backgroundColor: colors.primary },
            headerTitleAlign: "center",
            tabBarStyle: {
              display: path === "/messages/1" ? "none" : "flex",
            },
            tabBarIcon: ({ color }) => (
              <FontAwesome name="envelope" size={26} color={color} />
            ),
          }}
        /> */}
				<Tabs.Screen
					name="notifications"
					options={{
						tabBarAccessibilityLabel: "notifications button",
						headerShown: false,
						title: "",
						tabBarIcon: ({ color }) => (
							<Ionicons
								name="notifications"
								size={26}
								color={color}
							/>
						),
					}}
				/>
			</Tabs>
		</SafeAreaProvider>
	);
};

export default TabLayout;
