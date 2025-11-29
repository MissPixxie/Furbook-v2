import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";

export default function LikedEvents() {
	const router = useRouter();
	return (
		<View>
			<View style={styles.getStartedContainer}>
				<Text>No liked events... Find events</Text>
				<Text
					style={styles.link}
					onPress={() => {
						router.push("/(tabs)/(toptabs)/events");
					}}
				>
					here
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	link: {
		color: "green",
	},
	getStartedContainer: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightContainer: {
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: "center",
	},
	helpContainer: {
		marginTop: 15,
		marginHorizontal: 20,
		alignItems: "center",
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		textAlign: "center",
	},
});
