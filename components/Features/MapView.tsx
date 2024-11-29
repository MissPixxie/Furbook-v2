import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
//import GetUserLocation from "./GetUserLocation";
// import GetLocation from "react-native-get-location";
// import { request, PERMISSIONS, RESULTS } from "react-native-permissions";

const useMapFeature = true;

export default function MapScreen() {
	// request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((status) => {
	// 	switch (status) {
	// 		case RESULTS.UNAVAILABLE:
	// 			return console.log(
	// 				"This feature is not available (on this device / in this context)"
	// 			);
	// 		case RESULTS.DENIED:
	// 			return console.log(
	// 				"The permission has not been requested / is denied but requestable"
	// 			);
	// 		case RESULTS.BLOCKED:
	// 			return console.log(
	// 				"The permission is denied and not requestable"
	// 			);
	// 		case RESULTS.GRANTED:
	// 			return console.log("The permission is granted");
	// 		case RESULTS.LIMITED:
	// 			return console.log(
	// 				"The permission is granted but with limitations"
	// 			);
	// 	}
	// });
	// const userLocation = GetUserLocation();
	// console.log(userLocation);

	// GetLocation.getCurrentPosition({
	// 	enableHighAccuracy: true,
	// 	timeout: 60000,
	// })
	// 	.then((location) => {
	// 		console.log(location);
	// 	})
	// 	.catch((error) => {
	// 		const { code, message } = error;
	// 		console.warn(code, message);
	// 	});
	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
		map: {
			...StyleSheet.absoluteFillObject,
		},
	});

	return (
		<SafeAreaView style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				region={{
					latitude: 59.3293, // Stockholm
					longitude: 18.0686,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		</SafeAreaView>
	);
}
