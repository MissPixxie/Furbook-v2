import MessageItem from "@/components/Messages/MessageItem";
import { Message } from "@/constants/types";
import { ThemeContext } from "@/constants/ThemeContext";
import { Link, Stack, useRouter } from "expo-router";
import { useCallback, useContext, useEffect, useState } from "react";
import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { dummyMessages } from "@/constants/dummyMessages";
import {
	Gesture,
	GestureDetector,
	TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";

export default function MessagesList() {
	const [data, setData] = useState<Message[] | null>(dummyMessages);
	const router = useRouter();
	const { theme, toggleTheme } = useContext(ThemeContext);

	const { colors } = theme;

	const itemFromList = ({ item }: { item: Message }) => {
		return (
			// <TouchableOpacity
			//   onPress={() => {
			//     router.navigate(`/messages/${item._id}`);
			//   }}
			// >
			<TouchableWithoutFeedback>
				<MessageItem item={item} shouldDismiss={handleRemoveCard} />
			</TouchableWithoutFeedback>
			//</TouchableOpacity>
		);
	};

	const handleRemoveCard = useCallback((message: string) => {
		setData((prev) => {
			if (prev != null) {
				return prev.filter((item) => item._id !== message);
			}
			return prev; // returnerar prev om det är null
		});
	}, []);

	const styles = StyleSheet.create({
		textTitle: {
			color: colors.text,
			fontSize: 20,
		},
		textStyle: {
			color: colors.text,
			fontSize: 16,
		},
		task: {
			width: "90%",
			justifyContent: "center",
			paddingLeft: 20,
		},
	});

	return (
		<View accessible={true} style={{ flex: 1 }}>
			<FlatList
				data={data}
				renderItem={itemFromList}
				keyExtractor={(item) => item._id}
			/>
		</View>
	);
}
