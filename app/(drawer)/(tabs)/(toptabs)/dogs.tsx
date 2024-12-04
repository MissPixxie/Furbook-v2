import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { Dog } from "@/constants/types";
import { DogItem } from "@/components/Dogs/DogItem";
import { ThemeContext } from "@/constants/ThemeContext";
import { useFetchDogs } from "@/apiFetch/useFetchDogs";

const DogScreen = () => {
	const { theme } = useContext(ThemeContext);
	const { colors } = theme;
	const { dogsData, error } = useFetchDogs();

	const itemFromList = ({ item }: { item: Dog }) => {
		return <DogItem item={item} />;
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
	});

	return (
		<View accessible={true} style={styles.container}>
			<FlatList
				data={dogsData}
				renderItem={itemFromList}
				keyExtractor={(item) => item._id}
			/>
			<Text>Search dog screen</Text>
		</View>
	);
};

export default DogScreen;
