import { Button, View, StyleSheet } from "react-native";
import Animated, {
	useSharedValue,
	withSpring,
	EventHandler,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { ReactNode } from "react";
import React from "react";

interface Props {
	children: ReactNode;
	backgroundColor?: string;
}

export default function BouncyBox({ children, backgroundColor }: Props) {
	const width = useSharedValue(100);

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
			height: 100,
			width: 100,
			borderRadius: 5,
			backgroundColor: backgroundColor,
			shadowColor: "#1f1f1f",
			shadowOffset: { width: -2, height: 4 },
			shadowOpacity: 0.1,
			shadowRadius: 3,
			elevation: 2,
		},
	});

	return (
		<GestureDetector gesture={tap}>
			<Animated.View style={[styles.box, animatedStyles]}>
				{children}
			</Animated.View>
		</GestureDetector>
	);
}
