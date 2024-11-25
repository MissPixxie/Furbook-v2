import { LinearGradient, LinearGradientPoint } from "expo-linear-gradient";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

interface Props {
	children: React.ReactNode;
	title?: string;
	onPress?: () => void;
	bgColor?: any;
	color?: string;
	fontSize?: FontSize;
	icon?: any;
	flex?: number;
	flexDirection?: flexDirection;
	width?: number;
	height?: number;
	rowGap?: number;
	gradientColors: readonly [string, string, ...string[]];
	padding?: number;
	locations?: Array<number>;
	start?: LinearGradientPoint;
	marginVertical?: number;
}

type FontSize = 18 | 20 | 22 | 26 | 28 | 32;
type flexDirection = "row" | "column";

export const CustomCard = ({
	children,
	title,
	onPress,
	bgColor,
	color,
	fontSize = 22,
	icon,
	flex,
	flexDirection,
	width,
	height,
	gradientColors = ["#fff", "#000"],
	rowGap,
	padding = 20,
	locations,
	start,
	marginVertical,
}: Props) => {
	const styles = StyleSheet.create({
		linearGradient: {
			padding: padding,
			rowGap: rowGap,
			color: color,
			flex: flex,
			width: width,
			height: height,
			borderRadius: 10,
			shadowColor: "#171717",
			shadowOffset: { width: -2, height: 4 },
			shadowOpacity: 0.2,
			shadowRadius: 3,
			elevation: 3,
			marginVertical: marginVertical,
		},
		cardContainer: {
			backgroundColor: "transparent",
		},
	});

	return (
		<View style={styles.cardContainer}>
			<LinearGradient
				colors={gradientColors}
				style={styles.linearGradient}
			>
				{children}
			</LinearGradient>
		</View>
	);
};
