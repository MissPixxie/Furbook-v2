import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Event } from "@/constants/types";
import { useFetchEvents } from "@/apiFetch/useFetchEvents";
import { EventItem } from "./EventItem";

export default function ListOfEvents() {
	const { eventsData, error } = useFetchEvents();

	const itemFromList = ({ item }: { item: Event }) => {
		return <EventItem item={item} />;
	};

	return (
		<View
			style={{
				margin: "auto",
				width: "100%",
			}}
		>
			<FlatList
				data={eventsData}
				renderItem={itemFromList}
				keyExtractor={(item) => item._id}
				collapsable={true}
				style={{ maxHeight: 296 }}
			/>
		</View>
	);
}
