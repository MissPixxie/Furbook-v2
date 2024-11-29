import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import {
	router,
	Stack,
	useGlobalSearchParams,
	useLocalSearchParams,
	useNavigation,
} from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Dog } from "@/constants/types";
import { DogItem } from "@/components/Dogs/DogItem";
import { ThemeContext } from "@/constants/ThemeContext";
import MapView, { Provider, PROVIDER_GOOGLE } from "react-native-maps";
import MapScreen from "@/components/Features/MapView";

const useMapFeature = true;

// export default function DogScreen() {
// 	return (

// <View style={styles.container}>
// 	{useMapFeature ? (
// 		<MapView provider={PROVIDER_GOOGLE} style={styles.map} />
// 	) : (
// 		<View>
// 			<Text>Map Screen</Text>
// 		</View>
// 	)}
// </View>
//);
//}

export default function DogScreen() {
	const [data, setData] = useState();
	const { theme } = useContext(ThemeContext);
	const { colors } = theme;

	useEffect(() => {
		const getDogs = async () => {
			const res = await fetch("http://localhost:8081/api/dogs");
			const data = await res.json();
			console.log(data);
			setData(data);
		};
		getDogs();
	}, []);

	const itemFromList = ({ item }: { item: Dog }) => {
		return <DogItem item={item} />;
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
		map: {
			...StyleSheet.absoluteFillObject,
		},
	});
}
//   return (
//     <View accessible={true} style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={itemFromList}
//         keyExtractor={(item) => item._id}
//       />
//       <Text>Search dog screen</Text>
//     </View>
//   );
// };

// export default DogScreen;
