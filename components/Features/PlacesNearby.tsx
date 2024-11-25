import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";

export default function PlacesNearby() {
	const [featureEnabled, setFeatureEnabled] = useState(true);

	const toggleFeature = () => {
		setFeatureEnabled(!featureEnabled);
	};

	return (
		<View>
			{featureEnabled ? (
				<Text>Feature On</Text>
			) : (
				<Text>Feature Off</Text>
			)}
		</View>
	);
}
