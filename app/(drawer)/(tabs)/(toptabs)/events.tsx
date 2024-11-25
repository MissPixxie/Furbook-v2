import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Event } from "@/constants/types";
import { DogItem } from "@/components/Dogs/DogItem";
import { EventItem } from "@/components/Events/EventItem";
import { useFonts, Manrope_800ExtraBold } from "@expo-google-fonts/manrope";
import { ThemeContext } from "@/constants/ThemeContext";
import { useFetchEvents } from "@/apiFetch/useFetchEvents";
import React from "react";

const EventScreen = () => {
	const [data, setData] = useState();
	const { theme } = useContext(ThemeContext);
	const { colors } = theme;
	const { eventsData, error } = useFetchEvents();

	const itemFromList = ({ item }: { item: Event }) => {
		return <EventItem item={item} />;
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colors.background,
		},
	});

	return (
		<View accessible={true} style={styles.container}>
			<FlatList
				data={eventsData}
				renderItem={itemFromList}
				keyExtractor={(item) => item._id}
			/>
		</View>
	);
};

export default EventScreen;
