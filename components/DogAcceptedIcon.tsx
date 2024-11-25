import { FontAwesome6 } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
	dogAccepted: boolean;
}

export default function DogAcceptedIcon({ dogAccepted }: Props) {
	const [isDogAccepted, setIsDogAccepted] = useState(dogAccepted);

	const styles = StyleSheet.create({
		icon: {
			color: isDogAccepted ? "green" : "#c41408",
		},
	});
	return (
		<View style={{ flexDirection: "row" }}>
			<FontAwesome6 name="dog" size={14} style={styles.icon} />
			{isDogAccepted ? (
				<Feather name="check" size={20} style={styles.icon} />
			) : (
				<Entypo name="block" size={16} style={styles.icon} />
			)}
		</View>
	);
}
