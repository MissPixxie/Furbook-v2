import { FlatList, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { ThemeContext } from "@/constants/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { useFetchPlaces } from "@/apiFetch/useFetchPlaces";

import {
	useFonts,
	Manrope_800ExtraBold,
	Manrope_600SemiBold,
	Manrope_300Light,
	Manrope_200ExtraLight,
} from "@expo-google-fonts/manrope";
import { Place } from "@/constants/types";
import { PlaceItem } from "@/components/SmallPlaceItem";
import Create from "@/components/Create";
import BouncyBox from "@/components/BouncyBox";
import { Button } from "@rneui/themed/dist/Button";
import React from "react";
import EventsNearby from "@/components/Features/EventsNearby";
import ListOfEvents from "@/components/Events/ListOfEvents";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
//import { FlashList } from "@shopify/flash-list";
import { CreateEventModal } from "@/components/Events/CreateEventModal";
import { useFetchEvents } from "@/apiFetch/useFetchEvents";

export default function HomeScreen() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [data, setData] = useState();
	const { colors } = theme;
	let [fontsLoaded, fontError] = useFonts({
		Manrope_800ExtraBold,
		Manrope_600SemiBold,
		Manrope_300Light,
		Manrope_200ExtraLight,
	});
	const [modalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
		setModalVisible(!modalVisible);
	};
	// const speak = () => {
	// 	const thingToSay = "Morocco";
	// 	Speech.speak(thingToSay);
	// };

	const getUser = async () => {
		// const response = await fetch("http://localhost:8081/api/users/");
		// console.log(response);
		// const data = await response.json();
		// console.log(data);
		// setData(data);
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			rowGap: 15,
			backgroundColor: colors.background,
			padding: 8,
		},
		title: {
			fontSize: 20,
			color: colors.text,
		},
		text: {
			fontSize: 16,
			color: colors.text,
		},
		separator: {
			marginVertical: 30,
			height: 1,
			width: "80%",
			alignSelf: "center",
		},
	});

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{/* <Button title="test" onPress={speak} /> */}
				<View style={{ backgroundColor: colors.background }}>
					<Text style={{ fontSize: 20, color: colors.text }}>
						Create
					</Text>
					<View style={{ margin: "auto" }}>
						<Create />
					</View>
				</View>
				<View
					style={styles.separator}
					lightColor="green"
					darkColor="rgba(255,255,255,0.1)"
				/>
				<>
					<ListOfEvents />
				</>
			</ScrollView>
		</SafeAreaView>
	);
}
