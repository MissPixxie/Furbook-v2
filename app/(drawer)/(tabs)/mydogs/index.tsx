import { AddDogModal } from "../../../../components/Dogs/AddDogModal";
import { CustomButton } from "@/components/Buttons/customButton";
import { DogItem } from "@/components/Dogs/DogItem";
import { Dog } from "@/constants/types";
import { ThemeContext } from "@/constants/ThemeContext";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import React from "react";
import {
	Button,
	FlatList,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import BouncyBox from "@/components/BouncyBox";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import BouncyButton from "@/components/Buttons/BouncyButton";
import { LinearGradient } from "expo-linear-gradient";
import { useFetchDogs } from "@/apiFetch/useFetchDogs";

export default function MyDogsScreen() {
	const [data, setData] = useState<Dog[]>();
	const router = useRouter();
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [updateFromDetailScreen, setUpdateFromDetailScreen] = useState(false);
	const [showAllImages, setShowAllImages] = useState(false);
	const { dogsData, error } = useFetchDogs();

	const { colors } = theme;

	const [modalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!modalVisible);
	};

	const updateWhenDogRemoved = (actionType: string, newState: boolean) => {
		if (actionType === "updated") {
			setUpdateFromDetailScreen(newState);
			useFetchDogs();
		} else {
			console.log("something went wrong");
		}
	};

	const styles = StyleSheet.create({
		container: {
			backgroundColor: colors.background,
			flex: 1,
		},
		flatList: {
			backgroundColor: colors.background,
		},
	});

	return (
		<SafeAreaView style={{ paddingHorizontal: 5 }}>
			<BouncyButton toggleModal={toggleModal}>
				<LinearGradient
					locations={[0.1, 0.9]}
					colors={["#d8fcbb", "#eaffd9"]}
					start={{ x: 0.1, y: 0.6 }}
					style={{
						borderRadius: 50,
						padding: 15,
					}}
				>
					<Feather name="plus" size={24} color="black" />
				</LinearGradient>
			</BouncyButton>
			<ScrollView style={{ marginBottom: 105 }}>
				<View accessible={true} style={styles.container}>
					<KeyboardAvoidingView behavior="padding">
						{modalVisible && (
							<AddDogModal
								closeModal={toggleModal}
								//addDog={addDog}
								updateFunction={useFetchDogs}
							/>
						)}
					</KeyboardAvoidingView>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text style={{ fontSize: 20, alignSelf: "flex-start" }}>
							My Dogs
						</Text>
						{dogsData?.map((dog) => (
							<TouchableOpacity
								key={dog._id}
								onPress={() => {
									router.push(`/mydogs/${dog._id}`);
								}}
							>
								<DogItem item={dog} />
							</TouchableOpacity>
						))}
					</View>
					<View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Text style={{ fontSize: 20 }}>Gallery</Text>
							<TouchableOpacity
								onPress={() => setShowAllImages(!showAllImages)}
							>
								<Text style={{ fontSize: 18, marginRight: 5 }}>
									See all
								</Text>
							</TouchableOpacity>
						</View>
						<ImageGallery showAllImages={showAllImages} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
