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
} from "react-native";
import Animated from "react-native-reanimated";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Dog } from "../../constants/types";
import { ThemeContext } from "@/constants/ThemeContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

interface ItemProps {
	item: Dog;
}

export const DogItem = ({ item }: ItemProps) => {
	const [isVisable, setIsVisable] = useState(false);
	const [isActive, setActive] = useState(false);
	const { theme, toggleTheme } = useContext(ThemeContext);

	const { colors } = theme;

	const toggleSavedItems = () => {
		setActive((prevState) => !prevState);
	};

	const styles = StyleSheet.create({
		postContainer: {
			width: "99%",
			marginVertical: 10,
			flexDirection: "row",
			backgroundColor: colors.card,
			borderRadius: 10,
			padding: 3,
			shadowColor: "#080808",
			shadowOffset: { width: -1, height: 2 },
			shadowOpacity: 0.3,
			shadowRadius: 2,
			elevation: 4,
		},
		imgAvatar: {
			width: 100,
			height: 100,
			borderRadius: 10,
		},
	});

	return (
		<Animated.View accessible={true} style={styles.postContainer}>
			<Image
				style={styles.imgAvatar}
				source={require("../../assets/images/OGBUB40.jpg")}
			/>
			<View
				accessible={true}
				style={{ marginLeft: 15, alignSelf: "flex-start" }}
			>
				<Text style={{ fontSize: 20, color: colors.text }}>
					{item.name}
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "flex-start",
						alignItems: "center",
						marginLeft: 4,
					}}
				>
					{item.sex ? (
						<MaterialCommunityIcons
							name="gender-male"
							size={18}
							color="black"
						/>
					) : (
						<MaterialCommunityIcons
							name="gender-female"
							size={18}
							color="black"
						/>
					)}
					<Text
						style={{
							fontSize: 16,
							color: colors.text,
							marginLeft: 5,
						}}
					>
						{item.sex}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "flex-start",
						alignItems: "center",
						marginLeft: 4,
					}}
				>
					<FontAwesome6 name="dog" size={14} color="black" />
					<Text
						style={{
							fontSize: 16,
							color: colors.text,
							marginLeft: 5,
						}}
					>
						{item.breed}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "flex-start",
						alignItems: "center",
						marginLeft: 4,
					}}
				>
					<FontAwesome name="birthday-cake" size={14} color="black" />
					<Text
						style={{
							fontSize: 16,
							color: colors.text,
							marginLeft: 5,
						}}
					>
						{item.age}
					</Text>
				</View>
			</View>
			<Text
				style={{
					fontSize: 20,
					color: colors.text,
					flexGrow: 2,
					textAlign: "right",
					marginRight: 10,
					marginTop: 10,
				}}
			>
				<Entypo name="dots-three-horizontal" size={24} color="black" />
			</Text>
		</Animated.View>
	);
};
