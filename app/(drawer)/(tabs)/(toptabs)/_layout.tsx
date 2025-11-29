import {
	createMaterialTopTabNavigator,
	MaterialTopTabNavigationOptions,
	MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import React, { useContext, useState } from "react";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "@/constants/ThemeContext";
import Search from "@/components/Search";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
	MaterialTopTabNavigationOptions,
	typeof Navigator,
	TabNavigationState<ParamListBase>,
	MaterialTopTabNavigationEventMap
>(Navigator);

const TopTabsLayout = () => {
	const [search, setSearch] = useState<string>("");
	const { theme } = useContext(ThemeContext);
	const { colors } = theme;
	const updateSearch = (search: string) => {
		setSearch(search);
	};

	return (
		<>
			<SafeAreaView style={{ backgroundColor: colors.background }}>
				<Search searchValue="" />
			</SafeAreaView>
			<MaterialTopTabs
				screenOptions={{
					tabBarStyle: { backgroundColor: colors.inputs },
					tabBarLabelStyle: { color: colors.text },
					tabBarIndicatorStyle: { borderBottomColor: "green" },
					tabBarActiveTintColor: "green",
				}}
			>
				<MaterialTopTabs.Screen name="dogs" />
				<MaterialTopTabs.Screen name="events" />
				<MaterialTopTabs.Screen name="places" />
			</MaterialTopTabs>
		</>
	);
};

export default TopTabsLayout;
