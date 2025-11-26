import { Button, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Animated, {
	useSharedValue,
	withSpring,
	EventHandler,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	toggleModal: () => void;
}

export default function BouncyButton({ children, toggleModal }: Props) {
	const width = useSharedValue(50);

	// const handlePress = () => {
	//   width.value = withSpring(width.value + 50);
	// };

	const pressed = useSharedValue<boolean>(false);

	const tap = Gesture.Tap()
		.onBegin(() => {
			pressed.value = true;
		})
		.onFinalize(() => {
			pressed.value = false;
		});

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [{ scale: withTiming(pressed.value ? 0.5 : 1) }],
	}));

	const styles = StyleSheet.create({
		box: {
			width: 150,
			height: 150,
			justifyContent: "center",
			alignItems: "center",
			alignSelf: "flex-end",
			marginRight: 10,
			shadowColor: "#111111ff",
			shadowOffset: { width: -2, height: 4 },
			borderRadius: 10,
			shadowOpacity: 0.1,
			shadowRadius: 3,
			elevation: 7,
		},
	});

	return (
		<TouchableOpacity onPress={toggleModal}>
			<GestureDetector gesture={tap}>
				<Animated.View style={[styles.box, animatedStyles]}>
					{children}
				</Animated.View>
			</GestureDetector>
		</TouchableOpacity>
	);
}
