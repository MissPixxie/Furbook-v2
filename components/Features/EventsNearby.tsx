import React from "react";
import { View, StyleSheet } from "react-native";
import BouncyBox from "../BouncyBox";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export default function EventsNearby() {
	return (
		<View style={styles.container}>
			<BouncyBox>
				<LinearGradient
					locations={[0.1, 0.9]}
					colors={["#a4c6fc", "#c9deff"]}
					start={{ x: 0.1, y: 0.6 }}
					style={{
						flex: 1,
						borderRadius: 5,
						justifyContent: "center",
					}}
				>
					<MaterialIcons
						name="event"
						size={52}
						color="#d7e5fc"
						style={{
							alignSelf: "center",
							opacity: 0.7,
						}}
					/>
				</LinearGradient>
			</BouncyBox>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
});
