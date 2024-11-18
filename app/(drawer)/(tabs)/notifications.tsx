import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

// export default function NotificationsScreen() {
//   return (
//     <View accessible={true} style={styles.container}>
//       <Text style={styles.title}>Notifications</Text>
//       <View
//         style={styles.separator}
//         lightColor="#eee"
//         darkColor="rgba(255,255,255,0.1)"
//       />
//     </View>
//   );
// }
import MapView, { Provider, PROVIDER_GOOGLE } from "react-native-maps";

const useMapFeature = true;

export default function MapScreen() {
	return (
		<View style={{ flex: 1 }}>
			<MapView provider={PROVIDER_GOOGLE} style={styles.map} />
		</View>
	);
}
const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	title: {
// 		fontSize: 20,
// 		fontWeight: "bold",
// 	},
// 	separator: {
// 		marginVertical: 30,
// 		height: 1,
// 		width: "80%",
// 	},
// });
