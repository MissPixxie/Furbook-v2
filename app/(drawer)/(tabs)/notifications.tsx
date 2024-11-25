import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "@/components/Themed";
import MapScreen from "@/components/Features/MapView";
import React from "react";

export default function NotificationsScreen() {
	return (
		<SafeAreaView accessible={true} style={styles.container}>
			<MapScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
