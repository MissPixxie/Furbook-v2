import React, { Children, createContext, useContext, useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import {
	View,
	Text,
	Pressable,
	StyleSheet,
	FlatList,
	Button,
	Image,
	Platform,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Place } from "../constants/types";
import { ThemeContext } from "@/constants/ThemeContext";
import {
	useFonts,
	Manrope_800ExtraBold,
	Manrope_600SemiBold,
	Manrope_300Light,
	Manrope_200ExtraLight,
} from "@expo-google-fonts/manrope";
import { useFetchPlaces } from "@/apiFetch/useFetchPlaces";
import { LinearGradient } from "expo-linear-gradient";
import DogAcceptedIcon from "./DogAcceptedIcon";

interface ItemProps {
	item: Place;
}

export const PlaceItem = ({ item }: ItemProps) => {
	const [isActive, setActive] = useState(false);
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { colors } = theme;

	let [fontsLoaded, fontError] = useFonts({
		Manrope_800ExtraBold,
		Manrope_600SemiBold,
		Manrope_300Light,
		Manrope_200ExtraLight,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	const styles = StyleSheet.create({
		postContainer: {
			width: "100%",
			marginVertical: 3,
			padding: 5,
			flexDirection: "row",
			backgroundColor: "#d5fcb6",
			borderRadius: 10,
			shadowColor: "#080808",
			shadowOffset: { width: -1, height: 2 },
			shadowOpacity: 0.3,
			shadowRadius: 2,
			elevation: 4,
		},
		imgAvatar: {
			borderRadius: 3,
			width: "30%",
			height: "auto",
		},
		textTitle: {
			fontFamily: "Manrope_800ExtraBold",
			color: colors.text,
			fontSize: 16,
		},
		textStyle: {
			color: colors.text,
			fontSize: 16,
		},
	});

	// Fix styling, cards big image
	return (
		<LinearGradient
			colors={["#d8fcbb", "#eaffd9"]}
			style={styles.postContainer}
		>
			<Image
				style={styles.imgAvatar}
				source={require("../assets/images/beach.jpg")}
			/>
			<View
				accessible={true}
				style={{
					flex: 1,
					flexDirection: "column",
					paddingHorizontal: 5,
					paddingVertical: 10,
				}}
			>
				<View
					accessible={true}
					style={{ marginLeft: 15, alignSelf: "flex-start" }}
				>
					<Text
						accessible={true}
						accessibilityLabel={item.name}
						style={styles.textTitle}
					>
						{item.name}
					</Text>
					<Text style={styles.textStyle}>{item.location}</Text>
					<Text
						style={{
							fontFamily: "Manrope_300Light",
							fontSize: 14,
							color: colors.text,
						}}
					>
						{item.category}
					</Text>
				</View>
			</View>
			<View
				style={{
					justifyContent: "space-between",
					alignItems: "center",
					marginRight: 10,
					marginVertical: 10,
				}}
			>
				<DogAcceptedIcon dogAccepted={item.isDogFriendly} />
				{isActive ? (
					<Entypo
						name="heart"
						size={24}
						color="black"
						style={{ alignSelf: "flex-end" }}
						onPress={() => {
							setActive((prevState) => !prevState);
						}}
					/>
				) : (
					<Entypo
						name="heart-outlined"
						size={24}
						color="black"
						style={{ alignSelf: "flex-end" }}
						onPress={() => {
							setActive((prevState) => !prevState);
						}}
					/>
				)}
			</View>
		</LinearGradient>
	);
};
