import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useFetchEvents } from "@/apiFetch/useFetchEvents";
import { EventItem } from "./EventItem";

export default function ListOfEvents() {
	const { eventsData, error } = useFetchEvents();

	return (
		<View style={{ marginBottom: 50 }}>
			{eventsData?.map((event) => (
				<TouchableOpacity key={event._id} onPress={() => {}}>
					<EventItem item={event} />
				</TouchableOpacity>
			))}
		</View>
	);
}
