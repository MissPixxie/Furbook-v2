import { Feather } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import {
	router,
	useGlobalSearchParams,
	useLocalSearchParams,
	useNavigation,
} from "expo-router";
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "@/constants/ThemeContext";

export default function Header() {
	const navigation = useNavigation();
	const { theme } = useContext(ThemeContext);
	const { colors } = theme;

	const toggleDrawer = () => {
		navigation.dispatch(DrawerActions.openDrawer());
	};
	const styles = StyleSheet.create({
		container: {
			backgroundColor: colors.background,
			shadowColor: "#171717",
			shadowOffset: { width: -2, height: 4 },
			shadowOpacity: 0.2,
			shadowRadius: 3,
			elevation: 3,
		},
		iconStyle: {
			color: colors.text,
			textAlign: "right",
			marginRight: 15,
			marginTop: 10,
			marginBottom: Platform.OS === "ios" ? -20 : 10,
		},
	});

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.iconStyle}>
				<Feather
					name="menu"
					size={30}
					style={styles.iconStyle}
					onPress={toggleDrawer}
				/>
			</Text>
		</SafeAreaView>
	);
}
