import { FlatList, StyleSheet, View, Text } from "react-native";
// import { Text, View } from "@/components/Themed";
// import {
//   router,
//   Stack,
//   useGlobalSearchParams,
//   useLocalSearchParams,
//   useNavigation,
// } from "expo-router";
// import { useContext, useEffect, useState } from "react";
// import { Dog } from "@/constants/types";
// import { DogItem } from "@/components/Dogs/DogItem";
// import { ThemeContext } from "@/constants/ThemeContext";
import MapView, { Provider, PROVIDER_GOOGLE } from "react-native-maps";

const useMapFeature = true;

export default function MapScreen() {
	return (
		<View style={{ flex: 1 }}>
			{useMapFeature ? (
				<View style={{ flex: 1 }}>
					<MapView
						provider={PROVIDER_GOOGLE}
						style={{ width: "100%", height: "100%" }}
					/>
				</View>
			) : (
				<View>
					<Text>Map Screen</Text>
				</View>
			)}
		</View>
	);
}

// const DogScreen = () => {
//   const [data, setData] = useState();
//   const { theme } = useContext(ThemeContext);
//   const { colors } = theme;

//   useEffect(() => {
//     const getDogs = async () => {
//       const res = await fetch("http://localhost:8081/api/dogs");
//       const data = await res.json();
//       console.log(data);
//       setData(data);
//     };
//     getDogs();
//   }, []);

//   const itemFromList = ({ item }: { item: Dog }) => {
//     return <DogItem item={item} />;
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: colors.background,
//     },
//   });

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
